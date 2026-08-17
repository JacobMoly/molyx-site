import ContactForm from "./contact-form";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

export const metadata = {
  title: "Contact | Molyx Labs",
  description: "Tell Molyx Labs about the repetitive workflow slowing your business down.",
};

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <section className="contact-layout shell-inner">
        <div className="contact-intro">
          <p className="eyebrow"><span /> Start a conversation</p>
          <h1>What&apos;s slowing<br />your team <em>down?</em></h1>
          <p>Tell us about the workflow consuming too much time. We&apos;ll reply within one business day with the most useful next step.</p>
          <a className="contact-calendly" href={calendlyUrl} target="_blank" rel="noreferrer">Prefer to book directly? <span>Open Calendly ↗</span></a>
          <div className="contact-expect">
            <p className="section-index">WHAT TO EXPECT</p>
            <ul><li>Reply within one business day</li><li>No sales script or technical jargon</li><li>An honest view on whether automation fits</li></ul>
          </div>
        </div>
        <div className="contact-panel">
          <div className="contact-panel-head"><span><i /> Enquiry channel open</span><span>MLX / CONTACT</span></div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
