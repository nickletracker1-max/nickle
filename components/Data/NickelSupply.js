import React, { useState } from 'react';

const COUNTRY_TABLE = [
  { country: "Indonesia",       kt: "~1,800", pct: "55%", ore: "Laterite (RKEF NPI + HPAL)"          },
  { country: "Philippines",     kt: "~350",   pct: "9%",  ore: "Laterite (ore export)"               },
  { country: "Russia",          kt: "~260",   pct: "7%",  ore: "Sulphide (Norilsk, Pechenga)"        },
  { country: "New Caledonia",   kt: "~148",   pct: "4%",  ore: "Laterite (FeNi, NPI)"                },
  { country: "Australia",       kt: "~148",   pct: "4%",  ore: "Sulphide + laterite"                 },
  { country: "Canada",          kt: "~110",   pct: "3%",  ore: "Sulphide (Thompson, Voisey's Bay)"   },
  { country: "China",           kt: "~92",    pct: "2%",  ore: "Sulphide (Xinjiang)"                 },
  { country: "Papua New Guinea",kt: "~40",    pct: "1%",  ore: "Laterite (HPAL — Ramu)"              },
  { country: "Brazil",          kt: "~35",    pct: "1%",  ore: "Sulphide + laterite"                 },
  { country: "Other",           kt: "~275",   pct: "8%",  ore: "Mixed"                               },
];

