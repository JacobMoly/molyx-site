import Link from "next/link";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/workflows", label: "Examples" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteShell({ children }) {
  return (
    <div className="site-frame">
      <header className="topbar">
        <div className="shell-inner nav-shell">
          <Link className="brand-mark" href="/">
            <span className="brand-dot" />
            Molyx Labs
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="button button-primary button-small"
            href={calendlyUrl}
            rel="noreferrer"
            target="_blank"
          >
            Book a Discovery Call
          </a>
        </div>
      </header>
      {children}
      <footer className="footer-shell">
        <div className="shell-inner footer-grid">
          <div>
            <p className="footer-brand">Molyx Labs</p>
            <p className="footer-text">
              AI agents and workflow automations for UK small businesses that
              want to reduce admin, improve operations, and run with less
              manual overhead.
            </p>
          </div>
          <div className="footer-links">
            <Link href="/workflows">Examples</Link>
            <Link href="/faq">FAQs</Link>
            <a href={calendlyUrl} rel="noreferrer" target="_blank">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
