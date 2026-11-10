import { $, $$, animate, EASE, motionOK, prefersReducedMotion, Scope, stagger } from '@/lib/motion';

const CONTACT_EMAIL = 'hamzsufian@gmail.com';

/** Buttons with data-to scroll to an in-page section. */
export function bindScrollTo(pg: HTMLElement, scope: Scope) {
  $$('[data-to]', pg).forEach((b) =>
    scope.on(b, 'click', () => {
      const t = document.getElementById(b.dataset.to || '');
      if (t) t.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }),
  );
}

/** Logo strip: auto-advancing highlight with tick marks. */
export function bindLogoStrip(pg: HTMLElement, scope: Scope) {
  $$('.lstrip', pg).forEach((ls) => {
    const cells = $$('.lcell', ls), tk = $$('.ticks i', ls);
    let li = 0, hov = false;
    const on = (i: number) => {
      cells.forEach((c, k) => c.classList.toggle('on', k === i));
      const n = tk.length, per = n / cells.length, s = Math.round(i * per), e = Math.round((i + 1) * per);
      tk.forEach((t, k) => t.classList.toggle('on', k >= s + Math.round(per * 0.25) && k < e - Math.round(per * 0.25)));
    };
    cells.forEach((c, k) => {
      scope.on(c, 'pointerenter', () => { hov = true; on(k); });
      scope.on(c, 'pointerleave', () => { hov = false; });
    });
    on(0);
    if (motionOK()) {
      const id = window.setInterval(() => {
        if (hov) return;
        const vis = cells.filter((c) => c.offsetParent !== null).length || cells.length;
        li = (li + 1) % vis;
        on(li);
      }, 2200);
      scope.add(() => window.clearInterval(id));
    }
  });
}

const LANGS: Record<string, { t: string; r: [string, string][] }> = {
  om: { t: 'Baga nagaan dhuftan', r: [['Har’a', 'Today'], ['Barbaadi', 'Search'], ['Ergi', 'Send']] },
  am: { t: 'እንኳን ደህና መጡ', r: [['ዛሬ', 'Today'], ['ፈልግ', 'Search'], ['ላክ', 'Send']] },
  en: { t: 'Welcome', r: [['Today', 'Today'], ['Search', 'Search'], ['Send', 'Send']] },
};

/** Language preview switch (Afaan Oromoo / Amharic / English). */
export function bindLanguageSwitch(pg: HTMLElement, scope: Scope) {
  const btns = $$('.lps button', pg);
  btns.forEach((b) =>
    scope.on(b, 'click', () => {
      const k = b.dataset.l || 'en', d = LANGS[k];
      btns.forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
      const c = $('#lcard', pg);
      if (!c || !d) return;
      const put = () => {
        const t = $('.t', c);
        if (t) t.textContent = d.t;
        $$('.r', c).forEach((r, i) => { const bb = $('b', r); if (bb) bb.textContent = d.r[i][0]; });
        c.setAttribute('lang', k);
      };
      if (motionOK()) {
        animate(c, { opacity: [1, 0], y: [0, -6] }, { duration: 0.15 }).then(() => {
          put();
          animate(c, { opacity: [0, 1], y: [8, 0] }, { duration: 0.4, ease: EASE });
        });
      } else put();
    }),
  );
}

/** Requests chart: cursor + tooltip follow the pointer. */
export function bindChart(pg: HTMLElement, scope: Scope) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  $$('.chart', pg).forEach((ch) => {
    const cu = $('.cur', ch), tip = $('.ctip', ch);
    const pts: number[] = JSON.parse(ch.dataset.pts || '[]');
    if (!cu || !tip || !pts.length) return;
    const at = (fx: number) => {
      const w = ch.clientWidth, i = Math.max(0, Math.min(pts.length - 1, Math.round(fx * (pts.length - 1))));
      cu.style.left = (i / (pts.length - 1)) * (w - 40) + 20 + 'px';
      const b = $('b', tip), s = $('small', tip);
      if (b) b.textContent = pts[i] + ' requests';
      if (s) s.textContent = days[i % 7] + ', week 12';
    };
    scope.on(ch, 'pointermove', (e: PointerEvent) => {
      const r = ch.getBoundingClientRect();
      at((e.clientX - r.left - 20) / (r.width - 40));
    });
    at(0.86);
  });
}

/** Segmented toggle (plans: one-off vs. monthly) swapping data-a/data-b copy. */
export function bindSegments(pg: HTMLElement, scope: Scope) {
  $$('.seg', pg).forEach((sg) => {
    const bs = $$('button', sg), ind = $('.ind', sg), sc = sg.closest('section') || pg;
    let mode = 0;
    if (!ind) return;
    const place = (i: number, inst?: boolean) => {
      const b = bs[i];
      ind.style.width = b.offsetWidth + 'px';
      if (inst || !motionOK()) ind.style.transform = 'translateX(' + b.offsetLeft + 'px)';
      else animate(ind, { x: b.offsetLeft }, { type: 'spring', stiffness: 420, damping: 34 });
    };
    bs.forEach((b, k) =>
      scope.on(b, 'click', () => {
        if (k === mode) return;
        mode = k;
        bs.forEach((x, j) => x.setAttribute('aria-pressed', j === k ? 'true' : 'false'));
        place(k);
        $$('[data-a]', sc).forEach((el) => {
          const t = (k ? el.dataset.b : el.dataset.a) || '';
          if (motionOK()) {
            animate(el, { opacity: [1, 0] }, { duration: 0.15 }).then(() => {
              el.textContent = t;
              animate(el, { opacity: [0, 1], y: [6, 0] }, { duration: 0.35, ease: EASE });
            });
          } else el.textContent = t;
        });
      }),
    );
    const fit = () => { if (sg.offsetParent) place(mode, true); };
    scope.on(window, 'resize', fit);
    let alive = true;
    scope.add(() => (alive = false));
    document.fonts?.ready.then(() => alive && fit());
    const t = window.setTimeout(fit, 60);
    scope.add(() => window.clearTimeout(t));
  });
}

