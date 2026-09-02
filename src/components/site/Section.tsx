import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "ivory",
  id,
  as: As = "section",
  labelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ivory" | "charcoal" | "champagne" | "card";
  id?: string;
  as?: "section" | "div";
  labelledBy?: string;
}) {
  const tones = {
    ivory: "bg-background text-foreground",
    charcoal: "bg-charcoal text-ivory",
    champagne: "bg-[oklch(0.955_0.018_74)] text-foreground",
    card: "bg-card text-foreground",
  } as const;

  return (
    <As
      id={id}
      aria-labelledby={labelledBy}
      className={cn("px-5 py-20 md:px-10 md:py-28", tones[tone], className)}
    >
      <div className="mx-auto w-full max-w-[1400px]">{children}</div>
    </As>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "light" ? "text-peach" : "text-blush")}>{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-[2.1rem] leading-[1.08] tracking-[-0.02em] md:text-[3rem]",
          tone === "light" ? "text-ivory" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <div
          className={cn(
            "mt-5 space-y-4 text-base leading-relaxed font-light",
            tone === "light" ? "text-ivory/80" : "text-charcoal/80",
          )}
        >
          {typeof intro === "string" ? <p>{intro}</p> : intro}
        </div>
      ) : null}
    </div>
  );
}
