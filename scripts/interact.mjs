// Interaction parity: run identical scripted steps on prototype and app (motion ON), compare results.
import { chromium } from 'playwright-core';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import fs from 'fs';

const PROTO = 'http://localhost:4100/';
const APP = 'http://localhost:3000';
const OUT = '.compare/ix';
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const HIDE = 'canvas,.kd{visibility:hidden!important} *{caret-color:transparent!important}';
const url = (impl, p) => (impl === 'proto' ? PROTO + (p === 'home' ? '' : '#' + p) : APP + (p === 'home' ? '/' : '/' + p));

async function open(impl, p, vp = [1440, 900]) {
  const ctx = await browser.newContext({ viewport: { width: vp[0], height: vp[1] }, deviceScaleFactor: 1, colorScheme: 'light' });
  const page = await ctx.newPage();
  page.errors = [];
  page.on('console', (m) => m.type() === 'error' && !/favicon|404/.test(m.text()) && page.errors.push(m.text()));
  page.on('pageerror', (e) => page.errors.push(String(e)));
  await page.goto(url(impl, p), { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: HIDE });
  await page.evaluate(() => document.fonts.ready);
  return { ctx, page };
}

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const H = document.documentElement.scrollHeight;
    for (let y = 0; y < H; y += 300) { window.scrollTo({ top: y, behavior: 'instant' }); await new Promise((r) => setTimeout(r, 60)); }
    window.scrollTo({ top: H, behavior: 'instant' });
  });
  await page.waitForTimeout(2500);
}

function diff(a, b, name) {
  const A = PNG.sync.read(a), B = PNG.sync.read(b);
  if (A.width !== B.width || A.height !== B.height) return `size ${A.width}x${A.height} vs ${B.width}x${B.height}`;
  const D = new PNG({ width: A.width, height: A.height });
  const n = pixelmatch(A.data, B.data, D.data, A.width, A.height, { threshold: 0.1 });
  fs.writeFileSync(`${OUT}/${name}-diff.png`, PNG.sync.write(D));
  fs.writeFileSync(`${OUT}/${name}-proto.png`, a);
  fs.writeFileSync(`${OUT}/${name}-app.png`, b);
  return `${n}px (${((100 * n) / (A.width * A.height)).toFixed(3)}%)`;
}

const results = [];
async function scenario(name, p, steps, vp) {
  if (process.env.ONLY && !process.env.ONLY.split(',').some((o) => name.startsWith(o))) return;
  const out = {};
  for (const impl of ['proto', 'app']) {
    const { ctx, page } = await open(impl, p, vp);
    out[impl] = await steps(page, impl);
    out[impl].errors = page.errors;
    await ctx.close();
  }
  const row = { name };
  for (const k of Object.keys(out.proto)) {
    if (k === 'errors') continue;
    const a = out.proto[k], b = out.app[k];
    row[k] = Buffer.isBuffer(a) ? diff(a, b, `${name}-${k}`) : JSON.stringify(a) === JSON.stringify(b) ? `same ${JSON.stringify(a).slice(0, 60)}` : `DIFF proto=${JSON.stringify(a)} app=${JSON.stringify(b)}`;
  }
  row.errors = `${out.proto.errors.length}/${out.app.errors.length} ${out.app.errors.slice(0, 2).join(' | ')}`;
  results.push(row);
  console.log(row);
}

const el = (page, sel) => page.locator('.page:not([hidden]) ' + sel).first().screenshot();

for (const p of ['home', 'services', 'sectors', 'process', 'work', 'about', 'contact']) {
  await scenario(`reveal-${p}`, p, async (page) => {
    await scrollThrough(page);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(1200);
    const hiddenRv = await page.evaluate(() => [...document.querySelectorAll('.page:not([hidden]) .rv')].filter((e) => getComputedStyle(e).opacity !== '1').map((e) => e.className + '@' + (e.closest('section')?.id || e.closest('section')?.className)));
    const hiddenWords = await page.evaluate(() => [...document.querySelectorAll('.page:not([hidden]) .wi')].filter((e) => !/none|matrix\(1, 0, 0, 1, 0, 0\)/.test(getComputedStyle(e).transform)).length);
    const counts = await page.evaluate(() => [...document.querySelectorAll('.page:not([hidden]) [data-count]')].map((e) => e.textContent));
    return { hiddenRv, hiddenWords, counts };
  });
}

const FREEZE = '.float,.fli,.pin,.plane,.tw,.kl,.mock{transform:none!important;translate:none!important;opacity:1!important} .grad .wi,.sun,.ring,.arcs *,.dawnsec .bl,.art .st,.kcard *{animation:none!important} .tw{opacity:1!important} .lcell,.ticks i{transition:none!important}';
for (const [p, vp] of [['home', [1440, 900]], ['services', [1440, 900]], ['sectors', [1440, 900]], ['process', [1440, 900]], ['work', [1440, 900]], ['about', [1440, 900]], ['contact', [1440, 900]], ['home', [390, 844]]]) {
  await scenario(`final-${p}-${vp[0]}`, p, async (page) => {
    await scrollThrough(page);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(3000);
    await page.addStyleTag({ content: FREEZE });
    // logo strip cycles on a timer; pin it to the first cell in both
    await page.evaluate(() => document.querySelectorAll('.page:not([hidden]) .lcell').forEach((c) => c.dispatchEvent(new PointerEvent('pointerenter'))));
    await page.evaluate(() => document.querySelector('.page:not([hidden]) .lcell')?.dispatchEvent(new PointerEvent('pointerenter')));
    await page.waitForTimeout(300);
    return { shot: await page.screenshot({ fullPage: true }) };
  }, vp);
}

