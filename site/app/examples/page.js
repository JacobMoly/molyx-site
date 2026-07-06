import Link from "next/link";

export const metadata = {
  title: "Examples | Molyx Labs",
  description:
    "The kind of problems Molyx Labs gets called in for — before and after. Sales, admin, and customer support automation for UK small businesses.",
};

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

function Icon({ path, size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={size >= 19 ? "2" : "2.2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

function CircleIcon({ cx, cy, r }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={cx} cy={cy} r={r} />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

const categories = [
  {
    title: "Sales & leads",
    color: "#6366f1",
    tint: "#eef0ff",
    categoryIcon: (
      <svg width={19} height={19} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
    items: [
      {
        pain: "Quotes and enquiries take hours to answer",
        painDetail: "Leads sit in an inbox while someone finds time to reply, and by then some have gone elsewhere.",
        agent: "Instant Quote Agent",
        agentIcon: (
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        benefit: "Faster response, more jobs won",
        benefitDetail: "Customers hear back in minutes instead of hours, so fewer leads go cold.",
      },
      {
        pain: "New leads go cold overnight",
        painDetail: "A lead comes in after hours or over a weekend and doesn't hear back until the next working day.",
        agent: "24/7 Lead Response Agent",
        agentIcon: (
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
          </svg>
        ),
        benefit: "Higher conversion rate",
        benefitDetail: "Leads get a response the moment they arrive, whatever time it is.",
      },
    ],
  },
  {
    title: "Admin & finance",
    color: "#b45309",
    tint: "#fef3e2",
    categoryIcon: (
      <svg width={19} height={19} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13l2 2 4-4" />
      </svg>
    ),
    items: [
      {
        pain: "Invoices chased manually, payment always late",
        painDetail: "Someone has to remember who hasn't paid and send an awkward reminder email one by one.",
        agent: "Invoice Chaser",
        agentIcon: (
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" />
          </svg>
        ),
        benefit: "Gets paid faster, less admin",
        benefitDetail: "Cash comes in sooner and nobody has to spend a morning chasing payments.",
      },
      {
        pain: "Staff rota built by hand in a spreadsheet",
        painDetail: "Shift changes, holiday requests and swaps all get updated manually, and mistakes slip through.",
        agent: "Rota Assistant",
        agentIcon: (
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" />
          </svg>
        ),
        benefit: "Hours saved every week",
        benefitDetail: "What used to take an afternoon takes minutes, with fewer scheduling errors.",
      },
    ],
  },
  {
    title: "Customer support",
    color: "#15803d",
    tint: "#e9f7ef",
    categoryIcon: (
      <svg width={19} height={19} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    items: [
      {
        pain: "Same customer questions clog up the inbox",
        painDetail: "Opening hours, order status, returns — the same handful of questions, over and over, every day.",
        agent: "AI Support Assistant",
        agentIcon: (
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        ),
        benefit: "Faster answers, freed-up staff",
        benefitDetail: "Your team only deals with the questions that actually need a person.",
      },
      {
        pain: "Data scattered across five different tools",
        painDetail: "The same customer or order gets typed into the CRM, the spreadsheet, and the accounting software separately.",
        agent: "Sync Workflow",
        agentIcon: (
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" /><circle cx="12" cy="12" r="3" />
          </svg>
        ),
        benefit: "One source of truth",
        benefitDetail: "No more duplicate entry, and no more numbers that don't match between systems.",
      },
    ],
  },
];

export default function ExamplesPage() {
  return (
    <main>
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-14 md:pt-24 text-center">
        <span className="text-xs font-bold tracking-[0.08em] uppercase text-indigo-500">
          Examples
        </span>
        <h1 className="font-extrabold text-[clamp(2.4rem,5vw,3rem)] leading-[1.08] tracking-tight mt-3 mb-4 text-gray-950" style={{ textWrap: "balance" }}>
          The kind of problems we get called in for.
        </h1>
        <p className="text-lg leading-relaxed text-gray-500 mx-auto max-w-2xl">
          Every business is different, so every build starts from discovery. Here's the shape of it: what's slowing things down, what we'd build, and what changes once it's live.
        </p>
      </section>

      {/* Categories */}
      <div className="max-w-5xl mx-auto px-6 pb-6 space-y-10">
        {categories.map((cat) => (
          <section key={cat.title}>
            {/* Category heading */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
                style={{ background: cat.tint, color: cat.color }}
              >
                {cat.categoryIcon}
              </span>
              <h2 className="font-bold text-2xl tracking-tight text-gray-950">
                {cat.title}
              </h2>
            </div>

            {/* Example cards */}
            <div className="flex flex-col gap-5">
              {cat.items.map((ex) => (
                <div
                  key={ex.agent}
                  className="border border-gray-200 rounded-2xl overflow-hidden"
                >
                  {/* Agent header bar */}
                  <div className="flex items-center gap-2 px-6 py-3.5 border-b border-gray-200 bg-white">
                    <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-gray-400">
                      We'd build
                    </span>
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-none text-[10px]"
                      style={{ background: cat.tint, color: cat.color }}
                    >
                      {ex.agentIcon}
                    </span>
                    <span className="text-sm font-bold text-gray-900 tracking-tight">
                      {ex.agent}
                    </span>
                  </div>

                  {/* Before / After grid */}
                  <div className="grid md:grid-cols-2">
                    <div className="bg-gray-50 p-7 flex flex-col gap-2.5">
                      <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-gray-400">
                        Before
                      </span>
                      <h3 className="font-semibold text-lg leading-snug tracking-tight text-gray-900">
                        {ex.pain}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-500">
                        {ex.painDetail}
                      </p>
                    </div>

                    <div className="bg-gray-950 p-7 flex flex-col gap-2.5">
                      <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-indigo-400/60">
                        After
                      </span>
                      <h3 className="font-semibold text-lg leading-snug tracking-tight text-white">
                        {ex.benefit}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {ex.benefitDetail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-gray-950 rounded-3xl px-8 py-16 md:px-14 md:py-20 relative overflow-hidden text-center">
          <div
            className="pointer-events-none absolute -top-36 left-1/2 -translate-x-1/2 w-[500px] h-[420px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%)" }}
          />
          <div className="relative max-w-xl mx-auto">
            <h2 className="font-extrabold text-3xl md:text-[2.4rem] leading-[1.15] tracking-tight text-white mb-4" style={{ textWrap: "balance" }}>
              Not seeing your problem here? That's normal — every business is different.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-400 mb-8">
              Book a free discovery call and we'll work out what's actually worth automating for you.
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-gray-950 font-bold text-base px-7 py-4 rounded-xl tracking-tight hover:bg-indigo-50 transition-colors"
            >
              Book your discovery call
              <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
