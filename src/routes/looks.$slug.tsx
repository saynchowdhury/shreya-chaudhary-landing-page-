import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Check, MapPin, Share2, Heart, Download } from "lucide-react";
import { getLookBySlug, getRelatedLooks, type PortfolioItem } from "@/data/portfolio";
import { business, locationLabel } from "@/data/business";
import { serviceByCategory } from "@/data/services";
import { breadcrumbLd, canonical, CANONICAL_DOMAIN, jsonLd, pageMeta } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/site/Section";
import { FloatingLookFunnel } from "@/components/site/FloatingLookFunnel";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/looks/$slug")({
  loader: ({ params }) => {
    const look = getLookBySlug(params.slug);
    if (!look) {
      throw notFound();
    }
    return { look };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.look) return {};
    const { look } = loaderData;
    const title = `${look.title} | Bridal Makeup Meerut | Shreya Chaudhary`;
    const description = `${look.alt}. Luxury real bride artistry by Shreya Chaudhary in ${look.meta?.location ?? locationLabel}. 100% authentic vanity kit, strictly 1 bride per slot.`;
    const path = `/looks/${look.slug}`;
    const imageUrl = `${CANONICAL_DOMAIN}${look.src}`;

    const crumbs = [
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/portfolio" },
      { name: look.title, path },
    ];

    const imageObjectLd = {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      contentUrl: imageUrl,
      url: `${CANONICAL_DOMAIN}${path}`,
      name: look.title,
      caption: look.alt,
      description,
      creator: {
        "@type": "Person",
        name: business.artist,
        jobTitle: business.profession,
      },
      creditText: business.name,
      copyrightNotice: `© ${new Date().getFullYear()} ${business.name}`,
      license: `${CANONICAL_DOMAIN}/privacy-policy`,
      acquireLicensePage: `${CANONICAL_DOMAIN}/contact`,
    };

    return {
      meta: [
        ...pageMeta({
          title,
          description,
          path,
          image: imageUrl,
        }),
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      ],
      links: canonical(path),
      scripts: [
        jsonLd(breadcrumbLd(crumbs)),
        jsonLd(imageObjectLd),
      ],
    };
  },
  component: LookShowcasePage,
});

