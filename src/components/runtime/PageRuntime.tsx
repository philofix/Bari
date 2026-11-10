'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { bindLoops, bindParallax, bindStatementScrub } from '@/lib/behaviors/ambient';
import { bindGlobes } from '@/lib/behaviors/globe';
import { bindReveal } from '@/lib/behaviors/reveal';
import {
  bindChart, bindFaq, bindFilters, bindLanguageSwitch, bindLogoStrip, bindMailForms, bindScrollTo, bindSegments, bindTabs,
} from '@/lib/behaviors/widgets';
import { animate, EASE, motionOK, Scope } from '@/lib/motion';
import { currentPage, shouldPlayEnter } from '@/lib/navigation';

/**
 * Attaches the prototype's interactive behaviour to the server-rendered page markup.
 * Renders nothing; everything is torn down when the route changes.
 */
export function PageRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    const pg = currentPage();
    if (!pg) return;
    const scope = new Scope();
    const enter = shouldPlayEnter(pathname);

    for (const bind of [
      bindReveal, bindStatementScrub, bindScrollTo, bindLogoStrip, bindLanguageSwitch, bindChart,
      bindSegments, bindTabs, bindFilters, bindFaq, bindMailForms, bindLoops, bindParallax, bindGlobes,
    ]) bind(pg, scope);

    if (enter) {
      if (motionOK()) animate(pg, { opacity: [0, 1], y: [16, 0] }, { duration: 0.6, ease: EASE });
      const h1 = pg.querySelector('h1');
      if (h1) {
        h1.setAttribute('tabindex', '-1');
        h1.focus({ preventScroll: true });
      }
    }
    window.dispatchEvent(new Event('scroll'));
    return () => scope.dispose();
  }, [pathname]);

  return null;
}
