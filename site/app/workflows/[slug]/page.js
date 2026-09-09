import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { workflowPages } from "../../../lib/site-data";
import PageHero from "../../../components/page-hero";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

export function generateStaticParams() {
  return workflowPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = workflowPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.name} | Molyx Labs`,
    description: page.summary,
    alternates: {
      canonical: `/workflows/${page.slug}`,
    },
  };
}

export default async function WorkflowDetailPage({ params }) {
  const { slug } = await params;
  const page = workflowPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <PageHero className="pt-20 pb-20 md:pt-28 md:pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-6">
                {page.eyebrow} — Workflow Example
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
                {page.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {page.heroText}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
              <Image
                alt={page.name}
                src={page.image}
                width={620}
                height={420}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </PageHero>

      {/* Detail grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-6">
                What it does
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Core actions</h2>
              <div className="grid gap-3">
                {page.points.map((point) => (
                  <div
                    key={point}
                    className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm text-gray-700"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-6">
                Expected impact
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Commercial benefit</h2>
              <div className="grid gap-3">
                {page.outcomes.map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why it helps */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 md:p-10">
            <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4">
              Why this matters
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why it helps</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl">{page.detail}</p>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4">
          <Link
            href="/workflows"
            className="inline-flex items-center border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm"
          >
            ← Back to examples
          </Link>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
          >
            Book a discovery call
          </a>
        </div>
      </section>
    </main>
  );
}
