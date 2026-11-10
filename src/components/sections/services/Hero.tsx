export function Hero() {
  return (
    <section className="phero">
      <div className="glow" aria-hidden="true" />
      <div className="wrap in">
        <div>
          <span className="eyebrow rv">Services</span>
          <h1 className="disp h1" data-split="">
            <span className="w"><span className="wi">Everything</span></span>
            {" "}
            <span className="w"><span className="wi">an</span></span>
            {" "}
            <span className="w"><span className="wi">institution</span></span>
            {" "}
            <span className="w"><span className="wi">needs</span></span>
            {" "}
            <span className="w"><span className="wi">to</span></span>
            {" "}
            <span className="w"><span className="wi">go</span></span>
            {" "}
            <span className="w"><span className="wi">digital.</span></span>
          </h1>
        </div>
        <div>
          <p className="lead rv">Eight services from one team, from research and design to the support that keeps your system running.</p>
          <div className="crumbs rv">
            <button type="button" data-to="svc0">Custom software</button>
            <button type="button" data-to="svc1">Mobile apps</button>
            <button type="button" data-to="svc2">Web platforms</button>
            <button type="button" data-to="svc3">E-commerce</button>
            <button type="button" data-to="svc4">Information systems</button>
            <button type="button" data-to="svc5">Dashboards</button>
            <button type="button" data-to="svc6">Product design</button>
            <button type="button" data-to="svc7">Training and support</button>
          </div>
        </div>
      </div>
    </section>
  );
}
