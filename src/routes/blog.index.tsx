import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/posts";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";

const title = "Bridal Makeup Journal | Shreya Chaudhary Makeup, Meerut";
const description =
  "Notes and guides on bridal, engagement and party makeup from Shreya Chaudhary Makeup in Meerut. New articles are published here as they are written.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Journal", path: "/blog" },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/blog" }),
    links: canonical("/blog"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="The journal"
        intro="Practical notes on planning makeup for weddings, engagements and celebrations in Meerut."
        crumbs={crumbs}
      />

      <Section labelledBy="posts-heading">
        <SectionHeading id="posts-heading" eyebrow="Articles" title="Latest writing" />
        <div className="mt-14">
          {posts.length === 0 ? (
            <div className="border border-dashed border-border bg-card px-6 py-16 text-center">
              <p className="eyebrow text-blush">Coming soon</p>
              <p className="mx-auto mt-4 max-w-xl font-display text-2xl text-charcoal">
                The first articles are being written and will appear here.
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Nothing is published until it is genuinely written for this site. In the
                meantime, the questions most brides ask are answered in full on the services
                and packages pages.
              </p>
              <Link
                to="/services"
                className="mt-7 inline-flex border border-charcoal/30 px-6 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
              >
                Explore services
              </Link>
            </div>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug} className="border border-border bg-card p-7">
                  <p className="eyebrow text-blush">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </p>
                  <h2 className="mt-4 font-display text-2xl text-charcoal">
                    <Link to="/blog/$slug" params={{ slug: post.slug }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="mt-6 inline-flex text-[0.68rem] uppercase tracking-[0.18em] text-charcoal underline decoration-blush decoration-1 underline-offset-4"
                  >
                    Read article
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <CTASection source="blog_final_cta" />
    </>
  );
}
