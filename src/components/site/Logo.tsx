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
  const logoSrc = "/shreya chaudharydark logo with colorful bg.png";

  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-3 py-1", className)}
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
        <div className="flex items-center text-left">
          <span
            className={cn(
              "font-display text-[1.18rem] sm:text-[1.32rem] leading-none tracking-[0.01em] font-bold",
              tone === "light" ? "text-ivory" : "text-charcoal",
            )}
          >
            Shreya Chaudhary <span className="text-blush font-semibold">Makeup</span>
          </span>
        </div>
      ) : null}
    </Link>
  );
}
