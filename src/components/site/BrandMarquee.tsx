import { brands } from "@/data/brands";

function BrandCard({ brand }: { brand: (typeof brands)[number] }) {
  return (
    <div className="flex flex-col items-center gap-3 group transition-all duration-300 hover:scale-105">
      <div className="flex h-14 w-36 sm:w-44 items-center justify-center overflow-hidden rounded-xl bg-white border border-charcoal/10 px-4 py-2 shadow-xs transition-shadow hover:shadow-md">
        <img
          src={brand.logo}
          alt={`${brand.name} official brand logo`}
          className="h-full w-auto max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.18em] text-charcoal/80 group-hover:text-charcoal transition-colors">
        {brand.name}
      </span>
    </div>
  );
}

export function BrandMarquee() {
  // Double the brands for seamless infinite scroll
  const doubled = [...brands, ...brands];

  return (
    <section aria-label="Premium Brands We Use" className="relative overflow-hidden border-y border-charcoal/10 bg-champagne/30 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 text-center mb-6">
        <p className="text-[0.72rem] uppercase tracking-[0.24em] font-bold text-charcoal/90">
          100% Authentic International Vanity Brands We Use
        </p>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-8 sm:gap-12 py-2">
          {doubled.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="flex items-center gap-8 sm:gap-12">
              <BrandCard brand={brand} />
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blush/60" aria-hidden="true" />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex shrink-0 animate-marquee items-center gap-8 sm:gap-12 py-2">
          {doubled.map((brand, idx) => (
            <div key={`repeat-${brand.name}-${idx}`} className="flex items-center gap-8 sm:gap-12">
              <BrandCard brand={brand} />
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blush/60" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
