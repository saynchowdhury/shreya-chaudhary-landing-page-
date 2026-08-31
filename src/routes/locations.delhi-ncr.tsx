import { createFileRoute, Link } from "@tanstack/react-router";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { breadcrumbLd, canonical, faqLd, ids, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { PricingTable } from "@/components/site/PricingTable";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CTASection } from "@/components/site/CTASection";

const title = "Bridal Makeup Artist for Delhi NCR & Destination Weddings | Shreya Chaudhary";
const description =
  "Looking for an on-location luxury bridal makeup artist in Delhi NCR, Noida or Ghaziabad? Shreya Chaudhary offers bespoke 3D HD bridal glam with NARS, Huda Beauty & MAC. Book on WhatsApp.";

const delhiFaqs = [
  {
    question: "Does Shreya Chaudhary travel to Delhi NCR and Noida for bridal makeup?",
    answer:
      "Yes. Shreya Chaudhary and her styling team travel on-location across Delhi NCR, Noida, Greater Noida, Ghaziabad, and Gurgaon for bridal and destination wedding bookings.",
  },
  {
    question: "What products are used for Delhi NCR weddings?",
    answer:
      "Every bridal vanity is prepped with authentic luxury international cosmetics: NARS, Huda Beauty, Rare Beauty, M·A·C, Forever 52, PAC, and Milani — formulated for sweat-proof and 16-hour long-wear performance.",
  },
  {
    question: "How do I book for a Delhi NCR or destination wedding?",
    answer:
      "Simply message on WhatsApp (+91 70037 81618) with your wedding date, venue, and required services (Bridal, Sangeet, Engagement, Family) to receive a custom quote and lock in your date.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations/meerut" },
  { name: "Delhi NCR", path: "/locations/delhi-ncr" },
];

export const Route = createFileRoute("/locations/delhi-ncr")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/locations/delhi-ncr" }),
    links: canonical("/locations/delhi-ncr"),
    scripts: [
      jsonLd(breadcrumbLd(crumbs)),
      jsonLd(faqLd(delhiFaqs)),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        about: { "@id": ids.business },
      }),
    ],
  }),
  component: DelhiNcrPage,
});

function DelhiNcrPage() {
  return (
    <>
      <PageHero
        eyebrow="On-Location Luxury Artistry"
        title="Bridal Makeup Artist for Delhi NCR & Destination"
        intro="Bespoke bridal, engagement and cocktail artistry delivered directly to your bridal suite across Delhi, Noida, Ghaziabad, and destination wedding venues."
        crumbs={crumbs.slice(0, 2)}
      />

      <Section labelledBy="delhi-coverage-heading">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] items-center">
          <div>
            <SectionHeading
              id="delhi-coverage-heading"
              eyebrow="NCR Coverage"
              title="Couture bridal glam delivered to your suite"
              intro="No early morning salon rush or stressful traffic. Shreya Chaudhary travels directly to your getting-ready location with a fully equipped professional vanity."
            />
            <ul className="mt-8 space-y-3.5 text-sm text-charcoal/90">
              <li className="flex items-center gap-3 border-b border-border pb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                <strong>Delhi &amp; South Delhi:</strong> Luxury venues, farmhouses &amp; 5-star hotels.
              </li>
              <li className="flex items-center gap-3 border-b border-border pb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                <strong>Noida &amp; Greater Noida:</strong> Expressway banquets and home prep.
              </li>
              <li className="flex items-center gap-3 border-b border-border pb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                <strong>Ghaziabad &amp; Indirapuram:</strong> Dedicated bridal suite services.
              </li>
              <li className="flex items-center gap-3 border-b border-border pb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                <strong>Destination Weddings:</strong> Jim Corbett, Jaipur, Udaipur, and outstation resorts.
              </li>
            </ul>
          </div>

          <aside className="rounded-lg border border-charcoal/15 bg-card p-8 shadow-xs">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-blush">
              Delhi NCR Enquiries
            </p>
            <p className="mt-3 font-display text-2xl text-charcoal font-medium">
              {business.whatsappDisplay}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              WhatsApp is the fastest way to check date availability and receive a custom package for Delhi NCR &amp; Destination weddings.
            </p>
            <div className="mt-6 border-t border-charcoal/10 pt-4">
              <Link
                to="/portfolio"
                className="inline-flex text-xs uppercase tracking-[0.16em] text-charcoal underline decoration-blush decoration-1 underline-offset-4 font-medium"
              >
                Explore Real Bride Transformations →
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="charcoal" labelledBy="delhi-packages-heading">
        <SectionHeading
          id="delhi-packages-heading"
          eyebrow="Packages"
          title="Transparent bridal packages"
          tone="light"
        />
        <div className="mt-14">
          <PricingTable tone="light" />
        </div>
      </Section>

      <Section labelledBy="delhi-faq-heading">
        <SectionHeading
          id="delhi-faq-heading"
          eyebrow="FAQs"
          title="Delhi NCR Bridal Makeup Questions"
        />
        <div className="mt-10 max-w-3xl mx-auto">
          <FaqAccordion faqs={delhiFaqs} />
        </div>
      </Section>

      <CTASection
        source="delhi_ncr_final_cta"
        title="Planning a Delhi NCR or destination wedding?"
      />
    </>
  );
}
