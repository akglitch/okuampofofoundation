import type { Artwork } from "@/types/artwork";
import { WallLabelCard } from "@/components/cards/WallLabelCard";
import { FeaturedWallLabelCard } from "@/components/cards/FeaturedWallLabelCard";

interface WorkGridProps {
  artworks: Artwork[];
  featuredId?: string;
}

export function WorkGrid({ artworks, featuredId }: WorkGridProps) {
  const featured = featuredId ? artworks.find((a) => a.id === featuredId) : null;
  const standard = artworks.filter((a) => a.id !== featuredId);
  const before = standard.slice(0, 2);
  const after = standard.slice(2);

  return (
    <section
      aria-label="Works"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#e0e0e0]"
    >
      {featured && (
        <div className="col-span-1 sm:col-span-2 bg-white">
          <FeaturedWallLabelCard artwork={featured} priority />
        </div>
      )}
      {before.map((artwork, i) => (
        <div key={artwork.id} className="bg-white">
          <WallLabelCard artwork={artwork} priority={i === 0 && !featured} />
        </div>
      ))}
      {after.map((artwork) => (
        <div key={artwork.id} className="bg-white">
          <WallLabelCard artwork={artwork} />
        </div>
      ))}
    </section>
  );
}
