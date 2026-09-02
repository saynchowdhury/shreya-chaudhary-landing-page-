/**
 * Central business facts. Edit here — never inline in components.
 * Only verified information belongs in this file.
 */

export const business = {
  name: "Shreya Chaudhary Makeup",
  artist: "Shreya Chaudhary",
  profession: "Makeup Artist",
  promise: "Your vision, I bring into reality.",
  city: "Meerut",
  state: "Uttar Pradesh",
  country: "India",
  countryCode: "IN",
  /** WhatsApp number in international format, digits only. */
  whatsapp: "917003781618",
  whatsappDisplay: "+91 70037 81618",
  instagramHandle: "@shreyachaudharymakeup",
  instagramUrl: "https://www.instagram.com/shreyachaudharymakeup/?hl=en",
  /** Google My Business listing & review link */
  googleMyBusinessUrl: "https://share.google/0MU1hPOtXvFMT4SeZ",
  /** JustDial verified directory profile */
  justdialUrl:
    "https://www.justdial.com/Meerut/Shreya-Chaudhary-Makeup-Konark-Colony/9999PX121-X121-241211201125-I7A2_BZDET",
  /** WedMeGood verified bridal profile */
  wedmegoodUrl:
    "https://www.wedmegood.com/profile/Shreya-Chaudhary-Makeup-26084368?srsltid=AfmBOorAgYkTo4U1FYxSvwviYs8rtlHYzQvNByrR76SU-0v_NY6XELoX",
  rating: "5.0",
  ratingText: "5.0 ★ Top Rated",
  addressStreet: "Roorkee Road, Konark Colony",
  addressFull: "Roorkee Road, Konark Colony, Meerut, Uttar Pradesh 250001",
  openingHours: "Mo-Su 10:00-21:00",
  /** Primary served areas */
  serviceAreas: [
    "Meerut",
    "Noida",
    "Muzaffarnagar",
    "Ghaziabad",
    "Greater Noida",
    "Shamli",
    "Delhi NCR",
    "Destination Weddings",
  ],
  /** Editable note. Update once the exact engagement offer is confirmed. */
  engagementBenefitNote: "Ask about our engagement booking benefits and available add-ons.",
  pricingNote:
    "Published prices exclude on-location travel expenses. Travel charges are calculated on actuals based on venue distance.",
} as const;

export const locationLabel = `${business.city}, ${business.state}`;
