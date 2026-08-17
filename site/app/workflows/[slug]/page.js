import Link from "next/link";
import { notFound } from "next/navigation";
import PageCta from "../../../components/page-cta";
import { workflowPages } from "../../../lib/site-data";

export function generateStaticParams() {
  return workflowPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = workflowPages.find((item) => item.slug === slug);
  return page ? { title: `${page.name} | Molyx Labs`, description: page.summary } : {};
}

export default async function WorkflowDetailPage({ params }) {
  const { slug } = await params;
  const page = workflowPages.find((item) => item.slug === slug);
  const index = workflowPages.findIndex((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <main className="inner-page workflow-detail-page">
      <section className="detail-header shell-inner">
        <div className="detail-breadcrumb">
          <Link href="/workflows">Workflows</Link><span>/</span><span>0{index + 1}</span>
        </div>
        <div className="detail-header-grid">
          <div className="detail-title-block">
            <p className="eyebrow"><span /> {page.eyebrow}</p>
            <h1>{page.name}</h1>
            <p>{page.heroText}</p>
          </div>
          <div className="detail-system" aria-label={`Example ${page.name} sequence`}>
            <div className="system-toolbar"><span><i /> Example sequence</span><span>MLX / 0{index + 1}</span></div>
            {page.points.slice(0, 3).map((point, pointIndex) => (
              <div className={`system-row ${pointIndex === 1 ? "active" : ""}`} key={point}>
                <span>0{pointIndex + 1}</span><p>{point}</p><i />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-body">
        <div className="shell-inner detail-body-grid">
          <div className="detail-sticky">
            <p className="section-index">01 / THE WORKFLOW</p>
            <h2>What the system<br /><em>handles.</em></h2>
            <p>{page.detail}</p>
          </div>
          <div className="action-list">
            {page.points.map((point, pointIndex) => (
              <article key={point}><span>0{pointIndex + 1}</span><p>{point}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="outcome-section shell-inner">
        <div className="outcome-heading">
          <p className="section-index">02 / EXPECTED IMPACT</p>
          <h2>What changes<br /><em>in practice.</em></h2>
        </div>
        <div className="outcome-grid">
          {page.outcomes.map((outcome, outcomeIndex) => (
            <article key={outcome}><span>0{outcomeIndex + 1}</span><h3>{outcome}</h3></article>
          ))}
        </div>
      </section>

      <div className="shell-inner"><PageCta eyebrow="Pressure-test this workflow" /></div>
    </main>
  );
}
