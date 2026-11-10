export function Location() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="where rv">
          <div className="wt">
            <div>
              <span className="eyebrow" style={{ color: "#c9d9ff" }}>Where we work</span>
              <h2 className="disp h2" data-split="" style={{ marginTop: "18px" }}>
                <span className="w"><span className="wi">Rooted</span></span>
                {" "}
                <span className="w"><span className="wi">in</span></span>
                {" "}
                <span className="w"><span className="wi">Shashemene.</span></span>
                <br />
                <span className="w"><span className="wi">Working</span></span>
                {" "}
                <span className="w"><span className="wi">across</span></span>
                {" "}
                <span className="w"><span className="wi">Ethiopia.</span></span>
              </h2>
              <p className="wl">Our team works on site with clients and supports them remotely, wherever their offices are.</p>
            </div>
            <div className="wstats">
              <div className="wst">
                <b>
                  <span data-count="" data-to="7">7</span>
                  {" "}
                  sectors
                </b>
                <span>Public and private</span>
              </div>
              <div className="wst">
                <b>
                  <span data-count="" data-to="3">3</span>
                  {" "}
                  languages
                </b>
                <span>Afaan Oromoo, Amharic, English</span>
              </div>
            </div>
          </div>
          <canvas className="bigglobe" width="1000" height="1000" aria-hidden="true" />
          <span className="pin" id="pin">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Shashemene
          </span>
        </div>
      </div>
    </section>
  );
}
