import { Link } from '@/components/site/Link';

export function Faq({ idPrefix = 'h' }: { idPrefix?: string }) {
  return (
    <section className="sec">
      <div className="wrap fgrid">
        <div className="rv">
          <span className="eyebrow">FAQ</span>
          <h2 className="disp h2" data-split="" style={{ marginTop: "18px" }}>
            <span className="w"><span className="wi">Questions,</span></span>
            {" "}
            <span className="w"><span className="wi">answered.</span></span>
          </h2>
          <p className="lead" style={{ marginTop: "18px", maxWidth: "360px" }}>Anything else? Send us a message and we will reply with a clear answer.</p>
          <Link className="tl" href="/contact" style={{ marginTop: "18px" }}>
            Ask a question
            {" "}
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        <div className="fql" data-group="">
          <div className="fq rv">
            <button type="button" className="fqb" id={`${idPrefix}fb0`} aria-expanded="true" aria-controls={`${idPrefix}fp0`}>
              <span>How long does a project take?</span>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="fqp" id={`${idPrefix}fp0`} role="region" aria-labelledby={`${idPrefix}fb0`}>
              <p>It depends on the scope. After discovery you receive a clear timeline before any work starts.</p>
            </div>
          </div>
          <div className="fq rv">
            <button type="button" className="fqb" id={`${idPrefix}fb1`} aria-expanded="false" aria-controls={`${idPrefix}fp1`}>
              <span>Can you work with the systems we already use?</span>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="fqp" id={`${idPrefix}fp1`} role="region" aria-labelledby={`${idPrefix}fb1`} hidden>
              <p>Yes. We connect to existing databases, SMS and payment services, and map them together with you in discovery.</p>
            </div>
          </div>
          <div className="fq rv">
            <button type="button" className="fqb" id={`${idPrefix}fb2`} aria-expanded="false" aria-controls={`${idPrefix}fp2`}>
              <span>Where is our data stored?</span>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="fqp" id={`${idPrefix}fp2`} role="region" aria-labelledby={`${idPrefix}fb2`} hidden>
              <p>On Bari cloud, in a cloud account of your choice, or on your own servers. You own your data.</p>
            </div>
          </div>
          <div className="fq rv">
            <button type="button" className="fqb" id={`${idPrefix}fb3`} aria-expanded="false" aria-controls={`${idPrefix}fp3`}>
              <span>Do you support our language?</span>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="fqp" id={`${idPrefix}fp3`} role="region" aria-labelledby={`${idPrefix}fb3`} hidden>
              <p>Yes. Interfaces are available in Afaan Oromoo, Amharic and English.</p>
            </div>
          </div>
          <div className="fq rv">
            <button type="button" className="fqb" id={`${idPrefix}fb4`} aria-expanded="false" aria-controls={`${idPrefix}fp4`}>
              <span>What happens after launch?</span>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="fqp" id={`${idPrefix}fp4`} role="region" aria-labelledby={`${idPrefix}fb4`} hidden>
              <p>We provide staff training, help-desk support, monitoring and regular updates.</p>
            </div>
          </div>
          <div className="fq rv">
            <button type="button" className="fqb" id={`${idPrefix}fb5`} aria-expanded="false" aria-controls={`${idPrefix}fp5`}>
              <span>How much does it cost?</span>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="fqp" id={`${idPrefix}fp5`} role="region" aria-labelledby={`${idPrefix}fb5`} hidden>
              <p>Every engagement is priced after discovery, based on scope, users and deployment. You receive a written quote before work begins.</p>
            </div>
          </div>
          <div className="fq rv">
            <button type="button" className="fqb" id={`${idPrefix}fb6`} aria-expanded="false" aria-controls={`${idPrefix}fp6`}>
              <span>How do we start?</span>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="fqp" id={`${idPrefix}fp6`} role="region" aria-labelledby={`${idPrefix}fb6`} hidden>
              <p>Send us a message or book a consultation. We learn about your service and users, then return a scope, timeline and cost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
