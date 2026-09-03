import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  HelpCircle,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { getFaqBySlug } from "@/data/faqs";
import { getService, type ServiceSlug } from "@/data/services";
import { getGlossaryTerm } from "@/data/glossary";
import { breadcrumbLd, canonical, CANONICAL_DOMAIN, jsonLd, pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Section } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/faqs/$slug")({
  loader: ({ params }) => {
    const faq = getFaqBySlug(params.slug);
    if (!faq) throw notFound();
    return { faq };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Question Not Found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { faq } = loaderData;
    const path = `/faqs/${params.slug}`;
    const title = faq.seoTitle || `${faq.question} | Shreya Chaudhary`;
    const description = faq.seoDescription || faq.answer;

    const crumbs = [
      { name: "Home", path: "/" },
      { name: "FAQs", path: "/faqs" },
      { name: faq.question, path },
    ];

    return {
      meta: pageMeta({
        title,
        description,
        path,
      }),
      links: canonical(path),
      scripts: [
        jsonLd(breadcrumbLd(crumbs)),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "QAPage",
          mainEntity: {
            "@type": "Question",
            name: faq.question,
            text: faq.question,
            answerCount: 1,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.detailedAnswer?.join(" ") || faq.answer,
              datePublished: "2026-09-02",
              dateModified: "2026-09-03",
              author: {
                "@type": "Person",
                name: "Shreya Chaudhary",
                jobTitle: "Principal Luxury Bridal Makeup Artist",
                url: `${CANONICAL_DOMAIN}/about`,
              },
            },
          },
        }),
      ],
    };
  },
  component: FaqDetailPage,
});

function FaqDetailPage() {
  const { faq } = Route.useLoaderData();
  const path = `/faqs/${faq.slug}`;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQs", path: "/faqs" },
    { name: faq.question, path },
  ];

  // Resolve related FAQs
  const relatedFaqItems = (faq.relatedFaqs || [])
    .map((slug) => getFaqBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  // Resolve related services
  const relatedServiceItems = (faq.relatedServices || [])
    .map((slug) => getService(slug as ServiceSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  // Resolve related glossary terms
  const relatedTermItems = (faq.relatedGlossaryTerms || [])
    .map((slug) => getGlossaryTerm(slug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <div className="bg-background min-h-screen">
      {/* Editorial Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF7] to-background px-5 pt-12 pb-14 sm:px-6 md:px-10 lg:pt-16 lg:pb-20 border-b border-charcoal/10">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-peach/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blush/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-left">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={crumbs} />
          </div>

          {/* Category & Status Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-peach/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-charcoal border border-peach/30">
              <HelpCircle className="h-3.5 w-3.5 text-charcoal" />
              {faq.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              Verified Expert Answer
            </span>
          </div>

          {/* Primary Question Heading */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-tight">
            {faq.question}
          </h1>

          {/* Author Attribution Meta */}
          <div className="mt-5 flex items-center gap-3 border-t border-charcoal/10 pt-4 text-xs text-muted-foreground">
            <img
              src="/shreya-chaudhary-logo.png"
              alt="Shreya Chaudhary"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-peach/30"
            />
            <div>
              <p className="font-semibold text-charcoal">Answered by Shreya Chaudhary</p>
              <p className="text-[0.68rem] text-charcoal/70">
                Principal Luxury Bridal Makeup Artist · Updated for 2026–2027 Wedding Season
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Answer Content Section */}
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Quick Summary Answer Box */}
          <div className="rounded-2xl border-2 border-charcoal/15 bg-card p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-peach mb-3">
              <Sparkles className="h-4 w-4" />
              <span>Quick Answer Summary</span>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-charcoal font-medium">
              {faq.answer}
            </p>
          </div>

          {/* In-Depth Detailed Answer Breakdown */}
          {faq.detailedAnswer && faq.detailedAnswer.length > 0 && (
            <div className="rounded-2xl border border-charcoal/15 bg-card p-6 md:p-8 space-y-4 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal border-b border-charcoal/10 pb-3">
                Detailed Expert Breakdown
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-charcoal/85">
                {faq.detailedAnswer.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Pro Tip Box */}
          {faq.proTip && (
            <div className="rounded-2xl border border-amber-300/40 bg-amber-500/5 p-6 md:p-7 shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-amber-800 mb-2">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>The Shreya Chaudhary Pro Tip</span>
              </div>
              <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed font-normal">
                {faq.proTip}
              </p>
            </div>
          )}

          {/* Interactive WhatsApp Consultation Box */}
          <div className="rounded-2xl border border-charcoal/20 bg-gradient-to-br from-[#FAF6F0] to-[#F5ECE1] p-6 md:p-8 text-center shadow-md">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
              Need Personal Guidance for Your Wedding?
            </h3>
            <p className="mt-2 text-sm text-charcoal/80 max-w-md mx-auto">
              Message Shreya directly on WhatsApp with your wedding date, venue, and questions for
              tailored guidance and package availability.
            </p>
            <div className="mt-5 flex justify-center">
              <WhatsAppButton
                source={`faq_standalone_${faq.slug}`}
                service={faq.relatedServices?.[0]}
                variant="green"
                className="rounded-full px-8 py-4 text-xs font-bold tracking-wider shadow-md hover:shadow-xl"
              >
                Discuss on WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          {/* Related Glossary Terms (if any) */}
          {relatedTermItems.length > 0 && (
            <div className="pt-6 border-t border-charcoal/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-peach mb-4">
                Related Bridal Terminology
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedTermItems.map((term) => (
                  <Link
                    key={term.slug}
                    to="/glossary/$slug"
                    params={{ slug: term.slug }}
                    className="group rounded-xl border border-charcoal/15 bg-card p-4 transition-all hover:border-charcoal/40 hover:shadow-sm"
                  >
                    <p className="font-display text-base font-semibold text-charcoal group-hover:text-peach transition-colors">
                      {term.term}
                    </p>
                    <p className="mt-1 text-xs text-charcoal/70 line-clamp-2">
                      {term.shortDefinition}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-wider font-bold text-charcoal group-hover:translate-x-0.5 transition-transform">
                      <span>View Term Guide</span>
                      <ArrowRight className="h-3 w-3 text-peach" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Questions Grid */}
          {relatedFaqItems.length > 0 && (
            <div className="pt-6 border-t border-charcoal/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-peach mb-4">
                Frequently Asked Related Questions
              </h3>
              <div className="space-y-3">
                {relatedFaqItems.map((rel) => (
                  <Link
                    key={rel.slug}
                    to="/faqs/$slug"
                    params={{ slug: rel.slug }}
                    className="group block rounded-xl border border-charcoal/15 bg-card p-4 transition-all hover:border-charcoal/40 hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-display text-base font-semibold text-charcoal group-hover:text-peach transition-colors">
                        {rel.question}
                      </p>
                      <ArrowRight className="h-4 w-4 text-peach shrink-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="mt-1.5 text-xs text-charcoal/75 line-clamp-2">
                      {rel.answer}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to All FAQs Navigation Link */}
          <div className="pt-6 border-t border-charcoal/10 flex items-center justify-between">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-charcoal hover:text-peach transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to All Frequently Asked Questions</span>
            </Link>

            <Link
              to="/packages"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-peach hover:underline"
            >
              <span>View Packages &amp; Pricing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
