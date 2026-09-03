import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { HelpCircle, Search, ArrowRight, Sparkles } from "lucide-react";
import { masterFaqs, type FaqCategory } from "@/data/faqs";
import { breadcrumbLd, canonical, faqLd, jsonLd, pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Section } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const title = "Bridal Makeup FAQs | Shreya Chaudhary Makeup Meerut";
const description =
  "Frequently asked questions about bridal makeup prices, authentic vanity kits, on-location travel, and 16-hour HD glass skin artistry across Meerut & NCR.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faqs" },
];

export const Route = createFileRoute("/faqs/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/faqs" }),
    links: canonical("/faqs"),
    scripts: [
      jsonLd(breadcrumbLd(crumbs)),
      jsonLd(faqLd(masterFaqs)),
    ],
  }),
  component: FaqsIndex,
});

const categories: { id: "all" | FaqCategory; label: string }[] = [
  { id: "all", label: "All Questions" },
  { id: "pricing", label: "Pricing & Packages" },
  { id: "services", label: "Services & Inclusions" },
  { id: "booking", label: "Booking & Logistics" },
  { id: "technique", label: "Artistry & Techniques" },
];

function FaqsIndex() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | FaqCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = masterFaqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header with Luxury Editorial Framing */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF7] to-background px-5 pt-12 pb-14 sm:px-6 md:px-10 lg:pt-16 lg:pb-20 border-b border-charcoal/10">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-peach/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blush/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={crumbs} />
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-peach/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-charcoal border border-peach/30">
            <HelpCircle className="h-3.5 w-3.5 text-charcoal" />
            Knowledge &amp; Decision Hub
          </span>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-charcoal/80 sm:text-base md:text-lg max-w-2xl mx-auto">
            Everything brides need to know about transparent package pricing, 100% authentic
            international vanity kits, suite travel, and 16-hour sweat-proof HD artistry.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. price, travel, glass skin)..."
              className="w-full rounded-full border border-charcoal/20 bg-card pl-11 pr-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 shadow-xs focus:border-charcoal focus:outline-hidden focus:ring-2 focus:ring-peach/50 transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-charcoal text-ivory shadow-md scale-102"
                    : "bg-card text-charcoal/80 hover:bg-champagne/40 border border-charcoal/15"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Grid Section */}
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-2xl border border-charcoal/10 p-8">
              <p className="font-display text-xl text-charcoal font-semibold">No questions found</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try searching for a different keyword or browse all questions.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 inline-flex items-center rounded-full bg-charcoal text-ivory px-5 py-2 text-xs uppercase tracking-wider font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <article
                  key={faq.slug}
                  className="group rounded-xl border border-charcoal/15 bg-card p-6 shadow-xs transition-all duration-300 hover:border-charcoal/40 hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <span className="inline-flex self-start items-center rounded-full bg-peach/15 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-charcoal">
                      {faq.categoryLabel}
                    </span>
                    <span className="text-[0.68rem] text-muted-foreground font-medium">
                      Verified by Shreya Chaudhary
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-lg sm:text-xl font-semibold text-charcoal group-hover:text-charcoal/90 leading-snug">
                    <Link
                      to="/faqs/$slug"
                      params={{ slug: faq.slug }}
                      className="hover:underline focus:outline-hidden"
                    >
                      {faq.question}
                    </Link>
                  </h2>

                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/80">
                    {faq.answer}
                  </p>

                  <div className="mt-4 pt-3.5 border-t border-charcoal/10 flex items-center justify-between">
                    <Link
                      to="/faqs/$slug"
                      params={{ slug: faq.slug }}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-charcoal hover:text-peach group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Read Complete Answer &amp; Pro Tips</span>
                      <ArrowRight className="h-3.5 w-3.5 text-peach" />
                    </Link>

                    <Link
                      to="/faqs/$slug"
                      params={{ slug: faq.slug }}
                      className="text-[0.65rem] text-muted-foreground hover:text-charcoal uppercase tracking-wider font-semibold"
                    >
                      Standalone Page →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bottom WhatsApp Inquiry Banner */}
          <div className="mt-12 rounded-2xl border border-charcoal/20 bg-gradient-to-br from-[#FAF6F0] to-[#F5ECE1] p-8 text-center shadow-md">
            <Sparkles className="h-6 w-6 text-peach mx-auto mb-3" />
            <h3 className="font-display text-2xl font-bold text-charcoal">
              Have a Specific Bridal Question?
            </h3>
            <p className="mt-2 text-sm text-charcoal/80 max-w-lg mx-auto">
              Shreya Chaudhary personally consults with brides on WhatsApp regarding ceremony timings,
              lehenga color coordination, and custom package quotes.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton
                source="faqs_index_footer"
                variant="green"
                className="rounded-full px-8 py-4 text-xs font-bold tracking-wider shadow-md hover:shadow-xl"
              >
                Ask Shreya on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
