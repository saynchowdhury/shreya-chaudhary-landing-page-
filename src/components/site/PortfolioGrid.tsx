import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Check, MapPin } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import { services, serviceByCategory, type PortfolioCategory } from "@/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface PortfolioGridProps {
  items: PortfolioItem[];
  showFilters?: boolean;
}

export function PortfolioGrid({ items, showFilters = true }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [active, setActive] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "all" ? items : items.filter((item) => item.category === selectedCategory);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (delta: number) =>
      setActive((current) =>
        current === null ? null : (current + delta + filteredItems.length) % filteredItems.length,
      ),
    [filteredItems.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  if (items.length === 0) return <PortfolioEmptyState />;

  const current = active === null ? null : filteredItems[active];
  const currentService = current ? serviceByCategory(current.category) : null;

  return (
    <>
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {[
            { id: "all", label: "All Work" },
            { id: "bridal", label: "Bridal Makeup · ₹15k" },
            { id: "engagement", label: "Engagement · ₹8k" },
            { id: "party", label: "Party & Reception · ₹4k" },
          ].map((tab) => {
            const isTabActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setActive(null);
                }}
                className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                  isTabActive
                    ? "bg-charcoal text-ivory shadow-md"
                    : "border border-charcoal/20 bg-card text-charcoal hover:border-charcoal hover:bg-champagne/30"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Clean Photographic Gallery */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => {
          const service = serviceByCategory(item.category);
          return (
            <li key={item.src + index}>
              <div
                className="group relative block w-full overflow-hidden rounded-xl border border-charcoal/15 bg-card text-left shadow-sm transition-all duration-300 hover:border-charcoal/40 hover:shadow-xl cursor-pointer"
                onClick={() => {
                  setActive(index);
                  track("portfolio_view", { category: item.category, src: item.src });
                }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                  />

                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Occasion Badge Top Left */}
                  <div className="absolute top-3 left-3 rounded-full bg-charcoal/85 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-ivory backdrop-blur-md border border-ivory/10">
                    {service.name}
                  </div>

                  {/* Hover Quick View Trigger Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-[0.16em] font-medium text-peach underline underline-offset-4">
                      <span>View Gallery Photo</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                    <span className="rounded bg-ivory/20 px-2.5 py-0.5 text-[0.65rem] backdrop-blur-xs">
                      {item.meta?.location ?? "Meerut"}
                    </span>
                  </div>
                </div>

                {/* Minimal Card Footer: Service Category & Pricing */}
                <div className="flex items-center justify-between p-4 bg-card border-t border-charcoal/10">
                  <div>
                    <p className="font-display text-lg text-charcoal font-medium">{service.name}</p>
                    <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      Real Client Artistry · {item.meta?.location ?? "Meerut"}
                    </p>
                  </div>
                  <span className="font-display text-base font-semibold text-charcoal/90">
                    {service.priceLabel}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Lightbox Modal */}
      {current && currentService ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${currentService.name} Real Client Photo`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 md:p-8 backdrop-blur-md"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            aria-label="Close view"
            className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/30 bg-charcoal/80 text-ivory transition-all hover:bg-ivory hover:text-charcoal cursor-pointer"
          >
            <X size={20} aria-hidden />
          </button>

          {/* Navigation Arrows */}
          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/30 bg-charcoal/80 text-ivory transition-all hover:bg-ivory hover:text-charcoal cursor-pointer"
              >
                <ChevronLeft size={20} aria-hidden />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/30 bg-charcoal/80 text-ivory transition-all hover:bg-ivory hover:text-charcoal cursor-pointer"
              >
                <ChevronRight size={20} aria-hidden />
              </button>
            </>
          )}

          {/* Modal Container */}
          <div
            className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-ivory/15 bg-card shadow-2xl md:grid-cols-[1.1fr_0.9fr]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* High-Resolution Image Display */}
            <div className="relative flex items-center justify-center bg-ink p-4 md:p-6 overflow-hidden">
              <img
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                className="max-h-[55vh] md:max-h-[75vh] w-auto rounded-lg object-contain shadow-md"
              />
            </div>

            {/* Service & Booking Details */}
            <div className="flex flex-col justify-between overflow-y-auto p-6 md:p-8 text-charcoal bg-card">
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-charcoal/10 pb-4">
                  <div>
                    <span className="text-[0.68rem] uppercase tracking-[0.2em] font-semibold text-blush">
                      {currentService.shortName} Occasion
                    </span>
                    <h2 className="mt-1 font-display text-2xl md:text-3xl font-medium text-charcoal">
                      {currentService.name}
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-bold text-charcoal">
                      {currentService.priceLabel}
                    </p>
                    <p className="text-[0.62rem] uppercase tracking-wider text-muted-foreground">
                      All-Inclusive
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-charcoal/80">
                  {currentService.summary}
                </p>

                {/* Verified Package Inclusions */}
                <div className="mt-6 space-y-2.5 rounded-lg bg-champagne/25 p-4 border border-charcoal/10">
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] font-semibold text-charcoal">
                    Package Inclusions:
                  </p>
                  <ul className="space-y-2 text-xs text-charcoal/85">
                    {currentService.inclusions.map((inclusion) => (
                      <li key={inclusion} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>1-on-1 Dedicated focus (Zero rushed multiple brides)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div className="mt-6 border-t border-charcoal/10 pt-5 space-y-3">
                <a
                  href={buildWhatsAppLink(currentService.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("whatsapp_click", {
                      source: "portfolio_modal_book",
                      service: currentService.slug,
                    })
                  }
                  className="w-full flex items-center justify-center gap-2.5 rounded-lg bg-[#25D366] py-4 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal shadow-md transition-all hover:bg-emerald-400 active:scale-[0.99] text-center"
                >
                  <WhatsAppIcon className="h-4 w-4 text-charcoal shrink-0" />
                  <span>Inquire for {currentService.name} on WhatsApp</span>
                </a>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[0.7rem] text-muted-foreground pt-2 border-t border-charcoal/10">
                  <Link
                    to="/looks/$slug"
                    params={{ slug: current.slug }}
                    onClick={close}
                    className="font-bold text-blush hover:text-charcoal hover:underline transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Look Page &amp; Specs</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                  <Link
                    to="/services/$slug"
                    params={{ slug: currentService.slug }}
                    onClick={close}
                    className="underline underline-offset-2 hover:text-charcoal transition-colors font-medium text-charcoal/80"
                  >
                    View service details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function PortfolioEmptyState({
  note = "Photographs from this collection are being added. In the meantime, recent work is shared on Instagram.",
}: {
  note?: string;
}) {
  return (
    <div className="border border-dashed border-border bg-card px-6 py-16 text-center rounded-xl">
      <p className="eyebrow text-blush">Portfolio</p>
      <p className="mx-auto mt-4 max-w-xl font-display text-2xl text-charcoal">{note}</p>
      <a
        href="https://www.instagram.com/shreyachaudharymakeup/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("instagram_click", { source: "portfolio_empty_state" })}
        className="mt-7 inline-flex border border-charcoal/30 px-6 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
      >
        View work on Instagram
      </a>
    </div>
  );
}
