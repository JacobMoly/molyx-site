'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

const tight = "var(--font-inter-tight), ui-sans-serif, system-ui, sans-serif";

export default function SiteShell({ children }) {
  const [scrolled, setScrolled] = useState(false);

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

          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {[
              { href: "/#how", label: "How it works" },
              { href: "/#services", label: "What we build" },
              { href: "/examples", label: "Examples", isLink: true },
              { href: "/#faq", label: "FAQ" },
            ].map(({ href, label, isLink }) =>
              isLink ? (
                <Link
                  key={label}
                  href={href}
                  style={{ textDecoration: "none", color: "#54545e", fontSize: 14.5, fontWeight: 500 }}
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  style={{ textDecoration: "none", color: "#54545e", fontSize: 14.5, fontWeight: 500 }}
                >
                  {label}
                </a>
              )
            )}
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
        </nav>
      </header>

      <div style={{ flex: 1 }}>{children}</div>

      <footer style={{ borderTop: "1px solid #ededf2" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "40px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
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
          <span style={{ fontSize: 13.5, color: "#9494a0" }}>
            © 2026 Molyx Labs Ltd · Automation & AI for UK businesses
          </span>
        </div>
      </footer>
    </div>
  );
}
