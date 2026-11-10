import type { CSSProperties } from 'react';

export function Tracking() {
  return (
    <section className="sec inv" id="tracking">
      <div className="wrap">
        <div className="ph">
          <div className="t">
            <span className="mono2 rv">// Project tracking</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">Always</span></span>
              {" "}
              <span className="w"><span className="wi">know</span></span>
              {" "}
              <span className="w"><span className="wi">where</span></span>
              {" "}
              <span className="w"><span className="wi">your</span></span>
              {" "}
              <span className="w"><span className="wi">project</span></span>
              {" "}
              <span className="w"><span className="wi">stands.</span></span>
            </h2>
          </div>
        </div>
        <div className="trk" data-group="">
          <div className="tc rv">
            <div className="ln">
              <i />
              <i />
            </div>
            <h3>Milestones</h3>
            <p>Every stage is tracked, so you always know what is done and what comes next.</p>
            <div className="steps2">
              <svg viewBox="0 0 420 120" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="tg" x1="0" x2="1">
                    <stop offset="0" stopColor="var(--accent)" stopOpacity=".15" />
                    <stop offset="1" stopColor="var(--accent)" />
                  </linearGradient>
                </defs>
                <rect x="4" y="30" width="52" height="40" rx="8" fill="url(#tg)" />
                <rect x="64" y="50" width="52" height="40" rx="8" fill="url(#tg)" />
                <rect x="124" y="10" width="52" height="40" rx="8" fill="url(#tg)" />
                <rect x="184" y="40" width="52" height="40" rx="8" fill="url(#tg)" />
                <rect x="244" y="20" width="52" height="40" rx="8" fill="rgba(255,255,255,.08)" />
                <rect x="304" y="50" width="52" height="40" rx="8" fill="rgba(255,255,255,.08)" />
                <rect x="364" y="30" width="52" height="40" rx="8" fill="rgba(255,255,255,.08)" />
                <line x1="240" y1="0" x2="240" y2="110" stroke="var(--accent)" strokeWidth="2" />
                <g stroke="rgba(255,255,255,.25)">
                  <line x1="60" y1="100" x2="60" y2="112" />
                  <line x1="120" y1="100" x2="120" y2="112" />
                  <line x1="300" y1="100" x2="300" y2="112" />
                  <line x1="360" y1="100" x2="360" y2="112" />
                </g>
              </svg>
            </div>
            <div className="tfoot">
              <span>
                Current stage
                {" "}
                <b>Build and test</b>
              </span>
              <span>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accenttext)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {" "}
                <b>2 of 4</b>
                {" "}
                stages complete
              </span>
            </div>
          </div>
          <div className="tc rv">
            <div className="ln">
              <i />
              <i />
            </div>
            <h3>Deployment</h3>
            <p>Releases move from testing to live only after your team signs them off.</p>
            <div className="flow">
              <svg viewBox="0 0 420 170" preserveAspectRatio="none" aria-hidden="true" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="1.5">
                <path d="M110 100H220" />
                <path d="M240 100H300V40H400" />
                <path d="M300 100V150H400" />
                <path d="M180 100V40H260" />
              </svg>
              <span className="fnode" style={{ left: "22%", top: "59%" }}>
                <i style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--ok)" }} />
                Tested
              </span>
              <span className="fnode ck" style={{ left: "55%", top: "59%" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <span className="fnode" style={{ left: "50%", top: "24%" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                2 weeks to launch
              </span>
              <span className="fdot" style={{ left: "96%", top: "24%", background: "#f2c14e" }} />
              <span className="fdot" style={{ left: "96%", top: "88%", background: "var(--accent)" }} />
            </div>
            <div className="tfoot">
              <span>
                Next release
                {" "}
                <b>Staff portal</b>
              </span>
              <span>
                <b>Signed off</b>
                {" "}
                by your team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
