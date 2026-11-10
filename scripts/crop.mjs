// node scripts/crop.mjs in.png out.png x y w h
import { PNG } from 'pngjs'; import fs from 'fs';
const [i,o,x,y,w,h]=process.argv.slice(2); const S=PNG.sync.read(fs.readFileSync(i));
const W=Math.min(+w,S.width-x), H=Math.min(+h,S.height-y); const O=new PNG({width:W,height:H}); PNG.bitblt(S,O,+x,+y,W,H,0,0); fs.writeFileSync(o,PNG.sync.write(O));
