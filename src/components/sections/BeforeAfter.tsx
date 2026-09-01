import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { Container } from "../layout/Container";

const slides = [
  {
    id: "before",
    label: "Before",
    tagline: "Heavy grime, moss & neglected patio surfaces",
    image: "/before-patio.jpg",
    badgeBg: "bg-white/95 text-slate-800",
  },
  {
    id: "after",
    label: "After",
    tagline: "Restored, sealed & immaculate outdoor living space",
    image: "/after-patio.jpg",
    badgeBg: "bg-[#002F54]/95 text-white border border-white/20",
  },
];

export const BeforeAfter: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const toggleSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  };

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 40) {
      toggleSlide();
    }
    setTouchStart(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") toggleSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="bg-[#002F54] py-16 sm:py-20 lg:py-[100px] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtext, Social Proof Badge */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white font-heading leading-tight tracking-tight">
                The Daju Bhai Standard
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-4 max-w-lg">
                Click Before and After to see the remarkable difference our deep
                cleaning services can make. We tackle the toughest grime to
                restore the original beauty of your surfaces.
              </p>
            </div>

            {/* Social Proof Glass Card */}
            <div className="pt-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 inline-flex items-center gap-4 shadow-lg shadow-black/20">
                {/* Overlapping Avatars Stack */}
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Client avatar"
                    className="w-10 h-10 rounded-full border-2 border-[#002F54] object-cover ring-1 ring-white/30 shrink-0"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Client avatar"
                    className="w-10 h-10 rounded-full border-2 border-[#002F54] object-cover -ml-2.5 ring-1 ring-white/30 shrink-0"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Client avatar"
                    className="w-10 h-10 rounded-full border-2 border-[#002F54] object-cover -ml-2.5 ring-1 ring-white/30 shrink-0"
                  />
                  <div className="w-10 h-10 rounded-full bg-[#2D6B23] text-white text-xs font-bold flex items-center justify-center -ml-2.5 border-2 border-[#002F54] shadow-sm shrink-0">
                    +500
                  </div>
                </div>

                {/* Text Details */}
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm sm:text-base leading-tight">
                    Happy Clients
                  </span>
                  <span className="text-white/70 text-xs sm:text-sm mt-0.5">
                    Across Sydney
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clickable Before / After Card */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/20 bg-slate-900 group">
              
              {/* Carousel Track with Smooth Sliding Animation */}
              <div
                className="flex w-full h-full transition-transform duration-500 ease-out cursor-pointer"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onClick={toggleSlide}
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
                      alt={`${slide.label} Clean`}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Vignette at Bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

                    {/* Badge on Top Left */}
                    <div
                      className={`absolute top-4 left-4 ${slide.badgeBg} font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md transition-transform duration-300 flex items-center gap-1.5`}
                    >
                      {slide.id === "after" && (
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      )}
                      <span>{slide.label}</span>
                    </div>

                    {/* Description on Bottom Left */}
                    <div className="absolute bottom-4 left-4 right-20 text-xs sm:text-sm font-medium text-white/90 drop-shadow-md">
                      {slide.tagline}
                    </div>
                  </div>
                ))}
              </div>

              {/* Top Right: Before / After Toggle Buttons */}
              <div className="absolute top-4 right-4 z-20 flex items-center bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-lg">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      currentIndex === idx
                        ? "bg-white text-slate-900 shadow-md font-bold scale-105"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {slide.label}
                  </button>
                ))}
              </div>

              {/* Dot Indicators on Bottom Right */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-6 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
