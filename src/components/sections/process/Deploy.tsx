import type { CSSProperties } from 'react';

export function Deploy() {
  return (
    <section className="sec alt" id="deploy">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">Deployment</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">Run</span></span>
              {" "}
              <span className="w"><span className="wi">your</span></span>
              {" "}
              <span className="w"><span className="wi">system</span></span>
              {" "}
              <span className="w"><span className="wi">where</span></span>
              {" "}
              <span className="w"><span className="wi">your</span></span>
              {" "}
              <span className="w"><span className="wi">rules</span></span>
              {" "}
              <span className="w"><span className="wi">require.</span></span>
            </h2>
          </div>
          <p className="lead rv">Which components run where is agreed for each project, so your team knows exactly what stays inside your environment.</p>
        </div>
        <div className="dcards" data-group="">
          <div className="dcard rv" data-hover="">
            <span className="ic" style={{ width: "48px", height: "48px", borderRadius: "13px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.6 1.5A3.3 3.3 0 0 0 7 18z" />
              </svg>
            </span>
            <h3>Bari cloud</h3>
            <p className="body">Hosted and monitored by us. The fastest way to start.</p>
            <span className="bf">Best for a quick start</span>
          </div>
          <div className="dcard hot rv" data-hover="">
            <span className="ic" style={{ width: "48px", height: "48px", borderRadius: "13px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
            </span>
            <h3>Your cloud account</h3>
            <p className="body">A dedicated environment in a cloud account you own.</p>
            <span className="bf">Best for regulated teams</span>
          </div>
          <div className="dcard rv" data-hover="">
            <span className="ic" style={{ width: "48px", height: "48px", borderRadius: "13px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center" }}>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="7" rx="2" />
                <rect x="3" y="13" width="18" height="7" rx="2" />
                <path d="M7 7.5h.01M7 16.5h.01" />
              </svg>
            </span>
            <h3>On your servers</h3>
            <p className="body">Installed on your own servers, inside your network.</p>
            <span className="bf">Best for strict data residency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
