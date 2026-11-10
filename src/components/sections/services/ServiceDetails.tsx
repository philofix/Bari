import type { CSSProperties } from 'react';

export function ServiceDetails() {
  return (
    <section className="sec" style={{ paddingTop: "60px" }}>
      <div className="wrap">
        <div className="sdet" id="svc0">
          <div className="sx rv">
            <span className="n">01 / 08</span>
            <h3>Custom software development</h3>
            <p className="lead">Software built around how your organisation actually works, instead of forcing your team into a tool made for someone else.</p>
            <ul className="inc">
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Requirements and process mapping</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Role-based access for every team</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Reports built around your decisions</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Full documentation and handover</span>
              </li>
            </ul>
            <p className="best">
              <b>Best for:</b>
              {" "}
              Organisations whose processes don’t fit off-the-shelf tools.
            </p>
          </div>
          <div className="sviz rv">
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
        <div className="sdet rev" id="svc1">
          <div className="sx rv">
            <span className="n">02 / 08</span>
            <h3>Mobile applications</h3>
            <p className="lead">Apps for staff in the field and for the people you serve, designed to work on affordable phones and patchy networks.</p>
            <ul className="inc">
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Works on affordable Android phones</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Offline mode with automatic sync</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Push and SMS notifications</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>App store publishing</span>
              </li>
            </ul>
            <p className="best">
              <b>Best for:</b>
              {" "}
              Field teams, operators and services people use on the move.
            </p>
          </div>
          <div className="sviz rv">
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
        <div className="sdet" id="svc2">
          <div className="sx rv">
            <span className="n">03 / 08</span>
            <h3>Web platforms and portals</h3>
            <p className="lead">Public websites, client portals and internal platforms that load fast, are easy to update and are secure by default.</p>
            <ul className="inc">
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Public websites and landing pages</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Client and citizen portals</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Content your team can update</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Fast on slow connections</span>
              </li>
            </ul>
            <p className="best">
              <b>Best for:</b>
              {" "}
              Institutions that need a professional, reliable online presence.
            </p>
          </div>
          <div className="sviz rv">
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
        <div className="sdet rev" id="svc3">
          <div className="sx rv">
            <span className="n">04 / 08</span>
            <h3>E-commerce solutions</h3>
            <p className="lead">Online stores and multi-vendor marketplaces with catalogues, orders and the payment methods your customers already use.</p>
            <ul className="inc">
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Product catalogue and stock</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Orders and fulfilment</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Mobile money and bank payments</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Sales dashboards</span>
              </li>
            </ul>
            <p className="best">
              <b>Best for:</b>
              {" "}
              Retailers, distributors and brands ready to sell online.
            </p>
          </div>
          <div className="sviz rv">
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
        <div className="sdet" id="svc4">
          <div className="sx rv">
            <span className="n">05 / 08</span>
            <h3>Management information systems</h3>
            <p className="lead">One connected system for the records an institution runs on, replacing registers, spreadsheets and disconnected tools.</p>
            <ul className="inc">
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Records in one searchable place</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Inventory and assets</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Staff and HR data</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Fees, billing and finance</span>
              </li>
            </ul>
            <p className="best">
              <b>Best for:</b>
              {" "}
              Schools, clinics and offices still running on paper.
            </p>
          </div>
          <div className="sviz rv">
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
        <div className="sdet rev" id="svc5">
          <div className="sx rv">
            <span className="n">06 / 08</span>
            <h3>Dashboards and reporting</h3>
            <p className="lead">Live dashboards and automatic reports built from the data you already collect, so leaders can act without waiting for spreadsheets.</p>
            <ul className="inc">
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>KPIs for managers and boards</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Automatic weekly reports</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Exports for regulators and donors</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Built from data you already have</span>
              </li>
            </ul>
            <p className="best">
              <b>Best for:</b>
              {" "}
              Leaders who need a clear, current picture of performance.
            </p>
          </div>
          <div className="sviz rv">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Service overview</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">12 months</div>
              <div className="mk-s">Reports built from your own data</div>
              <div className="mk-heat">
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#111" }} />
                <i style={{ background: "#111" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#111" }} />
                <i style={{ background: "#111" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#111" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#111" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#111" }} />
                <i style={{ background: "#111" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#ececec" }} />
                <i style={{ background: "#9a9a9a" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#111" }} />
                <i style={{ background: "#d4d4d4" }} />
                <i style={{ background: "#9a9a9a" }} />
              </div>
              <div className="mk-mo">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sdet" id="svc6">
          <div className="sx rv">
            <span className="n">07 / 08</span>
            <h3>Product design and UX</h3>
            <p className="lead">User research, clickable prototypes and interface design, so the systems we build are adopted and used, not just installed.</p>
            <ul className="inc">
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Interviews with staff and users</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Clickable prototypes</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Interface and design systems</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Usability testing</span>
              </li>
            </ul>
            <p className="best">
              <b>Best for:</b>
              {" "}
              Teams starting a new product or fixing one nobody uses.
            </p>
          </div>
          <div className="sviz rv">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Design progress</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">Prototype v2</div>
              <div className="mk-s">Tested with 12 staff</div>
              <div className="mk-rows" style={{ marginTop: "12px" }}>
                <div className="mk-p">
                  <div className="mk-pl">
                    <span>Research</span>
                    <b>100%</b>
                  </div>
                  <div className="mk-pt">
                    <i data-fill="100" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="mk-p">
                  <div className="mk-pl">
                    <span>Prototype</span>
                    <b>80%</b>
                  </div>
                  <div className="mk-pt">
                    <i data-fill="80" style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="mk-p">
                  <div className="mk-pl">
                    <span>Interface</span>
                    <b>45%</b>
                  </div>
                  <div className="mk-pt">
                    <i data-fill="45" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sdet rev" id="svc7">
          <div className="sx rv">
            <span className="n">08 / 08</span>
            <h3>Training, support and maintenance</h3>
            <p className="lead">Staff training, help-desk support, monitoring and updates after every launch, from a team based in Ethiopia.</p>
            <ul className="inc">
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Staff and admin training</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Help-desk support</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Monitoring and backups</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Updates and improvements</span>
              </li>
            </ul>
            <p className="best">
              <b>Best for:</b>
              {" "}
              Every organisation running a Bari system.
            </p>
          </div>
          <div className="sviz rv">
            <i className="bb2" style={{ background: "var(--glowA)", left: "-10%", top: "-20%", width: "60%", height: "70%", opacity: "0.8" }} />
            <i className="bb2" style={{ background: "var(--glowB)", left: "55%", top: "10%", width: "55%", height: "60%", opacity: "0.65" }} />
            <i className="bb2" style={{ background: "var(--glowC)", left: "20%", top: "70%", width: "60%", height: "50%", opacity: "0.35" }} />
            <div className="mock float">
              <div className="mk-h">
                <span>Help-desk</span>
                <i className="mk-b">B</i>
              </div>
              <div className="mk-big">3 open</div>
              <div className="mk-s">Average first reply 2 hours</div>
              <div className="mk-rows">
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#2f9e6a" }} />
                  <span className="mk-n">Password reset</span>
                  <b>Admin</b>
                  <em className="mk-t">Solved</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#d99a2b" }} />
                  <span className="mk-n">New report request</span>
                  <b>Finance</b>
                  <em className="mk-t">In progress</em>
                </div>
                <div className="mk-r">
                  <span className="mk-d" style={{ background: "#3a6ee0" }} />
                  <span className="mk-n">Training session</span>
                  <b>Staff</b>
                  <em className="mk-t">Booked</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
