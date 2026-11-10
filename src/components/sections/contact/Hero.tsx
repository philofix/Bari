export function Hero() {
  return (
    <section className="phero">
      <div className="glow" aria-hidden="true" />
      <div className="wrap in">
        <div>
          <span className="eyebrow rv">Contact</span>
          <h1 className="disp h1" data-split="">
            <span className="w"><span className="wi">Let’s</span></span>
            {" "}
            <span className="w"><span className="wi">talk</span></span>
            {" "}
            <span className="w"><span className="wi">about</span></span>
            {" "}
            <span className="w"><span className="wi">your</span></span>
            {" "}
            <span className="w"><span className="wi">project.</span></span>
          </h1>
        </div>
        <div>
          <p className="lead rv">Tell us what you want to improve. We reply with clear next steps, and every engagement starts with discovery.</p>
        </div>
      </div>
    </section>
  );
}
