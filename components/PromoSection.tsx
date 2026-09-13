import Image from "next/image";
import Link from "next/link";

export function PromoSection() {
  return (
    <section className="w-full bg-white border-t border-[#e2e0db] relative">
      {/* Top border split effect - black left side, gray rest */}
      <div className="absolute top-0 left-0 w-[30%] h-[1px] bg-black z-10" />
      
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
        {/* Left column (Text & Button) */}
        <div className="md:col-span-5 bg-[#faf9f7] flex flex-col items-center justify-center py-16 px-6 text-center">
          <h2 className="font-sans text-[2rem] md:text-[2.25rem] leading-[1.1] text-black tracking-tight mb-8">
            Discover and Buy<br />
            Art that Moves You
          </h2>
          <Link
            href="/#works"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-2.5 font-sans text-sm font-medium text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            View Arts
          </Link>
        </div>

        {/* Right column (Images) */}
        <div className="md:col-span-7 relative h-[400px] md:h-auto overflow-hidden bg-[#ece9e4]">
          {/* We use one of the local mock images as a placeholder for the background artwork */}
          <Image
            src="/download.webp"
            alt="Discover Art"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
          {/* Simulated App Overlays */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-8 opacity-90 scale-90 md:scale-100">
            {/* Phone 1 */}
            <div className="w-[180px] h-[360px] md:w-[220px] md:h-[440px] bg-white rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden translate-y-8 flex flex-col">
              <div className="p-4 flex-1">
                <h3 className="font-sans text-lg font-semibold tracking-tight leading-none mb-1">New Works for You</h3>
                <p className="font-sans text-[10px] text-gray-500 mb-3">18 Artworks</p>
                <div className="relative w-full h-[200px] md:h-[260px] bg-gray-100 rounded overflow-hidden">
                  <Image src="/images (1).jpg" alt="Artwork" fill className="object-cover" />
                </div>
              </div>
            </div>
            
            {/* Phone 2 */}
            <div className="w-[180px] h-[360px] md:w-[220px] md:h-[440px] bg-white rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden -translate-y-4 flex flex-col">
              <div className="relative w-full h-[220px] md:h-[280px] bg-gray-100">
                <Image src="/images (3).jpg" alt="Artwork" fill className="object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between bg-white z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-sans text-[11px] font-semibold mb-0.5">Hilary Pecis</h3>
                    <p className="font-sans text-[9px] text-gray-500 leading-tight">Lemons and Camellias, 2020<br/>Rachel Uffner Gallery</p>
                  </div>
                  {/* Blue Heart */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#0000ff" className="mt-1">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                {/* Bottom Nav */}
                <div className="flex justify-between items-center px-1 pt-3 border-t border-gray-100 mt-2 text-gray-800">
                  {/* Home */}
                  <div className="flex flex-col items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    <span className="text-[6px] font-medium">Home</span>
                  </div>
                  {/* Search */}
                  <div className="flex flex-col items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span className="text-[6px] font-medium text-gray-400">Search</span>
                  </div>
                  {/* Inbox */}
                  <div className="flex flex-col items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span className="text-[6px] font-medium text-gray-400">Inbox</span>
                  </div>
                  {/* Saved */}
                  <div className="flex flex-col items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    <span className="text-[6px] font-medium text-gray-400">Saved</span>
                  </div>
                  {/* Profile */}
                  <div className="flex flex-col items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span className="text-[6px] font-medium text-gray-400">Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