await scenario('plans-toggle', 'home', async (page) => {
  await page.locator('.page:not([hidden]) #plans').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1800);
  await page.locator('.page:not([hidden]) #plans .seg button').nth(1).click();
  await page.waitForTimeout(1200);
  const texts = await page.$$eval('.page:not([hidden]) #plans [data-a]', (els) => els.map((e) => e.textContent));
  const pressed = await page.$$eval('.page:not([hidden]) #plans .seg button', (els) => els.map((e) => e.getAttribute('aria-pressed')));
  return { texts, pressed, shot: await el(page, '#plans .seg') };
});

await scenario('faq', 'home', async (page) => {
  await page.locator('.page:not([hidden]) .fql').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1800);
  await page.locator('.page:not([hidden]) .fql .fqb').nth(2).click();
  await page.waitForTimeout(900);
  const exp = await page.$$eval('.page:not([hidden]) .fql .fqb', (els) => els.map((e) => e.getAttribute('aria-expanded')));
  const hid = await page.$$eval('.page:not([hidden]) .fql .fqp', (els) => els.map((e) => e.hidden));
  return { exp, hid, shot: await el(page, '.fql') };
});

await scenario('language', 'home', async (page) => {
  await page.locator('.page:not([hidden]) #lcard').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1800);
  await page.locator('.page:not([hidden]) .lps button[data-l="am"]').click();
  await page.waitForTimeout(900);
  return { text: await page.locator('.page:not([hidden]) #lcard').innerText(), lang: await page.locator('.page:not([hidden]) #lcard').getAttribute('lang'), shot: await el(page, '#lcard') };
});

await scenario('chart-hover', 'home', async (page) => {
  const ch = page.locator('.page:not([hidden]) .chart').first();
  await ch.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2500);
  const box = await ch.boundingBox();
  await page.mouse.move(box.x + box.width * 0.3, box.y + box.height / 2);
  await page.waitForTimeout(300);
  return { tip: await page.locator('.page:not([hidden]) .chart .ctip').first().innerText(), left: await page.locator('.page:not([hidden]) .chart .cur').first().evaluate((e) => e.style.left) };
});

await scenario('sector-tabs', 'sectors', async (page) => {
  await page.waitForTimeout(1500);
  await page.locator('.page:not([hidden]) #st3').click();
  await page.waitForTimeout(400);
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(3000);
  const sel = await page.$$eval('.page:not([hidden]) [role=tab]', (els) => els.map((e) => e.getAttribute('aria-selected')));
  const vis = await page.$$eval('.page:not([hidden]) .spanel', (els) => els.map((e) => !e.hidden));
  const focus = await page.evaluate(() => document.activeElement.id);
  return { sel, vis, focus, shot: await el(page, '#sp4') };
});

await scenario('work-filter', 'work', async (page) => {
  await page.waitForTimeout(1500);
  await page.locator('.page:not([hidden]) .filters button[data-f="health"]').click();
  await page.waitForTimeout(2500);
  const vis = await page.$$eval('.page:not([hidden]) .wc[data-s]', (els) => els.map((e) => !e.hidden));
  return { vis, shot: await el(page, '.wcards') };
});

await scenario('contact-form', 'contact', async (page) => {
  await page.waitForTimeout(1500);
  const msgSel = '.page:not([hidden]) form[data-mail] .fmsg';
  await page.locator('.page:not([hidden]) form[data-mail] button[type=submit], .page:not([hidden]) form[data-mail] .btn').first().click();
  const m1 = await page.locator(msgSel).innerText();
  await page.fill('.page:not([hidden]) #ce', 'not-an-email');
  await page.locator('.page:not([hidden]) form[data-mail] button[type=submit], .page:not([hidden]) form[data-mail] .btn').first().click();
  const m2 = await page.locator(msgSel).innerText();
  const focused = await page.evaluate(() => document.activeElement.id);
  return { m1, m2, focused };
});

await scenario('drawer', 'home', async (page) => {
  await page.locator('#burger').click();
  await page.waitForTimeout(900);
  const open = await page.evaluate(() => !document.getElementById('drawer').hidden && document.body.style.overflow);
  const shot = await page.screenshot();
  await page.keyboard.press('Escape');
  await page.waitForTimeout(700);
  const closed = await page.evaluate(() => document.getElementById('drawer').hidden);
  return { open, closed, shot };
}, [390, 844]);

await scenario('theme', 'home', async (page) => {
  await page.locator('.top .thbtn').click();
  await page.waitForTimeout(1200);
  const t = await page.evaluate(() => [document.documentElement.dataset.theme, localStorage.getItem('bari-theme'), document.querySelector('.thbtn').getAttribute('aria-label')]);
  return { t, shot: await page.screenshot() };
});

await scenario('nav', 'home', async (page, impl) => {
  await page.waitForTimeout(800);
  await page.getByRole('link', { name: 'Work', exact: true }).first().click();
  await page.waitForTimeout(1500);
  const title = await page.title();
  const cur = await page.$$eval('.navc a', (els) => els.map((e) => e.getAttribute('aria-current')));
  const focus = await page.evaluate(() => document.activeElement.tagName);
  const y = await page.evaluate(() => scrollY);
  const opacity = await page.evaluate(() => getComputedStyle(document.querySelector('.page:not([hidden])')).opacity);
  return { title, cur, focus, y, opacity };
});

await browser.close();
fs.writeFileSync(`${OUT}/results.json`, JSON.stringify(results, null, 2));
