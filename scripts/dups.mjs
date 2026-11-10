import { parse } from 'node-html-parser';
import fs from 'fs';
const root = parse(fs.readFileSync('prototype/index.html','utf8'));
const m = new Map();
for (const p of root.querySelectorAll('.page')) for (const s of p.childNodes.filter(n=>n.nodeType===1)) {
  const k = s.outerHTML; const norm = k.replace(/\b(id|for|aria-controls|aria-labelledby)="[^"]*"/g,'');
  const e = m.get(norm) || []; e.push(p.getAttribute('data-page') + ':' + (s.getAttribute('id')||s.getAttribute('class')) + (e.length && m.get(norm)[0].raw!==k ? '(ids differ)':'')); e.raw = e.raw||k; m.set(norm, e);
}
for (const [k,v] of m) if (v.length>1) console.log(v.join(' , '));
