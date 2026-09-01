import { createFileRoute } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { experienceSteps, services } from "@/data/services";
import { breadcrumbLd, canonical, ids, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { SocialLinks } from "@/components/site/SocialLinks";

const title = "About Shreya Chaudhary | Makeup Artist in Meerut";
const description =
  "Shreya Chaudhary is a bridal, engagement and party makeup artist based in Meerut, Uttar Pradesh, working with premium products and on-location hairstyling.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/about", type: "profile" }),
    links: canonical("/about"),
    scripts: [
      jsonLd(breadcrumbLd(crumbs)),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: title,
        description,
        mainEntity: { "@id": ids.person },
      }),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`${business.profession} · ${locationLabel}`}
        title="About Shreya Chaudhary"
        intro={`${business.artist} is a makeup artist based in ${locationLabel}, working with brides, brides-to-be and guests across the city.`}
        crumbs={crumbs}
      />

      <Section labelledBy="story-heading">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] items-center">
          <div>
            <SectionHeading
              id="story-heading"
              eyebrow="The Artistry & Method"
              title="Your dream vision, brought into reality"
              intro="Before any product is opened, our conversation is about how you want to see yourself — the reference you saved, the finish you like in photographs, and the glow you want on your wedding day."
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-charcoal/85">
              <p>
                With <strong>6+ years of professional bridal artistry</strong>, Shreya Chaudhary has established a reputation for weightless, skin-like HD finishes that look just as luminous in person as they do in high-definition 4K wedding cinematography.
              </p>
              <p>
                We reject the one-size-fits-all salon assembly line. We custom-blend base shades to match your exact undertone using strictly authentic international cosmetics (NARS, Charlotte Tilbury, Huda Beauty, Laura Mercier, Rare Beauty, MAC, Milani, Forever 52, PAC, Recode).
              </p>
              <p>
                Every bridal booking includes on-location hair styling, jewelry setting, dupatta draping, and calm, unhurried attention in your bridal suite.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="/shreya-chaudhary-monogram.png"
                alt="Shreya Chaudhary Monogram"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="font-display text-xl font-semibold text-charcoal">{business.artist}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Master Bridal Artist &amp; Founder</p>
              </div>
            </div>
            <div className="mt-8">
              <SocialLinks source="about" />
            </div>
          </div>

          {/* Right Image Feature: Shreya with Bride (IMG_6562.PNG) & Stats */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-charcoal/15 bg-card shadow-xl">
              <img
                src="/IMG_6562.PNG"
                alt="Artist Shreya Chaudhary in blue dress standing side-by-side with her radiant smiling bride in pink lehenga"
                width={1000}
                height={1333}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>

            <aside className="rounded-lg border border-charcoal/15 bg-card p-6 shadow-xs">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-blush">
                At a glance
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <dt className="text-muted-foreground">Experience</dt>
                  <dd className="mt-0.5 font-display text-base text-charcoal font-semibold">6+ Years</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Google Rating</dt>
                  <dd className="mt-0.5 font-display text-base text-charcoal font-semibold">5.0 ★ Verified (100% 5-Star)</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="mt-0.5 font-medium text-charcoal">{locationLabel} &amp; Delhi NCR</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Bookings</dt>
                  <dd className="mt-0.5 font-medium text-charcoal">1-on-1 Personal MUA</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </Section>

      {/* Artistry In Action Section: IMG_7352.JPG.jpeg & IMG_0398.JPEG */}
      <Section tone="charcoal" labelledBy="action-heading">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-peach font-semibold">
              On-Location Excellence
            </p>
            <h2 id="action-heading" className="font-display text-3xl md:text-4xl text-ivory font-medium">
              Calm, unhurried suite sessions
            </h2>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              Your wedding morning should be peaceful and joyful. Shreya travels directly to your venue or suite with a complete professional setup, premium lighting, and luxury vanities — ensuring you step out looking breathtaking and feeling confident.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded border border-ivory/15 shadow-md">
              <img
                src="/IMG_7352.JPG.jpeg"
                alt="Shreya Chaudhary on-location bridal glam touchup session"
                width={800}
                height={1000}
                className="aspect-[3/4] w-full object-cover"
              />
              <p className="p-2 text-center text-[0.65rem] text-ivory/70 bg-charcoal">Suite Touch-Up</p>
            </div>
            <div className="overflow-hidden rounded border border-ivory/15 shadow-md">
              <img
                src="/IMG_0398.JPEG"
                alt="Shreya Chaudhary with real bride in royal gold lehenga"
                width={800}
                height={1000}
                className="aspect-[3/4] w-full object-cover"
              />
              <p className="p-2 text-center text-[0.65rem] text-ivory/70 bg-charcoal">Royal Bride Reveal</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="champagne" labelledBy="working-heading">
        <SectionHeading
          id="working-heading"
          eyebrow="Working together"
          title="What booking Shreya looks like"
        />
        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {experienceSteps.map((step, index) => (
            <li key={step.title} className="border-t border-charcoal/15 pt-6">
              <span className="font-display text-3xl text-blush">0{index + 1}</span>
              <h3 className="mt-4 font-display text-xl text-charcoal">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTASection source="about_final_cta" />
    </>
  );
}
