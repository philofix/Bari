export function NextSteps() {
  return (
    <section className="sec alt">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">What happens next</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">Three</span></span>
              {" "}
              <span className="w"><span className="wi">steps</span></span>
              {" "}
              <span className="w"><span className="wi">to</span></span>
              {" "}
              <span className="w"><span className="wi">a</span></span>
              {" "}
              <span className="w"><span className="wi">working</span></span>
              {" "}
              <span className="w"><span className="wi">system.</span></span>
            </h2>
          </div>
        </div>
        <div className="pcards" style={{ marginTop: "0" }} data-group="">
          <div className="pcard rv">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z" />
              </svg>
            </span>
            <h3>Introductory meeting</h3>
            <p className="body">We learn about your organisation, your users and your goals.</p>
          </div>
          <div className="pcard rv">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
              </svg>
            </span>
            <h3>Discovery and proposal</h3>
            <p className="body">We map the requirements and return a written scope, timeline and cost.</p>
          </div>
          <div className="pcard rv">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
            <h3>Pilot and delivery</h3>
            <p className="body">We start small, prove the value, then roll out across your organisation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
