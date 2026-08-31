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
import { CTASection } from "@/components/site/CTASection";

const title = "Luxury Bridal Makeup Artist in Meerut & Delhi NCR | Shreya Chaudhary";
const description =
  "Exquisite bridal, engagement and party makeup in Meerut & Delhi NCR by Shreya Chaudhary. 5.0 Google Verified. Authentic luxury kits with NARS, Huda Beauty, MAC & Rare Beauty. Book Free Consultation on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/" }),
    links: canonical("/"),
    scripts: [jsonLd(faqLd(homeFaqs))],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. BRANDS WE USE LOGO TICKER */}
      <BrandMarquee />

      {/* 3. ABOUT SHREYA, EXPERIENCE & VISION */}
      <AboutVision />

      {/* 4. SERVICES WITH DIRECT PORTFOLIO NAVIGATION & BOOKING */}
      <Section tone="champagne" labelledBy="services-heading">
        <SectionHeading
          id="services-heading"
          eyebrow="Signature Services"
          title="Curated makeup for your most special occasions"
          intro="Transparent pricing, authentic premium products, and personalized on-location hairstyling. Click any service to view real client looks."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
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

      {/* 8. 1-CLICK WHATSAPP INQUIRER & FREQUENTLY ASKED QUESTIONS */}
      <Section labelledBy="booking-inquiry-heading">
        <div className="mx-auto max-w-4xl">
          <SmartBookingInquirer />
        </div>
      </Section>

      <Section tone="champagne" labelledBy="faq-heading">
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
