import React, { useState } from 'react';

const STAT_BAND = [
  { value: "$15,500/t", valueColor: "text-[#10B981]", label: "Class 1 (LME)",      sub: "Full plate, 99.8%+ purity"    },
  { value: "$13,200/t", valueColor: "text-[#EF5350]", label: "Class 2 (NPI equiv)", sub: "8–12% Ni grade, China"        },
  { value: "+$2,300/t", valueColor: "text-[#F59E0B]", label: "Class 1 premium",     sub: "Structural battery demand"    },
  { value: "~30%",      valueColor: "text-[#3B82F6]", label: "Battery demand share", sub: "Of Class 1 nickel demand"   },
];

const CLASS_TABLE = [
  { attr: "Purity",          c1: "≥99.8% Ni",                    c2: "8–15% Ni (NPI), 20–40% (FeNi)"     },
  { attr: "LME deliverable", c1: "✓ Yes",                        c2: "✗ No"                               },
  { attr: "EV battery use",  c1: "✓ Direct (sulphate, MHP)",     c2: "✗ Not suitable"                     },
  { attr: "Stainless use",   c1: "✓ Yes",                        c2: "✓ Yes (primary)"                    },
  { attr: "Sources",         c1: "Sulphide mining, HPAL MHP",    c2: "RKEF (blast furnace), FeNi smelters"},
  { attr: "Key producers",   c1: "Norilsk, Vale, Wyloo, Ramu",   c2: "Tsingshan (Indonesia), CMOC"        },
  { attr: "Price (Apr 2026)",c1: "$15,500/t",                    c2: "$13,200/t (NPI equiv.)"             },
];

