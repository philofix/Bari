import type { CSSProperties } from 'react';

export function Local() {
  return (
    <section className="sec inv" id="local">
      <div className="wrap">
        <div className="lhead">
          <span className="rv" style={{ fontSize: "14px", color: "var(--invmuted)" }}>Built for local use</span>
          <p className="big rv">Software that speaks your language, shows you what is happening, and reaches every phone.</p>
        </div>
        <div className="lpan" data-group="">
          <div className="lp rv">
            <div className="langs">
              <div className="lps" role="group" aria-label="Interface language">
                <button type="button" data-l="om" aria-pressed="false">Afaan Oromoo</button>
                <button type="button" data-l="am" aria-pressed="false" lang="am" style={{ fontFamily: "var(--eth)" }}>አማርኛ</button>
                <button type="button" data-l="en" aria-pressed="true">English</button>
              </div>
              <div className="lcard" id="lcard" lang="en">
                <span className="t">Welcome</span>
                <div className="r">
                  <span>Today</span>
                  <b>Today</b>
                </div>
                <div className="r">
                  <span>Search</span>
                  <b>Search</b>
                </div>
                <div className="r">
                  <span>Send</span>
                  <b>Send</b>
                </div>
              </div>
            </div>
          </div>
          <div className="lp mid rv">
            <div className="chart" data-go="" data-pts="[42, 48, 44, 51, 49, 96, 78, 42, 48, 44, 51, 49, 96, 78, 66]">
              <svg viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="var(--chart)" stopOpacity=".28" />
                    <stop offset="1" stopColor="var(--chart)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M20.0 176.9 L45.7 165.0 L71.4 172.9 L97.1 159.1 L122.9 163.0 L148.6 70.0 L174.3 105.6 L200.0 121.5 L225.7 113.5 L251.4 125.4 L277.1 115.5 L302.9 129.4 L328.6 119.5 L354.3 133.3 L380.0 141.2 L380.0 280 L20.0 280 Z" fill="url(#ga)" />
                <path className="cline" pathLength="1" d="M20.0 176.9 L45.7 165.0 L71.4 172.9 L97.1 159.1 L122.9 163.0 L148.6 70.0 L174.3 105.6 L200.0 121.5 L225.7 113.5 L251.4 125.4 L277.1 115.5 L302.9 129.4 L328.6 119.5 L354.3 133.3 L380.0 141.2" />
              </svg>
              <span className="cur" style={{ left: "80%" }} />
              <div className="ctip">
                <b>96 requests</b>
                <small>Sat, week 12</small>
              </div>
            </div>
          </div>
          <div className="lp rv">
            <div className="phone" aria-hidden="true">
              <span className="n">09:41</span>
              <div className="sms">
                <b>Your clinic</b>
                Your appointment is on Friday at 10:00. Reply 1 to confirm.
              </div>
              <div className="sms">
                <b>Your school</b>
                Abdi was present today. Term fees are due on the 30th.
              </div>
            </div>
          </div>
        </div>
        <div className="lcap" data-group="">
          <div className="rv">
            <h3>Your language</h3>
            <p>Interfaces in Afaan Oromoo, Amharic and English, reviewed with native speakers.</p>
          </div>
          <div className="rv">
            <h3>Live reporting</h3>
            <p>Every request, visit and payment shows up on a dashboard as it happens.</p>
          </div>
          <div className="rv">
            <h3>Reaches every phone</h3>
            <p>SMS updates work on any phone, so nobody is left out by a smartphone app.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
