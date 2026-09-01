import { brands } from "@/data/brands";

export function BrandList() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {brands.map((brand) => {
        return (
          <li
            key={brand.name}
            className="group flex flex-col justify-between rounded-xl border border-charcoal/15 bg-card p-6 shadow-xs transition-all hover:border-charcoal/40 hover:shadow-lg"
          >
            <div>
              <span className="text-[0.62rem] uppercase tracking-[0.2em] font-bold text-blush">
                {brand.category}
              </span>

              {/* Brand Logo + Name */}
              <div className="mt-4 flex items-center gap-3.5">
                <div className="flex h-12 w-20 items-center justify-center overflow-hidden rounded-lg bg-white border border-charcoal/8 p-2 shadow-xs">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} official logo`}
                    className="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg text-charcoal font-bold tracking-tight">
                  {brand.name}
                </h3>
              </div>
            </div>
            <p className="mt-4 border-t border-charcoal/10 pt-3 text-xs leading-relaxed text-muted-foreground">
              {brand.tagline}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
