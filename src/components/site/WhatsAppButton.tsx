import { track } from "@/lib/analytics";
import { buildWhatsAppLink, type WhatsAppOptions } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Variant = "solid" | "outline" | "light" | "green";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-all duration-300";

const variants: Record<Variant, string> = {
  solid: "bg-charcoal text-ivory hover:bg-[#25D366] hover:text-charcoal shadow-sm",
  outline: "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  light: "bg-ivory text-charcoal hover:bg-champagne",
  green: "bg-[#25D366] text-charcoal hover:bg-emerald-400 font-semibold shadow-md",
};

export interface WhatsAppButtonProps extends WhatsAppOptions {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
  showIcon?: boolean;
  /** Where the click happened, for analytics. */
  source: string;
}

export function WhatsAppButton({
  children = "Check availability on WhatsApp",
  variant = "solid",
  showIcon = true,
  className,
  source,
  ...options
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppLink(options)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { source, service: options.service })}
      className={cn(base, variants[variant], className)}
    >
      {showIcon && <WhatsAppIcon className="h-4 w-4 shrink-0" />}
      <span>{children}</span>
    </a>
  );
}
