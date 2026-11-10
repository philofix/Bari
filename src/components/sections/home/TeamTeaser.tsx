import { Link } from '@/components/site/Link';

export function TeamTeaser() {
  return (
    <section className="sec tight">
      <div className="wrap">
        <div className="tteaser rv">
          <div className="ppl">
            <div style={{ display: "flex" }}>
              <span className="av">HS</span>
              <span className="av">MM</span>
              <span className="av">RS</span>
            </div>
            <div>
              <b style={{ fontSize: "17px" }}>Led by three co-founders</b>
              <p className="body" style={{ marginTop: "2px" }}>Health, technology and engineering, under one roof in Shashemene.</p>
            </div>
          </div>
          <Link className="btn o" href="/about">Meet the team</Link>
        </div>
      </div>
    </section>
  );
}
