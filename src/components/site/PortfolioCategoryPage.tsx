import { Link } from "@tanstack/react-router";
import { locationLabel } from "@/data/business";
import { portfolioByCategory, portfolioCategories } from "@/data/portfolio";
import { serviceByCategory, type PortfolioCategory } from "@/data/services";
import { PageHero } from "./PageHero";
import { Section, SectionHeading } from "./Section";
import { PortfolioGrid } from "./PortfolioGrid";
import { AnswerBlock } from "./AnswerBlock";
import { CTASection } from "./CTASection";
import type { Crumb } from "./Breadcrumbs";

export function PortfolioCategoryPage({
  category,
  crumbs,
}: {
  category: PortfolioCategory;
  crumbs: Crumb[];
}) {
  const collection = portfolioCategories.find((item) => item.category === category)!;
  const service = serviceByCategory(category);
  const items = portfolioByCategory(category);

  return (
    <>
      <PageHero
        eyebrow={`${collection.label} portfolio · ${locationLabel}`}
        title={`${collection.label} makeup work`}
        intro={collection.blurb}
        price={service.priceLabel}
        whatsappMessage={service.whatsappMessage}
        whatsappService={service.name}
        crumbs={crumbs}
      />

      <Section labelledBy="category-work-heading">
        <SectionHeading
          id="category-work-heading"
          eyebrow="Looks"
          title={`${collection.label} looks`}
        />
        <div className="mt-14">
          <PortfolioGrid items={items} showFilters={false} />
        </div>
      </Section>

      <Section tone="champagne" labelledBy="category-answer-heading">
        <AnswerBlock question={service.answer.question} answer={service.answer.answer} />
        <div className="mt-10">
          <Link
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="inline-flex border border-charcoal/30 px-7 py-4 text-[0.7rem] uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
          >
            {service.name} details
          </Link>
        </div>
      </Section>

      <CTASection
        source={`portfolio_${category}_final_cta`}
        message={service.whatsappMessage}
        service={service.name}
        title={`Want a ${collection.label.toLowerCase()} look like this?`}
      />
    </>
  );
}
