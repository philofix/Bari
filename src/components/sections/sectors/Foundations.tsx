export function Foundations() {
  return (
    <section className="sec alt">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">Every sector gets</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">The</span></span>
              {" "}
              <span className="w"><span className="wi">same</span></span>
              {" "}
              <span className="w"><span className="wi">strong</span></span>
              {" "}
              <span className="w"><span className="wi">foundations.</span></span>
            </h2>
          </div>
          <p className="lead rv">Whatever you run, these come built in.</p>
        </div>
        <div className="pcards" style={{ gridTemplateColumns: "repeat(4,minmax(0,1fr))", marginTop: "0" }} data-group="">
          <div className="pcard rv" data-hover="">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
              </svg>
            </span>
            <h3>One record of truth</h3>
            <p className="body">Every team works from the same, current information.</p>
          </div>
          <div className="pcard rv" data-hover="">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M7 15l4-4 3 3 5-6" />
              </svg>
            </span>
            <h3>Clear reporting</h3>
            <p className="body">Dashboards and reports without spreadsheets.</p>
          </div>
          <div className="pcard rv" data-hover="">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <h3>Secure by default</h3>
            <p className="body">Roles, encryption and backups from day one.</p>
          </div>
          <div className="pcard rv" data-hover="">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 21a6.5 6.5 0 0 1 13 0" />
                <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
                <path d="M18 14.5a6.5 6.5 0 0 1 3.5 6.5" />
              </svg>
            </span>
            <h3>A team that stays</h3>
            <p className="body">Training, help-desk and updates after launch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
