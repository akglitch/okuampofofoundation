"use client";

import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/artwork";
import { formatPrice, formatEdition, yearString } from "@/lib/artwork-utils";

interface FeaturedWallLabelCardProps {
  artwork: Artwork;
  priority?: boolean;
}

export function FeaturedWallLabelCard({ artwork, priority = true }: FeaturedWallLabelCardProps) {
  const hasSecondImage = artwork.media.length > 1;
  const isSold = artwork.status === "sold";
  const isOnHold = artwork.status === "on_hold";
  const isEnquiryOnly = artwork.status === "enquiry_only";
  const edition = formatEdition(artwork.edition);

  return (
    <article
      className={`group relative col-span-1 md:col-span-2 flex flex-col md:flex-row bg-white border-t border-[#0a0a0a] ${isSold ? "opacity-75" : ""}`}
    >
      <Link
        href={`/works/${artwork.slug}`}
        className="contents focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0a0a0a] focus-visible:ring-offset-4"
        aria-label={`${artwork.title} by ${artwork.artist.name}`}
      >
        {/* Image — 60% */}
        <div className="relative aspect-[4/5] md:aspect-auto md:w-[60%] shrink-0 overflow-hidden bg-[#f0f0f0]">
          <Image
            src={artwork.media[0]}
            alt={`${artwork.title}, ${artwork.artist.name}, ${artwork.year}`}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className={`
              object-cover transition-opacity duration-700 ease-in-out
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
              sizes="(max-width: 768px) 100vw, 60vw"
              className={`
                object-cover opacity-0 transition-opacity duration-700 ease-in-out
                ${isSold ? "grayscale" : ""}
                [@media(hover:hover)]:group-hover:opacity-100
              `}
              aria-hidden="true"
            />
          )}
          {isOnHold && <div className="absolute inset-y-0 right-0 w-[2px] bg-[#0a0a0a]" />}
        </div>

        {/* Text — 40% */}
        <div className="flex flex-col justify-between md:w-[40%] px-8 py-10 md:px-12 md:py-14 border-t md:border-t-0 md:border-l border-[#e0e0e0]">
          <div>
            <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-[#6a6a6a] mb-8">
              {artwork.artist.name}
              <br />
              <span className="tracking-[0.18em]">{artwork.artist.country}</span>
            </p>

            <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.05] font-light tracking-[-0.025em] text-[#0a0a0a] mb-2">
              {artwork.title}
            </h2>

            <p
              className="font-sans text-[11px] text-[#6a6a6a] mb-8"
              style={{ fontVariantNumeric: "oldstyle-nums" }}
            >
              {yearString(artwork.year)}
            </p>

            <div className="w-6 border-t border-[#e0e0e0] mb-8" />

            <p className="font-serif italic text-[13px] text-[#6a6a6a] mb-1">{artwork.medium}</p>
            <p className="font-sans text-[10px] text-[#6a6a6a] mb-10">
              {artwork.dimensions.h}&thinsp;&times;&thinsp;
              {artwork.dimensions.w}
              {artwork.dimensions.d && <>&thinsp;&times;&thinsp;{artwork.dimensions.d}</>}
              &thinsp;{artwork.dimensions.unit}
            </p>

            <blockquote className="border-l border-[#e0e0e0] pl-5 mb-10">
              <p className="font-sans text-[12px] leading-[1.75] text-[#0a0a0a]">
                {artwork.description}
              </p>
            </blockquote>

            {artwork.provenance && (
              <p className="font-sans text-[10px] text-[#6a6a6a] mb-6">
                <span className="uppercase tracking-[0.1em]">Provenance</span>&ensp;
                {artwork.provenance}
              </p>
            )}
          </div>

          <div className="pt-6 border-t border-[#e0e0e0] flex items-end justify-between">
            {isSold ? (
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#6a6a6a]">Sold</span>
            ) : isEnquiryOnly ? (
              <span className="font-sans text-[11px] text-[#0a0a0a]">Enquire</span>
            ) : (
              <span className="font-sans text-[12px] text-[#0a0a0a]">{formatPrice(artwork.price)}</span>
            )}
            {edition && (
              <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-[#6a6a6a]">{edition}</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
