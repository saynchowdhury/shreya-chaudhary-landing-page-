import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const portfolioPath = `/portfolio/${service.category}` as const;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const serviceNumbers = ["01", "02", "03"];
  const serviceNumber = serviceNumbers[index % 3] || "01";

  return (
    <article
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl border border-charcoal/15 bg-card shadow-sm transition-all duration-700 hover:shadow-2xl hover:border-charcoal/30 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="grid md:grid-cols-12 gap-0 items-center">
        
        {/* Left / Top Visual Column (5 cols on desktop, full width on mobile) */}
        <div className="md:col-span-5 lg:col-span-5 relative overflow-hidden h-[280px] sm:h-[340px] md:h-full min-h-[300px] md:min-h-[380px] bg-charcoal/5">
          <Link
            to={portfolioPath}
            onClick={() =>
              track("service_portfolio_click", {
                service: service.slug,
                source: "service_card_image",
              })
            }
            className="block h-full w-full relative overflow-hidden group/img"
          >
            <img
              src={service.image}
              alt={`${service.name} in Meerut & Delhi NCR - Premium signature look by Shreya Chaudhary Makeup`}
              width={800}
              height={1000}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchpriority={index === 0 ? "high" : "auto"}
              className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-charcoal/20" />
            
            {/* Category Tag Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="rounded-full bg-charcoal/90 backdrop-blur-md px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ivory border border-ivory/20 shadow-md">
                {service.shortName} Portfolio
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/90 text-charcoal shadow-md group-hover/img:bg-blush group-hover/img:text-charcoal transition-colors">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </div>

        {/* Right / Bottom Content Column (7 cols on desktop, full width on mobile) */}
        <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-between p-7 sm:p-8 md:pl-10 lg:pl-12 lg:pr-10 lg:py-10 space-y-6">
          
          <div>
            {/* Top Row: Service Number & Price Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-charcoal/10">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold text-blush tracking-wider">
                  {serviceNumber}
                </span>
                <span className="h-px w-6 bg-blush/40" />
                <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-charcoal/70">
                  Signature Offering
                </span>
              </div>

              {/* Clear, Uncramped Price Pill */}
              <div className="inline-flex items-center rounded-full bg-champagne/40 border border-charcoal/15 px-3.5 py-1 shadow-2xs">
                <span className="font-display text-base sm:text-lg font-bold text-charcoal">
                  {service.priceLabel}
                </span>
              </div>
            </div>

            {/* Service Name & Tagline */}
            <h3 className="mt-4 font-display text-2xl sm:text-3xl text-charcoal font-bold leading-tight">
              {service.name}
            </h3>

            {/* Service Summary */}
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-charcoal/85 font-normal">
              {service.summary}
            </p>

            {/* Clean Inclusions Grid (2 cols on tablet/desktop, 1 col on mobile) */}
            <div className="mt-5 rounded-xl bg-champagne/15 border border-charcoal/10 p-4 sm:p-5">
              <p className="text-[0.62rem] uppercase tracking-[0.18em] font-bold text-charcoal/70 mb-3">
                Included with this look:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal/90">
                {service.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blush" aria-hidden="true" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dual Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-2">
            <a
              href={buildWhatsAppLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("whatsapp_click", {
                  service: service.slug,
                  source: "service_card_whatsapp",
                })
              }
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-ivory shadow-md transition-all hover:bg-[#25D366] hover:text-charcoal active:scale-[0.98] text-center"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Book on WhatsApp</span>
            </a>

            <Link
              to={portfolioPath}
              onClick={() =>
                track("service_portfolio_click", {
                  service: service.slug,
                  source: "service_card_btn",
                })
              }
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-charcoal/30 bg-card px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-charcoal shadow-2xs transition-all hover:bg-champagne hover:border-charcoal active:scale-[0.98] text-center"
            >
              <span>View {service.shortName} Portfolio</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </article>
  );
}