const NickelSupply = () => {
  const [trendTab, setTrendTab] = useState("Stacked");

  return (
    <section className="py-10 bg-white" id="supply" aria-label="Nickel supply by country section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section E
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Nickel Supply by Country — Production Data
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-5">
          Global nickel mine production in 2024: Indonesia ~55%, Philippines ~9%, Russia ~7%, New
          Caledonia ~4%, Australia ~4%, Canada ~3%, Other ~18%. The concentration of supply in
          Indonesia dwarfs all other producing countries.
        </p>

        {/* H3 — Russia */}
        <h3 className="text-[16px] font-bold text-ink mt-5 mb-2">
          Russia (Norilsk Nickel): world's largest Class 1 producer
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          Norilsk Nickel (Nornickel, MCX: GMKN) in Russia is the world's largest producer of
          Class 1 refined nickel, producing approximately 200,000 tonnes of refined nickel per
          year from its sulphide operations in the Norilsk and Kola regions of northern Russia.
          Russian nickel has continued to trade globally despite 2022 sanctions — the US and EU
          sanctions specifically excluded nickel (and aluminium) from primary commodity
          restrictions. However, several Western stainless and battery companies have reduced
          Russian nickel purchases voluntarily, creating a price discount for Russian-origin metal
          on some exchanges. Russia also produces approximately 40% of global palladium — relevant
          context for platinum group metals investors.
        </p>

        {/* H3 — Philippines */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          Philippines: the 2nd largest producer with a different risk profile
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          The Philippines produces approximately 350,000 tonnes Ni content annually, primarily
          from laterite ore exported directly to China for NPI processing. Unlike Indonesia, the
          Philippines has not banned ore exports — making it the last major laterite ore export
          market. This creates a different risk profile: Philippines production is more exposed to
          Chinese NPI economics and Chinese demand, without Indonesia's downstream processing
          investment. The Philippines' Mines and Geosciences Bureau (MGB) periodically reviews
          mining permits and environmental compliance — a source of policy risk. Several mines have
          been suspended on environmental grounds in previous years.
        </p>

        {/* H3 — New Caledonia */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          New Caledonia: high-cost operations in crisis
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          New Caledonia (a French territory) has historically been a significant nickel producer,
          but its operations have AISC of $14,000–$20,000/t — well above current prices for most
          operations. By 2025, three major operations (SLN/Société Le Nickel, Koniambo Nickel SAS,
          and Prony Resources) had suspended or reduced operations. Political unrest in 2024
          (independence-related violence and mine blockades) compounded the economic pressure. The
          closures removed approximately 120–150kt of annual supply — the largest single
          country-level supply reduction of the current price cycle. New Caledonia's production is
          unlikely to return at scale unless LME prices recover sustainably above $18,000/t.
        </p>

        {/* ── Horizontal bar chart + Country table ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Production by Country Chart */}
          <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
            <div className="p-[14px_18px] border-b border-bdr">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                USGS Mineral Commodity Summaries 2025 · Annual
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                Global Nickel Mine Production by Country (2024)
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                Tonnes Ni content · Indonesia dominates at 55% · Annual data updated February
              </p>
            </div>
            <div className="w-full p-4">
              <svg
                viewBox="0 0 340 230"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto block"
                role="img"
                aria-label="Global Nickel Production by Country — horizontal bar"
              >
                <line x1="110" y1="15" x2="110" y2="218" stroke="#E2E8F0" strokeWidth="1"/>
                {/* Indonesia */}
                <rect x="110" y="18"  width="210" height="18" rx="2" fill="#F97316" opacity="0.9"/>
                <text x="105" y="30" textAnchor="end" fontSize="9" fill="#1A1A2E">Indonesia</text>
                <text x="325" y="30" fontSize="8" fill="#F97316" fontWeight="700">1,800kt (55%)</text>
                {/* Philippines */}
                <rect x="110" y="42"  width="41"  height="18" rx="2" fill="#64748B" opacity="0.8"/>
                <text x="105" y="54" textAnchor="end" fontSize="9" fill="#1A1A2E">Philippines</text>
                <text x="155" y="54" fontSize="8" fill="#64748B" fontWeight="700">350kt (9%)</text>
                {/* Russia */}
                <rect x="110" y="66"  width="30"  height="18" rx="2" fill="#8B5CF6" opacity="0.8"/>
                <text x="105" y="78" textAnchor="end" fontSize="9" fill="#1A1A2E">Russia</text>
                <text x="144" y="78" fontSize="8" fill="#8B5CF6" fontWeight="700">260kt (7%)</text>
                {/* New Caledonia */}
                <rect x="110" y="90"  width="17"  height="18" rx="2" fill="#10B981" opacity="0.8"/>
                <text x="105" y="102" textAnchor="end" fontSize="9" fill="#1A1A2E">New Caledonia</text>
                <text x="131" y="102" fontSize="8" fill="#10B981" fontWeight="700">148kt</text>
                {/* Australia */}
                <rect x="110" y="114" width="17"  height="18" rx="2" fill="#22C55E" opacity="0.8"/>
                <text x="105" y="126" textAnchor="end" fontSize="9" fill="#1A1A2E">Australia</text>
                <text x="131" y="126" fontSize="8" fill="#22C55E" fontWeight="700">148kt</text>
                {/* Canada */}
                <rect x="110" y="138" width="13"  height="18" rx="2" fill="#3B82F6" opacity="0.8"/>
                <text x="105" y="150" textAnchor="end" fontSize="9" fill="#1A1A2E">Canada</text>
                <text x="127" y="150" fontSize="8" fill="#3B82F6" fontWeight="700">110kt</text>
                {/* China */}
                <rect x="110" y="162" width="11"  height="18" rx="2" fill="#EF5350" opacity="0.8"/>
                <text x="105" y="174" textAnchor="end" fontSize="9" fill="#1A1A2E">China</text>
                <text x="125" y="174" fontSize="8" fill="#EF5350" fontWeight="700">92kt</text>
                {/* Other */}
                <rect x="110" y="186" width="82"  height="18" rx="2" fill="#94A3B8" opacity="0.7"/>
                <text x="105" y="198" textAnchor="end" fontSize="9" fill="#1A1A2E">Other</text>
                <text x="196" y="198" fontSize="8" fill="#94A3B8" fontWeight="700">~700kt (18%)</text>
                <text x="155" y="218" textAnchor="middle" fontSize="9" fill="#777799">
                  World total: ~3,258kt Ni content (2024E)
                </text>
              </svg>
            </div>
            <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
              USGS Mineral Commodity Summaries 2025 · Tonnes Ni metal content · Annual February update
            </p>
          </div>

          {/* Country table */}
          <div className="bg-white border border-bdr rounded-[14px] p-[16px_18px]">
            <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#15803D] mb-3">
              Production by country (2024E)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr>
                    <th className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3 py-2 text-left border-b-2 border-bdr">Country</th>
                    <th className="text-[10px] font-bold uppercase tracking-[.06em] text-[#15803D] px-3 py-2 text-left border-b-2 border-bdr">kt Ni</th>
                    <th className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3 py-2 text-left border-b-2 border-bdr">% World</th>
                    <th className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3 py-2 text-left border-b-2 border-bdr">Ore Type</th>
                  </tr>
                </thead>
                <tbody>
                  {COUNTRY_TABLE.map((row, i) => (
                    <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                      <td className="px-3 py-2 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap">
                        {row.country}
                      </td>
                      <td className="px-3 py-2 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                        {row.kt}
                      </td>
                      <td className="px-3 py-2 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                        {row.pct}
                      </td>
                      <td className="px-3 py-2 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.5]">
                        {row.ore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── 5-Year Stacked Chart (full width) ── */}
        <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
          <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                USGS annual series · kt Ni content · 2019–2024
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                Global Nickel Mine Production by Country — 5-Year Trend
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                Indonesia's surge vs rest-of-world relative stagnation is the defining supply
                story of the past decade
              </p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {["Stacked", "Lines"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTrendTab(tab)}
                  className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer
                    ${trendTab === tab
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
              viewBox="0 0 680 220"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto block"
              role="img"
              aria-label="Nickel Production 5-Year Trend — stacked bars"
            >
              <line x1="50" y1="15"  x2="50"  y2="185" stroke="#E2E8F0" strokeWidth="1"/>
              <line x1="50" y1="185" x2="660" y2="185" stroke="#E2E8F0" strokeWidth="1"/>
              <text x="44" y="18"  textAnchor="end" fontSize="9" fill="#777799">3,500kt</text>
              <text x="44" y="68"  textAnchor="end" fontSize="9" fill="#777799">2,500kt</text>
              <text x="44" y="118" textAnchor="end" fontSize="9" fill="#777799">1,500kt</text>
              <text x="44" y="168" textAnchor="end" fontSize="9" fill="#777799">500kt</text>

              {/* 2019 */}
              <rect x="65"  y="129" width="80" height="56" rx="2" fill="#94A3B8" opacity="0.7"/>
              <rect x="65"  y="116" width="80" height="13" rx="0" fill="#8B5CF6" opacity="0.8"/>
              <rect x="65"  y="99"  width="80" height="17" rx="0" fill="#64748B" opacity="0.8"/>
              <rect x="65"  y="73"  width="80" height="26" rx="0" fill="#F97316" opacity="0.9"/>
              <text x="105" y="200" textAnchor="middle" fontSize="9" fill="#777799">2019</text>

              {/* 2020 */}
              <rect x="165" y="135" width="80" height="50" rx="2" fill="#94A3B8" opacity="0.7"/>
              <rect x="165" y="123" width="80" height="12" rx="0" fill="#8B5CF6" opacity="0.8"/>
              <rect x="165" y="108" width="80" height="15" rx="0" fill="#64748B" opacity="0.8"/>
              <rect x="165" y="71"  width="80" height="37" rx="0" fill="#F97316" opacity="0.9"/>
              <text x="205" y="200" textAnchor="middle" fontSize="9" fill="#777799">2020</text>

              {/* 2021 */}
              <rect x="265" y="126" width="80" height="49" rx="2" fill="#94A3B8" opacity="0.7"/>
              <rect x="265" y="114" width="80" height="12" rx="0" fill="#8B5CF6" opacity="0.8"/>
              <rect x="265" y="98"  width="80" height="16" rx="0" fill="#64748B" opacity="0.8"/>
              <rect x="265" y="49"  width="80" height="49" rx="0" fill="#F97316" opacity="0.9"/>
              <text x="305" y="200" textAnchor="middle" fontSize="9" fill="#777799">2021</text>

              {/* 2022 */}
              <rect x="365" y="145" width="80" height="40" rx="2" fill="#94A3B8" opacity="0.7"/>
              <rect x="365" y="133" width="80" height="12" rx="0" fill="#8B5CF6" opacity="0.8"/>
              <rect x="365" y="117" width="80" height="16" rx="0" fill="#64748B" opacity="0.8"/>
              <rect x="365" y="40"  width="80" height="77" rx="0" fill="#F97316" opacity="0.9"/>
              <text x="405" y="200" textAnchor="middle" fontSize="9" fill="#777799">2022</text>

              {/* 2023 */}
              <rect x="465" y="139" width="80" height="46" rx="2" fill="#94A3B8" opacity="0.7"/>
              <rect x="465" y="127" width="80" height="12" rx="0" fill="#8B5CF6" opacity="0.8"/>
              <rect x="465" y="110" width="80" height="17" rx="0" fill="#64748B" opacity="0.8"/>
              <rect x="465" y="25"  width="80" height="85" rx="0" fill="#F97316" opacity="0.9"/>
              <text x="505" y="200" textAnchor="middle" fontSize="9" fill="#777799">2023</text>

              {/* 2024 */}
              <rect x="565" y="144" width="80" height="41" rx="2" fill="#94A3B8" opacity="0.7"/>
              <rect x="565" y="131" width="80" height="13" rx="0" fill="#8B5CF6" opacity="0.8"/>
              <rect x="565" y="115" width="80" height="16" rx="0" fill="#64748B" opacity="0.8"/>
              <rect x="565" y="27"  width="80" height="88" rx="0" fill="#F97316" opacity="0.9"/>
              <text x="605" y="200" textAnchor="middle" fontSize="9" fill="#777799">2024E</text>

              {/* Legend */}
              <rect x="55"  y="208" width="10" height="10" rx="1" fill="#F97316" opacity="0.9"/>
              <text x="69"  y="217" fontSize="9" fill="#1A1A2E">Indonesia</text>
              <rect x="130" y="208" width="10" height="10" rx="1" fill="#64748B" opacity="0.8"/>
              <text x="144" y="217" fontSize="9" fill="#1A1A2E">Philippines</text>
              <rect x="210" y="208" width="10" height="10" rx="1" fill="#8B5CF6" opacity="0.8"/>
              <text x="224" y="217" fontSize="9" fill="#1A1A2E">Russia</text>
              <rect x="270" y="208" width="10" height="10" rx="1" fill="#94A3B8" opacity="0.7"/>
              <text x="284" y="217" fontSize="9" fill="#1A1A2E">Other</text>
            </svg>
          </div>
          <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
            USGS MCS annual series 2020–2025 · kt Ni content · Annual February update
          </p>
        </div>

      </div>
    </section>
  );
};

export default NickelSupply;