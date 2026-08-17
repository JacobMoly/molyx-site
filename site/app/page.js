import Link from "next/link";
import ParticleWave from "../components/particle-wave";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

const workflows = [
  {
    number: "01",
    label: "Lead handling & follow-up",
    copy: "Capture enquiries from every channel, qualify them, route them to the right person, and keep follow-up moving.",
    tags: ["Lead capture", "Qualification", "Follow-up"],
  },
  {
    number: "02",
    label: "Onboarding & operations",
    copy: "Run document requests, approvals, reminders, project setup, and internal handoffs from one clear workflow.",
    tags: ["Onboarding", "Reminders", "Handoffs"],
  },
  {
    number: "03",
    label: "Reporting & recurring admin",
    copy: "Pull information from your existing tools, generate updates, and trigger recurring tasks before deadlines slip.",
    tags: ["Reporting", "Approvals", "Recurring tasks"],
  },
];

const steps = [
  ["Audit", "We map the workflow, find the friction, and quantify what the manual process is costing."],
  ["Design", "You get a focused plan: what connects, what changes, and what success looks like."],
  ["Build", "We build and test the system against real scenarios before it touches live operations."],
  ["Improve", "Once live, we monitor reliability and keep refining the workflow as your business changes."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" />
        <ParticleWave />
        <div className="hero-grid" />
        <div className="hero-inner shell-inner">
          <div className="hero-content">
            <p className="eyebrow"><span /> AI agents and automation for UK businesses</p>
            <h1>Automate the work<br />that <em>slows you down.</em></h1>
            <p className="hero-lede">
              Molyx Labs builds practical AI agents and workflow automations
              for UK businesses — cutting repetitive admin, connecting existing
              tools, and keeping operations moving.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href={calendlyUrl} rel="noreferrer" target="_blank">
                Book a free automation audit <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-ghost" href="#workflows">Explore workflows <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-signal" aria-label="Molyx system status">
            <div className="signal-topline">
              <span className="signal-status"><i /> System online</span>
              <span>MLX / 001</span>
            </div>
            <div className="signal-flow">
              <div className="signal-node"><span>01</span><strong>Request received</strong></div>
              <div className="signal-line"><i /></div>
              <div className="signal-node active"><span>02</span><strong>AI triage</strong></div>
              <div className="signal-line"><i /></div>
              <div className="signal-node"><span>03</span><strong>Action routed</strong></div>
            </div>
            <p>One example of the work that normally lives in someone&apos;s inbox — captured, understood, and moved forward automatically.</p>
          </div>
        </div>
        <div className="trust-strip shell-inner">
          <span>Built in London</span><i />
          <span>Founder-led</span><i />
          <span>n8n + AI systems</span><i />
          <span>Works with your existing stack</span>
        </div>
      </section>

      <section className="problem-section shell-inner">
        <div className="section-index">01 / THE PROBLEM</div>
        <div className="problem-copy">
          <h2>Your business runs on people.<br />It shouldn&apos;t run on <em>chasing.</em></h2>
          <div className="copy-columns">
            <p>Small teams lose hours every week moving information between inboxes, spreadsheets, CRMs, customers, suppliers, and internal systems.</p>
            <p>Molyx connects those moving parts. The repetitive follow-up happens automatically; your team handles the exceptions that actually need judgement.</p>
          </div>
        </div>
      </section>

      <section className="workflows-section" id="workflows">
        <div className="shell-inner">
          <div className="section-heading-row">
            <div>
              <p className="section-index">02 / WHAT WE AUTOMATE</p>
              <h2>Start where the<br />admin piles up.</h2>
            </div>
            <p>We build around your real process — not a generic package and not another dashboard your team has to remember to check.</p>
          </div>
          <div className="workflow-list">
            {workflows.map((workflow) => (
              <article className="workflow-card" key={workflow.number}>
                <div className="workflow-number">{workflow.number}</div>
                <div>
                  <h3>{workflow.label}</h3>
                  <p>{workflow.copy}</p>
                  <div className="tag-row">{workflow.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <span className="workflow-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <div className="workflow-link-row">
            <Link className="text-link" href="/workflows">See more example systems <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="process-section shell-inner" id="how-it-works">
        <div className="section-heading-row process-heading">
          <div>
            <p className="section-index">03 / HOW IT WORKS</p>
            <h2>From messy process<br />to working system.</h2>
          </div>
          <p>No theatre. No rip-and-replace project. We find one valuable workflow and make it run properly.</p>
        </div>
        <div className="process-track">
          {steps.map(([title, copy], index) => (
            <article className="process-step" key={title}>
              <div className="step-marker"><span>{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-inner shell-inner">
          <div className="founder-monogram" aria-hidden="true">M</div>
          <div className="founder-copy">
            <p className="section-index">04 / WHY MOLYX</p>
            <h2>Technical enough to build it.<br /><em>Small enough to care.</em></h2>
            <p>Molyx is a founder-led London studio with hands-on experience building production AI agents in fintech. You work directly with the person designing and building your system — from the first workflow map to go-live.</p>
            <div className="founder-points"><span>Direct access</span><span>Production-minded</span><span>Built for maintainability</span></div>
          </div>
        </div>
      </section>

      <section className="final-cta shell-inner">
        <div className="cta-orbit" aria-hidden="true"><i /><i /><i /></div>
        <p className="eyebrow"><span /> Start with one workflow</p>
        <h2>What would you stop<br />doing <em>manually?</em></h2>
        <p>In 30 minutes, we&apos;ll map the bottleneck and tell you honestly whether it&apos;s worth automating.</p>
        <a className="button button-primary" href={calendlyUrl} rel="noreferrer" target="_blank">Book your free audit <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
