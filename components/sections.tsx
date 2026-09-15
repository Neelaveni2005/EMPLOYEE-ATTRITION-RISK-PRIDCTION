import Link from "next/link";

const stats = [
  { v: "6K+", l: "Employee records modeled" },
  { v: "44", l: "Encoded model features" },
  { v: "10", l: "Interactive dashboard charts" },
  { v: "5", l: "Performance metrics tracked" },
];

export function StatBand() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="stat-band">
          {stats.map((s) => (
            <div className="stat" key={s.l}>
              <div className="v">{s.v}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "1",
    t: "Load your data",
    d: "Start with the built-in HR dataset or drop in your own CSV / Excel export in the Data Explorer.",
  },
  {
    n: "2",
    t: "Explore the dashboard",
    d: "Filter by department, city, gender and status to see attrition signals recomputed live.",
  },
  {
    n: "3",
    t: "Score an employee",
    d: "Enter a profile and get an explainable probability of attrition with its top risk drivers.",
  },
  {
    n: "4",
    t: "Validate the model",
    d: "Review accuracy, ROC-AUC, the confusion matrix and feature importance before you trust a score.",
  },
];

export function Workflow() {
  return (
    <section className="section" id="workflow">
      <div className="container">
        <div className="section-head center">
          <div className="kicker">How it works</div>
          <h3>From spreadsheet to decision in four steps</h3>
          <p>
            No pipelines to configure and nothing to install — the whole flow
            happens in the browser.
          </p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const modelFacts = [
  { k: "Algorithm", v: "Logistic Regression" },
  { k: "Encoded features", v: "44" },
  { k: "Train / test split", v: "80 / 20 stratified" },
  { k: "Class weighting", v: "Balanced" },
  { k: "Explainability", v: "Standardized log-odds" },
];

export function ModelSection() {
  return (
    <section className="section" id="model">
      <div className="container hero-grid">
        <div>
          <div className="kicker" style={{ color: "var(--teal)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "12.5px", marginBottom: 14 }}>
            Transparent by design
          </div>
          <h3 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800 }}>
            An explainable model you can actually trust
          </h3>
          <p style={{ color: "var(--text-dim)", fontSize: "16.5px", margin: "16px 0 28px", maxWidth: "52ch" }}>
            Predictions come from a balanced logistic-regression classifier
            trained on encoded HR features. Because it&apos;s linear, every score
            decomposes into the individual factors behind it — no black box,
            no guesswork.
          </p>
          <Link href="/dashboard" className="btn btn-primary btn-lg">
            Inspect model performance
          </Link>
        </div>
        <div className="preview-card">
          <div className="preview-head">
            <span className="title">Model summary</span>
            <span className="pill">
              <span className="d" /> Trained &amp; validated
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {modelFacts.map((f, i) => (
              <div
                key={f.k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "13px 2px",
                  fontSize: "13.5px",
                  borderBottom:
                    i === modelFacts.length - 1
                      ? "none"
                      : "1px solid var(--border-soft)",
                }}
              >
                <span style={{ color: "var(--text-faint)" }}>{f.k}</span>
                <span
                  style={{
                    color: "var(--text)",
                    fontWeight: 600,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {f.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <h3>Turn your HR data into early-warning signals today</h3>
          <p>
            Open the dashboard, filter your workforce, and score your first
            employee in under a minute. Everything runs right here in your
            browser.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              Launch the dashboard
            </Link>
            <a href="#features" className="btn btn-ghost btn-lg">
              Back to features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <div className="brand-mark">WA</div>
          <div className="brand-text">
            <h1>Workforce Attrition Intelligence</h1>
            <p>HR Analytics &amp; Risk Modeling</p>
          </div>
        </div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#model">Model</a>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <p>© {new Date().getFullYear()} Workforce Attrition Intelligence. Runs fully client-side.</p>
      </div>
    </footer>
  );
}
