export default function PageHero({ children, className = "" }) {
  return (
    <section className={`relative overflow-hidden subpage-hero ${className}`}>
      <div className="subpage-hero-glow" aria-hidden="true" />
      <div className="subpage-hero-grid" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
