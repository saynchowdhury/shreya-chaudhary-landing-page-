export type GlossaryCategory = "complexion" | "eye-artistry" | "skin-prep" | "styling-wear";

export interface GlossaryTerm {
  slug: string;
  term: string;
  category: GlossaryCategory;
  categoryLabel: string;
  phonetic?: string;
  shortDefinition: string;
  whyItMattersForBrides: string;
  howShreyaExecutes: string;
  proTips: string[];
  relatedTerms?: string[];
  relatedFaqs?: string[];
  relatedServices?: string[];
  seoTitle: string;
  seoDescription: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "hd-bridal-makeup",
    term: "HD Bridal Makeup",
    phonetic: "/ˌeɪtʃ ˈdiː ˈbraɪdəl ˈmeɪkʌp/",
    category: "complexion",
    categoryLabel: "Complexion & Base",
    shortDefinition:
      "High-Definition (HD) makeup uses ultra-micronized, light-diffusing pigments formulated to appear seamless, natural, and completely texture-free under 4K lenses, harsh daylight, and bright flash.",
    whyItMattersForBrides:
      "Modern wedding photographers and cinematographers shoot in ultra-high resolution (4K and 8K). Traditional heavy pancake makeup looks thick, chalky, and reveals pores and creases in high-definition video. HD makeup mimics healthy skin texture, ensuring you look breathtaking in person while appearing retouched in close-up cinematography.",
    howShreyaExecutes:
      "Shreya hand-blends pro-tier formulations (NARS Natural Radiant, Charlotte Tilbury, MAC) using specialized dense buffing brushes and dampened micro-pore sponges. Thin, buildable layers are pressed into prepped skin, correcting uneven tones without ever masking natural radiance.",
    proTips: [
      "HD makeup requires smooth canvas skin; hydrate consistently 8 weeks prior.",
      "Never mix water-based moisturizers with silicone-heavy bases to prevent pilling.",
      "Ensure your artist matches your neck and chest decollete, not just your jawline."
    ],
    relatedTerms: ["glass-skin", "undertone-matching", "flashback-free-base"],
    relatedFaqs: ["what-makeup-techniques-does-shreya-specialize-in", "bridal-makeup-cost-meerut"],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    seoTitle: "What is HD Bridal Makeup? Complete Glossary Guide",
    seoDescription:
      "Comprehensive definition of HD Bridal Makeup for Indian brides. How micronized pigments create a 4K camera-ready, flawless, natural complexion."
  },
  {
    slug: "glass-skin",
    term: "Glass Skin Complexion",
    phonetic: "/ɡlæs skɪn kəmˈplekʃən/",
    category: "complexion",
    categoryLabel: "Complexion & Base",
    shortDefinition:
      "A luminous, hyper-hydrated facial base that looks smooth, translucent, and reflective like a polished pane of glass, without looking oily or slick.",
    whyItMattersForBrides:
      "Dry winter wedding weather in North India causes matte makeup to crack, flake, and accentuate smile lines. Glass skin makeup relies on deep skin barrier hydration, keeping skin plump and radiant through 16-hour ceremonies.",
    howShreyaExecutes:
      "Shreya achieves glass skin through a 4-step dermal cocktail: lymphatic facial drainage, botanical lipid serums, luminous foundations (NARS Radiant Longwear), and targeted setting powder applied only to high-friction oil zones.",
    proTips: [
      "Avoid heavy zinc sunscreens on the morning of your wedding day as they dull skin luminosity.",
      "Drink 2.5 to 3 liters of water daily in the 4 weeks leading up to your celebrations.",
      "Use hydrating face mist periodically rather than powdering over dry areas."
    ],
    relatedTerms: ["hd-bridal-makeup", "pre-bridal-dermaplaning", "baking-setting-technique"],
    relatedFaqs: ["what-is-glass-skin-bridal-makeup", "winter-bridal-makeup-trends-2026"],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    seoTitle: "What is Glass Skin Bridal Makeup? Beauty Glossary",
    seoDescription:
      "Learn what Glass Skin makeup is, why it prevents winter wedding dryness, and how Shreya Chaudhary creates a luminous, lit-from-within bridal glow."
  },
  {
    slug: "soft-glam",
    term: "Soft Glam Artistry",
    phonetic: "/sɒft ɡlæm ˈɑːtɪstri/",
    category: "eye-artistry",
    categoryLabel: "Eye & Lip Artistry",
    shortDefinition:
      "An elevated, modern makeup aesthetic that enhances natural beauty using seamless blending, neutral monochromes, and diffused definition rather than stark harsh lines.",
    whyItMattersForBrides:
      "Soft glam is the premier bridal aesthetic of modern Indian weddings. It allows intricate lehenga embroidery, royal kundan jewelry, and matha pattis to shine without competing against overwhelming or distracting facial makeup.",
    howShreyaExecutes:
      "Using warm neutrals (champagne, cocoa, peach, terracotta), Shreya creates seamlessly diffused eyeshadow fades, velvety skin contours, feathered brow arches, and pillowy satin lips that look timeless in wedding albums.",
    proTips: [
      "Pair soft glam eyes with individual cluster lashes for an authentic, fluttery look.",
      "Choose lip liners that match your natural lip border undertone rather than darker contrasts.",
      "Opt for soft smoked-out brown or bronze eyeliners instead of stark jet-black ink."
    ],
    relatedTerms: ["halo-eye", "monochromatic-bridal-palette", "individual-cluster-lashes"],
    relatedFaqs: ["can-i-share-a-reference-makeup-look", "what-is-included-in-engagement-makeup"],
    relatedServices: ["engagement-makeup", "party-makeup"],
    seoTitle: "What is Soft Glam Bridal Makeup? Definition & Guide",
    seoDescription:
      "Explore the soft glam bridal makeup aesthetic: diffused neutrals, illuminated skin, and timeless elegance for Indian weddings and engagements."
  },
  {
    slug: "cut-crease",
    term: "Cut-Crease Eye Artistry",
    phonetic: "/kʌt kriːs aɪ/",
    category: "eye-artistry",
    categoryLabel: "Eye & Lip Artistry",
    shortDefinition:
      "An advanced eye makeup technique where high-contrast concealer or cream base sharply defines the eyelid crease, visually expanding lid space and carving out dramatic eye depth.",
    whyItMattersForBrides:
      "For brides with deep-set, hooded, or smaller eyes, a precision cut-crease creates an optical illusion of larger, lifted, royalty-inspired eyes that stand out magnificently in stage photography.",
    howShreyaExecutes:
      "Shreya maps the bride's natural socket bone with neutral transition shades, then precisely carves the upper boundary using a flat synthetic chisel brush and longwear cream concealer, filling the lid with brilliant shimmer or foil pigment.",
    proTips: [
      "Look straight forward into a mirror when carving the crease to prevent the line from disappearing into hooded folds.",
      "Set the concealer immediately with a matching powder or foil pigment to prevent creasing.",
      "Semi-cut creases (halved towards the outer third) often look softer and more modern than full graphic cuts."
    ],
    relatedTerms: ["halo-eye", "soft-glam", "flashback-free-base"],
    relatedFaqs: ["can-i-share-a-reference-makeup-look", "what-makeup-techniques-does-shreya-specialize-in"],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    seoTitle: "Cut-Crease Eye Makeup Defined | Bridal Glossary",
    seoDescription:
      "What is a cut-crease eye makeup look? How Shreya Chaudhary sculpts bridal eye contours for maximum depth, sparkle, and 4K camera definition."
  },
  {
    slug: "halo-eye",
    term: "Halo Eye Technique",
    phonetic: "/ˈheɪləʊ aɪ/",
    category: "eye-artistry",
    categoryLabel: "Eye & Lip Artistry",
    shortDefinition:
      "An eye makeup design where deep, smoked shades frame both the inner and outer corners of the eyelid, surrounding a bright, luminous metallic spotlight in the exact center.",
    whyItMattersForBrides:
      "Halo eye makeup mimics the way candlelight or stage spots hit rounded eyes, creating an illuminated, dimensional pop that pairs gorgeously with ornate maang tikka jewelry and heavy lashes.",
    howShreyaExecutes:
      "Shreya deepens the inner tear duct contour and outer corner with velvety bronze or matte chocolate, then applies liquid gold, rose-foil, or diamond duochrome glitter right above the pupil, blending the perimeter into a seamless radiant halo.",
    proTips: [
      "Use your fingertip to press loose pigments or glitter into the center of the lid for maximum reflective intensity.",
      "Keep the lower lash line mirrored with dark corners and a bright center to balance the eye shape.",
      "Complement halo eyes with warm champagne or peachy lip tones."
    ],
    relatedTerms: ["cut-crease", "soft-glam", "monochromatic-bridal-palette"],
    relatedFaqs: ["can-i-share-a-reference-makeup-look", "winter-bridal-makeup-trends-2026"],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    seoTitle: "What is Halo Eye Makeup? Luxury Bridal Glossary",
    seoDescription:
      "Definition and application of halo eye makeup for brides. Learn how center-lid spotlights create captivating, wide-awake bridal eyes."
  },
  {
    slug: "undertone-matching",
    term: "Custom Undertone Matching",
    phonetic: "/ˈʌndəˌtəʊn ˈmætʃɪŋ/",
    category: "complexion",
    categoryLabel: "Complexion & Base",
    shortDefinition:
      "The precise scientific identification and custom-mixing of foundation pigments to align with the skin's subtle undertones (warm, olive, golden, neutral, or cool).",
    whyItMattersForBrides:
      "The most common mistake made by commercial parlours is applying a foundation 2 shades lighter to 'fair' the bride, leading to an ashen, grey, or ghostly mask in photography. Custom undertone matching ensures your face, neck, and chest harmonize perfectly in all lighting.",
    howShreyaExecutes:
      "Shreya evaluates veins, chest pigmentation, and collarbone warmth under balanced daylight-temperature bulbs. Using pure pigment adjuster drops, she custom-tailors yellow, peach, or olive tones in authentic NARS and MAC foundations for an undetectable match.",
    proTips: [
      "Never test foundation exclusively on your wrist; your chest and jawline are the true reference points.",
      "Check your foundation match in natural outdoor daylight, not just yellow vanity mirrors.",
      "Allow foundation to sit on your skin for 10 minutes before judging color to account for natural formula dry-down."
    ],
    relatedTerms: ["hd-bridal-makeup", "flashback-free-base", "glass-skin"],
    relatedFaqs: ["who-is-the-best-bridal-makeup-artist-in-meerut", "what-is-the-difference-between-forever52-and-nars-bridal"],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    seoTitle: "Skin Undertone Matching in Bridal Makeup | Glossary",
    seoDescription:
      "Why custom skin undertone matching is essential for Indian brides. Eliminate grey oxidation and ensure a seamless face-to-neck match in 4K photography."
  },
  {
    slug: "flashback-free-base",
    term: "4K Flashback Prevention",
    phonetic: "/ˈflæʃbæk priˈvenʃən/",
    category: "complexion",
    categoryLabel: "Complexion & Base",
    shortDefinition:
      "Formulating facial bases without light-bouncing reflective minerals (like raw titanium dioxide, zinc oxide, or silica) to prevent the chalky white ghostly mask caused by camera flash.",
    whyItMattersForBrides:
      "Wedding photographers use powerful off-camera flash units during nocturnal Pheras and stage greetings. If makeup contains high concentrations of reflective white powders, the flash bounces back directly into the lens, ruining wedding portraits.",
    howShreyaExecutes:
      "Shreya curates every setting powder, concealer, and foundation strictly from verified luxury formulations (Laura Mercier Translucent, Charlotte Tilbury, Huda Beauty) that have been tested under high-intensity xenon flash.",
    proTips: [
      "Avoid wearing daily SPF 50 sunscreens on your wedding day as physical zinc/titanium reflects flash harshly.",
      "Ask your artist to perform a test phone flash photo in dark lighting to verify zero reflection.",
      "Use micro-fine tinted translucent powders matching your skin depth rather than pure white talc."
    ],
    relatedTerms: ["hd-bridal-makeup", "undertone-matching", "baking-setting-technique"],
    relatedFaqs: ["is-bridal-makeup-waterproof", "what-makeup-techniques-does-shreya-specialize-in"],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    seoTitle: "What is Makeup Flashback? 4K Prevention Guide",
    seoDescription:
      "Learn what causes white flashback in bridal photography and how Shreya Chaudhary ensures a rich, natural complexion under intense camera flash."
  },
  {
    slug: "pre-bridal-dermaplaning",
    term: "Pre-Bridal Dermaplaning",
    phonetic: "/ˌdɜːməˈpleɪnɪŋ/",
    category: "skin-prep",
    categoryLabel: "Skincare & Prep",
    shortDefinition:
      "A gentle clinical aesthetic treatment using a sterile medical-grade blade to gently scrape off dead epidermal cells and fine vellus hair (peach fuzz) from the face.",
    whyItMattersForBrides:
      "Even microscopic peach fuzz catches foundation pigments under angled stage lighting, making makeup look dusty or uneven. Dermaplaning creates a smooth glass-like skin surface that allows HD foundations to glide on like silk.",
    howShreyaExecutes:
      "Shreya advises all brides to have dermaplaning performed 4 to 5 days prior to their first wedding event, followed by soothing ceramide masks to calm the skin and lock in hydration.",
    proTips: [
      "Always schedule dermaplaning 4 to 5 days in advance, never on the day before the wedding.",
      "Hair will NOT grow back thicker or darker; vellus hair regrows at its natural soft texture.",
      "Avoid chemical exfoliants (AHAs, BHAs) for 72 hours after dermaplaning."
    ],
    relatedTerms: ["glass-skin", "hd-bridal-makeup"],
    relatedFaqs: ["what-is-glass-skin-bridal-makeup", "winter-bridal-makeup-trends-2026"],
    relatedServices: ["bridal-makeup"],
    seoTitle: "Pre-Bridal Dermaplaning Guide | Bridal Beauty Glossary",
    seoDescription:
      "Why dermaplaning is recommended before Indian bridal makeup. Remove peach fuzz and dead skin for flawless HD foundation application."
  },
  {
    slug: "on-location-suite-artistry",
    term: "On-Location Suite Artistry",
    phonetic: "/ɒn ləʊˈkeɪʃən swiːt ˈɑːtɪstri/",
    category: "styling-wear",
    categoryLabel: "Styling & Wear",
    shortDefinition:
      "Personalized luxury makeup, hair styling, and outfit draping executed directly in the bride's private hotel suite, residence, or venue dressing room.",
    whyItMattersForBrides:
      "Weddings are stressful, and traveling through city traffic in heavy bridal lehengas while battling delays at crowded parlours causes panic. On-location suite artistry brings a peaceful, private studio directly to the bride.",
    howShreyaExecutes:
      "Shreya travels with dedicated ring lights, sanitized cosmetic workstations, and professional styling gear, ensuring the bride enjoys an unhurried, calm getting-ready experience with family.",
    proTips: [
      "Designate a private, air-conditioned/heated room with good natural lighting for makeup.",
      "Keep minimum two 3-pin plug sockets accessible for hair curling wands and lighting.",
      "Have your lehenga, jewelry, and dupattas unboxed and steamed before the artist arrives."
    ],
    relatedTerms: ["dupatta-draping-pinning", "sweat-proof-humidity-lock"],
    relatedFaqs: ["do-you-travel-for-bridal-makeup", "who-is-the-best-bridal-makeup-artist-in-meerut"],
    relatedServices: ["bridal-makeup", "engagement-makeup", "party-makeup"],
    seoTitle: "On-Location Suite Bridal Makeup Explained | Glossary",
    seoDescription:
      "The luxury of on-location suite makeup artistry for brides. Eliminate wedding-day travel stress with private doorstep service across Meerut & NCR."
  },
  {
    slug: "dupatta-draping-pinning",
    term: "Bridal Dupatta Draping & Pinning",
    phonetic: "/duːˈpʌtə ˈdreɪpɪŋ/",
    category: "styling-wear",
    categoryLabel: "Styling & Wear",
    shortDefinition:
      "The expert structural securing, pleating, and weight-balancing of heavy bridal veils and shoulder dupattas to prevent neck strain and ensure regal elegance.",
    whyItMattersForBrides:
      "Bridal dupattas with heavy zardozi, kundan, or gotta patti borders can weigh 2 to 5 kilograms. Poor pinning causes intense head pulling, ruined hairstyles, and falling veils during the garland exchange or Pheras.",
    howShreyaExecutes:
      "Shreya utilizes specialized velvet-cushioned pins, invisible hair anchor combs, and cross-anchored safety points. Weight is transferred safely across shoulders rather than pulling solely from the crown of the head.",
    proTips: [
      "Always have your dupatta ironed and unstitched before the styling session.",
      "If wearing a double dupatta (one shoulder, one head veil), use the lighter georgette or net dupatta for the head.",
      "Practice walking with your lehenga heels before final dupatta pinning."
    ],
    relatedTerms: ["on-location-suite-artistry", "sweat-proof-humidity-lock"],
    relatedFaqs: ["bridal-makeup-cost-meerut", "what-is-included-in-engagement-makeup"],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    seoTitle: "Bridal Dupatta Draping & Veil Pinning Guide | Glossary",
    seoDescription:
      "How bridal dupatta draping and crown veil pinning is executed safely. Prevent neck strain and keep heavy velvet lehengas secure all night."
  },
  {
    slug: "individual-cluster-lashes",
    term: "Individual Cluster Lashes",
    phonetic: "/ˌɪndɪˈvɪdʒuəl ˈklʌstə læʃɪz/",
    category: "eye-artistry",
    categoryLabel: "Eye & Lip Artistry",
    shortDefinition:
      "Featherweight lash bundles of varied lengths placed strategically along the natural lash line, offering customized eye lifting without heavy strip bands.",
    whyItMattersForBrides:
      "Traditional heavy strip eyelashes have stiff black bands that often lift at the inner corner when brides tear up during the Vidai. Individual clusters feel weightless, custom-fit any eye shape, and stay securely locked in place.",
    howShreyaExecutes:
      "Shreya custom-maps lash lengths: shorter at the inner corner, building to voluminous clusters at the outer edge for an elongated, seductive feline lift.",
    proTips: [
      "Avoid rubbing your eyes directly; dab tears gently at the inner tearduct corner.",
      "Do not apply oil-based eye makeup removers until you are ready to remove your lashes.",
      "Use waterproof latex-free adhesive to prevent irritation for sensitive eyes."
    ],
    relatedTerms: ["soft-glam", "cut-crease", "sweat-proof-humidity-lock"],
    relatedFaqs: ["is-bridal-makeup-waterproof", "what-is-included-in-engagement-makeup"],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    seoTitle: "Individual Cluster Lashes in Bridal Makeup | Glossary",
    seoDescription:
      "Why individual cluster lashes are superior to strip lashes for Indian brides. Weightless comfort, cry-proof durability, and natural eye-opening lift."
  },
  {
    slug: "sweat-proof-humidity-lock",
    term: "16-Hour Sweat-Proof Lock",
    phonetic: "/swet pruːf hjuːˈmɪdɪti lɒk/",
    category: "complexion",
    categoryLabel: "Complexion & Base",
    shortDefinition:
      "A multi-phase makeup setting method utilizing hydrophobic primers, silica barrier powders, and film-forming polymers to render facial cosmetics tear, sweat, and heat resistant.",
    whyItMattersForBrides:
      "Weddings involve prolonged physical activity: dense stage lighting, warm crowds, smoke from sacred havan fires, and emotional tears. An amateur base melts within 3 hours; an engineered sweat-proof lock preserves perfection for 16+ hours.",
    howShreyaExecutes:
      "Shreya sets cream layers with micro-pressed blotting techniques, followed by temperature-resistant setting mists that form an invisible, flexible shield over the face.",
    proTips: [
      "Never wipe sweat across the face; gently press with a dry blotting tissue.",
      "Avoid touching your cheeks frequently during greetings and photo ops.",
      "Keep a mini touchup powder puff handy for quick nose and chin t-zone dabs."
    ],
    relatedTerms: ["hd-bridal-makeup", "flashback-free-base", "baking-setting-technique"],
    relatedFaqs: ["is-bridal-makeup-waterproof", "winter-bridal-makeup-trends-2026"],
    relatedServices: ["bridal-makeup", "engagement-makeup", "party-makeup"],
    seoTitle: "16-Hour Sweat-Proof Bridal Makeup Lock | Glossary",
    seoDescription:
      "How to make bridal makeup sweat-proof and tear-proof. Learn Shreya Chaudhary's 16-hour lock method for emotional ceremonies and high heat."
  },
  {
    slug: "monochromatic-bridal-palette",
    term: "Monochromatic Bridal Palette",
    phonetic: "/ˌmɒnəkrəˈmætɪk ˈbraɪdəl ˈpælət/",
    category: "eye-artistry",
    categoryLabel: "Eye & Lip Artistry",
    shortDefinition:
      "Using varying tints, tones, and shades of a single color family (e.g. warm rose, champagne, peach, or terracotta) across eyes, cheeks, and lips for unified harmony.",
    whyItMattersForBrides:
      "Indian bridal lehengas often feature multiple rich colors, heavy gold foil, and multi-colored gemstones. A monochromatic makeup palette grounds the look, preventing visual clash and creating sophisticated elegance.",
    howShreyaExecutes:
      "Shreya anchors the palette in the undertones of the bride's outfit embroidery, weaving matching micro-glimmers into the eyelid, warm blushes into the cheekbones, and complimentary tones on the lips.",
    proTips: [
      "If your lehenga is rich red, lean into warm terracotta and gilded champagne rather than hot pink.",
      "Keep blush soft and blended upward into the hairline for a sculpted lift.",
      "Use contrasting lip textures (e.g. satin lip with shimmer eye) to prevent flatness."
    ],
    relatedTerms: ["soft-glam", "undertone-matching", "halo-eye"],
    relatedFaqs: ["can-i-share-a-reference-makeup-look", "winter-bridal-makeup-trends-2026"],
    relatedServices: ["bridal-makeup", "engagement-makeup"],
    seoTitle: "Monochromatic Bridal Makeup Guide | Beauty Glossary",
    seoDescription:
      "What is a monochromatic bridal palette? Discover how harmonizing eyes, lips, and cheeks creates effortless luxury for Indian brides."
  },
  {
    slug: "baking-setting-technique",
    term: "Micro-Silica Setting vs Baking",
    phonetic: "/ˈbeɪkɪŋ ˈsetɪŋ tekˈniːk/",
    category: "complexion",
    categoryLabel: "Complexion & Base",
    shortDefinition:
      "Targeted micro-pressing of ultra-fine translucent setting powder onto oil-prone zones, as opposed to traditional heavy 'baking' which leaves thick, creasing, chalky patches on dry skin.",
    whyItMattersForBrides:
      "Traditional baking (leaving heaps of powder on the skin for 10 minutes) severely dehydrates the delicate under-eye area, leading to visible cracks and fine lines in winter weddings. Micro-silica setting locks coverage while preserving suppleness.",
    howShreyaExecutes:
      "Shreya uses velour triangle powder puffs to press minimal amounts of warmed translucent powder directly into high-movement zones (under eyes, smile lines, center forehead), sweeping away excess instantly.",
    proTips: [
      "Never bake the under-eye if you have dry skin or are getting married in winter.",
      "Warm the puff against the back of your hand to distribute powder evenly before touching the face.",
      "Finish with a dewy setting mist to melt any remaining powder particles into the foundation."
    ],
    relatedTerms: ["hd-bridal-makeup", "flashback-free-base", "glass-skin"],
    relatedFaqs: ["what-is-glass-skin-bridal-makeup", "is-bridal-makeup-waterproof"],
    relatedServices: ["bridal-makeup"],
    seoTitle: "Baking vs Micro-Setting in Bridal Makeup | Glossary",
    seoDescription:
      "Why traditional baking fails dry skin and how micro-silica setting preserves a smooth, crease-free under-eye for 16 hours of wedding ceremonies."
  }
];

export const getGlossaryTerm = (slug: string): GlossaryTerm | undefined => {
  return glossaryTerms.find((term) => term.slug === slug);
};

export const glossaryByCategory = (category: GlossaryCategory) => {
  return glossaryTerms.filter((term) => term.category === category);
};
