import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SiteShell from "../components/site-shell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Molyx Labs | AI Automation for UK Small Businesses",
  description:
    "Molyx Labs builds AI agents and workflow automations for UK small businesses. Reduce admin, improve operations, and save time — starting with a free discovery call.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
