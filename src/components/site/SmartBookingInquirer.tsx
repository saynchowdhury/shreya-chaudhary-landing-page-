import { useState } from "react";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { Calendar, MapPin, ArrowRight, Check } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SmartBookingInquirer() {
  const [selectedService, setSelectedService] = useState<string>("bridal-makeup");
  const [eventDate, setEventDate] = useState<string>("");
  const [location, setLocation] = useState<string>("Meerut");
  const [guestCount, setGuestCount] = useState<string>("Bride Only");
  const [customNotes, setCustomNotes] = useState<string>("");

  const currentServiceObj = services.find((s) => s.slug === selectedService) || services[0]!;

  const handleWhatsAppInquiry = () => {
    const formattedDate = eventDate
      ? new Date(eventDate).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "Date to be confirmed";

    const message = `Hello Shreya,%0A%0AI would like to check your availability and get a consultation for my upcoming event:%0A%0A*Service:* ${currentServiceObj.name}%0A*Event Date:* ${formattedDate}%0A*Location:* ${location}%0A*Members:* ${guestCount}${customNotes ? `%0A*Notes:* ${encodeURIComponent(customNotes)}` : ""}%0A%0APlease let me know your availability and package details. Thank you!`;

    window.open(`https://wa.me/${business.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-charcoal/15 bg-card shadow-xl">
      <div className="bg-charcoal p-6 sm:p-8 text-ivory">
        <span className="eyebrow text-peach">Date & Availability Check</span>
        <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-ivory">
          Reserve Your Occasion Date
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-ivory/70 max-w-lg font-light leading-relaxed">
          Select your service and date below to check Shreya's calendar directly on WhatsApp.
        </p>
      </div>

      <div className="space-y-6 p-6 sm:p-8">
        {/* Service Selector Buttons */}
        <div>
          <label className="block text-xs uppercase tracking-[0.14em] text-charcoal font-semibold mb-3">
            1. Select Occasion / Service
          </label>
          <div className="grid gap-3 sm:grid-cols-3">
            {services.map((service) => {
              const isSelected = selectedService === service.slug;
              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setSelectedService(service.slug)}
                  className={`flex flex-col justify-between rounded-xl border p-4 text-left transition-all cursor-pointer ${
                    isSelected
                      ? "border-charcoal bg-champagne/40 shadow-sm"
                      : "border-charcoal/15 bg-card hover:border-charcoal/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-base font-medium text-charcoal">
                      {service.shortName}
                    </span>
                    {isSelected && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-charcoal text-ivory text-[0.6rem]">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                  <span className="mt-2 text-sm font-semibold text-charcoal/90">
                    {service.priceLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Date and Location Inputs */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="event-date"
              className="block text-xs uppercase tracking-[0.14em] text-charcoal font-semibold mb-2"
            >
              2. Wedding / Event Date
            </label>
            <div className="relative">
              <input
                id="event-date"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full rounded-lg border border-charcoal/20 bg-background px-4 py-3 text-sm text-charcoal focus:border-charcoal focus:outline-hidden"
              />
              <Calendar className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div>
            <label
              htmlFor="event-location"
              className="block text-xs uppercase tracking-[0.14em] text-charcoal font-semibold mb-2"
            >
              3. Event City / Venue
            </label>
            <div className="relative">
              <select
                id="event-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border border-charcoal/20 bg-background px-4 py-3 text-sm text-charcoal focus:border-charcoal focus:outline-hidden appearance-none"
              >
                <option value="Meerut">Meerut (Local Studio / On-Location)</option>
                <option value="Noida">Noida & Greater Noida</option>
                <option value="Ghaziabad">Ghaziabad & Indirapuram</option>
                <option value="Muzaffarnagar">Muzaffarnagar</option>
                <option value="Shamli">Shamli</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Destination / Other">Destination / Other City</option>
              </select>
              <MapPin className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Guest count & Custom notes */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="guest-count"
              className="block text-xs uppercase tracking-[0.14em] text-charcoal font-semibold mb-2"
            >
              4. Number of People for Makeup
            </label>
            <select
              id="guest-count"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="w-full rounded-lg border border-charcoal/20 bg-background px-4 py-3 text-sm text-charcoal focus:border-charcoal focus:outline-hidden"
            >
              <option value="Bride Only">Bride / Client Only (1 Person)</option>
              <option value="Bride + 1 Family Member">Bride + 1 Family Member</option>
              <option value="Bride + 2-3 Family Members">Bride + 2 to 3 Family Members</option>
              <option value="Bridal Party (4+ Members)">Bridal Party (4+ Members)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="custom-notes"
              className="block text-xs uppercase tracking-[0.14em] text-charcoal font-semibold mb-2"
            >
              5. Special Requests / Outfit Details (Optional)
            </label>
            <input
              id="custom-notes"
              type="text"
              placeholder="e.g. Red lehenga, morning pheras, glass skin HD preferred"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              className="w-full rounded-lg border border-charcoal/20 bg-background px-4 py-3 text-sm text-charcoal focus:border-charcoal focus:outline-hidden"
            />
          </div>
        </div>

        {/* Selected Package Summary & CTA */}
        <div className="flex flex-col gap-4 rounded-xl bg-champagne/30 border border-charcoal/10 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-[0.7rem] uppercase tracking-wider text-muted-foreground font-semibold">
              Selected Package Inclusions:
            </span>
            <p className="mt-1 text-sm font-medium text-charcoal">
              {currentServiceObj.name} · {currentServiceObj.priceLabel}
            </p>
            <p className="text-xs text-muted-foreground">
              Includes Premium Luxury Kit, On-Location Hair Styling, Lashes & Draping.
            </p>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal shadow-md transition-all hover:bg-emerald-400 active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <WhatsAppIcon className="h-4 w-4 text-charcoal shrink-0" />
            <span>Check Date on WhatsApp</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
