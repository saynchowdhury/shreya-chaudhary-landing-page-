import { Link } from "@tanstack/react-router";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

export function Logo({
  size = 46,
  withWordmark = true,
  className,
  tone = "dark",
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
  tone?: "dark" | "light";
}) {
  const logoSrc = "/shreya-chaudhary-logo.png";

  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-3 py-1 shrink-0", className)}
      aria-label={`${business.name} — home`}
    >
      <img
        src={logoSrc}
        alt="Shreya Chaudhary Makeup official logo"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="rounded-full shrink-0 object-cover shadow-sm ring-1 ring-charcoal/10 transition-transform duration-300 group-hover:scale-105"
        decoding="async"
      />
      {withWordmark ? (
        <div className="flex items-center text-left whitespace-nowrap">
          <span
            className={cn(
              "font-display text-[1.15rem] sm:text-[1.28rem] leading-none tracking-[-0.01em] font-semibold whitespace-nowrap",
              tone === "light" ? "text-ivory" : "text-charcoal",
            )}
          >
            Shreya Chaudhary <span className="text-blush font-medium">Makeup</span>
          </span>
        </div>
      ) : null}
    </Link>
  );
}
