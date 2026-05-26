import Link from "next/link";
import { workflowPages } from "../../lib/site-data";
import PageHero from "../../components/page-hero";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

export const metadata = {
  title: "Services | Molyx Labs",
  description:
    "Molyx Labs designs and builds AI workflow automations for UK small businesses — lead capture, onboarding, reporting, and more. Discovery-led, founder-run.",
};

const processSteps = [
  {
    number: "01",
    title: "Discovery call",
    description: "A 30-minute call to understand your business, how it runs, and where time is being lost. No prep needed.",
    output: "A clear picture of the workflow",
  },
  {
    number: "02",
    title: "Opportunity audit",
    description: "We map the workflow in detail and identify where automation or AI would have the clearest return.",
    output: "A prioritised list of opportunities",
  },
  {
    number: "03",
    title: "Design and build",
    description: "We design and build the automation around your existing tools. One focused workflow at a time.",
    output: "A working system, delivered and tested",
  },
  {
    number: "04",
    title: "Support and retainer",
    description: "Ongoing support to maintain, tune, and expand the system. Monthly retainer, cancel anytime.",
    output: "Continuous improvement",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <PageHero className="pt-20 pb-20 md:pt-28 md:pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-6">
              Services
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-6">
              What we build.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              We design and build AI workflow automations for small businesses with too much admin and not enough time.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Every engagement starts with a discovery call — we only build when there is a clear business case for automation.
            </p>
          </div>
        </div>
      </PageHero>

      {/* Workflow types */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-4">
              Workflow examples
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              The kind of systems we build.
            </h2>
            <p className="text-gray-600 max-w-xl leading-relaxed">
              These are examples. Every build is scoped to the specific workflow — we do not sell fixed packages.
            </p>
          </div>

          <div className="grid gap-6">
            {workflowPages.map((wf) => (
              <div
                key={wf.slug}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10"
              >
                <div className="md:grid md:grid-cols-2 md:gap-12 md:items-start">
                  <div>
                    <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4">
                      {wf.eyebrow}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{wf.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{wf.summary}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{wf.heroText}</p>
                    <Link
                      href={`/workflows/${wf.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      See the full example <span>→</span>
                    </Link>
                  </div>

                  <div className="mt-8 md:mt-0 grid gap-3">
                    <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1">
                      What it does
                    </p>
                    {wf.points.map((point) => (
                      <div
                        key={point}
                        className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm text-gray-700"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-4">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              From discovery to delivery.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-white border border-gray-200 rounded-2xl p-8">
                <p className="text-4xl font-black text-gray-200 mb-4 leading-none">
                  {step.number}
                </p>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                <p className="text-xs font-semibold text-indigo-600 tracking-wide">
                  Output: {step.output}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial model */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-6">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              One-time build. Ongoing retainer.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Once the opportunity is scoped, we deliver the build as a one-time project fee. After launch, support and improvement continue on a monthly retainer.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              The best fit is a UK small business with existing software, repeatable admin, and at least one process that is clearly too manual. Discovery calls are free — we only recommend building if there is a strong case for it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Book a discovery call
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Send us a message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
