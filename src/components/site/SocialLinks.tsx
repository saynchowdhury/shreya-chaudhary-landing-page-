import { Instagram, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { track } from "@/lib/analytics";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function SocialLinks({
  tone = "dark",
  source = "social_links",
}: {
  tone?: "dark" | "light";
  source?: string;
}) {
  const style = cn(
    "flex h-10 w-10 items-center justify-center rounded border text-xs font-semibold transition-all",
    tone === "light"
      ? "border-ivory/25 text-ivory hover:border-peach hover:text-peach hover:bg-ivory/10"
      : "border-border text-charcoal hover:border-charcoal hover:text-charcoal hover:bg-champagne/30",
  );

  return (
    <ul className="flex items-center gap-2.5">
      <li>
        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("instagram_click", { source })}
          className={style}
          aria-label={`Shreya Chaudhary Makeup on Instagram (${business.instagramHandle})`}
        >
          <Instagram size={16} aria-hidden />
        </a>
      </li>
      <li>
        <a
          href={business.wedmegoodUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("wedmegood_click", { source })}
          className={style}
          aria-label="Shreya Chaudhary on WedMeGood"
          title="WedMeGood Profile"
        >
          <span className="text-[0.65rem] font-bold">WMG</span>
        </a>
      </li>
      <li>
        <a
          href={business.justdialUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("justdial_click", { source })}
          className={style}
          aria-label="Shreya Chaudhary on JustDial"
          title="JustDial Profile"
        >
          <span className="text-[0.65rem] font-bold">JD</span>
        </a>
      </li>
      <li>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source })}
          className={style}
          aria-label="Message Shreya Chaudhary Makeup on WhatsApp"
        >
          <MessageCircle size={16} aria-hidden />
        </a>
      </li>
    </ul>
  );
}
