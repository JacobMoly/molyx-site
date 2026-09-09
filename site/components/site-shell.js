'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

const tight = "var(--font-inter-tight), ui-sans-serif, system-ui, sans-serif";

const navItems = [
  { href: "/#how", label: "How it works" },
  { href: "/#services", label: "What we build" },
  { href: "/examples", label: "Examples" },
  { href: "/#faq", label: "FAQ" },
];

export default function SiteShell({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "saturate(180%) blur(14px)",
          WebkitBackdropFilter: "saturate(180%) blur(14px)",
          borderBottom: `1px solid rgba(20,20,30,${scrolled ? "0.08" : "0.06"})`,
          boxShadow: scrolled ? "0 8px 24px -16px rgba(20,20,30,0.15)" : "none",
          transition: "box-shadow 0.25s, border-color 0.25s",
        }}
      >
        <nav
          className="site-main-nav"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "18px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#16161a" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: 9,
                background: "#16161a",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  border: "2.5px solid #fff",
                  boxShadow: "7px 0 0 -5.5px #6366f1",
                }}
              />
            </span>
            <span style={{ fontFamily: tight, fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em" }}>
              Molyx Labs
            </span>
          </Link>

          <div className="site-desktop-nav">
            {navItems.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                style={{ textDecoration: "none", color: "#54545e", fontSize: 14.5, fontWeight: 500 }}
              >
                {label}
              </Link>
            ))}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                background: "#16161a",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "10px 18px",
                borderRadius: 9,
                letterSpacing: "-0.01em",
              }}
            >
              Book a call
            </a>
          </div>

          <button
            type="button"
            className="site-menu-button"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        <div
          id="site-mobile-menu"
          className={`site-mobile-menu ${menuOpen ? "is-open" : ""}`}
        >
          {navItems.map(({ href, label }) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Send a message
          </Link>
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="site-mobile-cta">
            Book a free call
          </a>
        </div>
      </header>

      <div style={{ flex: 1 }}>{children}</div>

      <footer style={{ borderTop: "1px solid #ededf2", background: "#fafafb" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "40px 32px",
            display: "grid",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "#16161a",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    border: "2.2px solid #fff",
                    boxShadow: "6px 0 0 -4.8px #6366f1",
                  }}
                />
              </span>
              <span style={{ fontFamily: tight, fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em", color: "#16161a" }}>
                Molyx Labs
              </span>
            </div>
            <div className="site-footer-links">
              <Link href="/services">Services</Link>
              <Link href="/examples">Examples</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #e7e7ed", paddingTop: 20, display: "grid", gap: 6, color: "#7a7a86", fontSize: 12.5, lineHeight: 1.55 }}>
            <span>© 2026 Molyx Labs. Molyx Labs is a trading name of MOLYX LTD.</span>
            <span>Registered in England and Wales · Company number 16987582</span>
            <span>Registered office: Flat 110-112 Essex Road, London, England, N1 8LX</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
