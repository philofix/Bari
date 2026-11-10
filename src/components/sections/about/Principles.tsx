export function Principles() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">How we partner</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">How</span></span>
              {" "}
              <span className="w"><span className="wi">we</span></span>
              {" "}
              <span className="w"><span className="wi">work</span></span>
              {" "}
              <span className="w"><span className="wi">with</span></span>
              {" "}
              <span className="w"><span className="wi">clients</span></span>
              {" "}
              <span className="w"><span className="wi">and</span></span>
              {" "}
              <span className="w"><span className="wi">partners.</span></span>
            </h2>
          </div>
          <p className="lead rv">The principles behind every relationship we build.</p>
        </div>
        <div className="pcards" style={{ marginTop: "0" }} data-group="">
          <div className="pcard rv">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 21a6.5 6.5 0 0 1 13 0" />
                <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
                <path d="M18 14.5a6.5 6.5 0 0 1 3.5 6.5" />
              </svg>
            </span>
            <h3>Close to our clients</h3>
            <p className="body">We work on site with the people who will use the system, not only with their managers.</p>
          </div>
          <div className="pcard rv">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l9 5-9 5-9-5z" />
                <path d="M3 13l9 5 9-5" />
              </svg>
            </span>
            <h3>Open and connected</h3>
            <p className="body">We build on proven, widely supported technology and connect to the tools you already use.</p>
          </div>
          <div className="pcard rv">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <h3>Accountable</h3>
            <p className="body">Clear scopes, written sign-offs and honest reporting at every stage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
