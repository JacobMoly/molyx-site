import PageCta from "../../components/page-cta";

export const metadata = {
  title: "AI Automation Examples | Molyx Labs",
  description: "See practical before-and-after examples for sales, admin, finance, operations, and customer support automation.",
};

const examples = [
  { group: "Sales & leads", agent: "Instant quote agent", before: "Quotes and enquiries wait in an inbox until someone has time to respond.", after: "The request is understood, qualified, and answered or routed in minutes." },
  { group: "Sales & leads", agent: "Lead follow-up workflow", before: "New leads go cold overnight, over weekends, or between busy team members.", after: "Every lead gets an immediate response and a consistent follow-up sequence." },
  { group: "Admin & finance", agent: "Invoice chaser", before: "Someone checks overdue invoices and sends awkward reminders one by one.", after: "Reminders escalate automatically while exceptions stay visible to the team." },
  { group: "Admin & finance", agent: "Reporting workflow", before: "Weekly updates are assembled by copying figures from several different tools.", after: "The data is collected, checked, and turned into a ready-to-review report." },
  { group: "Customer operations", agent: "Support assistant", before: "The same routine customer questions fill the inbox every day.", after: "Common questions are answered instantly and complex cases reach the right person." },
  { group: "Customer operations", agent: "Cross-tool sync", before: "The same customer data is retyped into the CRM, spreadsheet, and finance system.", after: "One update flows safely across every system that needs it." },
];

export default function ExamplesPage() {
  return (
    <main className="inner-page examples-page">
      <section className="examples-hero shell-inner">
        <p className="eyebrow"><span /> Before / after</p>
        <h1>The problems we get<br /><em>called in to solve.</em></h1>
        <p>Every business is different. The pattern is consistent: find the repetitive work, build the right system, and make the improvement measurable.</p>
      </section>

      <section className="examples-body">
        <div className="shell-inner">
          <div className="catalogue-intro"><p className="section-index">01 / EXAMPLES</p><p>These are illustrative systems, not fixed packages. Your workflow would be mapped around the tools and rules already in your business.</p></div>
          <div className="examples-list">
            {examples.map((example, index) => (
              <article key={example.agent}>
                <div className="example-agent"><span>0{index + 1}</span><p>{example.group}</p><h2>{example.agent}</h2></div>
                <div className="example-state before"><span>Before</span><p>{example.before}</p></div>
                <div className="example-state after"><span>After</span><p>{example.after}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="example-rule shell-inner">
        <p className="section-index">02 / THE RULE</p>
        <blockquote>Automate the pattern.<br /><em>Escalate the exception.</em></blockquote>
        <p>Reliable automation does not remove people from the process. It gives them fewer repetitive cases and better information when judgement is actually needed.</p>
      </section>

      <div className="shell-inner"><PageCta eyebrow="Bring us your bottleneck" /></div>
    </main>
  );
}
