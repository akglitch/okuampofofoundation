"use client";

import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/artwork";
import { formatPrice, yearString } from "@/lib/artwork-utils";

interface HeroBannerProps {
  artwork: Artwork;
}

export function HeroBanner({ artwork }: HeroBannerProps) {
  const hasSecondImage = artwork.media.length > 1;
  const isSold = artwork.status === "sold";

  return (
    <section
      className="group relative w-full bg-white"
      style={{ height: "min(95vh, 860px)" }}
      aria-label={`Featured: ${artwork.title}`}
    >
      {/* Full-bleed image */}
      <Image
        src={artwork.media[0]}
        alt={`${artwork.title}, ${artwork.artist.name}, ${artwork.year}`}
        fill
        sizes="100vw"
        className={`
          object-cover object-center
          transition-opacity duration-700 ease-in-out
          ${isSold ? "grayscale" : ""}
          ${hasSecondImage ? "[@media(hover:hover)]:group-hover:opacity-0" : ""}
        `}
        priority
      />

      {hasSecondImage && (
        <Image
          src={artwork.media[1]}
          alt={`${artwork.title} — alternate view`}
          fill
          sizes="100vw"
          className={`
            object-cover object-center opacity-0
            transition-opacity duration-700 ease-in-out
            ${isSold ? "grayscale" : ""}
            [@media(hover:hover)]:group-hover:opacity-100
          `}
          aria-hidden="true"
        />
      )}

      {/* Top bar — sits above the image */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 md:px-10 py-6">
        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white mix-blend-difference">
          Okuampofo Foundation
        </span>
        <nav className="hidden md:flex gap-8">
          {["Works", "Artists", "Exhibitions", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-white mix-blend-difference focus-visible:underline"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom text — anchored to footer of hero */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-6 md:px-10 pb-8 md:pb-12 gap-6">
        {/* Title — dominant, left */}
        <Link
          href={`/works/${artwork.slug}`}
          className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
        >
          <h1
            className="font-serif font-light text-white leading-[0.92] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
          >
            {artwork.title}
          </h1>
        </Link>

        {/* Right: artist + year only — two lines, nothing more */}
        <div className="shrink-0 text-right pb-1 hidden sm:block">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/70">
            {artwork.artist.name}
          </p>
          <p
            className="font-sans text-[10px] text-white/50 mt-1"
            style={{ fontVariantNumeric: "oldstyle-nums" }}
          >
            {yearString(artwork.year)}
          </p>
        </div>
      </div>
    </section>
  );
}
