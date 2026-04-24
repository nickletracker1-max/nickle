import React, { useState } from 'react';

const STAT_BAND = [
  { value: "~9%",  valueColor: "text-[#3B82F6]", label: "Battery share of Ni demand", sub: "2025E (up from 2% in 2018)"   },
  { value: "~65%", valueColor: "text-[#EF5350]", label: "LFP share of new EVs",       sub: "Zero nickel content"          },
  { value: "~35%", valueColor: "text-[#8B5CF6]", label: "NMC/NCA share",              sub: "Nickel-containing batteries"  },
  { value: "~40kg",valueColor: "text-[#10B981]", label: "Ni per NMC 811 EV",          sub: "75kWh pack, 0.53kg Ni/kWh"   },
];

const NI_PER_EV = [
  { type: "LFP (budget/standard EV)", kg: "0 kg",   cost: "$0 — no nickel" },
  { type: "NMC 622 (mid-range)",       kg: "~28 kg", cost: "$434"           },
  { type: "NMC 811 (long-range)",      kg: "~40 kg", cost: "$620"           },
  { type: "NCA (Tesla style)",         kg: "~45 kg", cost: "$698"           },
  { type: "NMC 90 (ultra high-Ni)",    kg: "~55 kg", cost: "$853"           },
];

const BatteryDemand = () => {
  const [demandTab, setDemandTab] = useState("LFP-adjusted");

  return (
    <section className="py-10 bg-[#F7F9F5]" id="battery" aria-label="Battery demand section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section H
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Battery Demand — EV Nickel and the LFP Headwind
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-5">
          Battery demand is the fastest-growing segment of nickel consumption but faces a
          structural headwind: LFP (lithium iron phosphate) batteries use no nickel. As LFP's
          share of EV production rises (~65% in 2024), the nickel-per-EV intensity is declining
          rapidly.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mt-5 mb-2">
          How nickel enters EV batteries — the NMC supply chain
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-3">
          In NMC (nickel manganese cobalt) batteries, nickel is the primary active cathode
          material. NMC 811 (80% Ni, 10% Mn, 10% Co) is the highest-nickel cathode currently in
          commercial production, used in premium long-range EVs. The supply chain: Class 1 nickel
          (refined or MHP) → nickel sulphate (NiSO₄) → pCAM (precursor cathode active material)
          → CAM (cathode active material) → battery cell. Each processing step requires Class 1
          purity — NPI cannot enter this chain.
        </p>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          At $15,500/t LME nickel, a 75kWh NMC 622 mid-range EV contains approximately $434 of
          nickel raw material. At the 2022 peak ($28,400/t), the same car contained $796 of
          nickel — contributing to the margin squeeze that drove automakers toward LFP
          architectures.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          The LFP headwind: structural, not cyclical
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-3">
          LFP's 65% market share is not a temporary technology choice — it reflects a fundamental
          cost-performance realisation. CATL's cell-to-pack technology has narrowed the energy
          density gap between LFP and NMC to within 15–20%. For the largest segment of the EV
          market (urban commuting vehicles, commercial EVs, buses), LFP is now the dominant choice
          on every metric: cost, safety, cycle life, and increasingly energy density. The only
          segment where NMC retains a clear advantage is ultra-long-range premium vehicles —
          where the range per kilogram still favours high-nickel NMC 811 or NCA.
        </p>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-5">
          The implication: original 2021 battery demand models assumed nickel demand growing
          10–15× by 2030. LFP-adjusted models show 4–6× growth from a smaller base. Both are
          still significant demand growth — but the timing of when battery demand becomes a
          dominant factor in nickel pricing has been pushed back by 2–3 years.
        </p>

        {/* Callout — amber */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 mb-6 bg-amb-bg border border-[rgba(146,64,14,0.2)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚠</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">The LFP problem for nickel bulls</p>
            <p className="text-[13px] text-ink3 leading-[1.72] m-0">
              In 2020, most EV demand models assumed NMC (high-nickel) would dominate EV batteries,
              driving massive Class 1 nickel demand. That narrative has been substantially
              displaced. LFP now represents ~65% of new EV battery production. An EV with a 60kWh
              LFP battery contains zero nickel. Only NMC and NCA batteries drive nickel demand. If
              LFP's share continues rising toward 70–75%, battery demand growth for nickel will be
              significantly slower than 2021-era forecasts.
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

        {/* ── Demand chart + Ni per EV table ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Battery Demand Growth Chart */}
          <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
            <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                  IEA Global EV Outlook · BloombergNEF · Annual
                </p>
                <p className="text-[14px] font-bold text-ink leading-tight">
                  Nickel Demand from EV Batteries 2018–2030E
                </p>
                <p className="text-[11px] text-muted mt-0.5">
                  Actual + forecast · LFP-adjusted model vs original high-nickel forecast ·
                  kt Ni content
                </p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                {["LFP-adjusted", "High-Ni scenario"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setDemandTab(tab)}
                    className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer whitespace-nowrap
                      ${demandTab === tab
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
                viewBox="0 0 340 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto block"
                role="img"
                aria-label="EV Battery Nickel Demand — LFP-adjusted vs high-nickel forecast"
              >
                <defs>
                  <linearGradient id="batGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#3B82F6" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.01"/>
                  </linearGradient>
                </defs>
                <line x1="40" y1="10"  x2="40"  y2="165" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="165" x2="330" y2="165" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="50"  x2="330" y2="50"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4"/>
                <line x1="40" y1="90"  x2="330" y2="90"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4"/>
                <line x1="40" y1="130" x2="330" y2="130" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4"/>
                <text x="35" y="13"  textAnchor="end" fontSize="9" fill="#777799">800kt</text>
                <text x="35" y="53"  textAnchor="end" fontSize="9" fill="#777799">600kt</text>
                <text x="35" y="93"  textAnchor="end" fontSize="9" fill="#777799">400kt</text>
                <text x="35" y="133" textAnchor="end" fontSize="9" fill="#777799">200kt</text>
                {/* LFP-adjusted area + line */}
                <path
                  d="M 55,160 L 78,159 L 101,158 L 124,155 L 147,146 L 170,133 L 193,116 L 210,111 L 225,100 L 243,90 L 260,82 L 278,74 L 295,70 L 310,67 L 310,165 L 55,165 Z"
                  fill="url(#batGrad)"
                />
                <polyline
                  points="55,160 78,159 101,158 124,155 147,146 170,133 193,116 210,111 225,100 243,90 260,82 278,74 295,70 310,67"
                  fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                />
                {/* 2021 high-Ni forecast dashed red */}
                <polyline
                  points="193,116 210,100 225,82 243,58 260,38 278,22 295,15"
                  fill="none" stroke="#EF5350" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.6"
                />
                <text x="290" y="12" fontSize="8" fill="#EF5350">2021 forecast</text>
                <text x="290" y="62" fontSize="8" fill="#3B82F6">LFP-adj</text>
                {/* Today marker */}
                <line x1="193" y1="10" x2="193" y2="165" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3,2" opacity="0.5"/>
                <text x="196" y="20" fontSize="8" fill="#777799">2024</text>
                <text x="55"  y="180" textAnchor="middle" fontSize="9" fill="#777799">2018</text>
                <text x="147" y="180" textAnchor="middle" fontSize="9" fill="#777799">2022</text>
                <text x="243" y="180" textAnchor="middle" fontSize="9" fill="#777799">2026E</text>
                <text x="310" y="180" textAnchor="middle" fontSize="9" fill="#777799">2030E</text>
              </svg>
            </div>
            <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
              IEA · BNEF · LFP-adjusted model shows ~35% lower Ni demand vs 2021 consensus
              forecast · Annual
            </p>
          </div>

          {/* Ni per EV table + callout */}
          <div className="bg-white border border-bdr rounded-[14px] p-[16px_18px] flex flex-col gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#15803D] mb-3">
                Nickel content per EV by battery type
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[12px]">
                  <thead>
                    <tr>
                      <th className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3 py-2 text-left border-b-2 border-bdr">Battery type</th>
                      <th className="text-[10px] font-bold uppercase tracking-[.06em] text-[#15803D] px-3 py-2 text-left border-b-2 border-bdr">kg Ni/EV</th>
                      <th className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3 py-2 text-left border-b-2 border-bdr">Ni cost at $15.5k/t</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NI_PER_EV.map((row, i) => (
                      <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                        <td className="px-3 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink">
                          {row.type}
                        </td>
                        <td className="px-3 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                          {row.kg}
                        </td>
                        <td className="px-3 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                          {row.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-muted mt-3 leading-[1.65]">
                As LFP share rises toward 70%, the weighted average nickel content per EV is
                declining toward 15–18 kg — significantly below 2021 model assumptions of 35+ kg/EV.
              </p>
            </div>

            {/* Callout — slate */}
            <div className="flex gap-3 items-start rounded-[10px] p-3.5 bg-[#F1F5F9] border border-[rgba(100,116,139,0.2)]">
              <span className="text-[16px] flex-shrink-0 mt-0.5">⇄</span>
              <div>
                <p className="text-[13px] font-bold text-ink mb-1">
                  Nickel vs copper as electrification investments
                </p>
                <p className="text-[13px] text-ink3 leading-[1.65] m-0">
                  Both are electrification metals. Copper has three major exchange warehouses with
                  daily price transparency; nickel is LME-concentrated. Copper deficit is
                  near-term; nickel deficit arrives 2028–2029. Copper offers better near-term
                  risk/reward; nickel offers larger upside from a deeper trough. See our{' '}
                  <a href="/copper/" className="text-[#15803D] hover:underline">Copper data page</a>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BatteryDemand;