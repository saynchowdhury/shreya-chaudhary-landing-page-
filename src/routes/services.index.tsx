import { createFileRoute } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { breadcrumbLd, canonical, faqLd, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { AnswerBlock } from "@/components/site/AnswerBlock";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CTASection } from "@/components/site/CTASection";

const title = "Makeup Services & Prices in Meerut | Shreya Chaudhary Makeup";
const description =
  "Bridal makeup ₹15,000, engagement makeup ₹8,000 and party makeup ₹4,000 in Meerut. Premium products and on-location hairstyling included. Check availability on WhatsApp.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/services" }),
    links: canonical("/services"),
    scripts: [jsonLd(breadcrumbLd(crumbs)), jsonLd(faqLd(homeFaqs.slice(0, 6)))],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Makeup services and prices"
        intro={`Three clearly priced services for brides, brides-to-be and guests across ${locationLabel}. Every booking includes premium products and hairstyling done on location.`}
        crumbs={crumbs}
      />

      <Section labelledBy="all-services-heading">
        <SectionHeading
          id="all-services-heading"
          eyebrow="Choose your occasion"
          title="What each service includes"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted-foreground">{business.pricingNote}</p>
      </Section>

      <Section tone="champagne" labelledBy="service-answers-heading">
        <SectionHeading
          id="service-answers-heading"
          eyebrow="Direct answers"
          title="Pricing at a glance"
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <AnswerBlock
              key={service.slug}
              question={service.answer.question}
              answer={service.answer.answer}
            />
          ))}
        </div>
      </Section>

      <Section labelledBy="services-faq-heading">
        <SectionHeading
          id="services-faq-heading"
          eyebrow="Questions"
          title="Service questions"
        />
        <div className="mt-10">
          <FaqAccordion faqs={homeFaqs.slice(0, 8)} />
        </div>
      </Section>

      <CTASection source="services_final_cta" />
    </>
  );
}
