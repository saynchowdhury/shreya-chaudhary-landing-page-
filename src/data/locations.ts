export interface LocationCard {
  slug: string;
  name: string;
  district: string;
  distanceNote: string;
  highlights: string[];
}

export const locationsList: LocationCard[] = [
  {
    slug: "meerut",
    name: "Meerut",
    district: "Home Studio & Regional Hub",
    distanceNote: "Local base · Zero travel surcharge for standard city zones",
    highlights: [
      "Principal studio located in Konark Colony, Roorkee Road",
      "On-location venue travel across all Meerut banquet halls & resorts",
      "Over 48+ verified 5.0★ Google reviews from local brides",
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    district: "Gautam Buddha Nagar",
    distanceNote: "On-location venue travel available via express corridors",
    highlights: [
      "Frequent suite bookings across Sector 15 to 150 luxury hotel suites",
      "Specializing in glass skin and soft glam aesthetics",
      "Hair styling, flower setting & jewelry draping included",
    ],
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    district: "Yamuna Expressway Corridor",
    distanceNote: "Direct travel to luxury resorts, farmhouses & destination venues",
    highlights: [
      "Experienced with high-capacity wedding resorts & farmhouses",
      "Full HD bases formulated for outdoor wedding humidity & lighting",
      "Strictly 1 bride per slot for calm, focused getting-ready",
    ],
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    district: "NCR East (Indirapuram, Raj Nagar, Vaishali)",
    distanceNote: "Seamless on-location bridal suite setup",
    highlights: [
      "Fast connectivity via Delhi-Meerut Expressway",
      "100% authentic international vanity (NARS, MAC, Charlotte Tilbury)",
      "16-hour tear-proof and sweat-proof guarantee",
    ],
  },
  {
    slug: "muzaffarnagar",
    name: "Muzaffarnagar",
    district: "Western Uttar Pradesh",
    distanceNote: "North UP venue travel on advance booking",
    highlights: [
      "Royal wedding bridal artistry with veil and jewelry pinning",
      "Custom skin hydration prep for winter wedding glow",
      "Zero flashback in 4K photography and heavy stage lighting",
    ],
  },
  {
    slug: "shamli",
    name: "Shamli",
    district: "Western Uttar Pradesh",
    distanceNote: "Dedicated suite travel for destination and venue weddings",
    highlights: [
      "On-location getting-ready experience eliminating salon stress",
      "Traditional and contemporary bridal aesthetics",
      "Comprehensive styling support from head to toe",
    ],
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    district: "Capital Region & Destination Banquets",
    distanceNote: "Travel across South Delhi, East Delhi & NCR venues",
    highlights: [
      "High-fashion editorial finishes tailored for grand celebrations",
      "Authentic international kit with zero drugstore substitutes",
      "Personalized 1-on-1 focus ensuring zero rushed appointments",
    ],
  },
];
