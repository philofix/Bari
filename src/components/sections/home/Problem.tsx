export function Problem() {
  return (
    <section className="sec alt" id="problem">
      <div className="wrap">
        <span className="eyebrow">The problem</span>
        <p className="stmt" style={{ marginTop: "26px" }}>
          <span className="sw" data-h="1">Too</span>
          {" "}
          <span className="sw" data-h="1">many</span>
          {" "}
          <span className="sw" data-h="1">schools,</span>
          {" "}
          <span className="sw" data-h="1">clinics</span>
          {" "}
          <span className="sw" data-h="1">and</span>
          {" "}
          <span className="sw" data-h="1">public</span>
          {" "}
          <span className="sw" data-h="1">offices</span>
          {" "}
          <span className="sw" data-h="1">still</span>
          {" "}
          <span className="sw" data-h="1">run</span>
          {" "}
          <span className="sw" data-h="1">on</span>
          {" "}
          <span className="sw" data-h="1">paper</span>
          {" "}
          <span className="sw" data-h="1">registers,</span>
          {" "}
          <span className="sw" data-h="1">spreadsheets</span>
          {" "}
          <span className="sw" data-h="1">and</span>
          {" "}
          <span className="sw" data-h="1">phone</span>
          {" "}
          <span className="sw" data-h="1">calls.</span>
          {" "}
          <span className="dim">
            <span className="sw" data-h="0.5">Information</span>
            {" "}
            <span className="sw" data-h="0.5">stops</span>
            {" "}
            <span className="sw" data-h="0.5">at</span>
            {" "}
            <span className="sw" data-h="0.5">the</span>
            {" "}
            <span className="sw" data-h="0.5">door,</span>
            {" "}
            <span className="sw" data-h="0.5">reports</span>
            {" "}
            <span className="sw" data-h="0.5">take</span>
            {" "}
            <span className="sw" data-h="0.5">days,</span>
            {" "}
            <span className="sw" data-h="0.5">and</span>
            {" "}
            <span className="sw" data-h="0.5">people</span>
            {" "}
            <span className="sw" data-h="0.5">wait.</span>
          </span>
        </p>
        <div className="pcards" data-group="">
          <div className="pcard rv" data-hover="">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
              </svg>
            </span>
            <h3>Records live on paper</h3>
            <p className="body">Offices lose hours searching, copying and re-entering the same information.</p>
          </div>
          <div className="pcard rv" data-hover="">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l9 5-9 5-9-5z" />
                <path d="M3 13l9 5 9-5" />
              </svg>
            </span>
            <h3>Systems don’t connect</h3>
            <p className="body">Each office runs its own tool, so information stops at the door.</p>
          </div>
          <div className="pcard rv" data-hover="">
            <span className="ic">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a14 14 0 0 1 0 18" />
                <path d="M12 3a14 14 0 0 0 0 18" />
              </svg>
            </span>
            <h3>Built for somewhere else</h3>
            <p className="body">Imported software misses local languages, workflows and network conditions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
