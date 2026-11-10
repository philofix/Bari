import type { CSSProperties } from 'react';

export function TechStack() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">Quality and security</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">Proven</span></span>
              {" "}
              <span className="w"><span className="wi">technology,</span></span>
              {" "}
              <span className="w"><span className="wi">built</span></span>
              {" "}
              <span className="w"><span className="wi">for</span></span>
              {" "}
              <span className="w"><span className="wi">local</span></span>
              {" "}
              <span className="w"><span className="wi">conditions.</span></span>
            </h2>
          </div>
          <p className="lead rv">The standards every Bari system is built to, whichever service you choose.</p>
        </div>
        <div className="cgrid" style={{ alignItems: "start" }}>
          <div className="ttab rv">
            <div className="trow">
              <b>Platforms</b>
              <span>Web, Android and iOS</span>
            </div>
            <div className="trow">
              <b>Deployment</b>
              <span>Bari cloud, your cloud account or your own servers</span>
            </div>
            <div className="trow">
              <b>Connectivity</b>
              <span>Low-bandwidth design, with offline modes where needed</span>
            </div>
            <div className="trow">
              <b>Languages</b>
              <span>Afaan Oromoo, Amharic and English</span>
            </div>
            <div className="trow">
              <b>Security</b>
              <span>Role-based access, encryption in transit and at rest, scheduled backups</span>
            </div>
            <div className="trow">
              <b>Ownership</b>
              <span>Your data, with full documentation and handover</span>
            </div>
          </div>
          <div className="commits" data-group="">
            <div className="cm rv">
              <span className="ic" style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <h3>Quality</h3>
              <p className="body">Every release is reviewed and tested against agreed acceptance criteria.</p>
            </div>
            <div className="cm rv">
              <span className="ic" style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <h3>Data protection</h3>
              <p className="body">Strict access controls, with data kept under your control.</p>
            </div>
            <div className="cm rv">
              <span className="ic" style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2.5 21a6.5 6.5 0 0 1 13 0" />
                  <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
                  <path d="M18 14.5a6.5 6.5 0 0 1 3.5 6.5" />
                </svg>
              </span>
              <h3>Support close by</h3>
              <p className="body">A team in Ethiopia that can be on site when it matters.</p>
            </div>
            <div className="cm rv">
              <span className="ic" style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <h3>Long-term care</h3>
              <p className="body">Success is measured by use years after launch, not on launch day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
