import Link from "next/link";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

export default function SiteShell({ children }) {
  return (
    <div className="site-frame">
      <header className="topbar">
        <div className="shell-inner nav-shell">
          <Link className="brand-mark" href="/" aria-label="Molyx Labs home">
            <span className="brand-symbol"><i /><i /><i /></span>
            <span>MOLYX<small>LABS</small></span>
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            <Link href="/services">Services</Link>
            <Link href="/examples">Examples</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="nav-cta" href={calendlyUrl} rel="noreferrer" target="_blank">
            Book an audit <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>
      {children}
      <footer className="footer-shell">
        <div className="shell-inner footer-grid">
          <Link className="brand-mark footer-mark" href="/">
            <span className="brand-symbol"><i /><i /><i /></span>
            <span>MOLYX<small>LABS</small></span>
          </Link>
          <p>Practical AI agents and automation for UK businesses.</p>
          <div className="footer-links">
            <Link href="/services">Services</Link>
            <Link href="/examples">Examples</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <span className="footer-meta">London, UK · © 2026 Molyx Labs</span>
        </div>
      </footer>
    </div>
  );
}
