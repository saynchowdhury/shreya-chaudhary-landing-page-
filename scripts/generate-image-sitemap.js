import fs from "node:fs";
import path from "node:path";

const domain = "https://shreyachaudharymakeup.com";
const publicDir = path.resolve("public");

async function generateImageSitemaps() {
  const sitemapImagesPath = path.join(publicDir, "sitemap-images.xml");
  const sitemapXmlPath = path.join(publicDir, "sitemap.xml");

  // In CI environments like Cloudflare Pages, raw Node may not support importing TypeScript files directly.
  // If sitemaps are already generated and committed in public/, preserve them.
  if (
    fs.existsSync(sitemapImagesPath) &&
    fs.statSync(sitemapImagesPath).size > 500 &&
    fs.existsSync(sitemapXmlPath) &&
    fs.statSync(sitemapXmlPath).size > 500 &&
    !process.argv.includes("--force")
  ) {
    console.log("✅ public/sitemap.xml and public/sitemap-images.xml already exist and are up to date");
    return;
  }

  try {
    const portfolioModule = await import("../src/data/portfolio.ts");
    const portfolio = portfolioModule.portfolio;

    // Retrieve per-look actual modification date where available.
    // When no accurate modification date exists, omit lastmod rather than using today's generation date.
    const getLookLastmod = (look) => {
      const candidate = look.lastmod || look.dateModified || look.meta?.date;
      if (typeof candidate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(candidate.trim())) {
        return candidate.trim();
      }
      return null;
    };

    // 1. Generate standalone sitemap-images.xml (for Google Images)
    let imagesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    for (const look of portfolio) {
      const pageLoc = `${domain}/looks/${look.slug}`;
      const imageLoc = `${domain}${look.src}`;
      const cleanTitle = escapeXml(`${look.title} - Bridal Makeup Meerut | Shreya Chaudhary`);
      const cleanCaption = escapeXml(look.alt);
      const location = escapeXml(
        look.meta?.location
          ? `${look.meta.location}, Uttar Pradesh, India`
          : "Meerut, Uttar Pradesh, India",
      );
      const lookLastmod = getLookLastmod(look);
      const lastmodTag = lookLastmod ? `\n    <lastmod>${lookLastmod}</lastmod>` : "";

      imagesXml += `  <url>
    <loc>${pageLoc}</loc>${lastmodTag}
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>${imageLoc}</image:loc>
      <image:title>${cleanTitle}</image:title>
      <image:caption>${cleanCaption}</image:caption>
      <image:geo_location>${location}</image:geo_location>
    </image:image>
  </url>
`;
    }

    imagesXml += `</urlset>\n`;
    fs.writeFileSync(path.join(publicDir, "sitemap-images.xml"), imagesXml);
    console.log(`✅ Generated public/sitemap-images.xml with ${portfolio.length} images`);

    // 2. Update main sitemap.xml to include all 8 /locations routes and all /looks/$slug
    const sitemapPath = path.join(publicDir, "sitemap.xml");
    let mainXml = fs.readFileSync(sitemapPath, "utf8");

    const looksMarker = "  <!-- Bridal & Occasion Look Showcase Pages -->";
    const locationsMarker = "  <!-- Geographic / Regional Location Hubs -->";

    const locationRoutes = [
      { path: "/locations", priority: "0.85", changefreq: "weekly", lastmod: "2026-09-02" },
      { path: "/locations/meerut", priority: "0.9", changefreq: "weekly", lastmod: "2026-09-02" },
      { path: "/locations/noida", priority: "0.85", changefreq: "weekly", lastmod: "2026-09-02" },
      {
        path: "/locations/greater-noida",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: "2026-09-02",
      },
      {
        path: "/locations/ghaziabad",
        priority: "0.85",
        changefreq: "weekly",
        lastmod: "2026-09-02",
      },
      {
        path: "/locations/muzaffarnagar",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: "2026-09-02",
      },
      { path: "/locations/shamli", priority: "0.8", changefreq: "weekly", lastmod: "2026-09-02" },
      {
        path: "/locations/delhi-ncr",
        priority: "0.85",
        changefreq: "weekly",
        lastmod: "2026-09-02",
      },
    ];

    let locationsBlock = `${locationsMarker}\n`;
    for (const loc of locationRoutes) {
      locationsBlock += `  <url>
    <loc>${domain}${loc.path}</loc>
    <lastmod>${loc.lastmod}</lastmod>
    <changefreq>${loc.changefreq}</changefreq>
    <priority>${loc.priority}</priority>
  </url>\n\n`;
    }

    if (mainXml.includes(locationsMarker)) {
      const locRegex = new RegExp(
        `${locationsMarker}[\\s\\S]*?(?=\\s*${looksMarker}|\\s*<!-- Policy Pages|\\s*</urlset>)`,
      );
      mainXml = mainXml.replace(locRegex, locationsBlock);
    } else if (mainXml.includes(looksMarker)) {
      mainXml = mainXml.replace(looksMarker, locationsBlock + looksMarker);
    } else {
      mainXml = mainXml.replace(
        "  <!-- Policy Pages -->",
        locationsBlock + "  <!-- Policy Pages -->",
      );
    }

    // Replace or append looks block
    let looksBlock = `${looksMarker}\n`;
    for (const look of portfolio) {
      const pageLoc = `${domain}/looks/${look.slug}`;
      const imageLoc = `${domain}${look.src}`;
      const cleanTitle = escapeXml(`${look.title} - Bridal Makeup Meerut`);
      const cleanCaption = escapeXml(look.alt);
      const lookLastmod = getLookLastmod(look);
      const lastmodTag = lookLastmod ? `\n    <lastmod>${lookLastmod}</lastmod>` : "";

      looksBlock += `  <url>
    <loc>${pageLoc}</loc>${lastmodTag}
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${imageLoc}</image:loc>
      <image:title>${cleanTitle}</image:title>
      <image:caption>${cleanCaption}</image:caption>
    </image:image>
  </url>\n`;
    }

    if (mainXml.includes(looksMarker)) {
      const regex = new RegExp(`${looksMarker}[\\s\\S]*?(?=\\s*<!-- Policy Pages|\\s*</urlset>)`);
      mainXml = mainXml.replace(regex, looksBlock);
    } else {
      mainXml = mainXml.replace(
        "  <!-- Policy Pages -->",
        looksBlock + "\n  <!-- Policy Pages -->",
      );
    }

    fs.writeFileSync(sitemapPath, mainXml);
    console.log("✅ Synchronized public/sitemap.xml with /locations and /looks/*");
  } catch (error) {
    if (fs.existsSync(sitemapImagesPath) && fs.existsSync(sitemapXmlPath)) {
      console.warn(
        "⚠️ Warning: TypeScript import not supported in this Node environment. Using existing public sitemaps.",
      );
      return;
    }
    console.error("❌ Failed to generate sitemaps:", error);
    process.exit(1);
  }
}

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

generateImageSitemaps();
