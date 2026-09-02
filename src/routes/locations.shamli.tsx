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

const city = "Shamli";
const title = "Best Bridal Makeup Artist in Shamli | Shreya Chaudhary";
const description =
  "Top bridal makeup artist in Shamli, UP. Shreya Chaudhary provides luxury HD bridal (₹15,000–₹18,000), engagement (₹8,000–₹10,000), and party makeup with on-location hairstyling in Shamli.";

const shamliFaqs = [
  {
    question: "Does Shreya Chaudhary travel to Shamli for bridal bookings?",
    answer:
      "Yes. Shreya travels on-location to wedding venues, resorts, and private residences across Shamli and surrounding areas for bridal bookings.",
  },
  {
    question: "What is included in the Shamli bridal package?",
    answer:
      "Bridal makeup (₹15,000) includes full HD makeup, skincare prep, hair styling, floral/veil setting, and jewelry/dupatta draping in one sitting.",
  },
  {
    question: "Which luxury cosmetic brands are used for Shamli brides?",
    answer:
      "Every booking uses 100% authentic international vanity products: NARS, Huda Beauty, Rare Beauty, MAC, Milani, Forever 52, PAC, and Recode.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
  { name: "Shamli", path: "/locations/shamli" },
];

export const Route = createFileRoute("/locations/shamli")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/locations/shamli" }),
    links: canonical("/locations/shamli"),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Shamli", path: "/locations/shamli" },
        ]),
      ),
      jsonLd(faqLd(shamliFaqs)),
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
  component: ShamliPage,
});

function ShamliPage() {
  return (
    <>
      <PageHero
        eyebrow={`Serving ${city} & Western UP`}
        title="Best Bridal Makeup Artist in Shamli"
        intro={`${business.artist} is the premier bridal makeup artist serving ${city}, traveling to you for bespoke HD makeup. Winter 2026 wedding bookings now open.`}
        crumbs={crumbs.slice(0, 2)}
      />

      <Section labelledBy="local-heading">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <SectionHeading
              id="local-heading"
              eyebrow="On-Location Artistry"
              title={`Timeless Bridal Artistry in ${city}`}
              intro="Enjoy peaceful getting-ready moments in your Shamli venue or home with dedicated 1-on-1 attention from Shreya Chaudhary."
            />
            <div className="mt-8 space-y-4 text-sm text-charcoal/85 leading-relaxed">
              <p>
                Shreya Chaudhary creates weightless, sweatproof, and camera-ready HD bridal makeup
                that looks radiant both under bright mandap lighting and in high-definition wedding
                cinematography.
              </p>
              <p>
                All bookings include customized hair styling, dupatta draping, and jewelry placement
                in one smooth, unhurried sitting.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-xs font-medium text-charcoal">
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Shamli Town &amp; Highway Banquets
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Kandhla &amp; Kairana Region
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Resort &amp; Home Suite Sessions
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                On-Location Travel Included
              </li>
            </ul>
          </div>

          <aside className="rounded-lg border border-charcoal/15 bg-card p-8 shadow-sm">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-blush">
              {city} Inquiries
            </p>
            <p className="mt-4 font-display text-2xl text-charcoal font-semibold">
              {business.whatsappDisplay}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              WhatsApp Shreya directly with your wedding date, venue in {city}, and required looks
              for instant availability check.
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

      <Section tone="champagne" labelledBy="shamli-answer-heading">
        <SectionHeading
          id="shamli-answer-heading"
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

      <Section tone="charcoal" labelledBy="shamli-packages-heading">
        <SectionHeading
          id="shamli-packages-heading"
          eyebrow="Packages"
          title={`Book in ${city}`}
          tone="light"
        />
        <div className="mt-14">
          <PricingTable tone="light" />
        </div>
      </Section>

      <Section labelledBy="shamli-faq-heading">
        <SectionHeading id="shamli-faq-heading" eyebrow="FAQ" title={`${city} Makeup Questions`} />
        <div className="mt-10">
          <FaqAccordion faqs={shamliFaqs} />
        </div>
      </Section>

      <CTASection
        source="shamli_final_cta"
        title={`Planning a Wedding in ${city}?`}
        intro="Message Shreya on WhatsApp to verify date availability and discuss your customized bridal look."
      />
    </>
  );
}
