import "./globals.css";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SiteShell from "../components/site-shell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.molyxlabs.com"),
  title: "Molyx Labs | AI Automation for UK Small Businesses",
  description:
    "Molyx Labs builds AI agents and workflow automations for UK small businesses. Reduce admin, improve operations, and save time — starting with a free discovery call.",
  openGraph: {
    title: "Molyx Labs | AI Automation for UK Small Businesses",
    description:
      "Practical AI agents and workflow automations built around the way your business already works.",
    url: "/",
    siteName: "Molyx Labs",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Molyx Labs | AI Automation for UK Small Businesses",
    description:
      "Practical AI agents and workflow automations built around the way your business already works.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} font-sans antialiased bg-white text-gray-900`}>
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
