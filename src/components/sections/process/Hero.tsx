export function Hero() {
  return (
    <section className="phero">
      <div className="glow" aria-hidden="true" />
      <div className="wrap in">
        <div>
          <span className="eyebrow rv">How we work</span>
          <h1 className="disp h1" data-split="">
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
          </h1>
        </div>
        <div>
          <p className="lead rv">A clear four-stage process keeps every project on scope, on schedule and focused on the people who will use it.</p>
          <div className="crumbs rv">
            <button type="button" data-to="stages">The four stages</button>
            <button type="button" data-to="tracking">Project tracking</button>
            <button type="button" data-to="deploy">Deployment</button>
            <button type="button" data-to="support">After launch</button>
          </div>
        </div>
      </div>
    </section>
  );
}
