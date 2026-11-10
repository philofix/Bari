import { $$, motionOK, Scope } from '@/lib/motion';

export const THEME_EVENT = 'bari:theme';

type Dot = { la: number; lo: number; s: number };
const RAD = Math.PI / 180;

/** Dotted canvas globes (small rotating `.globe`, large Ethiopia-focused `.bigglobe` with a pin). */
function mkGlobe(cv: HTMLCanvasElement, pg: HTMLElement, scope: Scope) {
  const cx = cv.getContext('2d');
  if (!cx) return null;
  const D = Math.min(2, window.devicePixelRatio || 1), big = cv.classList.contains('bigglobe');
  const step = big ? 3.2 : 8, dens = big ? 120 : 48;
  const dots: Dot[] = [];
  for (let la = -84; la <= 84; la += step) {
    const n = Math.max(1, Math.round(dens * Math.cos(la * RAD)));
    for (let k = 0; k < n; k++) dots.push({ la: la * RAD, lo: (k / n) * 2 * Math.PI, s: Math.random() });
  }
  let vis = false, raf = 0;

  const draw = (t: number) => {
    const w = cv.width, h = cv.height, R = w * 0.47, c = w / 2;
    cx.clearRect(0, 0, w, h);
    const hi = getComputedStyle(document.documentElement).getPropertyValue('--globe').trim() || '#7ea6ff';
    const base = big ? -38.6 * RAD : 0, rot = big ? base + Math.sin(t * 0.00012) * 0.07 : t * 0.00016, tilt = big ? -40 * RAD : 0;
    const ct = Math.cos(tilt), stt = Math.sin(tilt);
    for (const d of dots) {
      const x = Math.cos(d.la) * Math.sin(d.lo + rot), y0 = Math.sin(d.la), z0 = Math.cos(d.la) * Math.cos(d.lo + rot);
      const y = y0 * ct - z0 * stt, z = y0 * stt + z0 * ct;
      if (z < 0) continue;
      const r = (big ? 0.8 + 1.5 * z : 1.1 + 1.7 * z) * D;
      let near = 0;
      if (big) {
        const dla = d.la - 7.2 * RAD;
        let dlo = d.lo - 38.6 * RAD;
        dlo = Math.atan2(Math.sin(dlo), Math.cos(dlo));
        const dist = Math.sqrt(dla * dla + dlo * dlo * Math.cos(d.la) * Math.cos(d.la));
        near = Math.max(0, 1 - dist / 0.55);
      }
      const lit = Math.sin(t * 0.0014 + d.s * 60) > (big ? 0.96 : 0.9);
      cx.beginPath();
      cx.arc(c + x * R, c - y * R, r * (1 + near * 0.6), 0, 6.283);
      if (near > 0) { cx.globalAlpha = 0.35 + 0.65 * near * z; cx.fillStyle = hi; }
      else if (lit) { cx.globalAlpha = 0.55 + 0.45 * z; cx.fillStyle = hi; }
      else { cx.globalAlpha = (big ? 0.06 : 0.12) + (big ? 0.28 : 0.32) * z; cx.fillStyle = '#ffffff'; }
      cx.fill();
    }
    cx.globalAlpha = 1;
    if (big) {
      const pn = pg.querySelector<HTMLElement>('#pin');
      if (pn && cv.parentElement) {
        const la = 7.2 * RAD, lo = 38.6 * RAD;
        const px = Math.cos(la) * Math.sin(lo + rot), py0 = Math.sin(la), pz0 = Math.cos(la) * Math.cos(lo + rot), py = py0 * ct - pz0 * stt;
        const cr = cv.getBoundingClientRect(), wr = cv.parentElement.getBoundingClientRect(), sc = cr.width / w;
        pn.style.left = cr.left - wr.left + (c + px * R) * sc + 'px';
        pn.style.top = cr.top - wr.top + (c - py * R) * sc - 10 + 'px';
      }
    }
  };
  const size = () => {
    const r = cv.getBoundingClientRect();
    if (!r.width) return;
    cv.width = r.width * D;
    cv.height = r.height * D;
  };
  const loop = (t: number) => {
    draw(t);
    if (vis) raf = requestAnimationFrame(loop);
  };
  size();
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      vis = es[0].isIntersecting;
      if (vis && motionOK()) {
        cancelAnimationFrame(raf);
        loop(performance.now());
      } else draw(performance.now());
    });
    io.observe(cv);
    scope.add(() => io.disconnect());
  }
  scope.add(() => { vis = false; cancelAnimationFrame(raf); });
  return { size, draw };
}

export function bindGlobes(pg: HTMLElement, scope: Scope) {
  const globes = $$<HTMLCanvasElement>('canvas.globe, canvas.bigglobe', pg)
    .map((cv) => mkGlobe(cv, pg, scope))
    .filter((g): g is NonNullable<typeof g> => !!g);
  if (!globes.length) return;
  const now = () => performance.now();
  globes.forEach((g) => { g.size(); g.draw(now()); });
  scope.on(window, 'resize', () => globes.forEach((g) => { g.size(); g.draw(now()); }));
  scope.on(window, THEME_EVENT, () => globes.forEach((g) => g.draw(now())));
}
