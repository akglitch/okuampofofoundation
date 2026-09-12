export interface Artist {
  name: string;
  country: string;
  slug: string;
}

export interface Dimensions {
  h: number;
  w: number;
  d?: number;
  unit: "cm" | "in" | "mm";
}

export type ArtworkStatus =
  | "available"
  | "sold"
  | "on_hold"
  | "enquiry_only";

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: Dimensions;
  edition?: string;
  price: number | "POA";
  status: ArtworkStatus;
  provenance?: string;
  description: string;
  media: string[];
  artist: Artist;
}
