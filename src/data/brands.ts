export interface Brand {
  name: string;
  category: string;
  tagline: string;
  logo: string;
}

/**
 * Authentic vanity products used in Shreya Chaudhary's professional kit.
 */
export const brands: Brand[] = [
  { name: "NARS", category: "Radiant Complexion", tagline: "Natural Radiant Longwear & Concealers", logo: "/brands/nars.png" },
  { name: "HUDA BEAUTY", category: "High-Pigment Eyes", tagline: "FauxFilter Base & Rose Gold Palettes", logo: "/brands/hudabeauty.png" },
  { name: "RARE BEAUTY", category: "Dewy Glow", tagline: "Soft Pinch Liquid Blush & Luminizers", logo: "/brands/rarebeauty.png" },
  { name: "M·A·C", category: "Studio Fix & Lips", tagline: "Prep+Prime, Studio Fix & Retro Mattes", logo: "/brands/mac.png" },
  { name: "FOREVER 52", category: "High Definition Base", tagline: "Complete Coverage & Waterproof Foundation", logo: "/brands/forever52.png" },
  { name: "PAC", category: "Professional Artistry", tagline: "HD Liquid Foundation & Studio Brushes", logo: "/brands/pac.png" },
  { name: "MILANI", category: "Baked Luminosity", tagline: "Baked Blushes & Conceal+Perfect", logo: "/brands/milani.png" },
  { name: "RECODE", category: "Long-Wear Performance", tagline: "Ace of Base & Transfer-Proof Finishes", logo: "/brands/recode.png" },
];