/** Accessible tabs (sectors) with arrow-key navigation. */
export function bindTabs(pg: HTMLElement, scope: Scope) {
  $$('[data-tabs]', pg).forEach((tl) => {
    const bs = $$('[role="tab"]', tl);
    const sel = (i: number) =>
      bs.forEach((b, k) => {
        b.setAttribute('aria-selected', k === i ? 'true' : 'false');
        b.tabIndex = k === i ? 0 : -1;
        const p = document.getElementById(b.getAttribute('aria-controls') || '');
        if (p) {
          p.hidden = k !== i;
          if (k === i && motionOK()) animate(p, { opacity: [0, 1], y: [14, 0] }, { duration: 0.5, ease: EASE });
        }
      });
    bs.forEach((b, k) => {
      scope.on(b, 'click', () => sel(k));
      scope.on(b, 'keydown', (e: KeyboardEvent) => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        const n = (k + d + bs.length) % bs.length;
        sel(n);
        bs[n].focus();
      });
    });
  });
}

/** Work filters: show cards whose data-s matches. */
export function bindFilters(pg: HTMLElement, scope: Scope) {
  $$('.filters', pg).forEach((f) => {
    const bs = $$('button', f), cards = $$('.wc[data-s]', f.parentElement || pg);
    bs.forEach((b) =>
      scope.on(b, 'click', () => {
        bs.forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
        const s = b.dataset.f;
        const vis: HTMLElement[] = [];
        cards.forEach((c) => {
          const on = s === 'all' || c.dataset.s === s;
          c.hidden = !on;
          if (on) vis.push(c);
        });
        if (motionOK()) animate(vis, { opacity: [0, 1], scale: [0.97, 1] }, { duration: 0.45, delay: stagger(0.05), ease: EASE });
      }),
    );
  });
}

/** FAQ accordion: one item open at a time, animated height. */
export function bindFaq(pg: HTMLElement, scope: Scope) {
  $$('.fql', pg).forEach((list) => {
    const fqs = $$('.fq', list);
    const parts = (f: HTMLElement) => ({ b: $('.fqb', f)!, p: $('.fqp', f)! });
    const cl = (f: HTMLElement) => {
      const { b, p } = parts(f);
      b.setAttribute('aria-expanded', 'false');
      if (motionOK()) {
        const h = p.offsetHeight;
        animate(p, { height: [h + 'px', '0px'] }, { duration: 0.35, ease: EASE }).then(() => {
          p.hidden = true;
          p.style.height = '';
        });
      } else p.hidden = true;
    };
    const op = (f: HTMLElement) => {
      const { b, p } = parts(f);
      b.setAttribute('aria-expanded', 'true');
      p.hidden = false;
      if (motionOK()) {
        const h = p.scrollHeight;
        animate(p, { height: ['0px', h + 'px'] }, { duration: 0.45, ease: EASE }).then(() => (p.style.height = 'auto'));
      }
    };
    fqs.forEach((f) => {
      const btn = $('.fqb', f);
      if (!btn) return;
      scope.on(btn, 'click', () => {
        const o = btn.getAttribute('aria-expanded') === 'true';
        fqs.forEach((x) => { if (x !== f && $('.fqb', x)?.getAttribute('aria-expanded') === 'true') cl(x); });
        if (o) cl(f);
        else op(f);
      });
    });
  });
}

/** Contact forms open the visitor's mail app with a pre-filled enquiry. */
export function bindMailForms(pg: HTMLElement, scope: Scope) {
  $$<HTMLFormElement>('form[data-mail]', pg).forEach((fm) => {
    const msg = $('.fmsg', fm) || (fm.parentElement ? $('.chint', fm.parentElement) : null);
    scope.on(fm, 'submit', (e: SubmitEvent) => {
      e.preventDefault();
      const em = $<HTMLInputElement>('input[type=email]', fm);
      if (!em) return;
      if (!em.value.trim() || !em.checkValidity()) {
        if (msg) msg.textContent = 'Enter a valid email address so we can reply.';
        em.focus();
        return;
      }
      const f = new FormData(fm), lines = ['Hello Bari team,', ''];
      const g = (k: string) => (f.get(k) as string | null) || '';
      if (g('name')) lines.push('Name: ' + g('name'));
      lines.push('Email: ' + g('email'));
      if (g('org')) lines.push('Organisation: ' + g('org'));
      if (g('sector')) lines.push('Sector: ' + g('sector'));
      lines.push('');
      lines.push(g('msg') || 'I would like to discuss a project.');
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(lines.join('\n'))}`;
      if (msg) msg.textContent = 'Thank you. Your email app should open with your message ready to send.';
    });
  });
}
