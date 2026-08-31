import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { TestimonialList } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";

const title = "Client Testimonials | Shreya Chaudhary Makeup, Meerut";
const description =
  "Words from clients of Shreya Chaudhary Makeup in Meerut. Only real, client-written testimonials are published here.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Testimonials", path: "/testimonials" },
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/testimonials" }),
    links: canonical("/testimonials"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="In their own words"
        intro="Only testimonials genuinely shared by clients appear here — nothing is written on a client's behalf."
        crumbs={crumbs}
      />

      <Section labelledBy="testimonial-list-heading">
        <SectionHeading
          id="testimonial-list-heading"
          eyebrow="Client words"
          title="What clients say"
        />
        <div className="mt-14">
          <TestimonialList />
        </div>
      </Section>

      <CTASection source="testimonials_final_cta" />
    </>
  );
}
