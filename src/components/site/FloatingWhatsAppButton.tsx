import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsAppButton() {
  const whatsappUrl = buildWhatsAppLink(
    "Hi Shreya, I would love to get a consultation for my wedding/event look. Please share your availability and package details."
  );

  return (
    <aside aria-label="Bridal Consultation on WhatsApp" className="fixed bottom-8 right-8 z-40 hidden lg:block">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { source: "floating_bottom_right" })}
        className="group relative flex items-center gap-3 rounded-full border border-charcoal/15 bg-charcoal px-5 py-3.5 text-ivory shadow-2xl transition-all duration-300 hover:bg-[#25D366] hover:text-charcoal hover:scale-105"
      >
        {/* Availability green live pulse */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>

        {/* Text */}
        <div className="flex flex-col text-left">
          <span className="text-[0.62rem] uppercase tracking-[0.18em] text-peach group-hover:text-charcoal font-semibold">
            Consultation
          </span>
          <span className="font-display text-sm font-medium tracking-wide">
            Chat on WhatsApp
          </span>
        </div>

        {/* Official WhatsApp Icon */}
        <WhatsAppIcon className="h-5 w-5 fill-current shrink-0" />
      </a>
    </aside>
  );
}
