"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/artwork";

interface HeroSliderProps {
  works: Artwork[];
}

export function HeroSlider({ works }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const INTERVAL = 4500; // ms per slide
  const TICK = 50;       // ms per progress update

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % works.length);
    setProgress(0);
  }, [works.length]);

  // Progress bar
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
      {works.map((work, i) => (
        <div
          key={work.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={work.media[0]}
            alt={`${work.title} by ${work.artist.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Bottom overlay — work info + controls */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1c1c1a]/80 via-[#1c1c1a]/30 to-transparent px-6 pt-16 pb-5">

        {/* Current work info */}
        <div className="mb-4">
          {works.map((work, i) => (
            <div
              key={work.id}
              className={`transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              <Link
                href={`/works/${work.slug}`}
                className="group/link block focus-visible:outline-none"
              >
                <p className="font-sans text-[9px] uppercase tracking-widest text-white/50 mb-1">
                  {work.artist.name} &middot; {work.artist.country}
                </p>
                <p className="font-serif text-white text-xl font-light leading-tight group-hover/link:text-white/70 transition-colors">
                  {work.title}
                  <span className="font-sans text-[10px] ml-3 text-white/40 align-middle">
                    {work.year}
                  </span>
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* Progress bar + dot nav */}
        <div className="flex items-center gap-3">
          {works.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to ${works[i].title}`}
              className="relative h-[2px] bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              style={{ width: `${80 / works.length}px` }}
            >
              {/* Animated fill on active */}
              <span
                className="absolute inset-y-0 left-0 bg-white transition-none"
                style={{
                  width: i === current ? `${progress}%` : i < current ? "100%" : "0%",
                  transition: i === current ? "none" : "width 0.3s ease",
                }}
              />
            </button>
          ))}

          {/* Count */}
          <span className="font-sans text-[9px] text-white/30 ml-auto tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
