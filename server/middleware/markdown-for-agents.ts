import { defineEventHandler, getRequestHeader, setResponseHeader, send } from "h3";

/**
 * Markdown for Agents — Content Negotiation Middleware
 *
 * Intercepts requests carrying `Accept: text/markdown` BEFORE TanStack Start
 * router executes, returning 200 OK with `Content-Type: text/markdown` and
 * `x-markdown-tokens` header.
 *
 * References:
 * - https://llmstxt.org/
 * - https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 * - https://isitagentready.com/.well-known/agent-skills/markdown-negotiation/SKILL.md
 */

const LLMS_MARKDOWN = `# Shreya Chaudhary Makeup

> Shreya Chaudhary Makeup is a luxury bridal and occasion makeup artist based in Meerut, Uttar Pradesh, serving clients across Meerut, Noida, Greater Noida, Ghaziabad, Muzaffarnagar, Shamli, Delhi NCR, and destination weddings.

## Overview
- **Artist & Founder:** Shreya Chaudhary
- **Business Name:** Shreya Chaudhary Makeup
- **Location:** Roorkee Road, Konark Colony, Meerut, Uttar Pradesh 250001, India
- **Rating:** 5.0 ★ Top Rated (Google Verified, WedMeGood Verified, Justdial Top Rated)
- **Direct WhatsApp Booking:** +91 70037 81618 (https://wa.me/917003781618)
- **Instagram:** [@shreyachaudharymakeup](https://www.instagram.com/shreyachaudharymakeup/)
- **Website:** https://shreyachaudharymakeup.com

## Philosophy & Standard
- **1-on-1 Dedicated Focus:** Strictly 1 bride per time slot. Zero rushed salon conveyor-belt appointments.
- **On-Location Suite Artistry:** Calm, punctual getting-ready sessions directly in the client's venue or home.
- **100% Authentic Luxury Vanity:** Uses exclusively genuine international cosmetics (MAC, NARS, Huda Beauty, Charlotte Tilbury, Estée Lauder, Rare Beauty, Laura Mercier). Zero cheap drugstore foundations.
- **Zero Flashback & 16-Hour Wear:** Custom skin-prep and undertone matching that looks natural in person and photographs flawlessly in 4K.

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
- **Destination Weddings:** Travel available across India upon advance booking.

## Contact & Inquiries
- **WhatsApp:** +91 70037 81618
- **Hours:** Monday – Sunday, 10:00 AM – 9:00 PM IST
`;

const TOKEN_COUNT = Math.ceil(LLMS_MARKDOWN.length / 4);

export default defineEventHandler((event) => {
  const accept = getRequestHeader(event, "accept") || "";

  if (accept.includes("text/markdown")) {
    setResponseHeader(event, "x-markdown-tokens", String(TOKEN_COUNT));
    setResponseHeader(event, "Vary", "Accept");
    setResponseHeader(
      event,
      "Cache-Control",
      "public, max-age=86400, stale-while-revalidate=3600"
    );

    return send(event, LLMS_MARKDOWN, "text/markdown; charset=utf-8");
  }
});
