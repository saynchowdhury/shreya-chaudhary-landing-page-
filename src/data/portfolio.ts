import type { PortfolioCategory } from "./services";

export interface PortfolioItem {
  slug: string;
  src: string;
  alt: string;
  title: string;
  category: PortfolioCategory;
  width: number;
  height: number;
  caption?: string;
  technique?: string;
  lookDetails?: {
    skinFinish: string;
    eyeStyle: string;
    hairStyling: string;
    occasion: string;
    draping: string;
  };
  meta?: { event?: string; location?: string };
  lastmod?: string;
}

/**
 * Curated, randomized portfolio list.
 * Diverse mix of Bridal, Engagement, and Party transformations so every deliverable
 * is highlighted across the gallery without repetitive back-to-back shots of the same model.
 */
export const portfolio: PortfolioItem[] = [
  // 1. Bridal Signature
  {
    slug: "royal-crimson-and-gold-couture-bride",
    src: "/IMG_5032.JPG.jpeg",
    alt: "Stunning real bride in intricate red and gold zardozi lehenga with ornate nath and emerald kundan jewelry",
    title: "Royal Crimson & Gold Couture Bride",
    category: "bridal",
    technique: "Signature HD Bridal Complexion",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Velvet Matte Glass HD Glow",
      eyeStyle: "Rose-Gold & Champagne Halo Shimmer with Custom Mink Lashes",
      hairStyling: "Traditional Royal Crown Bun with Mogra Flowers",
      occasion: "Grand Wedding Ceremony & Pheras",
      draping: "Royal Sheer Red Embroidered Veil with Kundan Matha Patti",
    },
    meta: { event: "Main Wedding Day", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 2. Engagement Signature
  {
    slug: "antique-gold-and-ruby-editorial-engagement",
    src: "/IMG_0537.JPG.jpeg",
    alt: "Editorial portrait of a client in an intricate antique gold and ruby embroidered lehenga with elegant diamond-ruby necklace and maang tikka",
    title: "Antique Gold & Ruby Editorial Engagement",
    category: "engagement",
    technique: "Luminous Velvet HD Airbrush",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Lit-From-Within Golden Hour Glow",
      eyeStyle: "Warm Bronze Smokey Eye with Fluffy Feathered Brow",
      hairStyling: "Sleek Crown Parting with Romantic Cascading Waves",
      occasion: "Ring Ceremony & Engagement Gala",
      draping: "Modern Scalloped Shoulder Dupatta Setting",
    },
    meta: { event: "Ring Ceremony", location: "Delhi NCR" },
    lastmod: "2026-09-02",
  },

  // 3. Party & Sangeet Signature
  {
    slug: "rose-gold-shimmer-sangeet-and-cocktail-glam",
    src: "/IMG_4411.JPG.jpeg",
    alt: "Stunning wedding guest in blush rose gold mirror-work lehenga with fresh rose hair styling and glowing makeup",
    title: "Rose Gold Shimmer Sangeet & Cocktail Glam",
    category: "party",
    technique: "Weightless Radiant Second-Skin Base",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Luminous Dewy Glass Skin",
      eyeStyle: "Soft Bronzed Shimmer with Defined Cat Eyes",
      hairStyling: "Half-Updo with Fresh Crimson Roses & Flowing Curls",
      occasion: "Sangeet Night, Cocktail & Wedding Guest",
      draping: "Contemporary Net Dupatta Pinning",
    },
    meta: { event: "Sangeet & Cocktail Party", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 4. Bridal High-Fashion Monochrome Veil
  {
    slug: "cinematic-monochrome-bridal-veil",
    src: "/IMG_8969.JPG.jpeg",
    alt: "Dramatic high-contrast black and white cinematic bridal portrait under embroidered lace veil",
    title: "Cinematic Monochrome Bridal Veil",
    category: "bridal",
    technique: "Sculpted High-Definition Contour",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Porcelain Soft-Focus Studio Finish",
      eyeStyle: "Deep Kohl-Rimmed Eyes with Soft Smoked Liner",
      hairStyling: "Low Sculpted Chignon with Ornate Kundan Sheeshpatti",
      occasion: "Evening Wedding & Pheras",
      draping: "Zari Lace Scalloped Veil Overhead Draping",
    },
    meta: { event: "Cinematic Bridal", location: "Delhi NCR" },
    lastmod: "2026-09-02",
  },

  // 5. Engagement Cocktail & Evening
  {
    slug: "twilight-rose-gold-and-silver-cocktail-glam",
    src: "/IMG_6560.PNG",
    alt: "Bride in ethereal pastel silver and rose-gold lehenga with open wavy hairstyle",
    title: "Twilight Rose Gold & Silver Cocktail Glam",
    category: "engagement",
    technique: "Soft Glam Airbrush Finish",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Illuminated Sunlit Glass Base",
      eyeStyle: "Silver Foil Shimmer with Smudged Soft Brown Liner",
      hairStyling: "Cascading Hollywood Glam Waves",
      occasion: "Engagement & Sangeet Cocktail",
      draping: "Modern Pre-Pleated Shoulder Draping",
    },
    meta: { event: "Engagement Gala", location: "Delhi NCR" },
    lastmod: "2026-09-02",
  },

  // 6. Party Blushing Rose
  {
    slug: "blushing-rose-and-gold-sangeet-glam",
    src: "/IMG_7994.JPG.jpeg",
    alt: "Radiant smiling client in a pink and gold embroidered lehenga with glowing soft makeup and natural wavy hair",
    title: "Blushing Rose & Gold Sangeet Glam",
    category: "party",
    technique: "Weightless Radiant Second-Skin Base",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Fresh Dewy Rosy Complexion",
      eyeStyle: "Soft Shimmer with Defined Natural Lashes",
      hairStyling: "Soft Voluminous Open Waves with Choker Pairing",
      occasion: "Sangeet Night & Cocktail Guest",
      draping: "Pleated Dupatta & Saree Pinning",
    },
    meta: { event: "Sangeet Night", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 7. Bridal Couture with Shreya
  {
    slug: "royal-gold-zardozi-couture-bride",
    src: "/IMG_0398.JPEG",
    alt: "Artist Shreya Chaudhary with a real bride in a royal handcrafted gold zardozi lehenga",
    title: "Royal Gold Zardozi Couture Bride",
    category: "bridal",
    technique: "Signature HD Bridal Base",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Velvet Matte Glass Skin HD",
      eyeStyle: "Rose-Gold Halo Shimmer with Defined Mink Lashes",
      hairStyling: "Textured Crown Bun with Fresh Roses",
      occasion: "Pheras & Grand Wedding Day",
      draping: "Double Dupatta Setting with Kundan Matha Patti",
    },
    meta: { event: "Wedding Ceremony", location: "Meerut Cantt" },
    lastmod: "2026-09-02",
  },

  // 8. Engagement Sunset Vermilion
  {
    slug: "sunset-vermilion-ring-ceremony-glam",
    src: "/IMG_0120.PNG",
    alt: "Bride in vibrant sunset orange and vermilion outfit for ring ceremony",
    title: "Sunset Vermilion Ring Ceremony Glam",
    category: "engagement",
    technique: "Luminous Dewy Base",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Golden Hour Glow with Coral Liquid Blush",
      eyeStyle: "Bronze Sparkle with Soft Brown Smudge",
      hairStyling: "Textured Half-Updo with Soft Face-Framing Tendrils",
      occasion: "Ring Ceremony & Engagement",
      draping: "One-Side Flowing Dupatta Pinning",
    },
    meta: { event: "Ring Ceremony", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 9. Party Silk Saree & Festive
  {
    slug: "sophisticated-saree-and-sangeet-party-glam",
    src: "/IMG_9067.PNG",
    alt: "Elegant lady in festive silk saree with refined makeup and open hair",
    title: "Sophisticated Saree & Sangeet Party Glam",
    category: "party",
    technique: "Weightless Glow Finish",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Weightless Radiant Second-Skin Base",
      eyeStyle: "Soft Brown Smokey Eye with Subtle Gold Sparkle",
      hairStyling: "Polished Blowout Waves",
      occasion: "Wedding Reception & Sangeet Guest",
      draping: "Pleated Silk Saree Draping",
    },
    meta: { event: "Reception Party", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 10. Bridal Retro Finger Waves
  {
    slug: "retro-finger-waves-and-emerald-kundan-glam",
    src: "/IMG_9056.JPEG",
    alt: "Close-up of bridal face showing retro finger waves, emerald kundan jewelry and glass skin finish",
    title: "Retro Finger Waves & Emerald Kundan Glam",
    category: "bridal",
    technique: "High-Hydration Glass Complexion",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Ultra-Hydrated Glass Skin (Zero Flashback)",
      eyeStyle: "Sunset Mauve with Refined Cat-Eye Liner",
      hairStyling: "Vintage Finger Waves & Floral Crown Adornment",
      occasion: "Grand Reception & Wedding Reveal",
      draping: "Handcrafted Emerald Choker & Nath Placement",
    },
    meta: { event: "Bridal Reveal", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 11. Destination Suite Touchup
  {
    slug: "destination-bridal-suite-glam-session",
    src: "/IMG_7352.JPG.jpeg",
    alt: "Destination bride getting ready with luxury makeup brushes in bridal vanity suite",
    title: "Destination Bridal Suite Glam Session",
    category: "party",
    technique: "Long-Wear Climate Resistant Base",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Humidity-Resistant Satin Glow",
      eyeStyle: "Modern Champagne Shimmer with Wispy Mink Lashes",
      hairStyling: "Effortless Textured Romantic Updo",
      occasion: "Destination Wedding Welcome Party",
      draping: "Contemporary Cape Draping",
    },
    meta: { event: "Destination Wedding", location: "Delhi NCR / Outstation" },
    lastmod: "2026-09-02",
  },

  // 12. Bridal Ivory & Emerald
  {
    slug: "ivory-and-emerald-contemporary-bridal",
    src: "/IMG_0894.JPG.jpeg",
    alt: "Artist Shreya Chaudhary with bride dressed in an ivory and emerald bridal lehenga with embroidered veil",
    title: "Ivory & Emerald Contemporary Bridal",
    category: "bridal",
    technique: "Custom Undertone HD Glam",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Satin Radiant Porcelain Finish",
      eyeStyle: "Warm Mauve Cut Crease with Fine Champagne Dust",
      hairStyling: "Architectural Bun with Pearl Lace Veil",
      occasion: "Day Wedding & Anand Karaj",
      draping: "Hand-Embroidered Ivory Net Veil Draping",
    },
    meta: { event: "Day Wedding", location: "Delhi NCR" },
    lastmod: "2026-09-02",
  },

  // 13. Bridal Joyful Crimson Heritage
  {
    slug: "joyful-crimson-and-gold-heritage-bride",
    src: "/IMG_9093.JPEG",
    alt: "Radiant smiling bride in red and gold embroidered lehenga with delicate temple jewellery",
    title: "Joyful Crimson & Gold Heritage Bride",
    category: "bridal",
    technique: "16-Hour Sweatproof HD Base",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Luminous Second-Skin Finish",
      eyeStyle: "Subtle Gold Sparkle with Defined Kohl Line",
      hairStyling: "Classic Center-Parted Donut Bun with Maang Tikka",
      occasion: "Sacred Pheras Ceremony",
      draping: "Double Net Dupatta with Scalloped Border Pinning",
    },
    meta: { event: "Traditional Wedding", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 14. Bridal Ethereal Cut-Crease Shimmer
  {
    slug: "ethereal-red-and-gold-couture-bride",
    src: "/IMG_5031.JPG.jpeg",
    alt: "Ethereal bride with closed eyes showing glitter cut-crease eye glam and royal red lehenga with emerald jewelry",
    title: "Ethereal Red & Gold Couture Bride",
    category: "bridal",
    technique: "Signature HD Bridal Complexion",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Velvet Matte Glass HD Glow",
      eyeStyle: "Rose-Gold & Champagne Halo Shimmer with Custom Mink Lashes",
      hairStyling: "Traditional High Crown Bun with Fresh Mogra & Rose Setting",
      occasion: "Grand Wedding Ceremony & Pheras",
      draping: "Royal Sheer Red Embroidered Veil with Kundan Matha Patti",
    },
    meta: { event: "Main Wedding Day", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 15. Bridal Dhoop Ceremony
  {
    slug: "regal-dhoop-ceremony-royal-bridal",
    src: "/IMG_7690.JPG.jpeg",
    alt: "Ceremonial bridal portrait with traditional incense dhoop and deep crimson zardozi lehenga",
    title: "Regal Dhoop Ceremony Royal Bridal",
    category: "bridal",
    technique: "Camera-Ready Full HD Artistry",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Sweat-Resistant Matte Glow Base",
      eyeStyle: "Smokey Almond Eyes with Gold Shimmer Core",
      hairStyling: "Intricate Matha Patti & Floral Bun Setting",
      occasion: "Evening Pheras & Aarti",
      draping: "Deep Crimson Zardozi Lehenga Dupatta Pinning",
    },
    meta: { event: "Ceremonial Pheras", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 16. Bridal Heritage Gold & Emerald
  {
    slug: "heritage-gold-and-emerald-royal-bridal",
    src: "/IMG_0396.JPEG",
    alt: "Real bride full portrait in golden bridal lehenga and heavy kundan emerald jewelry",
    title: "Heritage Gold & Emerald Royal Bridal",
    category: "bridal",
    technique: "Longwear HD Complexion",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Luminous Waterproof Glow",
      eyeStyle: "Soft Bronze Smokey Eye with Fluffy Lashes",
      hairStyling: "Classic Sleek Bridal Bun with Mogra Flowers",
      occasion: "Main Wedding Ceremony",
      draping: "Regal Gold Zardozi Dupatta Pinning",
    },
    meta: { event: "Hindu Wedding", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 17. Bridal Timeless Crimson Velvet
  {
    slug: "timeless-crimson-red-heritage-bridal",
    src: "/IMG_5944.PNG",
    alt: "Bride in traditional crimson red lehenga with royal kundan choker, bridal makeup by Shreya Chaudhary",
    title: "Timeless Crimson Red Heritage Bridal",
    category: "bridal",
    technique: "16-Hour Sweatproof Matte HD",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "16-Hour Sweatproof Velvet Base",
      eyeStyle: "Classic Gold Shimmer with Winged Kohl Liner",
      hairStyling: "Regal High Crown Bun with Red Roses",
      occasion: "Grand Evening Wedding",
      draping: "Traditional Dual Velvet Dupatta Draping",
    },
    meta: { event: "Wedding Ceremony", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 18. Bridal Vintage Emerald Editorial
  {
    slug: "vintage-emerald-and-royal-red-editorial",
    src: "/IMG_9054.JPEG",
    alt: "Editorial bride in heavy red zardozi lehenga wearing emerald jewellery and gold nath",
    title: "Vintage Emerald & Royal Red Editorial",
    category: "bridal",
    technique: "High-Fashion Editorial HD",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "High-Definition Dewy Skin Base",
      eyeStyle: "Smokey Sunset Rose with Defined Brow Lift",
      hairStyling: "Vintage Finger Waves & Floral Low Chignon",
      occasion: "Grand Wedding Reception",
      draping: "Heritage Zari Border Dupatta Setting",
    },
    meta: { event: "Editorial Bridal", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 19. Bridal Royal North-Indian
  {
    slug: "royal-north-indian-heritage-bridal",
    src: "/IMG_6597.PNG",
    alt: "Traditional bride with ornate gold nath and emerald choker in deep red lehenga",
    title: "Royal North-Indian Heritage Bridal",
    category: "bridal",
    technique: "Full Coverage Camera-Ready HD",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Flawless Transfer-Proof Base",
      eyeStyle: "Intense Kohl Rimmed Eyes with Gold Pigment",
      hairStyling: "Traditional Matha Patti Setting with Donut Bun",
      occasion: "Traditional Pheras",
      draping: "Deep Red Banarasi Dupatta Draping",
    },
    meta: { event: "Traditional Wedding", location: "Meerut" },
    lastmod: "2026-09-02",
  },

  // 20. Bridal Skin Texture & Precision Eye Glam
  {
    slug: "editorial-skin-texture-and-precision-eye-glam",
    src: "/IMG_0391.JPEG",
    alt: "Macro close-up of bridal makeup showcasing flawless skin texture, rose eye glam and kundan jewelry",
    title: "Editorial Skin Texture & Precision Eye Glam",
    category: "bridal",
    technique: "Micro-Skin Match HD (Zero Flashback)",
    width: 1200,
    height: 1600,
    lookDetails: {
      skinFinish: "Skin-Like Glass Dew (No Cakey Cast)",
      eyeStyle: "Champagne Shimmer & Precision Kohl Liner",
      hairStyling: "Polished Center Parting with Matha Patti",
      occasion: "Intimate Wedding Ceremony",
      draping: "Delicate Net Veil Pinning",
    },
    meta: { event: "Bridal Portrait", location: "Meerut" },
    lastmod: "2026-09-02",
  },
];

export const featuredHomePortfolio: PortfolioItem[] = [
  // 1. Bridal signature
  portfolio.find((p) => p.src === "/IMG_5032.JPG.jpeg") || portfolio[0]!,
  // 2. Engagement signature
  portfolio.find((p) => p.src === "/IMG_0537.JPG.jpeg") || portfolio[1]!,
  // 3. Party & Sangeet signature
  portfolio.find((p) => p.src === "/IMG_4411.JPG.jpeg") || portfolio[2]!,
  // 4. Bridal monochrome / veil
  portfolio.find((p) => p.src === "/IMG_8969.JPG.jpeg") || portfolio[3]!,
  // 5. Engagement cocktail
  portfolio.find((p) => p.src === "/IMG_6560.PNG") || portfolio[4]!,
  // 6. Party & Reception
  portfolio.find((p) => p.src === "/IMG_7994.JPG.jpeg") || portfolio[5]!,
];

export const portfolioByCategory = (category: PortfolioCategory) =>
  portfolio.filter((item) => item.category === category);

export const portfolioCategories: {
  category: PortfolioCategory;
  label: string;
  path: "/portfolio/bridal" | "/portfolio/engagement" | "/portfolio/party";
  blurb: string;
}[] = [
  {
    category: "bridal",
    label: "Bridal HD Airbrush",
    path: "/portfolio/bridal",
    blurb: "Bespoke wedding looks personalized to each bride's undertone, jewelry, and outfit.",
  },
  {
    category: "engagement",
    label: "Engagement Makeup",
    path: "/portfolio/engagement",
    blurb: "Soft, luminous camera-ready glam for ring ceremonies, cocktail celebrations, and pre-wedding functions.",
  },
  {
    category: "party",
    label: "Party & Reception",
    path: "/portfolio/party",
    blurb: "Weightless, elegant makeup for sangeets, cocktail nights, and family celebrations.",
  },
];

export const getLookBySlug = (slug: string): PortfolioItem | undefined =>
  portfolio.find((item) => item.slug === slug);

export const getRelatedLooks = (currentSlug: string, category: PortfolioCategory, limit = 3): PortfolioItem[] =>
  portfolio
    .filter((item) => item.slug !== currentSlug && item.category === category)
    .slice(0, limit);
