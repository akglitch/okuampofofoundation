"use client";

import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/artwork";
import { formatPrice, formatEdition, yearString } from "@/lib/artwork-utils";

interface QuietGridCardProps {
  artwork: Artwork;
  priority?: boolean;
}

export function QuietGridCard({ artwork, priority = false }: QuietGridCardProps) {
  const hasSecondImage = artwork.media.length > 1;
  const isSold = artwork.status === "sold";
  const isOnHold = artwork.status === "on_hold";
  const edition = formatEdition(artwork.edition);

  return (
    <article className={`group relative overflow-hidden bg-[#0a0a0a] ${isSold ? "opacity-60" : ""}`}>
      <Link
        href={`/works/${artwork.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
        aria-label={`${artwork.title} by ${artwork.artist.name}`}
      >
        <div className="relative aspect-[3/4]">
          <Image
            src={artwork.media[0]}
            alt={`${artwork.title}, ${artwork.artist.name}, ${artwork.year}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`
              object-cover transition-opacity duration-500 ease-in-out
              ${isSold ? "grayscale" : ""}
              ${hasSecondImage ? "[@media(hover:hover)]:group-hover:opacity-0" : ""}
            `}
            priority={priority}
          />
          {hasSecondImage && (
            <Image
              src={artwork.media[1]}
              alt={`${artwork.title} — alternate view`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={`
                object-cover opacity-0 transition-opacity duration-500 ease-in-out
                ${isSold ? "grayscale" : ""}
                [@media(hover:hover)]:group-hover:opacity-100
              `}
              aria-hidden="true"
            />
          )}
          {isOnHold && <div className="absolute inset-x-0 top-0 h-[2px] bg-white/60" />}

          {/* Hover overlay — desktop only */}
          <div
            className="
              absolute inset-x-0 bottom-0 px-4 pt-10 pb-4
              bg-[#0a0a0a]/80
              opacity-0 [@media(hover:hover)]:group-hover:opacity-100
              transition-opacity duration-300 ease-in-out
            "
            aria-hidden="true"
          >
            <p className="font-sans text-[8px] uppercase tracking-[0.22em] text-white/50 mb-1">
              {artwork.artist.name}
            </p>
            <p className="font-serif text-[1rem] font-light text-white leading-tight">
              {artwork.title}
            </p>
          </div>
        </div>

        {/* Touch-only strip */}
        <div className="px-3 py-3 [@media(hover:hover)]:hidden">
          <p className="font-sans text-[8px] uppercase tracking-[0.18em] text-white/40 mb-0.5">
            {artwork.artist.name}
          </p>
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-[0.95rem] font-light text-white">{artwork.title}</h2>
            <span
              className="font-sans text-[9px] text-white/40 shrink-0 ml-2"
              style={{ fontVariantNumeric: "oldstyle-nums" }}
            >
              {yearString(artwork.year)}
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            {isSold ? (
              <span className="font-sans text-[8px] uppercase tracking-[0.16em] text-white/30">Sold</span>
            ) : (
              <span className="font-sans text-[9px] text-white/50">{formatPrice(artwork.price)}</span>
            )}
            {edition && (
              <span className="font-sans text-[8px] uppercase tracking-[0.12em] text-white/30">{edition}</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
