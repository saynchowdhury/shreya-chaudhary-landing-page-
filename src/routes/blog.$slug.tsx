import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Sparkles, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { getPost } from "@/data/posts";
import { getService } from "@/data/services";
import { getLookBySlug } from "@/data/portfolio";
import { breadcrumbLd, canonical, CANONICAL_DOMAIN, ids, jsonLd, pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Section, SectionHeading } from "@/components/site/Section";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CTASection } from "@/components/site/CTASection";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const path = `/blog/${params.slug}`;
    const imageUrl = post.image ? `${CANONICAL_DOMAIN}${post.image}` : undefined;

    const title =
      post.seoTitle ||
      (post.title.length <= 42 ? `${post.title} | Shreya Chaudhary` : post.title);

    return {
      meta: pageMeta({
        title,
        description: post.excerpt,
        path,
        type: "article",
        image: imageUrl,
      }),
      links: canonical(path),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.dateModified || post.date,
          author: {
            "@type": "Person",
            name: post.author,
            jobTitle: post.authorRole || "Principal Luxury Bridal Makeup Artist",
            url: `${CANONICAL_DOMAIN}/about`,
          },
          publisher: {
            "@type": "Organization",
            name: business.name,
            url: CANONICAL_DOMAIN,
            logo: `${CANONICAL_DOMAIN}/shreya-chaudhary-logo.png`,
          },
          mainEntityOfPage: `${CANONICAL_DOMAIN}${path}`,
          ...(imageUrl ? { image: imageUrl } : {}),
        }),
        jsonLd(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
            { name: post.title, path },
          ]),
        ),
        ...(post.faqs?.length
          ? [
              jsonLd({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: post.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer,
                  },
                })),
              }),
            ]
          : []),
        ...(post.slug === "how-to-choose-best-bridal-makeup-artist-meerut"
          ? [
              jsonLd({
                "@context": "https://schema.org",
                "@type": "HowTo",
                name: post.title,
                description: post.excerpt,
                image: imageUrl,
                totalTime: "PT5M",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "1. Demand Transparency in Product Vanity",
                    text: "Verify authentic international cosmetics like NARS, Charlotte Tilbury, and MAC, and beware of unbranded parlour dilutions.",
                    url: `${CANONICAL_DOMAIN}${path}#step-1`,
                  },
                  {
                    "@type": "HowToStep",
                    name: "2. Beware the Conveyor-Belt Salon Trap",
                    text: "Ensure attentive personal focus with the lead artist doing the complete makeup from skin prep to final dupatta pin in Meerut & Delhi NCR.",
                    url: `${CANONICAL_DOMAIN}${path}#step-2`,
                  },
                  {
                    "@type": "HowToStep",
                    name: "3. Insist on On-Location Suite Artistry",
                    text: "Ensure the artist travels directly to your venue or hotel suite with zero travel surcharge, eliminating wedding-day traffic stress.",
                    url: `${CANONICAL_DOMAIN}${path}#step-3`,
                  },
                  {
                    "@type": "HowToStep",
                    name: "4. Ask for Unedited 4K Phone Videos",
                    text: "Review raw 4K videos in natural daylight rather than filtered Instagram portraits with artificial blur.",
                    url: `${CANONICAL_DOMAIN}${path}#step-4`,
                  },
                  {
                    "@type": "HowToStep",
                    name: "5. Clarify All-Inclusive Package Terms",
                    text: "Confirm that hair styling, floral setting, draping, lashes, and lenses are included with zero surprise day-of charges.",
                    url: `${CANONICAL_DOMAIN}${path}#step-5`,
                  },
                  {
                    "@type": "HowToStep",
                    name: "6. Check Undertone Customization",
                    text: "Ensure the artist custom-mixes pigments to match your natural undertone rather than applying an artificial fair whitewash.",
                    url: `${CANONICAL_DOMAIN}${path}#step-6`,
                  },
                  {
                    "@type": "HowToStep",
                    name: "7. Lock Your Auspicious Date Early",
                    text: "Reserve your date 3 to 6 months in advance with an advance deposit to secure your wedding day artist in Meerut.",
                    url: `${CANONICAL_DOMAIN}${path}#step-7`,
                  },
                ],
              }),
            ]
          : []),
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <article className="bg-background text-foreground">
        <header className="border-b border-border bg-[oklch(0.955_0.018_74)] px-5 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14">
          <div className="mx-auto w-full max-w-3xl">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Journal", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <time
                dateTime={post.date}
                className="font-semibold text-blush uppercase tracking-wider text-[0.68rem]"
              >
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              {post.readingTimeMinutes && (
                <>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTimeMinutes} min read</span>
                  </span>
                </>
              )}
              {post.dateModified && post.dateModified !== post.date && (
                <>
                  <span>·</span>
                  <span className="text-[0.65rem] italic">Updated: {post.dateModified}</span>
                </>
              )}
            </div>

            <h1 className="mt-4 font-display text-[2.2rem] leading-[1.08] text-charcoal md:text-[3.2rem]">
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {post.excerpt}
            </p>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-charcoal/80">
              By {post.author} {post.authorRole ? `— ${post.authorRole}` : ""}
            </p>

            {/* E-E-A-T Trust & Conversion Layer */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-border/60 pt-6">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={business.googleMyBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-background border border-border px-3 py-1.5 rounded-full text-[0.65rem] uppercase tracking-wider font-bold text-charcoal shadow-sm hover:border-charcoal transition-colors"
                >
                  <span className="text-amber-500 text-sm leading-none">★</span> 5.0 Google Verified
                </a>
                <span className="bg-background border border-border px-3 py-1.5 rounded-full text-[0.65rem] uppercase tracking-wider font-semibold text-charcoal/80 shadow-sm">
                  1-on-1 Vanity Suite
                </span>
              </div>
              <WhatsAppButton
                source={`blog_inline_${post.slug}`}
                variant="green"
                className="text-[0.65rem] font-bold uppercase tracking-wider px-5 py-2 shadow-sm"
              >
                Check Date Availability on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </header>

        {post.image ? (
          <figure className="bg-background px-5 pt-10 md:px-10">
            <img
              src={post.image}
              alt={post.imageAlt ?? post.title}
              className="mx-auto w-full max-w-4xl rounded-2xl object-cover shadow-md border border-charcoal/10 max-h-[550px]"
              loading="eager"
              decoding="async"
            />
            {post.imageAlt && (
              <figcaption className="mt-3 text-center text-xs text-muted-foreground italic">
                {post.imageAlt}
              </figcaption>
            )}
          </figure>
        ) : null}

        <Section>
          <div className="mx-auto max-w-3xl space-y-6">
            {/* Google AI Overview & Snippet-Ready Key Takeaways */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="rounded-2xl border border-peach/50 bg-gradient-to-br from-champagne/30 to-card p-6 shadow-sm mb-10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blush">
                  <Sparkles className="h-4 w-4" />
                  <span>Key Takeaways for Brides</span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/90 leading-snug"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Content Blocks */}
            {post.body.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="pt-6 font-display text-2xl text-charcoal md:text-3xl leading-snug"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "subheading") {
                return (
                  <h3 key={index} className="pt-4 font-display text-xl text-charcoal/90">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "callout") {
                return (
                  <div
                    key={index}
                    className="my-6 rounded-xl border border-charcoal/20 bg-card p-5 shadow-xs"
                  >
                    <h4 className="font-display text-base font-bold text-charcoal">
                      {block.title}
                    </h4>
                    <p className="mt-1 text-sm text-charcoal/80 leading-relaxed">{block.text}</p>
                  </div>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base text-muted-foreground leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-base leading-relaxed text-charcoal/85">
                  {block.text}
                </p>
              );
            })}

            {/* In-Article WhatsApp Card */}
            <div className="my-12 rounded-2xl border border-charcoal/15 bg-ivory/80 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-lg font-bold text-charcoal">
                  Planning Your Wedding for 2026–2027?
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Peak dates book months in advance. Inquire directly with Shreya for on-location
                  suite artistry.
                </p>
              </div>
              <a
                href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hi Shreya, I read your article "${post.title}" and would like to check your availability for my wedding date on [Date].`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-emerald-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-charcoal shadow-md shrink-0 transition-transform active:scale-95"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Featured Related Looks from Portfolio */}
          {post.relatedLooks && post.relatedLooks.length > 0 && (
            <div className="mx-auto mt-14 max-w-3xl border-t border-border pt-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="eyebrow text-blush">Real Client Portfolio</p>
                  <h3 className="font-display text-xl font-bold text-charcoal mt-1">
                    Featured Looks from this Guide
                  </h3>
                </div>
                <Link
                  to="/portfolio"
                  className="text-xs font-bold text-charcoal underline underline-offset-4 hover:text-blush inline-flex items-center gap-1"
                >
                  <span>All 20 Looks</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {post.relatedLooks.map((slug) => {
                  const look = getLookBySlug(slug);
                  if (!look) return null;
                  return (
                    <Link
                      key={look.slug}
                      to="/looks/$slug"
                      params={{ slug: look.slug }}
                      className="group flex items-center gap-3.5 rounded-2xl border border-charcoal/15 bg-card p-3 shadow-xs hover:shadow-md transition-all"
                    >
                      <img
                        src={look.src}
                        alt={look.alt}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-xl object-cover shrink-0 border border-charcoal/10"
                      />
                      <div className="min-w-0">
                        <span className="text-[0.62rem] uppercase tracking-wider font-bold text-peach">
                          {look.category}
                        </span>
                        <h4 className="font-display text-sm font-bold text-charcoal truncate group-hover:text-blush transition-colors">
                          {look.title}
                        </h4>
                        <p className="text-[0.65rem] text-muted-foreground truncate mt-0.5">
                          {look.technique ?? "Signature HD Complexion"}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related Services */}
          {post.relatedServices?.length ? (
            <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-8">
              <p className="eyebrow text-blush">Related Services</p>
              <ul className="mt-4 space-y-2.5">
                {post.relatedServices.map((slug) => {
                  const service = getService(slug);
                  return (
                    <li key={slug} className="flex justify-between items-center text-sm">
                      <Link
                        to="/services/$slug"
                        params={{ slug }}
                        className="text-charcoal underline decoration-blush decoration-1 underline-offset-4 font-medium hover:text-blush transition-colors"
                      >
                        {service.name}
                      </Link>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {service.priceLabel}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </Section>

        {/* FAQ Accordion Section */}
        {post.faqs?.length ? (
          <Section tone="champagne" labelledBy="post-faq-heading">
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                id="post-faq-heading"
                eyebrow="Bridal FAQ"
                title="Frequently Asked Questions"
                intro="Everything you need to know before locking in your bridal reservation."
              />
              <div className="mt-8">
                <FaqAccordion faqs={post.faqs} />
              </div>
            </div>
          </Section>
        ) : null}
      </article>

      <CTASection
        source={`blog_post_cta:${post.slug}`}
        intro={`Message ${business.artist} on WhatsApp with your occasion and date.`}
      />
    </>
  );
}
