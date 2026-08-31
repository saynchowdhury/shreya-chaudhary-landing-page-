import { useState, useRef, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage = "/portfolio/shreya-with-bride-meerut.jpeg",
  afterImage = "/portfolio/shreya-with-bride-meerut.jpeg",
  beforeAlt = "Before Makeup - Clean Prep",
  afterAlt = "After Signature HD Bridal Makeup by Shreya Chaudhary",
  beforeLabel = "Bare Prep",
  afterLabel = "Signature HD Bridal Glam",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/5] w-full select-none overflow-hidden rounded border border-charcoal/15 bg-charcoal shadow-xl md:aspect-[16/11] ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover object-top"
        loading="eager"
        decoding="async"
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover object-top filter contrast-[0.95] brightness-[0.98]"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Floating Badges */}
      <div className="pointer-events-none absolute bottom-5 left-5 z-10 flex items-center gap-1.5 rounded-full bg-charcoal/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-ivory backdrop-blur-md">
        <span>{beforeLabel}</span>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-5 z-10 flex items-center gap-1.5 rounded-full bg-charcoal/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-peach backdrop-blur-md">
        <span>{afterLabel}</span>
      </div>

      {/* Interactive Divider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 cursor-ew-resize bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-charcoal/90 text-ivory shadow-xl backdrop-blur-sm transition-transform hover:scale-110 active:scale-95">
          <MoveHorizontal className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
