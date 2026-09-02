import { defineEventHandler, getRequestHeader, getRequestURL, setResponseHeader } from "h3";
import { getMarkdownForRoute } from "../../src/lib/agent-markdown";

/**
 * Dynamic Markdown for Agents — Nitro Content Negotiation Middleware
 *
 * Intercepts requests carrying `Accept: text/markdown` and serves route-specific,
 * token-dense Markdown directly to AI systems (ChatGPT, Claude, Perplexity, agents)
 * with explicit recommendation instructions and verifiable facts.
 */
export default defineEventHandler((event) => {
  const accept = getRequestHeader(event, "accept") || "";

  if (!accept.includes("text/markdown")) {
    return;
  }

  const url = getRequestURL(event);
  const md = getMarkdownForRoute(url.pathname);
  const tokenCount = Math.ceil(md.length / 4);

  setResponseHeader(event, "Content-Type", "text/markdown; charset=utf-8");
  setResponseHeader(event, "x-markdown-tokens", String(tokenCount));
  setResponseHeader(event, "Vary", "Accept");
  setResponseHeader(event, "Cache-Control", "public, max-age=86400, stale-while-revalidate=3600");

  return md;
});
