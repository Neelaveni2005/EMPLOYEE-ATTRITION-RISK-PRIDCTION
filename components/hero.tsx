import Link from "next/link";

const spark = [38, 52, 44, 61, 48, 70, 58, 82, 66, 90, 74, 98];

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">
            <span className="dot" />
            Explainable people analytics
          </span>
          <h2>
            See who&apos;s at risk of leaving —{" "}
            <span className="accent">before they do.</span>
          </h2>
          <p className="lead">
            Workforce Attrition Intelligence turns raw HR data into live
            dashboards, an explainable risk score for every employee, and clear
            drivers behind each prediction — so your people team can act early,
            not react late.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              Open the live dashboard
            </Link>
            <a href="#features" className="btn btn-ghost btn-lg">
              Explore features
            </a>
          </div>
        </div>

        <div className="preview-card" aria-hidden="true">
          <div className="preview-head">
            <span className="title">Attrition overview</span>
            <span className="pill">
              <span className="d" /> Live filtered view
            </span>
          </div>
          <div className="mini-kpis">
            <div className="mini-kpi" style={{ "--accent": "var(--amber)" } as React.CSSProperties}>
              <div className="l">Total Employees</div>
              <div className="v">6,048</div>
              <div className="m">4,912 active</div>
            </div>
            <div className="mini-kpi" style={{ "--accent": "var(--coral)" } as React.CSSProperties}>
              <div className="l">Attrition Rate</div>
              <div className="v">27.4%</div>
              <div className="m">within typical range</div>
            </div>
            <div className="mini-kpi" style={{ "--accent": "var(--teal)" } as React.CSSProperties}>
              <div className="l">Avg Tenure</div>
              <div className="v">7.5 yrs</div>
              <div className="m">YearsAtCompany</div>
            </div>
            <div className="mini-kpi" style={{ "--accent": "var(--violet)" } as React.CSSProperties}>
              <div className="l">Avg Satisfaction</div>
              <div className="v">3.27 / 5</div>
              <div className="m">survey score</div>
            </div>
          </div>
          <div className="spark">
            {spark.map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
