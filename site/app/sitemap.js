import { workflowPages } from "../lib/site-data";

const baseUrl = "https://www.molyxlabs.com";

export default function sitemap() {
  const staticPages = ["", "/services", "/examples", "/contact", "/privacy"];
  const workflowEntries = workflowPages.map((workflow) => `/workflows/${workflow.slug}`);

  return [...staticPages, ...workflowEntries].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/examples" ? 0.8 : 0.6,
  }));
}
