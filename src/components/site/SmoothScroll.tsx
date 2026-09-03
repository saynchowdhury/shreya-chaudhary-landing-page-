import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    // 1. Accessibility & Mobile: Check user's OS preference or mobile touch screen
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      motionQuery.matches ||
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    // 2. Initialize Lenis with luxury momentum curve (desktop pointer devices only)
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1,
      // Protect mobile responsiveness: avoid touch hijacking
      syncTouch: false,
      autoRaf: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 3. Smooth anchor link interceptor for in-page navigation (#links)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href*='#']");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      const [pathname, hash] = href.split("#");
      const currentPathname = window.location.pathname;

      if ((pathname === "" || pathname === currentPathname) && hash) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: -80,
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });

    // 4. Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
