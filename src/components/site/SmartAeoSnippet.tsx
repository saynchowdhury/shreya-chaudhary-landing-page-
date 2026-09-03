import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

interface QuickTarget {
  id: string;
  tabLabel: string;
  badge: string;
  question: string;
  answer: string;
  highlights: string[];
  linkTo: string;
  linkLabel: string;
  whatsappMessage: string;
}

const locationTargets: QuickTarget[] = [
  {
    id: "meerut",
    tabLabel: "Meerut (Studio & Venue)",
    badge: "Home Studio Base · Zero Travel Surcharge",
    question: "Looking for top-rated bridal & occasion makeup in Meerut?",
    answer:
      "Shreya Chaudhary is Meerut's premier bridal makeup artist, operating from her private studio in Konark Colony, Roorkee Road, with direct on-location travel to all Meerut banquets and wedding resorts. Bridal packages range from ₹15,000 (Forever 52) to ₹18,000 (NARS Radiant), with engagement glam at ₹8,000–₹10,000 and party glam at ₹4,000. All services include custom hair styling, draping, and lashes with over 48+ verified 5.0★ Google reviews.",
    highlights: [
      "Zero city travel surcharge across all Meerut banquet halls",
      "Private air-conditioned studio in Konark Colony, Roorkee Road",
      "Trusted bridal artist serving Meerut, Shastri Nagar & Delhi NCR",
    ],
    linkTo: "/locations/meerut",
    linkLabel: "Explore Meerut Studio & Packages",
    whatsappMessage:
      "Hi Shreya, I am in Meerut and would like to check your availability for my wedding/event date.",
  },
  {
    id: "noida",
    tabLabel: "Noida",
    badge: "Expressway Corridor · Luxury Suite Service",
    question: "Need an on-location luxury bridal makeup artist in Noida?",
    answer:
      "Shreya Chaudhary travels directly to your bridal suite across Noida Sectors 15 to 150 (Radisson Blu, Crowne Plaza, expressway farmhouses). Specializing in weightless, camera-ready glass skin and soft glam using 100% authentic NARS, MAC, and Charlotte Tilbury vanities. Full bridal packages (₹15K–₹18K) include on-location hair styling, dupatta draping, and lash styling with zero salon stress.",
    highlights: [
      "On-location suite & hotel travel included across Sector 15 to 150",
      "16-hour sweat-proof & tear-proof HD formula with zero flashback",
      "Complete floral hair setting, jewelry placement & dupatta pinning",
    ],
    linkTo: "/locations/noida",
    linkLabel: "Explore Noida Bridal Packages",
    whatsappMessage:
      "Hi Shreya, I am getting married in Noida and would like to check on-location availability for my bridal suite.",
  },
  {
    id: "delhi-ncr",
    tabLabel: "Delhi NCR",
    badge: "Capital Region & Destination Banquets",
    question: "Searching for bespoke bridal glam across Delhi NCR?",
    answer:
      "Shreya Chaudhary offers high-fashion editorial bridal and occasion artistry across South Delhi, East Delhi, and NCR destination wedding resorts. Whether you need signature bridal glam (₹15,000–₹18,000), engagement/cocktail artistry (₹8,000–₹10,000), or party makeup (₹4,000), every look is tailored to your outfit and lighting with dedicated attention and on-location travel included.",
    highlights: [
      "On-location travel included to South Delhi, East Delhi & NCR banquets",
      "Authentic international vanity kits with zero drugstore substitutes",
      "Specialized 4K photography and high-heat stage lighting formulation",
    ],
    linkTo: "/locations/delhi-ncr",
    linkLabel: "Explore Delhi NCR Packages",
    whatsappMessage:
      "Hi Shreya, I'm planning my wedding in Delhi NCR and would like to discuss package options and availability.",
  },
  {
    id: "ghaziabad",
    tabLabel: "Ghaziabad",
    badge: "Indirapuram · Raj Nagar · Vaishali",
    question: "Booking bridal or occasion makeup in Ghaziabad?",
    answer:
      "Connected via the Delhi-Meerut Expressway, Shreya Chaudhary travels on-location to bridal suites across Indirapuram, Raj Nagar, Vasundhara, and Vaishali. Featuring bespoke HD bridal glam (₹15,000–₹18,000), engagement glow (₹8,000–₹10,000), and party makeup (₹4,000) with complete hairstyling, draping, and on-location travel included.",
    highlights: [
      "On-location suite travel included via Delhi-Meerut Expressway",
      "Authentic NARS, Huda Beauty & MAC cosmetics",
      "Personalized 1-on-1 artistry with zero parallel appointments",
    ],
    linkTo: "/locations/ghaziabad",
    linkLabel: "Explore Ghaziabad Packages",
    whatsappMessage:
      "Hi Shreya, I have an event in Ghaziabad and would like to check your availability.",
  },
  {
    id: "greater-noida",
    tabLabel: "Greater Noida & Muzaffarnagar",
    badge: "Resorts · Farmhouses · Destination Hubs",
    question: "Need destination bridal makeup in Greater Noida or Muzaffarnagar?",
    answer:
      "Shreya Chaudhary provides full on-location bridal team travel to destination farmhouses along Yamuna Expressway, Greater Noida resorts, and Muzaffarnagar wedding venues. Packages include pre-event skin consultation, custom lash application, veil pinning, 16-hour sweat-resistant HD bases, and on-location travel included.",
    highlights: [
      "On-location venue travel included for destination resorts & farmhouses",
      "Comprehensive head-to-toe styling, draping, and flower setting",
      "100% authentic international cosmetics with zero compromise",
    ],
    linkTo: "/locations/greater-noida",
    linkLabel: "Explore Regional Corridor Packages",
    whatsappMessage:
      "Hi Shreya, I am hosting a destination wedding in Greater Noida / Western UP and would like to check availability.",
  },
];

