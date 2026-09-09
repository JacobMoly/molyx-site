import Link from "next/link";
import Reveal from "../components/reveal";
import FAQ from "../components/faq";
import HeroGraphic from "../components/hero-graphic";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";
const tight = "var(--font-inter-tight), ui-sans-serif, system-ui, sans-serif";

function Ic({ path, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

const stats = [
  { value: "30 min", label: "free, no-prep discovery call" },
  { value: "1 flow", label: "a focused first project before wider automation" },
  { value: "Clear", label: "scope and cost agreed before any build" },
  { value: "UK", label: "based, responsive, plain-English support" },
];

const problems = [
  {
    iconPath: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
    title: "Copy-paste between apps",
    body: "Moving data from email to spreadsheet to CRM by hand — every day, in every team.",
  },
  {
    iconPath: "M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3zM12 7v5l3 2",
    title: "Slow, manual responses",
    body: "Enquiries, quotes and follow-ups sitting in an inbox while customers wait and leads go cold.",
  },
  {
    iconPath: "M3 3v18h18M7 14l4-4 3 3 5-6",
    title: "No time for the real work",
    body: "Skilled people stuck on admin instead of the work that actually grows the business.",
  },
];

const services = [
  {
    iconPath: "M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3",
    hasCircle: true,
    title: "Workflow automation",
    body: "Connect your apps so data flows on its own — no more copy-paste, no more dropped handovers between tools.",
    tags: ["Zapier", "Make", "Integrations"],
  },
  {
    iconPath: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 9h.01M15 9h.01M9 14c.8 1 2.2 1 3 0",
    title: "AI agents & assistants",
    body: "Custom assistants that handle enquiries, draft replies, triage tickets and answer questions from your own documents.",
    tags: ["OpenAI", "Chat agents", "RAG"],
  },
  {
    iconPath: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    title: "Lead & enquiry handling",
    body: "Capture, qualify and route every enquiry instantly, with follow-ups that fire automatically so nothing slips.",
    tags: ["CRM", "Forms", "Follow-up"],
  },
  {
    iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 13l2 2 4-4",
    title: "Reporting & admin",
    body: "Automated reports, invoicing nudges and data entry — the recurring admin that quietly eats your week.",
    tags: ["Xero", "Sheets", "Scheduling"],
  },
];

const steps = [
  { num: "01", title: "Discovery", body: "A free call to understand your business and surface where time is actually being lost." },
  { num: "02", title: "Scope", body: "We pinpoint the highest-impact problems and propose a clear, costed plan — no jargon." },
  { num: "03", title: "Build", body: "We build and test the automation on your real tools, delivered in stages you can see." },
  { num: "04", title: "Support", body: "We hand over, train your team and stay on call to refine as your needs change." },
];

const whys = [
  { title: "We start with your problem", body: "Not a product demo. Every build begins from a real bottleneck in your business." },
  { title: "Pays for itself", body: "We only recommend automation when the time or money saved clearly outweighs the cost." },
  { title: "No lock-in", body: "Built on platforms you own and understand, so you're never trapped or in the dark." },
  { title: "UK-based & responsive", body: "Talk to the people who built it — not a ticket queue in another timezone." },
];

export default function Home() {
  return (
    <main style={{ color: "#16161a", background: "#fff", overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 32px 80px", position: "relative" }}>
        <HeroGraphic />
        <div style={{ position: "relative", maxWidth: 720 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#f4f4f8", border: "1px solid #ececf2", borderRadius: 100, padding: "7px 15px 7px 12px", marginBottom: 30 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.18)", flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "#54545e" }}>AI automation studio · United Kingdom</span>
          </div>
          <h1 style={{ fontFamily: tight, fontWeight: 700, fontSize: "clamp(42px,5.5vw,62px)", lineHeight: 1.04, letterSpacing: "-0.035em", margin: "0 0 24px", color: "#0e0e14" }}>
            We find the work that's slowing you down — then automate it.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: "#54545e", margin: "0 0 36px", maxWidth: 560, fontWeight: 450 }}>
            Molyx Labs builds custom automations, workflows, and AI agents for UK small and medium businesses. We start with a free discovery call to find the real bottlenecks — then build solutions that pay for themselves.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#16161a", color: "#fff", fontFamily: tight, fontSize: 16, fontWeight: 600, padding: "15px 26px", borderRadius: 11, textDecoration: "none", letterSpacing: "-0.01em" }}
            >
              Book a free discovery call
              <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
            </a>
            <a
              href="#how"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#16161a", fontSize: 16, fontWeight: 600, padding: "15px 20px", borderRadius: 11, textDecoration: "none", border: "1px solid #e2e2ea" }}
            >
              See how it works
            </a>
          </div>
          <div style={{ marginTop: 44, display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, color: "#9494a0", fontWeight: 500 }}>Built on the tools you already trust</span>
            <div style={{ display: "flex", alignItems: "center", gap: 22, color: "#b4b4be", fontWeight: 600, fontSize: 14.5, fontFamily: tight }}>
              {["Zapier", "Make", "OpenAI", "HubSpot", "Xero"].map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ borderTop: "1px solid #ededf2", borderBottom: "1px solid #ededf2", background: "#fafafb" }}>
        <div className="home-stats-grid" style={{ maxWidth: 1180, margin: "0 auto", padding: "38px 32px", display: "grid", gap: 24 }}>
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 90} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ fontFamily: tight, fontWeight: 700, fontSize: 38, letterSpacing: "-0.03em", color: "#0e0e14" }}>{s.value}</span>
              <span style={{ fontSize: 14, color: "#6a6a74", lineHeight: 1.4 }}>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* THE PROBLEM */}
      <section id="how" style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 32px 30px" }}>
        <div style={{ maxWidth: 600, marginBottom: 56 }}>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6366f1" }}>The problem</span>
          <h2 style={{ fontFamily: tight, fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "14px 0 0", color: "#0e0e14" }}>
            Your team is doing work that software should be doing.
          </h2>
        </div>
        <div className="home-three-grid" style={{ display: "grid", gap: 22 }}>
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} style={{ background: "#fff", border: "1px solid #ececf2", borderRadius: 16, padding: 28 }}>
              <div style={{ width: 42, height: 42, borderRadius: 11, background: "linear-gradient(135deg,#eef0ff,#f4f4f8)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, color: "#6366f1" }}>
                <Ic path={p.iconPath} />
              </div>
              <h3 style={{ fontFamily: tight, fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em", margin: "0 0 8px", color: "#16161a" }}>{p.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#6a6a74", margin: 0 }}>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ maxWidth: 1180, margin: "0 auto", padding: "90px 32px 30px" }}>
        <div style={{ maxWidth: 600, marginBottom: 56 }}>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6366f1" }}>What we build</span>
          <h2 style={{ fontFamily: tight, fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "14px 0 0", color: "#0e0e14" }}>
            Practical solutions, built around how you actually work.
          </h2>
          <Link href="/examples" style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 16, color: "#6366f1", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
            See real pain-point → agent → benefit examples <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
          </Link>
        </div>
        <div className="home-two-grid" style={{ display: "grid", gap: 22 }}>
          {services.map((sv, i) => (
            <Reveal key={sv.title} delay={i * 90} style={{ background: "#fff", border: "1px solid #ececf2", borderRadius: 18, padding: 34, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg,#16161a,#2f2f42)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                  <Ic path={sv.iconPath} />
                </div>
                <h3 style={{ fontFamily: tight, fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em", margin: 0, color: "#0e0e14" }}>{sv.title}</h3>
              </div>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#6a6a74", margin: 0 }}>{sv.body}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {sv.tags.map((t) => (
                  <span key={t} style={{ fontSize: 12.5, fontWeight: 500, color: "#54545e", background: "#f4f4f8", border: "1px solid #ececf2", borderRadius: 7, padding: "5px 10px" }}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: "#0e0e14", marginTop: 100 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 32px" }}>
          <div style={{ maxWidth: 600, marginBottom: 60 }}>
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#a5a5f5" }}>Our process</span>
            <h2 style={{ fontFamily: tight, fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "14px 0 16px", color: "#fff" }}>
              Problems first. Software second.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "#9a9aa8", margin: 0 }}>
              We don't sell you a tool and hope it fits. We learn your business, then build only what moves the needle.
            </p>
          </div>
          <div className="home-process-grid" style={{ display: "grid", gap: 0 }}>
            {steps.map((st, i) => (
              <Reveal key={st.num} delay={i * 90} style={{ padding: "0 24px 0", borderLeft: "1px solid #26263a", paddingLeft: 24 }}>
                <span style={{ fontFamily: tight, fontWeight: 700, fontSize: 14, color: "#6366f1", letterSpacing: "0.04em" }}>{st.num}</span>
                <h3 style={{ fontFamily: tight, fontWeight: 600, fontSize: 19, letterSpacing: "-0.01em", margin: "14px 0 9px", color: "#fff" }}>{st.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#8a8a98", margin: 0 }}>{st.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MOLYX */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 32px 30px" }}>
        <div className="home-why-grid" style={{ display: "grid", gap: 72, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6366f1" }}>Why Molyx</span>
            <h2 style={{ fontFamily: tight, fontWeight: 700, fontSize: "clamp(26px,3.5vw,38px)", lineHeight: 1.12, letterSpacing: "-0.03em", margin: "14px 0 22px", color: "#0e0e14" }}>
              A technical partner that speaks plain English.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {whys.map((w, i) => (
                <Reveal key={w.title} delay={i * 80} translateY={20} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", background: "#eef0ff", color: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 style={{ fontFamily: tight, fontWeight: 600, fontSize: 17, margin: "0 0 4px", color: "#16161a" }}>{w.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.55, color: "#6a6a74", margin: 0 }}>{w.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal style={{ background: "linear-gradient(145deg,#0e0e14,#202033)", border: "1px solid #29293d", borderRadius: 20, padding: 38 }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#a5a5f5" }}>
              A lower-risk first project
            </span>
            <h3 style={{ fontFamily: tight, fontSize: 28, lineHeight: 1.2, letterSpacing: "-0.025em", color: "#fff", margin: "14px 0 12px", fontWeight: 700 }}>
              Start small. Prove value. Then expand.
            </h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#b2b2c0", margin: "0 0 24px" }}>
              The first build targets one measurable bottleneck, keeps people in control, and is documented clearly before handover.
            </p>
            <div style={{ display: "grid", gap: 11 }}>
              {["One focused workflow", "A measurable success target", "Human review where it matters", "Documented handover and support"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: "#ededf5", fontSize: 14.5 }}>
                  <span style={{ width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "rgba(99,102,241,0.22)", color: "#b8b8ff", fontSize: 12 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "90px 32px 30px" }}>
        <Reveal style={{ background: "#fafafb", border: "1px solid #ececf2", borderRadius: 22, padding: 48 }}>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6366f1" }}>How we work</span>
          <h2 style={{ fontFamily: tight, fontWeight: 700, fontSize: 30, lineHeight: 1.2, letterSpacing: "-0.02em", margin: "12px 0 14px", color: "#0e0e14", maxWidth: 560 }}>
            Direct, practical, and accountable.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6a6a74", margin: 0, maxWidth: 620 }}>
            Molyx Labs is a UK-based automation studio focused on finding the manual work slowing a business down and making it disappear. You work directly with the people designing and building the system, with a clear scope, visible progress, and no unnecessary handoffs.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ maxWidth: 820, margin: "0 auto", padding: "100px 32px 30px" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6366f1" }}>FAQ</span>
          <h2 style={{ fontFamily: tight, fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "14px 0 0", color: "#0e0e14" }}>
            Questions, answered.
          </h2>
        </div>
        <FAQ />
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "90px 32px 110px" }}>
        <Reveal translateY={28} duration={800} style={{ background: "#0e0e14", borderRadius: 28, padding: "80px 56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -120, right: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", maxWidth: 620 }}>
            <h2 style={{ fontFamily: tight, fontWeight: 700, fontSize: "clamp(30px,4vw,46px)", lineHeight: 1.08, letterSpacing: "-0.035em", margin: "0 0 20px", color: "#fff" }}>
              Ready to see what you could automate?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "#aeaebc", margin: "0 0 36px" }}>
              Book a free 30-minute discovery call. No pitch, no jargon — just a clear look at where automation could save your team time and money.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#0e0e14", fontFamily: tight, fontSize: 16, fontWeight: 700, padding: "16px 28px", borderRadius: 12, textDecoration: "none", letterSpacing: "-0.01em" }}
              >
                Book your discovery call <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
              </a>
              <a
                href="mailto:info@molyxlabs.com"
                style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "#fff", fontSize: 16, fontWeight: 600, padding: "16px 22px", borderRadius: 12, textDecoration: "none", border: "1px solid #2e2e42" }}
              >
                info@molyxlabs.com
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
