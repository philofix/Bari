import { Link } from '@/components/site/Link';

export function HeaderMarkup() {
  return (
    <header className="top">
      <div className="wrap nav">
        <Link className="logo" href="/" aria-label="Bari Technologies home">
          Bari
          <i>.</i>
        </Link>
        <nav className="navc" aria-label="Main">
          <Link href="/services" navCurrent>Services</Link>
          <Link href="/sectors" navCurrent>Sectors</Link>
          <Link href="/process" navCurrent>How we work</Link>
          <Link href="/work" navCurrent>Work</Link>
          <Link href="/about" navCurrent>About</Link>
          <Link href="/contact" navCurrent>Contact</Link>
        </nav>
        <div className="navr">
          <button type="button" className="ib thbtn" aria-label="Switch theme">
            <svg className="sun" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            <svg className="moon" viewBox="0 0 24 24">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
          <Link className="btn p" href="/contact">Start a project</Link>
          <button type="button" className="ib burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
            <svg viewBox="0 0 24 24">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
