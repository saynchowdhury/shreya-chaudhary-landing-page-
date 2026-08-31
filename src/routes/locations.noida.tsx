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

const city = "Noida";
const title = "Bridal Makeup Artist in Noida | Shreya Chaudhary Makeup";
const description =
  "Looking for a top bridal makeup artist in Noida? Shreya Chaudhary offers bespoke HD bridal, engagement, and party makeup with on-location hairstyling in Noida & Delhi NCR.";

const noidaFaqs = [
  {
    question: "Does Shreya Chaudhary travel to venues and suites in Noida for bridal makeup?",
    answer:
      "Yes. Shreya Chaudhary travels directly to wedding venues, five-star banquet hotels, and luxury suites across Noida (Sector 18, Expressway, Sector 62, etc.) for bridal and occasion makeup bookings.",
  },
  {
    question: "How far in advance should I book bridal makeup in Noida?",
    answer:
      "Due to peak wedding season demand in Delhi NCR and Noida, we recommend reserving your date 2 to 4 months in advance on WhatsApp to guarantee Shreya's 1-on-1 personal availability.",
  },
  {
    question: "What cosmetics brands are used for Noida bridal bookings?",
    answer:
      "Only 100% authentic international vanity kits are used: NARS, Huda Beauty, Rare Beauty, MAC, Milani, Forever 52, PAC, and Recode — custom-matched for your skin undertone.",
  },
  {
    question: "Is hair styling and dupatta draping included in Noida packages?",
    answer:
      "Yes. Every bridal booking includes complete HD makeup, customized hair styling (with floral/veil placement), and dupatta/jewelry pinning in one seamless sitting.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations/noida" },
  { name: "Noida", path: "/locations/noida" },
];

export const Route = createFileRoute("/locations/noida")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/locations/noida" }),
    links: canonical("/locations/noida"),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Noida", path: "/locations/noida" },
        ]),
      ),
      jsonLd(faqLd(noidaFaqs)),
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
  component: NoidaPage,
});

function NoidaPage() {
  return (
    <>
      <PageHero
        eyebrow={`Serving ${city} & Delhi NCR`}
        title={`Bridal Makeup Artist in ${city}`}
        intro={`${business.artist} travels on-location to brides across ${city} — delivering signature HD bridal glam, engagement looks, and party artistry in the comfort of your suite.`}
        crumbs={crumbs.slice(0, 2)}
      />

      <Section labelledBy="local-heading">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <SectionHeading
              id="local-heading"
              eyebrow="On-Location Suite Artistry"
              title={`Bespoke Bridal & Event Glam in ${city}`}
              intro="Your wedding morning deserves calm, personalized attention without rushing between congested NCR traffic and crowded salons. Shreya brings a complete luxury vanity setup directly to you."
            />
            <div className="mt-8 space-y-4 text-sm text-charcoal/85 leading-relaxed">
              <p>
                From luxury banquets on Noida Expressway to grand celebrations across Sector 18 and Sector 50, Shreya Chaudhary creates weightless, sweatproof, and camera-ready HD finishes tailored to high-definition wedding cinematography.
              </p>
              <p>
                Every booking includes skincare prep, custom undertone color matching, and full hair styling in one sitting.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-xs font-medium text-charcoal">
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Noida Expressway &amp; Sectors
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Sector 18 &amp; 62 Hubs
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Luxury Banquet &amp; Hotel Suites
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Full NCR Travel Available
              </li>
            </ul>
          </div>

          <aside className="rounded-lg border border-charcoal/15 bg-card p-8 shadow-sm">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-blush">
              {city} Enquiries
            </p>
            <p className="mt-4 font-display text-2xl text-charcoal font-semibold">
              {business.whatsappDisplay}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              WhatsApp is the fastest way to confirm {city} dates. Share your date, venue, and number of required looks for an instant response.
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

      <Section tone="champagne" labelledBy="noida-answer-heading">
        <SectionHeading
          id="noida-answer-heading"
          eyebrow="Transparent Rates"
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

      <Section tone="charcoal" labelledBy="noida-packages-heading">
        <SectionHeading
          id="noida-packages-heading"
          eyebrow="Packages"
          title={`Book Services in ${city}`}
          tone="light"
        />
        <div className="mt-14">
          <PricingTable tone="light" />
        </div>
      </Section>

      <Section labelledBy="noida-faq-heading">
        <SectionHeading
          id="noida-faq-heading"
          eyebrow="Questions"
          title={`${city} Makeup Questions &amp; Answers`}
        />
        <div className="mt-10">
          <FaqAccordion faqs={noidaFaqs} />
        </div>
      </Section>

      <CTASection
        source="noida_final_cta"
        title={`Planning a Wedding or Event in ${city}?`}
        intro="Connect directly with Shreya on WhatsApp to verify date availability and discuss your dream bridal look."
      />
    </>
  );
}
