import type { PortfolioCategory } from "@/data/services";
import { portfolioByCategory } from "@/data/portfolio";

/**
 * Shows the first real photograph for a category. While no photographs have
 * been supplied it renders a typographic frame — no stock or placeholder image.
 */
export function PortfolioPreview({
  category,
  label,
  imageSrc,
  imageAlt,
  ratio = "aspect-[4/5]",
}: {
  category: PortfolioCategory;
  label: string;
  imageSrc?: string | undefined;
  imageAlt?: string | undefined;
  ratio?: string;
}) {
  const fallbackImage = portfolioByCategory(category)[0];
  const src = imageSrc || fallbackImage?.src;
  const alt = imageAlt || fallbackImage?.alt || `${label} makeup by Shreya Chaudhary`;

  if (src) {
    return (
      <div className={`${ratio} overflow-hidden bg-muted`}>
        <img
          src={src}
          alt={alt}
          width={fallbackImage?.width || 1200}
          height={fallbackImage?.height || 1600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`${ratio} flex flex-col items-center justify-center gap-3 border-b border-border bg-[oklch(0.955_0.018_74)] text-center`}
    >
      <span className="eyebrow text-blush">{label}</span>
      <span className="max-w-[16rem] px-6 text-xs leading-relaxed text-muted-foreground">
        Photography from this collection is being added.
      </span>
    </div>
  );
}
