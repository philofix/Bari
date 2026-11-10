'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { THEME_EVENT } from '@/lib/behaviors/globe';
import { bindPress } from '@/lib/behaviors/reveal';
import { $, $$, animate, EASE, EASE_OUT, motionOK, Scope, stagger } from '@/lib/motion';
import { markNavigation, ROUTES, type PageName } from '@/lib/navigation';

type Theme = 'light' | 'dark';
const root = () => document.documentElement;

function isDark() {
  const t = root().getAttribute('data-theme');
  return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
}

function labelThemeButtons(t: Theme) {
  $$('.thbtn').forEach((b) => b.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'));
}

function applyTheme(t: Theme) {
  root().setAttribute('data-theme', t);
  try {
    localStorage.setItem('bari-theme', t);
  } catch {
    /* storage unavailable */
  }
  labelThemeButtons(t);
  window.dispatchEvent(new Event(THEME_EVENT));
}

/** Header, progress bar, theme switch and mobile drawer behaviour (persists across routes). */
export function ChromeRuntime() {
  const pathname = usePathname();
  const router = useRouter();

  // Legacy hash routes from the prototype (/#services) → real routes.
  useEffect(() => {
    const h = location.hash.slice(1) as PageName;
    if (pathname === '/' && h && h in ROUTES && h !== 'home') router.replace(ROUTES[h]);
  }, [pathname, router]);

  useEffect(() => {
    const scope = new Scope();
    const ok = motionOK();

    /* theme */
    if (!root().getAttribute('data-theme')) root().setAttribute('data-theme', isDark() ? 'dark' : 'light');
    labelThemeButtons(isDark() ? 'dark' : 'light');
    $$('.thbtn').forEach((b) =>
      scope.on(b, 'click', (e: MouseEvent) => {
        const next: Theme = isDark() ? 'light' : 'dark';
        if (document.startViewTransition && ok) {
          const x = e.clientX || innerWidth - 60, y = e.clientY || 40;
          const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
          const tr = document.startViewTransition(() => applyTheme(next));
          tr.ready
            .then(() => {
              root().animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
                { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)', pseudoElement: '::view-transition-new(root)' },
              );
            })
            .catch(() => {});
        } else applyTheme(next);
      }),
    );

    /* header state + reading progress */
    const top = $('.top'), prog = $('#prog');
    const onScroll = () => {
      top?.classList.toggle('sc', scrollY > 8);
      const m = document.documentElement.scrollHeight - innerHeight;
      if (prog) prog.style.transform = 'scaleX(' + (m > 0 ? scrollY / m : 0) + ')';
    };
    scope.on(window, 'scroll', onScroll, { passive: true });
    onScroll();

    /* drawer */
    const dr = $('#drawer'), bur = $('#burger'), close = $('#dclose');
    const panel = dr ? $('.dpanel', dr) : null;
    const setDrawer = (v: boolean) => {
      if (!dr || !bur || !panel) return;
      bur.setAttribute('aria-expanded', v ? 'true' : 'false');
      if (v) {
        dr.hidden = false;
        document.body.style.overflow = 'hidden';
        if (ok) {
          animate(dr, { opacity: [0, 1] }, { duration: 0.25 });
          animate(panel, { x: ['100%', '0%'] }, { duration: 0.45, ease: EASE });
          animate($$('.dl', dr), { opacity: [0, 1], x: [30, 0] }, { duration: 0.5, delay: stagger(0.05, { startDelay: 0.1 }), ease: EASE });
        }
        $('a', panel)?.focus();
      } else {
        document.body.style.overflow = '';
        if (ok) {
          animate(panel, { x: ['0%', '100%'] }, { duration: 0.3, ease: EASE_OUT });
          animate(dr, { opacity: [1, 0] }, { duration: 0.3 }).then(() => (dr.hidden = true));
        } else dr.hidden = true;
      }
    };
    if (dr && bur && close) {
      scope.on(bur, 'click', () => setDrawer(true));
      scope.on(close, 'click', () => {
        setDrawer(false);
        bur.focus();
      });
      scope.on(dr, 'click', (e: MouseEvent) => {
        if (e.target === dr) setDrawer(false);
      });
      $$('a', dr).forEach((a) => scope.on(a, 'click', () => setDrawer(false)));
      scope.on(window, 'keydown', (e: KeyboardEvent) => {
        if (e.key === 'Escape' && !dr.hidden) setDrawer(false);
      });
    }

    $$('.top .btn, .foot .btn, .drawer .btn').forEach((b) => bindPress(b, scope));

    /* browser back/forward also plays the enter transition */
    scope.on(window, 'popstate', () => markNavigation());

    return () => {
      scope.dispose();
      document.body.style.overflow = '';
    };
  }, []);

  // Page height changes on navigation; refresh the progress bar.
  useEffect(() => {
    const id = requestAnimationFrame(() => window.dispatchEvent(new Event('scroll')));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
