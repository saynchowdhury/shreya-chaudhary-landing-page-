import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";
import { FloatingWhatsAppButton } from "./FloatingWhatsAppButton";
import { SmoothScroll } from "./SmoothScroll";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SmoothScroll />
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
}

