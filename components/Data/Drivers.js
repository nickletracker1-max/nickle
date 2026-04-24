import React, { useState } from 'react';

const SIGNALS = [
  {
    signal: "Indonesia RKAB permits",
    direction: "Restrictive",
    directionColor: "text-amb",
    dotColor: "bg-[#F59E0B]",
    reading: "2025 RKAB quotas below 2024 levels — Indonesian government limiting new mine approvals to support domestic processing investment. Marginally bullish.",
    update: "Quarterly",
    source: "Indonesian Ministry of Energy (MEMR)",
  },
  {
    signal: "LME warehouse stocks trend",
    direction: "Bullish ↓",
    directionColor: "text-[#1A7A4A]",
    dotColor: "bg-[#4CAF50]",
    reading: "183,000 t — Declining from 246k peak. 8-week declining trend. Physical demand drawing down inventory.",
    update: "Weekly (Fri)",
    source: "LME official data",
  },
  {
    signal: "Cancelled warrants ratio",
    direction: "Rising ↑",
    directionColor: "text-[#1A7A4A]",
    dotColor: "bg-[#4CAF50]",
    reading: "15.5% of registered warrants cancelled — Rising = metal leaving exchange system = demand taking physical delivery. Bullish signal.",
    update: "Weekly",
    source: "LME official data",
  },
  {
    signal: "Chinese NPI production (monthly)",
    direction: "Bearish ↑",
    directionColor: "text-red",
    dotColor: "bg-[#EF5350]",
    reading: "~44,000 t Ni content/month — Still at elevated levels despite price pressure. Chinese NPI stays higher than market expected at $15,500.",
    update: "Monthly (~20th)",
    source: "SMM monthly survey",
  },
  {
    signal: "China stainless steel output",
    direction: "Neutral →",
    directionColor: "text-amb",
    dotColor: "bg-[#F59E0B]",
    reading: "+2.8% YoY Q1 2026 — Growth but below the rate needed to absorb Indonesian supply increases.",
    update: "Monthly",
    source: "CISA (China Iron & Steel Association)",
  },
  {
    signal: "LFP vs NMC battery share",
    direction: "Bearish (LFP rising)",
    directionColor: "text-red",
    dotColor: "bg-[#EF5350]",
    reading: "LFP ~65% of new EV batteries — Every percentage point LFP gains vs NMC reduces nickel demand growth from EVs.",
    update: "Monthly",
    source: "CAAM / SNE Research",
  },
];

