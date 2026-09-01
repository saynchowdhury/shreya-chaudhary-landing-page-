import { Link } from "@tanstack/react-router";
import { business, locationLabel } from "@/data/business";
import { services } from "@/data/services";
import { SocialLinks } from "./SocialLinks";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-28 lg:pt-20 lg:pb-16 border-t border-charcoal/30">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 items-start">
          
          {/* Column 1: Brand & Verified Profile Links */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/shreya-chaudhary-logo.png"
                alt="Shreya Chaudhary Makeup logo"
                width={52}
                height={52}
                loading="lazy"
                decoding="async"
                className="rounded-full shadow-md object-cover ring-2 ring-peach/30 shrink-0"
              />
              <div>
                <p className="font-display text-xl sm:text-2xl text-ivory font-bold leading-tight">
                  {business.name}
                </p>
                <p className="text-[0.65rem] text-peach uppercase tracking-[0.16em] font-semibold mt-0.5">
                  {locationLabel} &amp; Delhi NCR
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-ivory/85 font-normal">
              Luxury personalized bridal, engagement, and party artistry with 100% authentic international vanity kits. Strictly one bride per slot.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-ivory/90 pt-1">
              <a
                href={business.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-ivory/10 px-2.5 py-1 hover:bg-ivory/20 hover:text-peach transition-colors"
              >
                <span className="text-amber-400 font-bold">★ 5.0</span>
                <span>Google Verified</span>
              </a>
              <a
                href={business.wedmegoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-ivory/10 px-2.5 py-1 hover:bg-ivory/20 hover:text-peach transition-colors"
              >
                <span>WedMeGood</span>
              </a>
              <a
                href={business.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-ivory/10 px-2.5 py-1 hover:bg-ivory/20 hover:text-peach transition-colors"
              >
                <span>JustDial</span>
              </a>
            </div>

            <div className="pt-2">
              <SocialLinks tone="light" />
            </div>
          </div>

          {/* Column 2: Signature Services & Areas Served */}
          <nav aria-label="Services & Locations" className="flex flex-col space-y-4">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-peach">
              Signature Services
            </h2>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group inline-flex items-center text-sm font-medium text-ivory/90 transition-colors hover:text-peach"
                  >
                    <span>{service.name}</span>
                    <span className="ml-2 font-bold text-peach text-xs">({service.priceLabel})</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-ivory/15">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-peach font-bold mb-2.5">
                Areas Served:
              </p>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-xs font-medium text-ivory/80">
                <Link to="/locations/meerut" className="hover:text-peach transition-colors">Meerut</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/noida" className="hover:text-peach transition-colors">Noida</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/muzaffarnagar" className="hover:text-peach transition-colors">Muzaffarnagar</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/ghaziabad" className="hover:text-peach transition-colors">Ghaziabad</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/greater-noida" className="hover:text-peach transition-colors">Greater Noida</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/shamli" className="hover:text-peach transition-colors">Shamli</Link>
                <span className="text-ivory/30">·</span>
                <Link to="/locations/delhi-ncr" className="hover:text-peach transition-colors">Delhi NCR</Link>
              </div>
            </div>
          </nav>

          {/* Column 3: Quick Links */}
          <nav aria-label="Explore" className="flex flex-col space-y-4">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-peach">
              Explore Studio
            </h2>
            <ul className="space-y-3 text-sm font-medium text-ivory/90">
              <li>
                <Link to="/portfolio" className="transition-colors hover:text-peach inline-block hover:translate-x-0.5 transition-transform">
                  Lookbook &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-peach inline-block hover:translate-x-0.5 transition-transform">
                  About Shreya
                </Link>
              </li>
              <li>
                <Link to="/why-shreya" className="transition-colors hover:text-peach inline-block hover:translate-x-0.5 transition-transform">
                  The Shreya Standard
                </Link>
              </li>
              <li>
                <Link to="/brands" className="transition-colors hover:text-peach inline-block hover:translate-x-0.5 transition-transform">
                  Luxury Vanity Kit
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="transition-colors hover:text-peach inline-block hover:translate-x-0.5 transition-transform">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link to="/blog" className="transition-colors hover:text-peach inline-block hover:translate-x-0.5 transition-transform">
                  Bridal Journal
                </Link>
              </li>
              <li>
                <Link to="/packages" className="transition-colors hover:text-peach inline-block hover:translate-x-0.5 transition-transform">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-peach inline-block hover:translate-x-0.5 transition-transform">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 4: WhatsApp Availability & Direct Chat */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-peach">
              Reserve Your Date
            </h2>
            <p className="text-sm leading-relaxed text-ivory/85 font-normal">
              Send your wedding date, occasion, and location to check availability and book your free consultation.
            </p>
            <div className="pt-2">
              <WhatsAppButton source="footer" variant="green" className="w-full justify-center py-4 text-xs font-bold uppercase tracking-wider">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
            <p className="text-xs text-ivory/80 tracking-wide font-medium">
              WhatsApp: <span className="text-ivory font-bold">{business.whatsappDisplay}</span>
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-xs font-medium text-ivory/70 sm:flex-row sm:items-center sm:justify-between">
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
