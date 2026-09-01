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

const city = "Greater Noida";
const title = "Best Bridal Makeup Artist in Greater Noida | Shreya Chaudhary";
const description =
  "Looking for the best bridal makeup artist in Greater Noida (Pari Chowk, Greater Noida West / Noida Extension, Knowledge Park)? Shreya Chaudhary offers bespoke HD bridal glam.";

const greaterNoidaFaqs = [
  {
    question: "Does Shreya Chaudhary travel to Greater Noida and Greater Noida West (Noida Extension)?",
    answer:
      "Yes. Shreya provides complete on-location bridal makeup services across Greater Noida, Pari Chowk resorts, Greater Noida West / Noida Extension, and Knowledge Park luxury hotels.",
  },
  {
    question: "How much does bridal makeup cost in Greater Noida?",
    answer:
      "Bridal makeup is ₹15,000 and includes full HD makeup, luxury skincare prep, hair styling, floral/veil setting, and jewelry/dupatta draping.",
  },
  {
    question: "What products are used for Greater Noida brides?",
    answer:
      "Only 100% authentic international luxury products: NARS, Huda Beauty, Rare Beauty, MAC, Milani, Forever 52, PAC, and Recode.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations/greater-noida" },
  { name: "Greater Noida", path: "/locations/greater-noida" },
];

export const Route = createFileRoute("/locations/greater-noida")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/locations/greater-noida" }),
    links: canonical("/locations/greater-noida"),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Greater Noida", path: "/locations/greater-noida" },
        ]),
      ),
      jsonLd(faqLd(greaterNoidaFaqs)),
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
  component: GreaterNoidaPage,
});

function GreaterNoidaPage() {
  return (
    <>
      <PageHero
        eyebrow={`Serving ${city} & Delhi NCR`}
        title="Best Bridal Makeup Artist in Greater Noida"
        intro={`${business.artist} is the premier bridal makeup artist serving ${city}, traveling to you for bespoke HD makeup. Winter 2026 wedding bookings now open.`}
        crumbs={crumbs.slice(0, 2)}
      />

      <Section labelledBy="local-heading">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <SectionHeading
              id="local-heading"
              eyebrow="On-Location Suite Artistry"
              title={`Exquisite Bridal & Occasion Glam in ${city}`}
              intro="Get ready peacefully in your luxury venue suite without salon rush. Shreya brings a full professional studio setup directly to your location."
            />
            <div className="mt-8 space-y-4 text-sm text-charcoal/85 leading-relaxed">
              <p>
                From wedding resorts around Pari Chowk and Jaypee Greens to banquet hubs in Greater Noida West (Noida Extension) and Knowledge Park, Shreya creates weightless, high-definition makeup engineered for 4K wedding photography.
              </p>
              <p>
                Each booking is personalized 1-on-1 with zero assembly-line rushing, ensuring you look breathtaking for all ceremonies.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-xs font-medium text-charcoal">
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Pari Chowk &amp; Jaypee Greens
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Noida Extension / Gr. Noida West
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Knowledge Park Hotel Suites
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Yamuna Expressway Resorts
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
              WhatsApp Shreya directly with your wedding date, venue, and required looks for quick availability confirmation.
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

      <Section tone="champagne" labelledBy="greater-noida-answer-heading">
        <SectionHeading
          id="greater-noida-answer-heading"
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

      <Section tone="charcoal" labelledBy="greater-noida-packages-heading">
        <SectionHeading
          id="greater-noida-packages-heading"
          eyebrow="Packages"
          title={`Book in ${city}`}
          tone="light"
        />
        <div className="mt-14">
          <PricingTable tone="light" />
        </div>
      </Section>

      <Section labelledBy="greater-noida-faq-heading">
        <SectionHeading
          id="greater-noida-faq-heading"
          eyebrow="FAQ"
          title={`${city} Makeup Questions`}
        />
        <div className="mt-10">
          <FaqAccordion faqs={greaterNoidaFaqs} />
        </div>
      </Section>

      <CTASection
        source="greater_noida_final_cta"
        title={`Getting Married in ${city}?`}
        intro="Message Shreya on WhatsApp to verify date availability and book your bespoke bridal look."
      />
    </>
  );
}
