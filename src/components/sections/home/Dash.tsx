import type { CSSProperties } from 'react';

export function Dash() {
  return (
    <section className="sec alt" id="dash">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">After launch</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">What</span></span>
              {" "}
              <span className="w"><span className="wi">your</span></span>
              {" "}
              <span className="w"><span className="wi">team</span></span>
              {" "}
              <span className="w"><span className="wi">sees</span></span>
              {" "}
              <span className="w"><span className="wi">once</span></span>
              {" "}
              <span className="w"><span className="wi">the</span></span>
              {" "}
              <span className="w"><span className="wi">system</span></span>
              {" "}
              <span className="w"><span className="wi">is</span></span>
              {" "}
              <span className="w"><span className="wi">live.</span></span>
            </h2>
          </div>
          <p className="lead rv">A clear home screen for managers: setup progress, training, open requests and what needs attention next.</p>
        </div>
        <div className="dsh rv">
          <div className="dtop">
            <div className="dbg">
              <i style={{ background: "var(--glowA)", left: "-10%", top: "-30%", width: "55%", height: "110%", opacity: "0.9" }} />
              <i style={{ background: "var(--glowB)", left: "50%", top: "-10%", width: "60%", height: "100%", opacity: "0.8" }} />
              <i style={{ background: "var(--glowC)", left: "20%", top: "40%", width: "60%", height: "90%", opacity: "0.5" }} />
            </div>
            <div className="dnav">
              <div className="l">
                <i className="mk">B</i>
                <span>
                  Today’s priority
                  <br />
                  <b>Train office staff</b>
                </span>
              </div>
              <div className="c">
                <span>Home</span>
                <span>Records</span>
                <span>Reports</span>
                <span>Settings</span>
              </div>
              <span>Your school</span>
            </div>
            <div className="dgreet">
              <h3>Good morning, Selam</h3>
              <p>Your system is live in 3 offices.</p>
            </div>
            <div className="glass">
              <div className="gl">
                <h4>Setup progress</h4>
                <b>
                  <span data-count="" data-to="75" data-suf="%">75%</span>
                </b>
                <p>3 of 4 steps complete</p>
              </div>
              <div className="gl">
                <h4>Staff trained</h4>
                <b>
                  <span data-count="" data-to="18">18</span>
                  {" "}
                  / 24
                </b>
                <p>Next session on Thursday</p>
              </div>
            </div>
          </div>
          <div className="dbot">
            <div className="dbox">
              <div className="hd">
                <h4>Complete your setup</h4>
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>75% complete</span>
              </div>
              <div className="tasks">
                <div className="task">
                  <span className="ic" style={{ width: "38px", height: "38px", borderRadius: "10px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="8" ry="3" />
                      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                    </svg>
                  </span>
                  <div className="tx">
                    <b>Import student records</b>
                    <small>1,240 records checked</small>
                  </div>
                  <span className="act ok">Done</span>
                </div>
                <div className="task">
                  <span className="ic" style={{ width: "38px", height: "38px", borderRadius: "10px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3.5" />
                      <path d="M2.5 21a6.5 6.5 0 0 1 13 0" />
                      <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
                      <path d="M18 14.5a6.5 6.5 0 0 1 3.5 6.5" />
                    </svg>
                  </span>
                  <div className="tx">
                    <b>Train office staff</b>
                    <small>18 of 24 staff trained</small>
                  </div>
                  <span className="act">Schedule</span>
                </div>
                <div className="task">
                  <span className="ic" style={{ width: "38px", height: "38px", borderRadius: "10px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z" />
                    </svg>
                  </span>
                  <div className="tx">
                    <b>Connect parent SMS</b>
                    <small>Send updates automatically</small>
                  </div>
                  <span className="act">Connect</span>
                </div>
              </div>
            </div>
            <div className="dbox">
              <div className="hd">
                <h4>Requests this week</h4>
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>All offices</span>
              </div>
              <div className="gauge">
                <svg viewBox="0 0 400 200" aria-hidden="true">
                  <line x1="50.0" y1="190.0" x2="72.0" y2="190.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="50.2" y1="182.1" x2="64.2" y2="182.9" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="50.8" y1="174.3" x2="64.7" y2="175.8" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="51.8" y1="166.5" x2="65.7" y2="168.7" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="53.3" y1="158.8" x2="67.0" y2="161.7" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="55.1" y1="151.2" x2="76.4" y2="156.9" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="57.3" y1="143.6" x2="70.7" y2="148.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="60.0" y1="136.2" x2="73.0" y2="141.3" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="63.0" y1="129.0" x2="75.8" y2="134.7" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="66.3" y1="121.9" x2="78.8" y2="128.3" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="70.1" y1="115.0" x2="89.1" y2="126.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="74.2" y1="108.3" x2="85.9" y2="115.9" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="78.6" y1="101.8" x2="90.0" y2="110.1" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="83.4" y1="95.6" x2="94.3" y2="104.4" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="88.5" y1="89.6" x2="98.9" y2="99.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="93.9" y1="83.9" x2="109.5" y2="99.5" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="99.6" y1="78.5" x2="109.0" y2="88.9" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="105.6" y1="73.4" x2="114.4" y2="84.3" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="111.8" y1="68.6" x2="120.1" y2="80.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="118.3" y1="64.2" x2="125.9" y2="75.9" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="125.0" y1="60.1" x2="136.0" y2="79.1" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="131.9" y1="56.3" x2="138.3" y2="68.8" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="139.0" y1="53.0" x2="144.7" y2="65.8" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="146.2" y1="50.0" x2="151.3" y2="63.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="153.6" y1="47.3" x2="158.0" y2="60.7" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="161.2" y1="45.1" x2="166.9" y2="66.4" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="168.8" y1="43.3" x2="171.7" y2="57.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="176.5" y1="41.8" x2="178.7" y2="55.7" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="184.3" y1="40.8" x2="185.8" y2="54.7" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="192.1" y1="40.2" x2="192.9" y2="54.2" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="200.0" y1="40.0" x2="200.0" y2="62.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="207.9" y1="40.2" x2="207.1" y2="54.2" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="215.7" y1="40.8" x2="214.2" y2="54.7" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="223.5" y1="41.8" x2="221.3" y2="55.7" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="231.2" y1="43.3" x2="228.3" y2="57.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="238.8" y1="45.1" x2="233.1" y2="66.4" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="246.4" y1="47.3" x2="242.0" y2="60.7" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="253.8" y1="50.0" x2="248.7" y2="63.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="261.0" y1="53.0" x2="255.3" y2="65.8" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="268.1" y1="56.3" x2="261.7" y2="68.8" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="275.0" y1="60.1" x2="264.0" y2="79.1" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="281.7" y1="64.2" x2="274.1" y2="75.9" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="288.2" y1="68.6" x2="279.9" y2="80.0" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="294.4" y1="73.4" x2="285.6" y2="84.3" stroke="var(--accent)" strokeWidth="1.4" />
                  <line x1="300.4" y1="78.5" x2="291.0" y2="88.9" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="306.1" y1="83.9" x2="290.5" y2="99.5" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="311.5" y1="89.6" x2="301.1" y2="99.0" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="316.6" y1="95.6" x2="305.7" y2="104.4" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="321.4" y1="101.8" x2="310.0" y2="110.1" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="325.8" y1="108.3" x2="314.1" y2="115.9" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="329.9" y1="115.0" x2="310.9" y2="126.0" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="333.7" y1="121.9" x2="321.2" y2="128.3" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="337.0" y1="129.0" x2="324.2" y2="134.7" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="340.0" y1="136.2" x2="327.0" y2="141.3" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="342.7" y1="143.6" x2="329.3" y2="148.0" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="344.9" y1="151.2" x2="323.6" y2="156.9" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="346.7" y1="158.8" x2="333.0" y2="161.7" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="348.2" y1="166.5" x2="334.3" y2="168.7" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="349.2" y1="174.3" x2="335.3" y2="175.8" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="349.8" y1="182.1" x2="335.8" y2="182.9" stroke="var(--line)" strokeWidth="1.4" />
                  <line x1="350.0" y1="190.0" x2="328.0" y2="190.0" stroke="var(--line)" strokeWidth="1.4" />
                  <text x="200" y="168" textAnchor="middle" fontFamily="Instrument Sans" fontSize="40" fill="currentColor">212</text>
                  <text x="200" y="192" textAnchor="middle" fontSize="13" fill="var(--muted)">requests handled</text>
                </svg>
              </div>
              <div className="gleg">
                <span>
                  <i style={{ background: "var(--ok)" }} />
                  Resolved
                </span>
                <span>
                  <i style={{ background: "var(--accent)" }} />
                  In progress
                </span>
                <span>
                  <i style={{ background: "#d99a2b" }} />
                  Waiting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
