"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // If we are on the homepage, the header should be transparent with mix-blend-difference
  // otherwise, it should have a solid background and a bottom border.
  const headerClass = isHomePage
    ? "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 py-5"
    : "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 bg-[#faf9f7]/90 backdrop-blur-sm border-b border-[#e2e0db]";

  const textClass = isHomePage
    ? "text-white mix-blend-difference"
    : "text-[#1c1c1a]";

  const linkClass = isHomePage
    ? "text-white mix-blend-difference hover:opacity-60"
    : "text-[#9a9690] hover:text-[#b85c2c]";

  return (
    <>
      <header className={headerClass}>
        <Link href="/" onClick={() => setIsOpen(false)} className="relative z-[60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85c2c] block">
          <p className={`font-serif text-[1rem] font-light leading-none ${textClass} transition-colors ${isOpen ? '!text-[#1c1c1a] !mix-blend-normal' : ''}`}>
            Dr Oku Ampofo
          </p>
          {isHomePage && !isOpen && (
            <p className="font-sans text-[9px] text-white/60 mix-blend-difference mt-0.5 tracking-widest uppercase">
              Sculptor
            </p>
          )}
        </Link>

        {/* Desktop Nav */}
        {isHomePage ? (
          <nav className="hidden md:flex items-center gap-10">
            {["Works", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-sans text-[11px] uppercase tracking-widest transition-opacity ${linkClass}`}
              >
                {item}
              </a>
            ))}
          </nav>
        ) : (
          <Link
            href="/#works"
            className={`hidden md:block font-sans text-[11px] uppercase tracking-widest transition-colors ${linkClass} focus-visible:outline-none focus-visible:underline`}
          >
            ← All works
          </Link>
        )}

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden relative z-[60] p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85c2c]`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col gap-[5px] items-end">
            <span className={`block h-[1px] bg-current transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-[6px] !text-[#1c1c1a] !mix-blend-normal' : `w-6 ${textClass}`}`} />
            <span className={`block h-[1px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0 !text-[#1c1c1a] !mix-blend-normal' : `w-5 ${textClass}`}`} />
            <span className={`block h-[1px] bg-current transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-[6px] !text-[#1c1c1a] !mix-blend-normal' : `w-6 ${textClass}`}`} />
          </div>
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-[#faf9f7] z-40 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-center px-8 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-8 items-start">
          <Link
            href="/#works"
            onClick={() => setIsOpen(false)}
            className="font-serif text-4xl font-light text-[#1c1c1a]"
          >
            Works
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="font-serif text-4xl font-light text-[#1c1c1a]"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="font-serif text-4xl font-light text-[#1c1c1a]"
          >
            Contact
          </Link>
        </nav>
        
        <div className="absolute bottom-10 left-8">
          <p className="font-sans text-[10px] text-[#9a9690] uppercase tracking-widest mb-2">Connect</p>
          <a href="mailto:contact@okuampofo.org" className="font-sans text-[12px] text-[#5a5855] hover:text-[#1c1c1a] transition-colors underline decoration-1 underline-offset-4">contact@okuampofo.org</a>
        </div>
      </div>
    </>
  );
}
