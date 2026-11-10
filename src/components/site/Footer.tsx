import { Link } from '@/components/site/Link';

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="fgrid2">
          <div>
            <Link className="logo" href="/" aria-label="Bari Technologies home">
              Bari Technologies
              <i>.</i>
            </Link>
            <p className="t">Software that gives essential services a better start. Based in Shashemene, Ethiopia.</p>
            <div className="soc" aria-label="Social links, coming soon">
              <span title="LinkedIn">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.1c.5-1 1.9-2 3.9-2 4.1 0 4.7 2.7 4.7 6.2V21h-4v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V21h-4z" />
                </svg>
              </span>
              <span title="Telegram">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.5 3.3L2.9 10.5c-.9.4-.9 1.2-.2 1.4l4.7 1.5 1.8 5.6c.2.6.4.8.9.8s.7-.2 1-.5l2.3-2.3 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.2-.5-1.8-1.4-1.4z" />
                </svg>
              </span>
              <span title="Facebook">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8V6.4c0-.8.2-1.2 1.3-1.2H17V2h-2.7C11.3 2 10 3.7 10 6v2H7.5v3.2H10V22h4v-10.8h2.8L17.2 8z" />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/about">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>What we do</h4>
            <ul>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/sectors">Sectors</Link>
              </li>
              <li>
                <Link href="/process">How we work</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href="mailto:hamzsufian@gmail.com">hamzsufian@gmail.com</a>
              </li>
              <li>
                <a href="tel:+251977129003">+251 977 129 003</a>
              </li>
              <li>
                <span>Shashemene, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>© 2026 Bari Technologies. All rights reserved.</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
            Theme
            {" "}
            <button type="button" className="ib thbtn" aria-label="Switch theme">
              <svg className="sun" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
              <svg className="moon" viewBox="0 0 24 24">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            </button>
          </span>
        </div>
        <p className="huge" aria-hidden="true">
          Bari Technologies
          <i>.</i>
        </p>
      </div>
    </footer>
  );
}
