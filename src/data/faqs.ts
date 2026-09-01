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
      "Bridal makeup with Shreya Chaudhary Makeup is ₹15,000 for Forever 52 Bridal and ₹18,000 for NARS Radiant Bridal. Both packages are completed with on-location hair styling, draping, custom lashes, and zero-powered lens. Travel expenses are excluded and calculated on actuals.",
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
];

export const bridalFaqs: Faq[] = [
  homeFaqs[0]!,
  homeFaqs[3]!,
  homeFaqs[4]!,
];

export const engagementFaqs: Faq[] = [
  homeFaqs[1]!,
  homeFaqs[3]!,
  homeFaqs[4]!,
];

export const partyFaqs: Faq[] = [
  homeFaqs[2]!,
  homeFaqs[3]!,
  homeFaqs[4]!,
];

export const meerutFaqs: Faq[] = [
  homeFaqs[0]!,
  homeFaqs[1]!,
  homeFaqs[2]!,
  homeFaqs[3]!,
  homeFaqs[4]!,
];
