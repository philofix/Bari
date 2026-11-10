export function Hero() {
  return (
    <section className="phero">
      <div className="glow" aria-hidden="true" />
      <div className="wrap">
        <span className="eyebrow rv">About Bari</span>
        <p className="bigword rv" style={{ marginTop: "20px" }} aria-label="Barii">
          Barii
          <i>.</i>
        </p>
        <div className="defs" data-group="">
          <div className="rv">
            <small>Afaan Oromoo</small>
            <b>Barii</b>
          </div>
          <div className="rv">
            <small>Amharic</small>
            <b className="et">ንጋት</b>
          </div>
          <div className="rv">
            <small>English</small>
            <b>Dawn</b>
          </div>
        </div>
        <p className="lead rv" style={{ marginTop: "28px", maxWidth: "720px" }}>Barii is the Afaan Oromoo word for dawn, the first light of a new day. Our name is our promise: a better start for the people every institution serves.</p>
      </div>
    </section>
  );
}
