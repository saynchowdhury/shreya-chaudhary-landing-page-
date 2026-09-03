export type FaqCategory = "pricing" | "services" | "booking" | "technique" | "skincare";

export interface Faq {
  question: string;
  answer: string;
  slug?: string;
  category?: FaqCategory;
  categoryLabel?: string;
  seoTitle?: string;
  seoDescription?: string;
  detailedAnswer?: string[];
  proTip?: string;
  relatedFaqs?: string[];
  relatedServices?: string[];
  relatedGlossaryTerms?: string[];
}

/**
 * Master Standalone FAQs Dataset with rich editorial content for dedicated pages.
 */
export const masterFaqs: (Faq & { slug: string; category: FaqCategory; categoryLabel: string })[] = [
  {
    slug: "bridal-makeup-cost-meerut",
    category: "pricing",
    categoryLabel: "Pricing & Packages",
    question: "How much does bridal makeup cost in Meerut?",
    answer:
      "Bridal makeup with Shreya Chaudhary Makeup is ₹15,000 for Forever 52 Bridal and ₹18,000 for NARS Radiant Bridal. Both packages are completed with on-location hair styling, draping, custom lashes, zero-powered lens, and on-location travel included.",
    seoTitle: "Bridal Makeup Cost in Meerut (2026 Prices) | Shreya Chaudhary",
    seoDescription:
      "Full transparent breakdown of bridal makeup prices in Meerut & Delhi NCR. Signature HD packages from ₹15,000 to ₹18,000 with hair, draping, and lashes included.",
    detailedAnswer: [
      "In Meerut and the greater Delhi NCR region, bridal makeup pricing typically ranges from ₹10,000 in local neighbourhood salons to upwards of ₹35,000 for celebrity studio artists. However, lower quotes frequently hide unexpected day-of surcharges for lashes, lens insertion, floral placement, and dupatta draping.",
      "At Shreya Chaudhary Makeup, pricing is 100% transparent and all-inclusive. You choose between two verified luxury tiers based on your skin preference and cosmetic vanity:",
      "1. Signature Bridal HD (Forever 52 Professional Kit): ₹15,000. Provides complete high-definition coverage, sweat-proof base, premium false eyelashes, colored lenses, bridal hairstyle, floral accessory pinning, and precision dupatta draping.",
      "2. Luxury Bridal HD (NARS Radiant & Charlotte Tilbury Kit): ₹18,000. Features international prestige cosmetics for a weightless, hyper-luminous glass skin finish with 16-hour tear-proof seal and zero flashback under 4K video lighting.",
      "Both packages include on-location artistry directly in your private venue suite across Meerut with on-location travel included. Travel to outstation destinations (Noida, Ghaziabad, Muzaffarnagar) is billed transparently at actual distance with zero surge markups."
    ],
    proTip:
      "Always ask if hair styling, eyelashes, and dupatta draping are bundled into the quoted price. At Shreya Chaudhary Makeup, the published price is 100% all-inclusive with zero surprise fees.",
    relatedFaqs: [
      "what-is-the-difference-between-forever52-and-nars-bridal",
      "what-is-included-in-engagement-makeup",
      "do-you-travel-for-bridal-makeup"
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedGlossaryTerms: ["hd-bridal-makeup", "flashback-free-base", "dupatta-draping-pinning"]
  },
  {
    slug: "what-is-the-difference-between-forever52-and-nars-bridal",
    category: "pricing",
    categoryLabel: "Pricing & Packages",
    question: "What is the difference between Forever 52 and NARS Radiant Bridal packages?",
    answer:
      "Forever 52 Bridal (₹15,000) provides dependable, high-coverage matte/satin HD wear. NARS Radiant Bridal (₹18,000) uses prestige international formulas (NARS, Charlotte Tilbury, Laura Mercier) for a weightless, lit-from-within glass skin luminosity that feels like second skin.",
    seoTitle: "Forever 52 vs NARS Bridal Makeup Comparison | Shreya Chaudhary",
    seoDescription:
      "Understand the difference between Forever 52 HD and NARS Radiant luxury bridal makeup packages in Meerut. Coverage, longevity, and vanity kit comparison.",
    detailedAnswer: [
      "Both packages are executed by Shreya Chaudhary personally with identical attention to detail, complete hairstyle, lashes, lenses, and dupatta pinning. The primary difference lies in the cosmetic formulation and finish on the skin.",
      "Forever 52 Professional HD (₹15,000) is a pro-grade kit celebrated for high pigmentation and solid full coverage. It creates a flawless, velvety matte-to-satin finish that conceals significant unevenness or acne scarring effortlessly.",
      "NARS Radiant Luxury Bridal (₹18,000) utilizes world-class prestige cosmetics from NARS, Charlotte Tilbury, and Laura Mercier. These formulas contain light-refracting micro-pearls that mirror natural skin radiance. It feels completely weightless, delivers a lit-from-within glass glow, and is especially recommended for brides desiring an editorial, ultra-natural luxury finish.",
      "Both kits are guaranteed 100% authentic, unadulterated, and tested for zero white flashback under 4K photography flash."
    ],
    proTip:
      "If your wedding is during the chilly winter months (November–February) and your skin tends toward normal or dry, NARS Radiant is the gold standard for continuous hydration and supple glow.",
    relatedFaqs: [
      "bridal-makeup-cost-meerut",
      "what-is-glass-skin-bridal-makeup",
      "what-makeup-techniques-does-shreya-specialize-in"
    ],
    relatedServices: ["bridal-makeup"],
    relatedGlossaryTerms: ["glass-skin", "hd-bridal-makeup", "undertone-matching"]
  },
  {
    slug: "what-is-included-in-engagement-makeup",
    category: "services",
    categoryLabel: "Services & Inclusions",
    question: "What is included in engagement makeup?",
    answer:
      "Engagement makeup is ₹8,000 for Forever 52 and ₹10,000 for NARS Radiant Kit, completed with full engagement makeup, on-location hair styling, draping, custom lashes, and zero-powered lens.",
    seoTitle: "What is Included in Engagement Makeup? | Shreya Chaudhary",
    seoDescription:
      "Detailed checklist of engagement & roka makeup inclusions by Shreya Chaudhary in Meerut & NCR. Hair, draping, lashes, and soft glam packages from ₹8,000.",
    detailedAnswer: [
      "Your Engagement, Ring Ceremony, or Roka is the grand prelude to your wedding celebrations. Unlike traditional bridal looks that emphasize deep crimson traditions, engagement artistry embraces modern romanticism: pastel lehengas, evening gowns, illuminated soft glam, and cascading hairstyles.",
      "Every Engagement package with Shreya Chaudhary includes:",
      "• Complete Skin Prep: Ultrasonic cleansing, botanical toners, and barrier-repair emollient priming.",
      "• 16-Hour Camera-Ready HD Base: Customized undertone color matching that never oxidizes or creases.",
      "• Eye Artistry: Romantic rose-gold or bronze halo eyes, soft smoked liners, and weightless false lashes.",
      "• Couture Hair Styling: Hollywood waves, romantic textured half-updos, or sleek modern buns with floral/accessory pinning.",
      "• Outfit Draping: Precision saree, lehenga, or modern pre-pleated dupatta pinning.",
      "• Colored Lenses: Complimentary zero-powered cosmetic lenses to enhance eye depth in photographs."
    ],
    proTip:
      "Coordinate your lip and eye tones with your engagement outfit embroidery rather than matching the exact base fabric color. Monochromatic rose or champagne tones create an effortless couture vibe.",
    relatedFaqs: [
      "bridal-makeup-cost-meerut",
      "what-is-included-in-party-makeup",
      "can-i-share-a-reference-makeup-look"
    ],
    relatedServices: ["engagement-makeup", "bridal-makeup"],
    relatedGlossaryTerms: ["soft-glam", "halo-eye", "monochromatic-bridal-palette"]
  },
  {
    slug: "what-is-included-in-party-makeup",
    category: "services",
    categoryLabel: "Services & Inclusions",
    question: "What is included in party makeup?",
    answer:
      "Party makeup is ₹4,000 and includes full party makeup with a sweat-resistant base, premium products, and on-location hair styling.",
    seoTitle: "Party Makeup Inclusions & Prices Meerut | Shreya Chaudhary",
    seoDescription:
      "Everything included in party, sangeet, and bridesmaid makeup by Shreya Chaudhary in Meerut. Sweat-resistant base and luxury hair styling for ₹4,000.",
    detailedAnswer: [
      "Party and guest makeup with Shreya Chaudhary is tailored for sisters of the bride, mothers, and gala attendees who want to look radiantly polished without looking over-draped or artificial.",
      "Priced at ₹4,000 flat, the service includes:",
      "• Long-lasting skin prep suited to your individual skin type.",
      "• Lightweight HD foundation and spot concealer blending.",
      "• Elegant eye glam suited to evening or daytime festivities.",
      "• On-location hair styling (blowouts, loose waves, or structured neat buns).",
      "• Professional setting mist to ensure 10+ hour sweat and humidity resistance on the dance floor."
    ],
    proTip:
      "Book party makeup slots simultaneously with your bridal booking so the entire bridal party's schedule runs smoothly on the wedding evening.",
    relatedFaqs: [
      "what-is-included-in-engagement-makeup",
      "do-you-travel-for-bridal-makeup",
      "how-far-in-advance-to-book-bridal-makeup"
    ],
    relatedServices: ["party-makeup", "engagement-makeup"],
    relatedGlossaryTerms: ["soft-glam", "sweat-proof-humidity-lock"]
  },
  {
    slug: "do-you-travel-for-bridal-makeup",
    category: "booking",
    categoryLabel: "Booking & Logistics",
    question: "Do you travel for bridal makeup?",
    answer:
      "Travel is available for bridal bookings across Meerut, Noida, Greater Noida, Ghaziabad, Muzaffarnagar, Shamli, Delhi NCR, and destination weddings. Share your venue on WhatsApp to confirm against your date.",
    seoTitle: "On-Location Bridal Makeup Travel Coverage | Shreya Chaudhary",
    seoDescription:
      "Does Shreya Chaudhary travel to your wedding venue? Full details on suite travel across Meerut, Noida, Ghaziabad, Delhi NCR, and destination resorts.",
    detailedAnswer: [
      "Yes. Shreya Chaudhary operates on an exclusively on-location suite model. On your wedding day, traveling to a commercial salon through heavy city traffic while carrying your heavy bridal lehenga and precious jewelry adds unnecessary exhaustion and risks ruining your hair setting.",
      "Instead, Shreya and her executive styling kit travel directly to your home dressing room, hotel suite, banquet venue, or farmhouse across:",
      "• Meerut (Roorkee Road, Bypass, Shastri Nagar, Cantt, Modipuram, Delhi Road).",
      "• Noida & Greater Noida (Sectors 15 to 150, Expressways, Pari Chowk resorts).",
      "• Ghaziabad (Indirapuram, Raj Nagar Extension, Vasundhara, Crossings Republik).",
      "• Western UP (Muzaffarnagar, Shamli, Hapur, Bulandshahr).",
      "• Destination Weddings (Jaipur, Udaipur, Jim Corbett, Dehradun, Mussoorie).",
      "Travel within core Meerut is completely included. Outstation travel expenses are calculated transparently based on actual distance with zero artificial surge markups."
    ],
    proTip:
      "Reserve a well-lit room in your venue suite with minimum 2 operational electrical sockets and air-conditioning/heating for the calmest getting-ready experience.",
    relatedFaqs: [
      "how-far-in-advance-to-book-bridal-makeup",
      "bridal-makeup-cost-meerut",
      "who-is-the-best-bridal-makeup-artist-in-meerut"
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedGlossaryTerms: ["on-location-suite-artistry"]
  },
  {
    slug: "can-i-share-a-reference-makeup-look",
    category: "technique",
    categoryLabel: "Artistry & Techniques",
    question: "Can I share a reference makeup look?",
    answer:
      "Yes, absolutely. Send your saved reference photos or describe your preferred finish on WhatsApp, and your bespoke look is crafted around that.",
    seoTitle: "Can I Share Reference Makeup Photos? | Shreya Chaudhary",
    seoDescription:
      "How Shreya Chaudhary customizes Pinterest and Instagram reference looks for your unique skin tone, eye shape, and bridal lehenga.",
    detailedAnswer: [
      "Brides are strongly encouraged to share reference images from Pinterest, Instagram, or Shreya's own lookbook during pre-booking consultations on WhatsApp.",
      "However, a master bridal artist doesn't simply photocopy a photo from the internet. Instead, Shreya analyzes:",
      "1. Facial Anatomy & Eye Shape: Adapting winged liner, cut-creases, or halo placements to flatter your specific lid space without making hooded eyes appear smaller.",
      "2. Skin Undertone & Pigmentation: Translating a lip or blush color to harmonize seamlessly with your warm, cool, or neutral undertone.",
      "3. Lighting Context: Adjusting pigment reflectivity whether your mandap is outdoor daytime lawn lighting or indoor warm tungsten stage illumination.",
      "The result is a look inspired by your aesthetic vision, but tailored so you look like the most radiant, authentic version of yourself."
    ],
    proTip:
      "Save 2 to 3 photos of makeup finishes you love and 1 photo of what you definitely want to avoid (e.g., 'no thick black lower waterline'). Negative references are remarkably helpful!",
    relatedFaqs: [
      "what-is-glass-skin-bridal-makeup",
      "what-makeup-techniques-does-shreya-specialize-in",
      "winter-bridal-makeup-trends-2026"
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedGlossaryTerms: ["undertone-matching", "cut-crease", "halo-eye"]
  },
  {
    slug: "who-is-the-best-bridal-makeup-artist-in-meerut",
    category: "booking",
    categoryLabel: "Booking & Logistics",
    question: "Who is the best bridal makeup artist in Meerut?",
    answer:
      "With a verified 5.0 Google rating and exclusively using authentic international kits like NARS, MAC, and Huda Beauty, Shreya Chaudhary is rated as the premier bridal makeup artist in Meerut and Delhi NCR, providing personalized on-location artistry for your special day.",
    seoTitle: "Best Bridal Makeup Artist in Meerut | Shreya Chaudhary 5.0★",
    seoDescription:
      "Why Shreya Chaudhary is rated the top bridal makeup artist in Meerut & NCR. Verified 5.0 reviews, authentic international kits, and unhurried suite focus.",
    detailedAnswer: [
      "Selecting the best bridal makeup artist comes down to three non-negotiable criteria: product authenticity, personal artist focus, and verified client trust.",
      "Shreya Chaudhary has earned a flawless 5.0-star rating across Google Verified Reviews, WedMeGood, and JustDial for four key reasons:",
      "1. 100% Authentic Prestige Vanity: Every foundation, powder, and pigment is sourced through verified international channels (NARS, Charlotte Tilbury, MAC, Laura Mercier) with zero parlour backroom dilution.",
      "2. Dedicated 1-on-1 Suite Focus: Unlike commercial parlours that rush 6 to 10 brides through an assembly line of junior assistants, Shreya personally handles every client from skin prep to final dupatta placement.",
      "3. 4K Camera Precision: Makeup engineered to withstand 16-hour ceremonies under high-definition cameras with zero chalky flashback.",
      "4. Calm, Stress-Free Suite Demeanour: Providing an unhurried, peaceful bridal environment directly at your venue."
    ],
    proTip:
      "Always inspect raw unedited video footage of real brides rather than heavily smoothed smartphone photos before finalizing your bridal booking.",
    relatedFaqs: [
      "bridal-makeup-cost-meerut",
      "do-you-travel-for-bridal-makeup",
      "what-makeup-techniques-does-shreya-specialize-in"
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup", "party-makeup"],
    relatedGlossaryTerms: ["on-location-suite-artistry", "hd-bridal-makeup"]
  },
  {
    slug: "winter-bridal-makeup-trends-2026",
    category: "technique",
    categoryLabel: "Artistry & Techniques",
    question: "What are the bridal makeup trends for winter 2026?",
    answer:
      "For the November 2026 – February 2027 wedding season, brides are moving away from heavy matte layers towards 'glass skin' luminosity, soft glam aesthetics, and camera-ready HD finishes that photograph flawlessly in winter lighting.",
    seoTitle: "Winter Bridal Makeup Trends 2026–2027 | Shreya Chaudhary",
    seoDescription:
      "The top bridal makeup trends for North Indian winter weddings. Glass skin bases, monochromatic champagne glam, feathered brows, and velvet lips.",
    detailedAnswer: [
      "Winter weddings in North India bring crisp evenings, rich velvet lehengas, and dramatic royal decor. For the 2026–2027 season, bridal aesthetics have evolved dramatically away from chalky, heavily powdered matte faces toward fresh, illuminated elegance.",
      "Key bridal trends for this season include:",
      "• The Glass Skin Complexion: Deep emollient prep using botanical oils and multi-molecular hyaluronic acid, creating a translucent, lit-from-within glow that never cracks in dry cold weather.",
      "• Monochromatic Warm Eyes: Moving away from harsh graphic cut-creases toward seamlessly diffused champagne, rose-gold, and burnished bronze shadows that complement kundan and polki jewelry.",
      "• Feathered, Natural Brows: Soft, micro-stroked brow arches that frame the face naturally rather than heavy stamped blocks.",
      "• Velvet Hydrated Lips: Longwearing matte and satin lips layered with hydrating lip serums to prevent cold-weather chapping through long Pheras."
    ],
    proTip:
      "If you are wearing heavy emerald or ruby jewelry, keep eye shadow tones warm and neutral (champagne/copper) so your face and jewelry complement rather than clash.",
    relatedFaqs: [
      "what-is-glass-skin-bridal-makeup",
      "can-i-share-a-reference-makeup-look",
      "is-bridal-makeup-waterproof"
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedGlossaryTerms: ["glass-skin", "soft-glam", "monochromatic-bridal-palette"]
  },
  {
    slug: "how-far-in-advance-to-book-bridal-makeup",
    category: "booking",
    categoryLabel: "Booking & Logistics",
    question: "How far in advance should I book bridal makeup for November/December wedding?",
    answer:
      "Because the winter 2026 Shubh Muhurat dates (especially late November and December) are highly compressed, it is recommended to book 2 to 4 months in advance to secure Shreya's availability for your wedding day.",
    seoTitle: "When to Book Bridal Makeup for Winter Weddings | Shreya Chaudhary",
    seoDescription:
      "How early should you reserve your bridal makeup artist? Guidelines for peak winter Shubh Muhurat wedding dates across Meerut & Delhi NCR.",
    detailedAnswer: [
      "Peak Hindu and North Indian wedding seasons operate on compressed 'Shubh Muhurat' dates determined by planetary alignments. During November, December, January, and February, hundreds of weddings take place across Meerut and Delhi NCR on the exact same weekend.",
      "Because Shreya Chaudhary provides personalized 1-on-1 attention and does not book overlapping assembly-line slots, popular wedding dates fill up fast.",
      "Recommended Booking Timeline:",
      "• Peak Winter Dates (Nov 15 – Dec 20): Reserve 3 to 5 months in advance.",
      "• Early Spring Dates (Jan 15 – Feb 28): Reserve 2 to 3 months in advance.",
      "• Pre-Wedding Events (Ring Ceremony, Sangeet): Finalize alongside your main wedding date for schedule continuity.",
      "Once your venue or banquet hall is confirmed, locking your makeup artist should be your very next priority."
    ],
    proTip:
      "Send a quick WhatsApp message with your wedding date, approximate ceremony time (morning/evening), and venue location to verify instant calendar availability.",
    relatedFaqs: [
      "do-you-travel-for-bridal-makeup",
      "bridal-makeup-cost-meerut",
      "who-is-the-best-bridal-makeup-artist-in-meerut"
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedGlossaryTerms: ["on-location-suite-artistry"]
  },
  {
    slug: "what-is-glass-skin-bridal-makeup",
    category: "technique",
    categoryLabel: "Artistry & Techniques",
    question: "What is glass skin bridal makeup?",
    answer:
      "Glass skin bridal makeup focuses on a deeply hydrated, hyper-luminous, and 'lit-from-within' glow rather than a cakey foundation look. Shreya achieves this using premium prep and radiant foundations like NARS Radiant Longwear.",
    seoTitle: "What is Glass Skin Bridal Makeup? Guide | Shreya Chaudhary",
    seoDescription:
      "Everything about glass skin bridal makeup for Indian weddings. How Shreya Chaudhary achieves translucent, hydrated, non-cakey 16-hour wedding glow.",
    detailedAnswer: [
      "Originating in high-fashion editorial beauty, 'Glass Skin' refers to a complexion that looks exceptionally smooth, poreless, and luminous — reflecting light like a polished pane of glass.",
      "In traditional Indian bridal makeup, many salons layer thick pancake foundation, concealer, and heavy baking powder, resulting in an artificial matte mask that feels dry and cracks after 4 hours.",
      "Shreya Chaudhary's Signature Glass Skin Technique is completely different:",
      "1. Multi-Step Dermal Prep: Skin is infused with hyaluronic hydration, facial misting, and nourishing ceramides to plump the skin barrier before any makeup touches the face.",
      "2. Micro-Layering: Rather than a thick mask, ultra-thin layers of radiant foundation (NARS Natural Radiant) are pressed into the skin with dampened sponges.",
      "3. Pinpoint Concealing: Coverage is concentrated only where needed (blemishes, dark circles), leaving the rest of the skin breathing naturally.",
      "4. Targeted Setting: Micro-fine translucent powder is applied strictly to high-movement oil zones (T-zone, smile lines), keeping high points of the face glowing naturally."
    ],
    proTip:
      "Begin hydrating your skin 8 weeks before your wedding by drinking 2.5–3 liters of water daily and using a ceramide-rich barrier cream each night.",
    relatedFaqs: [
      "winter-bridal-makeup-trends-2026",
      "is-bridal-makeup-waterproof",
      "what-makeup-techniques-does-shreya-specialize-in"
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedGlossaryTerms: ["glass-skin", "hd-bridal-makeup", "baking-setting-technique"]
  },
  {
    slug: "is-bridal-makeup-waterproof",
    category: "technique",
    categoryLabel: "Artistry & Techniques",
    question: "Is bridal makeup waterproof/sweat-proof?",
    answer:
      "Yes. Every bridal and occasion makeup base is constructed to be completely sweat-resistant, waterproof, and tear-proof, providing a pristine 16+ hour wear through all your ceremonies without creasing.",
    seoTitle: "Is Bridal Makeup Waterproof & Sweat-Proof? | Shreya Chaudhary",
    seoDescription:
      "How bridal makeup withstands 16 hours of emotional tears, stage lighting, and sacred fire heat. Shreya Chaudhary sweat-proof lock explained.",
    detailedAnswer: [
      "Indian weddings are emotionally intense and physically demanding. From tearful Vidai moments to standing near the intense radiant heat of the sacred Phera fire for hours, your makeup must be impervious to moisture.",
      "Shreya Chaudhary's 16-Hour Lock Protocol guarantees full waterproof resilience:",
      "• Waterproof Priming Barriers: Grip primers create a hydrophobic (water-repelling) barrier that prevents facial sweat from dissolving the base.",
      "• Polymer Film Sealants: Foundations are locked with micro-mists containing flexible setting polymers that move with facial expressions without cracking.",
      "• Cry-Proof Eye Artistry: Smudge-proof gel and liquid liners, waterproof lash adhesives, and tube-setting mascaras ensure tears glide over the cheek without leaving black streaks.",
      "• Heat & Humidity Resistance: Designed specifically to endure halogen stage lighting and dense banquet hall warmth."
    ],
    proTip:
      "During emotional moments at the Vidai, gently dab tears with a tissue at the inner corner of the eye rather than wiping across the cheek.",
    relatedFaqs: [
      "what-makeup-techniques-does-shreya-specialize-in",
      "what-is-glass-skin-bridal-makeup",
      "bridal-makeup-cost-meerut"
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedGlossaryTerms: ["sweat-proof-humidity-lock", "flashback-free-base"]
  },
  {
    slug: "what-makeup-techniques-does-shreya-specialize-in",
    category: "technique",
    categoryLabel: "Artistry & Techniques",
    question: "What makeup techniques does Shreya specialize in?",
    answer:
      "Shreya specializes in camera-ready High-Definition (HD) and Glass Skin bridal makeup using authentic luxury formulations (NARS, MAC, Charlotte Tilbury). This delivers a weightless, natural skin finish with 16-hour tear-proof durability and zero flashback in 4K wedding photography.",
    seoTitle: "Bridal Makeup Techniques & Specializations | Shreya Chaudhary",
    seoDescription:
      "Explore Shreya Chaudhary's core bridal makeup techniques: HD complexion, glass skin hydration, soft glam eye artistry, and 4K camera zero-flashback finish.",
    detailedAnswer: [
      "Rather than offering generic salon treatments, Shreya Chaudhary focuses exclusively on advanced high-fashion bridal artistry developed over 6+ years of hands-on experience.",
      "Core Specializations include:",
      "1. High-Definition (HD) Complexion: Hand-blended application using ultra-micronized pigments that diffuse light and look indistinguishable from real skin under 4K lenses.",
      "2. Glass Skin Hydration: Multi-layer emollient skin prep designed specifically for North Indian winter skin barriers, preventing flaking and chalkiness.",
      "3. Soft Glam Eye Artistry: Monochromatic halo eyes, refined smokey definitions, and delicate cut-creases tailored to traditional lehenga colors.",
      "4. Custom Undertone Blending: Precision foundation matching that prevents ashen or orange oxidation across face, neck, and chest.",
      "5. Heritage Dupatta & Royal Veil Draping: Balanced pleating and structural pinning that secures heavy zardozi dupattas comfortably without neck strain."
    ],
    proTip:
      "HD makeup is universally suited to all skin types when paired with personalized skin prep, delivering camera-ready elegance that feels completely weightless.",
    relatedFaqs: [
      "what-is-glass-skin-bridal-makeup",
      "is-bridal-makeup-waterproof",
      "bridal-makeup-cost-meerut"
    ],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    relatedGlossaryTerms: ["hd-bridal-makeup", "glass-skin", "soft-glam", "undertone-matching"]
  }
];

/**
 * Backwards-compatible export arrays for existing routes.
 */
export const homeFaqs: Faq[] = masterFaqs;

export const bridalFaqs: Faq[] = [
  masterFaqs[0]!, // Cost
  masterFaqs[1]!, // Forever52 vs NARS
  masterFaqs[4]!, // Travel
  masterFaqs[5]!, // Reference look
  masterFaqs[6]!, // Best artist
  masterFaqs[7]!, // Winter trends
  masterFaqs[8]!, // Advance booking
  masterFaqs[9]!, // Glass skin
  masterFaqs[10]!, // Waterproof
  masterFaqs[11]!, // Techniques
];

export const engagementFaqs: Faq[] = [
  masterFaqs[2]!, // Engagement inclusions
  masterFaqs[4]!, // Travel
  masterFaqs[5]!, // Reference look
  masterFaqs[10]!, // Waterproof
];

export const partyFaqs: Faq[] = [
  masterFaqs[3]!, // Party inclusions
  masterFaqs[4]!, // Travel
  masterFaqs[5]!, // Reference look
];

export const meerutFaqs: Faq[] = [
  masterFaqs[6]!, // Best artist
  masterFaqs[0]!, // Cost
  masterFaqs[1]!, // Forever 52 vs NARS
  masterFaqs[4]!, // Travel
  masterFaqs[9]!, // Glass skin
  masterFaqs[10]!, // Waterproof
];

/**
 * Helper to retrieve a single FAQ by slug.
 */
export const getFaqBySlug = (slug: string): (Faq & { slug: string; category: FaqCategory; categoryLabel: string }) | undefined => {
  return masterFaqs.find((faq) => faq.slug === slug);
};

/**
 * Helper to retrieve FAQs grouped by category.
 */
export const faqsByCategory = (category: FaqCategory) => {
  return masterFaqs.filter((faq) => faq.category === category);
};
