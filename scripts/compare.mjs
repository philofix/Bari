// Visual regression: prototype (source of truth) vs. Next.js app.
// node scripts/compare.mjs [pages=all] [viewports=all] [--motion] [--dark]
import { chromium } from 'playwright-core';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import fs from 'fs';

const PROTO = process.env.PROTO || 'http://localhost:4100/';
const APP = process.env.APP || 'http://localhost:3000';
const PAGES = ['home', 'services', 'sectors', 'process', 'work', 'about', 'contact'];
const VPS = { mobile: [390, 844], tablet: [768, 1024], desktop: [1440, 900] };
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const pages = args[0] && args[0] !== 'all' ? args[0].split(',') : PAGES;
const vps = args[1] && args[1] !== 'all' ? args[1].split(',') : Object.keys(VPS);
const dark = process.argv.includes('--dark');
const OUT = '.compare';
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const HIDE = 'canvas{visibility:hidden!important} *{caret-color:transparent!important}';

async function shot(url, vp, file) {
  const ctx = await browser.newContext({ viewport: { width: vp[0], height: vp[1] }, deviceScaleFactor: 1, reducedMotion: 'reduce', colorScheme: dark ? 'dark' : 'light' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: HIDE });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  const dims = await page.evaluate(() => ({ h: document.documentElement.scrollHeight, w: document.documentElement.scrollWidth }));
  await page.screenshot({ path: file, fullPage: true });
  await ctx.close();
  return { ...dims, errors };
}

const rows = [];
for (const vpn of vps) for (const p of pages) {
  const vp = VPS[vpn];
  const a = `${OUT}/${p}-${vpn}-proto.png`, b = `${OUT}/${p}-${vpn}-app.png`;
  const ra = await shot(PROTO + (p === 'home' ? '' : '#' + p), vp, a);
  const rb = await shot(APP + (p === 'home' ? '/' : '/' + p), vp, b);
  const A = PNG.sync.read(fs.readFileSync(a)), B = PNG.sync.read(fs.readFileSync(b));
  const w = Math.max(A.width, B.width), h = Math.max(A.height, B.height);
  const pad = (img) => { if (img.width === w && img.height === h) return img; const o = new PNG({ width: w, height: h }); o.data.fill(255); PNG.bitblt(img, o, 0, 0, img.width, img.height, 0, 0); return o; };
  const PA = pad(A), PB = pad(B), D = new PNG({ width: w, height: h });
  const n = pixelmatch(PA.data, PB.data, D.data, w, h, { threshold: 0.1 });
  fs.writeFileSync(`${OUT}/${p}-${vpn}-diff.png`, PNG.sync.write(D));
  // first differing row, to locate problems quickly
  let firstY = -1;
  outer: for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const i = (y * w + x) * 4; if (D.data[i] === 255 && D.data[i + 1] === 0) { firstY = y; break outer; } }
  rows.push({ page: p, vp: vpn, protoH: A.height, appH: B.height, diffPx: n, pct: +(100 * n / (w * h)).toFixed(3), firstY, errs: ra.errors.length + '/' + rb.errors.length });
  if (rb.errors.length) console.log('APP ERRORS', p, vpn, rb.errors.slice(0, 3));
}
console.table(rows);
await browser.close();
