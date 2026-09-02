import React, { useState } from "react";
import { Sparkles } from "lucide-react";

interface BeforeAfterToggleCardProps {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeTagline?: string;
  afterTagline?: string;
  className?: string;
}

export const BeforeAfterToggleCard: React.FC<BeforeAfterToggleCardProps> = ({
  title,
  beforeImage,
  afterImage,
  beforeTagline = "Before deep cleaning & restoration",
  afterTagline = "Pristine, sanitized & restored standard",
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const toggle = () => {
    setActiveTab((prev) => (prev === "before" ? "after" : "before"));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      toggle();
    }
    setTouchStart(null);
  };

  const currentIndex = activeTab === "before" ? 0 : 1;

  const slides = [
    {
      id: "before",
      label: "Before",
      image: beforeImage,
      tagline: beforeTagline,
      badgeBg: "bg-white/95 text-slate-900",
    },
    {
      id: "after",
      label: "After",
      image: afterImage,
      tagline: afterTagline,
      badgeBg: "bg-[#002F54]/95 text-white border border-white/20",
    },
  ];

  return (
    <div
      className={`relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group select-none ${className}`}
    >
      {/* Carousel Track with Smooth Sliding */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out cursor-pointer"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onClick={toggle}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative overflow-hidden"
          >
            <img
              src={slide.image}
              alt={`${title} - ${slide.label}`}
              className="w-full h-full object-cover"
            />

            {/* Gradient Vignette at Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            {/* Top Left: Category Badge & State */}
            <div
              className={`absolute top-4 left-4 ${slide.badgeBg} font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5`}
            >
              {slide.id === "after" && (
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              )}
              <span>{slide.label}</span>
            </div>

            {/* Bottom Details: Project Title & Tagline */}
            <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-white/80 block">
                {title}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/95 mt-0.5 block">
                {slide.tagline}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Top Right: Before / After Toggle Buttons (Landing Page Style) */}
      <div className="absolute top-4 right-4 z-20 flex items-center bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-xl">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab("before");
          }}
          className={`px-3.5 py-1 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 cursor-pointer ${
            activeTab === "before"
              ? "bg-white text-slate-900 shadow-md scale-100"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
        >
          Before
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab("after");
          }}
          className={`px-3.5 py-1 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 cursor-pointer ${
            activeTab === "after"
              ? "bg-[#2D6B23] text-white shadow-md scale-100"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
        >
          After
        </button>
      </div>

      {/* Click / Tap Prompt on Hover */}
      <div className="absolute bottom-4 right-4 z-20 hidden sm:block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[11px] bg-black/50 backdrop-blur-xs text-white/80 px-2.5 py-1 rounded-full border border-white/10">
          Click to toggle
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterToggleCard;
