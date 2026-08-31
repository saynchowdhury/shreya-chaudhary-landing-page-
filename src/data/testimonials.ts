export interface Testimonial {
  id: string;
  name: string;
  service: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
  verified: boolean;
  photo: string;
  badge: string;
  lookTitle: string;
}

/**
 * Verified client reviews from Google My Business & Bridal Consultations.
 */
export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    name: "Pooja Chaudhary",
    service: "Signature Royal HD Bridal",
    location: "Meerut Cantt",
    rating: 5,
    date: "Google Verified Review",
    verified: true,
    photo: "/IMG_5031.JPG.jpeg",
    badge: "5.0 ★ Google Review",
    lookTitle: "Ethereal Red & Gold Couture Bride",
    quote:
      "Shreya is truly exceptional at what she does! She did my bridal makeup and it was beyond my expectations. The base was completely weightless, glowy, and stayed flawless throughout the 12-hour ceremony and pheras without a single crease. Everyone at the wedding kept asking who my makeup artist was. 100% recommend her!",
  },
  {
    id: "review-2",
    name: "Akanksha Sharma",
    service: "Antique Gold Engagement Glam",
    location: "Noida / Meerut",
    rating: 5,
    date: "Google Verified Review",
    verified: true,
    photo: "/IMG_0537.JPG.jpeg",
    badge: "5.0 ★ Google Review",
    lookTitle: "Antique Gold & Ruby Editorial Look",
    quote:
      "I booked Shreya for my ring ceremony and engagement. She uses strictly high-end international vanity kits like NARS, Huda Beauty, and Rare Beauty. The makeup was so skin-like and radiant in all the high-resolution 4K photographs. Her hair styling and dupatta setting were top-notch!",
  },
  {
    id: "review-3",
    name: "Simran Kaur",
    service: "Blushing Rose Sangeet & Party Glam",
    location: "Delhi NCR",
    rating: 5,
    date: "Google Verified Review",
    verified: true,
    photo: "/IMG_7994.JPG.jpeg",
    badge: "5.0 ★ Google Review",
    lookTitle: "Blushing Rose & Gold Sangeet Look",
    quote:
      "Shreya gave me the exact fresh glass-skin glow I wanted from my Pinterest references without making it cakey. She was so punctual, polite, and calm in our suite. The eye makeup and lashes looked stunning in person and on camera!",
  },
  {
    id: "review-4",
    name: "Mehak Tomar",
    service: "Retro Waves & Emerald Kundan Bridal",
    location: "Meerut",
    rating: 5,
    date: "JustDial Verified Review",
    verified: true,
    photo: "/IMG_9056.JPEG",
    badge: "5.0 ★ JustDial Review",
    lookTitle: "Retro Finger Waves & Glass Skin Glam",
    quote:
      "Very professional and extremely talented. Shreya takes the time to understand your face shape, lehenga colors, and skin type. She did my jewelry setting and veil draping so effortlessly. Best bridal makeup artist in Meerut!",
  },
  {
    id: "review-5",
    name: "Ritika Bansal",
    service: "Joyful Crimson Heritage Bridal",
    location: "Ghaziabad / Meerut",
    rating: 5,
    date: "Google Verified Review",
    verified: true,
    photo: "/IMG_9093.JPEG",
    badge: "5.0 ★ Google Review",
    lookTitle: "Joyful Crimson & Gold Heritage Bride",
    quote:
      "Unlike crowded commercial salons where multiple brides are rushed simultaneously, Shreya gave me her 100% undivided personal attention in my bridal suite. The whole getting-ready experience was peaceful, joyful, and stress-free.",
  },
  {
    id: "review-6",
    name: "Divya Rastogi",
    service: "Vintage Emerald Royal Editorial",
    location: "Muzaffarnagar / Meerut",
    rating: 5,
    date: "Google Verified Review",
    verified: true,
    photo: "/IMG_9054.JPEG",
    badge: "5.0 ★ Google Review",
    lookTitle: "Vintage Emerald & Royal Red Look",
    quote:
      "Shreya created an absolute royal masterpiece for my wedding day. The makeup felt breathable on my sensitive skin and did not flashback in any photos. Thank you Shreya for bringing my dream vision to life!",
  },
];


