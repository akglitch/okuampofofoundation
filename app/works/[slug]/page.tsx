import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MOCK_ARTWORKS } from "@/lib/mock-artworks";
import { WorkDetailClient } from "@/components/WorkDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MOCK_ARTWORKS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = MOCK_ARTWORKS.find((a) => a.slug === slug);
  if (!artwork) return {};
  return {
    title: `${artwork.title} — Dr Oku Ampofo`,
    description: artwork.description,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const artwork = MOCK_ARTWORKS.find((a) => a.slug === slug);
  if (!artwork) notFound();

  const related = MOCK_ARTWORKS.filter(
    (a) => a.id !== artwork.id && a.artist.slug === artwork.artist.slug
  ).slice(0, 4);

  // Fall back to other works if not enough from same artist
  const filler = MOCK_ARTWORKS.filter(
    (a) => a.id !== artwork.id && !related.find((r) => r.id === a.id)
  ).slice(0, Math.max(0, 4 - related.length));

  return (
    <WorkDetailClient artwork={artwork} related={[...related, ...filler]} />
  );
}
