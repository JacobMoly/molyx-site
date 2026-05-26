import HeroBackground from "./hero-background";

export default function PageHero({ children, className = "" }) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <HeroBackground />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
