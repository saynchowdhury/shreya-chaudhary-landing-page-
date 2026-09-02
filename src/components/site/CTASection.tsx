import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "./Section";
import { WhatsAppButton } from "./WhatsAppButton";

export function CTASection({
  title = "Let's bring your vision to life.",
  intro = "Tell Shreya about your occasion, your date and the look you have in mind.",
  message,
  service,
  source,
}: {
  title?: string;
  intro?: string;
  message?: string;
  service?: string;
  source: string;
}) {
  return (
    <Section tone="charcoal" labelledBy="final-cta-heading">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          id="final-cta-heading"
          eyebrow="Book your date"
          title={title}
          intro={intro}
          align="center"
          tone="light"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <WhatsAppButton source={source} message={message} service={service} variant="light" />
          <Link
            to="/portfolio"
            className="inline-flex items-center border border-ivory/30 px-7 py-4 text-[0.7rem] uppercase tracking-[0.18em] text-ivory transition-colors hover:border-peach hover:text-peach"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </Section>
  );
}
