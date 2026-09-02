import { createFileRoute, Link } from "@tanstack/react-router";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { breadcrumbLd, canonical, faqLd, ids, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { PricingTable } from "@/components/site/PricingTable";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { AnswerBlock } from "@/components/site/AnswerBlock";
import { CTASection } from "@/components/site/CTASection";

const city = "Ghaziabad";
const title = "Best Bridal Makeup Artist in Ghaziabad | Shreya Chaudhary";
const description =
  "Top rated bridal makeup artist in Ghaziabad (Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension). Shreya Chaudhary offers bespoke HD bridal glam with on-location hairstyling.";

const ghaziabadFaqs = [
  {
    question: "Which areas in Ghaziabad does Shreya Chaudhary serve?",
    answer:
      "Shreya travels on-location to all major areas in Ghaziabad including Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Crossings Republik, and Kaushambi banquet hotels.",
  },
  {
    question: "What is included in the Ghaziabad bridal makeup package?",
    answer:
      "The bridal package (₹15,000) includes full HD bridal makeup, luxury skincare prep, on-location hair styling, floral/veil pinning, and jewelry/dupatta draping in one sitting.",
  },
  {
    question: "How do I secure my wedding date for Ghaziabad?",
    answer:
      "Message Shreya on WhatsApp with your wedding date, venue, and timings to confirm availability and receive instant booking details.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
  { name: "Ghaziabad", path: "/locations/ghaziabad" },
];

export const Route = createFileRoute("/locations/ghaziabad")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/locations/ghaziabad" }),
    links: canonical("/locations/ghaziabad"),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Ghaziabad", path: "/locations/ghaziabad" },
        ]),
      ),
      jsonLd(faqLd(ghaziabadFaqs)),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        about: { "@id": ids.business },
        mainEntity: {
          "@type": "Place",
          name: `${city}, Uttar Pradesh`,
          address: {
            "@type": "PostalAddress",
            addressLocality: city,
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
        },
      }),
    ],
  }),
  component: GhaziabadPage,
});

function GhaziabadPage() {
  return (
    <>
      <PageHero
        eyebrow={`Serving ${city} & Delhi NCR`}
        title="Best Bridal Makeup Artist in Ghaziabad"
        intro={`${business.artist} is the premier bridal makeup artist serving ${city}, traveling to you for bespoke HD makeup. Winter 2026 wedding bookings now open.`}
        crumbs={crumbs.slice(0, 2)}
      />

      <Section labelledBy="local-heading">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <SectionHeading
              id="local-heading"
              eyebrow="On-Location Suite Artistry"
              title={`Signature HD Bridal Glam in ${city}`}
              intro="Avoid salon crowds and traffic delays on your wedding morning. Shreya provides peaceful, 1-on-1 artistry directly in your suite or venue."
            />
            <div className="mt-8 space-y-4 text-sm text-charcoal/85 leading-relaxed">
              <p>
                From upscale banquets in Indirapuram and Vaishali to grand wedding resorts along Raj
                Nagar Extension and NH-24, Shreya creates luminous, sweatproof, and camera-ready
                bridal looks.
              </p>
              <p>
                All bookings feature authentic international products (NARS, Huda Beauty, Rare
                Beauty, MAC, Milani, Forever 52, PAC, Recode) paired with customized hair styling.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-xs font-medium text-charcoal">
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Indirapuram &amp; Vaishali
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Raj Nagar Extension Banquets
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Vasundhara &amp; Kaushambi
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Crossings Republik Suites
              </li>
            </ul>
          </div>

          <aside className="rounded-lg border border-charcoal/15 bg-card p-8 shadow-sm">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-blush">
              {city} Bookings
            </p>
            <p className="mt-4 font-display text-2xl text-charcoal font-semibold">
              {business.whatsappDisplay}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              WhatsApp Shreya directly with your wedding date, venue, and required looks for rapid
              availability confirmation.
            </p>
            <ul className="mt-6 space-y-3 text-xs border-t border-charcoal/10 pt-4">
              {services.map((service) => (
                <li key={service.slug} className="flex justify-between gap-4">
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="text-charcoal font-medium underline decoration-blush decoration-1 underline-offset-4"
                  >
                    {service.name}
                  </Link>
                  <span className="font-semibold text-charcoal">{service.priceLabel}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section tone="champagne" labelledBy="ghaziabad-answer-heading">
        <SectionHeading
          id="ghaziabad-answer-heading"
          eyebrow="Pricing"
          title={`Makeup Packages in ${city}`}
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

      <Section tone="charcoal" labelledBy="ghaziabad-packages-heading">
        <SectionHeading
          id="ghaziabad-packages-heading"
          eyebrow="Packages"
          title={`Book in ${city}`}
          tone="light"
        />
        <div className="mt-14">
          <PricingTable tone="light" />
        </div>
      </Section>

      <Section labelledBy="ghaziabad-faq-heading">
        <SectionHeading
          id="ghaziabad-faq-heading"
          eyebrow="Questions"
          title={`${city} Makeup Questions`}
        />
        <div className="mt-10">
          <FaqAccordion faqs={ghaziabadFaqs} />
        </div>
      </Section>

      <CTASection
        source="ghaziabad_final_cta"
        title={`Planning an Occasion in ${city}?`}
        intro="Message Shreya on WhatsApp to reserve your wedding date and discuss your bespoke look."
      />
    </>
  );
}
