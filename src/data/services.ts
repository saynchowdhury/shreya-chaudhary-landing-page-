export type ServiceSlug = "bridal-makeup" | "engagement-makeup" | "party-makeup";
export type PortfolioCategory = "bridal" | "engagement" | "party";

export interface Service {
  slug: ServiceSlug;
  /** Portfolio category this service maps to. */
  category: PortfolioCategory;
  name: string;
  shortName: string;
  price: number;
  priceLabel: string;
  image: string;
  tagline: string;
  summary: string;
  /** Verified inclusions only. */
  inclusions: string[];
  /** Prefilled WhatsApp enquiry for this service. */
  whatsappMessage: string;
  /** Direct answer block used for search / AI readability. */
  answer: { question: string; answer: string };
  seo: { title: string; description: string };
}

export const services: Service[] = [
  {
    slug: "bridal-makeup",
    category: "bridal",
    name: "Bridal Makeup",
    shortName: "Bridal",
    price: 15000,
    priceLabel: "₹15,000 – ₹18,000",
    image: "/IMG_5032.JPG.jpeg",
    tagline: "The bride's vision comes first.",
    summary:
      "A bespoke bridal look built around the dream makeup you envision for your wedding day. Available with Forever 52 Bridal (₹15,000) or NARS Radiant Bridal (₹18,000). Completed with hairstyling, draping, lash, and zero-powered lens.",
    inclusions: [
      "Forever 52 Bridal (₹15,000) / NARS Radiant Bridal (₹18,000)",
      "Full HD bridal base & custom lash styling",
      "Hair styling & floral/veil setting on location",
      "Dupatta & jewelry draping included",
      "Zero-powered lens included",
      "Travel expenses excluded (calculated on venue distance)",
    ],
    whatsappMessage:
      "Hi Shreya, I found you through your website and I'm interested in bridal makeup (Forever 52 / NARS Radiant). I'd like to check availability for my wedding date.",
    answer: {
      question: "How much does bridal makeup cost in Meerut?",
      answer:
        "Shreya Chaudhary Makeup offers Forever 52 Bridal Makeup at ₹15,000 and NARS Radiant Bridal Makeup at ₹18,000. Packages are completed with hairstyling, draping, lash styling, and zero-powered lens. Travel expenses are excluded and calculated on actuals.",
    },
    seo: {
      title: "Bridal Makeup Artist in Meerut | Shreya Chaudhary Makeup",
      description:
        "Bridal makeup in Meerut by Shreya Chaudhary Makeup: Forever 52 Bridal (₹15,000) & NARS Radiant Bridal (₹18,000). Completed with hairstyling, draping, lash, and zero-powered lens. Travel excluded.",
    },
  },
  {
    slug: "engagement-makeup",
    category: "engagement",
    name: "Engagement Makeup",
    shortName: "Engagement",
    price: 8000,
    priceLabel: "₹8,000 – ₹10,000",
    image: "/IMG_0537.JPG.jpeg",
    tagline: "A luminous, camera-ready look for the ring moment.",
    summary:
      "Engagement makeup shaped around your outfit, venue lighting, and the radiant finish you want in high-definition photographs. Available with Forever 52 Engagement (₹8,000) or NARS Radiant Engagement (₹10,000). Completed with hairstyling, draping, lash, and zero-powered lens.",
    inclusions: [
      "Forever 52 Engagement (₹8,000) / NARS Radiant Engagement (₹10,000)",
      "Full HD engagement makeup & custom lash styling",
      "Hair styling (waves/updos) on location",
      "Dupatta / outfit pinning included",
      "Zero-powered lens included",
    ],
    whatsappMessage:
      "Hi Shreya, I found you through your website and I'm interested in engagement makeup. I'd like to check availability.",
    answer: {
      question: "What is included in engagement makeup?",
      answer:
        "Engagement makeup is ₹8,000 – ₹10,000 (Forever 52 vs NARS Radiant Kit) and includes full engagement makeup, hair styling on location, draping, lashes, and zero-powered lens.",
    },
    seo: {
      title: "Engagement Makeup Artist in Meerut | Shreya Chaudhary Makeup",
      description:
        "Engagement makeup in Meerut by Shreya Chaudhary Makeup — ₹8,000 – ₹10,000 for Forever 52 or NARS Radiant Kit, completed with hairstyling, draping, and lashes. Check your date on WhatsApp.",
    },
  },
  {
    slug: "party-makeup",
    category: "party",
    name: "Party Makeup",
    shortName: "Party",
    price: 4000,
    priceLabel: "₹4,000",
    image: "/IMG_4411.JPG.jpeg",
    tagline: "Polished, occasion-ready, never overdone.",
    summary:
      "Party and wedding-guest makeup crafted for elegance and all-night wear — finished with on-location hairstyling.",
    inclusions: [
      "Full HD party glam",
      "Weightless sweat-resistant base",
      "Hair styling on location",
      "Saree / outfit pleating support",
    ],
    whatsappMessage:
      "Hi Shreya, I found you through your website and I'm interested in party makeup. I'd like to check availability.",
    answer: {
      question: "What is included in party makeup?",
      answer:
        "Party makeup is ₹4,000 and includes full party makeup with a sweat-resistant base, premium products, and on-location hair styling.",
    },
    seo: {
      title: "Party Makeup Artist in Meerut | Shreya Chaudhary Makeup",
      description:
        "Party makeup in Meerut by Shreya Chaudhary Makeup — ₹4,000 for full party makeup with sweat-resistant base and on-location hairstyling. Check your date on WhatsApp.",
    },
  },
];

export const getService = (slug: ServiceSlug) =>
  services.find((service) => service.slug === slug)!;

export const serviceByCategory = (category: PortfolioCategory) =>
  services.find((service) => service.category === category)!;

export const whyShreya = [
  {
    title: "Your vision comes first",
    body: "Bring a reference, a saved photograph or just a feeling. The look is built from what you want to see when you look in the mirror.",
  },
  {
    title: "Premium products",
    body: "Every booking is done with premium products chosen for the occasion and the finish you are after.",
  },
  {
    title: "On-location hairstyling",
    body: "Hair styling is included and done where you are getting ready, so the look is finished in one sitting.",
  },
  {
    title: "Personalised occasion looks",
    body: "Bridal, engagement and party makeup are approached differently — the outfit, venue light and photography all shape the result.",
  },
  {
    title: "Travel available",
    body: "Travel is available for bridal bookings. Share your venue and date on WhatsApp and it can be confirmed for you.",
  },
];

export const experienceSteps = [
  {
    title: "Share your event details",
    body: "Message on WhatsApp with your occasion, date and location.",
  },
  {
    title: "Discuss your desired look",
    body: "Send references or describe the finish you have in mind.",
  },
  {
    title: "Confirm availability and booking",
    body: "Your date is checked and the booking is confirmed.",
  },
  {
    title: "Get ready for your occasion",
    body: "Makeup and hairstyling on location, on schedule.",
  },
];
