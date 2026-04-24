import React, { useState } from 'react';

const COST_TABLE = [
  {
    route:   "Indonesia RKEF NPI (laterite)",
    cash:    "$4,000–$7,000/t",
    aisc:    "$7,000–$9,000/t",
    share:   "~45%",
    vs:      "Well profitable",
    vsColor: "text-[#1A7A4A]",
  },
  {
    route:   "Russia sulphide (Norilsk Nickel)",
    cash:    "$5,000–$8,000/t",
    aisc:    "$8,000–$12,000/t",
    share:   "~7%",
    vs:      "Profitable",
    vsColor: "text-[#1A7A4A]",
  },
  {
    route:   "Philippines laterite (ore export)",
    cash:    "$5,000–$8,000/t",
    aisc:    "$8,500–$11,000/t",
    share:   "~9%",
    vs:      "Profitable",
    vsColor: "text-[#1A7A4A]",
  },
  {
    route:   "Australia sulphide",
    cash:    "$7,000–$11,000/t",
    aisc:    "$9,000–$14,000/t",
    share:   "~4%",
    vs:      "Mostly profitable",
    vsColor: "text-[#1A7A4A]",
  },
  {
    route:   "Indonesia HPAL (laterite)",
    cash:    "$8,000–$12,000/t",
    aisc:    "$10,000–$15,000/t",
    share:   "~5%",
    vs:      "Marginal",
    vsColor: "text-amb",
  },
  {
    route:   "New Caledonia laterite",
    cash:    "$12,000–$18,000/t",
    aisc:    "$14,000–$20,000/t",
    share:   "~4%",
    vs:      "Loss-making",
    vsColor: "text-red",
  },
  {
    route:   "Canada sulphide",
    cash:    "$9,000–$14,000/t",
    aisc:    "$12,000–$18,000/t",
    share:   "~3%",
    vs:      "Mostly loss-making",
    vsColor: "text-red",
  },
  {
    route:   "High cost / C&M / dormant",
    cash:    "$14,000–$25,000/t",
    aisc:    "$18,000–$28,000/t",
    share:   "~23%",
    vs:      "Deeply loss-making",
    vsColor: "text-red",
  },
];

