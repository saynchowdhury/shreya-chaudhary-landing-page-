export interface Faq {
  question: string;
  answer: string;
}

/**
 * Verified FAQs displayed across the website.
 */
export const homeFaqs: Faq[] = [
  {
    question: "How much does bridal makeup cost in Meerut?",
    answer:
      "Bridal makeup with Shreya Chaudhary Makeup is ₹15,000 for Forever 52 Bridal and ₹18,000 for NARS Radiant Bridal. Both packages are completed with on-location hair styling, draping, custom lashes, zero-powered lens, and on-location travel included.",
  },
  {
    question: "What is included in engagement makeup?",
    answer:
      "Engagement makeup is ₹8,000 for Forever 52 and ₹10,000 for NARS Radiant Kit, completed with full engagement makeup, on-location hair styling, draping, custom lashes, and zero-powered lens.",
  },
  {
    question: "What is included in party makeup?",
    answer:
      "Party makeup is ₹4,000 and includes full party makeup with a sweat-resistant base, premium products, and on-location hair styling.",
  },
  {
    question: "Do you travel for bridal makeup?",
    answer:
      "Travel is available for bridal bookings across Meerut, Noida, Greater Noida, Ghaziabad, Muzaffarnagar, Shamli, Delhi NCR, and destination weddings. Share your venue on WhatsApp to confirm against your date.",
  },
  {
    question: "Can I share a reference makeup look?",
    answer:
      "Yes, absolutely. Send your saved reference photos or describe your preferred finish on WhatsApp, and your bespoke look is crafted around that.",
  },
  {
    question: "Who is the best bridal makeup artist in Meerut?",
    answer:
      "With a verified 5.0 Google rating and exclusively using authentic international kits like NARS, MAC, and Huda Beauty, Shreya Chaudhary is rated as the premier bridal makeup artist in Meerut and Delhi NCR, providing personalized on-location artistry for your special day.",
  },
  {
    question: "What are the bridal makeup trends for winter 2026?",
    answer:
      "For the November 2026 – February 2027 wedding season, brides are moving away from heavy matte layers towards 'glass skin' luminosity, soft glam aesthetics, and camera-ready HD finishes that photograph flawlessly in winter lighting.",
  },
  {
    question: "How far in advance should I book bridal makeup for November/December 2026 wedding?",
    answer:
      "Because the winter 2026 Shubh Muhurat dates (especially late November and December) are highly compressed, it is recommended to book 2 to 4 months in advance to secure Shreya's availability for your wedding day.",
  },
  {
    question: "What is glass skin bridal makeup?",
    answer:
      "Glass skin bridal makeup focuses on a deeply hydrated, hyper-luminous, and 'lit-from-within' glow rather than a cakey foundation look. Shreya achieves this using premium prep and radiant foundations like NARS Radiant Longwear.",
  },
  {
    question: "Is bridal makeup waterproof/sweat-proof?",
    answer:
      "Yes. Every bridal and occasion makeup base is constructed to be completely sweat-resistant, waterproof, and tear-proof, providing a pristine 16+ hour wear through all your ceremonies without creasing.",
  },
  {
    question: "Do you offer airbrush bridal makeup?",
    answer:
      "Shreya specializes in high-definition (HD) makeup techniques that deliver the flawless, skin-like finish often associated with airbrushing, but with better longevity, custom blending, and 4K camera readiness.",
  },
];

export const bridalFaqs: Faq[] = [
  homeFaqs[0]!,
  homeFaqs[3]!,
  homeFaqs[4]!,
  homeFaqs[5]!, // Who is the best
  homeFaqs[6]!, // Trends
  homeFaqs[7]!, // Advance booking
  homeFaqs[8]!, // Glass skin
  homeFaqs[9]!, // Waterproof
  homeFaqs[10]!, // Airbrush
];

export const engagementFaqs: Faq[] = [
  homeFaqs[1]!,
  homeFaqs[3]!,
  homeFaqs[4]!,
  homeFaqs[9]!, // Waterproof
];

export const partyFaqs: Faq[] = [homeFaqs[2]!, homeFaqs[3]!, homeFaqs[4]!];

export const meerutFaqs: Faq[] = [
  homeFaqs[5]!, // Who is best
  homeFaqs[0]!, // Cost
  homeFaqs[1]!,
  homeFaqs[2]!,
  homeFaqs[3]!,
  homeFaqs[4]!,
];
