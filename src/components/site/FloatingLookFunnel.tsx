import { useState, useEffect } from "react";
import { X, Sparkles, MessageCircle, Calendar } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import { business } from "@/data/business";
import { track } from "@/lib/analytics";

interface FloatingLookFunnelProps {
  look: PortfolioItem;
}

export function FloatingLookFunnel({ look }: FloatingLookFunnelProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem(`funnel_dismissed_${look.slug}`);
    if (isDismissed) {
      setDismissed(true);
      return;
    }

    // Trigger after 3 seconds
    const timer = setTimeout(() => {
      setVisible(true);
      track("look_funnel_view", { look: look.slug, title: look.title });
    }, 3000);

    // Or trigger on scroll
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [look.slug, look.title]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(`funnel_dismissed_${look.slug}`, "true");
    track("look_funnel_dismiss", { look: look.slug });
  };

  const whatsappMessage = `Hi Shreya, I found your "${look.title}" look on Google and love this exact style. I'd like to check your availability for my wedding on [Date] in [City].`;
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  if (dismissed || !visible) return null;

  return (
    <aside
      aria-label="Book this bridal look"
      className="fixed bottom-6 right-4 sm:right-6 z-40 max-w-sm w-[calc(100vw-2rem)] sm:w-96 rounded-2xl border border-charcoal/20 bg-card/95 backdrop-blur-md p-4 shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={look.src}
            alt={look.title}
            width={52}
            height={52}
            className="h-13 w-13 rounded-xl object-cover border border-charcoal/15 shrink-0 shadow-sm"
          />
          <div>
            <span className="inline-flex items-center gap-1 text-[0.62rem] uppercase tracking-wider font-bold text-blush">
              <Sparkles className="h-3 w-3" /> Love this exact look?
            </span>
            <h4 className="font-display text-sm font-bold text-charcoal leading-snug line-clamp-1">
              {look.title}
            </h4>
            <p className="text-[0.68rem] text-muted-foreground mt-0.5">
              Meerut &amp; Delhi NCR · On-location artistry
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Close booking suggestion"
          className="text-charcoal/50 hover:text-charcoal p-1 rounded-full hover:bg-charcoal/5 transition-colors shrink-0"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 pt-3 border-t border-charcoal/10 flex flex-col gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            track("look_funnel_whatsapp_click", { look: look.slug, title: look.title })
          }
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-emerald-500 px-4 py-3 text-xs font-bold uppercase tracking-wider text-charcoal shadow-md transition-all active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4 fill-current" />
          <span>Book This Exact Look on WhatsApp</span>
        </a>

        <div className="flex items-center justify-center gap-1.5 text-[0.65rem] text-muted-foreground">
          <Calendar className="h-3 w-3 text-peach" />
          <span>Winter 2026-2027 Wedding Season Booking Fast</span>
        </div>
      </div>
    </aside>
  );
}
