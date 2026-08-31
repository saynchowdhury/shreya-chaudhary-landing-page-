import { createFileRoute } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/site/PortfolioCategoryPage";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";

const title = "Bridal Makeup Portfolio in Meerut | Shreya Chaudhary Makeup";
const description =
  "Bridal makeup work by Shreya Chaudhary in Meerut — wedding-day looks with premium products and on-location hairstyling. Enquire about your date on WhatsApp.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Bridal", path: "/portfolio/bridal" },
];

export const Route = createFileRoute("/portfolio/bridal")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/portfolio/bridal" }),
    links: canonical("/portfolio/bridal"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: () => <PortfolioCategoryPage category="bridal" crumbs={crumbs} />,
});
