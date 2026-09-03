import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Search, ArrowRight, Sparkles } from "lucide-react";
import { glossaryTerms, type GlossaryCategory } from "@/data/glossary";
import { breadcrumbLd, canonical, CANONICAL_DOMAIN, jsonLd, pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Section } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const title = "Bridal Makeup Glossary | Shreya Chaudhary Meerut";
const description =
  "Complete luxury bridal makeup glossary: HD makeup, glass skin, cut-crease, undertone matching, 4K flashback prevention, and dupatta draping defined.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Glossary", path: "/glossary" },
];

export const Route = createFileRoute("/glossary/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/glossary" }),
    links: canonical("/glossary"),
    scripts: [
      jsonLd(breadcrumbLd(crumbs)),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "Shreya Chaudhary Luxury Bridal Makeup Glossary",
        description:
          "Authoritative guide to Indian bridal makeup terminology, advanced techniques, and cosmetic formulations.",
        url: `${CANONICAL_DOMAIN}/glossary`,
        hasDefinedTerm: glossaryTerms.map((term) => ({
          "@type": "DefinedTerm",
          name: term.term,
          description: term.shortDefinition,
          url: `${CANONICAL_DOMAIN}/glossary/${term.slug}`,
          inDefinedTermSet: `${CANONICAL_DOMAIN}/glossary`,
        })),
      }),
    ],
  }),
  component: GlossaryIndex,
});

const categories: { id: "all" | GlossaryCategory; label: string }[] = [
  { id: "all", label: "All Terms" },
  { id: "complexion", label: "Complexion & Base" },
  { id: "eye-artistry", label: "Eye & Lip Artistry" },
  { id: "skin-prep", label: "Skincare & Prep" },
  { id: "styling-wear", label: "Styling & Wear" },
];

function GlossaryIndex() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | GlossaryCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Editorial Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF7] to-background px-5 pt-12 pb-14 sm:px-6 md:px-10 lg:pt-16 lg:pb-20 border-b border-charcoal/10">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-peach/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blush/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={crumbs} />
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-peach/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-charcoal border border-peach/30">
            <BookOpen className="h-3.5 w-3.5 text-charcoal" />
            Bridal Beauty Terminology
          </span>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl">
            Luxury Bridal Makeup Glossary
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-charcoal/80 sm:text-base md:text-lg max-w-2xl mx-auto">
            The definitive dictionary of bridal beauty techniques, dermal preparations, cosmetic
            formulations, and styling standards for Indian brides.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terminology (e.g. glass skin, cut-crease, HD)..."
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

      {/* Terms Directory Grid */}
      <Section tone="ivory" className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-2xl border border-charcoal/10 p-8">
              <p className="font-display text-xl text-charcoal font-semibold">No terms found</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different keyword or reset filters to view all definitions.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 inline-flex items-center rounded-full bg-charcoal text-ivory px-5 py-2 text-xs uppercase tracking-wider font-semibold"
              >
                View All Terms
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {filteredTerms.map((term) => (
                <article
                  key={term.slug}
                  className="group rounded-2xl border border-charcoal/15 bg-card p-6 shadow-2xs transition-all duration-300 hover:border-charcoal/40 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="inline-flex items-center rounded-full bg-peach/15 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-charcoal">
                        {term.categoryLabel}
                      </span>
                      {term.phonetic && (
                        <span className="text-xs text-muted-foreground font-mono">
                          {term.phonetic}
                        </span>
                      )}
                    </div>

                    <h2 className="mt-3 font-display text-xl font-bold text-charcoal group-hover:text-peach transition-colors">
                      <Link
                        to="/glossary/$slug"
                        params={{ slug: term.slug }}
                        className="hover:underline focus:outline-hidden"
                      >
                        {term.term}
                      </Link>
                    </h2>

                    <p className="mt-2.5 text-sm leading-relaxed text-charcoal/80">
                      {term.shortDefinition}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                    <Link
                      to="/glossary/$slug"
                      params={{ slug: term.slug }}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-charcoal group-hover:text-peach group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Explore Definition &amp; Bridal Guide</span>
                      <ArrowRight className="h-3.5 w-3.5 text-peach" />
                    </Link>

                    <Link
                      to="/glossary/$slug"
                      params={{ slug: term.slug }}
                      className="text-[0.65rem] text-muted-foreground hover:text-charcoal uppercase tracking-wider font-semibold"
                    >
                      Full Page →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Consultation Banner */}
          <div className="mt-14 rounded-2xl border border-charcoal/20 bg-gradient-to-br from-[#FAF6F0] to-[#F5ECE1] p-8 text-center shadow-md">
            <Sparkles className="h-6 w-6 text-peach mx-auto mb-3" />
            <h3 className="font-display text-2xl font-bold text-charcoal">
              Want a Customized Technique Consultation?
            </h3>
            <p className="mt-2 text-sm text-charcoal/80 max-w-lg mx-auto">
              Not sure whether soft glam, glass skin, or a halo eye suits your wedding lehenga? Chat
              directly with Shreya Chaudhary on WhatsApp.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton
                source="glossary_index_footer"
                variant="green"
                className="rounded-full px-8 py-4 text-xs font-bold tracking-wider shadow-md hover:shadow-xl"
              >
                Ask on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
