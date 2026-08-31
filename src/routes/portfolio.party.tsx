import { createFileRoute } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/site/PortfolioCategoryPage";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";

const title = "Party Makeup Portfolio in Meerut | Shreya Chaudhary Makeup";
const description =
  "Party makeup work by Shreya Chaudhary in Meerut — sangeet, cocktail and reception looks with premium products and on-location hairstyling. Enquire on WhatsApp.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Party", path: "/portfolio/party" },
];

export const Route = createFileRoute("/portfolio/party")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/portfolio/party" }),
    links: canonical("/portfolio/party"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: () => <PortfolioCategoryPage category="party" crumbs={crumbs} />,
});
