import Link from "next/link";
import PageCta from "../../components/page-cta";
import { workflowPages } from "../../lib/site-data";

export const metadata = {
  title: "Example AI Workflows | Molyx Labs",
  description: "Explore practical AI agents and workflow automations for lead handling, onboarding, operations, reporting, and recurring admin.",
};

export default function WorkflowsPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero shell-inner">
        <div className="inner-hero-grid" aria-hidden="true" />
        <div className="inner-hero-copy">
          <p className="eyebrow"><span /> Example systems</p>
          <h1>Systems for the work<br /><em>between the work.</em></h1>
          <p>Automation is most useful in the gaps: the handoffs, follow-ups, updates, and recurring tasks that keep stealing attention from your team.</p>
        </div>
        <div className="workflow-map" aria-hidden="true">
          <div className="map-label">Live workflow / MLX</div>
          <div className="map-node map-node-a"><i /> Input</div>
          <div className="map-node map-node-b"><i /> Understand</div>
          <div className="map-node map-node-c"><i /> Route</div>
          <div className="map-node map-node-d"><i /> Complete</div>
          <span className="map-path path-one" /><span className="map-path path-two" /><span className="map-path path-three" />
        </div>
      </section>

      <section className="workflow-catalogue">
        <div className="shell-inner">
          <div className="catalogue-intro">
            <p className="section-index">01 / EXAMPLE WORKFLOWS</p>
            <p>These are starting points, not fixed packages. Every system is shaped around the process, tools, and constraints already inside your business.</p>
          </div>
          <div className="catalogue-list">
            {workflowPages.map((item, index) => (
              <Link className="catalogue-item" href={`/workflows/${item.slug}`} key={item.slug}>
                <span className="catalogue-number">0{index + 1}</span>
                <div className="catalogue-title">
                  <span>{item.eyebrow.replace("Hypothetical ", "")}</span>
                  <h2>{item.name}</h2>
                </div>
                <p>{item.summary}</p>
                <span className="catalogue-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="fit-section shell-inner">
        <div>
          <p className="section-index">02 / WHAT MAKES A GOOD WORKFLOW</p>
          <h2>Repetitive.<br />Rule-driven.<br /><em>Measurable.</em></h2>
        </div>
        <div className="fit-grid">
          <article><span>01</span><h3>It happens often</h3><p>The task comes back every day, week, or month and consumes reliable chunks of team time.</p></article>
          <article><span>02</span><h3>It follows a pattern</h3><p>Most cases move through familiar steps, with clear exceptions that can be handed to a person.</p></article>
          <article><span>03</span><h3>The value is visible</h3><p>Success can be measured in time saved, response speed, reduced errors, or improved conversion.</p></article>
          <article><span>04</span><h3>The inputs already exist</h3><p>The information lives in tools you already use—even if it is currently fragmented between them.</p></article>
        </div>
      </section>

      <div className="shell-inner"><PageCta /></div>
    </main>
  );
}
