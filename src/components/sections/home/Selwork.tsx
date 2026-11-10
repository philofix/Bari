import type { CSSProperties } from 'react';
import { Link } from '@/components/site/Link';
import content from '@/content/placeholders.json';

export function Selwork() {
  return (
    <section className="sec" id="selwork">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">Selected work</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">What</span></span>
              {" "}
              <span className="w"><span className="wi">a</span></span>
              {" "}
              <span className="w"><span className="wi">Bari</span></span>
              {" "}
              <span className="w"><span className="wi">system</span></span>
              {" "}
              <span className="w"><span className="wi">changes.</span></span>
            </h2>
          </div>
          <div>
            <p className="lead rv">What changes for schools, clinics and operators once their system is live.</p>
            <Link className="tl rv" href="/work" style={{ marginTop: "14px" }}>
              All work
              {" "}
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="wcards" data-group="">
          <article className="wc rv" data-s="education" data-hover="">
            <div className="wa">
              <i style={{ background: "var(--glowA)", left: "-20%", top: "-40%", width: "70%", height: "120%", opacity: "0.9" }} />
              <i style={{ background: "var(--glowB)", left: "45%", top: "-10%", width: "70%", height: "120%", opacity: "0.7" }} />
              <div className="sm">
                <span>
                  {content.caseStudies.education.name}
                  <br />
                  <span style={{ color: "#666" }}>Reports</span>
                </span>
                <b>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
                  </svg>
                </b>
              </div>
            </div>
            <div className="wb">
              <div className="tg">
                <span className="chip">Education</span>
              </div>
              <h3>One system for enrolment, attendance and fees</h3>
              <div className="wm">
                <div>
                  <b>Minutes</b>
                  <small>to build a report</small>
                </div>
                <div>
                  <b>1 record</b>
                  <small>per student</small>
                </div>
                <div>
                  <b>Weekly</b>
                  <small>parent SMS</small>
                </div>
              </div>
            </div>
          </article>
          <article className="wc rv" data-s="health" data-hover="">
            <div className="wa">
              <i style={{ background: "var(--glowA)", left: "-20%", top: "-40%", width: "70%", height: "120%", opacity: "0.9" }} />
              <i style={{ background: "var(--glowB)", left: "45%", top: "-10%", width: "70%", height: "120%", opacity: "0.7" }} />
              <div className="sm">
                <span>
                  {content.caseStudies.health.name}
                  <br />
                  <span style={{ color: "#666" }}>Queue</span>
                </span>
                <b>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M12 4l7 4v8l-7 4-7-4V8z" fill="currentColor" />
                  </svg>
                </b>
              </div>
            </div>
            <div className="wb">
              <div className="tg">
                <span className="chip">Health</span>
              </div>
              <h3>Patient records and a live queue for a busy health centre</h3>
              <div className="wm">
                <div>
                  <b>Shorter</b>
                  <small>waiting times</small>
                </div>
                <div>
                  <b>1 record</b>
                  <small>per patient</small>
                </div>
                <div>
                  <b>Live</b>
                  <small>stock alerts</small>
                </div>
              </div>
            </div>
          </article>
          <article className="wc rv" data-s="transport" data-hover="">
            <div className="wa">
              <i style={{ background: "var(--glowA)", left: "-20%", top: "-40%", width: "70%", height: "120%", opacity: "0.9" }} />
              <i style={{ background: "var(--glowB)", left: "45%", top: "-10%", width: "70%", height: "120%", opacity: "0.7" }} />
              <div className="sm">
                <span>
                  {content.caseStudies.transport.name}
                  <br />
                  <span style={{ color: "#666" }}>Tickets</span>
                </span>
                <b>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                    <rect x="5" y="5" width="8" height="8" fill="currentColor" />
                    <rect x="11" y="11" width="8" height="8" fill="currentColor" opacity=".55" />
                  </svg>
                </b>
              </div>
            </div>
            <div className="wb">
              <div className="tg">
                <span className="chip">Transportation</span>
              </div>
              <h3>Digital ticketing and manifests for an intercity bus operator</h3>
              <div className="wm">
                <div>
                  <b>Online</b>
                  <small>seat booking</small>
                </div>
                <div>
                  <b>Live</b>
                  <small>manifests</small>
                </div>
                <div>
                  <b>Less</b>
                  <small>cash handling</small>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
