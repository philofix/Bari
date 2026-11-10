// One-off converter: turns the static HTML prototype into TSX section components.
// Usage: node scripts/convert.mjs prototype/index.html
// The prototype is the source of truth; this keeps the markup 1:1 instead of retyping it.
import { parse } from 'node-html-parser';
import fs from 'fs';
import path from 'path';

const SRC = process.argv[2] || 'prototype/index.html';
const OUT = 'src/components';
const html = fs.readFileSync(SRC, 'utf8');
const root = parse(html, { comment: false, voidTag: { closingSlash: true } });

const PAGES = { home: '/', services: '/services', sectors: '/sectors', process: '/process', work: '/work', about: '/about', contact: '/contact' };

const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', autocomplete: 'autoComplete', novalidate: 'noValidate',
  readonly: 'readOnly', maxlength: 'maxLength', crossorigin: 'crossOrigin', 'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink',
  'xml:space': 'xmlSpace', spellcheck: 'spellCheck', colspan: 'colSpan', rowspan: 'rowSpan', enctype: 'encType',
};
const BOOL = new Set(['hidden', 'required', 'disabled', 'checked', 'selected', 'autofocus', 'multiple', 'novalidate', 'readonly']);
const VOID = new Set(['input', 'br', 'img', 'hr', 'meta', 'link', 'source', 'wbr', 'col', 'area']);

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
const jsStr = (v) => (/["\\\n]/.test(v) || /[{}]/.test(v) ? `{${JSON.stringify(v)}}` : `"${v}"`);

function styleObj(css) {
  const parts = [];
  let depth = 0, cur = '';
  for (const ch of css) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && !depth) { parts.push(cur); cur = ''; } else cur += ch;
  }
  parts.push(cur);
  const props = parts.map((p) => p.trim()).filter(Boolean).map((p) => {
    const i = p.indexOf(':');
    let k = p.slice(0, i).trim();
    const v = p.slice(i + 1).trim();
    if (!k.startsWith('--')) k = k.startsWith('-webkit-') ? 'Webkit' + camel(k.slice(8)).replace(/^./, (c) => c.toUpperCase()) : camel(k);
    return `${/^[a-zA-Z]+$/.test(k) ? k : JSON.stringify(k)}: ${JSON.stringify(v)}`;
  });
  const hasVar = props.some((p) => p.startsWith('"--'));
  return `{{ ${props.join(', ')} }${hasVar ? ' as CSSProperties' : ''}}`;
}

// ---- word splitting, mirroring the prototype's split()/splitStmt() at build time ----
function splitText(text, mk) {
  const out = [];
  for (const p of text.split(/(\s+)/)) {
    if (!p) continue;
    if (/^\s+$/.test(p)) out.push({ ws: true });
    else out.push(mk(p));
  }
  return out;
}

let usesCSS = false;
let usesLink = false;

function attrsOf(el, ctx) {
  const raw = el.rawAttributes;
  const tag = el.rawTagName.toLowerCase();
  const out = [];
  for (let [k, v] of Object.entries(raw)) {
    const lk = k.toLowerCase();
    if (v !== null && v !== undefined) v = el.getAttribute(k); // decoded
    if (lk === 'style') { out.push(`style=${styleObj(v)}`); if (/--/.test(v)) usesCSS = true; continue; }
    if (tag === 'a' && lk === 'href' && v && v.startsWith('#') && PAGES[v.slice(1)] !== undefined) {
      out.push(`href="${PAGES[v.slice(1)]}"`);
      continue;
    }
    if (ctx.idPrefix && (lk === 'id' || lk === 'aria-controls' || lk === 'aria-labelledby' || lk === 'for') && v && v.startsWith(ctx.idPrefix.from)) {
      const name = lk === 'for' ? 'htmlFor' : lk === 'id' ? 'id' : lk;
      out.push(`${name}={\`\${idPrefix}${v.slice(ctx.idPrefix.from.length)}\`}`);
      continue;
    }
    if (tag === 'input' && lk === 'value') { out.push(`defaultValue=${jsStr(v)}`); continue; }
    if (tag === 'input' && lk === 'checked') { out.push('defaultChecked'); continue; }
    let name = ATTR[lk] || (lk.startsWith('aria-') || lk.startsWith('data-') ? lk : k.includes('-') ? camel(k) : k);
    if (v === null || v === undefined) {
      out.push(BOOL.has(lk) ? name : `${name}=""`);
    } else if (lk === 'tabindex') {
      out.push(`tabIndex={${Number(v)}}`);
    } else out.push(`${name}=${jsStr(v)}`);
  }
  return out;
}

