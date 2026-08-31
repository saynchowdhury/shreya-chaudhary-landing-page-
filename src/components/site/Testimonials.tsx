import { useState } from "react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { business } from "@/data/business";
import { track } from "@/lib/analytics";

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
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-charcoal/15 bg-card p-6 shadow-xs transition-all duration-300 hover:border-charcoal/40 hover:shadow-lg cursor-pointer"
    >
      <div>
        {/* Top Reviewer Row with Real Portrait */}
        <div className="flex items-center gap-3.5">
          <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-full border border-charcoal/20 bg-muted">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              width={100}
              height={100}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <p className="font-display text-base font-semibold text-charcoal truncate">
                {testimonial.name}
              </p>
              <span className="text-[0.62rem] text-amber-600 font-semibold tracking-wider">
                ★★★★★
              </span>
            </div>
            <p className="text-[0.68rem] text-muted-foreground truncate">
              {testimonial.service} · {testimonial.location}
            </p>
          </div>
        </div>

        {/* Shortened Quote */}
        <blockquote className="mt-4 text-xs leading-relaxed text-charcoal/85 italic line-clamp-3">
          "{testimonial.quote}"
        </blockquote>
      </div>

      {/* Card Footer with Click to Read */}
      <figcaption className="mt-5 flex items-center justify-between border-t border-charcoal/10 pt-3 text-[0.65rem]">
        <span className="font-medium text-blush tracking-wider uppercase">
          {testimonial.badge}
        </span>
        <span className="text-muted-foreground group-hover:text-charcoal transition-colors underline underline-offset-2">
          Read full review →
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialList() {
  const [activeReview, setActiveReview] = useState<Testimonial | null>(null);

  const handleReviewClick = (testimonial: Testimonial) => {
    setActiveReview(testimonial);
    track("testimonial_modal_open", { reviewer: testimonial.name });
  };

  return (
    <div className="space-y-10">
      
      {/* Brand Header with Logo & Google 5.0 Star Banner */}
      <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-charcoal/15 bg-champagne/25 p-6 md:flex-row md:p-8">
        
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          {/* Shreya Chaudhary Brand Logo */}
          <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full border border-charcoal/15 shadow-md bg-card ring-2 ring-champagne">
            <img
              src="/shreya chaudharydark logo with colorful bg.png"
              alt="Shreya Chaudhary Makeup Brand Logo"
              width={120}
              height={120}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-display text-2xl font-semibold text-charcoal">5.0</span>
              <span className="text-amber-500 text-lg">★★★★★</span>
              <span className="rounded bg-champagne px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-charcoal">
                Google Verified · 100% 5-Star Rated
              </span>
            </div>
            <p className="mt-1.5 text-xs md:text-sm text-charcoal/85">
              Verified 5.0 Star Bridal Reviews on <strong>Google</strong>, <strong>WedMeGood</strong> &amp; <strong>JustDial</strong> across Meerut, Noida &amp; Delhi NCR.
            </p>
          </div>
        </div>

        {/* Direct Google My Business Link */}
        <a
          href={business.googleMyBusinessUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("gmb_click", { source: "testimonials_banner" })}
          className="inline-flex shrink-0 items-center justify-center rounded bg-charcoal px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.18em] text-ivory transition-all hover:bg-blush hover:text-charcoal"
        >
          View All on Google Maps ↗
        </a>
      </div>

      {/* Testimonials Cards Grid */}
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard
              testimonial={testimonial}
              onSelect={handleReviewClick}
            />
          </li>
        ))}
      </ul>

      {/* Interactive Review Lightbox Modal */}
      {activeReview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Review by ${activeReview.name}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-md"
          onClick={() => setActiveReview(null)}
        >
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-xl border border-charcoal/20 bg-card p-6 md:p-8 shadow-2xl"
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
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-charcoal/20 shadow-xs">
                <img
                  src={activeReview.photo}
                  alt={activeReview.name}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-medium text-charcoal">
                    {activeReview.name}
                  </h3>
                  <span className="text-amber-500 text-sm">★★★★★</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {activeReview.service} · {activeReview.location}
                </p>
                <p className="text-[0.65rem] text-blush font-medium tracking-wider uppercase mt-0.5">
                  {activeReview.badge} ({activeReview.date})
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="py-5">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold">
                Look Created: <span className="text-charcoal font-medium">{activeReview.lookTitle}</span>
              </p>
              <blockquote className="mt-3 text-sm leading-relaxed text-charcoal/90 italic font-serif">
                "{activeReview.quote}"
              </blockquote>
            </div>

            {/* Modal Footer with Direct Google Link */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-charcoal/10 pt-5">
              <span className="text-[0.7rem] text-muted-foreground">
                Verified on Google My Business
              </span>
              <a
                href={business.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("gmb_click", { source: "review_modal_verify" })}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded bg-charcoal px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-blush hover:text-charcoal"
              >
                Read on Google Maps ↗
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
