import { Link } from '@/components/site/Link';

export function Howcards() {
  return (
    <section className="sec inv" id="howcards">
      <div className="wrap">
        <div className="ph">
          <div className="t">
            <span className="mono2 rv">// How we work</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">From</span></span>
              {" "}
              <span className="w"><span className="wi">first</span></span>
              {" "}
              <span className="w"><span className="wi">meeting</span></span>
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
          <Link className="btn wh rv" href="/process">See the full process</Link>
        </div>
        <div className="pcg" data-group="">
          <svg className="arcs" viewBox="0 0 1200 380" preserveAspectRatio="none" aria-hidden="true">
            <circle cx="330" cy="120" r="200" />
            <circle cx="620" cy="150" r="170" />
            <path d="M0 210C80 250 150 300 230 330" />
            <path d="M1200 60C1110 120 1040 200 980 300" />
          </svg>
          <div className="pcd rv">
            <span className="n">01.</span>
            <div>
              <h3>Discover</h3>
              <p>We meet the people who will use the system, map current processes and agree the goals.</p>
            </div>
          </div>
          <div className="pcd rv">
            <span className="n">02.</span>
            <div>
              <h3>Design</h3>
              <p>Clickable prototypes, tested with your team before any code is written.</p>
            </div>
          </div>
          <div className="pcd rv">
            <span className="n">03.</span>
            <div>
              <h3>Build and test</h3>
              <p>Short cycles, tested with real users on real devices and networks.</p>
            </div>
          </div>
          <div className="pcd rv">
            <span className="n">04.</span>
            <svg className="plane" viewBox="0 0 120 90" aria-hidden="true" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="1.4" strokeDasharray="6 6" strokeLinejoin="round">
              <path d="M6 24L114 6 78 84 56 52z" />
              <path d="M114 6L56 52" />
              <path d="M56 52L52 80" />
            </svg>
            <div>
              <h3>Launch and support</h3>
              <p>Deployment, data migration and training, then continuous improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
