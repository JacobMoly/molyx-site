import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SiteShell from "../components/site-shell";

export const metadata = {
  metadataBase: new URL("https://molyxlabs.com"),
  title: "AI Agents and Automation for UK Businesses | Molyx Labs",
  description:
    "Molyx Labs builds practical AI agents and workflow automations for UK businesses, cutting repetitive admin and keeping operations moving.",
  openGraph: {
    title: "Automate the work that slows you down. | Molyx Labs",
    description: "Practical AI agents and automation for UK businesses.",
    images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "Molyx Labs — Automate the work that slows you down." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automate the work that slows you down. | Molyx Labs",
    description: "Practical AI agents and automation for UK businesses.",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
