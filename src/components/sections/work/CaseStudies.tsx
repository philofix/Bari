import type { CSSProperties } from 'react';
import content from '@/content/placeholders.json';

export function CaseStudies() {
  return (
    <section className="sec tight" style={{ paddingTop: "10px" }}>
      <div className="wrap">
        <div className="filters" role="group" aria-label="Filter by sector">
          <button type="button" data-f="all" aria-pressed="true">All</button>
          <button type="button" data-f="education" aria-pressed="false">Education</button>
          <button type="button" data-f="health" aria-pressed="false">Health</button>
          <button type="button" data-f="transport" aria-pressed="false">Transportation</button>
          <button type="button" data-f="logistics" aria-pressed="false">Logistics</button>
          <button type="button" data-f="ecom" aria-pressed="false">E-commerce</button>
          <button type="button" data-f="gov" aria-pressed="false">Government</button>
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
          <article className="wc rv" data-s="logistics" data-hover="">
            <div className="wa">
              <i style={{ background: "var(--glowA)", left: "-20%", top: "-40%", width: "70%", height: "120%", opacity: "0.9" }} />
              <i style={{ background: "var(--glowB)", left: "45%", top: "-10%", width: "70%", height: "120%", opacity: "0.7" }} />
              <div className="sm">
                <span>
                  {content.caseStudies.logistics.name}
                  <br />
                  <span style={{ color: "#666" }}>Dispatch</span>
                </span>
                <b>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M12 4l8 15H4z" fill="currentColor" />
                  </svg>
                </b>
              </div>
            </div>
            <div className="wb">
              <div className="tg">
                <span className="chip">Logistics</span>
              </div>
              <h3>Dispatch, tracking and digital proof of delivery</h3>
              <div className="wm">
                <div>
                  <b>Live</b>
                  <small>shipment view</small>
                </div>
                <div>
                  <b>Digital</b>
                  <small>proof of delivery</small>
                </div>
                <div>
                  <b>Fewer</b>
                  <small>lost orders</small>
                </div>
              </div>
            </div>
          </article>
          <article className="wc rv" data-s="ecom" data-hover="">
            <div className="wa">
              <i style={{ background: "var(--glowA)", left: "-20%", top: "-40%", width: "70%", height: "120%", opacity: "0.9" }} />
              <i style={{ background: "var(--glowB)", left: "45%", top: "-10%", width: "70%", height: "120%", opacity: "0.7" }} />
              <div className="sm">
                <span>
                  {content.caseStudies.ecom.name}
                  <br />
                  <span style={{ color: "#666" }}>Store</span>
                </span>
                <b>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                    <rect x="5" y="11" width="3.4" height="8" fill="currentColor" />
                    <rect x="10.3" y="6" width="3.4" height="13" fill="currentColor" />
                    <rect x="15.6" y="9" width="3.4" height="10" fill="currentColor" />
                  </svg>
                </b>
              </div>
            </div>
            <div className="wb">
              <div className="tg">
                <span className="chip">E-commerce</span>
              </div>
              <h3>An online store with mobile-money payments</h3>
              <div className="wm">
                <div>
                  <b>24/7</b>
                  <small>online sales</small>
                </div>
                <div>
                  <b>Mobile</b>
                  <small>money checkout</small>
                </div>
                <div>
                  <b>Daily</b>
                  <small>sales reports</small>
                </div>
              </div>
            </div>
          </article>
          <article className="wc rv" data-s="gov" data-hover="">
            <div className="wa">
              <i style={{ background: "var(--glowA)", left: "-20%", top: "-40%", width: "70%", height: "120%", opacity: "0.9" }} />
              <i style={{ background: "var(--glowB)", left: "45%", top: "-10%", width: "70%", height: "120%", opacity: "0.7" }} />
              <div className="sm">
                <span>
                  {content.caseStudies.gov.name}
                  <br />
                  <span style={{ color: "#666" }}>Cases</span>
                </span>
                <b>
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M5 19c0-8 5-13 14-14 0 9-5 14-14 14z" fill="currentColor" />
                  </svg>
                </b>
              </div>
            </div>
            <div className="wb">
              <div className="tg">
                <span className="chip">Government</span>
              </div>
              <h3>Online business licence applications with case tracking</h3>
              <div className="wm">
                <div>
                  <b>Online</b>
                  <small>applications</small>
                </div>
                <div>
                  <b>Tracked</b>
                  <small>every case</small>
                </div>
                <div>
                  <b>Clear</b>
                  <small>service dashboard</small>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
