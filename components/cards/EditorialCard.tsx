"use client";

import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/artwork";
import { formatPrice, formatEdition, yearString } from "@/lib/artwork-utils";

interface EditorialCardProps {
  artwork: Artwork;
  priority?: boolean;
}

export function EditorialCard({ artwork, priority = false }: EditorialCardProps) {
  const hasSecondImage = artwork.media.length > 1;
  const isSold = artwork.status === "sold";
  const isOnHold = artwork.status === "on_hold";
  const edition = formatEdition(artwork.edition);

  return (
    <article className={`group relative flex flex-col sm:flex-row bg-white ${isSold ? "opacity-70" : ""}`}>
      <Link
        href={`/works/${artwork.slug}`}
        className="contents focus-visible:outline-none"
        aria-label={`${artwork.title} by ${artwork.artist.name}`}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] sm:aspect-auto sm:w-[44%] shrink-0 overflow-hidden bg-[#f0f0f0]">
          <Image
            src={artwork.media[0]}
            alt={`${artwork.title}, ${artwork.artist.name}, ${artwork.year}`}
            fill
            sizes="(max-width: 640px) 100vw, 44vw"
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
              alt={`${artwork.title} — alternate angle`}
              fill
              sizes="(max-width: 640px) 100vw, 44vw"
              className={`
                object-cover opacity-0 transition-opacity duration-500 ease-in-out
                ${isSold ? "grayscale" : ""}
                [@media(hover:hover)]:group-hover:opacity-100
              `}
              aria-hidden="true"
            />
          )}
          {isOnHold && (
            <div className="absolute inset-y-0 right-0 w-[2px] bg-[#0a0a0a]" />
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between p-6 sm:p-8 sm:w-[56%] border-t sm:border-t-0 sm:border-l border-[#e0e0e0]">
          <div>
            <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#6a6a6a] mb-5">
              {artwork.artist.name}&ensp;&mdash;&ensp;{artwork.artist.country}
            </p>

            <h2 className="font-serif text-[1.5rem] leading-[1.15] font-light tracking-[-0.02em] text-[#0a0a0a] mb-1">
              {artwork.title}
            </h2>

            <p
              className="font-sans text-[10px] text-[#6a6a6a] mb-6"
              style={{ fontVariantNumeric: "oldstyle-nums" }}
            >
              {yearString(artwork.year)}
            </p>

            <p className="font-serif italic text-[12px] text-[#6a6a6a] mb-1">
              {artwork.medium}
            </p>
            <p className="font-sans text-[10px] text-[#6a6a6a] mb-6">
              {artwork.dimensions.h}&thinsp;&times;&thinsp;
              {artwork.dimensions.w}
              {artwork.dimensions.d && <>&thinsp;&times;&thinsp;{artwork.dimensions.d}</>}
              &thinsp;{artwork.dimensions.unit}
            </p>

            <p className="font-sans text-[11px] leading-[1.7] text-[#0a0a0a] border-l border-[#e0e0e0] pl-4">
              {artwork.description}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-[#e0e0e0] flex items-baseline justify-between">
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
              <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-[#6a6a6a]">
                {edition}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
