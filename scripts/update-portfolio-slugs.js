import fs from 'node:fs';
import path from 'node:path';

const filePath = path.resolve('src/data/portfolio.ts');
let content = fs.readFileSync(filePath, 'utf8');

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// 1. Add slug to PortfolioItem interface if not present
if (!content.includes('slug: string;')) {
  content = content.replace(
    'export interface PortfolioItem {',
    'export interface PortfolioItem {\n  slug: string;'
  );
}

// 2. Add slug to each item in portfolio array
content = content.replace(
  /(\s*\{\s*\n\s*src:\s*"[^"]+",\s*\n\s*alt:\s*"[^"]+",\s*\n\s*title:\s*"([^"]+)",)/g,
  (fullMatch, prefix, title) => {
    const slug = slugify(title);
    if (prefix.includes('slug:')) return fullMatch;
    return prefix.replace('{\n', `{\n    slug: "${slug}",\n`);
  }
);

// 3. Add helper exports at bottom if not present
if (!content.includes('export const getLookBySlug')) {
  const helpers = `
export const getLookBySlug = (slug: string): PortfolioItem | undefined =>
  portfolio.find((item) => item.slug === slug);

export const getRelatedLooks = (currentSlug: string, category: PortfolioCategory, limit = 3): PortfolioItem[] =>
  portfolio
    .filter((item) => item.slug !== currentSlug && item.category === category)
    .slice(0, limit);
`;
  content = content.trim() + '\n' + helpers;
}

fs.writeFileSync(filePath, content);
console.log('✅ Updated src/data/portfolio.ts with slugs and helper functions');
