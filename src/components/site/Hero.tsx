import { Link } from "@tanstack/react-router";
import { Download, ArrowUpRight } from "lucide-react";
import { business, locationLabel } from "@/data/business";
import { portfolio } from "@/data/portfolio";
import { track } from "@/lib/analytics";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF7] to-[#FAF6F0] px-5 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-10 md:px-10 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 border-b border-charcoal/10">
      {/* Decorative luxury radial auras */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-peach/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[450px] w-[450px] rounded-full bg-blush/15 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-14">
          
          {/* Main Editorial Content Column — centered on mobile, left on desktop */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Main Luxury Headline */}
            <h1 className="font-sans text-[2.4rem] leading-[1.08] tracking-tight text-charcoal sm:text-[3.4rem] md:text-[4rem] lg:text-[4.6rem] font-extrabold">
              Best Bridal, Engagement & Party Makeup Artist in Meerut & Delhi NCR
              <span className="block font-sans text-charcoal/80 font-medium tracking-normal text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.2rem] mt-6 lg:mt-8 leading-snug">
                Luxury on-location HD artistry for your special moments.
              </span>
            </h1>

            {/* Mobile Hero Image (First Screen / First Pixel) */}
            <div className="mt-5 w-full max-w-sm sm:max-w-md block lg:hidden">
              <div className="relative mx-auto overflow-hidden rounded-2xl border-2 border-charcoal/15 bg-card shadow-xl">
                <img
                  src="/IMG_0398.JPEG"
                  alt="Shreya Chaudhary real bride in royal gold bridal lehenga and jewelry"
                  width={900}
                  height={1200}
                  loading="eager"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent p-4 text-ivory text-left">
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-peach font-bold">
                    Real Bride
                  </p>
                  <p className="font-display text-base text-ivory font-bold">
                    Shreya Chaudhary Makeup
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Directory & Social Trust Badges (Google, Instagram, WedMeGood, JustDial) */}
            <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full max-w-sm sm:max-w-xl">
              {/* Google Verified 5.0 Star Badge */}
              <a
                href={business.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("gmb_click", { source: "hero_trust_badge" })}
                className="group flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-charcoal/15 bg-card px-2 py-1.5 sm:px-3 sm:py-2 text-[0.62rem] sm:text-xs text-charcoal shadow-2xs transition-all hover:border-charcoal hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="font-bold text-charcoal truncate">Google</span>
                <span className="rounded bg-amber-100 px-1 py-0.2 text-[0.55rem] sm:text-[0.6rem] font-bold text-amber-800 shrink-0">
                  5.0★
                </span>
              </a>

              {/* Instagram Official Profile Badge */}
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("instagram_click", { source: "hero_trust_badge" })}
                className="group flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-charcoal/15 bg-card px-2 py-1.5 sm:px-3 sm:py-2 text-[0.62rem] sm:text-xs text-charcoal shadow-2xs transition-all hover:border-[#E1306C] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="h-3.5 w-3.5 text-[#E1306C] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="font-bold text-charcoal truncate">Instagram</span>
              </a>

              {/* WedMeGood Verified Badge */}
              <a
                href={business.wedmegoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("wedmegood_click", { source: "hero_trust_badge" })}
                className="group flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-charcoal/15 bg-card px-2 py-1.5 sm:px-3 sm:py-2 text-[0.62rem] sm:text-xs text-charcoal shadow-2xs transition-all hover:border-[#E72E76] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#E72E76] text-[0.5rem] font-black text-white leading-none shrink-0">
                  W
                </span>
                <span className="font-bold text-charcoal truncate">WedMeGood</span>
              </a>

              {/* JustDial Top Rated Badge */}
              <a
                href={business.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("justdial_click", { source: "hero_trust_badge" })}
                className="group flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-charcoal/15 bg-card px-2 py-1.5 sm:px-3 sm:py-2 text-[0.62rem] sm:text-xs text-charcoal shadow-2xs transition-all hover:border-[#0076D7] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-center text-[0.52rem] font-black leading-none shrink-0 tracking-tight">
                  <span className="rounded-l bg-[#0076D7] px-0.8 py-0.5 text-white">Just</span>
                  <span className="rounded-r bg-[#F6821F] px-0.8 py-0.5 text-white">dial</span>
                </div>
                <span className="font-bold text-charcoal truncate">Top Rated</span>
              </a>
            </div>

            {/* Punchy Value Proposition */}
            <p className="mt-5 max-w-sm sm:max-w-2xl text-sm leading-relaxed text-charcoal/90 sm:text-base md:text-[1.12rem] font-normal">
              Bespoke bridal &amp; occasion makeup by the best makeup artist near you in <strong className="font-bold text-charcoal">{locationLabel} &amp; Delhi NCR</strong>. 
              <strong className="font-bold text-charcoal"> Strictly 1 bride per slot</strong> with <strong className="font-bold text-charcoal">authentic international vanity kits</strong> — delivering a weightless, 4K camera-ready bridal look so you feel radiantly confident all night.
            </p>

            {/* High-Converting Action Boxes Group */}
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full max-w-sm sm:max-w-2xl">
              {/* Box 1: WhatsApp Consultation */}
              <WhatsAppButton
                source="hero_primary"
                variant="green"
                className="flex-1 rounded-full py-3.5 px-5 shadow-md hover:shadow-lg font-bold text-xs justify-center min-w-[200px]"
              >
                Free Consultation on WhatsApp
              </WhatsAppButton>

              {/* Box 2: Lookbook Box Component */}
              <Link
                to="/portfolio"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-charcoal bg-charcoal text-ivory hover:bg-charcoal/85 px-5 py-3.5 text-[0.7rem] uppercase tracking-[0.14em] transition-all font-bold text-center shadow-xs hover:shadow-md active:scale-[0.98] min-w-[170px]"
              >
                <span>Explore Lookbook</span>
              </Link>

              {/* Box 3: PDF Bridal Catalog Box Component */}
              <a
                href="/shreya-chaudhary-makeup-catalog.pdf"
                download="Shreya-Chaudhary-Bridal-Catalog-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("brochure_download", { source: "hero_cta_button" })}
                className="group flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/25 bg-card px-5 py-3.5 text-[0.7rem] uppercase tracking-[0.14em] text-charcoal transition-all hover:bg-charcoal hover:text-ivory font-bold text-center shadow-2xs hover:shadow-md active:scale-[0.98] min-w-[190px]"
              >
                <Download className="h-3.5 w-3.5 text-blush group-hover:text-peach transition-colors shrink-0 group-hover:translate-y-0.5" />
                <span>Download Bridal Catalog (PDF)</span>
              </a>
            </div>

            {/* Authentic Metrics Bar */}
            <div className="mt-6 grid grid-cols-3 gap-4 sm:gap-6 border-t border-charcoal/15 pt-5 w-full max-w-sm sm:max-w-lg">
              <div>
                <p className="font-display text-xl sm:text-3xl text-charcoal font-bold">5.0★</p>
                <p className="mt-0.5 text-[0.62rem] sm:text-xs uppercase tracking-[0.14em] text-charcoal/70 font-bold">
                  Verified Reviews
                </p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-3xl text-charcoal font-bold">1-on-1</p>
                <p className="mt-0.5 text-[0.62rem] sm:text-xs uppercase tracking-[0.14em] text-charcoal/70 font-bold">
                  Dedicated Focus
                </p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-3xl text-charcoal font-bold">100%</p>
                <p className="mt-0.5 text-[0.62rem] sm:text-xs uppercase tracking-[0.14em] text-charcoal/70 font-bold">
                  Authentic Vanity
                </p>
              </div>
            </div>

          </div>

          {/* Desktop Right Column: High Fashion Framed Model & Floating Glassmorphism Badges */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative mx-auto max-w-lg">
              
              {/* Luxury Framed Bridal Portrait */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-charcoal/15 bg-card shadow-2xl transition-all duration-500 hover:shadow-3xl">
                <img
                  src="/IMG_0398.JPEG"
                  alt="Shreya Chaudhary real bride in royal gold bridal lehenga and jewelry"
                  width={1200}
                  height={1600}
                  loading="eager"
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 hover:scale-103"
                />
                
                {/* Subtle Editorial Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/95 via-charcoal/45 to-transparent p-6 text-ivory">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-peach font-bold">
                      Real Bride
                    </p>
                    <p className="font-display text-xl text-ivory font-bold mt-0.5">
                      Shreya Chaudhary Makeup
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Brochure Access Badge (Top Right) */}
              <a
                href="/shreya-chaudhary-makeup-catalog.pdf"
                download="Shreya-Chaudhary-Bridal-Catalog-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("brochure_download", { source: "hero_floating_badge" })}
                className="group absolute -top-4 -right-4 rounded-xl bg-ivory/95 backdrop-blur-md border border-charcoal/15 p-3.5 shadow-xl transition-all hover:border-charcoal hover:scale-[1.03]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-peach/20 text-charcoal group-hover:bg-charcoal group-hover:text-ivory transition-colors">
                    <Download className="h-4 w-4 text-charcoal group-hover:text-ivory transition-colors" />
                  </div>
                  <div className="text-left">
                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-charcoal font-bold flex items-center gap-1">
                      Bridal Catalog <ArrowUpRight className="h-3 w-3 text-blush inline group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </p>
                    <p className="text-[0.62rem] text-charcoal/70 font-semibold">
                      Download PDF (2026 Edition)
                    </p>
                  </div>
                </div>
              </a>

              {/* Floating On-Location Badge (Bottom Left) */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-charcoal/95 backdrop-blur-md border border-ivory/20 p-3.5 shadow-xl text-ivory">
                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-peach font-bold">
                  On-Location Artistry
                </p>
                <p className="text-[0.7rem] text-ivory/80 font-medium mt-0.5">
                  Bespoke Bridal &amp; Occasion Makeup
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