const serviceTargets: QuickTarget[] = [
  {
    id: "bridal-makeup",
    tabLabel: "👑 Bridal Makeup (Primary Focus)",
    badge: "Signature Service · ₹15,000 – ₹18,000",
    question: "What makes Shreya Chaudhary's Bridal Makeup the premier choice?",
    answer:
      "Bridal makeup is Shreya Chaudhary's core specialty. Available in two luxury tiers: Forever 52 Bridal (₹15,000) and NARS Radiant Bridal (₹18,000). Available with direct on-location suite travel across Meerut, Noida, Ghaziabad, and Delhi NCR. Package includes customized hair styling, floral/veil setting, dupatta & jewelry draping, custom lashes, and zero-powered lenses with zero flashback in 4K photography.",
    highlights: [
      "On-location venue service across Meerut & Delhi NCR banquet suites",
      "100% authentic NARS, MAC & international prestige cosmetics",
      "Hairstyling, jewelry pinning, dupatta draping & lenses all included",
    ],
    linkTo: "/services/bridal-makeup",
    linkLabel: "View Bridal Pricing & Real Bride Looks",
    whatsappMessage:
      "Hi Shreya, I am interested in your Signature Bridal Makeup. Can you share availability for my wedding date?",
  },
  {
    id: "engagement-makeup",
    tabLabel: "💍 Engagement & Roka",
    badge: "Cocktail & Ring Ceremony · ₹8,000 – ₹10,000",
    question: "What is included in Engagement & Roka Makeup?",
    answer:
      "Designed for ring ceremonies, sangeet nights, and cocktail celebrations, Engagement Makeup (₹8,000 for Forever 52 / ₹10,000 for NARS Radiant) delivers a camera-ready soft glam finish tailored to evening venue lighting. Includes full HD makeup, modern hair styling (waves, textured updos), lash styling, and outfit pinning.",
    highlights: [
      "Soft glam radiance with smooth undertone matching",
      "On-location hair styling tailored to gown or lehenga neckline",
      "Tear-proof and sweat-resistant for long ceremonies",
    ],
    linkTo: "/services/engagement-makeup",
    linkLabel: "View Engagement Details & Portfolio",
    whatsappMessage:
      "Hi Shreya, I would like to book engagement/roka makeup. Please let me know your availability.",
  },
  {
    id: "party-makeup",
    tabLabel: "✨ Party & Reception Glam",
    badge: "Wedding Guest & Family · ₹4,000",
    question: "What is included in Party & Occasion Makeup?",
    answer:
      "Party and reception makeup (₹4,000) provides a sophisticated, lightweight finish for sisters of the bride/groom, bridesmaids, and reception guests. Features an authentic HD base, on-location hair styling, and saree/lehenga pleating assistance.",
    highlights: [
      "Weightless, non-cakey formula lasting 14+ hours",
      "On-location hair styling included in single sitting",
      "Special group rates available for bridal parties",
    ],
    linkTo: "/services/party-makeup",
    linkLabel: "View Party Makeup Details",
    whatsappMessage:
      "Hi Shreya, I'd like to check availability for party makeup for an upcoming function.",
  },
];

