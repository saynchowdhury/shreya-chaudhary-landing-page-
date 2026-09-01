import { createFileRoute } from "@tanstack/react-router";
import { homeFaqs } from "@/data/faqs";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { BrandList } from "@/components/site/BrandSection";
import { AnswerBlock } from "@/components/site/AnswerBlock";
import { CTASection } from "@/components/site/CTASection";

const title = "Products & Brands Used | Shreya Chaudhary Makeup, Meerut";
const description =
  "Premium products are used for every bridal, engagement and party makeup booking with Shreya Chaudhary Makeup in Meerut. Ask about the products planned for your look.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/brands" },
];

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/brands" }),
    links: canonical("/brands"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Products and brands"
        intro="Premium products are part of every package. Only verified brand names are published on this page."
        crumbs={crumbs}
      />

      <Section labelledBy="brands-heading">
        <SectionHeading
          id="brands-heading"
          eyebrow="What's in the kit"
          title="Premium products, chosen per look"
        />
        <div className="mt-14">
          <BrandList />
        </div>
      </Section>

      <Section tone="champagne">
        <AnswerBlock
          question="Which products do you use in your bridal vanity?"
          answer="We exclusively use 100% authentic international luxury products including NARS, Charlotte Tilbury, Huda Beauty, Laura Mercier, Rare Beauty, MAC, Milani, Forever 52, PAC, and Recode. Zero cheap drugstore foundations or harsh formulas."
        />
      </Section>

      <CTASection
        source="brands_final_cta"
        title="Have a product preference or a skin concern?"
        intro="Mention it on WhatsApp before your booking and the kit is planned around it."
      />
    </>
  );
}
