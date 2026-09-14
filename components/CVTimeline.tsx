"use client";

import { useState } from "react";

type Category = "All" | "Education" | "Medicine" | "Research" | "Arts";

const entries: { period: string; detail: string; category: Category }[] = [
  { period: "1926 – 1932", detail: "Mfantsipim Secondary School; Achimota University College", category: "Education" },
  { period: "1933 – 1939", detail: "Edinburgh University & Royal College of Edinburgh and Glasgow. Qualified L.R.C.P., L.R.C.S. (Edin), L.R.F.P. & S. (Glas)", category: "Education" },
  { period: "1939 – 1940", detail: "Post-graduate training — Karolinska Hospital, Stockholm; Liverpool School of Tropical Medicine", category: "Medicine" },
  { period: "1940 – 1946", detail: "General practice, Mampong District", category: "Medicine" },
  { period: "1946 – 1948", detail: "Senior Medical Officer, Achimota School", category: "Medicine" },
  { period: "1948 – 1949", detail: "Post-graduate study in London — Venereal Diseases (St. Peter's & St. Mary's Hospitals); Dermatology (St. John's Hospital); Children's Diseases (Great Ormond Street)", category: "Medicine" },
  { period: "1950 – 1952", detail: "Research under United Nations grant; six publications on tropical medicine in Nature and Transactions of the Royal Society of Tropical Medicine and Hygiene", category: "Research" },
  { period: "1960 – 1972", detail: "Senior Medical Officer, Tetteh Quarshie Memorial Hospital", category: "Medicine" },
  { period: "1962", detail: "Part-time research in Plant Medicine, University of Science and Technology, Kumasi", category: "Research" },
  { period: "1965 – 1974", detail: "Plant medicine research with Dr. Hartwell, Cancer Institute, National Institute of Health, Bethesda, USA", category: "Research" },
  { period: "1969 – 1972", detail: "Chairman, Arts Council of Ghana", category: "Arts" },
  { period: "1973", detail: "Appointed founding Director, Centre for Scientific Research Into Plant Medicine, Mampong, by the Ghana Government; Advisor, Ghana Traditional and Psychic Healers Association", category: "Research" },
  { period: "1973 – 1977", detail: "Chairman, Ghana Museums and Monuments Board", category: "Arts" },
  { period: "1974", detail: "Doctor of Letters (D.Litt.) conferred by University of Ghana, Legon", category: "Education" },
  { period: "1976", detail: "Appointed Part-Time Consultant in African Traditional Medicine, World Health Organisation", category: "Research" },
  { period: "1987 – 1998", detail: "Consultant, Centre for Scientific Research Into Plant Medicine, Mampong Akwapim", category: "Research" },
];

const TABS: Category[] = ["All", "Education", "Medicine", "Research", "Arts"];

export function CVTimeline() {
  const [active, setActive] = useState<Category>("All");

  const visible = active === "All" ? entries : entries.filter((e) => e.category === active);

  return (
    <section className="px-5 md:px-10 py-20 border-t border-[#e2e0db]">
      {/* Header + filter tabs */}
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-6 sm:gap-10 mb-12">
        <p className="font-sans text-[9px] uppercase tracking-widest text-[#9a9690] shrink-0">
          Curriculum Vitae
        </p>
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`font-sans text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b85c2c] ${
                active === tab
                  ? "border-[#1c1c1a] bg-[#1c1c1a] text-white"
                  : "border-[#e2e0db] text-[#9a9690] hover:border-[#1c1c1a] hover:text-[#1c1c1a]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline rows */}
      <div className="max-w-3xl divide-y divide-[#e2e0db]">
        {visible.map(({ period, detail, category }) => (
          <div
            key={period + category}
            className="grid grid-cols-[130px_1fr] gap-6 py-5 group"
          >
            <p className="font-sans text-[10px] text-[#b0ada8] tabular-nums pt-0.5 shrink-0 group-hover:text-[#b85c2c] transition-colors duration-200">
              {period}
            </p>
            <p className="font-sans text-[13px] leading-[1.8] text-[#5a5855] group-hover:text-[#1c1c1a] transition-colors duration-200">
              {detail}
            </p>
          </div>
        ))}
      </div>

      {/* Entry count */}
      <p className="font-sans text-[9px] text-[#c0bdb7] mt-8 tabular-nums">
        {visible.length} {visible.length === 1 ? "entry" : "entries"}
        {active !== "All" && ` in ${active}`}
      </p>
    </section>
  );
}
