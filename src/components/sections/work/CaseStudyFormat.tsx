export function CaseStudyFormat() {
  return (
    <section className="sec alt">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">How we report</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">Every</span></span>
              {" "}
              <span className="w"><span className="wi">case</span></span>
              {" "}
              <span className="w"><span className="wi">study</span></span>
              {" "}
              <span className="w"><span className="wi">answers</span></span>
              {" "}
              <span className="w"><span className="wi">three</span></span>
              {" "}
              <span className="w"><span className="wi">questions.</span></span>
            </h2>
          </div>
          <p className="lead rv">Plain facts, agreed with the client, so you can judge the work for yourself.</p>
        </div>
        <div className="pcards" style={{ marginTop: "0" }} data-group="">
          <div className="pcard rv">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </span>
            <h3>Problem</h3>
            <p className="body">What was slow, lost or manual, in the client’s own words.</p>
          </div>
          <div className="pcard rv">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 7l-5 5 5 5" />
                <path d="M16 7l5 5-5 5" />
                <path d="M14 4l-4 16" />
              </svg>
            </span>
            <h3>What we built</h3>
            <p className="body">The system, the integrations and who uses it every day.</p>
          </div>
          <div className="pcard rv">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M7 15l4-4 3 3 5-6" />
              </svg>
            </span>
            <h3>Outcome</h3>
            <p className="body">Measured results after launch, reported with the client.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
