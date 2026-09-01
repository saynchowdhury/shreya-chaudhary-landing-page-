import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve paths
const postsPath = path.resolve(__dirname, '../src/data/posts.ts');
const rssOutputPath = path.resolve(__dirname, '../public/rss.xml');

// Minimal regex parser since we can't easily import a TS file in raw Node without ts-node/tsx
function parsePosts(tsContent) {
  const posts = [];
  const postRegex = /{[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?excerpt:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"[\s\S]*?}/g;
  let match;
  
  while ((match = postRegex.exec(tsContent)) !== null) {
    posts.push({
      slug: match[1],
      title: match[2],
      excerpt: match[3],
      date: match[4]
    });
  }
  return posts;
}

function generateRss() {
  console.log('Generating RSS feed...');
  try {
    const tsContent = fs.readFileSync(postsPath, 'utf8');
    const posts = parsePosts(tsContent);
    
    const rssHeader = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Shreya Chaudhary Makeup Journal</title>
  <link>https://shreyachaudharymakeup.com/blog</link>
  <description>Bridal makeup notes, guides, and pricing transparency from Meerut's premier makeup artist.</description>
  <atom:link href="https://shreyachaudharymakeup.com/rss.xml" rel="self" type="application/rss+xml" />
  <language>en-in</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
`;

    const rssItems = posts.map(post => {
      const postUrl = `https://shreyachaudharymakeup.com/blog/${post.slug}`;
      return `  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${postUrl}</link>
    <guid isPermaLink="true">${postUrl}</guid>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <description><![CDATA[${post.excerpt}]]></description>
  </item>`;
    }).join('\n');

    const rssFooter = `\n</channel>\n</rss>`;
    
    fs.writeFileSync(rssOutputPath, rssHeader + rssItems + rssFooter);
    console.log(`Successfully generated rss.xml with ${posts.length} entries.`);
  } catch (error) {
    console.error('Failed to generate RSS feed:', error);
    process.exit(1);
  }
}

generateRss();
