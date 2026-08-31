import { Link } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { services } from "@/data/services";
import { SocialLinks } from "./SocialLinks";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pb-20 lg:pb-0">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 sm:px-8 md:px-10 md:py-18">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Verified Profile Links */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3.5">
              <img
                src="/shreya chaudharydark logo with colorful bg.png"
                alt="Shreya Chaudhary Makeup logo"
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
                className="rounded-full shadow-md object-cover ring-1 ring-ivory/20 shrink-0"
              />
              <div>
                <p className="font-display text-xl text-ivory font-medium leading-tight">
                  {business.name}
                </p>
                <p className="text-[0.62rem] text-peach uppercase tracking-widest mt-0.5 font-medium">
                  {locationLabel} &amp; Delhi NCR
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-ivory/70 font-light max-w-sm">
              Luxury personalized bridal, engagement, and party artistry crafted around the look you envision with 100% authentic international vanity kits.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.7rem] text-ivory/75">
              <a
                href={business.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-peach transition-colors"
              >
                <span className="text-amber-400">★ 5.0</span>
                <span>Google Verified</span>
              </a>
              <span className="text-ivory/30">·</span>
              <a
                href={business.wedmegoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-peach transition-colors"
              >
                WedMeGood
              </a>
              <span className="text-ivory/30">·</span>
              <a
                href={business.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-peach transition-colors"
              >
                JustDial
              </a>
            </div>

            <div className="mt-5">
              <SocialLinks tone="light" />
            </div>
          </div>

          {/* Column 2: Services & Areas Served */}
          <nav aria-label="Services & Locations" className="text-sm">
            <h2 className="eyebrow text-ivory/50 text-[0.68rem]">Signature Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="text-xs text-ivory/80 transition-colors hover:text-peach"
                  >
                    {service.name} — <span className="font-semibold text-ivory/90">{service.priceLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-ivory/10">
              <p className="text-[0.62rem] uppercase tracking-[0.16em] text-peach font-semibold mb-2">
                Areas Served:
              </p>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-ivory/70">
                <Link to="/locations/meerut" className="hover:text-peach">Meerut</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/noida" className="hover:text-peach">Noida</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/muzaffarnagar" className="hover:text-peach">Muzaffarnagar</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/ghaziabad" className="hover:text-peach">Ghaziabad</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/greater-noida" className="hover:text-peach">Greater Noida</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/shamli" className="hover:text-peach">Shamli</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/delhi-ncr" className="hover:text-peach">Delhi NCR</Link>
              </div>
            </div>
          </nav>

          {/* Column 3: Quick Links */}
          <nav aria-label="Explore" className="text-sm">
            <h2 className="eyebrow text-ivory/50 text-[0.68rem]">Explore Studio</h2>
            <ul className="mt-4 space-y-2.5 text-xs text-ivory/80">
              <li>
                <Link to="/portfolio" className="transition-colors hover:text-peach">
                  Lookbook &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-peach">
                  About Shreya
                </Link>
              </li>
              <li>
                <Link to="/why-shreya" className="transition-colors hover:text-peach">
                  The Shreya Standard
                </Link>
              </li>
              <li>
                <Link to="/brands" className="transition-colors hover:text-peach">
                  Luxury Vanity Kit
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="transition-colors hover:text-peach">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link to="/packages" className="transition-colors hover:text-peach">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-peach">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 4: WhatsApp Availability & Direct Chat */}
          <div className="text-sm">
            <h2 className="eyebrow text-ivory/50 text-[0.68rem]">Reserve Your Date</h2>
            <p className="mt-4 text-xs leading-relaxed text-ivory/70 font-light">
              Message on WhatsApp with your event date, occasion, and location to check calendar availability.
            </p>
            <div className="mt-5">
              <WhatsAppButton source="footer" variant="green" className="w-full py-3.5 text-xs">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
            <p className="mt-4 text-xs text-ivory/60 tracking-wider">
              WhatsApp: <span className="text-ivory/80 font-medium">{business.whatsappDisplay}</span>
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-peach">
              Privacy Policy
            </Link>
            <Link to="/booking-policy" className="transition-colors hover:text-peach">
              Booking Policy &amp; Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
