import ContactForm from "./contact-form";
import PageHero from "../../components/page-hero";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

export const metadata = {
  title: "Contact | Molyx Labs",
  description:
    "Get in touch with Molyx Labs. Tell us about your biggest admin bottleneck and we will explore whether automation can help.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero className="pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: intro */}
            <div>
              <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-6">
                Get in touch
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
                Let's talk about your workflow.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Tell us what is taking the most time in your business. We will follow up within one business day.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Prefer to book directly? Use the link below — a 30-minute discovery call, no prep needed.
              </p>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Book a discovery call on Calendly
                <span>→</span>
              </a>

              <div className="mt-10 pt-10 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
                  What to expect
                </p>
                <div className="grid gap-3">
                  {[
                    "Reply within one business day",
                    "No sales pitch — just a real conversation",
                    "Discovery call if there seems to be a fit",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </PageHero>
    </main>
  );
}
