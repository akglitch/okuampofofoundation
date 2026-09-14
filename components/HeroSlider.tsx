"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface HeroSliderProps {
  images: string[];
}

export function HeroSlider({ images }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const INTERVAL = 5000; // ms per slide
  const TICK = 50;       // ms per progress tick

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
    setProgress(0);
  }, [images.length]);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (TICK / INTERVAL) * 100;
      });
    }, TICK);
    return () => clearInterval(id);
  }, [next]);

  const goTo = (i: number) => {
    setCurrent(i);
    setProgress(0);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1c1c1a]">

      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Progress dots — bottom right */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-[2px] bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            style={{ width: "40px" }}
          >
            <span
              className="absolute inset-y-0 left-0 bg-white"
              style={{
                width: i === current ? `${progress}%` : i < current ? "100%" : "0%",
                transition: i === current ? "none" : "width 0.3s ease",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
