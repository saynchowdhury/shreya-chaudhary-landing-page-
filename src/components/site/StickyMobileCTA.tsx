import { Link } from "@tanstack/react-router";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/20 bg-charcoal/95 px-3 py-2.5 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <Link
          to="/portfolio"
          className="flex flex-1 items-center justify-center rounded-lg border border-ivory/30 bg-charcoal/60 px-3 py-3 text-[0.68rem] uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-ivory hover:text-charcoal text-center"
        >
          <span>Browse Looks</span>
        </Link>

        <a
          href={buildWhatsAppLink(
            "Hi Shreya, I would like to check availability and book a consultation for my wedding/event.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source: "sticky_mobile" })}
          className="relative flex flex-[1.6] items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-charcoal shadow-md transition-all hover:bg-emerald-400 active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-4 w-4 text-charcoal shrink-0" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
