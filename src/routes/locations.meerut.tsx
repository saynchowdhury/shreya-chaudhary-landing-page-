import { createFileRoute, Link } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { services } from "@/data/services";
import { meerutFaqs } from "@/data/faqs";
import { breadcrumbLd, canonical, faqLd, ids, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { PricingTable } from "@/components/site/PricingTable";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { AnswerBlock } from "@/components/site/AnswerBlock";
import { CTASection } from "@/components/site/CTASection";

const title = "Best Bridal Makeup Artist in Meerut | Shreya Chaudhary";
const description =
  "Looking for the best bridal makeup artist in Meerut? Shreya Chaudhary offers bespoke HD bridal (₹15K–₹18K), engagement and party makeup. Book for Winter 2026.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
  { name: "Meerut", path: "/locations/meerut" },
];

export const Route = createFileRoute("/locations/meerut")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/locations/meerut" }),
    links: canonical("/locations/meerut"),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Meerut", path: "/locations/meerut" },
        ]),
      ),
      jsonLd(faqLd(meerutFaqs)),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        about: { "@id": ids.business },
        mainEntity: {
          "@type": "Place",
          name: locationLabel,
          address: {
            "@type": "PostalAddress",
            addressLocality: business.city,
            addressRegion: business.state,
            addressCountry: business.countryCode,
          },
        },
      }),
    ],
  }),
  component: MeerutPage,
});

function MeerutPage() {
  return (
    <>
      <PageHero
        eyebrow="Serving Meerut"
        title="Best Bridal Makeup Artist in Meerut"
        intro={`${business.artist} is the premier bridal makeup artist in ${locationLabel}, working with brides across the city. Offering HD makeup and on-location hairstyling. Winter 2026 – 2027 wedding season bookings are now open.`}
        crumbs={crumbs.slice(0, 2)}
      />

      <Section labelledBy="local-heading">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading
              id="local-heading"
              eyebrow="Local service"
              title={`Bridal, engagement and party makeup across ${business.city}`}
              intro="Because hairstyling is done on location, there is no travelling between a salon and your venue on the morning of your event. You get ready in one place, on schedule."
            />
            <ul className="mt-10 space-y-4 text-base text-charcoal">
              {business.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 border-b border-border pb-4">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-blush" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Travel is available for bridal bookings. Share your venue on WhatsApp and it can be
              confirmed against your date.
            </p>
          </div>

          <aside className="h-fit border border-border bg-card p-8">
            <p className="eyebrow text-blush">Local enquiries</p>
            <p className="mt-4 font-display text-2xl text-charcoal">{business.whatsappDisplay}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              WhatsApp is the fastest way to check a {business.city} date. Send your occasion, date
              and the area you are getting ready in.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug} className="flex justify-between gap-4">
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="text-charcoal underline decoration-blush decoration-1 underline-offset-4"
                  >
                    {service.name}
                  </Link>
                  <span className="text-muted-foreground">{service.priceLabel}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section tone="champagne" labelledBy="meerut-answer-heading">
        <SectionHeading
          id="meerut-answer-heading"
          eyebrow="Direct answers"
          title={`Makeup prices in ${business.city}`}
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

      <Section tone="charcoal" labelledBy="meerut-packages-heading">
        <SectionHeading
          id="meerut-packages-heading"
          eyebrow="Packages"
          title={`Book in ${business.city}`}
          tone="light"
        />
        <div className="mt-14">
          <PricingTable tone="light" />
        </div>
      </Section>

      <Section labelledBy="meerut-faq-heading">
        <SectionHeading
          id="meerut-faq-heading"
          eyebrow="Questions"
          title={`${business.city} makeup questions`}
        />
        <div className="mt-10">
          <FaqAccordion faqs={meerutFaqs} />
        </div>
      </Section>

      <CTASection source="meerut_final_cta" title={`Getting married in ${business.city}?`} />
    </>
  );
}
