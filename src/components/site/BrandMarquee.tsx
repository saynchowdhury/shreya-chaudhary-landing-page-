import { brands } from "@/data/brands";

export function BrandMarquee() {
  return (
    <section aria-label="Premium Brands We Use" className="relative overflow-hidden border-y border-charcoal/10 bg-champagne/20 py-8">
      <div className="mx-auto max-w-7xl px-5 text-center mb-6">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] font-semibold text-charcoal/80">
          Professional Vanity Kit &amp; 100% Authentic Luxury Cosmetics We Use
        </p>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-12 py-2">
          {brands.concat(brands).map((brand, idx) => {
            return (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center gap-12 group transition-transform duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/50 p-1 shadow-sm border border-charcoal/5">
                    {brand.logo ? (
                      <img src={brand.logo} alt={`${brand.name} logo`} className="h-full w-full object-contain mix-blend-multiply opacity-90 transition-opacity group-hover:opacity-100" />
                    ) : (
                      <span className="font-display text-lg tracking-[0.16em] font-semibold text-charcoal/90">
                        {brand.name}
                      </span>
                    )}
                  </div>
                </div>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-blush" aria-hidden="true" />
              </div>
            );
          })}
        </div>
        <div aria-hidden="true" className="flex shrink-0 animate-marquee items-center gap-12 py-2">
          {brands.concat(brands).map((brand, idx) => {
            return (
              <div
                key={`repeat-${brand.name}-${idx}`}
                className="flex items-center gap-12 group transition-transform duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/50 p-1 shadow-sm border border-charcoal/5">
                    {brand.logo ? (
                      <img src={brand.logo} alt={`${brand.name} logo`} className="h-full w-full object-contain mix-blend-multiply opacity-90 transition-opacity group-hover:opacity-100" />
                    ) : (
                      <span className="font-display text-lg tracking-[0.16em] font-semibold text-charcoal/90">
                        {brand.name}
                      </span>
                    )}
                  </div>
                </div>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-blush" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

