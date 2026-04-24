import React, { useState } from 'react';

const STAT_BAND = [
  { value: "~55%",   valueColor: "text-[#F97316]", label: "Indonesia's global share", sub: "Mine production 2024 (USGS)"       },
  { value: "~1.8 Mt",valueColor: "text-[#EF5350]", label: "Indonesia production",     sub: "Ni content 2024E"                  },
  { value: "2020",   valueColor: "text-muted",      label: "Ore export ban",           sub: "Forced domestic processing"        },
  { value: "40+",    valueColor: "text-[#10B981]",  label: "HPAL plants",              sub: "Announced/under construction"      },
];

const SUPPLY_CHAIN = [
  { stage: "Mine (laterite)",   product: "Limonite & saprolite ore",    players: "Vale Indonesia, AMMAN, Harita, many small miners"  },
  { stage: "RKEF smelting",     product: "NPI 8–12% Ni",                players: "Tsingshan, IMIP (Morowali), IWIP, Weda Bay"        },
  { stage: "HPAL processing",   product: "MHP (35%+ Ni+Co)",            players: "Huafei, HPAL Pomalaa, Ramu (PNG model), QMB"       },
  { stage: "Sulphate refining", product: "Nickel sulphate (battery)",   players: "Huayou, CATL supply chain, GEM"                    },
  { stage: "Battery cathode",   product: "pCAM/CAM (NMC)",              players: "BASF, Umicore, Huayou, CNGR"                       },
];

