import Link from "next/link";
import PageHero from "../../components/page-hero";

export const metadata = {
  title: "Privacy Notice | Molyx Labs",
  description: "How Molyx Labs collects, uses, and protects personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Who we are",
    content: (
      <>
        Molyx Labs is a trading name of MOLYX LTD, a company registered in England and Wales
        under company number 16987582. Our registered office is Flat 110-112 Essex Road,
        London, England, N1 8LX. MOLYX LTD is the controller of personal information collected
        through this website.
      </>
    ),
  },
  {
    title: "Information we collect",
    content: (
      <>
        If you contact us, we collect the information you provide, such as your name, email
        address, company name, and details of your enquiry. If you book a call, Calendly also
        processes the booking information you submit. Our hosting provider may process standard
        technical logs needed to operate and secure the website.
      </>
    ),
  },
  {
    title: "How we use your information",
    content: (
      <>
        We use enquiry information to respond, assess whether our services may be suitable, prepare
        proposals when requested, maintain business records, and protect the website from misuse.
        We rely on our legitimate interests in operating and improving our business, and on taking
        steps at your request before entering into a contract.
      </>
    ),
  },
  {
    title: "Service providers and international processing",
    content: (
      <>
        We use service providers including Vercel for website hosting and privacy-focused analytics,
        Resend for email delivery, and Calendly when you choose to book a call. These providers may
        process information outside the UK under their own safeguards and contractual terms. We do
        not sell your personal information.
      </>
    ),
  },
  {
    title: "Analytics and cookies",
    content: (
      <>
        We use Vercel Web Analytics to understand aggregate website usage. It does not use cookies
        and is designed to provide anonymised, aggregated statistics. We do not currently use
        advertising cookies or cross-site tracking. If that changes, we will update this notice and
        introduce appropriate controls before using them.
      </>
    ),
  },
  {
    title: "How long we keep information",
    content: (
      <>
        We keep enquiry records only for as long as they are useful for responding and managing a
        potential or existing business relationship. Enquiries that do not lead to ongoing work are
        normally deleted within 24 months of the last contact, unless a longer period is needed for
        legal, accounting, or security reasons.
      </>
    ),
  },
  {
    title: "Your rights",
    content: (
      <>
        Depending on the circumstances, you may have rights to access, correct, erase, restrict, or
        object to the use of your personal information. You may also complain to the UK Information
        Commissioner&apos;s Office at{" "}
        <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer" className="text-indigo-600 underline underline-offset-2">
          ico.org.uk
        </a>.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero className="py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-5">
            Privacy
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-5">
            Privacy notice.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            A plain-English explanation of what information we collect and how we use it.
          </p>
          <p className="text-sm text-gray-500 mt-5">Last updated: 17 August 2026</p>
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 grid gap-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-bold text-gray-950 mb-3">{section.title}</h2>
              <div className="text-[15.5px] text-gray-600 leading-7">{section.content}</div>
            </article>
          ))}

          <article className="rounded-2xl border border-indigo-100 bg-indigo-50 p-7">
            <h2 className="text-xl font-bold text-gray-950 mb-3">Contact us about privacy</h2>
            <p className="text-[15.5px] text-gray-600 leading-7">
              Email{" "}
              <a href="mailto:info@molyxlabs.com" className="text-indigo-600 font-semibold underline underline-offset-2">
                info@molyxlabs.com
              </a>{" "}
              with any question or request. You can also return to the{" "}
              <Link href="/contact" className="text-indigo-600 font-semibold underline underline-offset-2">
                contact page
              </Link>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
