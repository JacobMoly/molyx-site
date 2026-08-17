import PageCta from "../../components/page-cta";
import { faqs } from "../../lib/site-data";

export const metadata = {
  title: "AI Automation FAQ | Molyx Labs",
  description: "Straight answers about practical AI agents, workflow automation, implementation, existing tools, and where to start.",
};

export default function FaqPage() {
  return (
    <main className="inner-page faq-page">
      <section className="faq-hero shell-inner">
        <div>
          <p className="eyebrow"><span /> Frequently asked questions</p>
          <h1>Before you<br /><em>automate.</em></h1>
        </div>
        <p>Straight answers on where automation helps, where AI is genuinely useful, and how to implement it without creating more complexity.</p>
      </section>

      <section className="faq-body shell-inner">
        <aside>
          <p className="section-index">01 / THE BASICS</p>
          <p>Good automation starts with the business problem, not the technology. These are the questions worth answering first.</p>
        </aside>
        <div className="faq-accordion">
          {faqs.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>0{index + 1}</span><h2>{item.question}</h2><i aria-hidden="true" /></summary>
              <div><p>{item.answer}</p></div>
            </details>
          ))}
        </div>
      </section>

      <section className="faq-principle shell-inner">
        <p className="section-index">02 / OUR PRINCIPLE</p>
        <blockquote>“Use AI where it adds judgement. Use automation where the process should simply run.”</blockquote>
        <p>The strongest systems combine both—and keep a person in control when context or risk demands it.</p>
      </section>

      <div className="shell-inner"><PageCta eyebrow="Still have a question?" /></div>
    </main>
  );
}