const ClassSplit = () => {
  const [mhpTab, setMhpTab] = useState("1Y");

  return (
    <section className="py-10 bg-[#F7F9F5]" id="class-split" aria-label="Class 1 vs Class 2 nickel section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section B
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Class 1 vs Class 2 — The Bifurcated Nickel Market
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-5">
          Nickel trades as two fundamentally different products that cannot substitute for each
          other in many end uses. Class 1 (LME-deliverable) and Class 2 (NPI, ferronickel) have
          diverging supply sources and use cases — and their price spread is one of the most
          important signals in the market.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mt-5 mb-2">
          Why the Class 1/Class 2 distinction matters for investors
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-3">
          The EV battery supply chain requires{' '}
          <strong className="text-ink">Class 1 nickel only</strong>. NMC (nickel manganese cobalt)
          and NCA battery cathodes need nickel in sulphate form (NiSO₄), which must be made from
          Class 1 feedstocks — either refined nickel metal, MHP (mixed hydroxide precipitate from
          HPAL processing), or mixed sulphide precipitate. Class 2 NPI cannot be chemically
          converted into battery-grade nickel sulphate economically. This creates a structural
          demand premium for Class 1 that will persist as long as NMC batteries exist.
        </p>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          The Class 1 premium has compressed from +$8,000/t in 2022 to +$2,300/t today because
          Indonesian HPAL plants are now producing large volumes of MHP — a Class 1 product — from
          laterite ore that previously only yielded Class 2 NPI. As Indonesian HPAL capacity ramps
          further (40+ plants announced), the Class 1 premium may compress further.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          MHP: the bridge from Class 2 ore to Class 1 product
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-4">
          MHP (Mixed Hydroxide Precipitate) is the key intermediate product from HPAL processing.
          It contains approximately 35–40% nickel plus cobalt, is Class 1 quality, and can be
          refined into nickel sulphate for batteries. MHP is the product that makes Indonesian
          laterite ore battery-relevant — without HPAL, Indonesian laterite can only produce Class
          2 NPI or ferronickel. The rapid expansion of Indonesian HPAL capacity is transforming the
          supply structure of Class 1 nickel from sulphide-dependent to laterite-possible.
        </p>

        {/* Callout — nickel green */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 mb-6 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.22)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">Why Class 1 and Class 2 matter</p>
            <p className="text-[13px] text-ink3 leading-[1.72] m-0">
              EV batteries require Class 1 nickel (MHP, MSP, or refined nickel sulphate) — Class 2
              NPI cannot be used in battery cathode precursors. Stainless steel can use either. As
              EV battery demand grows, Class 1 nickel commands a structural premium. The current
              Class 1 premium over NPI is approximately +$2,300/t — a key signal of how much
              battery manufacturers are willing to pay for the purity upgrade.
            </p>
          </div>
        </div>

        {/* Stat band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bdr rounded-[10px] overflow-hidden mb-6">
          {STAT_BAND.map((s, i) => (
            <div key={i} className="bg-white px-4 py-3.5 text-center">
              <p className={`text-[20px] font-medium leading-none mb-1 ${s.valueColor}`}>
                {s.value}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-muted mb-0.5">
                {s.label}
              </p>
              <p className="text-[11px] text-ink3">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Spread Chart + Class Table (2 col) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Class 1 Premium Spread Chart */}
          <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
            <div className="p-[14px_18px] border-b border-bdr">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                LME vs NPI equiv · Daily · USD/t difference
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                Class 1 Premium over Class 2 (NPI)
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                Current: <strong className="text-ink">+$2,300/t</strong> · 2022 peak: +$8,000/t ·
                Narrowing as HPAL MHP scales
              </p>
            </div>
            <div className="w-full p-4">
              <svg
                viewBox="0 0 340 180"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto block"
                role="img"
                aria-label="Class 1 Premium over NPI — spread chart"
              >
                <defs>
                  <linearGradient id="premGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.02"/>
                  </linearGradient>
                </defs>
                <line x1="40" y1="10"  x2="40"  y2="160" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="160" x2="330" y2="160" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="155" x2="330" y2="155" stroke="#EF5350" strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
                <text x="335" y="158" fontSize="8" fill="#EF5350" fontWeight="700">$0</text>
                <line x1="40" y1="115" x2="330" y2="115" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <line x1="40" y1="75"  x2="330" y2="75"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <line x1="40" y1="35"  x2="330" y2="35"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <text x="35" y="38"  textAnchor="end" fontSize="9" fill="#777799">+$8k</text>
                <text x="35" y="78"  textAnchor="end" fontSize="9" fill="#777799">+$5k</text>
                <text x="35" y="118" textAnchor="end" fontSize="9" fill="#777799">+$3k</text>
                <path
                  d="M 40,125 L 70,110 L 100,90 L 130,58 L 150,40 L 175,55 L 200,90 L 230,108 L 260,120 L 290,128 L 310,132 L 330,132 L 330,155 L 40,155 Z"
                  fill="url(#premGrad)"
                />
                <polyline
                  points="40,125 70,110 100,90 130,58 150,40 175,55 200,90 230,108 260,120 290,128 310,132 330,132"
                  fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                />
                <circle cx="330" cy="132" r="3.5" fill="#F59E0B" stroke="white" strokeWidth="1.5"/>
                <rect x="258" y="118" width="66" height="14" rx="3" fill="#92400E"/>
                <text x="291" y="128" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">+$2,300/t</text>
                <text x="55"  y="174" textAnchor="middle" fontSize="9" fill="#777799">2022</text>
                <text x="155" y="174" textAnchor="middle" fontSize="9" fill="#777799">2023</text>
                <text x="250" y="174" textAnchor="middle" fontSize="9" fill="#777799">2025</text>
              </svg>
            </div>
            <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
              Calculated · LME settlement vs SMM NPI China · USD/t Ni content basis · Daily
            </p>
          </div>

          {/* Class 1 vs Class 2 Table */}
          <div className="bg-white border border-bdr rounded-[14px] p-[16px_18px]">
            <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#15803D] mb-3">
              Class 1 vs Class 2 — what's the difference
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr>
                    <th className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3 py-2 text-left border-b-2 border-bdr" />
                    <th className="text-[10px] font-bold uppercase tracking-[.06em] text-[#15803D] px-3 py-2 text-left border-b-2 border-bdr">
                      Class 1
                    </th>
                    <th className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3 py-2 text-left border-b-2 border-bdr">
                      Class 2
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CLASS_TABLE.map((row, i) => (
                    <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                      <td className="px-3 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap">
                        {row.attr}
                      </td>
                      <td className="px-3 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.5]">
                        {row.c1}
                      </td>
                      <td className="px-3 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.5]">
                        {row.c2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── MHP Chart (full width) ── */}
        <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
          <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                Fastmarkets · Battery grade · DDP China
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                MHP (Mixed Hydroxide Precipitate) Price — Battery Grade Pathway
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                HPAL output · Input to nickel sulphate and NMC precursor (pCAM) production ·
                Current: <strong className="text-ink">$15,100/t equiv</strong>
              </p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {["1Y", "2Y"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setMhpTab(tab)}
                  className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer
                    ${mhpTab === tab
                      ? "bg-[rgba(34,197,94,0.08)] text-[#15803D] border-[rgba(34,197,94,0.3)]"
                      : "bg-white text-muted border-bdr hover:text-[#15803D]"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full p-4">
            <svg
              viewBox="0 0 680 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto block"
              role="img"
              aria-label="MHP Price — 1 year line chart"
            >
              <defs>
                <linearGradient id="mhpGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.12"/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.01"/>
                </linearGradient>
              </defs>
              <line x1="50" y1="15"  x2="50"  y2="175" stroke="#E2E8F0" strokeWidth="1"/>
              <line x1="50" y1="175" x2="660" y2="175" stroke="#E2E8F0" strokeWidth="1"/>
              <line x1="50" y1="40"  x2="660" y2="40"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
              <line x1="50" y1="80"  x2="660" y2="80"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
              <line x1="50" y1="120" x2="660" y2="120" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
              <text x="44" y="18"  textAnchor="end" fontSize="9" fill="#777799">$22k</text>
              <text x="44" y="43"  textAnchor="end" fontSize="9" fill="#777799">$19k</text>
              <text x="44" y="83"  textAnchor="end" fontSize="9" fill="#777799">$17k</text>
              <text x="44" y="123" textAnchor="end" fontSize="9" fill="#777799">$15k</text>
              <text x="44" y="178" textAnchor="end" fontSize="9" fill="#777799">$12k</text>
              <path
                d="M 50,150 L 100,145 L 150,138 L 200,130 L 250,122 L 300,118 L 350,120 L 400,125 L 450,130 L 500,125 L 550,120 L 600,122 L 650,125 L 660,125 L 660,175 L 50,175 Z"
                fill="url(#mhpGrad)"
              />
              <polyline
                points="50,150 100,145 150,138 200,130 250,122 300,118 350,120 400,125 450,130 500,125 550,120 600,122 650,125 660,125"
                fill="none" stroke="#10B981" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
              />
              <circle cx="660" cy="125" r="4" fill="#10B981" stroke="white" strokeWidth="1.5"/>
              <rect x="590" y="110" width="68" height="14" rx="3" fill="#15803D"/>
              <text x="624" y="120" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">$15,100/t</text>
              <text x="110" y="190" textAnchor="middle" fontSize="9" fill="#777799">Apr'25</text>
              <text x="360" y="190" textAnchor="middle" fontSize="9" fill="#777799">Oct'25</text>
              <text x="610" y="190" textAnchor="middle" fontSize="9" fill="#777799">Apr'26</text>
            </svg>
          </div>
          <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
            Fastmarkets · MHP 35% Ni min CIF China · Weekly assessed · Battery cathode precursor input
          </p>
        </div>

      </div>
    </section>
  );
};

export default ClassSplit;