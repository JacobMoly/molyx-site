import Image from "next/image";
import Link from "next/link";
import { workflowPages } from "../lib/site-data";
import PageHero from "../components/page-hero";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

const problems = [
  {
    title: "Repetitive admin",
    description:
      "Hours every week spent on tasks that follow the same pattern every time — data entry, status updates, chasing approvals.",
  },
  {
    title: "Slow lead response",
    description:
      "Enquiries sitting in inboxes. No clear owner. First response taking hours or days when it should take minutes.",
  },
  {
    title: "Manual handoffs",
    description:
      "Work falling through the gaps between people and tools. No reliable way to know what's been done and what hasn't.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "We learn how the business runs, where time is being lost, and which problems are worth exploring.",
  },
  {
    number: "02",
    title: "Opportunity audit",
    description:
      "We identify the workflows where automation or AI could save time, reduce cost, or improve reliability.",
  },
  {
    number: "03",
    title: "Design and build",
    description:
      "Once the opportunity is clear, we design and build the right automation around your current setup.",
  },
  {
    number: "04",
    title: "Support and retainer",
    description:
      "After launch, we maintain, improve, and expand the system through an ongoing monthly retainer.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <PageHero className="pt-20 pb-20 md:pt-28 md:pb-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              AI automation for UK small businesses
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-6">
              Automate the busywork.
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-3">
              Molyx Labs helps UK small businesses find, build, and run practical AI agents and automations that save time, cut admin, and improve operations.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mb-10">
              It starts with a discovery call. We find the bottlenecks, identify where automation will help, and only build when there is a clear business case.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Book a discovery call
              </a>
              <Link
                href="/services"
                className="inline-flex items-center border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                See our services
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {["UK small businesses", "Discovery-led", "Founder-run", "No rip-and-replace"].map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-500 border border-gray-200 rounded-full px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PageHero>

      {/* Problem section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-4">
              The problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Where the time goes.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-100" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-4">
              The process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              A clear path.
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
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow examples */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-4">
              What we build
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Example workflows.
            </h2>
            <p className="text-gray-600 max-w-xl leading-relaxed">
              These are examples, not fixed packages. They show the kind of systems Molyx can build once the right opportunity is clear.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workflowPages.map((card) => (
              <article
                key={card.slug}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="bg-gray-50 border-b border-gray-100 overflow-hidden">
                  <Image
                    alt={card.name}
                    src={card.image}
                    width={420}
                    height={220}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-3">
                    {card.eyebrow}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {card.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {card.summary}
                  </p>
                  <Link
                    href={`/workflows/${card.slug}`}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    View workflow
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/workflows"
              className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm"
            >
              Browse all examples
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to stop wasting hours on admin?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free discovery call. We will look at your workflows, find the bottlenecks, and only recommend building if there is a clear business case.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book a discovery call
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center border border-gray-700 text-gray-300 font-semibold px-6 py-3 rounded-lg hover:border-gray-500 hover:text-white transition-colors"
            >
              Send us a message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
