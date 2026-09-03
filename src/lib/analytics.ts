/**
 * Google Analytics 4 & Google Ads Conversion Tracking
 * Default Measurement ID: G-FZC03SGE6Y (can be overridden with VITE_GA4_MEASUREMENT_ID)
 */

export type AnalyticsEvent =
  | "whatsapp_click"
  | "portfolio_view"
  | "service_view"
  | "booking_form_start"
  | "booking_form_submit"
  | "instagram_click"
  | "phone_click"
  | "gmb_click"
  | "wedmegood_click"
  | "justdial_click"
  | "service_portfolio_click"
  | "call_click"
  | "testimonial_modal_open"
  | "generate_lead"
  | (string & {});

export const GA4_MEASUREMENT_ID =
  (import.meta.env["VITE_GA4_MEASUREMENT_ID"] as string | undefined) || "G-FZC03SGE6Y";

type DataLayerWindow = typeof window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export interface UtmParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
}

const UTM_STORAGE_KEY = "sc_utm_params";

/**
 * Parses and persists UTM and Google Click ID (gclid) across page navigations.
 */
export function getUtmParams(): UtmParameters {
  if (typeof window === "undefined") return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("utm_source");
    const medium = urlParams.get("utm_medium");
    const campaign = urlParams.get("utm_campaign");
    const term = urlParams.get("utm_term");
    const content = urlParams.get("utm_content");
    const gclid = urlParams.get("gclid");

    if (source || medium || campaign || gclid) {
      const freshParams: UtmParameters = {
        ...(source && { utm_source: source }),
        ...(medium && { utm_medium: medium }),
        ...(campaign && { utm_campaign: campaign }),
        ...(term && { utm_term: term }),
        ...(content && { utm_content: content }),
        ...(gclid && { gclid }),
      };
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(freshParams));
      return freshParams;
    }

    const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as UtmParameters;
    }
  } catch {
    // Ignore storage errors in private browsing
  }

  return {};
}

/**
 * Fires custom events to Google Analytics 4, Google Tag Manager dataLayer,
 * and triggers standard `generate_lead` conversion events for Google Ads.
 */
export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const win = window as DataLayerWindow;
  const utm = getUtmParams();
  const eventPayload = { ...utm, ...payload };

  // 1. GTM dataLayer push
  win.dataLayer = win.dataLayer ?? [];
  win.dataLayer.push({ event, ...eventPayload });

  // 2. Direct gtag event push
  if (typeof win.gtag === "function") {
    win.gtag("event", event, eventPayload);

    // If this is a high-intent lead conversion (WhatsApp, Phone, Form),
    // also fire the standard Google Ads / GA4 "generate_lead" event
    const isLeadEvent =
      event === "whatsapp_click" ||
      event === "phone_click" ||
      event === "call_click" ||
      event === "booking_form_submit";

    if (isLeadEvent) {
      win.gtag("event", "generate_lead", {
        event_category: "lead_generation",
        event_label: (payload["source"] as string) || "website_interaction",
        value: 15000,
        currency: "INR",
        ...eventPayload,
      });
      win.dataLayer.push({
        event: "generate_lead",
        lead_source: payload["source"] || "website",
        ...eventPayload,
      });
    }
  }
}
