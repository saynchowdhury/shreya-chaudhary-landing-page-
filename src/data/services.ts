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
    priceLabel: "₹15,000",
    image: "/IMG_5032.JPG.jpeg",
    tagline: "The bride's vision comes first.",
    summary:
      "A bespoke bridal look built around the dream makeup you envision for your wedding day, with luxury skincare prep, hairstyling, and draping on location.",
    inclusions: [
      "Full HD 3D bridal makeup",
      "Luxury international vanity (NARS, MAC, Huda)",
      "Hair styling & floral/veil setting on location",
      "Dupatta & jewelry draping included",
    ],
    whatsappMessage:
      "Hi Shreya, I found you through your website and I'm interested in bridal makeup. I'd like to check availability for my wedding date.",
    answer: {
      question: "How much does bridal makeup cost in Meerut?",
      answer:
        "Shreya Chaudhary Makeup's bridal makeup package is ₹15,000 and includes full bridal makeup, premium products, on-location hairstyling and travel availability.",
    },
    seo: {
      title: "Bridal Makeup Artist in Meerut | Shreya Chaudhary Makeup",
      description:
        "Bridal makeup in Meerut by Shreya Chaudhary Makeup. Full bridal makeup, premium products, on-location hairstyling and travel availability. Check your wedding date on WhatsApp.",
    },
  },
  {
    slug: "engagement-makeup",
    category: "engagement",
    name: "Engagement Makeup",
    shortName: "Engagement",
    price: 8000,
    priceLabel: "₹8,000",
    image: "/IMG_0537.JPG.jpeg",
    tagline: "A luminous, camera-ready look for the ring moment.",
    summary:
      "Engagement makeup shaped around your outfit, venue lighting, and the radiant glass finish you want in high-definition photographs.",
    inclusions: [
      "Full HD engagement makeup",
      "Hydrated glass-skin base & custom lip blend",
      "Hair styling (waves/updos) on location",
      "Dupatta / outfit pinning included",
    ],
    whatsappMessage:
      "Hi Shreya, I found you through your website and I'm interested in engagement makeup. I'd like to check availability.",
    answer: {
      question: "What is included in engagement makeup?",
      answer:
        "Engagement makeup is ₹8,000 and includes full engagement makeup, premium products and hair styling on location.",
    },
    seo: {
      title: "Engagement Makeup Artist in Meerut | Shreya Chaudhary Makeup",
      description:
        "Engagement makeup in Meerut by Shreya Chaudhary Makeup — ₹8,000 for full engagement makeup, premium products and on-location hairstyling. Check your date on WhatsApp.",
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
      "Party, sangeet, cocktail, and wedding-guest makeup crafted for elegance and all-night wear — finished with on-location hairstyling.",
    inclusions: [
      "Full HD party glam",
      "Weightless sweatproof base",
      "Hair styling on location",
      "Saree / outfit pleating support",
    ],
    whatsappMessage:
      "Hi Shreya, I found you through your website and I'm interested in party makeup. I'd like to check availability.",
    answer: {
      question: "What is included in party makeup?",
      answer:
        "Party makeup is ₹4,000 and includes full party makeup, premium products and hair styling on location.",
    },
    seo: {
      title: "Party Makeup Artist in Meerut | Shreya Chaudhary Makeup",
      description:
        "Party makeup in Meerut by Shreya Chaudhary Makeup — ₹4,000 for full party makeup, premium products and on-location hairstyling. Check your date on WhatsApp.",
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
