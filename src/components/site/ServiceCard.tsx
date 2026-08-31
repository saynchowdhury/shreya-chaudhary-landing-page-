import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/services";
import { PortfolioPreview } from "./PortfolioPreview";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ServiceCard({ service }: { service: Service }) {
  const portfolioPath = `/portfolio/${service.category}` as const;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/15 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:border-charcoal/30">
      <Link
        to={portfolioPath}
        onClick={() => track("service_portfolio_click", { service: service.slug, source: "service_card_image" })}
        className="block overflow-hidden"
      >
        <PortfolioPreview
          category={service.category}
          label={service.shortName}
          imageSrc={service.image}
          imageAlt={`${service.name} signature look by Shreya Chaudhary`}
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl text-charcoal font-medium">{service.name}</h3>
          <p className="font-display text-xl text-charcoal/90 font-semibold">{service.priceLabel}</p>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{service.summary}</p>

        {/* Clean minimal inclusions list */}
        <ul className="mt-5 space-y-1.5 border-t border-charcoal/10 pt-4 text-xs text-charcoal/80">
          {service.inclusions.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-blush" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Dual Actions: View Lookbook & Book */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2 pt-2 border-t border-charcoal/10">
          <Link
            to={portfolioPath}
            onClick={() => track("service_portfolio_click", { service: service.slug, source: "service_card_btn" })}
            className="flex flex-1 items-center justify-center rounded border border-charcoal/30 py-3 text-[0.65rem] uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory text-center font-medium"
          >
            View {service.shortName} Work
          </Link>

          <a
            href={buildWhatsAppLink(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { service: service.slug, source: "service_card_whatsapp" })}
            className="flex flex-1 items-center justify-center gap-1.5 rounded bg-charcoal py-3 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-[#25D366] hover:text-charcoal text-center"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}

