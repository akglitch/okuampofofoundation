import Image from "next/image";
import Link from "next/link";
import { MOCK_ARTWORKS } from "@/lib/mock-artworks";
import { formatPrice } from "@/lib/artwork-utils";
import { HeroSlider } from "@/components/HeroSlider";
import { SiteHeader } from "@/components/SiteHeader";
import { PromoSection } from "@/components/PromoSection";

export default function Home() {
  const [, ...works] = MOCK_ARTWORKS;

  return (
    <div className="bg-[#faf9f7] min-h-screen">
      <SiteHeader />

      {/* ─── HERO — full bleed ─── */}
      <section className="relative w-full" style={{ height: "100svh" }}>

        {/* Slider fills the entire viewport */}
        <div className="absolute inset-0">
          <HeroSlider
            images={[
              "/ChatGPT Image Sep 14, 2026, 10_29_11 AM.png",
              "/ChatGPT Image Sep 14, 2026, 10_30_02 AM.png",
              "/ChatGPT Image Sep 14, 2026, 10_33_58 AM - Copy.png",
            ]}
          />
        </div>

        {/* Left gradient — darkens left side so logo + name text stay legible */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-2/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(28,28,26,0.80) 0%, rgba(28,28,26,0.45) 50%, transparent 100%)",
          }}
        />

        {/* Name block — floats above the slider's bottom info strip */}
        <div className="absolute left-0 z-20 px-5 md:px-10" style={{ bottom: "160px" }}>
          <p className="font-sans text-[9px] uppercase tracking-[0.28em] text-white/60 mb-4">
            Sculptor &middot; Accra, Ghana &middot; est. 1958
          </p>
          <h1
            className="font-serif font-light text-white leading-[0.88] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}
          >
            Dr Oku<br />
            Am<span className="italic">pofo</span>
          </h1>
        </div>

      </section>


      {/* ─── WORKS ─── */}
      <section id="works" className="px-5 md:px-10 py-16 border-t border-[#e2e0db]">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-sans text-[10px] uppercase tracking-widest text-[#9a9690]">Works</h2>
          <p className="font-sans text-[11px] text-[#c0bdb7]">{MOCK_ARTWORKS.length} pieces</p>
        </div>

        {/* Grid — first piece gets a wide cell, rest are 4-col on lg, 5-col on xl */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-[#e2e0db]">

          {/* First work — spans 2 cols on lg */}
          <WorkCard work={works[0]} wide priority />

          {/* Next 2 — sit beside the wide one on lg */}
          {works.slice(1, 3).map((work, i) => (
            <WorkCard key={work.id} work={work} priority={i < 1} />
          ))}

          {/* Remaining works */}
          {works.slice(3).map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      {/* A quote — breaks the grid rhythm */}
      <section className="px-5 md:px-10 py-20 border-t border-[#e2e0db] max-w-3xl">
        <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-8">
          On cultural renaissance
        </p>
        <blockquote
          className="font-serif font-light text-[#1c1c1a] leading-[1.3] tracking-[-0.01em] mb-8"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
        >
          &ldquo;With proper guidance, Sankofa may well see a definite renaissance
          in Ghanaian civilisation.&rdquo;
        </blockquote>
        <p className="font-sans text-[12px] text-[#9a9690]">— Dr Oku Ampofo, 1968</p>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="px-5 md:px-10 py-16 border-t border-[#e2e0db]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          <div>
            <h2 className="font-sans text-[10px] uppercase tracking-widest text-[#9a9690] mb-6">
              Get in touch
            </h2>
            <p className="font-sans text-[14px] leading-[1.8] text-[#5a5855] mb-8 max-w-sm">
              To enquire about a work, discuss a commission, or arrange
              a studio visit — reach out directly.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/233201234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 bg-[#1c1c1a] text-white font-sans text-[12px] tracking-wide hover:bg-[#b85c2c] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85c2c]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp — fastest response
              </a>
              <a
                href="mailto:oku@okuampofo.com"
                className="flex items-center gap-3 px-5 py-4 border border-[#e2e0db] text-[#1c1c1a] font-sans text-[12px] tracking-wide hover:border-[#b85c2c] hover:text-[#b85c2c] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85c2c]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                oku@okuampofo.com
              </a>
            </div>
          </div>

          {/* Simple enquiry note */}
          <div className="border-l border-[#e2e0db] pl-10 hidden md:block">
            <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] mb-6">
              Commission process
            </p>
            <ol className="space-y-5">
              {[
                ["Get in touch", "Describe what you have in mind — material, scale, setting."],
                ["Studio consultation", "We discuss the piece over call or in person if you can visit."],
                ["Deposit & begin", "50% deposit to start. Work ships when complete."],
                ["Delivery", "Insured shipping worldwide. Certificate of authenticity included."],
              ].map(([title, desc], i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-sans text-[10px] text-[#c0bdb7] mt-0.5 shrink-0 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-sans text-[12px] text-[#1c1c1a] mb-0.5">{title}</p>
                    <p className="font-sans text-[11px] text-[#9a9690] leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── PROMO BANNER ─── */}
      <PromoSection />

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

/* ─── WorkCard ─── */
function WorkCard({
  work,
  wide = false,
  priority = false,
}: {
  work: (typeof MOCK_ARTWORKS)[0];
  wide?: boolean;
  priority?: boolean;
}) {
  const isSold = work.status === "sold";
  const isOnHold = work.status === "on_hold";

  const dims = [work.dimensions.h, work.dimensions.w, work.dimensions.d]
    .filter(Boolean)
    .join(" × ") + " " + work.dimensions.unit;

  return (
    <article className={`bg-[#faf9f7] flex flex-col ${wide ? "sm:col-span-2 lg:col-span-2" : ""}`}>

      {/* Image — single, static */}
      <Link
        href={`/works/${work.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85c2c]"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className={`relative overflow-hidden bg-[#ece9e4] ${
            wide ? "aspect-[16/9]" : "aspect-square"
          } ${isSold ? "opacity-55" : ""}`}
        >
          <Image
            src={work.media[0]}
            alt={`${work.title}, ${work.year}`}
            fill
            sizes={wide ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 50vw, 25vw"}
            className="object-contain p-2"
            priority={priority}
          />
          {(isSold || isOnHold) && (
            <div className="absolute top-2.5 left-2.5 bg-[#1c1c1a]/80 px-2 py-0.5">
              <span className="font-sans text-[8px] uppercase tracking-widest text-white/70">
                {isSold ? "Sold" : "On hold"}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Info block */}
      <div className="flex flex-col flex-1 px-3 pt-3 pb-4 border-t border-[#e2e0db]">

        {/* Title + price */}
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <Link
            href={`/works/${work.slug}`}
            className="font-serif text-base font-medium text-[#1c1c1a] leading-snug hover:text-[#b85c2c] transition-colors focus-visible:outline-none focus-visible:underline"
          >
            {work.title}
          </Link>
          <span className="font-sans text-[10px] text-[#9a9690] shrink-0">
            {isSold ? "Sold" : work.price === "POA" ? "Enquire" : formatPrice(work.price)}
          </span>
        </div>

        {/* Material + dimensions — the "label" line */}
        <p className="font-sans text-[10px] text-[#b0ada8] mb-3 leading-snug">
          {work.medium}&ensp;&middot;&ensp;{dims}
          {work.edition && (
            <span className="text-[#c8c5c0]">&ensp;&middot;&ensp;{work.edition}</span>
          )}
        </p>

        {/* Story excerpt */}
        <p className="font-sans text-[11px] leading-[1.7] text-[#5a5855] line-clamp-2 mb-2 flex-1">
          {work.description}
        </p>

        {/* Read more */}
        <Link
          href={`/works/${work.slug}`}
          className="font-sans text-[10px] uppercase tracking-widest text-[#9a9690] hover:text-[#b85c2c] transition-colors self-start focus-visible:outline-none focus-visible:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

