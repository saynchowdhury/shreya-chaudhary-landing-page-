export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: "How much does bridal makeup cost in Meerut?",
    answer:
      "Bridal makeup with Shreya Chaudhary Makeup is ₹15,000. It includes full bridal makeup, premium products, hair styling on location and travel availability.",
  },
  {
    question: "What is included in the ₹15,000 bridal makeup package?",
    answer:
      "Full bridal makeup, premium products, hair styling done at your location, and travel availability for the booking.",
  },
  {
    question: "What is included in engagement makeup?",
    answer:
      "Engagement makeup is ₹8,000 and covers full engagement makeup, premium products and hair styling on location.",
  },
  {
    question: "What is included in party makeup?",
    answer:
      "Party makeup is ₹4,000 and covers full party makeup, premium products and hair styling on location.",
  },
  {
    question: "Does bridal makeup include hairstyling?",
    answer:
      "Yes. Hair styling is part of the bridal package and is done on location while you get ready.",
  },
  {
    question: "Is hairstyling available on location?",
    answer:
      "Hair styling on location is included with bridal, engagement and party makeup, so the whole look is finished in one sitting.",
  },
  {
    question: "Do you travel for bridal makeup?",
    answer:
      "Travel is available for bridal bookings. Share your venue on WhatsApp and it can be confirmed against your date.",
  },
  {
    question: "How can I check availability for my wedding date?",
    answer:
      "Message on WhatsApp with your date, occasion and location. Availability is confirmed directly in that conversation.",
  },
  {
    question: "How early should I book my makeup artist?",
    answer:
      "As soon as your date is fixed. Wedding-season dates fill first, so an early WhatsApp message gives you the best chance of holding your date.",
  },
  {
    question: "Can I share a reference makeup look?",
    answer:
      "Yes, and it helps. Send saved photographs or describe the finish you want, and the look is built around that.",
  },
  {
    question: "Which products do you use?",
    answer:
      "Premium products are used for every booking, selected for the occasion and the finish you are after. Ask on WhatsApp about the products planned for your look.",
  },
  {
    question: "Do you offer engagement and party makeup?",
    answer:
      "Yes — engagement makeup is ₹8,000 and party makeup is ₹4,000, both with premium products and on-location hair styling.",
  },
  {
    question: "How do I book through WhatsApp?",
    answer:
      "Tap any 'Check availability on WhatsApp' button on this website. It opens a chat with your enquiry already written, and you only add your date and location.",
  },
];

export const bridalFaqs: Faq[] = [
  homeFaqs[0]!,
  homeFaqs[1]!,
  homeFaqs[4]!,
  homeFaqs[6]!,
  homeFaqs[9]!,
  homeFaqs[8]!,
];

export const engagementFaqs: Faq[] = [
  homeFaqs[2]!,
  homeFaqs[5]!,
  homeFaqs[7]!,
  homeFaqs[9]!,
];

export const partyFaqs: Faq[] = [homeFaqs[3]!, homeFaqs[5]!, homeFaqs[7]!, homeFaqs[12]!];

export const meerutFaqs: Faq[] = [
  homeFaqs[0]!,
  homeFaqs[2]!,
  homeFaqs[3]!,
  homeFaqs[6]!,
  homeFaqs[7]!,
  homeFaqs[8]!,
];
