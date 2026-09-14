import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { CVTimeline } from "@/components/CVTimeline";

export const metadata = {
  title: "About — Okuampofo Foundation",
  description:
    "Biography and curriculum vitae of Dr Oku Ampofo — physician, sculptor, and pioneer of modern Ghanaian art.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f7] min-h-screen">
      <SiteHeader />

      {/* ─── HERO BIO ─── */}
      <section className="bg-[#1c1c1a] text-white pt-28 md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[640px]">
            <Image
              src="/dr-oku-ampofo.jpg"
              alt="Dr Oku Ampofo working on a sculpture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* Text */}
          <div className="px-8 py-14 md:px-14 md:py-20 flex flex-col justify-between">
            <div>
              <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-8">
                About
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-10">
                Dr Oku Ampofo
              </h1>
              <div className="space-y-5">
                <p className="font-sans text-[13px] leading-[1.9] text-white/65">
                  Born on 4th November 1908 in Akuapem, Gold Coast (now Ghana), Dr Oku Ampofo was educated at Mfantsipim Secondary School (1926–1929) and Achimota University College (1930–1932), before reading medicine at Edinburgh University and the Royal College of Edinburgh and Glasgow (1933–1939), where he qualified with the diplomas L.R.C.P., L.R.C.S. (Edin) and L.R.F.P. &amp; S. (Glas).
                </p>
                <p className="font-sans text-[13px] leading-[1.9] text-white/65">
                  His post-graduate work took him to the Karolinska Hospital in Stockholm, the Liverpool School of Tropical Medicine, and specialist clinics across London. From 1940 he served in general practice in Mampong District, followed by appointment as Senior Medical Officer at Achimota School (1946–1948) and later at Tetteh Quarshie Memorial Hospital (1960–1972).
                </p>
                <p className="font-sans text-[13px] leading-[1.9] text-white/65">
                  A pioneering researcher, he published six landmark papers on tropical medicine under a United Nations grant in 1950–1952, and later conducted plant medicine research with the National Institute of Health, Bethesda, USA (1965–1974). In 1973 the Ghana Government appointed him founding Director of the Centre for Scientific Research Into Plant Medicine, Mampong — a post he held as consultant until 1998.
                </p>
                <p className="font-sans text-[13px] leading-[1.9] text-white/65">
                  Alongside his medical career, Dr Ampofo was a sculptor of international standing. He served as Chairman of the Arts Council of Ghana (1969–1972) and the Ghana Museums and Monuments Board (1973–1977), and was awarded a Doctor of Letters (D.Litt.) by the University of Ghana, Legon in 1974. He was appointed Part-Time Consultant in African Traditional Medicine by the World Health Organisation in 1976.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
              <div>
                <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-1">Born</p>
                <p className="font-sans text-[13px] text-white/70">4 Nov 1908, Akuapem</p>
              </div>
              <div>
                <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-1">Qualified</p>
                <p className="font-sans text-[13px] text-white/70">Edinburgh, 1939</p>
              </div>
              <div>
                <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-1">Active</p>
                <p className="font-sans text-[13px] text-white/70">1940 – 1998</p>
              </div>
              <div>
                <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-1">D.Litt.</p>
                <p className="font-sans text-[13px] text-white/70">Univ. of Ghana, 1974</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUOTES ─── */}
      <section className="px-5 md:px-10 py-20 border-b border-[#e2e0db]">
        <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-12">
          In his own words
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e2e0db]">
          {[
            {
              theme: "On cultural renaissance",
              quote: "With proper guidance, Sankofa may well see a definite renaissance in Ghanaian civilisation.",
              context: "1968 essay on indigenous history as a vehicle for national renewal",
            },
            {
              theme: "On colonial alienation",
              quote: "It was as though the African had to go all the way to Europe to discover himself.",
              context: "Critiquing the removal of African art and heritage to Western institutions",
            },
            {
              theme: "On childhood and community",
              quote: "We were taught to live together as one… when you come to the house, you will not know that this person and that person's mothers are different.",
              context: "Reflecting on his upbringing in Amanase under Chief Kwasi Ampofo",
            },
          ].map(({ theme, quote, context }) => (
            <div key={theme} className="bg-[#faf9f7] px-8 py-10 flex flex-col gap-6">
              <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690]">{theme}</p>
              <blockquote
                className="font-serif font-light text-[#1c1c1a] leading-[1.4] tracking-[-0.01em] flex-1"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
              >
                &ldquo;{quote}&rdquo;
              </blockquote>
              <p className="font-sans text-[10px] text-[#b0ada8] leading-relaxed">{context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INTERACTIVE CV TIMELINE ─── */}
      <CVTimeline />

      {/* ─── FOOTER ─── */}
      <footer className="px-5 md:px-10 py-6 border-t border-[#e2e0db] flex flex-col sm:flex-row gap-3 justify-between">
        <p className="font-sans text-[10px] text-[#9a9690]">
          © {new Date().getFullYear()} Dr Oku Ampofo
        </p>
        <p className="font-sans text-[10px] text-[#9a9690]">
          Accra, Ghana &middot; Mampong-Akuapem, Ghana
        </p>
      </footer>
    </div>
  );
}
