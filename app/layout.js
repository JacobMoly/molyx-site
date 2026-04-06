import "./globals.css";
import SiteShell from "../components/site-shell";

export const metadata = {
  title: "Molyx Labs | AI Agents and Automations for UK Small Businesses",
  description:
    "Molyx Labs builds AI agents and workflow automations for UK small businesses that want to reduce admin, improve operations, and save time across lead handling, onboarding, reporting, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
