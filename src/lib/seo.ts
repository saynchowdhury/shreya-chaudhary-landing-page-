import { business, locationLabel } from "@/data/business";
import { services } from "@/data/services";
import logo from "@/assets/logo.png.asset.json";

/** Stable @id anchors — relative, so they stay correct once the domain is set. */
export const ids = {
  website: "/#website",
  organization: "/#organization",
  business: "/#business",
  person: "/#person",
  logo: "/#logo",
};

export interface MetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string | undefined;
}

/** Per-route head meta with a self-referencing og:url. */
export function pageMeta({ title, description, path, type = "website", image }: MetaInput) {
  const og = image ?? logo.url;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:image", content: og },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: og },
  ];
}

export function canonical(path: string) {
  return [{ rel: "canonical" as const, href: `https://shreyachaudharymakeup.com${path}` }];
}

export function jsonLd(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export const websiteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ids.website,
      name: business.name,
      inLanguage: "en-IN",
      publisher: { "@id": ids.business },
    },
    {
      "@type": ["LocalBusiness", "BeautySalon", "Organization"],
      "@id": ids.business,
      name: business.name,
      description: `${business.name} offers bridal, engagement and party makeup with on-location hairstyling in ${locationLabel}, India.`,
      areaServed: business.serviceAreas.map((area) => ({ "@type": "Place", name: area })),
      address: {
        "@type": "PostalAddress",
        streetAddress: business.addressStreet,
        addressLocality: business.city,
        addressRegion: business.state,
        addressCountry: business.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "29.0125",
        longitude: "77.7085",
      },
      telephone: `+${business.whatsapp}`,
      logo: { "@id": ids.logo },
      image: { "@id": ids.logo },
      hasMap: business.googleMyBusinessUrl,
      potentialAction: [
        {
          "@type": "ReserveAction",
          name: "Book Makeup Services on WhatsApp",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `https://wa.me/${business.whatsapp}?text=Hi%20Shreya%2C%20I%27d%20like%20to%20check%20your%20availability%20for%20a%20makeup%20booking.`,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          result: {
            "@type": "Reservation",
            name: "Makeup Service Booking"
          }
        }
      ],
      sameAs: [
        business.googleMyBusinessUrl,
        business.instagramUrl,
        business.wedmegoodUrl,
        business.justdialUrl,
      ],
      founder: { "@id": ids.person },
      priceRange: "₹4,000–₹18,000",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "48",
        bestRating: "5",
        worstRating: "1",
      },
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        name: service.name,
        price: service.price,
        priceCurrency: "INR",
        url: `/services/${service.slug}`,
        availability: "https://schema.org/InStock",
      })),
    },
    {
      "@type": "ImageObject",
      "@id": ids.logo,
      url: logo.url,
      caption: `${business.name} logo`,
    },
    {
      "@type": "Person",
      "@id": ids.person,
      name: business.artist,
      jobTitle: business.profession,
      worksFor: { "@id": ids.business },
      sameAs: [business.instagramUrl],
      address: {
        "@type": "PostalAddress",
        addressLocality: business.city,
        addressRegion: business.state,
        addressCountry: business.countryCode,
      },
    },
  ],
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path,
    })),
  };
}

export function faqLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceLd(service: (typeof services)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `/services/${service.slug}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    provider: { "@id": ids.business },
    areaServed: { "@type": "Place", name: locationLabel },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "INR",
      url: `/services/${service.slug}`,
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: service.name },
      description: service.inclusions.join(", "),
    },
  };
}
