import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { business, locationLabel } from "@/data/business";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";

const title = "Regional Service Areas | Bridal Makeup in Meerut & Delhi NCR";
const description =
  "Shreya Chaudhary travels on-location across Meerut, Noida, Greater Noida, Ghaziabad, Muzaffarnagar, Shamli, and Delhi NCR for luxury bridal and occasion makeup.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
];

import { locationsList } from "@/data/locations";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/locations" }),
    links: canonical("/locations"),
    scripts: [
      jsonLd(breadcrumbLd(crumbs)),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url: "https://shreyachaudharymakeup.com/locations",
        hasPart: locationsList.map((loc) => ({
          "@type": "WebPage",
          name: `Bridal Makeup in ${loc.name}`,
          url: `https://shreyachaudharymakeup.com/locations/${loc.slug}`,
        })),
      }),
    ],
  }),
  component: LocationsIndexPage,
});

function LocationsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage & Venues"
        title="Areas Served Across Meerut & Delhi NCR"
        intro={`From her flagship base in ${locationLabel}, Shreya Chaudhary travels directly to wedding venues, luxury resorts, and hotel suites across Uttar Pradesh and Delhi NCR. Every booking receives dedicated 1-on-1 on-location artistry.`}
        crumbs={crumbs}
      />

      <Section labelledBy="locations-grid-heading">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            id="locations-grid-heading"
            eyebrow="Regional Destinations"
            title="On-Location Bridal Artistry Wherever You Celebrate"
            intro="Click any city to view local booking details, venue travel policies, and authentic client testimonials."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locationsList.map((loc) => (
              <div
                key={loc.slug}
                className="group flex flex-col justify-between rounded-2xl border border-charcoal/15 bg-card p-6 shadow-xs transition-all hover:border-charcoal/40 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-charcoal group-hover:text-blush transition-colors flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-blush shrink-0" />
                        {loc.name}
                      </h3>
                      <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-charcoal/70 font-semibold">
                        {loc.district}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-semibold text-peach bg-charcoal/90 px-3 py-1.5 rounded-md inline-block">
                    {loc.distanceNote}
                  </p>

                  <ul className="mt-4 space-y-2.5 text-xs text-charcoal/80">
                    {loc.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blush shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal/10">
                  <Link
                    to={`/locations/${loc.slug}` as string}
                    className="inline-flex w-full items-center justify-between rounded-full bg-charcoal/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal transition-all group-hover:bg-charcoal group-hover:text-ivory"
                  >
                    <span>View {loc.name} Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Destination Weddings Callout */}
          <div className="mt-14 rounded-2xl border border-peach/30 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal p-8 text-ivory shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-peach">
                  <Sparkles className="h-4 w-4" /> Destination Weddings
                </span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">
                  Planning a Wedding Outside Delhi NCR?
                </h3>
                <p className="mt-2 text-sm text-ivory/80 leading-relaxed">
                  Shreya Chaudhary is available for pan-India destination weddings (Jaipur, Udaipur,
                  Jim Corbett, Goa, Mussoorie). Travel and accommodation arrangements are
                  coordinated transparently.
                </p>
              </div>
              <a
                href={`https://wa.me/${business.whatsapp}?text=Hi%20Shreya%2C%20I%20would%20like%20to%20inquire%20about%20a%20destination%20wedding%20makeup%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-peach px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-charcoal transition-all hover:bg-white hover:scale-105 shadow-lg"
              >
                Inquire for Destination
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CTASection source="locations_hub_cta" />
    </>
  );
}
