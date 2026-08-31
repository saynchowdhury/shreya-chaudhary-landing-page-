import { createFileRoute, Link } from "@tanstack/react-router";
import { locationLabel } from "@/data/business";
import { portfolio, portfolioCategories } from "@/data/portfolio";
import { services } from "@/data/services";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { PortfolioPreview } from "@/components/site/PortfolioPreview";
import { CTASection } from "@/components/site/CTASection";
import { ArrowRight } from "lucide-react";

const title = "Real Brides & Occasion Portfolio | Shreya Chaudhary Makeup";
const description =
  "Browse real client transformations across Bridal (₹15,000), Engagement (₹8,000), and Party (₹4,000) makeup by Shreya Chaudhary in Meerut & Delhi NCR.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
];

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/portfolio" }),
    links: canonical("/portfolio"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Real Client Transformations"
        title="Browse by occasion"
        intro={`Explore genuine, authentic client artistry across ${locationLabel} & Delhi NCR. Every look is categorized under Shreya's three signature occasion services with transparent pricing and verified inclusions.`}
        crumbs={crumbs}
      />

      {/* 3 Core Services Occasion Cards */}
      <Section labelledBy="occasions-heading">
        <SectionHeading
          id="occasions-heading"
          eyebrow="Select Occasion"
          title="Explore work by service"
        />
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {portfolioCategories.map((collection) => {
            const service = services.find((s) => s.category === collection.category);
            const count = portfolio.filter((p) => p.category === collection.category).length;

            return (
              <li key={collection.category} className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/15 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:border-charcoal/35">
                <Link to={collection.path} className="block overflow-hidden relative">
                  <PortfolioPreview
                    category={collection.category}
                    label={collection.label}
                    imageSrc={service?.image}
                    ratio="aspect-[4/5]"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-charcoal/85 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-ivory backdrop-blur-md">
                    {count} Verified Photos
                  </div>
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-2xl text-charcoal font-medium">
                        {collection.label}
                      </h3>
                      {service && (
                        <p className="font-display text-xl text-charcoal font-semibold">
                          {service.priceLabel}
                        </p>
                      )}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {collection.blurb}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                    <Link
                      to={collection.path}
                      className="inline-flex items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.18em] font-semibold text-charcoal transition-colors group-hover:text-blush"
                    >
                      <span>Explore {collection.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Complete Full Visual Gallery with Category Filter */}
      <Section tone="champagne" labelledBy="all-gallery-heading">
        <SectionHeading
          id="all-gallery-heading"
          eyebrow="Comprehensive Gallery"
          title="All real client transformations"
        />
        <div className="mt-12">
          <PortfolioGrid items={portfolio} />
        </div>
      </Section>

      <CTASection
        source="portfolio_final_cta"
        title="Ready to plan your occasion look?"
        intro="Message Shreya directly on WhatsApp with your event date and outfit references for a complimentary consultation."
      />
    </>
  );
}
