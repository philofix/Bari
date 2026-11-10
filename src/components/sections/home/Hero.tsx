import type { CSSProperties } from 'react';
import { Link } from '@/components/site/Link';
import content from '@/content/placeholders.json';

export function Hero() {
  return (
    <section className="hero">
      <div className="bgg" aria-hidden="true">
        <i className="g1" />
        <i className="g2" />
      </div>
      <div className="hcstage">
        <div className="sunbox" aria-hidden="true">
          <div className="sun" />
        </div>
        <div className="floats" data-group="" aria-hidden="true">
          <div className="fl" style={{ top: "15%", left: "2.2%", "--dx": "14", "--dy": "10" } as CSSProperties}>
            <div className="flm rv">
              <div className="fli">
                <span className="fic">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
                    <path d="M4 21V5" />
                    <path d="M8 7h7" />
                  </svg>
                </span>
                <span>
                  <b>Education</b>
                  <small>Attendance 94%</small>
                </span>
              </div>
            </div>
          </div>
          <div className="fl" style={{ top: "43%", left: "0.6%", "--dx": "20", "--dy": "-8" } as CSSProperties}>
            <div className="flm rv">
              <div className="fli">
                <span className="fic">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3a14 14 0 0 1 0 18" />
                    <path d="M12 3a14 14 0 0 0 0 18" />
                  </svg>
                </span>
                <span>
                  <b>3 languages</b>
                  <small>Afaan Oromoo · አማርኛ</small>
                </span>
              </div>
            </div>
          </div>
          <div className="fl" style={{ top: "71%", left: "4.5%", "--dx": "12", "--dy": "14" } as CSSProperties}>
            <div className="flm rv">
              <div className="fli">
                <span className="fic">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z" />
                  </svg>
                </span>
                <span>
                  <b>Health</b>
                  <small>12 waiting</small>
                </span>
              </div>
            </div>
          </div>
          <div className="fl" style={{ top: "17%", right: "3.4%", "--dx": "-14", "--dy": "10" } as CSSProperties}>
            <div className="flm rv">
              <div className="fli">
                <span className="fic">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="15" rx="2" />
                    <path d="M4 11h16" />
                    <path d="M7 21v-3" />
                    <path d="M17 21v-3" />
                  </svg>
                </span>
                <span>
                  <b>Transport</b>
                  <small>Seat 41/52 · Boarding</small>
                </span>
              </div>
            </div>
          </div>
          <div className="fl" style={{ top: "46%", right: "1%", "--dx": "-20", "--dy": "-8" } as CSSProperties}>
            <div className="flm rv">
              <div className="fli">
                <span className="fic">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M3 10h18" />
                    <path d="M12 3l9 7H3z" />
                    <path d="M6 10v8" />
                    <path d="M10 10v8" />
                    <path d="M14 10v8" />
                    <path d="M18 10v8" />
                  </svg>
                </span>
                <span>
                  <b>Government</b>
                  <small>Permit approved</small>
                </span>
                <span className="okc" style={{ width: "16px", height: "16px", marginLeft: "4px" }}>
                  <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="fl" style={{ top: "73%", right: "5.5%", "--dx": "-12", "--dy": "14" } as CSSProperties}>
            <div className="flm rv">
              <div className="fli">
                <span className="fic">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="20" r="1.4" />
                    <circle cx="18" cy="20" r="1.4" />
                    <path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21 7H6" />
                  </svg>
                </span>
                <span>
                  <b>E-commerce</b>
                  <small>New order · paid</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap hcin">
          <span className="badge rv">
            <i>B</i>
            Built in Ethiopia, for essential services
          </span>
          <h1 className="disp h1c">
            <span className="ln" data-split="">
              <span className="w"><span className="wi">A</span></span>
              {" "}
              <span className="w"><span className="wi">better</span></span>
              {" "}
              <span className="w"><span className="wi">start</span></span>
            </span>
            <span className="ln grad" data-split="">
              <span className="w"><span className="wi">for</span></span>
              {" "}
              <span className="w"><span className="wi">every</span></span>
              {" "}
              <span className="w"><span className="wi">service.</span></span>
            </span>
          </h1>
          <p className="lead rv">Bari designs, builds and supports software for schools, clinics, operators, businesses and public offices, in the languages and conditions they work in.</p>
          <div className="hbtns rv">
            <Link className="btn p" href="/contact">
              Start a project
              {" "}
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link className="btn o" href="/services">Explore services</Link>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="lstrip rv">
          <div className="lb">
            <span>Building with institutions across every sector</span>
          </div>
          <div className="lcells">
            <div className="lcell">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
              </svg>
              <span>{content.logoStrip[0].name}</span>
            </div>
            <div className="lcell">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
                <path d="M12 4l7 4v8l-7 4-7-4V8z" fill="currentColor" />
              </svg>
              <span>{content.logoStrip[1].name}</span>
            </div>
            <div className="lcell">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
                <rect x="5" y="5" width="8" height="8" fill="currentColor" />
                <rect x="11" y="11" width="8" height="8" fill="currentColor" opacity=".55" />
              </svg>
              <span>{content.logoStrip[2].name}</span>
            </div>
            <div className="lcell">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
                <path d="M12 4l8 15H4z" fill="currentColor" />
              </svg>
              <span>{content.logoStrip[3].name}</span>
            </div>
            <div className="lcell">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
                <rect x="5" y="11" width="3.4" height="8" fill="currentColor" />
                <rect x="10.3" y="6" width="3.4" height="13" fill="currentColor" />
                <rect x="15.6" y="9" width="3.4" height="10" fill="currentColor" />
              </svg>
              <span>{content.logoStrip[4].name}</span>
            </div>
            <div className="lcell">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
                <path d="M5 19c0-8 5-13 14-14 0 9-5 14-14 14z" fill="currentColor" />
              </svg>
              <span>{content.logoStrip[5].name}</span>
            </div>
            <div className="lcell">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
                <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z" fill="currentColor" />
              </svg>
              <span>{content.logoStrip[6].name}</span>
            </div>
          </div>
          <div className="ticks" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
