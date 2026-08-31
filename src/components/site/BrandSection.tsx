import { brands } from "@/data/brands";

export function BrandList() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {brands.map((brand) => {
        return (
          <li
            key={brand.name}
            className="group flex flex-col justify-between rounded-lg border border-charcoal/15 bg-card p-6 shadow-xs transition-all hover:border-charcoal/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[0.62rem] uppercase tracking-[0.2em] font-semibold text-blush">
                  {brand.category}
                </span>
              </div>
              <div className="h-10 flex items-center">
                {brand.logo ? (
                  <img src={brand.logo} alt={`${brand.name} logo`} className="h-8 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <h3 className="font-display text-2xl text-charcoal font-medium">
                    {brand.name}
                  </h3>
                )}
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

