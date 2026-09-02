import { useState } from "react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { business } from "@/data/business";
import { track } from "@/lib/analytics";
import { WhatsAppButton } from "./WhatsAppButton";

function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function TestimonialCard({
  testimonial,
  onSelect,
}: {
  testimonial: Testimonial;
  onSelect: (t: Testimonial) => void;
}) {
  return (
    <figure
      onClick={() => onSelect(testimonial)}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-charcoal/15 bg-card p-6 shadow-xs transition-all duration-300 hover:border-charcoal/40 hover:shadow-xl cursor-pointer"
    >
      <div>
        {/* Top Header: Client Initial Avatar, Name & Google Verified Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Google Profile Initials Avatar */}
            <div
              className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${testimonial.avatarBg} text-white font-bold text-base shadow-xs ring-2 ring-champagne/50`}
            >
              {testimonial.name.charAt(0)}
            </div>

            <div className="min-w-0">
              <p className="font-display text-base font-bold text-charcoal truncate">
                {testimonial.name}
              </p>
              <p className="text-[0.68rem] text-charcoal/70 truncate font-medium">
                {testimonial.service} · {testimonial.location}
              </p>
            </div>
          </div>

          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-charcoal/10 shadow-2xs">
            <GoogleIcon className="h-4 w-4" />
          </div>
        </div>

        {/* Stars Rating and Verification pill */}
        <div className="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-3">
          <div className="flex items-center gap-1 text-amber-500 text-sm">
            <span>★★★★★</span>
            <span className="text-xs font-bold text-charcoal ml-1">5.0</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[0.62rem] font-bold text-charcoal/75 bg-champagne/40 border border-charcoal/10 px-2.5 py-0.5 rounded-full">
            {testimonial.date}
          </span>
        </div>

        {/* Shortened Editorial Quote */}
        <blockquote className="mt-3.5 font-serif italic text-[0.88rem] leading-relaxed text-charcoal/90 line-clamp-4">
          "{testimonial.quote}"
        </blockquote>
      </div>

      {/* Card Footer with Click Prompt */}
      <figcaption className="mt-5 flex items-center justify-between border-t border-charcoal/10 pt-3 text-[0.65rem]">
        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Verified Google Review
        </span>
        <span className="text-charcoal/70 font-semibold group-hover:text-charcoal transition-colors underline underline-offset-2 shrink-0">
          Read full review →
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialList() {
  const [activeReview, setActiveReview] = useState<Testimonial | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "bridal" | "party">("all");

  const filteredReviews =
    selectedCategory === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === selectedCategory);

  const handleReviewClick = (testimonial: Testimonial) => {
    setActiveReview(testimonial);
    track("testimonial_modal_open", { reviewer: testimonial.name });
  };

  return (
    <div className="space-y-12">
      {/* 1. Official Google Verified Reviews Trust Badge Hub */}
      <div className="rounded-2xl border border-charcoal/15 bg-gradient-to-br from-[#FFFFFF] via-[#FAF6F0] to-[#F5EFE6] p-6 md:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Google Rating & Business Profile Details */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white border border-charcoal/15 shadow-md ring-4 ring-champagne/40">
              <GoogleIcon className="h-10 w-10" />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="font-display text-3xl font-bold text-charcoal">5.0</span>
                <div className="flex text-amber-500 text-xl tracking-tight">★★★★★</div>
                <span className="rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-emerald-800">
                  Google Verified Business
                </span>
              </div>
              <p className="mt-1 text-sm text-charcoal/90 font-medium">
                Based on <strong className="font-bold text-charcoal">45+ 5-Star Reviews</strong> on
                Google Maps for Shreya Chaudhary Makeup.
              </p>
              <p className="text-xs text-charcoal/70 mt-0.5">
                Roorkee Road, Konark Colony, Meerut &amp; Delhi NCR Bridal Suites.
              </p>
            </div>
          </div>

          {/* Right: Direct Action Buttons on Google Maps */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={business.googleMyBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("gmb_click", { source: "testimonials_hub_view" })}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.16em] text-ivory font-bold shadow-sm transition-all hover:bg-blush hover:text-charcoal active:scale-[0.98]"
            >
              <GoogleIcon className="h-3.5 w-3.5 shrink-0" />
              <span>View on Google Maps ↗</span>
            </a>

            <a
              href={business.googleMyBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("gmb_click", { source: "testimonials_hub_write_review" })}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-charcoal/30 bg-white px-5 py-3.5 text-[0.7rem] uppercase tracking-[0.14em] text-charcoal font-bold shadow-2xs transition-all hover:bg-champagne hover:border-charcoal active:scale-[0.98]"
            >
              <span>Write a Review ✎</span>
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-2 border-t border-charcoal/10 pt-5">
          <span className="text-xs font-bold text-charcoal/70 uppercase tracking-wider mr-2">
            Filter Reviews:
          </span>
          {(
            [
              { id: "all", label: "All Reviews (5.0 ★)" },
              { id: "bridal", label: "Bridal Makeup" },
              { id: "party", label: "Occasion & Party" },
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-charcoal text-ivory shadow-xs"
                  : "bg-white/80 border border-charcoal/15 text-charcoal hover:bg-charcoal/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Testimonials Cards Grid */}
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredReviews.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} onSelect={handleReviewClick} />
          </li>
        ))}
      </ul>

      {/* 3. Interactive 3rd-Party Google Maps Studio Embed Widget */}
      <div className="overflow-hidden rounded-2xl border border-charcoal/15 bg-card shadow-md">
        <div className="border-b border-charcoal/10 bg-champagne/20 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-charcoal/15 shadow-xs">
              <GoogleIcon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-charcoal">
                Visit or Find Us on Google Maps
              </h3>
              <p className="text-xs text-charcoal/75">
                {business.addressFull} · Serving all Delhi NCR &amp; Western UP
              </p>
            </div>
          </div>

          <a
            href={business.googleMyBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("gmb_click", { source: "map_embed_directions" })}
            className="inline-flex items-center gap-1.5 rounded-full bg-white border border-charcoal/20 px-4 py-2 text-xs font-bold text-charcoal shadow-2xs hover:bg-charcoal hover:text-ivory transition-colors"
          >
            <span>Get Directions 🚗 ↗</span>
          </a>
        </div>

        {/* Live Google Map Interactive Frame */}
        <div className="relative h-[320px] sm:h-[380px] w-full bg-muted">
          <iframe
            title="Shreya Chaudhary Makeup Studio Google Maps Location"
            src="https://maps.google.com/maps?q=Shreya+Chaudhary+Makeup+Roorkee+Road+Konark+Colony+Meerut&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full grayscale-[15%] contrast-[105%]"
          />

          {/* Floating Studio Info Pill on Map */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-xl bg-charcoal/95 text-ivory p-4 shadow-xl backdrop-blur-md border border-ivory/20">
            <div className="flex items-center justify-between">
              <p className="font-display text-sm font-bold text-ivory">{business.name}</p>
              <span className="text-[0.65rem] text-amber-400 font-bold">5.0 ★ (45+ Reviews)</span>
            </div>
            <p className="text-[0.7rem] text-ivory/80 mt-1">
              {business.addressStreet}, {business.city}
            </p>
            <p className="text-[0.65rem] text-peach font-semibold mt-1">
              ⏰ Open Daily 10:00 AM – 9:00 PM
            </p>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={business.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-md bg-ivory px-2.5 py-1.5 text-center text-[0.65rem] font-bold text-charcoal uppercase tracking-wider hover:bg-peach transition-colors"
              >
                Open Maps
              </a>
              <WhatsAppButton
                source="map_embed_floating"
                variant="green"
                className="flex-1 rounded-md py-1.5 px-2 text-[0.65rem] justify-center tracking-wider"
              >
                Chat
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Review Lightbox Modal */}
      {activeReview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Review by ${activeReview.name}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-md"
          onClick={() => setActiveReview(null)}
        >
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-charcoal/20 bg-card p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveReview(null)}
              aria-label="Close review modal"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-ivory transition-colors text-sm"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-charcoal/10 pb-5">
              <div
                className={`flex h-15 w-15 shrink-0 items-center justify-center rounded-full ${activeReview.avatarBg} text-white font-bold text-2xl shadow-sm ring-4 ring-champagne/40`}
              >
                {activeReview.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    {activeReview.name}
                  </h3>
                  <div className="flex text-amber-500 text-sm">
                    <span>★★★★★</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  {activeReview.service} · {activeReview.location}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <GoogleIcon className="h-3 w-3" />
                  <span className="text-[0.65rem] text-emerald-700 font-bold uppercase tracking-wider">
                    {activeReview.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="py-5">
              <blockquote className="font-serif italic text-base leading-relaxed text-charcoal/90 whitespace-pre-line">
                "{activeReview.quote}"
              </blockquote>
            </div>

            {/* Modal Footer with Direct Google Link */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-charcoal/10 pt-5">
              <span className="text-[0.72rem] text-muted-foreground font-medium">
                Google Business Profile: Shreya Chaudhary Makeup
              </span>
              <a
                href={business.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("gmb_click", { source: "review_modal_verify" })}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-charcoal px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.16em] text-ivory font-bold transition-colors hover:bg-blush hover:text-charcoal"
              >
                <GoogleIcon className="h-3.5 w-3.5 shrink-0" />
                <span>Verify on Google Maps ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
