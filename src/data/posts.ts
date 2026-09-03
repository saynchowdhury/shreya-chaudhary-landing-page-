export interface Post {
  slug: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  /** ISO date, e.g. "2026-09-02". */
  date: string;
  dateModified?: string;
  author: string;
  authorRole?: string;
  readingTimeMinutes?: number;
  keyTakeaways?: string[];
  /** Optional featured image URL — real photography only. */
  image?: string;
  imageAlt?: string;
  /** Body as an ordered list of blocks so articles stay structured. */
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "subheading"; text: string }
    | { type: "list"; items: string[] }
    | { type: "callout"; title: string; text: string }
  >;
  relatedServices?: Array<"bridal-makeup" | "engagement-makeup" | "party-makeup">;
  relatedLooks?: string[];
  faqs?: { question: string; answer: string }[];
}

/**
 * Journal articles. Written with deep first-hand bridal expertise — nothing thin.
 * Fully aligned with Google SEO Starter Guide: unique titles, clear heading hierarchies,
 * descriptive internal linking, and structured FAQ data.
 */
export const posts: Post[] = [
  {
    slug: "winter-bridal-makeup-trends-2026",
    title: "Winter Bridal Makeup Trends 2026: Glass Skin, Soft Glam & More",
    seoTitle: "Winter Bridal Makeup Trends 2026 | Shreya Chaudhary",
    excerpt:
      "What real brides are asking for this winter wedding season. Moving away from heavy matte layers towards a lit-from-within glow that looks incredible in person and photographs flawlessly.",
    date: "2026-09-02",
    dateModified: "2026-09-02",
    author: "Shreya Chaudhary",
    authorRole: "Principal Luxury Bridal Makeup Artist",
    readingTimeMinutes: 5,
    keyTakeaways: [
      "Winter 2026 bridal trends have pivoted away from thick, heavy matte powders toward deeply hydrated 'glass skin' finishes.",
      "Soft glam with monochromatic copper, peach, and champagne tones replaces heavy, disconnected dark smokey eyes.",
      "High flash photography and 4K video require authentic international luxury foundations (NARS, Charlotte Tilbury) to prevent flashback and creasing.",
      "Booking early is essential: North Indian winter wedding dates (Nov–Feb) across Meerut & Delhi NCR book out months in advance.",
    ],
    image: "/IMG_5032.JPG.jpeg",
    imageAlt:
      "Real bride with radiant glass skin and rose-gold halo eye makeup by Shreya Chaudhary",
    body: [
      {
        type: "paragraph",
        text: "Every winter season brings a new energy to North Indian bridal makeup. For the November 2026 to February 2027 wedding season, brides across Meerut, Noida, and Delhi NCR are requesting a profound shift: moving completely away from heavy, cakey pancake layers toward 'your skin, but perfected to royalty'.",
      },
      {
        type: "heading",
        text: "1. The Glass Skin Bridal Complexion",
      },
      {
        type: "paragraph",
        text: "Dry winter air is the number one enemy of traditional bridal makeup. In unheated banquet halls or chilly outdoor farmhouses, thick matte foundations lose moisture rapidly, settling into smile lines and appearing chalky in 4K photography. The modern standard is a multi-layer hydration prep.",
      },
      {
        type: "paragraph",
        text: "Before foundation touches your skin, I spend 20 minutes infusing deep hydration using skin-barrier serums, hyaluronic emulsions, and illuminated primers tailored to your specific undertone. The result is skin that radiates natural luminescence under both daytime daylight and evening chandeliers.",
      },
      {
        type: "heading",
        text: "2. Soft Glam & Monochromatic Harmony",
      },
      {
        type: "paragraph",
        text: "Gone are the days of harsh black cut-creases that make brides unrecognizable to their partners. Soft glam focuses on elevating your natural bone structure. Monochromatic warm copper, rose-gold, and champagne tones are blended across eyelids, cheek high-points, and lips to complement intricate zardozi and kundan jewelry without overwhelming your facial expressions.",
      },
      {
        type: "heading",
        text: "3. Camera-Ready 4K & Flashlight Longevity",
      },
      {
        type: "paragraph",
        text: "Indian weddings are high-endurance marathons lasting 12 to 16 hours — from the emotional Vidai to the late-night Pheras around the sacred fire. Achieving makeup that resists sweat, tears, and heavy velvet dupattas requires authentic formulations. I exclusively build bases using NARS Radiant Longwear, MAC, and Charlotte Tilbury Flawless setting mists to guarantee zero flashback in wedding cinematography.",
      },
      {
        type: "callout",
        title: "Dedicated Personalized Bridal Focus",
        text: "Commercial salons often book 5 to 10 brides concurrently, rushing through applications in conveyor-belt vanity rooms. At Shreya Chaudhary Makeup, you receive dedicated personalized attention, ensuring 3 full hours of unhurried luxury artistry in your private suite.",
      },
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedLooks: [
      "royal-crimson-and-gold-couture-bride",
      "antique-gold-and-ruby-editorial-engagement",
    ],
    faqs: [
      {
        question: "How long does a winter bridal makeup session take?",
        answer:
          "A complete signature bridal session takes approximately 2.5 to 3 hours. This includes 20 minutes of deep skin hydration prep, custom HD foundation application, individual lash placement, bridal hairstyle with fresh floral/mogra setting, and intricate dupatta and jewelry draping.",
      },
      {
        question: "Does glass skin bridal makeup make skin look oily in wedding photos?",
        answer:
          "No. True glass skin is achieved through cellular hydration prep and micro-milled satin powders applied strategically only to the T-zone. It produces a lit-from-within radiant sheen on the high cheekbones without any shine or greasiness under direct camera flash.",
      },
      {
        question: "When should I book my winter 2026–2027 wedding date?",
        answer:
          "Peak auspicious wedding dates in November, December, January, and February fill up 2 to 4 months in advance across Meerut and Delhi NCR venues. Early booking via WhatsApp is recommended to lock in your date.",
      },
    ],
  },
  {
    slug: "hd-vs-traditional-bridal-makeup-winter-wedding",
    title: "HD Bridal Makeup vs Traditional Makeup: Which is Best for Winter Weddings?",
    seoTitle: "HD vs Traditional Bridal Makeup Guide | Shreya Chaudhary",
    excerpt:
      "An expert comparison between modern HD bridal artistry and heavy traditional salon makeup for North Indian winter weddings. Discover why HD prevents dry patches, withstands 16-hour pheras, and photographs best in 4K.",
    date: "2026-09-02",
    dateModified: "2026-09-02",
    author: "Shreya Chaudhary",
    authorRole: "Principal Luxury Bridal Makeup Artist",
    readingTimeMinutes: 6,
    keyTakeaways: [
      "HD Makeup uses ultra-micronized pigments that melt into the skin like a natural second skin, providing deep hydration for chilly North Indian winters.",
      "Traditional heavy salon pancake makeup tends to crack, cake, and create dry patches under dry winter weather.",
      "Modern HD artistry allows custom skin prep and seamless spot-correction with zero white flashback in 4K cinematography.",
      "Shreya Chaudhary incorporates comprehensive skin prep, hairstyling, and dupatta draping in all HD bridal packages (₹15,000–₹18,000).",
    ],
    image: "/IMG_0398.JPEG",
    imageAlt:
      "Flawless luminous HD bridal complexion by Shreya Chaudhary Makeup",
    body: [
      {
        type: "paragraph",
        text: "One of the most frequent questions brides ask during bridal consultations is: 'What is the difference between modern HD bridal makeup and traditional salon makeup for winter weddings?' With so many parlours offering heavy pancake bases, brides are often worried about looking cakey or artificial on their special day.",
      },
      {
        type: "heading",
        text: "Understanding HD (High Definition) Bridal Makeup",
      },
      {
        type: "paragraph",
        text: "HD Makeup utilizes ultra-refined pigments designed not to scatter light, preventing harsh white flashback in photography. It is applied by hand using specialized density brushes and dampened Japanese beauty sponges. Because it is hand-blended, it allows an experienced artist to customize coverage: sheering out areas with beautiful natural texture while building coverage over hyperpigmentation or blemishes.",
      },
      {
        type: "paragraph",
        text: "For winter weddings in Meerut, Ghaziabad, and Noida, HD makeup is the gold standard for normal, dry, or sensitive skin. It allows rich emollient creams and nourishing serums to be pressed directly into the skin barrier, creating a supple glass-skin finish that never flakes.",
      },
      {
        type: "heading",
        text: "Why Traditional Heavy Salon Makeup Fails in Winter",
      },
      {
        type: "paragraph",
        text: "Traditional salon techniques often rely on thick greasepaint or pancake sticks designed for stage actors. While they provide full coverage, they sit heavily on the surface of the skin. In dry winter climates (November to February in North India), this heavy layer rapidly loses moisture, creating visible fine lines, cracking around smile lines, and flaking.",
      },
      {
        type: "paragraph",
        text: "Moreover, heavy traditional bases often contain high levels of mineral titanium dioxide and zinc, which reflect camera flashes aggressively — resulting in the infamous 'white mask' look in wedding photos and videos.",
      },
      {
        type: "heading",
        text: "Direct Comparison: HD vs Traditional Salon Makeup in Winter",
      },
      {
        type: "list",
        items: [
          "Longevity: Modern HD makeup lasts 14–16+ hours when set with international primers like Charlotte Tilbury and MAC.",
          "Dry Weather Hydration: HD makeup preserves skin hydration and prevents dry patches during chilly North Indian winters.",
          "Weight & Comfort: HD feels completely weightless, whereas traditional salon layers feel heavy and mask-like.",
          "4K Camera Finish: HD looks like flawless glowing skin under 4K video, while traditional bases look powdery and thick.",
          "Customization: HD permits pinpoint color-correction and custom glow placement across facial contours.",
        ],
      },
      {
        type: "callout",
        title: "The Artist's Recommendation",
        text: "The secret to long-lasting bridal beauty is meticulous skin barrier preparation combined with authentic formulations. A master artist using authentic NARS or MAC HD foundation will deliver a radiant, durable finish that feels like a natural second skin.",
      },
    ],
    relatedServices: ["bridal-makeup"],
    relatedLooks: ["royal-crimson-and-gold-couture-bride", "royal-gold-zardozi-couture-bride"],
    faqs: [
      {
        question: "Why is HD makeup superior to traditional bridal makeup?",
        answer:
          "HD makeup is formulated with microscopic pigments that mimic real skin under 4K cameras and bright lights. It provides full, flawless coverage without looking thick or cakey, while keeping the skin deeply hydrated throughout winter weddings.",
      },
      {
        question: "Will HD makeup smudge during the Pheras?",
        answer:
          "Not with Shreya Chaudhary's 16-hour lock technique. By setting HD cream foundations with micro-fine silica powders and anti-humidity finishing sprays, your makeup remains transfer-proof even around the holy fire.",
      },
      {
        question: "What are the bridal HD makeup package rates in Meerut?",
        answer:
          "At Shreya Chaudhary Makeup, Signature HD Bridal packages start at ₹15,000 (Forever 52 kit) and ₹18,000 (NARS Radiant Longwear luxury kit), inclusive of full hairstyle, premium lashes, colored lenses, and dupatta/jewelry pinning.",
      },
    ],
  },
  {
    slug: "pre-bridal-skincare-prep-timeline-winter",
    title: "The 3-Month Pre-Bridal Skincare & Prep Timeline for Winter Weddings (2026–2027)",
    seoTitle: "Pre-Bridal Skincare Prep Timeline | Shreya Chaudhary",
    excerpt:
      "The definitive week-by-week bridal skincare prep countdown for winter weddings in Meerut & NCR. How to hydrate, prep your skin barrier, and schedule treatments so your makeup glides on like glass skin.",
    date: "2026-09-02",
    dateModified: "2026-09-02",
    author: "Shreya Chaudhary",
    authorRole: "Principal Luxury Bridal Makeup Artist",
    readingTimeMinutes: 7,
    keyTakeaways: [
      "Flawless bridal makeup starts with cellular hydration 3 months prior to the wedding date.",
      "Stop introducing new active skincare ingredients (retinol, strong chemical peels) 4 weeks before the wedding.",
      "Schedule facial hair removal or professional dermaplaning 4 to 5 days before the ceremony to avoid redness and peeling.",
      "Consistent water intake (2.5–3L daily) and barrier-repair ceramides are the secret to preventing winter foundation flaking.",
    ],
    image: "/IMG_9056.JPEG",
    imageAlt: "Glowing bride with flawless skin texture and kundan jewelry by Shreya Chaudhary",
    body: [
      {
        type: "paragraph",
        text: "As a principal makeup artist who has prepped hundreds of brides across Western Uttar Pradesh and Delhi NCR, I tell every bride the same fundamental truth: makeup enhances your skin, but your skincare routine creates the canvas. Even the most expensive international luxury foundation cannot completely mask severely dehydrated or inflamed skin.",
      },
      {
        type: "heading",
        text: "Month 3: Barrier Repair & Professional Consultation",
      },
      {
        type: "paragraph",
        text: "Twelve weeks out from your wedding is the time to resolve long-standing skin concerns like hyperpigmentation, uneven texture, or active acne with a certified dermatologist. If you plan to try clinical treatments like HydraFacials or mild lactic acid peels, start now so your skin has ample time to adapt and regenerate.",
      },
      {
        type: "paragraph",
        text: "Begin prioritizing skin-barrier support: introduce ceramide-rich moisturizers and hyaluronic acid serums applied onto damp skin. Never go to sleep with dry indoor heating without a generous layer of squalane or barrier balm.",
      },
      {
        type: "heading",
        text: "Month 2: Hydration & Routine Consistency",
      },
      {
        type: "paragraph",
        text: "Eight weeks prior, lock in your daily skincare routine. Consistency is everything. Drink a minimum of 2.5 to 3 liters of water daily, incorporate seasonal fruits rich in vitamin C, and wear broad-spectrum SPF 50 sunscreen daily even on cloudy winter afternoons to prevent UV pigmentation before your outdoor functions.",
      },
      {
        type: "heading",
        text: "Month 1: The 'No New Products' Rule",
      },
      {
        type: "paragraph",
        text: "Four weeks before the wedding, institute a strict freeze on new skincare experiments. Do not try that trendy new serum recommended by a friend, and do not let local parlours talk you into aggressive 'instant glow' bleaching or heavy chemical peels that risk triggering contact dermatitis.",
      },
      {
        type: "heading",
        text: "The Final 7 Days: Smoothness & Rest",
      },
      {
        type: "list",
        items: [
          "Day 5: Schedule gentle dermaplaning or upper-lip threading so any minor skin sensitivity subsides completely.",
          "Day 3: Focus on sheet masks drenched in hyaluronic acid and calming centella asiatica.",
          "Day 1: Get 8 hours of restful sleep, avoid excessive sodium that causes morning facial puffiness, and gently exfoliate lips.",
          "Wedding Morning: Cleanse with a gentle milky cleanser, apply your regular moisturizer, and let Shreya Chaudhary handle the rest!",
        ],
      },
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedLooks: [
      "editorial-skin-texture-and-precision-eye-glam",
      "vintage-emerald-and-royal-red-editorial",
    ],
    faqs: [
      {
        question: "Should I get a facial right before my wedding day?",
        answer:
          "Never get an intensive facial within 5 days of your wedding. Facials bring hidden impurities to the surface and can trigger sudden breakouts. The ideal time for a gentle hydrating facial is 7 to 10 days before your first pre-wedding event.",
      },
      {
        question: "Should I shave my face or get dermaplaning before bridal makeup?",
        answer:
          "Yes, professional dermaplaning 4 to 5 days before your wedding removes vellus peach fuzz and dead skin cells, allowing HD luxury foundations to blend seamlessly against the skin like silk without catching on fine hairs.",
      },
      {
        question: "What should I apply on my face the morning of my bridal makeup?",
        answer:
          "Wash your face with a gentle, non-stripping cleanser and apply a light hydrating moisturizer. Avoid heavy sunscreens with zinc oxide (which causes white flash reflection) and leave all specialty primers and eye creams to Shreya Chaudhary.",
      },
    ],
  },
  {
    slug: "how-to-choose-best-bridal-makeup-artist-meerut",
    title: "How to Choose the Best Bridal Makeup Artist in Meerut (2026 Guide)",
    seoTitle: "Best Bridal Makeup Artist Meerut (2026) | Shreya Chaudhary",
    excerpt:
      "A practical guide from an insider on what you actually need to look for when booking your makeup artist for your big day in Meerut and Delhi NCR.",
    date: "2026-09-01",
    dateModified: "2026-09-02",
    author: "Shreya Chaudhary",
    authorRole: "Principal Luxury Bridal Makeup Artist",
    readingTimeMinutes: 5,
    keyTakeaways: [
      "Always verify authentic product vanity kits — ask to see MAC, NARS, and Charlotte Tilbury rather than unbranded salon mixes.",
      "Avoid conveyor-belt commercial parlours where brides are rushed through assembly-line chairs by junior trainees.",
      "Ensure on-location hotel suite convenience so you do not have to travel through wedding-day traffic in full bridal attire.",
      "Look for verified 5.0-star real bride reviews with unedited 4K portfolio photography rather than filtered smartphone portraits.",
    ],
    image: "/IMG_9054.JPEG",
    imageAlt: "Bride getting ready in luxury hotel bridal suite in Meerut with Shreya Chaudhary",
    body: [
      {
        type: "paragraph",
        text: "Booking your makeup artist is one of the most critical decisions you will make during wedding planning. Your wedding photos, cinematography, and family memories will endure for generations. Having glammed hundreds of brides across Meerut, Noida, Ghaziabad, and Delhi NCR, I want to share the exact checklist you need before transferring any deposit.",
      },
      {
        type: "heading",
        text: "1. Demand Transparency in Product Vanity",
      },
      {
        type: "paragraph",
        text: "Many commercial salons advertise 'MAC Makeup' but dilute genuine foundations with cheap local drugstore cosmetics in back rooms. An authentic luxury artist will openly showcase their kit: NARS Natural Radiant, Charlotte Tilbury Hollywood Flawless Filter, Huda Beauty, and Laura Mercier translucent powders.",
      },
      {
        type: "heading",
        text: "2. Beware the Conveyor-Belt Salon Trap",
      },
      {
        type: "paragraph",
        text: "We have all seen it: a chaotic salon where 8 to 12 brides are seated in rows, passed from one junior assistant to another for base, eyes, and hair. The lead artist only steps in for 5 minutes at the end. Your wedding day deserves peaceful sanctity. Always ask: 'Will the principal artist personally do my complete makeup from skin prep to final dupatta pin?'",
      },
      {
        type: "heading",
        text: "3. Insist on On-Location Suite Artistry (Zero Travel Surcharge)",
      },
      {
        type: "paragraph",
        text: "Navigating Meerut traffic or Delhi NCR bypasses on your wedding evening while wearing a 15-kilogram lehenga and ornate kundan jewelry is exhausting and ruins your hair setting. Shreya Chaudhary travels directly to your venue or hotel dressing suite with on-location travel included, allowing you to relax with your family until the moment you walk to the mandap.",
      },
      {
        type: "heading",
        text: "4. Ask for Unedited 4K Phone Videos, Not Filtered Portraits",
      },
      {
        type: "paragraph",
        text: "In the era of Instagram FaceTune and heavy digital blur, any makeup can look acceptable under a heavy filter. The ultimate litmus test is raw 4K phone video under natural daylight and tungsten stage lighting. Real bridal skin should exhibit soft, natural skin texture — not an artificial plastic sheet.",
      },
      {
        type: "heading",
        text: "5. Clarify What 'All-Inclusive' Actually Means",
      },
      {
        type: "paragraph",
        text: "Many salons quote ₹10,000 upfront, but charge ₹2,500 extra for lashes, ₹1,500 for colored lenses, ₹3,000 for hair extensions, and ₹2,000 for dupatta draping on the wedding day. At Shreya Chaudhary Makeup, the published price (₹15,000 Forever 52 / ₹18,000 NARS Radiant) is 100% all-inclusive with zero surprise day-of add-ons.",
      },
      {
        type: "heading",
        text: "6. Check Skin Prep & Custom Undertone Matching",
      },
      {
        type: "paragraph",
        text: "A master bridal artist never applies a generic 'fair' foundation two shades lighter than your skin. Look for an artist who custom-mixes pigments according to your neutral, warm, or golden undertones, ensuring your neck, chest, and face match flawlessly in photographs.",
      },
      {
        type: "heading",
        text: "7. Lock Your Shubh Muhurat Date Early",
      },
      {
        type: "paragraph",
        text: "Because top bridal artists in Meerut and Delhi NCR have high seasonal demand, peak winter wedding dates (November, December, January, February) book out 3 to 6 months in advance. Once you confirm your venue, locking your makeup artist should be your very next step.",
      },
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup", "party-makeup"],
    relatedLooks: [
      "retro-finger-waves-and-emerald-kundan-glam",
      "destination-bridal-suite-glam-session",
    ],
    faqs: [
      {
        question: "How do I know if an artist's vanity kit is 100% authentic?",
        answer:
          "Ask your artist during your consultation to see their working kit. Authentic luxury brands like NARS, Charlotte Tilbury, MAC, and Huda Beauty feature distinct packaging, batch codes, and formula textures. Shreya Chaudhary proudly opens her complete international vanity to every client.",
      },
      {
        question: "Which locations in Meerut and Delhi NCR are covered for on-location bridal makeup?",
        answer:
          "Shreya Chaudhary provides full on-location bridal and occasion makeup services across all Meerut banquet halls and farmhouses (Roorkee Road, Bypass, Shastri Nagar), Noida (Sectors 15–150), Greater Noida, Ghaziabad (Indirapuram, Raj Nagar Extension), and Delhi NCR.",
      },
      {
        question: "Does Shreya Chaudhary travel to venues outside Meerut?",
        answer:
          "Yes. Shreya provides on-location suite makeup across Noida, Greater Noida, Ghaziabad, Muzaffarnagar, Shamli, Delhi NCR, and destination wedding venues throughout North India with on-location travel included.",
      },
      {
        question: "Are hair styling, lashes, and dupatta draping included in the package?",
        answer:
          "Yes. Every signature bridal and engagement package includes complete luxury hair styling with floral/accessory placement, precision dupatta draping, jewelry pinning, custom lashes, and zero-powered lenses with zero hidden surcharges.",
      },
      {
        question: "What is the price difference between Forever 52 and NARS Radiant Bridal?",
        answer:
          "Forever 52 Bridal HD is ₹15,000, offering high coverage and longwear durability. NARS Radiant Luxury Bridal is ₹18,000, utilizing international prestige formulations (NARS, Charlotte Tilbury, Laura Mercier) for an ultra-weightless, lit-from-within glass skin luminosity.",
      },
    ],
  },
  {
    slug: "complete-bridal-makeup-price-guide-2026",
    title: "Complete Bridal Makeup Price Guide: Meerut & Delhi NCR (2026)",
    seoTitle: "Bridal Makeup Price Guide 2026 | Meerut & Delhi NCR",
    excerpt:
      "Transparent pricing is rare in the bridal industry. Here is exactly what you should expect to pay for premium bridal and engagement makeup services this season.",
    date: "2026-08-31",
    dateModified: "2026-09-02",
    author: "Shreya Chaudhary",
    authorRole: "Principal Luxury Bridal Makeup Artist",
    readingTimeMinutes: 5,
    keyTakeaways: [
      "Transparent pricing eliminates hidden salon charges for eyelashes, lenses, or basic dupatta draping on the wedding day.",
      "Expect ₹15,000–₹18,000 for verified 1-on-1 luxury bridal HD packages in Meerut.",
      "Engagement packages average ₹8,000–₹10,000 for glowing, camera-ready gala looks.",
      "Travel expenses outside core Meerut are calculated transparently on actual distance without surge markups.",
    ],
    image: "/IMG_4411.JPG.jpeg",
    imageAlt: "Detailed pricing menu and bridal package brochure by Shreya Chaudhary Makeup",
    body: [
      {
        type: "paragraph",
        text: "In the bridal beauty industry, price transparency is unfortunately rare. Many studios quote an artificially low base price, only to hit brides with surprise upcharges on the wedding day for eyelashes, colored lenses, hair extensions, and safety pins. At Shreya Chaudhary Makeup, I believe every bride deserves complete, honest transparency.",
      },
      {
        type: "heading",
        text: "What Real Luxury Bridal Makeup Costs in 2026",
      },
      {
        type: "paragraph",
        text: "For true 1-on-1 on-location artistry using genuine international cosmetics, expect the following investment tiers:",
      },
      {
        type: "list",
        items: [
          "Signature Bridal HD (Forever 52 Professional): ₹15,000 — includes complete HD base, hairstyle, draping, custom lashes & lenses.",
          "Luxury Bridal HD (NARS & Charlotte Tilbury): ₹18,000 — ultra-luminous glass skin, 16-hour sweat-proof lock, bespoke hair & royal veil placement.",
          "Signature Engagement & Ring Ceremony: ₹8,000 — soft glam, radiant glow, romantic waves or textured updo, outfit pleating.",
          "Luxury Engagement Gala: ₹10,000 — high-fashion evening cocktail glam with premium international formulations.",
          "Party & Sangeet Makeup: ₹4,000 — lightweight, elegant camera-ready makeover for family and bridesmaids.",
        ],
      },
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup", "party-makeup"],
    relatedLooks: [
      "rose-gold-shimmer-sangeet-and-cocktail-glam",
      "antique-gold-and-ruby-editorial-engagement",
    ],
    faqs: [
      {
        question: "Are there any hidden costs after paying the booking advance?",
        answer:
          "None. The price quoted is all-inclusive of makeup, hair, eyelashes, lenses, draping, and styling. The only variable is travel beyond Meerut city limits, which is quoted upfront based on actual distance.",
      },
      {
        question: "How do I secure my wedding date?",
        answer:
          "Dates are reserved on a first-confirmed basis with an advance deposit. Due to high seasonal demand across Meerut & Delhi NCR, reservations fill up fast for the November–February season. Message Shreya on WhatsApp to verify date availability.",
      },
    ],
  },
];

const postSlugAliases: Record<string, string> = {
  "airbrush-vs-hd-bridal-makeup-winter-wedding": "hd-vs-traditional-bridal-makeup-winter-wedding",
  "hd-vs-airbrush-bridal-makeup-comparison-guide": "hd-vs-traditional-bridal-makeup-winter-wedding",
};

export const getPost = (slug: string): Post | undefined => {
  const resolvedSlug = postSlugAliases[slug] || slug;
  return posts.find((post) => post.slug === resolvedSlug);
};
