import React, { useState, useRef, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  label: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before cleaning",
  afterAlt = "After cleaning",
  label,
  className = "",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 5) percent = 5;
    if (percent > 95) percent = 95;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`relative select-none overflow-hidden rounded-3xl shadow-xl border border-white/20 bg-slate-900 group cursor-ew-resize min-h-[280px] sm:min-h-[340px] ${className}`}
    >
      {/* Background Image: After */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Foreground Image: Before with clip-path */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Vertical Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Central Circular Drag Handle */}
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full bg-[#002F54] text-white border-2 border-white shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing pointer-events-auto hover:scale-110 transition-transform"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Label Pill */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-md rounded-full px-4 py-1.5 text-white text-xs font-semibold tracking-wide border border-white/10 pointer-events-none">
        {label}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
