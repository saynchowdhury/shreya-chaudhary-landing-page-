import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { experienceSteps, services, type ServiceSlug } from "@/data/services";
import { bridalFaqs, engagementFaqs, partyFaqs, type Faq } from "@/data/faqs";
import { portfolioByCategory } from "@/data/portfolio";
import { breadcrumbLd, canonical, faqLd, jsonLd, pageMeta, serviceLd } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { AnswerBlock } from "@/components/site/AnswerBlock";
import { CTASection } from "@/components/site/CTASection";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const faqsBySlug: Record<ServiceSlug, Faq[]> = {
  "bridal-makeup": bridalFaqs,
  "engagement-makeup": engagementFaqs,
  "party-makeup": partyFaqs,
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const path = `/services/${params.slug}`;
    return {
      meta: pageMeta({
        title: service.seo.title,
        description: service.seo.description,
        path,
      }),
      links: canonical(path),
      scripts: [
        jsonLd(serviceLd(service)),
        jsonLd(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path },
          ]),
        ),
        jsonLd(faqLd(faqsBySlug[service.slug])),
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const faqs = faqsBySlug[service.slug];
  const images = portfolioByCategory(service.category);
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={`${service.shortName} makeup · ${locationLabel}`}
        title={service.name}
        intro={service.summary}
        price={service.priceLabel}
        whatsappMessage={service.whatsappMessage}
        whatsappService={service.name}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      <Section labelledBy="included-heading">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <SectionHeading
              id="included-heading"
              eyebrow="Signature Look & Inclusions"
              title={service.tagline}
              intro={`${service.priceLabel} — ${service.summary}`}
            />
            <ul className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10 text-sm">
              {service.inclusions.map((item) => (
                <li key={item} className="flex items-center justify-between gap-4 py-4">
                  <span className="text-charcoal font-medium">{item}</span>
                  <span className="text-[0.62rem] uppercase tracking-[0.2em] font-semibold text-blush">
                    Included
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">{business.pricingNote}</p>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-charcoal/15 bg-card shadow-xl">
              <img
                src={service.image}
                alt={`${service.name} signature look by Shreya Chaudhary`}
                width={900}
                height={1200}
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>

            <aside className="rounded-lg border border-charcoal/15 bg-card p-6 shadow-xs">
              <div className="flex items-baseline justify-between">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-blush">
                  Hold Your Date
                </p>
                <p className="font-display text-2xl font-semibold text-charcoal">
                  {service.priceLabel}
                </p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Message Shreya directly on WhatsApp with your wedding date, venue, and required
                looks.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <WhatsAppButton
                  source={`service_detail:${service.slug}`}
                  message={service.whatsappMessage}
                  service={service.name}
                  className="py-3 text-xs"
                />
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <Section tone="champagne" labelledBy="answer-heading">
        <AnswerBlock question={service.answer.question} answer={service.answer.answer} />
        <ol className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {experienceSteps.map((step, index) => (
            <li key={step.title} className="border-t border-charcoal/15 pt-6">
              <span className="font-display text-3xl text-blush">0{index + 1}</span>
              <h3 className="mt-4 font-display text-xl text-charcoal">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="service-portfolio-heading">
        <SectionHeading
          id="service-portfolio-heading"
          eyebrow="Portfolio"
          title={`${service.shortName} work`}
        />
        <div className="mt-14">
          <PortfolioGrid items={images} />
        </div>
      </Section>

      <Section tone="champagne" labelledBy="service-faq-heading">
        <SectionHeading
          id="service-faq-heading"
          eyebrow="Questions"
          title={`${service.shortName} makeup questions`}
        />
        <div className="mt-10">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>

      <Section labelledBy="other-services-heading">
        <SectionHeading
          id="other-services-heading"
          eyebrow="Also available"
          title="Other services"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {others.map((other) => (
            <li key={other.slug} className="border border-border bg-card p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl text-charcoal">{other.name}</h3>
                <p className="font-display text-2xl text-charcoal">{other.priceLabel}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{other.summary}</p>
              <Link
                to="/services/$slug"
                params={{ slug: other.slug }}
                className="mt-6 inline-flex text-[0.68rem] uppercase tracking-[0.18em] text-charcoal underline decoration-blush decoration-1 underline-offset-4"
              >
                {other.name} details
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        source={`service_final_cta:${service.slug}`}
        message={service.whatsappMessage}
        service={service.name}
        title={`Check your date for ${service.name.toLowerCase()}.`}
      />
    </>
  );
}
