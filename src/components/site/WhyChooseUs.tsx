import { ShieldCheck, HeartHandshake, Award, Palette } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { brands } from "@/data/brands";

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us-heading" className="bg-[#181616] px-5 py-12 text-ivory md:px-10 md:py-16">
      <div className="mx-auto max-w-[1300px]">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-ivory/15">
          <div className="max-w-xl">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-peach font-semibold">
              The Shreya Chaudhary Standard
            </p>
            <h2 id="why-choose-us-heading" className="mt-2.5 font-display text-2xl leading-tight text-ivory md:text-4xl">
              Why brides choose a personal artist over a salon
            </h2>
          </div>
          <p className="max-w-sm text-xs text-ivory/70 font-light leading-relaxed">
            Quiet luxury, punctual professionalism, and dedicated 1-on-1 care directly in your bridal suite.
          </p>
        </div>

        {/* Artistic Luxury Bento Grid - Space-Optimized */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Bento Item 1: Large Feature (8 cols) - 1-on-1 Dedicated Suite Experience */}
          <div className="md:col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl border border-ivory/15 bg-gradient-to-br from-[#242121] to-[#1C1A1A] p-6 md:p-7 shadow-lg transition-all duration-300 hover:border-ivory/30">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-peach/15 px-3 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-peach">
                    <HeartHandshake className="h-3 w-3" />
                    Dedicated 1-on-1 Personal Attention
                  </span>
                  <h3 className="mt-3 font-display text-xl md:text-2xl text-ivory font-medium leading-snug">
                    Zero salon rush. 100% focused suite artistry.
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-ivory/75 font-light">
                    Unlike commercial salons that rush multiple brides simultaneously, Shreya accepts <strong>strictly 1 bride per time slot</strong>. You receive calm, unhurried attention in your private suite.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-ivory/10 pt-3.5 text-xs">
                  <div>
                    <p className="font-display text-base text-peach font-semibold">1 Bride</p>
                    <p className="text-[0.62rem] text-ivory/60">Per Time Slot</p>
                  </div>
                  <div>
                    <p className="font-display text-base text-peach font-semibold">100%</p>
                    <p className="text-[0.62rem] text-ivory/60">Suite Privacy</p>
                  </div>
                  <div>
                    <p className="font-display text-base text-peach font-semibold">On-Time</p>
                    <p className="text-[0.62rem] text-ivory/60">Guaranteed Schedule</p>
                  </div>
                </div>
              </div>

              {/* Visual Side with Real Bride & Shreya Photo - Black bars cleanly cropped */}
              <div className="md:col-span-5 h-[230px] md:h-[260px] relative overflow-hidden rounded-lg border border-ivory/15 bg-black">
                <img
                  src="/IMG_6562.PNG"
                  alt="Artist Shreya Chaudhary with real bride in pink lehenga"
                  width={500}
                  height={650}
                  className="h-full w-full object-cover object-[center_36%] scale-[1.32] transition-transform duration-700 group-hover:scale-[1.38]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2.5 text-center">
                  <p className="text-[0.6rem] uppercase tracking-wider text-peach font-semibold">
                    Real Bride Reveal
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bento Item 2: Compact Star Review & Track Record (4 cols) */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col justify-between rounded-xl border border-ivory/15 bg-gradient-to-br from-[#242121] to-[#1C1A1A] p-6 md:p-7 shadow-lg transition-all duration-300 hover:border-ivory/30">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne/15 px-3 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-champagne">
                <Award className="h-3 w-3 text-amber-400" />
                6+ Years Bridal Mastery
              </span>
              
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold text-ivory">5.0</span>
                <span className="text-amber-400 text-xl tracking-wider">★★★★★</span>
              </div>
              <p className="mt-1 text-[0.68rem] font-semibold text-peach uppercase tracking-wider">
                100% 5-Star Flawless Record
              </p>

              <p className="mt-3 text-xs leading-relaxed text-ivory/75 font-light">
                Over 6 years of specialized bridal artistry trusted by brides across Meerut, Noida, Ghaziabad, and destination weddings.
              </p>
            </div>

            <div className="mt-4 pt-3.5 border-t border-ivory/10 flex items-center justify-between text-[0.68rem] text-ivory/60">
              <span>Google Verified</span>
              <span>·</span>
              <span>WedMeGood</span>
              <span>·</span>
              <span>JustDial</span>
            </div>
          </div>

          {/* Bento Item 3: 100% Authentic Vanity Kit (5 cols) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between rounded-xl border border-ivory/15 bg-gradient-to-br from-[#242121] to-[#1C1A1A] p-6 md:p-7 shadow-lg transition-all duration-300 hover:border-ivory/30">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-peach/15 px-3 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-peach">
                <ShieldCheck className="h-3 w-3" />
                100% Luxury Vanity Kit
              </span>
              <h3 className="mt-3 font-display text-xl text-ivory font-medium">
                World-class, skin-friendly cosmetics
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ivory/75 font-light">
                Zero cheap drugstore foundations or harsh formulas. We custom-blend shades for your exact undertone using genuine international luxury products.
              </p>

              {/* Brand Pills Cluster */}
              <div className="mt-4 flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex h-7 items-center justify-center overflow-hidden rounded bg-ivory px-2.5 shadow-sm border border-ivory/20 transition-all hover:scale-105"
                  >
                    {brand.logo ? (
                      <img src={brand.logo} alt={`${brand.name} logo`} className="h-3.5 w-auto object-contain mix-blend-multiply opacity-90" />
                    ) : (
                      <span className="text-[0.5rem] font-bold uppercase tracking-wider text-charcoal">
                        {brand.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[0.65rem] text-peach font-light border-t border-ivory/10 pt-2.5">
              ✓ 16-Hour Sweatproof · Zero Flashback · Ultra-Hydrated
            </p>
          </div>

          {/* Bento Item 4: Free Pre-Bridal Consultation & Look Mapping (7 cols) */}
          <div className="md:col-span-12 lg:col-span-7 group relative overflow-hidden rounded-xl border border-ivory/15 bg-gradient-to-br from-[#242121] to-[#1C1A1A] p-6 md:p-7 shadow-lg transition-all duration-300 hover:border-ivory/30">
            <div className="grid sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-7 space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne/15 px-3 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-champagne">
                  <Palette className="h-3 w-3 text-peach" />
                  Free Pre-Bridal Consultation
                </span>
                <h3 className="font-display text-xl text-ivory font-medium">
                  Bespoke look mapping before your big day
                </h3>
                <p className="text-xs leading-relaxed text-ivory/75 font-light">
                  We review your outfit embroidery, jewelry metals, face structure, and lighting in advance so your wedding morning is pure joy.
                </p>

                <ul className="space-y-1 text-xs text-ivory/80 pt-1">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-peach" />
                    Hair styling and flower placement included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-peach" />
                    Dupatta pinning and jewelry setting included
                  </li>
                </ul>
              </div>

              <div className="sm:col-span-5 h-[260px] sm:h-[280px] rounded-lg overflow-hidden border border-ivory/15 bg-black relative">
                <img
                  src="/IMG_9067.PNG"
                  alt="Client bespoke look styling and draping by Shreya Chaudhary"
                  width={500}
                  height={600}
                  className="h-full w-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Booking Guarantee Strip - Compact */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-ivory/15 bg-card/10 backdrop-blur-md p-5 md:p-6">
          <div>
            <p className="font-display text-lg text-ivory font-medium">
              Ready to reserve your wedding date?
            </p>
            <p className="mt-0.5 text-xs text-ivory/60">
              Only 1 bridal slot accepted per event · Serving Meerut, Noida, Ghaziabad, Muzaffarnagar and Delhi NCR.
            </p>
          </div>
          
          <a
            href={buildWhatsAppLink("Hi Shreya, I'd like to check your availability for my wedding date and get a free consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "why_choose_us_bento_cta" })}
            className="inline-flex shrink-0 items-center justify-center rounded bg-ivory px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-charcoal shadow-md transition-all hover:bg-peach hover:scale-[1.02]"
          >
            Check Availability on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
