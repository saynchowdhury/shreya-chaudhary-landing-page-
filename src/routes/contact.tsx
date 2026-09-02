import { createFileRoute } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { breadcrumbLd, canonical, faqLd, ids, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SocialLinks } from "@/components/site/SocialLinks";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { track } from "@/lib/analytics";

const title = "Contact & Book on WhatsApp | Shreya Chaudhary Makeup, Meerut";
const description =
  "Book bridal, engagement or party makeup in Meerut with Shreya Chaudhary. Enquiries are handled directly on WhatsApp at +91 70037 81618.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const contactFaqs = [homeFaqs[3]!, homeFaqs[4]!, homeFaqs[0]!];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/contact" }),
    links: canonical("/contact"),
    scripts: [
      jsonLd(breadcrumbLd(crumbs)),
      jsonLd(faqLd(contactFaqs)),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: title,
        description,
        about: { "@id": ids.business },
      }),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your date"
        intro={`Every enquiry is handled personally on WhatsApp. Send your occasion, date and location in ${locationLabel}, and availability is confirmed in that conversation.`}
        crumbs={crumbs}
      />

      <Section labelledBy="contact-heading">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              id="contact-heading"
              eyebrow="Start a conversation"
              title="Message Shreya on WhatsApp"
              intro="Choose your occasion below and the message opens already written — you only add your date and location."
            />
            <ul className="mt-12 space-y-4">
              {services.map((service) => (
                <li
                  key={service.slug}
                  className="flex flex-wrap items-center justify-between gap-5 border border-border bg-card p-6"
                >
                  <div>
                    <h3 className="font-display text-xl text-charcoal">{service.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.priceLabel} · {service.inclusions.join(" · ")}
                    </p>
                  </div>
                  <WhatsAppButton
                    source={`contact_enquiry:${service.slug}`}
                    message={service.whatsappMessage}
                    service={service.name}
                    variant="outline"
                    className="px-6 py-3"
                  >
                    Enquire
                  </WhatsAppButton>
                </li>
              ))}
              <li className="flex flex-wrap items-center justify-between gap-5 border border-border bg-card p-6">
                <div>
                  <h3 className="font-display text-xl text-charcoal">Something else in mind</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Multiple dates, a group booking or a question about a look.
                  </p>
                </div>
                <WhatsAppButton
                  source="contact_enquiry:general"
                  variant="outline"
                  className="px-6 py-3"
                >
                  Message
                </WhatsAppButton>
              </li>
            </ul>
          </div>

          <aside className="h-fit border border-border bg-card p-8">
            <p className="eyebrow text-blush">Contact details</p>
            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className="text-muted-foreground">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("whatsapp_click", { source: "contact_details" })}
                    className="font-display text-xl text-charcoal underline decoration-blush decoration-1 underline-offset-4"
                  >
                    {business.whatsappDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:+${business.whatsapp}`}
                    onClick={() => track("phone_click", { source: "contact_details" })}
                    className="text-charcoal"
                  >
                    {business.whatsappDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("instagram_click", { source: "contact_details" })}
                    className="text-charcoal"
                  >
                    {business.instagramHandle}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Service area</dt>
                <dd className="mt-1 text-charcoal">
                  {business.serviceAreas.join(", ")} · travel available for bridal bookings
                </dd>
              </div>
            </dl>
            <div className="mt-8 border-t border-border pt-6">
              <SocialLinks source="contact_sidebar" />
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="champagne" labelledBy="contact-faq-heading">
        <SectionHeading
          id="contact-faq-heading"
          eyebrow="Before you message"
          title="Booking questions"
        />
        <div className="mt-10">
          <FaqAccordion faqs={contactFaqs} />
        </div>
      </Section>
    </>
  );
}
