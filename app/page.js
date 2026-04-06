import Image from "next/image";
import Link from "next/link";
import { faqs, workflowPages } from "../lib/site-data";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

const proofPoints = [
  "Time saved every week on repetitive admin",
  "Lower operational cost from less manual work",
  "Fewer dropped tasks, delays, and avoidable mistakes",
  "A clearer commercial case for what to automate first",
];

const processSteps = [
  {
    title: "Discovery Call",
    text: "We learn how the business runs, where time is being lost, and which problems are worth exploring first.",
  },
  {
    title: "Opportunity Audit",
    text: "We identify the workflows where automation or AI could save time, reduce cost, or improve reliability.",
  },
  {
    title: "Design and Build",
    text: "Once the opportunity is clear, we design and build the right automation or agent around your current setup.",
  },
  {
    title: "Support and Retainer",
    text: "After launch, we maintain, improve, and expand the system through an ongoing monthly retainer.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="hero-bleed">
        <section className="hero-section">
          <div className="hero-copy">
          <p className="eyebrow">AI agents and automations for UK small businesses</p>
          <h1>Automate the busywork.</h1>
          <p className="hero-text">
            Molyx Labs helps UK small businesses find, build, and run
            practical AI agents and automations that save time, cut admin, and
            improve operations.
          </p>
          <p className="hero-subtext">
            It starts with a discovery call. We find the bottlenecks, identify
            where automation will help, and only build when there is a clear
            business case.
          </p>
          <div className="cta-row">
            <a
              className="button button-primary"
              href={calendlyUrl}
              rel="noreferrer"
              target="_blank"
            >
              Book a Discovery Call
            </a>
            <a className="button button-secondary" href="#how-it-works">
              See How It Works
            </a>
          </div>
          <div className="trust-row">
            <span>UK small businesses</span>
            <span>Discovery-led</span>
            <span>Operations automation</span>
            <span>AI agents</span>
            <span>Founder-led</span>
          </div>
          </div>

          <div className="hero-visual-panel">
            <div className="hero-card hero-card-overlay">
              <p className="card-kicker">How the engagement works</p>
              <ul>
                <li>Discovery call to understand the business</li>
                <li>Identify the best automation opportunities</li>
                <li>Design and build the right workflow</li>
                <li>One-time build fee for delivery</li>
                <li>Monthly retainer for support and improvement</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Why it matters</p>
          <h2>AI is new. Trust is earned.</h2>
          <p>
            Fair enough. Most people have heard the hype, but not seen a clear
            case for where AI saves money, cuts admin, or improves operations.
          </p>
          <p>
            The right starting point is simple: one repetitive process, one
            obvious bottleneck, one clear reason to fix it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">What business owners care about</p>
          <h2>The value must be clear.</h2>
        </div>
        <div className="faq-grid">
          <article className="faq-card">
            <h3>Save time</h3>
            <p>
              Cut repetitive admin, handoffs, and manual updates.
            </p>
          </article>
          <article className="faq-card">
            <h3>Save money</h3>
            <p>
              Reduce wasted hours, delays, and avoidable mistakes.
            </p>
          </article>
          <article className="faq-card">
            <h3>See ROI</h3>
            <p>
              More capacity, better speed, fewer errors, or stronger
              conversion.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">What can be automated</p>
          <h2>Example workflows.</h2>
          <p>
            These are example workflows, not fixed packages. They show the kind
            of systems Molyx can build once the right opportunity is clear.
          </p>
        </div>
        <div className="card-grid">
          {workflowPages.map((card) => (
            <article className="feature-card feature-card-linked" key={card.slug}>
              <div className="feature-image-wrap">
                <Image
                  alt={card.name}
                  className="feature-image"
                  height={220}
                  src={card.image}
                  width={420}
                />
              </div>
              <p className="card-kicker">{card.eyebrow}</p>
              <h3>{card.name}</h3>
              <p>{card.summary}</p>
              <Link className="text-link" href={`/workflows/${card.slug}`}>
                View workflow
              </Link>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <Link className="button button-secondary" href="/workflows">
            Browse all hypothetical workflows
          </Link>
        </div>
      </section>

      <section className="section section-accent">
        <div className="two-column">
          <div>
            <p className="section-label">ROI and outcomes</p>
          <h2>What changes in practice.</h2>
          <p>
            The best workflows save time, improve consistency, and stop routine
            work from living in someone’s head.
          </p>
        </div>
          <div className="proof-list">
            {proofPoints.map((item) => (
              <div className="proof-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="section-heading">
          <p className="section-label">How it works</p>
          <h2>A clear path.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <p className="step-number">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Trust</p>
          <h2>Trust comes first.</h2>
          <p>
            Business owners do not need a futuristic pitch. They need to know
            what would be automated, what it would save, and whether it is
            worth doing.
          </p>
          <p>
            That is the point of the discovery call: understand the business,
            identify the best opportunity, and decide whether there is a real
            ROI case before anything gets built.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">Commercial model</p>
          <h2>One-time build. Ongoing retainer.</h2>
          <p>
            Once the opportunity is clear, the build is delivered as a one-time
            project fee. After launch, support and improvement can move onto a
            monthly retainer.
          </p>
          <p>
            Best fit is a UK small business with existing software, repeatable
            admin, and at least one process that is clearly too manual.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-label">FAQ</p>
          <h2>Common questions.</h2>
        </div>
        <div className="faq-grid">
          {faqs.slice(0, 4).map((item) => (
            <article className="faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <Link className="button button-secondary" href="/faq">
            View all FAQs
          </Link>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-label section-label-light">Next step</p>
          <h2>Book a discovery call</h2>
          <p>
            If you want to explore where AI or automation could help, start
            with a discovery call. We will look at the workflow, the friction,
            and whether there is a strong case for building something.
          </p>
          <p className="contact-note">
            The goal is simple: spot the bottleneck and decide whether there is
            a real business case for automation.
          </p>
          <div className="booking-points">
            <div className="booking-point">30 minutes</div>
            <div className="booking-point">Google Meet</div>
            <div className="booking-point">No prep needed</div>
          </div>
        </div>
        <div className="contact-card booking-card">
          <p className="card-kicker">What the call covers</p>
          <h3>Use the call to pressure-test the opportunity.</h3>
          <ul className="booking-list">
            <li>How the business works today</li>
            <li>Where time is being lost</li>
            <li>Which workflows are good automation candidates</li>
            <li>Whether there is a real ROI case for building</li>
          </ul>
          <div className="booking-actions">
            <a
              className="button button-primary"
              href={calendlyUrl}
              rel="noreferrer"
              target="_blank"
            >
              Book in Calendly
            </a>
            <a className="button button-secondary" href="mailto:contact@molyxlabs.com">
              Prefer email?
            </a>
          </div>
          <p className="booking-small">
            If there is a strong fit, the next step is a scoped design and
            build plan. If not, you will still leave with a clearer picture of
            where automation does or does not make sense.
          </p>
        </div>
      </section>
    </main>
  );
}
