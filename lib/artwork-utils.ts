import type { Artwork, Dimensions } from "@/types/artwork";

/** Format dimensions with proper × (multiplication sign U+00D7) */
export function formatDimensions(d: Dimensions): string {
  const parts = [d.h, d.w, d.d].filter(Boolean) as number[];
  return parts.join("\u202F\u00D7\u202F") + "\u202F" + d.unit;
}

/** Format medium + dimensions into a single line */
export function formatMediumLine(artwork: Artwork): string {
  return `${artwork.medium}\u2002\u00B7\u2002${formatDimensions(artwork.dimensions)}`;
}

/**
 * Format price.
 * Numbers are formatted with a comma thousands separator.
 * "POA" returns "Price on request".
 */
export function formatPrice(price: Artwork["price"]): string {
  if (price === "POA") return "Price on request";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/** Format edition string — already supplied by data, but normalise missing */
export function formatEdition(edition?: string): string | null {
  if (!edition) return null;
  return edition;
}

/**
 * Returns old-style figure class for a year.
 * We rely on Fraunces' built-in onum feature via CSS font-variant-numeric.
 */
export function yearString(year: number): string {
  return String(year);
}