function emitChildren(nodes, ctx, ind) {
  const parts = [];
  for (const n of nodes) {
    const s = emit(n, ctx, ind);
    if (s !== null) parts.push(...(Array.isArray(s) ? s : [s]));
  }
  return parts;
}

function emitText(text, ind) {
  // Collapse runs like HTML does; preserve edge whitespace explicitly.
  if (!text) return null;
  if (/^\s+$/.test(text)) return `${ind}{" "}`;
  const lead = /^\s/.test(text), trail = /\s$/.test(text);
  const body = esc(text.trim().replace(/[ \t\n\r\f]+/g, ' '));
  const out = [];
  if (lead) out.push(`${ind}{" "}`);
  out.push(ind + body);
  if (trail) out.push(`${ind}{" "}`);
  return out;
}

function emit(n, ctx, ind) {
  if (n.nodeType === 3) {
    const t = n.text;
    if (ctx.split) {
      const pieces = splitText(t, (w) =>
        ctx.split === 'stmt'
          ? `${ind}<span className="sw" data-h="${ctx.h}">${esc(w)}</span>`
          : `${ind}<span className="w"><span className="wi">${esc(w)}</span></span>`);
      return pieces.map((p) => (p.ws ? `${ind}{" "}` : p));
    }
    return emitText(t, ind);
  }
  if (n.nodeType !== 1) return null;
  const tag = n.rawTagName;
  const lt = tag.toLowerCase();
  if (lt === 'script' || lt === 'style') return null;
  let c = { ...ctx };
  const cls = (n.getAttribute('class') || '').split(/\s+/);
  if (!c.split && n.hasAttribute('data-split')) c.split = 'word';
  if (!c.split && cls.includes('stmt')) { c.split = 'stmt'; c.h = 1; }
  if (c.split === 'stmt' && cls.includes('dim')) c.h = 0.5;
  if (c.split === 'word' && cls.includes('w')) c = { ...ctx, split: null };

  let JTag = tag;
  const attrs = attrsOf(n, c);
  if (lt === 'a') {
    const href = n.getAttribute('href') || '';
    if (href.startsWith('#') && PAGES[href.slice(1)] !== undefined) {
      JTag = 'Link';
      usesLink = true;
      const inNav = n.closest && (n.closest('.navc') || cls.includes('dl'));
      if (inNav) attrs.push('navCurrent');
    }
  }
  let kids = n.childNodes;
  if (lt === 'textarea') {
    const val = n.text;
    if (val) attrs.push(`defaultValue=${jsStr(val)}`);
    kids = [];
  }
  if (lt === 'select') {
    const sel = n.querySelectorAll('option').find((o) => o.hasAttribute('selected'));
    if (sel) attrs.push(`defaultValue=${jsStr(sel.getAttribute('value') ?? sel.text)}`);
  }
  if (lt === 'option') {
    const i = attrs.indexOf('selected');
    if (i > -1) attrs.splice(i, 1);
  }
  const a = attrs.length ? ' ' + attrs.join(' ') : '';
  const children = VOID.has(lt) ? [] : emitChildren(kids, c, ind + '  ');
  if (!children.length) return `${ind}<${JTag}${a} />`;
  if (children.length === 1 && !children[0].trim().startsWith('<') && !children[0].trim().startsWith('{'))
    return `${ind}<${JTag}${a}>${children[0].trim()}</${JTag}>`;
  return [`${ind}<${JTag}${a}>`, ...children, `${ind}</${JTag}>`];
}

function component(name, el, { idPrefix, wrap = true } = {}) {
  usesCSS = false; usesLink = false;
  const nodes = wrap ? [el] : el;
  const body = emitChildren(nodes, { idPrefix }, '    ').join('\n');
  const imports = [];
  if (usesCSS) imports.push(`import type { CSSProperties } from 'react';`);
  if (usesLink) imports.push(`import { Link } from '@/components/site/Link';`);
  const sig = idPrefix ? `{ idPrefix = '${idPrefix.from}' }: { idPrefix?: string }` : '';
  const multi = nodes.filter((n) => n.nodeType === 1).length > 1;
  return `${imports.join('\n')}${imports.length ? '\n\n' : ''}export function ${name}(${sig}) {\n  return (\n${multi ? '    <>\n' + body.replace(/^/gm, '  ') + '\n    </>' : body}\n  );\n}\n`;
}

function pascal(s) {
  return s.replace(/[’'.,?]/g, '').split(/[^a-zA-Z0-9]+/).filter(Boolean).slice(0, 4).map((w) => w[0].toUpperCase() + w.slice(1)).join('');
}

function write(file, src) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, src);
}

