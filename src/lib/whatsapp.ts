import { business } from "@/data/business";

export interface WhatsAppOptions {
  message?: string | undefined;
  service?: string | undefined;
  date?: string | undefined;
  location?: string | undefined;
}

const genericMessage =
  "Hi Shreya, I found you through your website and I'd like to check your availability.";

export function buildWhatsAppMessage(options: WhatsAppOptions | string = {}) {
  if (typeof options === "string") return options;
  const { message, service, date, location } = options;
  const parts = [message ?? genericMessage];
  if (service) parts.push(`Service: ${service}.`);
  if (date) parts.push(`Event date: ${date}.`);
  if (location) parts.push(`Location: ${location}.`);
  return parts.join(" ");
}

export function buildWhatsAppLink(options: WhatsAppOptions | string = {}) {
  const text = encodeURIComponent(buildWhatsAppMessage(options));
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}
