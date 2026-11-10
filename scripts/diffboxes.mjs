import { PNG } from 'pngjs'; import fs from 'fs';
const D = PNG.sync.read(fs.readFileSync(process.argv[2]));
const rows = new Map();
for (let y = 0; y < D.height; y++) { let xs=[]; for (let x = 0; x < D.width; x++) { const i=(y*D.width+x)*4; if (D.data[i]===255&&D.data[i+1]===0&&D.data[i+2]===0) xs.push(x);} if (xs.length) rows.set(y,[xs.length,Math.min(...xs),Math.max(...xs)]); }
// group consecutive rows
let groups=[],g=null; for (const [y,[n,a,b]] of rows) { if (g && y-g.y2<=12) { g.y2=y; g.n+=n; g.x1=Math.min(g.x1,a); g.x2=Math.max(g.x2,b);} else { g={y1:y,y2:y,n,x1:a,x2:b}; groups.push(g);} }
console.log(groups.slice(0,40).map(g=>`y${g.y1}-${g.y2} x${g.x1}-${g.x2} n=${g.n}`).join('\n'));
