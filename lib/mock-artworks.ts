import type { Artwork, Artist } from "@/types/artwork";

const OKU_AMPOFO: Artist = {
  name: "Dr Oku Ampofo",
  country: "Ghana",
  slug: "oku-ampofo",
};

export const MOCK_ARTWORKS: Artwork[] = [
  {
    id: "1",
    slug: "mourning-woman",
    title: "Mourning Woman",
    year: 1968,
    medium: "Odum Wood",
    dimensions: { h: 120, w: 45, d: 30, unit: "cm" },
    edition: "Unique",
    price: "POA",
    status: "available",
    description: "Carved from a single block of Odum wood (Iroko). The elongated neck and solemn expression reflect Ampofo's deep engagement with traditional Akan aesthetics, while maintaining a distinctly modernist silhouette. The wood's natural grain emphasizes the downward flow of the mourning posture.",
    media: [
      "/images.jpg",
      "/images.jpg"
    ],
    artist: OKU_AMPOFO,
  },
  {
    id: "2",
    slug: "drummer",
    title: "The Drummer",
    year: 1972,
    medium: "Cast Bronze",
    dimensions: { h: 65, w: 40, d: 35, unit: "cm" },
    edition: "1 of 3",
    price: 24000,
    status: "available",
    description: "Cast in Accra using the traditional lost-wax method. Ampofo captures the rhythmic energy and physical intensity of the drummer in mid-strike. The patina has been treated to achieve a deep, varied finish with subtle verdigris undertones.",
    media: [
      "/images (1).jpg",
      "/images (1).jpg"
    ],
    artist: OKU_AMPOFO,
  },
  {
    id: "3",
    slug: "mother-and-child",
    title: "Mother and Child",
    year: 1965,
    medium: "Concrete",
    dimensions: { h: 90, w: 50, d: 45, unit: "cm" },
    edition: "Unique",
    price: 18500,
    status: "sold",
    description: "A striking piece in cast concrete, a material Ampofo often turned to for public commissions and monumental works. The figures are abstracted, merging into a single solid form that emphasizes the protective bond between mother and infant.",
    media: [
      "/images (2).jpg",
      "/images (2).jpg"
    ],
    artist: OKU_AMPOFO,
  },
  {
    id: "4",
    slug: "market-woman",
    title: "Market Woman",
    year: 1970,
    medium: "Terracotta",
    dimensions: { h: 45, w: 25, d: 25, unit: "cm" },
    edition: "Unique",
    price: "POA",
    status: "on_hold",
    description: "Hand-coiled terracotta figure, fired in a traditional pit kiln. The textured surface and earthy tones give it a profound sense of groundedness. A beautiful example of Ampofo's ceramic work celebrating everyday Ghanaian life.",
    media: [
      "/images (3).jpg",
      "/images (3).jpg"
    ],
    artist: OKU_AMPOFO,
  },
  {
    id: "5",
    slug: "the-thinker",
    title: "The Thinker",
    year: 1975,
    medium: "Ebony Wood",
    dimensions: { h: 55, w: 22, d: 25, unit: "cm" },
    edition: "Unique",
    price: 12500,
    status: "available",
    description: "A contemplative figure carved from dense, dark ebony. The interplay of light and shadow on the highly polished surface emphasizes the figure's introspective mood. Ampofo frequently used ebony for its tight grain and lustrous finish.",
    media: [
      "/images (4).jpg",
      "/images (4).jpg"
    ],
    artist: OKU_AMPOFO,
  },
  {
    id: "6",
    slug: "akua-ba-form",
    title: "Akua'ba Form",
    year: 1982,
    medium: "Bronze",
    dimensions: { h: 50, w: 15, d: 10, unit: "cm" },
    edition: "2 of 5",
    price: 6800,
    status: "sold",
    description: "An interpretation of the traditional Akan fertility figure. Ampofo elongates the form, creating a sleek, elegant silhouette in bronze while retaining the iconic flattened disc head of the original wooden carvings.",
    media: [
      "/images (5).jpg",
      "/images (5).jpg"
    ],
    artist: OKU_AMPOFO,
  },
  {
    id: "7",
    slug: "chief",
    title: "The Chief",
    year: 1960,
    medium: "Mahogany",
    dimensions: { h: 85, w: 35, d: 30, unit: "cm" },
    edition: "Unique",
    price: 24000,
    status: "available",
    description: "A commanding presence in mahogany. The intricate detailing of the regalia showcases Ampofo's skill as a carver. The figure embodies the dignity and authority of traditional leadership.",
    media: [
      "/images (6).jpg",
      "/images (6).jpg"
    ],

    artist: OKU_AMPOFO,
  }
];
