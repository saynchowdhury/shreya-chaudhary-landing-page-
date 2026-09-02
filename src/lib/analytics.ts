/**
 * Lightweight analytics hooks. No hardcoded IDs — the measurement ID comes from
 * VITE_GA4_MEASUREMENT_ID and every call no-ops when it is unset.
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
  | (string & {});

export const measurementId = import.meta.env["VITE_GA4_MEASUREMENT_ID"] as string | undefined;

type DataLayerWindow = typeof window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const win = window as DataLayerWindow;
  win.dataLayer = win.dataLayer ?? [];
  win.dataLayer.push({ event, ...payload });
  if (measurementId && typeof win.gtag === "function") {
    win.gtag("event", event, payload);
  }
}