function LookShowcasePage() {
  const { look } = Route.useLoaderData();
  const service = serviceByCategory(look.category);
  const relatedLooks = getRelatedLooks(look.slug, look.category, 3);

  const whatsappMessage = `Hi Shreya, I found your "${look.title}" look on Google and I'm interested in booking this style for my wedding. My date is [Date]. Are you available?`;
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <main className="min-h-screen bg-background text-foreground pb-20">
        {/* Navigation Bar */}
        <div className="border-b border-charcoal/10 bg-ivory/80 backdrop-blur-md py-4 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-charcoal/80 hover:text-charcoal transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Lookbook</span>
            </Link>

            <span className="text-[0.68rem] uppercase tracking-widest font-semibold text-blush">
              {look.category} Artistry Showcase
            </span>
          </div>
        </div>

        {/* Hero Presentation */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            {/* Left: High-Resolution Photo Display */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl border border-charcoal/15 bg-card shadow-2xl">
                <img
                  src={look.src}
                  alt={look.alt}
                  width={look.width}
                  height={look.height}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto object-cover max-h-[80vh] rounded-2xl"
                />

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-charcoal/90 backdrop-blur-md px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-ivory border border-ivory/20 shadow-md">
                    {look.category}
                  </span>
                  <span className="rounded-full bg-peach text-charcoal px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider shadow-md">
                    5.0★ Google Verified
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <a
                    href={look.src}
                    download={`${look.slug}.jpg`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-charcoal/85 backdrop-blur-md px-3 py-1.5 text-xs text-ivory border border-ivory/20 hover:bg-charcoal transition-colors shadow-md"
                    title="Save Look Reference"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span className="text-[0.65rem] font-medium">Save Look</span>
                  </a>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center italic">
                {look.alt}
              </p>
            </div>

            {/* Right: Detailed Look Specifications & Booking Funnel */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blush uppercase tracking-widest">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{look.technique ?? "Signature HD Artistry"}</span>
                </div>
                <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  {look.title}
                </h1>
                <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">
                  Every element of this look was customized exclusively for the bride's facial structure, lehenga color palette, and venue lighting. Created by principal artist {business.artist} with 100% genuine luxury cosmetics.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-charcoal/70">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-blush" />
                    <span>Location: {look.meta?.location ?? "Meerut & Delhi NCR"}</span>
                  </span>
                  <span>·</span>
                  <span>Event: {look.meta?.event ?? "Wedding Day"}</span>
                  <span>·</span>
                  <span>Longevity: 16-Hour Sweat-Proof</span>
                </div>
              </div>

              {/* Look Breakdown Card */}
              {look.lookDetails && (
                <div className="rounded-2xl border border-charcoal/15 bg-card p-6 shadow-sm space-y-4">
                  <h3 className="font-display text-lg font-bold text-charcoal border-b border-charcoal/10 pb-3">
                    Artistry Breakdown &amp; Specifications
                  </h3>

                  <dl className="grid gap-3.5 text-xs">
                    <div>
                      <dt className="font-bold uppercase tracking-wider text-[0.65rem] text-muted-foreground">Skin Complexion Finish</dt>
                      <dd className="mt-0.5 text-charcoal font-medium text-sm">{look.lookDetails.skinFinish}</dd>
                    </div>
                    <div>
                      <dt className="font-bold uppercase tracking-wider text-[0.65rem] text-muted-foreground">Eye Artistry &amp; Lashes</dt>
                      <dd className="mt-0.5 text-charcoal font-medium text-sm">{look.lookDetails.eyeStyle}</dd>
                    </div>
                    <div>
                      <dt className="font-bold uppercase tracking-wider text-[0.65rem] text-muted-foreground">Hairstyling &amp; Flora</dt>
                      <dd className="mt-0.5 text-charcoal font-medium text-sm">{look.lookDetails.hairStyling}</dd>
                    </div>
                    <div>
                      <dt className="font-bold uppercase tracking-wider text-[0.65rem] text-muted-foreground">Dupatta Draping &amp; Jewelry Pinning</dt>
                      <dd className="mt-0.5 text-charcoal font-medium text-sm">{look.lookDetails.draping}</dd>
                    </div>
                    <div>
                      <dt className="font-bold uppercase tracking-wider text-[0.65rem] text-muted-foreground">Recommended Occasion</dt>
                      <dd className="mt-0.5 text-charcoal font-medium text-sm">{look.lookDetails.occasion}</dd>
                    </div>
                  </dl>
                </div>
              )}

              {/* Service Package Card with Instant WhatsApp CTA */}
              <div className="rounded-2xl border border-peach/40 bg-gradient-to-br from-champagne/40 to-card p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[0.68rem] uppercase tracking-wider font-bold text-blush">
                      Corresponding Package
                    </span>
                    <h3 className="font-display text-xl font-bold text-charcoal">
                      {service.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-bold text-charcoal">{service.priceLabel}</p>
                    <p className="text-[0.62rem] uppercase tracking-wider text-muted-foreground font-semibold">Hair &amp; Draping Included</p>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-charcoal/85 pt-2 border-t border-charcoal/10">
                  {service.inclusions.slice(0, 4).map((inc) => (
                    <li key={inc} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>Strictly 1 bride per slot (zero conveyor-belt rush)</span>
                  </li>
                </ul>

                <div className="pt-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] hover:bg-emerald-500 py-4 px-6 text-xs font-bold uppercase tracking-wider text-charcoal shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Check Availability for This Look on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Looks from Same Category */}
        {relatedLooks.length > 0 && (
          <Section tone="champagne" labelledBy="related-looks-heading">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                id="related-looks-heading"
                eyebrow="More Transformations"
                title={`Explore Similar ${look.category.charAt(0).toUpperCase() + look.category.slice(1)} Looks`}
                intro="Every bride receives a look customized to her unique features, skin undertone, and bridal outfit."
              />

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedLooks.map((rel) => (
                  <Link
                    key={rel.slug}
                    to="/looks/$slug"
                    params={{ slug: rel.slug }}
                    className="group relative overflow-hidden rounded-2xl border border-charcoal/15 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <img
                      src={rel.src}
                      alt={rel.alt}
                      width={600}
                      height={800}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[0.62rem] uppercase tracking-widest font-bold text-peach">
                        {rel.category}
                      </span>
                      <h4 className="font-display text-lg font-bold text-ivory mt-0.5">
                        {rel.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* Final CTA */}
        <CTASection source="look_showcase_cta" />
      </main>

      {/* Floating Conversion Card Funnel */}
      <FloatingLookFunnel look={look} />
    </>
  );
}
