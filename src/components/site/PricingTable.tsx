import { Link } from "@tanstack/react-router";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { WhatsAppButton } from "./WhatsAppButton";

export function PricingTable({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";

  return (
    <div>
      <ul className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.slug}
            className={
              light
                ? "flex flex-col border border-ivory/20 p-7"
                : "flex flex-col border border-border bg-card p-7"
            }
          >
            <h3 className={light ? "eyebrow text-peach" : "eyebrow text-blush"}>
              {service.shortName}
            </h3>
            <p
              className={
                light
                  ? "mt-4 font-display text-[2.6rem] leading-none text-ivory"
                  : "mt-4 font-display text-[2.6rem] leading-none text-charcoal"
              }
            >
              {service.priceLabel}
            </p>
            <p
              className={
                light
                  ? "mt-4 text-sm leading-relaxed text-ivory/70"
                  : "mt-4 text-sm leading-relaxed text-muted-foreground"
              }
            >
              {service.name}
            </p>
            <ul
              className={
                light
                  ? "mt-6 flex-1 space-y-2 text-sm text-ivory/80"
                  : "mt-6 flex-1 space-y-2 text-sm text-charcoal/80"
              }
            >
              {service.inclusions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-peach" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3">
              <WhatsAppButton
                source={`pricing:${service.slug}`}
                message={service.whatsappMessage}
                service={service.name}
                variant={light ? "light" : "solid"}
                className="px-6 py-3"
              >
                Check availability
              </WhatsAppButton>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className={
                  light
                    ? "text-center text-[0.68rem] uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:text-peach"
                    : "text-center text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-charcoal"
                }
              >
                {service.name} details
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <p
        className={
          light ? "mt-8 text-sm text-ivory/60" : "mt-8 text-sm text-muted-foreground"
        }
      >
        {business.pricingNote}
      </p>
    </div>
  );
}
