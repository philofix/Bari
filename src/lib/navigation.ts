/** Routes, titles and client navigation bookkeeping shared by the chrome and page runtimes. */
export const ROUTES = {
  home: '/',
  services: '/services',
  sectors: '/sectors',
  process: '/process',
  work: '/work',
  about: '/about',
  contact: '/contact',
} as const;

export type PageName = keyof typeof ROUTES;

export const TITLES: Record<PageName, string> = {
  home: 'Bari Technologies · Software for essential services',
  services: 'Services · Bari Technologies',
  sectors: 'Sectors · Bari Technologies',
  process: 'How we work · Bari Technologies',
  work: 'Work · Bari Technologies',
  about: 'About · Bari Technologies',
  contact: 'Contact · Bari Technologies',
};

export const DESCRIPTION =
  'Bari Technologies designs, builds and supports software for schools, clinics, operators, businesses and public offices in Ethiopia.';

let pendingNavigation = false;
let lastEnteredPath: string | null = null;

/** Called before a client-side route change so the next page plays its enter transition. */
export function markNavigation() {
  pendingNavigation = true;
}

/** True once per newly entered path after a client-side navigation (not on first load). */
export function shouldPlayEnter(path: string): boolean {
  const play = pendingNavigation && lastEnteredPath !== path;
  if (lastEnteredPath !== path) pendingNavigation = false;
  lastEnteredPath = path;
  return play;
}

export function currentPage(): HTMLElement | null {
  return document.querySelector<HTMLElement>('#main .page');
}
