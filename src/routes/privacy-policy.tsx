import { createFileRoute } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { canonical, jsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

const title = "Privacy Policy | Shreya Chaudhary Makeup";
const description =
  "How Shreya Chaudhary Makeup handles the information you share when you enquire about bridal, engagement or party makeup in Meerut.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/privacy-policy" }),
    links: canonical("/privacy-policy"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="This website does not collect your details through forms. Enquiries happen on WhatsApp, so the information you share stays in that conversation."
        crumbs={crumbs}
      />

      <Section>
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="font-display text-2xl text-charcoal">What this website collects</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              This website has no contact form, no account system and no database. Nothing you type
              is stored here. Buttons labelled for WhatsApp open a chat in WhatsApp with a message
              prepared for you; you choose whether to send it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal">
              Information you share on WhatsApp
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              When you message {business.artist}, you typically share your name, phone number, event
              date and location. That information is used only to answer your enquiry, check
              availability and deliver your booking. It is not sold, published or shared for
              marketing. WhatsApp's own privacy terms apply to the conversation itself.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal">Photographs</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Client photographs appear on this website or on Instagram only where the client is
              comfortable with them being shared. If you would prefer your photographs not to be
              used, say so on WhatsApp and they will not be published.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal">Analytics</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              If website analytics are enabled, they record anonymous usage such as which pages are
              visited and which buttons are tapped. They do not identify you personally.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal">Questions</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              For anything about this policy, message {business.whatsappDisplay} on WhatsApp.
              {business.name} operates from {locationLabel}, {business.country}.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
