import type { CSSProperties } from 'react';
import { Link } from '@/components/site/Link';

export function SectorTabs() {
  return (
    <section className="sec tight" style={{ paddingTop: "10px" }}>
      <div className="wrap">
        <div className="stabs" role="tablist" aria-label="Sectors" data-tabs="">
          <button type="button" role="tab" id="st0" aria-controls="sp0" aria-selected="true" tabIndex={0}>
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
              <path d="M4 21V5" />
              <path d="M8 7h7" />
            </svg>
            Education
          </button>
          <button type="button" role="tab" id="st1" aria-controls="sp1" aria-selected="false" tabIndex={-1}>
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z" />
            </svg>
            Health
          </button>
          <button type="button" role="tab" id="st2" aria-controls="sp2" aria-selected="false" tabIndex={-1}>
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="3" width="16" height="15" rx="2" />
              <path d="M4 11h16" />
              <path d="M7 21v-3" />
              <path d="M17 21v-3" />
            </svg>
            Transportation
          </button>
          <button type="button" role="tab" id="st3" aria-controls="sp3" aria-selected="false" tabIndex={-1}>
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6h11v10H2z" />
              <path d="M13 9h4l4 4v3h-8z" />
              <circle cx="6" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>
            Logistics
          </button>
          <button type="button" role="tab" id="st4" aria-controls="sp4" aria-selected="false" tabIndex={-1}>
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>
            E-commerce
          </button>
          <button type="button" role="tab" id="st5" aria-controls="sp5" aria-selected="false" tabIndex={-1}>
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18" />
              <path d="M5 21V8l7-4 7 4v13" />
              <path d="M9 21v-6h6v6" />
            </svg>
            Construction
          </button>
          <button type="button" role="tab" id="st6" aria-controls="sp6" aria-selected="false" tabIndex={-1}>
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18" />
              <path d="M3 10h18" />
              <path d="M12 3l9 7H3z" />
              <path d="M6 10v8" />
              <path d="M10 10v8" />
              <path d="M14 10v8" />
              <path d="M18 10v8" />
            </svg>
            Government
          </button>
        </div>
        <div className="spanel" id="sp0" role="tabpanel" aria-labelledby="st0">
          <div>
            <h3>Education</h3>
            <p className="lead">Schools and colleges that spend less time on registers and more time teaching.</p>
            <div className="two">
              <div>
                <h4>Common problems</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Registers and report cards written by hand</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Fee payments hard to track</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Parents hard to reach</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>What we build</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>School management system</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Parent updates by SMS</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Fee and payment tracking</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn p" href="/contact" style={{ marginTop: "28px" }}>Talk about education</Link>
          </div>
          <div className="sviz">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Attendance today</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">94.2%</div>
              <div className="mk-s">of students present</div>
              <div className="mk-rows">
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#2f9e6a" }} />
                  <span className="mk-n">Grade 9 · A</span>
                  <b>38/40</b>
                  <em className="mk-t">Present</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#2f9e6a" }} />
                  <span className="mk-n">Grade 10 · B</span>
                  <b>35/37</b>
                  <em className="mk-t">Present</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#d99a2b" }} />
                  <span className="mk-n">Grade 11 · C</span>
                  <b>31/36</b>
                  <em className="mk-t">Review</em>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spanel" id="sp1" role="tabpanel" aria-labelledby="st1" hidden>
          <div>
            <h3>Health</h3>
            <p className="lead">Clinics and health centres where every visit is recorded and every history is at hand.</p>
            <div className="two">
              <div>
                <h4>Common problems</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Visits written in several books</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Long queues and lost files</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Stock-outs found too late</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>What we build</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Electronic patient records</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Appointments and live queue</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Pharmacy stock and billing</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn p" href="/contact" style={{ marginTop: "28px" }}>Talk about health</Link>
          </div>
          <div className="sviz">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Patient queue</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">12 waiting</div>
              <div className="mk-s">Average wait 14 minutes</div>
              <div className="mk-rows">
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#2f9e6a" }} />
                  <span className="mk-n">Check-up</span>
                  <b>Room 2</b>
                  <em className="mk-t">Next</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#d99a2b" }} />
                  <span className="mk-n">Lab request</span>
                  <b>Lab</b>
                  <em className="mk-t">Waiting</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#3a6ee0" }} />
                  <span className="mk-n">Prescription</span>
                  <b>Pharmacy</b>
                  <em className="mk-t">Ready</em>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spanel" id="sp2" role="tabpanel" aria-labelledby="st2" hidden>
          <div>
            <h3>Transportation</h3>
            <p className="lead">Operators and terminals with less cash handling, shorter queues and fewer lost seats.</p>
            <div className="two">
              <div>
                <h4>Common problems</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Cash tickets and lost revenue</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Unknown seat availability</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Manifests written by hand</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>What we build</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Digital ticketing</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Seat reservation</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Fleet and route scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn p" href="/contact" style={{ marginTop: "28px" }}>Talk about transportation</Link>
          </div>
          <div className="sviz">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Today’s departures</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">27 trips</div>
              <div className="mk-s">Seats sold across all routes</div>
              <div className="mk-rows">
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#2f9e6a" }} />
                  <span className="mk-n">Shashemene → Addis Ababa</span>
                  <b>41/52</b>
                  <em className="mk-t">Boarding</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#d99a2b" }} />
                  <span className="mk-n">Shashemene → Hawassa</span>
                  <b>28/30</b>
                  <em className="mk-t">Full</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#3a6ee0" }} />
                  <span className="mk-n">Shashemene → Adama</span>
                  <b>17/45</b>
                  <em className="mk-t">On sale</em>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spanel" id="sp3" role="tabpanel" aria-labelledby="st3" hidden>
          <div>
            <h3>Logistics</h3>
            <p className="lead">Distributors and suppliers with a live view of every order and every shelf.</p>
            <div className="two">
              <div>
                <h4>Common problems</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>No live view of stock</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Deliveries tracked by phone</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Paper proof of delivery</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>What we build</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Warehouse and inventory</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Dispatch and tracking</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Digital proof of delivery</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn p" href="/contact" style={{ marginTop: "28px" }}>Talk about logistics</Link>
          </div>
          <div className="sviz">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Deliveries</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">148 orders</div>
              <div className="mk-s">Today across all hubs</div>
              <div className="mk-rows">
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#3a6ee0" }} />
                  <span className="mk-n">Order 2041</span>
                  <b>Adama</b>
                  <em className="mk-t">In transit</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#2f9e6a" }} />
                  <span className="mk-n">Order 2042</span>
                  <b>Bishoftu</b>
                  <em className="mk-t">Delivered</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#d99a2b" }} />
                  <span className="mk-n">Order 2043</span>
                  <b>Hawassa</b>
                  <em className="mk-t">Packed</em>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spanel" id="sp4" role="tabpanel" aria-labelledby="st4" hidden>
          <div>
            <h3>E-commerce</h3>
            <p className="lead">Businesses selling online and reaching customers beyond their city.</p>
            <div className="two">
              <div>
                <h4>Common problems</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Selling only in person</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Orders by phone and chat</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Payments hard to reconcile</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>What we build</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Online store or marketplace</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Order management</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Mobile money checkout</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn p" href="/contact" style={{ marginTop: "28px" }}>Talk about e-commerce</Link>
          </div>
          <div className="sviz">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Merchant dashboard</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">148 orders</div>
              <div className="mk-s">This week</div>
              <div className="mk-bars" data-grow="">
                <i style={{ height: "38%", background: "#cbd0dc" }} />
                <i style={{ height: "52%", background: "#cbd0dc" }} />
                <i style={{ height: "46%", background: "#cbd0dc" }} />
                <i style={{ height: "64%", background: "#cbd0dc" }} />
                <i style={{ height: "58%", background: "#cbd0dc" }} />
                <i style={{ height: "82%", background: "var(--accent)" }} />
                <i style={{ height: "96%", background: "var(--accent)" }} />
              </div>
              <div className="mk-days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>
        <div className="spanel" id="sp5" role="tabpanel" aria-labelledby="st5" hidden>
          <div>
            <h3>Construction</h3>
            <p className="lead">Contractors, consultants and owners working from the same information.</p>
            <div className="two">
              <div>
                <h4>Common problems</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Progress reported late</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Materials hard to track</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Teams on different information</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>What we build</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Project and schedule tracking</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Materials and equipment</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Site reports from the field</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn p" href="/contact" style={{ marginTop: "28px" }}>Talk about construction</Link>
          </div>
          <div className="sviz">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Site progress</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">62%</div>
              <div className="mk-s">of project complete</div>
              <div className="mk-rows" style={{ marginTop: "12px" }}>
                <div className="mk-p">
                  <div className="mk-pl">
                    <span>Foundation</span>
                    <b>100%</b>
                  </div>
                  <div className="mk-pt">
                    <i data-fill="100" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="mk-p">
                  <div className="mk-pl">
                    <span>Structure</span>
                    <b>62%</b>
                  </div>
                  <div className="mk-pt">
                    <i data-fill="62" style={{ width: "62%" }} />
                  </div>
                </div>
                <div className="mk-p">
                  <div className="mk-pl">
                    <span>Finishing</span>
                    <b>18%</b>
                  </div>
                  <div className="mk-pt">
                    <i data-fill="18" style={{ width: "18%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spanel" id="sp6" role="tabpanel" aria-labelledby="st6" hidden>
          <div>
            <h3>Government</h3>
            <p className="lead">Public offices that process requests faster and track every case.</p>
            <div className="two">
              <div>
                <h4>Common problems</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Queues for every application</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>Paper files hard to search</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    <span>No view of service performance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>What we build</h4>
                <ul>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Online applications</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Case tracking</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Records and dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn p" href="/contact" style={{ marginTop: "28px" }}>Talk about government</Link>
          </div>
          <div className="sviz">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Applications</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">326 open</div>
              <div className="mk-s">Average decision in 3 days</div>
              <div className="mk-rows">
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#d99a2b" }} />
                  <span className="mk-n">Business licence</span>
                  <b>Review</b>
                  <em className="mk-t">In review</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#2f9e6a" }} />
                  <span className="mk-n">Land certificate</span>
                  <b>Done</b>
                  <em className="mk-t">Approved</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#3a6ee0" }} />
                  <span className="mk-n">Birth certificate</span>
                  <b>New</b>
                  <em className="mk-t">Submitted</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
