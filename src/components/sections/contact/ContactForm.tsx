import type { CSSProperties } from 'react';

export function ContactForm() {
  return (
    <section className="sec tight" style={{ paddingTop: "10px" }}>
      <div className="wrap cgrid2">
        <form className="form rv" data-mail="" noValidate>
          <div className="fld">
            <label htmlFor="cn">Name</label>
            <input id="cn" name="name" autoComplete="name" />
          </div>
          <div className="fld">
            <label htmlFor="ce">Email</label>
            <input id="ce" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="fld">
            <label htmlFor="co">Organisation</label>
            <input id="co" name="org" autoComplete="organization" />
          </div>
          <div className="fld">
            <label htmlFor="cs">Sector</label>
            <select id="cs" name="sector">
              <option value="">Choose a sector</option>
              <option>Education</option>
              <option>Health</option>
              <option>Transportation</option>
              <option>Logistics</option>
              <option>E-commerce</option>
              <option>Construction</option>
              <option>Government</option>
              <option>Other</option>
            </select>
          </div>
          <div className="fld full">
            <label htmlFor="cm">What would you like to improve?</label>
            <textarea id="cm" name="msg" placeholder="Tell us about your service, your users and what slows them down." />
          </div>
          <div className="fld full" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
            <button className="btn p" type="submit">
              Send message
              {" "}
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </button>
            <span style={{ fontSize: "13px", color: "var(--muted)" }}>Opens your email app, ready to send.</span>
          </div>
          <p className="fmsg" aria-live="polite" />
        </form>
        <div className="cside" data-group="">
          <a className="ci rv" href="mailto:hamzsufian@gmail.com">
            <span className="ic" style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center", flex: "none" }}>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            <span>
              <small>Email</small>
              <span>hamzsufian@gmail.com</span>
            </span>
          </a>
          <a className="ci rv" href="tel:+251977129003">
            <span className="ic" style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center", flex: "none" }}>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
            </span>
            <span>
              <small>Phone</small>
              <span>+251 977 129 003</span>
            </span>
          </a>
          <div className="ci rv">
            <span className="ic" style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--accentsoft)", color: "var(--accenttext)", display: "grid", placeItems: "center", flex: "none" }}>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <span>
              <small>Office</small>
              <span>Shashemene, Ethiopia</span>
            </span>
          </div>
          <div className="book rv">
            <span style={{ fontSize: "13px", opacity: ".8" }}>Book a consultation</span>
            <h3 className="disp" style={{ fontSize: "28px" }}>Prefer to talk first?</h3>
            <p>A short call to understand your service and users. You get honest advice, even if we are not the right fit.</p>
            <a className="btn wh" href="mailto:hamzsufian@gmail.com?subject=Consultation%20request">Request a call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
