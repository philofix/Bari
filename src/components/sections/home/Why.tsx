import content from '@/content/placeholders.json';

export function Why() {
  return (
    <section className="sec inv" id="why">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">Why Bari</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">Local</span></span>
              {" "}
              <span className="w"><span className="wi">roots.</span></span>
              {" "}
              <span className="w"><span className="wi">Proven</span></span>
              {" "}
              <span className="w"><span className="wi">practice.</span></span>
            </h2>
          </div>
          <p className="lead rv">A team close to the institutions it serves, with the discipline of a modern product company.</p>
        </div>
        <div className="bwrap rv">
          <div className="bgridx" data-group="">
            <div className="bc a rv">
              <div className="bp">
                <span className="onp">Based in Shashemene</span>
                <span>Ethiopia</span>
              </div>
              <p className="bt">
                Serving
                <br />
                <b>
                  <span data-count="" data-to="7">7</span>
                  {" "}
                  sectors
                </b>
              </p>
            </div>
            <div className="bc b rv">
              <div className="tw-wrap" aria-hidden="true">
                <span className="tw hi" style={{ left: "10%", top: "12%" }}>A</span>
                <span className="tw" style={{ left: "58%", top: "6%" }}>ሀ</span>
                <span className="tw" style={{ left: "34%", top: "34%" }}>B</span>
                <span className="tw" style={{ left: "74%", top: "38%" }}>ለ</span>
                <span className="tw hi" style={{ left: "12%", top: "56%" }}>Q</span>
                <span className="tw" style={{ left: "52%", top: "62%" }}>ሰ</span>
                <span className="tw" style={{ left: "84%", top: "14%" }}>O</span>
                <span className="tw" style={{ left: "30%", top: "10%" }}>ን</span>
                <span className="tw hi" style={{ left: "70%", top: "64%" }}>D</span>
                <span className="tw" style={{ left: "88%", top: "52%" }}>ጋ</span>
              </div>
              <div className="bb">
                <p className="bt" style={{ margin: "0" }}>
                  Interfaces in
                  <br />
                  <b>
                    <span data-count="" data-to="3">3</span>
                    {" "}
                    languages
                  </b>
                </p>
              </div>
            </div>
            <div className="bc c rv">
              <p className="bt">
                Trusted by
                {" "}
                <b>teams</b>
                <br />
                across every sector.
              </p>
              <div className="lgrid">
                <span className="lgo">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M12 3l9 9-9 9-9-9z" fill="currentColor" />
                  </svg>
                  <span>{content.trustedBy[0].name}</span>
                </span>
                <span className="lgo">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M9 6h9v9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{content.trustedBy[1].name}</span>
                </span>
                <span className="lgo">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M5 12a7 7 0 0 1 14 0z" fill="currentColor" />
                    <path d="M5 14a7 7 0 0 0 14 0z" fill="currentColor" opacity=".55" />
                  </svg>
                  <span>{content.trustedBy[2].name}</span>
                </span>
                <span className="lgo">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M6 7l6 5-6 5M12 7l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{content.trustedBy[3].name}</span>
                </span>
                <span className="lgo">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                    <rect x="5" y="11" width="3.4" height="8" fill="currentColor" />
                    <rect x="10.3" y="6" width="3.4" height="13" fill="currentColor" />
                    <rect x="15.6" y="9" width="3.4" height="10" fill="currentColor" />
                  </svg>
                  <span>{content.trustedBy[4].name}</span>
                </span>
                <span className="lgo">
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M12 4l7 4v8l-7 4-7-4V8z" fill="currentColor" />
                  </svg>
                  <span>{content.trustedBy[5].name}</span>
                </span>
              </div>
            </div>
            <div className="bc d rv">
              <p className="bt" style={{ margin: "0" }}>
                Focused in Oromia,
                <br />
                <b>built for Ethiopia.</b>
              </p>
              <p className="sm">Projects delivered on site and remotely, with a team that stays after launch.</p>
              <canvas className="globe" width="430" height="430" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
