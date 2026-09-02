import { defineEventHandler, getRequestURL, sendRedirect } from "h3";

/**
 * Bridal Catalog Redirect Middleware
 *
 * Catches legacy / space-encoded URLs for the bridal catalog PDF and 301 redirects
 * them to the canonical URL /shreya-chaudhary-makeup-catalog.pdf.
 */
export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  const pathname = decodeURIComponent(url.pathname);

  if (
    pathname === "/Shreya Chaudhary Makeup Catalog.pdf" ||
    url.pathname === "/Shreya%20Chaudhary%20Makeup%20Catalog.pdf" ||
    url.pathname.includes("Shreya%20Chaudhary%20Makeup") ||
    pathname.includes("Shreya Chaudhary Makeup Catalog")
  ) {
    return sendRedirect(event, "/shreya-chaudhary-makeup-catalog.pdf", 301);
  }
  return;
});
