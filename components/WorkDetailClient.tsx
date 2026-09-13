"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/artwork";
import { formatPrice, yearString } from "@/lib/artwork-utils";
import { SiteHeader } from "@/components/SiteHeader";

interface WorkDetailClientProps {
  artwork: Artwork;
  related: Artwork[];
}

export function WorkDetailClient({ artwork, related }: WorkDetailClientProps) {
  const [activeImage, setActiveImage] = useState(0);
  const isSold = artwork.status === "sold";
  const isOnHold = artwork.status === "on_hold";
  const isEnquiryOnly = artwork.status === "enquiry_only";

  return (
    <div className="bg-[#faf9f7] min-h-screen">
      <SiteHeader />

      {/* ─── MAIN ─── */}
      <main className="pt-[57px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-57px)]">

          {/* Left — image viewer */}
          <div className="lg:sticky lg:top-[57px] h-[60vh] lg:h-[calc(100vh-57px)] flex flex-col bg-[#ece9e4]">

            {/* Main image */}
            <div className="relative flex-1 overflow-hidden">
              {artwork.media.map((src, i) => (
                <Image
                  key={`${src}-${i}`}
                  src={src}
                  alt={i === 0
                    ? `${artwork.title}, ${artwork.artist.name}, ${artwork.year}`
                    : `${artwork.title} — view ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-contain p-4 md:p-8 transition-opacity duration-400 ${
                    activeImage === i ? "opacity-100" : "opacity-0"
                  }`}
                  priority={i === 0}
                />
              ))}
              {(isSold || isOnHold) && (
                <div className="absolute top-4 left-4 bg-[#1c1c1a]/80 px-2.5 py-1">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-white/70">
                    {isSold ? "Sold" : "On hold"}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail strip — only if multiple images */}
            {artwork.media.length > 1 && (
              <div className="flex gap-1.5 p-3 border-t border-[#e2e0db]">
                {artwork.media.map((src, i) => (
                  <button
                    key={`thumb-${src}-${i}`}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-14 h-14 md:w-16 md:h-16 overflow-hidden shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85c2c] transition-opacity ${
                      activeImage === i ? "opacity-100 ring-1 ring-[#1c1c1a]" : "opacity-40 hover:opacity-70"
                    }`}
                    aria-label={`View image ${i + 1}`}
                    aria-pressed={activeImage === i}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — all the details */}
          <div className="px-6 py-10 md:px-12 md:py-14 lg:py-16 flex flex-col gap-8 border-l border-[#e2e0db]">

            {/* Artist */}
            <div>
              <Link
                href={`/artists/${artwork.artist.slug}`}
                className="font-sans text-[10px] uppercase tracking-widest text-[#9a9690] hover:text-[#b85c2c] transition-colors focus-visible:outline-none focus-visible:underline"
              >
                {artwork.artist.name} — {artwork.artist.country}
              </Link>
            </div>

            {/* Title + year */}
            <div>
              <h1
                className="font-serif font-light text-[#1c1c1a] leading-[1.05] tracking-[-0.02em] mb-2"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                {artwork.title}
              </h1>
              <p
                className="font-sans text-[12px] text-[#9a9690]"
                style={{ fontVariantNumeric: "oldstyle-nums" }}
              >
                {yearString(artwork.year)}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[#e2e0db]" />

            {/* Technical details */}
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <dt className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-1">Medium</dt>
                <dd className="font-sans text-[12px] text-[#1c1c1a]">{artwork.medium}</dd>
              </div>
              <div>
                <dt className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-1">Dimensions</dt>
                <dd className="font-sans text-[12px] text-[#1c1c1a]">
                  {artwork.dimensions.h}&thinsp;&times;&thinsp;{artwork.dimensions.w}
                  {artwork.dimensions.d && <>&thinsp;&times;&thinsp;{artwork.dimensions.d}</>}
                  &thinsp;{artwork.dimensions.unit}
                </dd>
              </div>
              {artwork.edition && (
                <div>
                  <dt className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-1">Edition</dt>
                  <dd className="font-sans text-[12px] text-[#1c1c1a]">{artwork.edition}</dd>
                </div>
              )}
              {artwork.provenance && (
                <div className="col-span-2">
                  <dt className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-1">Provenance</dt>
                  <dd className="font-sans text-[12px] text-[#5a5855] leading-relaxed">{artwork.provenance}</dd>
                </div>
              )}
            </dl>

            {/* Description */}
            <div className="border-t border-[#e2e0db] pt-6">
              <p className="font-sans text-[13px] leading-[1.85] text-[#3a3835]">
                {artwork.description}
              </p>
            </div>

            {/* Price + CTA */}
            <div className="border-t border-[#e2e0db] pt-6">
              {isSold ? (
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-[#9a9690] mb-1">Status</p>
                  <p className="font-sans text-[13px] text-[#1c1c1a] mb-4">This work has been sold.</p>
                  <a
                    href="/#contact"
                    className="inline-block font-sans text-[11px] uppercase tracking-widest text-[#1c1c1a] border-b border-[#1c1c1a] pb-0.5 hover:text-[#b85c2c] hover:border-[#b85c2c] transition-colors"
                  >
                    Enquire about similar works →
                  </a>
                </div>
              ) : (
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-[#9a9690] mb-1">
                    {isOnHold ? "Status" : "Price"}
                  </p>
                  {isOnHold ? (
                    <p className="font-sans text-[13px] text-[#1c1c1a] mb-5">
                      On hold — contact to join the waitlist.
                    </p>
                  ) : (
                    <p className="font-serif text-[1.6rem] font-light text-[#1c1c1a] mb-5">
                      {artwork.price === "POA"
                        ? <span className="text-[1rem] font-sans font-normal text-[#5a5855]">Price on request</span>
                        : formatPrice(artwork.price)
                      }
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/233201234567?text=Hi, I'm interested in "${artwork.title}" (${artwork.year})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-4 bg-[#1c1c1a] text-white font-sans text-[11px] uppercase tracking-widest hover:bg-[#b85c2c] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85c2c]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Enquire via WhatsApp
                    </a>
                    <a
                      href={`mailto:oku@okuampofo.com?subject=Enquiry: ${artwork.title}`}
                      className="flex items-center justify-center gap-2 px-6 py-4 border border-[#e2e0db] text-[#1c1c1a] font-sans text-[11px] uppercase tracking-widest hover:border-[#b85c2c] hover:text-[#b85c2c] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85c2c]"
                    >
                      Email
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* ─── RELATED WORKS ─── */}
        {related.length > 0 && (
          <section className="px-5 md:px-10 py-14 border-t border-[#e2e0db]">
            <h2 className="font-sans text-[10px] uppercase tracking-widest text-[#9a9690] mb-8">
              More works
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/works/${rel.slug}`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85c2c]"
                  aria-label={rel.title}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#ece9e4] mb-3">
                    <Image
                      src={rel.media[0]}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-opacity duration-500 [@media(hover:hover)]:group-hover:opacity-70"
                    />
                  </div>
                  <p className="font-serif text-[0.95rem] font-light text-[#1c1c1a] leading-snug mb-0.5">
                    {rel.title}
                  </p>
                  <p className="font-sans text-[11px] text-[#9a9690]">{rel.medium}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
