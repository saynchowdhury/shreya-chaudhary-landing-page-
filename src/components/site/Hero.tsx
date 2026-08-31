import { Link } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] px-4 py-10 sm:px-6 md:px-10 md:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-12 lg:gap-14">
        
        {/* Left Editorial Content */}
        <div className="lg:col-span-7 lg:pr-4">
          
          {/* Verified Directory Trust Badges - Clean 1-Line Row on Mobile & Desktop */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 max-w-lg">
            {/* Google Verified 5.0 Star Badge */}
            <a
              href={business.googleMyBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("gmb_click", { source: "hero_trust_badge" })}
              className="group flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-charcoal/15 bg-card px-2 py-1.5 sm:px-3 sm:py-2 text-[0.68rem] sm:text-xs text-charcoal shadow-2xs transition-all hover:border-charcoal hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="font-semibold text-charcoal/90 truncate">Google</span>
              <span className="rounded bg-amber-100 px-1 py-0.2 sm:px-1.5 sm:py-0.5 text-[0.58rem] sm:text-[0.62rem] font-bold text-amber-800 shrink-0">
                5.0★
              </span>
            </a>

            {/* WedMeGood Verified Badge */}
            <a
              href={business.wedmegoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("wedmegood_click", { source: "hero_trust_badge" })}
              className="group flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-charcoal/15 bg-card px-2 py-1.5 sm:px-3 sm:py-2 text-[0.68rem] sm:text-xs text-charcoal shadow-2xs transition-all hover:border-[#E72E76] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#E72E76] text-[0.5rem] font-black text-white leading-none shadow-xs shrink-0">
                W
              </span>
              <span className="font-semibold text-charcoal/90 truncate">WedMeGood</span>
            </a>

            {/* JustDial Top Rated Badge */}
            <a
              href={business.justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("justdial_click", { source: "hero_trust_badge" })}
              className="group flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-charcoal/15 bg-card px-2 py-1.5 sm:px-3 sm:py-2 text-[0.68rem] sm:text-xs text-charcoal shadow-2xs transition-all hover:border-[#0076D7] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center text-[0.52rem] sm:text-[0.58rem] font-black leading-none shrink-0 tracking-tight">
                <span className="rounded-l bg-[#0076D7] px-0.8 py-0.5 text-white">Just</span>
                <span className="rounded-r bg-[#F6821F] px-0.8 py-0.5 text-white">dial</span>
              </div>
              <span className="font-semibold text-charcoal/90 truncate">Top Rated</span>
            </a>
          </div>

          {/* Luxury Editorial Headline */}
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] text-charcoal sm:text-[3.2rem] md:text-[4rem] lg:text-[4.4rem]">
            Your vision,
            <span className="block italic text-blush font-normal">
              crafted into timeless beauty.
            </span>
          </h1>

          {/* Subheading Philosophy */}
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-charcoal/80 sm:text-base md:text-lg font-light">
            Luxury bridal, engagement, and editorial artistry in {locationLabel} &amp; Delhi NCR. 
            Personalized one-on-one attention with 100% authentic international vanity kits — designed so you feel confident, radiant, and completely yourself on your most sacred day.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href={buildWhatsAppLink("Hi Shreya, I'd like to book a free consultation for my wedding/event.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { source: "hero_cta_free_consult" })}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-charcoal px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory shadow-lg transition-all hover:bg-[#25D366] hover:text-charcoal text-center"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Book Free Consultation on WhatsApp</span>
            </a>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-charcoal/30 px-7 py-4 text-[0.72rem] uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory text-center"
            >
              Explore Lookbook
            </Link>
          </div>

          {/* Authentic Brand Pillars */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 border-t border-charcoal/15 pt-6 max-w-lg">
            <div>
              <p className="font-display text-xl sm:text-2xl text-charcoal font-medium">100%</p>
              <p className="mt-1 text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                5-Star Verified
              </p>
            </div>
            <div>
              <p className="font-display text-xl sm:text-2xl text-charcoal font-medium">1-on-1</p>
              <p className="mt-1 text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                Dedicated Focus
              </p>
            </div>
            <div>
              <p className="font-display text-xl sm:text-2xl text-charcoal font-medium">Luxury</p>
              <p className="mt-1 text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                Vanity Kits Only
              </p>
            </div>
          </div>

        </div>

        {/* Right High-Fashion Editorial Image */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            
            {/* Elegant Soft Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-charcoal/15 bg-card shadow-2xl">
              <img
                src="/IMG_0398.JPEG"
                alt="Shreya Chaudhary with real bride in royal gold bridal lehenga and kundan jewelry"
                width={1200}
                height={1600}
                loading="eager"
                decoding="async"
                className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 hover:scale-102"
              />
              
              {/* Subtle Editorial Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent p-6 text-ivory">
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-peach font-medium">
                  Real Bride with Artist
                </p>
                <p className="font-display text-xl text-ivory mt-0.5">
                  Shreya Chaudhary
                </p>
                <p className="text-xs text-ivory/80 font-light mt-1">
                  Royal Gold Kundan Bridal Glam · On-Location Artistry
                </p>
              </div>
            </div>

            {/* Floating guarantee badge */}
            <div className="absolute -top-3 -right-3 hidden sm:block rounded-xl bg-ivory border border-charcoal/15 p-3.5 shadow-lg">
              <p className="text-[0.62rem] uppercase tracking-[0.16em] text-charcoal font-semibold">
                Personalized 1-on-1
              </p>
              <p className="text-[0.58rem] text-muted-foreground">
                1 Bride per slot · Zero rushed salons
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
