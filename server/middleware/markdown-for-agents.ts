import { defineEventHandler, getRequestHeader, getRequestURL, setResponseHeader } from "h3";
import { getMarkdownForRoute } from "../../src/lib/agent-markdown";

/**
 * Dynamic Markdown for Agents & AEO Content Negotiation Middleware
 *
 * 1. Intercepts requests carrying `Accept: text/markdown` and serves route-specific,
 *    token-dense Markdown directly to AI systems (ChatGPT, Claude, Perplexity, agents)
 *    with verified credentials, pricing, and 1-click booking links.
 * 2. Serves RFC 9727 API catalog at `/.well-known/api-catalog` with `application/linkset+json`.
 * 3. Serves `auth.md` policy with `# Auth.md` header for agent authentication checks.
 * 4. Normalizes non-HTML Accept headers so TanStack Start SSR core never throws 500.
 */
export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  const accept = getRequestHeader(event, "accept") || "";

  // 1. RFC 9727 API Catalog for automated agent discovery
  if (url.pathname === "/.well-known/api-catalog") {
    setResponseHeader(event, "Content-Type", "application/linkset+json; charset=utf-8");
    setResponseHeader(event, "Cache-Control", "public, max-age=86400");
    return JSON.stringify({
      linkset: [
        {
          anchor: "https://shreyachaudharymakeup.com/",
          "service-doc": [
            {
              href: "https://shreyachaudharymakeup.com/about",
              type: "text/html",
            },
          ],
        },
      ],
    });
  }

  // 2. Auth.md policy document for AI agents
  if (url.pathname === "/auth.md") {
    setResponseHeader(event, "Content-Type", "text/markdown; charset=utf-8");
    setResponseHeader(event, "x-markdown-tokens", "150");
    setResponseHeader(event, "Cache-Control", "public, max-age=86400");
    return `# Auth.md: Authentication Policy for Shreya Chaudhary Makeup

This website is a public luxury bridal artistry portfolio and booking inquiry platform.

- **Authentication Requirement:** None (Public Portfolio, no user login or OAuth required).
- **Public Endpoints:** All lookbook showcases, service guides, and seasonal bridal articles are public.
- **Client Inquiries:** Direct 1-on-1 WhatsApp consultation via +91 70037 81618.
- **Data Protection:** Client privacy and booking information are handled per our [Privacy Policy](https://shreyachaudharymakeup.com/privacy-policy).
`;
  }

  // 3. Content Negotiation: Return Markdown when requested
  if (accept.includes("text/markdown")) {
    const md = getMarkdownForRoute(url.pathname);
    const tokenCount = Math.ceil(md.length / 4);

    setResponseHeader(event, "Content-Type", "text/markdown; charset=utf-8");
    setResponseHeader(event, "x-markdown-tokens", String(tokenCount));
    setResponseHeader(event, "Vary", "Accept");
    setResponseHeader(event, "Cache-Control", "public, max-age=86400, stale-while-revalidate=3600");

    return md;
  }

  // 4. Fallback guard: Prevent TanStack Start from throwing 500 on non-HTML requests
  if (!accept.includes("text/html") && !accept.includes("*/*")) {
    if (event.node?.req?.headers) {
      event.node.req.headers["accept"] = `text/html, ${accept}`;
    }
    try {
      if ("headers" in event.req && typeof (event.req as any).headers?.set === "function") {
        (event.req as any).headers.set("accept", `text/html, ${accept}`);
      }
    } catch {}
  }

  return undefined;
});
