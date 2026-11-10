import { $, $$, animate, motionOK, Scope } from '@/lib/motion';

/**
 * The prototype indexed `.float` loops across the whole single-page document, so an
 * element's duration/direction depends on how many floats precede its page.
 * (.tw, .plane, .fli and .pin only appear on the home page, so their offset is 0.)
 */
const FLOAT_OFFSET: Record<string, number> = { services: 3, sectors: 11 };

/** Gentle infinite loops on decorative elements. */
export function bindLoops(pg: HTMLElement, scope: Scope) {
  if (!motionOK()) return;
  const fo = FLOAT_OFFSET[pg.dataset.page || ''] || 0;
  const loop = (els: HTMLElement[], kf: (k: number) => Record<string, number[]>, dur: (k: number) => number, delay?: (k: number) => number) =>
    els.forEach((el, k) =>
      scope.track(animate(el, kf(k), { duration: dur(k), repeat: Infinity, delay: delay ? delay(k) : 0, ease: 'easeInOut' })),
    );
  loop($$('.tw', pg), () => ({ opacity: [0.35, 1, 0.35], scale: [0.92, 1.12, 0.92] }), (k) => 3 + (k % 4) * 0.7, (k) => k * 0.35);
  loop($$('.plane', pg), () => ({ x: [0, 8, 0], y: [0, -8, 0], rotate: [0, 4, 0] }), () => 6);
  loop($$('.fli', pg), (k) => ({ y: [0, k % 2 ? 10 : -10, 0] }), (k) => 5 + k * 0.7);
  loop($$('.float', pg), (k) => ({ y: [0, (k + fo) % 2 ? 8 : -8, 0] }), (k) => 6 + k + fo);
  loop($$('.pin', pg), () => ({ y: [0, -6, 0] }), () => 3.5);
}

/** Hero chips follow the pointer (CSS reads --mx/--my). */
export function bindParallax(pg: HTMLElement, scope: Scope) {
  const st = $('.hcstage', pg);
  if (!motionOK() || !st) return;
  let raf = 0;
  scope.on(st, 'pointermove', (e: PointerEvent) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const r = st.getBoundingClientRect();
      st.style.setProperty('--mx', (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(3));
      st.style.setProperty('--my', (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(3));
    });
  });
  scope.on(st, 'pointerleave', () => {
    st.style.setProperty('--mx', '0');
    st.style.setProperty('--my', '0');
  });
  scope.add(() => cancelAnimationFrame(raf));
}

/** Statement paragraphs light up word-by-word as they scroll through the viewport. */
export function bindStatementScrub(pg: HTMLElement, scope: Scope) {
  if (!motionOK()) return;
  const stmts = $$('.stmt', pg).map((st) => ({ st, sw: $$('.sw', st) })).filter((s) => s.sw.length);
  if (!stmts.length) return;
  const scrub = () => {
    const vh = innerHeight;
    for (const { st, sw } of stmts) {
      const r = st.getBoundingClientRect();
      let p = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
      p = Math.max(0, Math.min(1, p));
      const n = sw.length, x = p * (n + 5);
      for (let i = 0; i < n; i++) {
        const o = Math.max(0, Math.min(1, (x - i) / 5)), h = parseFloat(sw[i].dataset.h || '1') || 1;
        sw[i].style.opacity = (0.14 + (h - 0.14) * o).toFixed(3);
      }
    }
  };
  scope.on(window, 'scroll', scrub, { passive: true });
  scrub();
}
