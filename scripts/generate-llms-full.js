import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function generateLlmsFull() {
  try {
    const publicDir = path.join(rootDir, 'public');
    const llmsTxtPath = path.join(publicDir, 'llms.txt');
    const pricingMdPath = path.join(publicDir, 'pricing.md');
    const outputPath = path.join(publicDir, 'llms-full.txt');

    let fullContent = '';

    if (fs.existsSync(llmsTxtPath)) {
      fullContent += fs.readFileSync(llmsTxtPath, 'utf8') + '\n\n';
    }

    if (fs.existsSync(pricingMdPath)) {
      fullContent += fs.readFileSync(pricingMdPath, 'utf8') + '\n\n';
    }

    // Add blogs
    const postsPath = path.join(rootDir, 'src', 'data', 'posts.ts');
    if (fs.existsSync(postsPath)) {
      const postsContent = fs.readFileSync(postsPath, 'utf8');
      fullContent += '## Blog Posts & Knowledge Base\n\n' + postsContent + '\n\n';
    }

    // Add services
    const servicesPath = path.join(rootDir, 'src', 'data', 'services.ts');
    if (fs.existsSync(servicesPath)) {
      const servicesContent = fs.readFileSync(servicesPath, 'utf8');
      fullContent += '## Service Details\n\n' + servicesContent + '\n\n';
    }
    
    // Add FAQs
    const faqsPath = path.join(rootDir, 'src', 'data', 'faqs.ts');
    if (fs.existsSync(faqsPath)) {
      const faqsContent = fs.readFileSync(faqsPath, 'utf8');
      fullContent += '## Frequently Asked Questions\n\n' + faqsContent + '\n\n';
    }

    fs.writeFileSync(outputPath, fullContent);
    console.log('✅ Generated public/llms-full.txt successfully');
  } catch (error) {
    console.error('❌ Failed to generate llms-full.txt:', error);
    process.exit(1);
  }
}

generateLlmsFull();
