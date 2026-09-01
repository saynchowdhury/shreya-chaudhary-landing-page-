export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-01-14". */
  date: string;
  author: string;
  /** Optional featured image URL — real photography only. */
  image?: string;
  imageAlt?: string;
  /** Body as an ordered list of blocks so articles stay structured. */
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "list"; items: string[] }
  >;
  relatedServices?: Array<"bridal-makeup" | "engagement-makeup" | "party-makeup">;
  faqs?: { question: string; answer: string }[];
}

/**
 * Journal articles. Written by hand only — nothing generated, nothing thin.
 * Add entries here and the listing, article page and Article schema follow.
 */
export const posts: Post[] = [
  {
    slug: "winter-bridal-makeup-trends-2026",
    title: "Winter Bridal Makeup Trends 2026: Glass Skin, Soft Glam & More",
    excerpt: "What real brides are asking for this winter wedding season. Moving away from heavy matte layers towards a lit from within glow that looks incredible in person and photographs flawlessly.",
    date: "2026-09-02",
    author: "Shreya Chaudhary",
    body: [
      {
        type: "paragraph",
        text: "Every winter season brings a new energy to bridal makeup. For the November 2026 to February 2027 wedding season, I am seeing a beautiful shift in what my brides want. We are completely moving away from those heavy cakey layers. Today it is all about your skin but perfected.",
      },
      {
        type: "heading",
        text: "The Glass Skin Bridal Glow",
      },
      {
        type: "paragraph",
        text: "This is the number one request I am getting right now. Winter air can be very drying, so a matte foundation often settles into fine lines and looks flat in photographs. Instead, we are focusing on deep hydration prep. I use premium moisturizers and illuminating primers before even touching foundation. The result is a hyper luminous finish where your skin looks like it is glowing from within. It is not oily, it is just deeply hydrated and radiant.",
      },
      {
        type: "heading",
        text: "Soft Glam and Monochromatic Tones",
      },
      {
        type: "paragraph",
        text: "Another massive trend is soft glam. Brides want to look like the most beautiful version of themselves, not a completely different person. We are using monochromatic tones like soft coppers, warm russets, and rosy pinks across the eyes, cheeks, and lips. This ties the whole look together seamlessly with your lehenga without any one element overpowering your face.",
      },
      {
        type: "heading",
        text: "Camera Ready HD Finishes",
      },
      {
        type: "paragraph",
        text: "Your wedding photos will last a lifetime. A big part of my job is ensuring your makeup looks just as flawless in 4K video and high flash photography as it does in person. Using authentic luxury kits like NARS Radiant Longwear and Huda Beauty allows me to build a weightless base that covers every imperfection without ever causing flashback.",
      },
      {
        type: "paragraph",
        text: "If you are planning your wedding for this winter season and these trends sound exactly like what you are looking for, I would love to be part of your big day. My bookings for November 2026 through February 2027 are currently open. I take strictly one bride per slot to give you my absolute undivided attention. Message me on WhatsApp to check your date, and let us bring your dream bridal look into reality.",
      },
    ],
    relatedServices: ["bridal-makeup"],
  },
  {
    slug: "how-to-choose-best-bridal-makeup-artist-meerut",
    title: "How to Choose the Best Bridal Makeup Artist in Meerut (2026 Guide)",
    excerpt: "A practical guide from an insider on what you actually need to look for when booking your makeup artist for your big day in Meerut and Delhi NCR.",
    date: "2026-09-01",
    author: "Shreya Chaudhary",
    body: [
      {
        type: "paragraph",
        text: "Booking your makeup artist is one of the biggest decisions you will make for your wedding. Your face is the center of attention, and you need to feel completely confident. Having worked with countless brides across Meerut, Noida, and Delhi NCR, I want to share exactly what you should look for before you pay a deposit.",
      },
      {
        type: "heading",
        text: "Check for Genuine Products",
      },
      {
        type: "paragraph",
        text: "This is non negotiable. You must ask what brands they keep in their vanity. Many salons cut corners by mixing authentic products with cheap drugstore brands. A premium finish requires premium formulas. I exclusively use international luxury cosmetics like MAC, NARS, Charlotte Tilbury, and Rare Beauty because they are formulated to last 16 hours without creasing or oxidizing.",
      },
      {
        type: "heading",
        text: "Avoid Conveyor Belt Salons",
      },
      {
        type: "paragraph",
        text: "We have all seen it. A crowded salon where brides are lined up and rushed through hair and makeup by multiple assistants. Your wedding morning should be calm and peaceful. Always ask if the artist takes multiple brides at the same time. I strictly take only one bride per slot. This means you get my complete, undivided focus from skin prep to the final dupatta draping.",
      },
      {
        type: "heading",
        text: "On Location Convenience",
      },
      {
        type: "paragraph",
        text: "Traveling to a salon in heavy wedding traffic ruins your perfectly set hair and makeup. Look for an artist who travels to your venue or hotel suite. Getting ready in your own space changes the entire vibe of the day. I provide complete on location services, bringing the luxury studio experience directly to you.",
      },
      {
        type: "paragraph",
        text: "Your wedding day is a once in a lifetime event, and you deserve an artist who treats it that way. I am currently open for bookings across Meerut and Delhi NCR for the upcoming season. If you are looking for an artist who prioritizes your vision, uses 100 percent authentic products, and provides a calm, dedicated experience, I might be the perfect fit for you. Reach out to me on WhatsApp to secure your date.",
      },
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
  },
  {
    slug: "complete-bridal-makeup-price-guide-2026",
    title: "Complete Bridal Makeup Price Guide: Meerut & Delhi NCR (2026)",
    excerpt: "Transparent pricing is rare in the bridal industry. Here is exactly what you should expect to pay for premium bridal and engagement makeup services this season.",
    date: "2026-08-31",
    author: "Shreya Chaudhary",
    body: [
      {
        type: "paragraph",
        text: "When brides message me, their first question is almost always about pricing. I completely understand this. Wedding budgets are complex, and the lack of transparency in the makeup industry makes it even harder. Salons often quote a low base price and then add hidden charges for lashes, lenses, or draping on the actual day. I believe in complete transparency.",
      },
      {
        type: "heading",
        text: "What Premium Bridal Makeup Actually Costs",
      },
      {
        type: "paragraph",
        text: "For a top tier makeup artist using authentic international products, you should expect to invest between 15,000 and 18,000 Rupees in the Meerut and Delhi NCR region. Anything significantly cheaper usually means the artist is compromising on product quality or booking multiple brides at the exact same time.",
      },
      {
        type: "heading",
        text: "My Transparent Packages",
      },
      {
        type: "list",
        items: [
          "Forever 52 Bridal Makeup is 15,000 Rupees. This includes full HD makeup, custom lash styling, on location hair styling, jewelry draping, and zero powered lenses.",
          "NARS Radiant Bridal Makeup is 18,000 Rupees. This uses the ultra premium NARS Radiant Longwear base for a hyper luminous, flawless 4K finish, alongside all the styling inclusions.",
          "Engagement Makeup ranges from 8,000 to 10,000 Rupees, ensuring a camera ready glow for your ring ceremony.",
          "Party and Reception Makeup is 4,000 Rupees for a sweat proof, elegant all night wear look."
        ],
      },
      {
        type: "heading",
        text: "The Value of Peace of Mind",
      },
      {
        type: "paragraph",
        text: "When you book my services, the price you are quoted is the price you pay. Hair styling, draping, and high quality lashes are always included because they are essential to completing the look. The only variable is travel expenses, which are calculated on actuals depending on your specific venue.",
      },
      {
        type: "paragraph",
        text: "I am taking bookings right now for the 2026 and 2027 wedding seasons. If you appreciate upfront pricing, authentic luxury products, and a dedicated one on one bridal experience, I would love to be your makeup artist. Message me on WhatsApp to check your date and let us start planning your flawless look.",
      },
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup", "party-makeup"],
  }
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
