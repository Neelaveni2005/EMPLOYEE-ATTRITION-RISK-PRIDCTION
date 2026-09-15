import Link from "next/link";

export function SiteNav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Workforce Attrition Intelligence home">
          <div className="brand-mark">WA</div>
          <div className="brand-text">
            <h1>Workforce Attrition</h1>
            <p>Intelligence</p>
          </div>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#model">The model</a>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <div className="nav-cta">
          <Link href="/dashboard" className="btn btn-primary">
            Launch Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
