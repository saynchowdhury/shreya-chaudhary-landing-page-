import { createFileRoute } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/site/PortfolioCategoryPage";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";

const title = "Engagement Makeup Portfolio Meerut | Shreya Chaudhary";
const description =
  "Engagement makeup work by Shreya Chaudhary in Meerut — softer, photograph-led looks with premium products and on-location hairstyling. Enquire on WhatsApp.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Engagement", path: "/portfolio/engagement" },
];

export const Route = createFileRoute("/portfolio/engagement")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/portfolio/engagement" }),
    links: canonical("/portfolio/engagement"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: () => <PortfolioCategoryPage category="engagement" crumbs={crumbs} />,
});