// ---- site chrome ----
const body = root.querySelector('body');
const bodyEls = body.childNodes.filter((n) => n.nodeType === 1 && n.rawTagName !== 'script');
const noise = bodyEls[0];
const header = root.querySelector('header.top');
const drawer = root.querySelector('#drawer');
const footer = root.querySelector('footer.foot');
write(`${OUT}/site/NoiseFilter.tsx`, component('NoiseFilter', noise));
write(`${OUT}/site/HeaderMarkup.tsx`, component('HeaderMarkup', header));
write(`${OUT}/site/DrawerMarkup.tsx`, component('DrawerMarkup', drawer));
write(`${OUT}/site/Footer.tsx`, component('Footer', footer));

// ---- shared sections (identical markup modulo id prefixes) ----
const SHARED = [
  { name: 'Plans', test: (s) => s.getAttribute('id') === 'plans' },
  { name: 'Faq', test: (s) => !!s.querySelector('.fql'), idPrefix: true },
  { name: 'DawnCta', test: (s) => s.classList.contains('dawnsec') && /build what comes next/.test(s.text) },
];
const RENAME = {
  'home:Section': 'TeamTeaser', 'services:Section': 'ServiceDetails', 'services:EightServicesOneTeam': 'ServicesOverview',
  'services:ConnectsWithTheTools': 'Integrations', 'services:ProvenTechnologyBuiltFor': 'TechStack',
  'sectors:Section': 'SectorTabs', 'sectors:WhatChangesWhenThe': 'Outcomes', 'sectors:TheSameStrongFoundations': 'Foundations',
  'work:Section': 'CaseStudies', 'work:EveryCaseStudyAnswers': 'CaseStudyFormat', 'work:WantToBeOur': 'WorkCta',
  'about:Section': 'VisionMission', 'about:WhyWeStartedBari': 'Story', 'about:WhatWeStandFor': 'Values',
  'about:RootedInShashemeneWorking': 'Location', 'about:HowWeWorkWith': 'Principles',
  'contact:Section': 'ContactForm', 'contact:ThreeStepsToA': 'NextSteps',
};
const sharedDone = new Set();
const manifest = {};

for (const p of root.querySelectorAll('.page')) {
  const page = p.getAttribute('data-page');
  const used = new Set();
  const list = [];
  for (const s of p.childNodes.filter((n) => n.nodeType === 1)) {
    const sh = SHARED.find((x) => x.test(s));
    if (sh) {
      let prefix = null;
      if (sh.idPrefix) {
        const id = s.querySelector('[id]').getAttribute('id');
        prefix = id[0];
      }
      if (!sharedDone.has(sh.name)) {
        sharedDone.add(sh.name);
        write(`${OUT}/sections/shared/${sh.name}.tsx`, component(sh.name, s, prefix ? { idPrefix: { from: prefix } } : {}));
      }
      list.push({ name: sh.name, shared: true, prefix });
      continue;
    }
    const h = s.querySelector('h1,h2');
    let name = s.getAttribute('id') ? pascal(s.getAttribute('id')) : '';
    if (s.classList.contains('hero') || s.classList.contains('phero')) name = 'Hero';
    if (!name && h) name = pascal(h.text);
    if (!name) name = 'Section';
    name = RENAME[`${page}:${name}`] || name;
    let n = name, i = 2;
    while (used.has(n)) n = name + i++;
    used.add(n);
    write(`${OUT}/sections/${page}/${n}.tsx`, component(n, s));
    list.push({ name: n });
  }
  manifest[page] = { attrs: p.rawAttributes, sections: list };
}

// ---- page composers ----
for (const [page, m] of Object.entries(manifest)) {
  const imports = m.sections.map((s) => s.shared
    ? `import { ${s.name} } from '@/components/sections/shared/${s.name}';`
    : `import { ${s.name} } from '@/components/sections/${page}/${s.name}';`);
  const uniq = [...new Set(imports)];
  const els = m.sections.map((s) => `      <${s.name}${s.prefix ? ` idPrefix="${s.prefix}"` : ''} />`).join('\n');
  const comp = page[0].toUpperCase() + page.slice(1) + 'Page';
  write(`${OUT}/pages/${comp}.tsx`, `${uniq.join('\n')}\nimport { PageRuntime } from '@/components/runtime/PageRuntime';\n\nexport function ${comp}() {\n  return (\n    <div className="page" data-page="${page}">\n${els}\n      <PageRuntime />\n    </div>\n  );\n}\n`);
}
fs.writeFileSync('scripts/manifest.json', JSON.stringify(manifest, null, 2));
console.log('done', Object.fromEntries(Object.entries(manifest).map(([k, v]) => [k, v.sections.map((s) => s.name).join(',')])));