const Indonesia = () => {
  const [hpalTab, setHpalTab] = useState("Actual+Forecast");

  return (
    <section className="py-10 bg-[#F7F9F5]" id="indonesia" aria-label="Indonesia nickel supply section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section D
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Indonesia: How One Country Took Over Global Nickel Supply
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-5">
          Indonesia's share of global nickel mine production went from ~20% in 2015 to ~55% in
          2024. Understanding what drove this surge, and what controls it, is essential to any
          nickel price view.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mt-5 mb-2">
          The ore export ban: the single policy decision that changed everything
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-3">
          Indonesia's government banned raw laterite nickel ore exports in January 2020 (with a
          brief earlier ban in 2014 that was reversed). The rationale was industrialisation: force
          ore processors to build smelters in Indonesia rather than ship ore to China for
          processing. The result exceeded expectations. Chinese stainless steel companies (led by
          Tsingshan) poured billions into{' '}
          <strong className="text-ink">RKEF (Rotary Kiln Electric Furnace) smelters</strong> in
          Indonesian industrial parks — primarily at{' '}
          <strong className="text-ink">Morowali Industrial Park (IMIP)</strong> and{' '}
          <strong className="text-ink">Weda Bay Industrial Park (IWIP)</strong>. Indonesia went
          from exporting ore to exporting processed NPI and ferronickel.
        </p>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          Between 2017 and 2024, Indonesian nickel output grew by{' '}
          <strong className="text-ink">680%</strong> — from roughly 230,000 tonnes to 1,800,000
          tonnes of Ni content. No other commodity has seen a comparable supply surge from a single
          country in the same period. This supply surge is the primary reason nickel prices are at
          $15,500/t rather than the $25,000–$30,000/t that pre-2020 models projected.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          RKAB permits: Indonesia's throttle on global nickel supply
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          RKAB (Rencana Kerja dan Anggaran Biaya) is Indonesia's annual mine work plan and budget
          approval system. Every nickel mine must have an approved RKAB to operate. The Indonesian
          government uses RKAB approvals to control total output — if the government restricts
          approvals, production growth slows or reverses. In 2025, RKAB quotas were tightened
          below 2024 levels as part of Indonesia's strategy to support downstream processing
          investment and prevent over-supply from undermining HPAL economics.{' '}
          <strong className="text-ink">
            This is the single most important geopolitical variable for nickel supply.
          </strong>{' '}
          Any change to RKAB policy can move the global nickel market materially within weeks.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          The HPAL revolution: Indonesia creating Class 1 from laterite
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          HPAL (High-Pressure Acid Leach) is the technology that converts limonite laterite ore —
          previously only usable for Class 2 NPI — into MHP (Mixed Hydroxide Precipitate), a
          Class 1 battery-grade intermediate. Indonesia has approximately 40 HPAL plants announced
          or under construction, of which ~8 are operating as of 2026. When these plants ramp,
          Indonesia becomes not just the dominant Class 2 supplier but a major Class 1 supplier —
          directly into EV battery supply chains. This transformation is why Chinese battery
          companies (CATL, Huayou, GEM) have made major investments in Indonesian HPAL projects.
        </p>

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

        {/* ── Production chart + Supply chain table ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Indonesia Production Bar Chart */}
          <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
            <div className="p-[14px_18px] border-b border-bdr">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                USGS · Indonesian Mining Ministry · Annual
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                Indonesia Nickel Mine Production 2015–2024 (kt Ni)
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                The supply surge that reshaped the global nickel market · 2020 ore export ban
                drove downstream investment
              </p>
            </div>
            <div className="w-full p-4">
              <svg
                viewBox="0 0 340 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto block"
                role="img"
                aria-label="Indonesia Production Surge — annual bar chart 2015-2024"
              >
                <line x1="40" y1="10"  x2="40"  y2="170" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="170" x2="330" y2="170" stroke="#E2E8F0" strokeWidth="1"/>
                <text x="35" y="13"  textAnchor="end" fontSize="9" fill="#777799">1,800kt</text>
                <text x="35" y="63"  textAnchor="end" fontSize="9" fill="#777799">1,200kt</text>
                <text x="35" y="113" textAnchor="end" fontSize="9" fill="#777799">700kt</text>
                <text x="35" y="163" textAnchor="end" fontSize="9" fill="#777799">200kt</text>
                {/* Bars */}
                <rect x="45"  y="153" width="20" height="17"  rx="2" fill="#F97316" opacity="0.70"/>
                <rect x="69"  y="144" width="20" height="26"  rx="2" fill="#F97316" opacity="0.75"/>
                <rect x="93"  y="142" width="20" height="28"  rx="2" fill="#F97316" opacity="0.80"/>
                <rect x="117" y="120" width="20" height="50"  rx="2" fill="#F97316" opacity="0.82"/>
                <rect x="141" y="105" width="20" height="65"  rx="2" fill="#F97316" opacity="0.85"/>
                {/* Ore ban marker */}
                <line x1="151" y1="10" x2="151" y2="170" stroke="#EF5350" strokeWidth="1" strokeDasharray="3,2" opacity="0.5"/>
                <text x="155" y="22" fontSize="8" fill="#EF5350" fontWeight="700">Ore ban</text>
                <rect x="165" y="102" width="20" height="68"  rx="2" fill="#F97316" opacity="0.88"/>
                <rect x="189" y="81"  width="20" height="89"  rx="2" fill="#F97316" opacity="0.90"/>
                <rect x="213" y="30"  width="20" height="140" rx="2" fill="#F97316" opacity="0.95"/>
                <rect x="237" y="14"  width="20" height="156" rx="2" fill="#F97316" opacity="0.97"/>
                <rect x="261" y="10"  width="20" height="160" rx="2" fill="#F97316"/>
                {/* Year labels */}
                {["'15","'16","'17","'18","'19","'20","'21","'22","'23","'24E"].map((yr, i) => (
                  <text key={yr} x={55 + i * 24} y="185" textAnchor="middle" fontSize="8" fill="#777799">{yr}</text>
                ))}
                <text x="280" y="8" textAnchor="middle" fontSize="8" fill="#F97316" fontWeight="700">
                  +680% since 2017
                </text>
              </svg>
            </div>
            <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
              USGS MCS 2025 · Indonesian MEMR data · Annual update February
            </p>
          </div>

          {/* Supply chain table + callout */}
          <div className="bg-white border border-bdr rounded-[14px] p-[16px_18px]">
            <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#F97316] mb-3">
              Indonesia's nickel supply chain
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr>
                    {["Stage", "Product", "Key Players"].map((h) => (
                      <th
                        key={h}
                        className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3 py-2 text-left border-b-2 border-bdr whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SUPPLY_CHAIN.map((row, i) => (
                    <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                      <td className="px-3 py-2 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap">
                        {row.stage}
                      </td>
                      <td className="px-3 py-2 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.5]">
                        {row.product}
                      </td>
                      <td className="px-3 py-2 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.5]">
                        {row.players}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mini callout */}
            <div className="flex gap-2.5 items-start rounded-[10px] p-3 bg-[#F1F5F9] border border-[rgba(100,116,139,0.2)]">
              <span className="text-[14px] flex-shrink-0 mt-0.5">⚙</span>
              <div>
                <p className="text-[12px] font-bold text-ink mb-1">RKAB permitting</p>
                <p className="text-[12px] text-ink3 leading-[1.65] m-0">
                  Indonesia controls mine output via annual RKAB (Rencana Kerja dan Anggaran
                  Biaya) work plans. If Indonesia restricts RKAB approvals, supply growth stalls.
                  This is the single most important political variable in nickel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── HPAL Chart (full width) ── */}
        <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
          <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                Indonesian HPAL plants · MHP output · kt Ni content · Annual
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                Indonesia HPAL MHP Production — Battery-Grade Nickel Emerging
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                HPAL converts limonite ore into MHP — the battery pathway. ~40 plants
                announced/under construction; ~8 operating as of 2026
              </p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {["Actual+Forecast", "Plants only"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setHpalTab(tab)}
                  className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer whitespace-nowrap
                    ${hpalTab === tab
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
              aria-label="HPAL MHP Production Growth — actual and forecast"
            >
              <defs>
                <linearGradient id="hpalGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#10B981" stopOpacity="0.90"/>
                  <stop offset="55%"  stopColor="#10B981" stopOpacity="0.90"/>
                  <stop offset="55%"  stopColor="#10B981" stopOpacity="0.45"/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.30"/>
                </linearGradient>
              </defs>
              <line x1="50" y1="10"  x2="50"  y2="170" stroke="#E2E8F0" strokeWidth="1"/>
              <line x1="50" y1="170" x2="660" y2="170" stroke="#E2E8F0" strokeWidth="1"/>
              <text x="44" y="13"  textAnchor="end" fontSize="9" fill="#777799">500kt</text>
              <text x="44" y="63"  textAnchor="end" fontSize="9" fill="#777799">350kt</text>
              <text x="44" y="113" textAnchor="end" fontSize="9" fill="#777799">200kt</text>
              <text x="44" y="163" textAnchor="end" fontSize="9" fill="#777799">50kt</text>
              {/* Actual bars */}
              <rect x="60"  y="166" width="45" height="4"   rx="1" fill="url(#hpalGrad)"/>
              <rect x="112" y="158" width="45" height="12"  rx="1" fill="url(#hpalGrad)"/>
              <rect x="164" y="138" width="45" height="32"  rx="1" fill="url(#hpalGrad)"/>
              <rect x="216" y="110" width="45" height="60"  rx="1" fill="url(#hpalGrad)"/>
              <rect x="268" y="82"  width="45" height="88"  rx="1" fill="url(#hpalGrad)"/>
              <rect x="320" y="58"  width="45" height="112" rx="1" fill="url(#hpalGrad)"/>
              {/* Forecast divider */}
              <line x1="372" y1="10" x2="372" y2="170" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4,3"/>
              <text x="380" y="20" fontSize="8" fill="#777799">Forecast →</text>
              {/* Forecast bars */}
              <rect x="372" y="42"  width="45" height="128" rx="1" fill="url(#hpalGrad)" opacity="0.50"/>
              <rect x="424" y="22"  width="45" height="148" rx="1" fill="url(#hpalGrad)" opacity="0.45"/>
              <rect x="476" y="14"  width="45" height="156" rx="1" fill="url(#hpalGrad)" opacity="0.40"/>
              <rect x="528" y="10"  width="45" height="160" rx="1" fill="url(#hpalGrad)" opacity="0.35"/>
              {/* Year labels */}
              {[
                [82,"2021"],[134,"2022"],[186,"2023"],[238,"2024"],
                [290,"2025"],[342,"2026E"],[394,"2027E"],[446,"2028E"],
                [498,"2029E"],[550,"2030E"],
              ].map(([x, label]) => (
                <text key={label} x={x} y="185" textAnchor="middle" fontSize="9" fill="#777799">
                  {label}
                </text>
              ))}
            </svg>
          </div>
          <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
            Benchmark Mineral Intelligence HPAL tracker · Indonesian MEMR · Annual · Solid=actual,
            light=forecast
          </p>
        </div>

      </div>
    </section>
  );
};

export default Indonesia;