import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  BookOpen,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { getGlossaryTerm } from "@/data/glossary";
import { getFaqBySlug } from "@/data/faqs";
import { getService, type ServiceSlug } from "@/data/services";
import { breadcrumbLd, canonical, CANONICAL_DOMAIN, jsonLd, pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Section } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/glossary/$slug")({
  loader: ({ params }) => {
    const term = getGlossaryTerm(params.slug);
    if (!term) throw notFound();
    return { term };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Term Not Found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { term } = loaderData;
    const path = `/glossary/${params.slug}`;
    const title = term.seoTitle || `${term.term} | Luxury Bridal Beauty Glossary`;
    const description = term.seoDescription || term.shortDefinition;

    const crumbs = [
      { name: "Home", path: "/" },
      { name: "Glossary", path: "/glossary" },
      { name: term.term, path },
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
          "@type": "DefinedTerm",
          name: term.term,
          description: term.shortDefinition,
          inDefinedTermSet: `${CANONICAL_DOMAIN}/glossary`,
          url: `${CANONICAL_DOMAIN}${path}`,
        }),
      ],
    };
  },
  component: GlossaryDetailPage,
});

function GlossaryDetailPage() {
  const { term } = Route.useLoaderData();
  const path = `/glossary/${term.slug}`;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary" },
    { name: term.term, path },
  ];

  // Resolve related terms
  const relatedTermItems = (term.relatedTerms || [])
    .map((slug) => getGlossaryTerm(slug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  // Resolve related FAQs
  const relatedFaqItems = (term.relatedFaqs || [])
    .map((slug) => getFaqBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  // Resolve related services
  const relatedServiceItems = (term.relatedServices || [])
    .map((slug) => getService(slug as ServiceSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <div className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF7] to-background px-5 pt-12 pb-14 sm:px-6 md:px-10 lg:pt-16 lg:pb-20 border-b border-charcoal/10">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-peach/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blush/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-left">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={crumbs} />
          </div>

          {/* Category & Phonetic */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-peach/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-charcoal border border-peach/30">
              <BookOpen className="h-3.5 w-3.5 text-charcoal" />
              {term.categoryLabel}
            </span>
            {term.phonetic && (
              <span className="font-mono text-xs text-muted-foreground bg-card px-2.5 py-1 rounded-full border border-charcoal/15">
                {term.phonetic}
              </span>
            )}
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              Bridal Beauty Standard
            </span>
          </div>

          {/* Term Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal leading-tight">
            {term.term}
          </h1>

          {/* Definition by Shreya */}
          <div className="mt-5 flex items-center gap-3 border-t border-charcoal/10 pt-4 text-xs text-muted-foreground">
            <img
              src="/shreya-chaudhary-logo.png"
              alt="Shreya Chaudhary"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-peach/30"
            />
            <div>
              <p className="font-semibold text-charcoal">Defined by Shreya Chaudhary</p>
              <p className="text-[0.68rem] text-charcoal/70">
                Principal Luxury Bridal Makeup Artist · Meerut &amp; Delhi NCR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Educational Content Section */}
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Quick Definition Box */}
          <div className="rounded-2xl border-2 border-charcoal/15 bg-card p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-peach mb-3">
              <Sparkles className="h-4 w-4" />
              <span>Core Definition</span>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-charcoal font-medium">
              {term.shortDefinition}
            </p>
          </div>

          {/* Why It Matters for Indian Brides */}
          <div className="rounded-2xl border border-charcoal/15 bg-card p-6 md:p-8 space-y-3 shadow-2xs">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal border-b border-charcoal/10 pb-3">
              Why It Matters for Indian Brides
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-charcoal/85">
              {term.whyItMattersForBrides}
            </p>
          </div>

          {/* How Shreya Chaudhary Executes It */}
          <div className="rounded-2xl border border-charcoal/15 bg-card p-6 md:p-8 space-y-3 shadow-2xs">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal border-b border-charcoal/10 pb-3">
              The Shreya Chaudhary Standard
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-charcoal/85">
              {term.howShreyaExecutes}
            </p>
          </div>

          {/* Pro Tips Box */}
          {term.proTips && term.proTips.length > 0 && (
            <div className="rounded-2xl border border-amber-300/40 bg-amber-500/5 p-6 md:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-amber-800 mb-3">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>Pro Tips &amp; Best Practices</span>
              </div>
              <ul className="space-y-2.5">
                {term.proTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-charcoal/90">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* WhatsApp Inquire CTA */}
          <div className="rounded-2xl border border-charcoal/20 bg-gradient-to-br from-[#FAF6F0] to-[#F5ECE1] p-6 md:p-8 text-center shadow-md">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
              Book Your {term.term} Bridal Look
            </h3>
            <p className="mt-2 text-sm text-charcoal/80 max-w-md mx-auto">
              Have questions about how {term.term} will look with your wedding lehenga? Message
              Shreya directly on WhatsApp.
            </p>
            <div className="mt-5 flex justify-center">
              <WhatsAppButton
                source={`glossary_standalone_${term.slug}`}
                service={term.relatedServices?.[0]}
                variant="green"
                className="rounded-full px-8 py-4 text-xs font-bold tracking-wider shadow-md hover:shadow-xl"
              >
                Inquire on WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          {/* Related Glossary Terms */}
          {relatedTermItems.length > 0 && (
            <div className="pt-6 border-t border-charcoal/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-peach mb-4">
                Related Beauty Terminology
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedTermItems.map((rel) => (
                  <Link
                    key={rel.slug}
                    to="/glossary/$slug"
                    params={{ slug: rel.slug }}
                    className="group rounded-xl border border-charcoal/15 bg-card p-4 transition-all hover:border-charcoal/40 hover:shadow-sm"
                  >
                    <p className="font-display text-base font-semibold text-charcoal group-hover:text-peach transition-colors">
                      {rel.term}
                    </p>
                    <p className="mt-1 text-xs text-charcoal/70 line-clamp-2">
                      {rel.shortDefinition}
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

          {/* Related FAQs */}
          {relatedFaqItems.length > 0 && (
            <div className="pt-6 border-t border-charcoal/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-peach mb-4">
                Common Questions About {term.term}
              </h3>
              <div className="space-y-3">
                {relatedFaqItems.map((faq) => (
                  <Link
                    key={faq.slug}
                    to="/faqs/$slug"
                    params={{ slug: faq.slug }}
                    className="group block rounded-xl border border-charcoal/15 bg-card p-4 transition-all hover:border-charcoal/40 hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-display text-base font-semibold text-charcoal group-hover:text-peach transition-colors">
                        {faq.question}
                      </p>
                      <ArrowRight className="h-4 w-4 text-peach shrink-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="mt-1.5 text-xs text-charcoal/75 line-clamp-2">
                      {faq.answer}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Back Navigation */}
          <div className="pt-6 border-t border-charcoal/10 flex items-center justify-between">
            <Link
              to="/glossary"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-charcoal hover:text-peach transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Master Glossary</span>
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
