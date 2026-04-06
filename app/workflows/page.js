import Image from "next/image";
import Link from "next/link";
import { workflowPages } from "../../lib/site-data";

export const metadata = {
  title: "Hypothetical Workflows | Molyx Labs",
  description:
    "Explore three hypothetical AI workflow ideas that show how small businesses can use agents and automations to reduce admin and improve operations.",
};

export default function WorkflowsPage() {
  return (
    <main className="page-shell page-stack">
      <section className="page-hero">
        <p className="eyebrow">Example workflows</p>
        <h1 className="page-title">Three workflow examples.</h1>
        <p className="page-intro">
          These are examples, not fixed packages. They show the kind of
          workflows Molyx can design once the right opportunity is clear.
        </p>
      </section>

      <section className="page-grid">
        {workflowPages.map((item) => (
          <article className="feature-card feature-card-large" key={item.slug}>
            <div className="feature-image-wrap feature-image-wrap-large">
              <Image
                alt={item.name}
                className="feature-image"
                height={260}
                src={item.image}
                width={520}
              />
            </div>
            <p className="card-kicker">{item.eyebrow}</p>
            <h2 className="card-title-large">{item.name}</h2>
            <p>{item.summary}</p>
            <p>{item.heroText}</p>
            <Link className="text-link" href={`/workflows/${item.slug}`}>
              View example
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
