import type { CSSProperties } from 'react';
import { Link } from '@/components/site/Link';

export function Build() {
  return (
    <section className="sec" id="build">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">What we build</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">Software</span></span>
              {" "}
              <span className="w"><span className="wi">that</span></span>
              {" "}
              <span className="w"><span className="wi">fits</span></span>
              {" "}
              <span className="w"><span className="wi">how</span></span>
              {" "}
              <span className="w"><span className="wi">you</span></span>
              {" "}
              <span className="w"><span className="wi">already</span></span>
              {" "}
              <span className="w"><span className="wi">work.</span></span>
            </h2>
          </div>
          <div>
            <p className="lead rv">From the first interview with your staff to the support that keeps it running, one team designs, builds and looks after your system.</p>
            <Link className="tl rv" href="/services" style={{ marginTop: "14px" }}>
              All services
              {" "}
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="bracket rv">
          <i className="bk" />
          <div className="bgrid3" data-group="">
            <article className="bcard rv">
              <div className="art">
                <div className="ab" style={{ background: "linear-gradient(160deg,var(--glowB),var(--glowA) 60%,var(--glowD))" }} />
                <div className="st" />
                <div className="ov">
                  <div className="oc float">
                    <span className="mono">Current term</span>
                    <b>Grade 10 · Section B</b>
                  </div>
                  <div className="oc dk">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="mono">Summary</span>
                      <span className="pill2">● Live</span>
                    </div>
                    <ul>
                      <li>
                        <span>Attendance</span>
                        <b style={{ margin: "0" }}>94%</b>
                      </li>
                      <li>
                        <span>Fees paid</span>
                        <b style={{ margin: "0" }}>82%</b>
                      </li>
                      <li>
                        <span>Report cards</span>
                        <b style={{ margin: "0" }}>Ready</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bfoot">
                <span className="mono">
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="8" ry="3" />
                    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                  </svg>
                  Records and operations
                </span>
                <h3>Management systems</h3>
                <p className="body">Records, attendance, fees, stock and finance in one system your whole team can use.</p>
              </div>
            </article>
            <article className="bcard rv">
              <div className="art">
                <div className="ab" style={{ background: "linear-gradient(200deg,var(--glowA),var(--glowD) 50%,var(--glowC))" }} />
                <div className="st" />
                <div className="ov">
                  <div className="oc float">
                    <span className="mono">Track your application</span>
                    <b>Business licence · #2318</b>
                    <ul>
                      <li>
                        <span>Submitted</span>
                        <span style={{ color: "#2f9e6a" }}>✓</span>
                      </li>
                      <li>
                        <span>Documents checked</span>
                        <span style={{ color: "#2f9e6a" }}>✓</span>
                      </li>
                      <li>
                        <span>Decision</span>
                        <span style={{ color: "#d99a2b" }}>In review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="oc dk">
                    <span className="mono">SMS sent</span>
                    <p style={{ marginTop: "6px", lineHeight: "1.45" }}>Your application is in review. We will message you when a decision is made.</p>
                  </div>
                </div>
              </div>
              <div className="bfoot">
                <span className="mono">
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="2" width="12" height="20" rx="2.5" />
                    <path d="M11 18h2" />
                  </svg>
                  Apps and portals
                </span>
                <h3>Apps and citizen portals</h3>
                <p className="body">Mobile apps and web portals that let people apply, pay, book and track without queuing.</p>
              </div>
            </article>
            <article className="bcard rv">
              <div className="art">
                <div className="ab" style={{ background: "linear-gradient(140deg,var(--glowC),var(--glowB) 45%,var(--glowA))" }} />
                <div className="st" />
                <div className="ov">
                  <div className="oc float">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span className="mono">Weekly report</span>
                      <span className="mono">Auto</span>
                    </div>
                    <b>Clinic visits</b>
                    <svg viewBox="0 0 200 60" style={{ width: "100%", height: "60px", marginTop: "8px" }} aria-hidden="true">
                      <path d="M0 48 L30 40 L60 44 L90 28 L120 32 L150 18 L180 22 L200 10" fill="none" stroke="#2160f3" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="oc dk">
                    <span className="mono">Delivered</span>
                    <p style={{ marginTop: "6px" }}>Sent to 4 managers · Monday 08:00</p>
                  </div>
                </div>
              </div>
              <div className="bfoot">
                <span className="mono">
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="M7 15l4-4 3 3 5-6" />
                  </svg>
                  Reporting and data
                </span>
                <h3>Reports that write themselves</h3>
                <p className="body">Dashboards and weekly reports built from the data you already collect.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
