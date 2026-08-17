import Link from "next/link";
import PageCta from "../../components/page-cta";

export const metadata = {
  title: "AI Automation Services | Molyx Labs",
  description: "Practical workflow automation, AI agents, lead handling, reporting, and operational systems for UK businesses.",
};

const services = [
  { number: "01", title: "Workflow automation", copy: "Connect the tools your team already uses so information moves, tasks trigger, and handoffs happen without copy-paste.", tags: ["Integrations", "Data sync", "Approvals"] },
  { number: "02", title: "AI agents & assistants", copy: "Build focused agents that understand context, classify inputs, draft responses, and surface the cases that need a person.", tags: ["OpenAI", "Knowledge", "Triage"] },
  { number: "03", title: "Lead & enquiry handling", copy: "Capture, qualify, route, and follow up with new enquiries before the opportunity goes cold.", tags: ["CRM", "Forms", "Follow-up"] },
  { number: "04", title: "Reporting & recurring admin", copy: "Generate updates, chase inputs, assemble reports, and run the operational tasks that return every week or month.", tags: ["Reporting", "Scheduling", "Finance"] },
];

const process = [
  ["Audit", "Map the workflow and find where time, information, or ownership is being lost."],
  ["Scope", "Define one valuable system, its integrations, safeguards, and expected return."],
  ["Build", "Implement and test against real scenarios before the workflow goes live."],
  ["Support", "Monitor reliability, fix edge cases, and improve the system as the business changes."],
];

export default function ServicesPage() {
  return (
    <main className="inner-page service-page">
      <section className="service-hero shell-inner">
        <div className="service-hero-copy">
          <p className="eyebrow"><span /> What we build</p>
          <h1>Practical systems.<br /><em>Built around your work.</em></h1>
          <p>We design and build AI agents and automations around your existing process—without forcing a new platform or adding another dashboard to manage.</p>
        </div>
        <div className="capability-console" aria-label="Molyx capabilities">
          <div className="console-head"><span><i /> Capabilities online</span><span>MLX / SERVICE</span></div>
          {services.map((service) => <div className="console-row" key={service.number}><span>{service.number}</span><strong>{service.title}</strong><i /></div>)}
        </div>
      </section>

      <section className="services-catalogue">
        <div className="shell-inner">
          <div className="catalogue-intro"><p className="section-index">01 / CAPABILITIES</p><p>Every engagement starts with the operational problem. These are the building blocks we use to solve it.</p></div>
          <div className="service-list">
            {services.map((service) => (
              <article key={service.number}>
                <span>{service.number}</span>
                <div><h2>{service.title}</h2><p>{service.copy}</p></div>
                <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <Link className="text-link service-examples-link" href="/examples">See problems we can solve <span>↗</span></Link>
        </div>
      </section>

      <section className="service-process shell-inner">
        <div><p className="section-index">02 / THE ENGAGEMENT</p><h2>Problems first.<br /><em>Software second.</em></h2></div>
        <div className="service-process-grid">
          {process.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="commercial-strip shell-inner">
        <p className="section-index">03 / COMMERCIAL MODEL</p>
        <h2>One-time build.<br />Ongoing support.</h2>
        <p>Projects are scoped as a clear build fee. Once live, maintenance and improvement can continue on a flexible monthly retainer.</p>
        <Link className="button button-ghost" href="/contact">Send us a message <span>↗</span></Link>
      </section>

      <div className="shell-inner"><PageCta /></div>
    </main>
  );
}
