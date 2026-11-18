import emailjs from '@emailjs/browser';
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

async function sendViaEmailJs(data: { name: string; email: string; org: string; sector: string; msg: string }) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (
    !serviceId ||
    !templateId ||
    !publicKey ||
    serviceId === 'your_emailjs_service_id' ||
    templateId === 'your_emailjs_template_id' ||
    publicKey === 'your_emailjs_public_key'
  ) {
    throw new Error('EmailJS is not configured.');
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.name || 'Anonymous',
      name: data.name || 'Anonymous',
      from_email: data.email,
      email: data.email,
      reply_to: data.email,
      organization: data.org || 'Not specified',
      org: data.org || 'Not specified',
      sector: data.sector || 'Not specified',
      message: data.msg || 'I would like to discuss a project.',
      to_email: CONTACT_EMAIL,
    },
    {
      publicKey,
    },
  );
}

/** Contact forms send via EmailJS with a confirmation dialog & mailto fallback. */
export function bindMailForms(pg: HTMLElement, scope: Scope) {
  const dialog = $<HTMLElement>('#contact-dialog', pg);
  const box = dialog ? $<HTMLElement>('.cmodal-box', dialog) : null;
  const nameEl = dialog ? $<HTMLElement>('#cd-name', dialog) : null;
  const emailEl = dialog ? $<HTMLElement>('#cd-email', dialog) : null;
  const closeBtn = dialog ? $<HTMLElement>('#cd-close', dialog) : null;
  const okBtn = dialog ? $<HTMLElement>('#cd-ok', dialog) : null;

  const closeDialog = () => {
    if (!dialog || dialog.hidden) return;
    if (motionOK() && box) {
      animate(box, { opacity: [1, 0], scale: [1, 0.95], y: [0, 8] }, { duration: 0.2, ease: EASE }).then(() => {
        dialog.hidden = true;
      });
    } else {
      dialog.hidden = true;
    }
  };

  const openDialog = (name: string, email: string) => {
    if (!dialog) return;
    if (nameEl) nameEl.textContent = name ? `, ${name}` : '';
    if (emailEl) emailEl.textContent = email || 'your email';
    dialog.hidden = false;
    if (motionOK() && box) {
      animate(box, { opacity: [0, 1], scale: [0.93, 1], y: [16, 0] }, { duration: 0.35, ease: EASE });
    }
    okBtn?.focus();
  };

  if (dialog) {
    if (closeBtn) scope.on(closeBtn, 'click', closeDialog);
    if (okBtn) scope.on(okBtn, 'click', closeDialog);
    scope.on(dialog, 'click', (e: MouseEvent) => {
      if (e.target === dialog) closeDialog();
    });
    scope.on(window, 'keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !dialog.hidden) closeDialog();
    });
  }

  $$<HTMLFormElement>('form[data-mail]', pg).forEach((fm) => {
    const msg = $('.fmsg', fm) || (fm.parentElement ? $('.chint', fm.parentElement) : null);
    const submitBtn = $<HTMLButtonElement>('button[type=submit]', fm);

    scope.on(fm, 'submit', async (e: SubmitEvent) => {
      e.preventDefault();
      const em = $<HTMLInputElement>('input[type=email]', fm);
      if (!em) return;
      if (!em.value.trim() || !em.checkValidity()) {
        if (msg) {
          msg.textContent = 'Enter a valid email address so we can reply.';
          msg.style.color = 'var(--accenttext, #b91c1c)';
        }
        em.focus();
        return;
      }

      const f = new FormData(fm);
      const g = (k: string) => ((f.get(k) as string | null) || '').trim();
      const payload = {
        name: g('name'),
        email: g('email'),
        org: g('org'),
        sector: g('sector'),
        msg: g('msg'),
      };

      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="spin" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          Sending message...
        `;
      }

      if (msg) {
        msg.textContent = 'Sending message...';
        msg.style.color = 'var(--muted)';
      }

      try {
        await sendViaEmailJs(payload);
        fm.reset();
        if (msg) {
          msg.textContent = 'Thank you! Your message has been sent successfully.';
          msg.style.color = 'var(--ok, #3f8f5f)';
        }
        openDialog(payload.name, payload.email);
      } catch (err) {
        console.error('EmailJS error:', err);
        // Fallback to client mail app if EmailJS is not configured or network fails
        const lines = ['Hello Bari team,', ''];
        if (payload.name) lines.push('Name: ' + payload.name);
        lines.push('Email: ' + payload.email);
        if (payload.org) lines.push('Organisation: ' + payload.org);
        if (payload.sector) lines.push('Sector: ' + payload.sector);
        lines.push('');
        lines.push(payload.msg || 'I would like to discuss a project.');
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(lines.join('\n'))}`;
        if (msg) {
          msg.textContent = 'Email client opened with your message ready to send.';
          msg.style.color = 'var(--muted)';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    });
  });
}
