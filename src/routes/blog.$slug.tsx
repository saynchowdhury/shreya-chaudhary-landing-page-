import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { business } from "@/data/business";
import { getPost } from "@/data/posts";
import { getService } from "@/data/services";
import { breadcrumbLd, canonical, faqLd, ids, jsonLd, pageMeta } from "@/lib/seo";
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
    return {
      meta: pageMeta({
        title: `${post.title} | Shreya Chaudhary Makeup`,
        description: post.excerpt,
        path,
        type: "article",
        image: post.image,
      }),
      links: canonical(path),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@id": ids.person },
          publisher: { "@id": ids.business },
          mainEntityOfPage: path,
          ...(post.image ? { image: post.image } : {}),
        }),
        jsonLd(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
            { name: post.title, path },
          ]),
        ),
        ...(post.faqs?.length ? [jsonLd(faqLd(post.faqs))] : []),
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <article>
        <header className="border-b border-border bg-[oklch(0.955_0.018_74)] px-5 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14">
          <div className="mx-auto w-full max-w-3xl">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Journal", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <p className="eyebrow mt-10 text-blush">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </p>
            <h1 className="mt-4 font-display text-[2.4rem] leading-[1.05] text-charcoal md:text-[3.5rem]">
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {post.excerpt}
            </p>
            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              By {post.author}
            </p>

            {/* E-E-A-T Trust & Conversion Layer */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-border/60 pt-6">
              <div className="flex flex-wrap items-center gap-2">
                <a href={business.googleMyBusinessUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-background border border-border px-3 py-1.5 rounded-full text-[0.65rem] uppercase tracking-wider font-bold text-charcoal shadow-sm hover:border-charcoal transition-colors">
                  <span className="text-amber-500 text-sm leading-none">★</span> 5.0 Verified
                </a>
                <a href={business.wedmegoodUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-background border border-border px-3 py-1.5 rounded-full text-[0.65rem] uppercase tracking-wider font-bold text-charcoal shadow-sm hover:border-charcoal transition-colors">
                  WedMeGood
                </a>
              </div>
              <WhatsAppButton source={`blog_inline_${post.slug}`} variant="green" className="text-[0.65rem] font-bold uppercase tracking-wider px-5 py-2">
                Book Free Consultation
              </WhatsAppButton>
            </div>
          </div>
        </header>

        {post.image ? (
          <figure className="bg-background px-5 pt-14 md:px-10">
            <img
              src={post.image}
              alt={post.imageAlt ?? post.title}
              className="mx-auto w-full max-w-4xl object-cover"
              loading="eager"
              decoding="async"
            />
          </figure>
        ) : null}

        <Section>
          <div className="mx-auto max-w-3xl space-y-6">
            {post.body.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="pt-6 font-display text-2xl text-charcoal md:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base text-muted-foreground">
                        <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blush" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-base leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              );
            })}
          </div>

          {post.relatedServices?.length ? (
            <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10">
              <p className="eyebrow text-blush">Related services</p>
              <ul className="mt-5 space-y-3">
                {post.relatedServices.map((slug) => {
                  const service = getService(slug);
                  return (
                    <li key={slug} className="flex justify-between gap-4">
                      <Link
                        to="/services/$slug"
                        params={{ slug }}
                        className="text-charcoal underline decoration-blush decoration-1 underline-offset-4"
                      >
                        {service.name}
                      </Link>
                      <span className="text-muted-foreground">{service.priceLabel}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </Section>

        {post.faqs?.length ? (
          <Section tone="champagne" labelledBy="post-faq-heading">
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                id="post-faq-heading"
                eyebrow="Questions"
                title="Related questions"
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
