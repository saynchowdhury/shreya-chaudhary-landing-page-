import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";

const title = "Booking Policy | Shreya Chaudhary Makeup, Meerut";
const description =
  "How bookings work with Shreya Chaudhary Makeup: enquiries on WhatsApp, published prices for bridal, engagement and party makeup, and on-location hairstyling.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Booking Policy", path: "/booking-policy" },
];

export const Route = createFileRoute("/booking-policy")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/booking-policy" }),
    links: canonical("/booking-policy"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: BookingPolicy,
});

function BookingPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Booking policy"
        intro="What is published, what is confirmed on WhatsApp, and what to expect once your date is held."
        crumbs={crumbs}
      />

      <Section>
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="font-display text-2xl text-charcoal">How to book</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              All enquiries and bookings are handled over WhatsApp at {business.whatsappDisplay}.
              Send your occasion, date and location; availability is confirmed in that conversation.
              A booking is only held once it has been confirmed there.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal">Published prices</h2>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li
                  key={service.slug}
                  className="flex justify-between gap-4 border-b border-border pb-3 text-base"
                >
                  <span className="text-charcoal">{service.name}</span>
                  <span className="text-muted-foreground">{service.priceLabel}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {business.pricingNote}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal">What is included</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every package includes the makeup application described on its service page, premium
              authentic products, and on-location hairstyling. Travel expenses are excluded from
              base package fees and are calculated on actuals based on venue distance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal">
              Timings, changes and cancellations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Start times are agreed in advance so the look is finished before you need to leave. If
              your date, timing or venue changes, tell {business.artist} on WhatsApp as early as
              possible and the booking will be adjusted where availability allows. Any deposit or
              cancellation terms that apply to your specific booking are stated to you in writing on
              WhatsApp before you confirm.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal">Skin sensitivities</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Mention allergies, sensitivities or recent skin treatments when you enquire, so
              products can be planned around them.
            </p>
          </section>
        </div>
      </Section>

      <CTASection source="booking_policy_cta" title="Questions about your booking?" />
    </>
  );
}
