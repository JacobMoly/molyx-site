const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

export default function PageCta({ eyebrow = "Start with one workflow" }) {
  return (
    <section className="inner-cta">
      <div className="inner-cta-orbit" aria-hidden="true"><i /><i /><i /></div>
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h2>Find the work worth<br /><em>automating first.</em></h2>
      <p>In 30 minutes, we&apos;ll map the bottleneck and tell you honestly whether it&apos;s worth building.</p>
      <a className="button button-primary" href={calendlyUrl} rel="noreferrer" target="_blank">
        Book a free automation audit <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
