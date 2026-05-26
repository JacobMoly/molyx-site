import Image from "next/image";
import Link from "next/link";
import { workflowPages } from "../../lib/site-data";
import PageHero from "../../components/page-hero";

export const metadata = {
  title: "Workflow Examples | Molyx Labs",
  description:
    "Explore three AI workflow examples — lead capture, onboarding, and reporting — that show how small businesses can reduce admin and improve operations.",
};

export default function WorkflowsPage() {
  return (
    <main>
      <PageHero className="pt-20 pb-20 md:pt-28 md:pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-6">
              Examples
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-6">
              Workflow examples.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              These are examples, not fixed packages. They show the kind of systems Molyx can design once the right opportunity is clear.
            </p>
          </div>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {workflowPages.map((item) => (
              <article
                key={item.slug}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all flex flex-col"
              >
                <div className="bg-gray-50 border-b border-gray-100 overflow-hidden">
                  <Image
                    alt={item.name}
                    src={item.image}
                    width={520}
                    height={260}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-3">
                    {item.eyebrow}
                  </p>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.summary}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{item.heroText}</p>
                  <Link
                    href={`/workflows/${item.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    View example <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
