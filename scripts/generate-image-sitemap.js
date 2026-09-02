import fs from 'node:fs';
import path from 'node:path';

const domain = 'https://shreyachaudharymakeup.com';
const publicDir = path.resolve('public');

async function generateImageSitemaps() {
  try {
    const portfolioModule = await import('../src/data/portfolio.ts');
    const portfolio = portfolioModule.portfolio;
    const today = new Date().toISOString().split('T')[0];

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
      const location = escapeXml(look.meta?.location ? `${look.meta.location}, Uttar Pradesh, India` : 'Meerut, Uttar Pradesh, India');

      imagesXml += `  <url>
    <loc>${pageLoc}</loc>
    <lastmod>${today}</lastmod>
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
    fs.writeFileSync(path.join(publicDir, 'sitemap-images.xml'), imagesXml);
    console.log(`✅ Generated public/sitemap-images.xml with ${portfolio.length} images`);

    // 2. Update main sitemap.xml to include /locations and all /looks/$slug
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    let mainXml = fs.readFileSync(sitemapPath, 'utf8');

    // Add /locations hub if missing
    if (!mainXml.includes('<loc>https://shreyachaudharymakeup.com/locations</loc>')) {
      const locationsBlock = `  <url>
    <loc>https://shreyachaudharymakeup.com/locations</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n\n`;
      mainXml = mainXml.replace('  <!-- Location Specific Landing Pages', locationsBlock + '  <!-- Location Specific Landing Pages');
    }

    // Replace or append looks block
    const looksMarker = '  <!-- Bridal & Occasion Look Showcase Pages -->';
    let looksBlock = `${looksMarker}\n`;
    for (const look of portfolio) {
      const pageLoc = `${domain}/looks/${look.slug}`;
      const imageLoc = `${domain}${look.src}`;
      const cleanTitle = escapeXml(`${look.title} - Bridal Makeup Meerut`);
      const cleanCaption = escapeXml(look.alt);

      looksBlock += `  <url>
    <loc>${pageLoc}</loc>
    <lastmod>${today}</lastmod>
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
      mainXml = mainXml.replace('  <!-- Policy Pages -->', looksBlock + '\n  <!-- Policy Pages -->');
    }

    fs.writeFileSync(sitemapPath, mainXml);
    console.log('✅ Synchronized public/sitemap.xml with /locations and /looks/*');
  } catch (error) {
    console.error('❌ Failed to generate sitemaps:', error);
    process.exit(1);
  }
}

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

generateImageSitemaps();
