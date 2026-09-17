import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyGallery({ images = [], title = "" }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images.length) return null;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-sand-200 shadow-md">
        <img
          src={images[activeIdx]}
          alt={`${title} view ${activeIdx + 1}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-charcoal-900 flex items-center justify-center hover:bg-white shadow-md transition-transform active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-charcoal-900 flex items-center justify-center hover:bg-white shadow-md transition-transform active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="absolute bottom-4 right-4 bg-charcoal-950/75 backdrop-blur-sm text-sand-100 text-xs px-3 py-1 rounded-md font-medium tracking-wide">
          {activeIdx + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Select photo ${idx + 1}`}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                activeIdx === idx
                  ? "border-accent ring-2 ring-accent/30 scale-[0.98]"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}