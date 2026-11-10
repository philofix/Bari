import { Link } from '@/components/site/Link';

export function WorkCta() {
  return (
    <section className="dawnsec">
      <i className="bl b1" />
      <i className="bl b2" />
      <i className="bl b3" />
      <i className="bl b4" />
      <svg className="grain" aria-hidden="true">
        <rect width="100%" height="100%" filter="url(#gn)" />
      </svg>
      <div className="wrap">
        <div className="sheet cta rv">
          <span className="badge">
            <i>B</i>
            Get in touch
          </span>
          <h2 className="disp h2" data-split="">
            <span className="w"><span className="wi">Want</span></span>
            {" "}
            <span className="w"><span className="wi">to</span></span>
            {" "}
            <span className="w"><span className="wi">be</span></span>
            {" "}
            <span className="w"><span className="wi">our</span></span>
            {" "}
            <span className="w"><span className="wi">next</span></span>
            {" "}
            <span className="w"><span className="wi">case</span></span>
            {" "}
            <span className="w"><span className="wi">study?</span></span>
          </h2>
          <p className="lead">Tell us about the service you want to improve and we will show you what is possible.</p>
          <div className="hbtns">
            <Link className="btn p" href="/contact">
              Start a project
              {" "}
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a className="btn o" href="mailto:hamzsufian@gmail.com">hamzsufian@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
