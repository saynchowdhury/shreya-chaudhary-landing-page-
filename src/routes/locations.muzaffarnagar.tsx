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

const city = "Muzaffarnagar";
const title = "Best Bridal Makeup Artist in Muzaffarnagar | Shreya Chaudhary";
const description =
  "Best bridal makeup artist in Muzaffarnagar. Shreya Chaudhary provides luxury HD bridal (₹15,000–₹18,000), engagement (₹8,000–₹10,000), and party makeup with on-location hairstyling in Muzaffarnagar, UP.";

const muzaffarnagarFaqs = [
  {
    question: "Does Shreya Chaudhary travel to Muzaffarnagar for bridal bookings?",
    answer:
      "Yes. Muzaffarnagar is one of our key service regions. Shreya travels directly to your wedding home, resort, or banquet hall in Muzaffarnagar for bridal and occasion events.",
  },
  {
    question: "How do I book Shreya Chaudhary for a wedding in Muzaffarnagar?",
    answer:
      "Simply send a WhatsApp message with your wedding date, event timings, and venue in Muzaffarnagar. Availability and booking confirmation are handled directly in that chat.",
  },
  {
    question: "Are luxury international makeup brands used in Muzaffarnagar bookings?",
    answer:
      "Yes. Every booking in Muzaffarnagar is performed with 100% authentic premium cosmetics including NARS, Huda Beauty, Rare Beauty, MAC, Milani, Forever 52, PAC, and Recode.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
  { name: "Muzaffarnagar", path: "/locations/muzaffarnagar" },
];

export const Route = createFileRoute("/locations/muzaffarnagar")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/locations/muzaffarnagar" }),
    links: canonical("/locations/muzaffarnagar"),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Muzaffarnagar", path: "/locations/muzaffarnagar" },
        ]),
      ),
      jsonLd(faqLd(muzaffarnagarFaqs)),
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
  component: MuzaffarnagarPage,
});

function MuzaffarnagarPage() {
  return (
    <>
      <PageHero
        eyebrow={`Serving ${city} & Western UP`}
        title="Best Bridal Makeup Artist in Muzaffarnagar"
        intro={`${business.artist} is the premier bridal makeup artist serving ${city}, traveling to you for bespoke HD makeup. Winter 2026 wedding bookings now open.`}
        crumbs={crumbs.slice(0, 2)}
      />

      <Section labelledBy="local-heading">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <SectionHeading
              id="local-heading"
              eyebrow="Western UP Bridal Artistry"
              title={`Exquisite Wedding & Occasion Glam in ${city}`}
              intro="Get ready in the comfort of your bridal suite or venue in Muzaffarnagar with unhurried, personalized attention."
            />
            <div className="mt-8 space-y-4 text-sm text-charcoal/85 leading-relaxed">
              <p>
                Whether celebrating at luxury resorts along the highway, ancestral homes, or grand
                banquet lawns in Muzaffarnagar, Shreya provides 1-on-1 dedicated bridal makeup
                crafted for long-lasting, 16-hour sweatproof wear.
              </p>
              <p>
                Hairstyling, floral attachment, jewelry placement, and dupatta draping are all
                integrated seamlessly into your booking.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-xs font-medium text-charcoal">
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Civil Lines &amp; New Mandi
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Jansath Road Banquets
              </li>
              <li className="flex items-center gap-2 border-b border-charcoal/10 pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                Roorkee Road Resorts
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
              Send your date, wedding location, and required looks on WhatsApp for instant
              confirmation.
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

      <Section tone="champagne" labelledBy="muzaffarnagar-answer-heading">
        <SectionHeading
          id="muzaffarnagar-answer-heading"
          eyebrow="Pricing"
          title={`Makeup Rates in ${city}`}
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

      <Section tone="charcoal" labelledBy="muzaffarnagar-packages-heading">
        <SectionHeading
          id="muzaffarnagar-packages-heading"
          eyebrow="Packages"
          title={`Book in ${city}`}
          tone="light"
        />
        <div className="mt-14">
          <PricingTable tone="light" />
        </div>
      </Section>

      <Section labelledBy="muzaffarnagar-faq-heading">
        <SectionHeading
          id="muzaffarnagar-faq-heading"
          eyebrow="FAQ"
          title={`${city} Makeup Questions`}
        />
        <div className="mt-10">
          <FaqAccordion faqs={muzaffarnagarFaqs} />
        </div>
      </Section>

      <CTASection
        source="muzaffarnagar_final_cta"
        title={`Getting Married in ${city}?`}
        intro="Reach out on WhatsApp to check availability for your special date."
      />
    </>
  );
}
