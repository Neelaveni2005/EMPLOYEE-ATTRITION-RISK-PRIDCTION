const features = [
  {
    tone: "amber",
    title: "Live analytics dashboard",
    body: "Six headline KPIs plus interactive charts for department, city, tenure, age, work mode, overtime and satisfaction — all recalculated instantly as you filter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    tone: "coral",
    title: "Attrition risk scoring",
    body: "Enter an employee profile and get an instant probability of attrition, banded into low, medium and high risk with a calibrated confidence gauge.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 2v10l7 7" />
      </svg>
    ),
  },
  {
    tone: "teal",
    title: "Explainable predictions",
    body: "Every score comes with the factors driving it — standardized log-odds contributions show exactly what pushes risk up or down for that person.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-6 4 3 5-8" />
      </svg>
    ),
  },
  {
    tone: "violet",
    title: "Self-serve data explorer",
    body: "Search, sort and paginate the full employee dataset. Bring your own CSV or Excel file and the whole platform re-computes around it — no code required.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M9 10v10" />
      </svg>
    ),
  },
  {
    tone: "blue",
    title: "Model performance built in",
    body: "Accuracy, precision, recall, F1 and ROC-AUC, a confusion matrix and a ranked feature-importance chart keep the model transparent and auditable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16v16H4z" />
        <path d="M4 14l4-4 4 3 4-6 4 5" />
      </svg>
    ),
  },
  {
    tone: "amber",
    title: "Runs anywhere, instantly",
    body: "The analytics engine runs entirely client-side — no server round-trips, no external database. Deploy it once and it just works, even offline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Everything in one place</div>
          <h3>A complete attrition-intelligence toolkit</h3>
          <p>
            From board-level KPIs to a per-employee risk score, every view is
            interactive and connected to the same underlying data model.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className={`feature-icon ${f.tone}`}>{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
