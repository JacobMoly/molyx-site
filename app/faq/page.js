import { faqs } from "../../lib/site-data";
import PageHero from "../../components/page-hero";

export const metadata = {
  title: "FAQ | Molyx Labs",
  description:
    "Frequently asked questions about using AI agents and automations to reduce admin and improve business operations.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero className="pt-20 pb-20 md:pt-28 md:pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-6">
              FAQ
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-6">
              Before you automate.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Straight answers on where automation helps, where AI is useful, and how a small business should think about implementation.
            </p>
          </div>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                  {item.question}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
