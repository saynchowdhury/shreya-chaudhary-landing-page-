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
  {
    name: "NARS",
    category: "Radiant Complexion",
    tagline: "Natural Radiant Longwear & Concealers",
    logo: "/brands/nars.jpg",
  },
  {
    name: "CHARLOTTE TILBURY",
    category: "Flawless Filter",
    tagline: "Flawless Setting Powder & Magic Cream",
    logo: "/brands/charlottetilbury.jpg",
  },
  {
    name: "HUDA BEAUTY",
    category: "High-Pigment Eyes",
    tagline: "FauxFilter Base & Rose Gold Palettes",
    logo: "/brands/hudabeauty.jpg",
  },
  {
    name: "LAURA MERCIER",
    category: "Setting Mastery",
    tagline: "Translucent Loose Setting Powder",
    logo: "/brands/lauramercier.jpg",
  },
  {
    name: "RARE BEAUTY",
    category: "Dewy Glow",
    tagline: "Soft Pinch Liquid Blush & Luminizers",
    logo: "/brands/rarebeauty.jpg",
  },
  {
    name: "M·A·C",
    category: "Studio Fix & Lips",
    tagline: "Prep+Prime, Studio Fix & Retro Mattes",
    logo: "/brands/mac.jpg",
  },
  {
    name: "FOREVER 52",
    category: "High Definition Base",
    tagline: "Complete Coverage & HD Foundation",
    logo: "/brands/forever52.jpg",
  },
  {
    name: "PAC",
    category: "Professional Artistry",
    tagline: "HD Liquid Foundation & Studio Brushes",
    logo: "/brands/pac.jpg",
  },
  {
    name: "MILANI",
    category: "Baked Luminosity",
    tagline: "Baked Blushes & Conceal+Perfect",
    logo: "/brands/milani.jpg",
  },
  {
    name: "RECODE",
    category: "Long-Wear Performance",
    tagline: "Ace of Base & Transfer-Proof Finishes",
    logo: "/brands/recode.jpg",
  },
];
