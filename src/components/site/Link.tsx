'use client';

import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { animate, EASE_OUT, motionOK } from '@/lib/motion';
import { currentPage, markNavigation } from '@/lib/navigation';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  /** Mark with aria-current="page" when the link points at the current route (main nav + drawer). */
  navCurrent?: boolean;
};

/**
 * Internal link that reproduces the prototype's page transition:
 * the current page fades up and out (220ms) before the next route renders.
 */
export function Link({ href, navCurrent, onClick, children, ...rest }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const active = pathname === href;

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (active) return; // same page: the prototype router ignores it
    markNavigation();
    const page = currentPage();
    if (page && motionOK()) {
      animate(page, { opacity: [1, 0], y: [0, -10] }, { duration: 0.22, ease: EASE_OUT }).then(() => router.push(href));
    } else router.push(href);
  };

  return (
    <NextLink href={href} onClick={handle} aria-current={navCurrent && active ? 'page' : undefined} {...rest}>
      {children}
    </NextLink>
  );
}
