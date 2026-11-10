import { parse } from 'node-html-parser';
import fs from 'fs';
const html = fs.readFileSync(process.argv[2], 'utf8');
const root = parse(html, { comment: false });
const pages = root.querySelectorAll('.page');
for (const p of pages) {
  console.log('PAGE', p.getAttribute('data-page'), p.outerHTML.length);
  for (const s of p.childNodes.filter(n => n.nodeType === 1)) {
    const h = s.querySelector('h1,h2');
    console.log('  ', s.tagName.toLowerCase(), JSON.stringify(s.getAttribute('class')), s.getAttribute('id') || '', s.outerHTML.length, '|', (h ? h.text : '').slice(0, 70));
  }
}
console.log(root.querySelector('footer').outerHTML.length);