const Drivers = () => {
  const [npiTab, setNpiTab] = useState("Monthly");

  return (
    <section className="py-10 bg-white" id="drivers" aria-label="Price driver dashboard section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section K
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Nickel Price Driver Dashboard
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-6">
          Five variables explain the majority of near-term nickel price moves. The signal
          dashboard below shows current readings. Green = bullish for nickel price; amber =
          neutral; red = bearish.
        </p>

        {/* Signal table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr>
                {["Signal", "Direction", "Live reading", "Update", "Source"].map((h) => (
                  <th
                    key={h}
                    className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3.5 py-2.5 text-left border-b-2 border-bdr whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIGNALS.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap align-top">
                    {row.signal}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] align-top whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${row.dotColor}`} />
                      <span className={`text-[11px] font-bold ${row.directionColor}`}>
                        {row.direction}
                      </span>
                    </div>
                  </td>
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55] align-top max-w-[320px]">
                    {row.reading}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap align-top">
                    {row.update}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.5] align-top max-w-[180px]">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── NPI chart + Short squeeze context ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* NPI monthly chart */}
          <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
            <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                  SMM Monthly Survey · China NPI Production
                </p>
                <p className="text-[14px] font-bold text-ink leading-tight">
                  Chinese NPI Monthly Output — kt Ni Content
                </p>
                <p className="text-[11px] text-muted mt-0.5">
                  Current: ~<strong className="text-ink">44,000 t/month</strong> · Key supply
                  signal — rising NPI = bearish for Class 1 price
                </p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                {["Monthly", "Annual"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setNpiTab(tab)}
                    className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer
                      ${npiTab === tab
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
                viewBox="0 0 340 180"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto block"
                role="img"
                aria-label="NPI Monthly Production — line chart"
              >
                <defs>
                  <linearGradient id="npiHistGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#EF5350" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#EF5350" stopOpacity="0.02"/>
                  </linearGradient>
                </defs>
                <line x1="40" y1="10"  x2="40"  y2="155" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="155" x2="330" y2="155" stroke="#E2E8F0" strokeWidth="1"/>
                <text x="35" y="13"  textAnchor="end" fontSize="9" fill="#777799">55kt</text>
                <text x="35" y="63"  textAnchor="end" fontSize="9" fill="#777799">48kt</text>
                <text x="35" y="113" textAnchor="end" fontSize="9" fill="#777799">42kt</text>
                <text x="35" y="155" textAnchor="end" fontSize="9" fill="#777799">36kt</text>
                <path
                  d="M 40,90 L 55,82 L 70,95 L 85,75 L 100,68 L 115,88 L 130,72 L 145,65 L 160,78 L 175,85 L 190,70 L 205,62 L 220,75 L 235,68 L 250,72 L 265,80 L 280,74 L 295,78 L 310,76 L 330,78 L 330,155 L 40,155 Z"
                  fill="url(#npiHistGrad)"
                />
                <polyline
                  points="40,90 55,82 70,95 85,75 100,68 115,88 130,72 145,65 160,78 175,85 190,70 205,62 220,75 235,68 250,72 265,80 280,74 295,78 310,76 330,78"
                  fill="none" stroke="#EF5350" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                />
                <circle cx="330" cy="78" r="3.5" fill="#EF5350" stroke="white" strokeWidth="1.5"/>
                <rect x="258" y="64" width="68" height="12" rx="2" fill="#991B1B"/>
                <text x="292" y="73" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">~44k t/month</text>
                <text x="80" y="170" textAnchor="middle" fontSize="9" fill="#777799">Apr'24 ↔ Apr'26</text>
              </svg>
            </div>
            <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
              SMM · Chinese NPI producers survey · kt Ni content · Monthly ~20th of month
            </p>
          </div>

          {/* Short squeeze context */}
          <div className="bg-white border border-bdr rounded-[14px] p-[16px_18px] flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-[.1em] text-red">
              ⚠ The March 2022 Short Squeeze — Context
            </p>
            <p className="text-[12px] text-ink3 leading-[1.72]">
              On March 8, 2022, LME nickel hit $101,365/t intraday — not because of supply
              shortage, but because Tsingshan Holdings (Indonesia's largest nickel producer) held
              an estimated 150,000+ tonne short position on the LME. As nickel rose from
              geopolitical concerns (Russia sanctions), Tsingshan faced margin calls and a
              catastrophic short squeeze.
            </p>
            <p className="text-[12px] text-ink3 leading-[1.72]">
              The LME controversially halted trading and cancelled ~$3.9B in executed trades — a
              decision that damaged the exchange's credibility. Several hedge funds lost money on
              valid long positions that were cancelled. The episode prompted multiple lawsuits and
              an FCA review.
            </p>

            {/* Callout — amber */}
            <div className="flex gap-2.5 items-start rounded-[10px] p-3 bg-amb-bg border border-[rgba(146,64,14,0.2)] mt-auto">
              <span className="text-[14px] flex-shrink-0 mt-0.5">⚠</span>
              <div>
                <p className="text-[12px] font-bold text-ink mb-1">Market integrity risk</p>
                <p className="text-[12px] text-ink3 leading-[1.65] m-0">
                  The squeeze revealed that a single company could accumulate a position large
                  enough to destabilise the LME nickel market. Tsingshan's Indonesian production
                  gives it both physical supply and the ability to short the contract, creating
                  potential for repeated positioning risk.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Drivers;