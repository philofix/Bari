import { $, $$, animate, EASE, inView, motionOK, Scope, SPRING, stagger } from '@/lib/motion';

type AnimOpts = Parameters<typeof animate>[2];

function rise(els: Element | Element[], extra?: Record<string, unknown>) {
  animate(els as HTMLElement[], { opacity: [0, 1], y: [26, 0] }, { duration: 0.85, ease: EASE, ...(extra || {}) } as AnimOpts);
}

/** Button press feedback (scale on pointer down, spring back). */
export function bindPress(b: HTMLElement, scope: Scope) {
  if (!motionOK() || b.dataset.pr) return;
  b.dataset.pr = '1';
  scope.add(() => delete b.dataset.pr);
  scope.on(b, 'pointerdown', () => void animate(b, { scale: 0.96 }, { duration: 0.12 }));
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) scope.on(b, ev, () => void animate(b, { scale: 1 }, SPRING));
}

/** KPI coverage card: drifting dots, line growth, pills sliding in. */
function bindKpi(kp: HTMLElement, scope: Scope) {
  const dots: HTMLElement[] = [];
  for (let q = 0; q < 18; q++) {
    const d = document.createElement('i');
    d.className = 'kd';
    kp.appendChild(d);
    dots.push(d);
  }
  scope.add(() => dots.forEach((d) => d.remove()));
  scope.add(
    inView(
      kp,
      () => {
        kp.classList.add('go');
        const line = $('.kline', kp);
        if (line) animate(line, { transform: ['scaleY(0)', 'scaleY(1)'] }, { duration: 1.1, ease: EASE });
        const top = $('.ktop', kp);
        if (top) animate(top, { opacity: [0, 1], y: [-30, 0] }, { type: 'spring', stiffness: 240, damping: 18, delay: 0.45 });
        $$('.kp', kp).forEach((p, k) => {
          animate(p, { opacity: [0, 1], x: [46, 0] }, { duration: 0.7, delay: 0.9 + k * 0.13, ease: EASE });
          const okc = $('.okc', p);
          if (okc) animate(okc, { scale: [0, 1] }, { type: 'spring', stiffness: 420, damping: 14, delay: 1.3 + k * 0.13 });
        });
        dots.forEach((dd) => {
          const w = kp.clientWidth, h = kp.clientHeight;
          const x0 = w * (0.08 + Math.random() * 0.3), y0 = h * (0.22 + Math.random() * 0.6);
          dd.style.left = x0 + 'px';
          dd.style.top = y0 + 'px';
          scope.track(
            animate(dd, { x: [0, w * 0.455 - x0], opacity: [0, 0.95, 0] }, {
              duration: 3 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut',
            }),
          );
        });
      },
      { amount: 0.35 },
    ),
  );
  $$('.kl', kp).forEach((l, k) => {
    scope.track(animate(l, { x: [0, k % 2 ? -10 : 10, 0] }, { duration: 7 + k, repeat: Infinity, ease: 'easeInOut' }));
  });
}

/**
 * Port of the prototype's bindPage(): word reveals, grouped reveals, counters,
 * fills, bar growth, `.go` triggers, hover lifts, button presses and KPI cards.
 * Word splitting itself is precomputed in the markup.
 */
export function bindReveal(pg: HTMLElement, scope: Scope) {
  if (!motionOK()) return;

  $$('[data-split]', pg).forEach((h) => {
    const w = $$('.wi', h);
    scope.add(
      inView(h, () => {
        animate(w, { transform: ['translateY(115%)', 'translateY(0%)'] }, { duration: 0.95, delay: stagger(0.05), ease: EASE });
      }, { margin: '0px 0px -8% 0px' }),
    );
  });

  $$('[data-group]', pg).forEach((g) => {
    const k = $$('.rv', g).filter((e) => e.closest('[data-group]') === g);
    scope.add(inView(g, () => { rise(k, { delay: stagger(0.08) }); }, { margin: '0px 0px -10% 0px' }));
  });

  $$('.rv', pg)
    .filter((e) => !e.closest('[data-group]'))
    .forEach((e) => scope.add(inView(e, () => { rise(e); }, { margin: '0px 0px -8% 0px' })));

  $$('[data-count]', pg).forEach((c) => {
    const to = Number(c.dataset.to), suf = c.dataset.suf || '';
    const original = c.textContent;
    c.textContent = '0' + suf;
    scope.add(() => (c.textContent = original));
    scope.add(
      inView(c, () => {
        animate(0, to, { duration: 1.5, ease: EASE, onUpdate: (v: number) => (c.textContent = Math.round(v).toLocaleString('en-US') + suf) });
      }),
    );
  });

  $$('[data-fill]', pg).forEach((f) => {
    const v = f.dataset.fill;
    f.style.width = '0%';
    scope.add(inView(f, () => { animate(f, { width: ['0%', v + '%'] }, { duration: 1.5, delay: 0.2, ease: EASE }); }));
  });

  $$('[data-grow]', pg).forEach((g) => {
    const b = $$('i', g);
    b.forEach((x) => {
      x.style.transform = 'scaleY(0)';
      x.style.transformOrigin = 'bottom';
    });
    scope.add(
      inView(g, () => {
        animate(b, { transform: ['scaleY(0)', 'scaleY(1)'] }, { duration: 0.9, delay: stagger(0.07, { startDelay: 0.2 }), ease: EASE });
      }),
    );
  });

  $$('[data-go]', pg).forEach((g) => scope.add(inView(g, () => { g.classList.add('go'); }, { amount: 0.35 })));

  $$('[data-hover]', pg).forEach((el) => {
    scope.on(el, 'pointerenter', () => void animate(el, { y: -6 }, SPRING));
    scope.on(el, 'pointerleave', () => void animate(el, { y: 0 }, SPRING));
  });

  $$('.btn', pg).forEach((b) => bindPress(b, scope));
  $$('.kcard', pg).forEach((k) => bindKpi(k, scope));
}
