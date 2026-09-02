import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, XCircle } from "lucide-react";
import { business } from "@/data/business";
import { services, whyShreya } from "@/data/services";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";

const title = "Why Choose Shreya Chaudhary Makeup | Meerut Makeup Artist";
const description =
  "Personalised looks, premium products, on-location hairstyling and travel availability — the reasons clients in Meerut book Shreya Chaudhary Makeup.";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Why Shreya", path: "/why-shreya" },
];

export const Route = createFileRoute("/why-shreya")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/why-shreya" }),
    links: canonical("/why-shreya"),
    scripts: [jsonLd(breadcrumbLd(crumbs))],
  }),
  component: WhyShreyaPage,
});

function WhyShreyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Shreya"
        title="Why clients book Shreya"
        intro={`"${business.promise}" is not a tagline on a wall — it is how each booking is run, from the first WhatsApp message to the last touch-up.`}
        crumbs={crumbs}
      />

      <Section labelledBy="reasons-heading">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <SectionHeading
              id="reasons-heading"
              eyebrow="The Difference"
              title="Five things that shape every booking"
            />
            <ul className="mt-10 space-y-8">
              {whyShreya.map((item, index) => (
                <li key={item.title} className="border-t border-charcoal/10 pt-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl font-bold text-blush">0{index + 1}</span>
                    <h3 className="font-display text-xl font-medium text-charcoal">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80 pl-10">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-charcoal/15 bg-card shadow-lg">
              <img
                src="/IMG_6562.PNG"
                alt="Shreya Chaudhary with smiling bride in pink lehenga"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="p-4 bg-card border-t border-charcoal/10">
                <p className="font-display text-sm font-semibold text-charcoal">
                  Real Bride &amp; Shreya
                </p>
                <p className="text-xs text-muted-foreground">
                  Flawless HD glow &amp; personalized suite attention
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="charcoal" labelledBy="clarity-heading">
        <SectionHeading
          id="clarity-heading"
          eyebrow="No surprises"
          title="Clear prices, stated up front"
          intro="Every service is published with its price and its inclusions, so you know what you are booking before you message."
          tone="light"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.slug}
              className="flex flex-col border border-ivory/20 bg-charcoal/60 p-7 rounded"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-peach">
                {service.shortName}
              </p>
              <p className="mt-4 font-display text-[2.5rem] leading-none text-ivory font-medium">
                {service.priceLabel}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-ivory/80">
                {service.inclusions.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-xs text-ivory/60">{business.pricingNote}</p>
      </Section>

      {/* 3. STRUCTURED COMPARISON MATRIX (Extractable by AI & High-Converting for Brides) */}
      <Section labelledBy="comparison-heading">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            id="comparison-heading"
            eyebrow="The Standard Compared"
            title="Shreya Chaudhary 1-on-1 vs High-Street Commercial Salons"
            intro="Why discerning brides across Meerut and Delhi NCR choose private on-location artistry over crowded conveyor-belt salon appointments."
          />

          <div className="mt-12 overflow-x-auto rounded-2xl border border-charcoal/15 bg-card shadow-lg">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-charcoal/15 bg-charcoal/5">
                  <th className="p-5 font-bold uppercase tracking-wider text-xs text-charcoal/70">
                    Artistry Feature
                  </th>
                  <th className="p-5 font-bold text-charcoal bg-peach/15 border-x border-charcoal/10 text-base">
                    Shreya Chaudhary Makeup
                  </th>
                  <th className="p-5 font-bold text-charcoal/60 text-xs uppercase tracking-wider">
                    Commercial High-Street Salons
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10 text-charcoal/90">
                <tr className="hover:bg-charcoal/[0.02] transition-colors">
                  <td className="p-5 font-bold text-charcoal">Bride Attention &amp; Focus</td>
                  <td className="p-5 bg-peach/10 border-x border-charcoal/10 font-semibold text-charcoal">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Strictly 1 Bride per slot:</strong> 100% undivided focus from skin
                        prep to final dupatta draping.
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-charcoal/70">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        8 to 12 brides booked simultaneously in rushed conveyor-belt slots.
                      </span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-charcoal/[0.02] transition-colors">
                  <td className="p-5 font-bold text-charcoal">Vanity Kit Authenticity</td>
                  <td className="p-5 bg-peach/10 border-x border-charcoal/10 font-semibold text-charcoal">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>100% Genuine International Luxury:</strong> NARS Radiant, Charlotte
                        Tilbury, MAC, Huda Beauty.
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-charcoal/70">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        Often mixed with bulk commercial or unbranded drugstore duplicates.
                      </span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-charcoal/[0.02] transition-colors">
                  <td className="p-5 font-bold text-charcoal">Getting Ready Location</td>
                  <td className="p-5 bg-peach/10 border-x border-charcoal/10 font-semibold text-charcoal">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>On-Location Hotel Suite / Venue:</strong> Shreya travels to you.
                        Zero morning traffic stress.
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-charcoal/70">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        Bride must travel to crowded salon and navigate wedding traffic in heavy
                        lehenga.
                      </span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-charcoal/[0.02] transition-colors">
                  <td className="p-5 font-bold text-charcoal">Pricing Transparency</td>
                  <td className="p-5 bg-peach/10 border-x border-charcoal/10 font-semibold text-charcoal">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>All-Inclusive Upfront:</strong> Hair styling, floral setting,
                        draping &amp; lashes are always included.
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-charcoal/70">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        Hidden add-on fees for lashes, draping, and senior artist presence.
                      </span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-charcoal/[0.02] transition-colors">
                  <td className="p-5 font-bold text-charcoal">Longevity &amp; 4K Camera Finish</td>
                  <td className="p-5 bg-peach/10 border-x border-charcoal/10 font-semibold text-charcoal">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>16-Hour Sweat-Proof &amp; Flashback-Free:</strong> Formulated for
                        high-definition 4K photography.
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-charcoal/70">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        Heavy matte pancake layers prone to oxidizing, flashback, and creasing.
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <CTASection source="why_shreya_final_cta" />
    </>
  );
}
