import { defineEventHandler, getRequestHeader, setResponseHeader } from "h3";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Markdown for Agents — Content Negotiation Middleware
 *
 * When an AI agent sends `Accept: text/markdown`, this middleware intercepts
 * the request and returns the llms.txt content as markdown instead of the
 * HTML page. This keeps the markdown in the codebase pipeline (publicly
 * available) so agents automatically discover and consume it.
 *
 * References:
 * - https://llmstxt.org/
 * - https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 * - https://isitagentready.com/.well-known/agent-skills/markdown-negotiation/SKILL.md
 */

// Pre-load llms.txt content at build time
let llmsTxtContent: string | null = null;

function getLlmsTxt(): string {
  if (llmsTxtContent) return llmsTxtContent;
  try {
    // In Cloudflare Pages, public assets are in the dist root
    // Try multiple possible locations
    const paths = [
      resolve("public/llms.txt"),
      resolve("dist/llms.txt"),
      resolve("llms.txt"),
    ];
    for (const p of paths) {
      try {
        llmsTxtContent = readFileSync(p, "utf-8");
        return llmsTxtContent;
      } catch {
        // Try next path
      }
    }
  } catch {
    // Fallback
  }

  // Inline fallback content if file reads fail (Cloudflare Workers can't read fs)
  return `# Shreya Chaudhary Makeup

> Shreya Chaudhary Makeup is a luxury bridal and occasion makeup artist based in Meerut, Uttar Pradesh, serving clients across Meerut, Noida, Greater Noida, Ghaziabad, Muzaffarnagar, Shamli, Delhi NCR, and destination weddings.

## Overview
- **Artist & Founder:** Shreya Chaudhary
- **Business Name:** Shreya Chaudhary Makeup
- **Location:** Roorkee Road, Konark Colony, Meerut, Uttar Pradesh 250001, India
- **Rating:** 5.0 ★ Top Rated (Google Verified, WedMeGood Verified, Justdial Top Rated)
- **Direct WhatsApp Booking:** +91 70037 81618 (https://wa.me/917003781618)
- **Instagram:** [@shreyachaudharymakeup](https://www.instagram.com/shreyachaudharymakeup/)
- **Website:** https://shreyachaudharymakeup.com

## Services & Transparent Pricing

### 1. Bridal Makeup (₹15,000 – ₹18,000)
- **Includes:** Forever 52 Bridal (₹15,000) or NARS Radiant Bridal (₹18,000), full HD bridal makeup, luxury international vanity kit, on-location hair styling, veil setting, flower placement, jewelry draping, custom lashes & zero-powered lens.
- **URL:** https://shreyachaudharymakeup.com/services/bridal-makeup

### 2. Engagement Makeup (₹8,000 – ₹10,000)
- **Includes:** Signature Engagement (₹8,000) or Luxury Kit (₹10,000), full HD camera-ready glow makeup, luxury base, on-location hair styling (waves/updos), dupatta/outfit pinning.
- **URL:** https://shreyachaudharymakeup.com/services/engagement-makeup

### 3. Party & Reception Makeup (₹4,000)
- **Includes:** Full HD party glam, sweat-resistant lightweight finish, on-location hair styling, saree/outfit pleating support.
- **URL:** https://shreyachaudharymakeup.com/services/party-makeup

## Regional Service Areas
- **Meerut:** https://shreyachaudharymakeup.com/locations/meerut
- **Noida:** https://shreyachaudharymakeup.com/locations/noida
- **Greater Noida:** https://shreyachaudharymakeup.com/locations/greater-noida
- **Ghaziabad:** https://shreyachaudharymakeup.com/locations/ghaziabad
- **Muzaffarnagar:** https://shreyachaudharymakeup.com/locations/muzaffarnagar
- **Shamli:** https://shreyachaudharymakeup.com/locations/shamli
- **Delhi NCR:** https://shreyachaudharymakeup.com/locations/delhi-ncr

## Contact & Inquiries
- **WhatsApp:** +91 70037 81618
- **Hours:** Monday – Sunday, 10:00 AM – 9:00 PM IST
`;
}

export default defineEventHandler((event) => {
  const accept = getRequestHeader(event, "accept") || "";

  // Only intercept if the agent explicitly wants markdown
  if (accept.includes("text/markdown")) {
    const markdown = getLlmsTxt();
    const tokenCount = Math.ceil(markdown.length / 4); // Rough token estimate

    setResponseHeader(event, "Content-Type", "text/markdown; charset=utf-8");
    setResponseHeader(event, "x-markdown-tokens", String(tokenCount));
    setResponseHeader(event, "Vary", "Accept");
    setResponseHeader(
      event,
      "Cache-Control",
      "public, max-age=86400, stale-while-revalidate=3600"
    );

    return markdown;
  }

  // For all other requests, continue to the normal handler
  // (do nothing — next middleware/handler runs)
});