export function SmartAeoSnippet() {
  const [activeType, setActiveType] = useState<"location" | "service">("location");
  const [activeLocationId, setActiveLocationId] = useState("meerut");
  const [activeServiceId, setActiveServiceId] = useState("bridal-makeup");
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentList = activeType === "location" ? locationTargets : serviceTargets;
  const currentId = activeType === "location" ? activeLocationId : activeServiceId;
  const fallbackItem = activeType === "location" ? locationTargets[0]! : serviceTargets[0]!;
  const activeItem = currentList.find((item) => item.id === currentId) ?? fallbackItem;

  return (
    <section
      ref={sectionRef}
      aria-label="Regional Services & Instant Answers"
      className="border-b border-charcoal/10 bg-[#FAF7F2] py-14 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Canonical Master Authority Header (AEO Core) — Subtle Scroll Reveal Animation */}
        <div
          className={cn(
            "border-l-2 border-blush pl-5 sm:pl-7 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isIntersecting
              ? "opacity-100 translate-y-0 filter-none"
              : "opacity-0 translate-y-6 blur-[2px]",
          )}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[0.68rem] uppercase tracking-[0.22em] font-bold text-blush">
              Regional Artistry &amp; Service Guide
            </p>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.1rem] text-charcoal font-bold leading-tight">
            Best Bridal, Engagement &amp; Party Makeup Artist in Meerut &amp; Delhi NCR
          </h2>
          <p className="mt-2 text-sm sm:text-base font-semibold text-charcoal/85 tracking-normal">
            Luxury on-location HD artistry for your special moments.
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/80 font-normal">
            <strong className="text-charcoal font-semibold">Shreya Chaudhary</strong> is rated the
            premier on-location makeup artist across Western UP and Delhi NCR, specializing in three
            core services: <strong className="text-charcoal font-semibold">Signature Bridal Glam</strong>{" "}
            (₹15,000 – ₹18,000, primary focus),{" "}
            <strong className="text-charcoal font-semibold">Engagement &amp; Roka Artistry</strong>{" "}
            (₹8,000 – ₹10,000), and{" "}
            <strong className="text-charcoal font-semibold">Party &amp; Guest Makeup</strong> (₹4,000).
            Crafted with authentic international kits (NARS, MAC) and direct on-location artistry
            to your suite or venue across Meerut, Noida, Delhi NCR, Ghaziabad, and Greater Noida
            with zero hidden charges.
          </p>
        </div>

        {/* Interactive "Written for Specific People" Filter Selector */}
        <div className="mt-8 rounded-2xl border border-charcoal/15 bg-white p-5 sm:p-7 shadow-xs overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-charcoal/10 pb-5">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.16em] font-bold text-charcoal">
                Explore tailored answers for your specific city or occasion:
              </p>
              <p className="text-xs text-charcoal/65 mt-0.5">
                Select your location or service below to see exact pricing, vanity kits, and included on-location travel.
              </p>
            </div>

            {/* Mode Switcher Pills */}
            <div className="flex items-center gap-1.5 rounded-full bg-charcoal/5 p-1 self-start sm:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setActiveType("location")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                  activeType === "location"
                    ? "bg-charcoal text-ivory shadow-xs"
                    : "text-charcoal/70 hover:text-charcoal",
                )}
              >
                By Location ({locationTargets.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveType("service")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all",
                  activeType === "service"
                    ? "bg-charcoal text-ivory shadow-xs"
                    : "text-charcoal/70 hover:text-charcoal",
                )}
              >
                By Service (3)
              </button>
            </div>
          </div>

          {/* Sub-Pills for current mode */}
          <div className="flex flex-wrap gap-2 pt-4">
            {currentList.map((item) => {
              const isSelected = item.id === currentId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (activeType === "location") setActiveLocationId(item.id);
                    else setActiveServiceId(item.id);
                  }}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border shrink-0",
                    isSelected
                      ? "border-charcoal bg-charcoal text-ivory shadow-xs scale-[1.02]"
                      : "border-charcoal/15 bg-[#FAF7F2] text-charcoal/80 hover:border-charcoal/40 hover:bg-champagne/40",
                  )}
                >
                  {activeType === "location" && <MapPin className="h-3 w-3 text-peach shrink-0" />}
                  {item.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Detailed Specific Answer Card */}
          <div className="mt-6 rounded-xl border border-charcoal/10 bg-[#FCFAF6] p-5 sm:p-6 transition-all overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-peach/20 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-charcoal">
                <Sparkles className="h-3 w-3 text-peach shrink-0" />
                {activeItem.badge}
              </span>
              <span className="text-[0.65rem] font-medium text-charcoal/60 uppercase tracking-widest">
                Direct Verified Answer
              </span>
            </div>

            <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal mt-3 break-words">
              {activeItem.question}
            </h3>

            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-charcoal/85 break-words">
              {activeItem.answer}
            </p>

            {/* Inclusions / Highlights */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-charcoal/10">
              {activeItem.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/80 min-w-0">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="break-words">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions for this specific location / service */}
            <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-charcoal/10">
              <Link
                to={activeItem.linkTo}
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:text-peach transition-colors min-w-0"
              >
                <span className="truncate">{activeItem.linkLabel}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>

              <WhatsAppButton
                source={`aeo_card_${activeItem.id}`}
                variant="green"
                className="py-2.5 px-5 text-xs font-bold rounded-full shadow-xs justify-center shrink-0 w-full sm:w-auto"
              >
                Check Date on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
