import content from '@/content/placeholders.json';

export function Team() {
  return (
    <section className="sec alt" id="team">
      <div className="wrap">
        <div className="shead">
          <div className="t">
            <span className="eyebrow">Leadership</span>
            <h2 className="disp h2" data-split="">
              <span className="w"><span className="wi">The</span></span>
              {" "}
              <span className="w"><span className="wi">founders.</span></span>
            </h2>
          </div>
          <p className="lead rv">Health, technology and engineering, under one roof.</p>
        </div>
        <div className="team" data-group="">
          <div className="tm rv" data-hover="">
            <span className="av">HS</span>
            <h3>Hamza Sufiyan</h3>
            <span className="role">CEO and Co-founder</span>
            <p className="body">Leads strategy, partnerships and growth. A Jimma University graduate in the health sciences, Hamza brings first-hand understanding of how essential services reach people, paired with a long-standing focus on technology and problem solving.</p>
          </div>
          <div className="tm rv" data-hover="">
            <span className="av">MM</span>
            <h3>Mensur Mohammed</h3>
            <span className="role">CTO and Co-founder</span>
            <p className="body">Leads product and engineering. A graduate of Jimma Institute of Technology, Mensur has worked with fintech and education technology companies as a product designer and product manager, and owns the experience of every system Bari builds.</p>
          </div>
          <div className="tm rv" data-hover="">
            <span className="av">RS</span>
            <h3>Redwan Sufiyan</h3>
            <span className="role">COO and Co-founder</span>
            <p className="body">Leads operations and project delivery. An engineer by training, Redwan has worked across construction, education, commercial markets and government institutions, and manages Bari’s relationships with public-sector clients.</p>
          </div>
        </div>
        <div className="shead" style={{ marginTop: "96px" }}>
          <div className="t">
            <span className="eyebrow">Advisors</span>
            <h2 className="disp h3" data-split="">
              <span className="w"><span className="wi">Advisory</span></span>
              {" "}
              <span className="w"><span className="wi">board.</span></span>
            </h2>
          </div>
          <p className="lead rv">Experienced engineers who guide Bari on AI, software quality and product delivery.</p>
        </div>
        <div className="team" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }} data-group="">
          <div className="tm rv" data-hover="">
            <span className="av">{content.advisors[0].initials}</span>
            <h3>{content.advisors[0].name}</h3>
            <span className="role">{content.advisors[0].role}</span>
            <p className="body">{content.advisors[0].bio}</p>
          </div>
          <div className="tm rv" data-hover="">
            <span className="av">{content.advisors[1].initials}</span>
            <h3>{content.advisors[1].name}</h3>
            <span className="role">{content.advisors[1].role}</span>
            <p className="body">{content.advisors[1].bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
