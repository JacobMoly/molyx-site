import { faqs } from "../../lib/site-data";

export const metadata = {
  title: "FAQ | Molyx Labs",
  description:
    "Frequently asked questions about using AI agents and automations to reduce admin and improve business operations.",
};

export default function FaqPage() {
  return (
    <main className="page-shell page-stack">
      <section className="page-hero">
        <p className="eyebrow">Frequently asked questions</p>
        <h1 className="page-title">What businesses ask before they automate.</h1>
        <p className="page-intro">
          Straight answers on where automation helps, where AI is useful, and
          how a small business should think about implementation.
        </p>
      </section>

      <section className="faq-page-grid">
        {faqs.map((item) => (
          <article className="faq-card faq-card-large" key={item.question}>
            <h2 className="card-title-large">{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
