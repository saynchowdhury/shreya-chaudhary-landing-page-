import { createFileRoute, Link } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { portfolio, featuredHomePortfolio } from "@/data/portfolio";
import { canonical, faqLd, jsonLd, pageMeta } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/site/Section";
import { Hero } from "@/components/site/Hero";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { AboutVision } from "@/components/site/AboutVision";
import { ServiceCard } from "@/components/site/ServiceCard";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { TestimonialList } from "@/components/site/Testimonials";
import { SmartBookingInquirer } from "@/components/site/SmartBookingInquirer";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { AnswerBlock } from "@/components/site/AnswerBlock";
import { SmartAeoSnippet } from "@/components/site/SmartAeoSnippet";
import { MapPin, ArrowRight } from "lucide-react";
import { locationsList } from "@/data/locations";
import { posts } from "@/data/posts";
import { CTASection } from "@/components/site/CTASection";

const title = "Best Bridal Makeup Artist Meerut | Shreya Chaudhary";
const description =
  "Exquisite bridal, engagement and party makeup in Meerut & Delhi NCR by Shreya Chaudhary. Winter wedding season 2026 bookings open. Book Free Consultation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/" }),
    links: [
      ...canonical("/"),
      {
        rel: "preload",
        as: "image",
        href: "/IMG_0398-600.webp",
        type: "image/webp",
        media: "(max-width: 767px)",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        as: "image",
        href: "/IMG_0398.webp",
        type: "image/webp",
        media: "(min-width: 768px)",
        fetchPriority: "high",
      },
    ],
    scripts: [jsonLd(faqLd(homeFaqs))],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 1.5 WEDDING SEASON 2026 BANNER */}
      <section className="bg-charcoal text-ivory py-6 px-6 border-y border-blush/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 text-center md:text-left">
          <div className="flex-1 md:border-r md:border-ivory/20 md:pr-8">
            <p className="font-bold text-[0.75rem] uppercase tracking-widest text-peach mb-1.5">
              November 2026 – February 2027
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-ivory leading-tight">
              Winter Wedding Season Open
            </p>
          </div>
          <div className="flex-1 max-w-lg text-sm md:text-base text-ivory/90 font-medium px-2 md:px-0 leading-relaxed">
            Shubh Muhurat dates are booking fast across Meerut &amp; Delhi NCR. Secure your venue
            date today.
          </div>
          <div className="flex-shrink-0 mt-3 md:mt-0">
            <a
              href={`https://wa.me/${business.whatsapp}?text=Hi Shreya, I'd like to check availability for my wedding date.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-peach text-charcoal px-8 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.15em] transition-all hover:bg-white hover:scale-105 shadow-xl shadow-peach/10"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* 2. BRANDS WE USE LOGO TICKER */}
      <BrandMarquee />

      {/* 2.5 EXTRACTABLE CANONICAL DEFINITION & REGIONAL SERVICE SNIPPET (AEO / Snippet / Multi-Location Optimization) */}
      <SmartAeoSnippet />

      {/* 3. ABOUT SHREYA, EXPERIENCE & VISION */}
      <AboutVision />

      {/* 4. SERVICES WITH DIRECT PORTFOLIO NAVIGATION & BOOKING */}
      <Section tone="champagne" labelledBy="services-heading">
        <SectionHeading
          id="services-heading"
          eyebrow="Signature Services"
          title="Curated makeup for your most special occasions"
          intro="Transparent pricing, authentic premium products, and personalized on-location makeup. Click any service to view real client looks."
        />
        <ul className="mt-12 space-y-8 md:space-y-10">
          {services.map((service, index) => (
            <li key={service.slug}>
              <ServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. WHY CHOOSE US SECTION */}
      <WhyChooseUs />

      {/* 6. PORTFOLIO LOOKBOOK */}
      <Section labelledBy="portfolio-heading">
        <SectionHeading
          id="portfolio-heading"
          eyebrow="Recent Transformations"
          title="Bridal & Occasion Artistry"
          intro="Explore genuine client transformations across Bridal, Engagement, and Party services. Click any photo to view full details or reserve your date."
        />
        <div className="mt-12">
          <PortfolioGrid items={featuredHomePortfolio} showFilters={true} />
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex border border-charcoal/30 px-8 py-4 text-[0.7rem] uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory font-medium"
          >
            Explore Complete Lookbook ({portfolio.length}+ Verified Looks)
          </Link>
        </div>
      </Section>

      {/* 7. CLIENT TESTIMONIALS & GOOGLE VERIFIED REVIEWS */}
      <Section tone="champagne" labelledBy="testimonials-heading">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Client Love"
          title="Real reviews from real brides"
          intro="Verified client words from our Google Business profile and bridal consultations in Meerut & Delhi NCR."
        />
        <div className="mt-12">
          <TestimonialList />
        </div>
      </Section>

      {/* 7.5 REGIONAL ON-LOCATION DESTINATIONS (INTERNAL LINKING CORRIDOR) */}
      <Section tone="ivory" labelledBy="locations-heading">
        <SectionHeading
          id="locations-heading"
          eyebrow="Regional Destinations"
          title="On-Location Bridal Artistry Across Western UP & Delhi NCR"
          intro="Shreya Chaudhary travels directly to your bridal suite or wedding banquet with a complete luxury vanity, professional lighting setup, and styling team."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locationsList.map((loc) => (
            <a
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-charcoal/10 bg-ivory p-6 transition-all duration-300 hover:border-charcoal/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin className="h-4 w-4 text-peach" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-charcoal/60">
                    {loc.district}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-peach transition-colors">
                  Bridal Makeup in {loc.name}
                </h3>
                <p className="mt-2 text-xs text-charcoal/70 leading-relaxed">
                  {loc.distanceNote}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-wider text-charcoal group-hover:text-peach transition-colors">
                <span>Explore {loc.name} Packages</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/locations"
            className="inline-flex border border-charcoal/30 px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory font-medium"
          >
            View All Regional Service Corridors
          </Link>
        </div>
      </Section>

      {/* 8. 1-CLICK WHATSAPP INQUIRER & FREQUENTLY ASKED QUESTIONS */}
      <Section labelledBy="booking-inquiry-heading">
        <div className="mx-auto max-w-4xl">
          <SmartBookingInquirer />
        </div>
      </Section>

      {/* 8.5 BRIDAL BEAUTY JOURNAL & EXPERT GUIDES (INTERNAL LINKING PILLAR) */}
      <Section tone="champagne" labelledBy="journal-heading">
        <SectionHeading
          id="journal-heading"
          eyebrow="Bridal Beauty Journal"
          title="Expert Advice for the Modern Winter Bride"
          intro="Deep-dive beauty timelines, pricing transparency, and honest advice written with real bridal experience."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.slice(0, 4).map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
            >
              {post.image && (
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal/5">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {post.readingTimeMinutes && (
                    <span className="absolute bottom-3 left-3 rounded-full bg-charcoal/80 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-wider text-ivory backdrop-blur-xs">
                      {post.readingTimeMinutes} Min Read
                    </span>
                  )}
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <time dateTime={post.date} className="text-[0.68rem] font-bold uppercase tracking-widest text-peach">
                    {post.date}
                  </time>
                  <h3 className="font-display mt-2 text-lg font-bold leading-snug text-charcoal group-hover:text-peach transition-colors">
                    <Link to="/blog/$slug" params={{ slug: post.slug }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-charcoal/70 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal/10">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-charcoal group-hover:text-peach transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex rounded-full bg-charcoal px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-ivory transition-all hover:bg-peach hover:text-charcoal hover:shadow-lg"
          >
            Explore All Bridal Beauty Guides ({posts.length} Articles)
          </Link>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="faq-heading">
        <SectionHeading
          id="faq-heading"
          eyebrow="Frequently Asked Questions"
          title="Everything you need to know before booking"
        />
        <div className="mt-10 max-w-3xl mx-auto">
          <FaqAccordion faqs={homeFaqs} />
        </div>
      </Section>

      {/* 9. FINAL CALL TO ACTION */}
      <CTASection source="home_final_cta" />
    </>
  );
}
