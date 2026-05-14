import Link from "next/link";

const calendlyUrl = "https://calendly.com/jacob-molyxlabs/30min";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/workflows", label: "Examples" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/workflows", label: "Examples" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function SiteShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-gray-900 text-lg tracking-tight hover:text-gray-700 transition-colors"
          >
            Molyx Labs
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Book a call
          </a>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-gray-100 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <p className="font-bold text-gray-900 mb-3">Molyx Labs</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI agents and workflow automations for UK small businesses that want to reduce admin and improve operations.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
            >
              Book a discovery call →
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
