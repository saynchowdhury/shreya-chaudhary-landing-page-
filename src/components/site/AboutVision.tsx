import { business } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export function AboutVision() {
  return (
    <section aria-labelledby="about-vision-heading" className="bg-card px-5 py-16 sm:py-20 md:py-24 border-b border-charcoal/10">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Double Editorial Imagery: IMG_7352 & IMG_6562 */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            
            {/* Image 1: IMG_7352.JPG.jpeg (Suite Touchups & Artistry in action) */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-xl border border-charcoal/15 bg-charcoal/5 shadow-md">
                <img
                  src="/IMG_7352.JPG.jpeg"
                  alt="Shreya Chaudhary on-location bridal glam touchup session"
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3.5 bg-champagne/40 rounded-lg border border-charcoal/10">
                <p className="text-[0.62rem] uppercase tracking-[0.18em] text-charcoal font-semibold">
                  Suite Artistry
                </p>
                <p className="mt-0.5 text-xs text-charcoal/75">
                  Calm getting-ready sessions in your private venue.
                </p>
              </div>
            </div>

            {/* Image 2: IMG_6562.PNG (Shreya with Real Bride, cropped to eliminate black bars) */}
            <div className="space-y-3 pt-6 sm:pt-8">
              <div className="p-3.5 bg-charcoal text-ivory rounded-lg border border-charcoal/10">
                <p className="text-[0.62rem] uppercase tracking-[0.18em] text-peach font-semibold">
                  Personal MUA
                </p>
                <p className="mt-0.5 text-xs text-ivory/80">
                  Dedicated 1-on-1 focus for your big day.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-charcoal/15 bg-black shadow-md relative aspect-[4/5]">
                {/* CSS scale & position crop to cleanly eliminate top and bottom black phone letterboxing */}
                <img
                  src="/IMG_6562.PNG"
                  alt="Shreya Chaudhary with her real bride in pink lehenga"
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[center_36%] scale-[1.32] transition-transform duration-500 hover:scale-[1.38]"
                />
              </div>
            </div>

          </div>

          {/* Right Personal Human Philosophy (Generous Whitespace & Headspace) */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-blush" />
              <span className="text-[0.68rem] uppercase tracking-[0.24em] font-medium text-blush">
                Artistry Philosophy
              </span>
            </div>

            <h2 id="about-vision-heading" className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl leading-snug sm:leading-tight text-charcoal">
              "You are not an appointment on an assembly line. You are my muse."
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-charcoal/80 font-light">
              <p>
                Makeup should make you feel like the most radiant version of yourself, not a completely different person.
              </p>
              <p>
                I don't believe in generic salon templates. We sit down together, understand your vision, and match your makeup to your outfit, jewelry, and skin tone.
              </p>
              <p>
                The result is a lightweight, glowing finish that feels natural, photographs beautifully in 4K, and lasts comfortably all night.
              </p>
            </div>

            {/* 3 Spacious Responsive Pillars with Ample Whitespace */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="rounded-xl border border-charcoal/10 bg-champagne/20 p-4 transition-all hover:bg-champagne/35">
                <p className="font-display text-base font-semibold text-charcoal">01. Skin First</p>
                <p className="mt-1 text-xs text-charcoal/70 leading-normal">
                  Deep hydration for a smooth, weightless base.
                </p>
              </div>
              <div className="rounded-xl border border-charcoal/10 bg-champagne/20 p-4 transition-all hover:bg-champagne/35">
                <p className="font-display text-base font-semibold text-charcoal">02. True Match</p>
                <p className="mt-1 text-xs text-charcoal/70 leading-normal">
                  Exact undertone blending with zero flashback.
                </p>
              </div>
              <div className="rounded-xl border border-charcoal/10 bg-champagne/20 p-4 transition-all hover:bg-champagne/35">
                <p className="font-display text-base font-semibold text-charcoal">03. Calm Vibe</p>
                <p className="mt-1 text-xs text-charcoal/70 leading-normal">
                  Stress-free, on-time glam in your suite.
                </p>
              </div>
            </div>

            {/* Signature and CTA with Generous Headspace */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 border-t border-charcoal/10 pt-6">
              <div className="flex items-center gap-3">
                <img
                  src="/shreya chaudharycolorful monogram without bg.png"
                  alt="Shreya Chaudhary monogram"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <p className="font-display text-base font-medium text-charcoal">{business.artist}</p>
                  <p className="text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Founder &amp; Master Artist
                  </p>
                </div>
              </div>

              <a
                href={buildWhatsAppLink("Hi Shreya, I'd love to chat about my wedding look and check availability.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "about_vision_consult" })}
                className="inline-flex items-center justify-center rounded-lg border border-charcoal px-6 py-3 text-[0.72rem] uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory font-medium text-center shadow-2xs"
              >
                Discuss Your Dream Look 💬
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
