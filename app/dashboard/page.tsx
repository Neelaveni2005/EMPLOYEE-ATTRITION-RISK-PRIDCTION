import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Workforce Attrition Intelligence",
  description:
    "Live HR analytics dashboard: attrition KPIs, interactive charts, risk prediction, model performance and a data explorer.",
};

export default function DashboardPage() {
  return (
    <div className="dash-shell">
      <div className="dash-bar">
        <Link href="/" className="back">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to site
        </Link>
        <span className="brand" style={{ gap: 9 }}>
          <span className="brand-mark" style={{ width: 30, height: 30, fontSize: 13 }}>
            WA
          </span>
          <span className="brand-text">
            <h1 style={{ fontSize: 13.5 }}>Attrition Dashboard</h1>
          </span>
        </span>
      </div>
      <iframe
        className="dash-frame"
        src="/dashboard.html"
        title="Workforce Attrition Intelligence dashboard"
      />
    </div>
  );
}