const CostCurve = () => {
  const [costTab, setCostTab] = useState("AISC");

  return (
    <section className="py-10 bg-white" id="cost-curve" aria-label="Nickel cost curve section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section L
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Nickel Cost Curve — Production Costs by Ore Type &amp; Processing Route
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-5">
          The nickel cost curve has three fundamentally different ore types and three processing
          routes, each with very different cost structures. Understanding where the marginal
          producer sits determines the floor price for nickel.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mt-5 mb-2">
          Why Indonesian RKEF NPI makes nickel floors different from lithium
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-4">
          In lithium, the marginal cost producer is Chinese lepidolite at ~$10,500–$11,000/t AISC
          — and with the LCE spot at $11,000, 30% of supply is already underwater. The
          self-correction mechanism is active. In nickel, the cheapest major supply source
          (Indonesian RKEF NPI) has AISC of only{' '}
          <strong className="text-ink">$7,000–$9,000/t</strong> — well below LME spot at $15,500.
          This means there is no Indonesian-level self-correction occurring. The surplus is not
          eroding because the dominant supply source is still profitable. The cost curve does not
          provide a floor near current prices — the floor is significantly lower if Indonesian
          production continues growing.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          The ~23% below-cost figure — what it actually means
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          At $15,500/t LME, approximately 23% of global nickel supply is estimated to be
          operating below AISC — primarily New Caledonia laterite operations and some high-cost
          Canadian sulphide mines. New Caledonia nickel operations have already moved to care and
          maintenance. The Canadian sulphide operations are sustaining on the basis of future
          price recovery and sunk capital. This 23% is the supply overhang being removed — but
          it is small relative to the Indonesian supply growing at 5–10% annually on the other
          side of the ledger. The cost curve shows a floor at ~$7,000–$9,000/t (Indonesian RKEF
          cash cost) — significantly below current prices.
        </p>

        {/* ── Cost curve chart ── */}
        <div className="bg-white border border-bdr rounded-[14px] overflow-hidden mb-4">
          <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                CRU Group Nickel Cost Service · Quarterly · AISC by ore type and route
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                Global Nickel Supply Cost Curve — AISC by Source Type (2025E)
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                X = cumulative capacity (% of world) · Y = AISC USD/t Ni · Current LME spot
                shown as dashed line
              </p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {["AISC", "Cash cost"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCostTab(tab)}
                  className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer
                    ${costTab === tab
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
              viewBox="0 0 680 260"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto block"
              role="img"
              aria-label="Nickel Cost Curve — AISC by ore type"
            >
              {/* Axes */}
              <line x1="50" y1="20"  x2="50"  y2="220" stroke="#E2E8F0" strokeWidth="1"/>
              <line x1="50" y1="220" x2="660" y2="220" stroke="#E2E8F0" strokeWidth="1"/>
              {/* Y labels */}
              <text x="44" y="23"  textAnchor="end" fontSize="9" fill="#777799">$30k</text>
              <text x="44" y="73"  textAnchor="end" fontSize="9" fill="#777799">$24k</text>
              <text x="44" y="123" textAnchor="end" fontSize="9" fill="#777799">$18k</text>
              <text x="44" y="173" textAnchor="end" fontSize="9" fill="#777799">$12k</text>
              <text x="44" y="220" textAnchor="end" fontSize="9" fill="#777799">$6k</text>

              {/* Cost blocks */}
              {/* 1. Indonesia RKEF NPI: 0–45%, $7k–$9k */}
              <rect x="50"  y="136" width="274" height="24" rx="1" fill="#F97316" opacity="0.85"/>
              <text x="187" y="151" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">RKEF NPI 45%</text>

              {/* 2. Russia sulphide: 45–52%, $8k–$12k */}
              <rect x="324" y="112" width="43"  height="48" rx="1" fill="#8B5CF6" opacity="0.85"/>
              <text x="345" y="138" textAnchor="middle" fontSize="7" fill="white">Russia</text>

              {/* 3. Philippines: 52–61%, $8.5k–$11k */}
              <rect x="367" y="120" width="55"  height="36" rx="1" fill="#64748B" opacity="0.80"/>
              <text x="394" y="140" textAnchor="middle" fontSize="7" fill="white">PHL</text>

              {/* 4. Australia sulphide: 61–65% */}
              <rect x="422" y="95"  width="24"  height="62" rx="1" fill="#22C55E" opacity="0.85"/>
              <text x="434" y="128" textAnchor="middle" fontSize="7" fill="white">AUS</text>

              {/* 5. Indonesia HPAL: 65–70% */}
              <rect x="446" y="83"  width="30"  height="70" rx="1" fill="#10B981" opacity="0.80"/>
              <text x="459" y="120" textAnchor="middle" fontSize="7" fill="white">HPAL</text>

              {/* 6. New Caledonia: 70–74% */}
              <rect x="476" y="53"  width="24"  height="82" rx="1" fill="#EF5350" opacity="0.75"/>
              <text x="488" y="95"  textAnchor="middle" fontSize="7" fill="white">NwCal</text>

              {/* 7. Canada: 74–77% */}
              <rect x="500" y="70"  width="18"  height="70" rx="1" fill="#3B82F6" opacity="0.80"/>
              <text x="509" y="107" textAnchor="middle" fontSize="7" fill="white">CAN</text>

              {/* 8. High cost / dormant: 77–100% */}
              <rect x="518" y="30"  width="142" height="108" rx="1" fill="#94A3B8" opacity="0.60"/>
              <text x="589" y="85"  textAnchor="middle" fontSize="8" fill="#374151">High cost / dormant</text>
              <text x="589" y="97"  textAnchor="middle" fontSize="7" fill="#374151">(New Caledonia, various)</text>

              {/* LME spot dashed line */}
              <line x1="50" y1="112" x2="660" y2="112" stroke="#22C55E" strokeWidth="2" strokeDasharray="6,4"/>
              <rect x="590" y="99" width="70" height="12" rx="2" fill="#15803D"/>
              <text x="625" y="108" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">LME $15,500/t →</text>

              {/* ~23% below cost annotation */}
              <rect x="490" y="110" width="78" height="12" rx="2" fill="rgba(239,83,80,0.15)"/>
              <text x="529" y="120" textAnchor="middle" fontSize="8" fill="#EF5350">~23% below cost</text>

              {/* X axis labels */}
              <text x="50"  y="237" fontSize="8" fill="#777799">0%</text>
              <text x="274" y="237" fontSize="8" fill="#777799">45%</text>
              <text x="660" y="237" textAnchor="end" fontSize="8" fill="#777799">100%</text>
              <text x="355" y="250" textAnchor="middle" fontSize="8" fill="#777799">Cumulative supply capacity</text>
            </svg>
          </div>

          <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
            CRU Group Nickel Cost Service · Quarterly · AISC = all-in sustaining cost · Spot
            price line updates daily from LME
          </p>
        </div>

        {/* ── Cost table ── */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr>
                {[
                  { label: "Ore type / route",      highlight: false },
                  { label: "Cash cost (2025E)",      highlight: true  },
                  { label: "AISC (2025E)",            highlight: false },
                  { label: "~% of supply",            highlight: false },
                  { label: "vs LME $15,500/t",       highlight: false },
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
              {COST_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink">
                    {row.route}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-[#15803D] font-semibold whitespace-nowrap">
                    {row.cash}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.aisc}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.share}
                  </td>
                  <td className={`px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold whitespace-nowrap ${row.vsColor}`}>
                    {row.vs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Callout — nickel green */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.22)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              The New Caledonia crisis: cost curve in action
            </p>
            <p className="text-[13px] text-ink3 leading-[1.72] m-0">
              New Caledonia's nickel industry has been in crisis since 2024. With AISC of
              $14,000–$20,000/t against an LME price of $15,500, three major smelters (SLN,
              Koniambo, Prony Resources) suspended or closed operations by early 2025,
              collectively removing ~120–150kt of annual nickel supply from the market. This is
              the cost curve mechanism working: when prices fall below AISC, high-cost operations
              close. The closures are structurally bullish — they remove supply that cannot return
              without a significant price recovery.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CostCurve;