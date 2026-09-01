export interface Testimonial {
  id: string;
  name: string;
  service: string;
  category: "bridal" | "engagement" | "party";
  location: string;
  quote: string;
  rating: number;
  date: string;
  verified: boolean;
  badge: string;
  avatarBg: string;
  likesCount?: number;
  googleProfileReviews?: number;
}

/**
 * 100% Real, Authentic Client Reviews from Shreya Chaudhary Makeup Google Business Profile:
 * https://share.google/0MU1hPOtXvFMT4SeZ
 */
export const testimonials: Testimonial[] = [
  {
    id: "review-ankita",
    name: "Ankita Anand",
    service: "Bridal Makeup",
    category: "bridal",
    location: "Meerut",
    rating: 5,
    date: "7 weeks ago · Google Verified",
    verified: true,
    avatarBg: "bg-[#E91E63]",
    badge: "5.0 ★ Google Review",
    likesCount: 15,
    googleProfileReviews: 2,
    quote:
      "Thank you 💖 💖 Shreya Ma’am for making me look and feel absolutely beautiful on my wedding day. She is incredibly talented, humble, and professional. She understood my preferences perfectly and created a flawless bridal look that enhanced my natural beauty without making it look overdone. The makeup stayed fresh throughout the entire day, and I received endless compliments from everyone. Her calm nature and attention to detail made the whole experience stress-free and enjoyable. I highly recommend Shreya Ma’am to every bride looking for a stunning, elegant, and long-lasting bridal makeover. Thank you for making my special day even more memorable!",
  },
  {
    id: "review-aishwarya",
    name: "Aishwarya Chauhan",
    service: "Bridal Makeup",
    category: "bridal",
    location: "Meerut",
    rating: 5,
    date: "23 weeks ago · Google Verified",
    verified: true,
    avatarBg: "bg-[#9C27B0]",
    badge: "5.0 ★ Google Review",
    likesCount: 16,
    googleProfileReviews: 2,
    quote:
      "I trusted her for one of the most important day of my life and it all went so beautifully and I really enjoyed it. The make up was so on point, the glow was amazing. I felt so pretty and really enjoyed the whole process. Thank you so much for creating such a magic. Everyone appreciated so much even after the wedding the compliments I have received are amazing. 😇💖🥰",
  },
  {
    id: "review-nicola",
    name: "Nicola Cleary",
    service: "Bridal, Haldi & Mehndi Makeup",
    category: "bridal",
    location: "Delhi NCR / Meerut",
    rating: 5,
    date: "27 weeks ago · Google Verified",
    verified: true,
    avatarBg: "bg-[#3F51B5]",
    badge: "5.0 ★ Google Review",
    likesCount: 22,
    googleProfileReviews: 8,
    quote:
      "Shreya did my bridal look, and haldi mehndi makeup for myself and my family. It was beyond my expectations, just perfect and lasted even 48 hours! She was so friendly, warm, professional and INSANELY talented at what she does. I cannot recommend her enough 💖 thank you so much for making me feel so special and looking the best I ever could imagine on this special day 🙏🥰",
  },
  {
    id: "review-niamh",
    name: "Niamh Cleary",
    service: "Bridal Party & Saree Draping",
    category: "party",
    location: "Delhi NCR",
    rating: 5,
    date: "18 weeks ago · Google Verified",
    verified: true,
    avatarBg: "bg-[#FF5722]",
    badge: "5.0 ★ Google Review",
    likesCount: 14,
    googleProfileReviews: 2,
    quote:
      "I can’t recommend Shreya enough! She did the makeup for my sister (the bride), myself, my other sister, and my mam for an Indian wedding. She took the time to understand each of our styles and preferences, and the makeup looks were stunning. My sister looked gorgeous on her big day. A special mention also goes to her lovely mam, who helped us with our sarees. It made such a difference having her there to guide us and make sure everything was draped perfectly. Together, they made the whole experience feel calm, organised, and enjoyable! Thank you both for making us feel so special!",
  },
  {
    id: "review-jenny",
    name: "Jenny Cleary",
    service: "Occasion & Party Glam",
    category: "party",
    location: "Delhi NCR",
    rating: 5,
    date: "18 weeks ago · Google Verified",
    verified: true,
    avatarBg: "bg-[#009688]",
    badge: "5.0 ★ Google Review",
    likesCount: 12,
    googleProfileReviews: 13,
    quote:
      "Shreya was so lovely and friendly and made me feel very at ease. My makeup looked flawless 🤩 I was very happy with it. I would highly recommend her",
  },
  {
    id: "review-megha",
    name: "Megha Kushwaha",
    service: "Bridal Makeup & Hair Styling",
    category: "bridal",
    location: "Meerut",
    rating: 5,
    date: "41 weeks ago · Google Verified",
    verified: true,
    avatarBg: "bg-[#E65100]",
    badge: "5.0 ★ Google Review",
    likesCount: 18,
    googleProfileReviews: 2,
    quote:
      "Hi Shreya ma’am, thank you so much for giving me the prettiest look on my big day. 💖💖 I received so many compliments on my makeup, hair, and overall look. You made me feel like the most confident bride!",
  },
];
