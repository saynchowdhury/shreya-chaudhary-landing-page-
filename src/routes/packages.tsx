import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { homeFaqs } from "@/data/faqs";
import { breadcrumbLd, canonical, faqLd, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { PricingTable } from "@/components/site/PricingTable";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CTASection } from "@/components/site/CTASection";

const title = "Makeup Packages & Prices in Meerut | Shreya Chaudhary Makeup";
const description =
  "Makeup packages in Meerut: bridal ₹15,000–₹18,000 (Luxury NARS kit), engagement ₹8,000–₹10,000, party ₹4,000 — with on-location hairstyling. Travel excluded. Confirm your date on WhatsApp.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Packages", path: "/packages" },
];

const pricingFaqs = [homeFaqs[0]!, homeFaqs[1]!, homeFaqs[2]!, homeFaqs[3]!];

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/packages" }),
    links: canonical("/packages"),
    scripts: [jsonLd(breadcrumbLd(crumbs)), jsonLd(faqLd(pricingFaqs))],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Packages and pricing"
        intro="Three packages, published prices, and the same standard of products and hairstyling across all of them."
        crumbs={crumbs}
      />

      <Section labelledBy="packages-heading">
        <SectionHeading
          id="packages-heading"
          eyebrow="Compare"
          title="Choose the package for your occasion"
        />
        <div className="mt-14">
          <PricingTable />
        </div>
      </Section>

      <Section tone="champagne" labelledBy="engagement-benefit-heading">
        <div className="max-w-3xl border-l border-blush pl-6">
          <h2
            id="engagement-benefit-heading"
            className="font-display text-2xl text-charcoal md:text-[1.75rem]"
          >
            Booking more than one occasion?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {business.engagementBenefitNote} Share all of your dates in one WhatsApp message
            and they can be checked together.
          </p>
        </div>
      </Section>

      <Section labelledBy="packages-faq-heading">
        <SectionHeading
          id="packages-faq-heading"
          eyebrow="Questions"
          title="Pricing questions"
        />
        <div className="mt-10">
          <FaqAccordion faqs={pricingFaqs} />
        </div>
      </Section>

      <CTASection source="packages_final_cta" title="Ready to hold your date?" />
    </>
  );
}
