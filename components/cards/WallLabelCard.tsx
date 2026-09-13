"use client";

import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/artwork";
import { formatPrice, formatEdition, yearString } from "@/lib/artwork-utils";

interface WallLabelCardProps {
  artwork: Artwork;
  priority?: boolean;
}

export function WallLabelCard({ artwork, priority = false }: WallLabelCardProps) {
  const hasSecondImage = artwork.media.length > 1;
  const isSold = artwork.status === "sold";
  const isOnHold = artwork.status === "on_hold";
  const edition = formatEdition(artwork.edition);

  return (
    <article className="group flex flex-col bg-white">
      <Link
        href={`/works/${artwork.slug}`}
        className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0a0a0a]"
        aria-label={`${artwork.title} by ${artwork.artist.name}`}
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#f0f0f0]">
          <Image
            src={artwork.media[0]}
            alt={`${artwork.title}, ${artwork.artist.name}, ${artwork.year}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`
              object-cover
              transition-opacity duration-500 ease-in-out
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`
                object-cover opacity-0
                transition-opacity duration-500 ease-in-out
                ${isSold ? "grayscale" : ""}
                [@media(hover:hover)]:group-hover:opacity-100
              `}
              aria-hidden="true"
            />
          )}

          {/* On-hold: right-edge rule */}
          {isOnHold && (
            <div className="absolute inset-y-0 right-0 w-[2px] bg-[#0a0a0a]" />
          )}
        </div>

        {/* Text block */}
        <div className="pt-4 pb-6 border-t border-[#e0e0e0]">
          {/* Artist */}
          <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#6a6a6a] mb-2">
            {artwork.artist.name}
          </p>

          {/* Title + year */}
          <div className="flex items-baseline gap-3 mb-1">
            <h2 className="font-serif text-[1.05rem] font-light leading-tight tracking-[-0.01em] text-[#0a0a0a]">
              {artwork.title}
            </h2>
            <span
              className="font-sans text-[10px] text-[#6a6a6a] shrink-0"
              style={{ fontVariantNumeric: "oldstyle-nums" }}
            >
              {yearString(artwork.year)}
            </span>
          </div>

          {/* Medium */}
          <p className="font-serif italic text-[11px] text-[#6a6a6a] mb-3">
            {artwork.medium}
          </p>

          {/* Description */}
          <p className="font-sans text-[11px] leading-[1.65] text-[#0a0a0a] mb-4 line-clamp-2">
            {artwork.description}
          </p>

          {/* Price + edition */}
          <div className="flex items-end justify-between pt-3 border-t border-[#e0e0e0]">
            {isSold ? (
              <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-[#6a6a6a]">
                Sold
              </span>
            ) : (
              <span className="font-sans text-[11px] text-[#0a0a0a]">
                {formatPrice(artwork.price)}
              </span>
            )}
            {edition && (
              <span className="font-sans text-[9px] uppercase tracking-[0.12em] text-[#6a6a6a]">
                {edition}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
