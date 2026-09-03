import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Why Shreya", to: "/why-shreya" },
  { label: "Packages", to: "/packages" },
  { label: "Journal", to: "/blog" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 md:h-20 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        <Logo size={44} className="shrink-0 mr-4 xl:mr-8" />

        <nav aria-label="Primary" className="hidden items-center lg:flex lg:gap-3 xl:gap-5 2xl:gap-6.5 shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-charcoal after:w-full font-bold" }}
              className="relative whitespace-nowrap py-1 text-[0.66rem] xl:text-[0.72rem] 2xl:text-[0.75rem] uppercase tracking-[0.10em] xl:tracking-[0.13em] 2xl:tracking-[0.16em] font-semibold text-charcoal/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-blush after:transition-all after:duration-300 hover:text-charcoal hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 ml-4 xl:ml-8 lg:block">
          <WhatsAppButton
            source="header"
            className="px-4 py-2.5 text-[0.64rem] xl:px-5 xl:py-2.5 xl:text-[0.68rem] shadow-sm hover:shadow transition-all"
          >
            Book on WhatsApp
          </WhatsAppButton>
        </div>

        {/* Minimal, elegant mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 transition-colors lg:hidden"
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-border bg-background lg:hidden shadow-lg",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-charcoal font-semibold" }}
              className="border-b border-border/50 py-3.5 text-xs uppercase tracking-[0.18em] font-bold text-charcoal/80 transition-colors hover:text-charcoal last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 pb-2">
            <WhatsAppButton source="mobile_menu" className="w-full justify-center py-3.5 text-xs">
              Book on WhatsApp
            </WhatsAppButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
