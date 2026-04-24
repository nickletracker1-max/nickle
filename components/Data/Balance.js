import React, { useState } from 'react';

const BALANCE_TABLE = [
  {
    institution: "IEA Critical Minerals",
    e2025: "−180kt (surplus)",
    e2026: "−120kt (surplus)",
    surplusEnd: "2028–2029",
    outlook: "$16,000–$20,000/t",
  },
  {
    institution: "BloombergNEF",
    e2025: "−160kt (surplus)",
    e2026: "−90kt (surplus)",
    surplusEnd: "2028",
    outlook: "$15,000–$18,000/t",
  },
  {
    institution: "Benchmark Min. Intelligence",
    e2025: "−200kt (surplus)",
    e2026: "−130kt (surplus)",
    surplusEnd: "2028–2030",
    outlook: "$16,000–$22,000/t",
  },
  {
    institution: "Wood Mackenzie",
    e2025: "−220kt (surplus)",
    e2026: "−150kt (surplus)",
    surplusEnd: "2029",
    outlook: "$14,000–$17,000/t",
  },
];

const Balance = () => {
  const [balanceTab, setBalanceTab] = useState("2020–2030");

  return (
    <section className="py-10 bg-[#F7F9F5]" id="balance" aria-label="Supply demand balance section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section I
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Nickel Supply vs Demand Balance — Deep Surplus, Long Road to Deficit
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-5">
          The nickel market is in significant surplus driven by Indonesian supply growth outpacing
          demand growth. Most institutional forecasts project the surplus persisting through
          2026–2027, with a potential deficit only emerging in 2028–2030 in optimistic scenarios.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mt-5 mb-2">
          Why the nickel surplus is deeper and longer than lithium's
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-3">
          The nickel oversupply has two compounding causes that distinguish it from the lithium
          cycle. First, Indonesian RKEF NPI production has extremely low AISC ($7,000–$9,000/t)
          — meaning operations remain profitable even at current prices and have no economic
          incentive to curtail. The self-correction mechanism that exists in lithium (where
          lepidolite is loss-making at $11,000/t) is much weaker in nickel because the dominant
          marginal producer (Indonesian RKEF) is still comfortably profitable. Second, demand
          growth from batteries — the principal growth driver — has been partially displaced by
          LFP, reducing the speed at which EV demand absorbs the surplus.
        </p>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          The 2024 deficit estimate of −250kt Ni represents approximately 8% of total demand — a
          significant imbalance that takes 2–3 years to unwind even with zero supply growth. With
          Indonesian supply still growing, the unwinding will take longer.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          What could accelerate the deficit arrival
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          Three scenarios would advance the consensus 2028–2029 deficit timeline: (1){' '}
          <strong className="text-ink">Indonesian RKAB restrictions tighten materially</strong>{' '}
          — if the government limits new permits to protect HPAL economics (HPAL needs higher
          prices than RKEF), the supply growth rate could halve; (2){' '}
          <strong className="text-ink">NMC market share recovers</strong> — if solid-state
          batteries or ultra-long-range EVs drive NMC 811 adoption faster than expected, nickel
          demand accelerates; (3){' '}
          <strong className="text-ink">New Caledonia permanent closures</strong> — the ongoing
          crisis removes a further 50–100kt of supply permanently if operations do not restart.
          Any combination of these three would shift the consensus deficit date forward by 12–18
          months.
        </p>

        {/* ── Waterfall Chart ── */}
        <div className="bg-white border border-bdr rounded-[14px] overflow-hidden mb-4">
          <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                IEA · BNEF · BMI · Wood Mackenzie · Consensus · Annual
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                Nickel Supply vs Demand Balance 2020–2030E
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                Surplus = red bars below zero · Deficit = green bars above zero · kt Ni content
              </p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {["2020–2030", "2020–2035"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setBalanceTab(tab)}
                  className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer whitespace-nowrap
                    ${balanceTab === tab
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
              aria-label="Supply vs Demand Balance — waterfall chart 2020-2030"
            >
              {/* Grid lines */}
              <line x1="50" y1="15"  x2="660" y2="15"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
              <line x1="50" y1="55"  x2="660" y2="55"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
              {/* Zero line */}
              <line x1="50" y1="100" x2="660" y2="100" stroke="#374151" strokeWidth="1.5"/>
              <text x="44" y="103" textAnchor="end" fontSize="9" fill="#374151" fontWeight="700">0</text>
              <line x1="50" y1="145" x2="660" y2="145" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
              <line x1="50" y1="195" x2="660" y2="195" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>

              {/* Y labels */}
              <text x="44" y="18"  textAnchor="end" fontSize="9" fill="#777799">+100kt</text>
              <text x="44" y="58"  textAnchor="end" fontSize="9" fill="#777799">+50kt</text>
              <text x="44" y="148" textAnchor="end" fontSize="9" fill="#777799">−100kt</text>
              <text x="44" y="198" textAnchor="end" fontSize="9" fill="#777799">−200kt</text>

              {/* Direction labels */}
              <text x="45" y="75"  fontSize="8" fill="#4CAF50" fontWeight="700">↑ Deficit</text>
              <text x="45" y="130" fontSize="8" fill="#EF5350" fontWeight="700">↓ Surplus</text>

              {/* Surplus bars (red, below zero) */}
              <rect x="58"  y="100" width="40" height="40"  rx="2" fill="#EF5350" opacity="0.80"/>
              <rect x="113" y="100" width="40" height="64"  rx="2" fill="#EF5350" opacity="0.82"/>
              <rect x="168" y="100" width="40" height="80"  rx="2" fill="#EF5350" opacity="0.84"/>
              <rect x="223" y="100" width="40" height="105" rx="2" fill="#EF5350" opacity="0.88"/>
              {/* 2024 peak surplus */}
              <rect x="278" y="100" width="40" height="112" rx="2" fill="#EF5350" opacity="0.90"/>
              <rect x="244" y="88"  width="70" height="12"  rx="2" fill="#991B1B" opacity="0.9"/>
              <text x="279" y="97" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Peak surplus</text>
              {/* Narrowing surplus */}
              <rect x="333" y="100" width="40" height="90" rx="2" fill="#EF5350" opacity="0.80"/>
              <rect x="388" y="100" width="40" height="70" rx="2" fill="#EF5350" opacity="0.75"/>
              <rect x="443" y="100" width="40" height="50" rx="2" fill="#EF5350" opacity="0.68"/>
              <rect x="498" y="100" width="40" height="16" rx="2" fill="#EF5350" opacity="0.60"/>
              {/* Deficit bars (green, above zero) */}
              <rect x="553" y="76"  width="40" height="24" rx="2" fill="#4CAF50" opacity="0.75"/>
              <rect x="608" y="36"  width="40" height="64" rx="2" fill="#4CAF50" opacity="0.80"/>

              {/* Year labels */}
              {[
                [78,"2020"],[133,"2021"],[188,"2022"],[243,"2023"],
                [298,"2024"],[353,"2025E"],[408,"2026E"],[463,"2027E"],
                [518,"2028E"],[573,"2029E"],[628,"2030E"],
              ].map(([x, label]) => (
                <text key={label} x={x} y="208" textAnchor="middle" fontSize="8" fill="#777799">
                  {label}
                </text>
              ))}

              <line x1="50" y1="215" x2="660" y2="215" stroke="#E2E8F0" strokeWidth="1"/>
            </svg>
          </div>
          <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
            IEA Critical Minerals Outlook · BNEF · Benchmark Mineral Intelligence · Annual
            consensus · E = estimate/forecast
          </p>
        </div>

        {/* ── Analyst balance table ── */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr>
                {[
                  { label: "Institution",    highlight: false },
                  { label: "2025E balance",  highlight: true  },
                  { label: "2026E balance",  highlight: false },
                  { label: "Surplus end",    highlight: false },
                  { label: "2027 price outlook", highlight: false },
                ].map(({ label, highlight }) => (
                  <th
                    key={label}
                    className={`text-[10px] font-bold uppercase tracking-[.06em] px-3.5 py-2.5 text-left border-b-2 border-bdr whitespace-nowrap
                      ${highlight ? "text-[#15803D]" : "text-muted"}`}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BALANCE_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap">
                    {row.institution}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-[#EF5350] font-semibold whitespace-nowrap">
                    {row.e2025}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-[#EF5350] whitespace-nowrap">
                    {row.e2026}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.surplusEnd}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.outlook}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Balance;