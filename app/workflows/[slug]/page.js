import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { workflowPages } from "../../../lib/site-data";

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
  };
}

export default async function WorkflowDetailPage({ params }) {
  const { slug } = await params;
  const page = workflowPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="page-shell page-stack">
      <section className="detail-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="page-title">{page.name}</h1>
          <p className="page-intro">{page.heroText}</p>
        </div>
        <div className="detail-image-card">
          <Image
            alt={page.name}
            className="feature-image"
            height={420}
            priority
            src={page.image}
            width={620}
          />
        </div>
      </section>

      <section className="detail-grid">
        <article className="feature-card">
          <p className="card-kicker">What it does</p>
          <h2 className="card-title-large">Core actions</h2>
          <div className="detail-list">
            {page.points.map((point) => (
              <div className="proof-item" key={point}>
                {point}
              </div>
            ))}
          </div>
        </article>

        <article className="feature-card">
          <p className="card-kicker">Expected impact</p>
          <h2 className="card-title-large">Commercial benefit</h2>
          <div className="detail-list">
            {page.outcomes.map((item) => (
              <div className="proof-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-accent detail-copy">
        <p className="section-label">Why this matters</p>
        <h2 className="card-title-large">Why it helps</h2>
        <p>{page.detail}</p>
      </section>

      <section className="inline-cta inline-cta-left">
        <Link className="button button-secondary" href="/workflows">
          Back to examples
        </Link>
        <a
          className="button button-primary"
          href={calendlyUrl}
          rel="noreferrer"
          target="_blank"
        >
          Book a discovery call
        </a>
      </section>
    </main>
  );
}
