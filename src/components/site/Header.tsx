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
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 md:h-20 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Logo size={48} />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-charcoal after:w-full font-medium" }}
              className="relative text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-blush after:transition-all after:duration-300 hover:text-charcoal hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton source="header" className="px-5 py-2.5 text-[0.68rem]">
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
          className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 transition-colors lg:hidden"
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
              className="border-b border-border/50 py-3.5 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-charcoal last:border-b-0"
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
