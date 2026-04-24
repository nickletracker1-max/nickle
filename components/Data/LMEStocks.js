import React, { useState } from 'react';

const STAT_BAND = [
  { value: "183,000",  valueColor: "text-[#64748B]", label: "LME registered (t)",    sub: "Latest weekly reading"    },
  { value: "28,400",   valueColor: "text-[#F59E0B]", label: "Cancelled warrants (t)", sub: "Awaiting delivery"        },
  { value: "↓ 8-wk",  valueColor: "text-[#1A7A4A]", label: "Inventory trend",        sub: "Declining for 8 weeks"   },
  { value: "15.5%",    valueColor: "text-muted",     label: "Cancelled %",            sub: "Of total registered"     },
];

const LMEStocks = () => {
  const [stockTab, setStockTab] = useState("1Y");

  return (
    <section className="py-10 bg-white" id="lme-stocks" aria-label="LME warehouse stocks section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section C
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          LME Nickel Warehouse Stocks &amp; Cancelled Warrants
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-5">
          LME registered inventory is the primary transparent signal of physical supply
          availability for Class 1 nickel. Unlike copper (which has three major exchange
          warehouses — LME, COMEX, SHFE), nickel's physical inventory is concentrated on the LME.
          Cancelled warrants signal metal is being drawn down and leaving the system.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mt-5 mb-2">
          Understanding LME nickel inventory — what the numbers mean
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-3">
          LME warehouse stocks measure nickel that has been delivered against LME contracts and is
          sitting in registered warehouses. They are a snapshot of <em>available</em> Class 1
          supply — not total global inventory, which also includes off-warrant metal in private
          warehouses, producer stockpiles, and in-transit metal. Current LME stocks of{' '}
          <strong className="text-ink">183,000 tonnes</strong> represent approximately 7–8 weeks
          of global Class 1 nickel consumption.
        </p>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          The stocks peaked at approximately 246,000 tonnes in mid-2023 as the post-short-squeeze
          settlement resolved and excess refined metal moved onto exchange. They have declined
          since, consistent with the gradual surplus narrowing trend. The{' '}
          <strong className="text-ink">8-week declining trend</strong> is a bullish signal —
          physical demand is consistently drawing down inventory faster than supply is delivering
          new metal to warehouses.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          Cancelled warrants: the most actionable weekly signal
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          Cancelled warrants are LME-registered metal that has been flagged for physical delivery
          and removal from the exchange system. When a buyer wants actual nickel (not just paper
          exposure), they cancel the warrant. A{' '}
          <strong className="text-ink">rising cancelled warrant ratio</strong> (currently 15.5% of
          registered stock) signals that physical consumers are taking delivery — the most direct
          evidence of real end-user demand. Watch this number weekly. A sustained rise above 20%
          in conjunction with declining total stocks is historically a strong precursor to LME
          price moves.
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

        {/* ── Two charts ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Chart: LME Warehouse Stocks */}
          <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
            <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                  LME Registered Nickel · Weekly · Tonnes
                </p>
                <p className="text-[14px] font-bold text-ink leading-tight">
                  LME Nickel Warehouse Stocks
                </p>
                <p className="text-[11px] text-muted mt-0.5">
                  Current: <strong className="text-ink">183,000 t</strong> · Post-squeeze rebuild
                  peak ~250,000 t (2023) · Now declining
                </p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                {["1Y", "2Y"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setStockTab(tab)}
                    className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer
                      ${stockTab === tab
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
                aria-label="LME Warehouse Stocks — weekly area chart"
              >
                <defs>
                  <linearGradient id="stockGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#64748B" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#64748B" stopOpacity="0.02"/>
                  </linearGradient>
                </defs>
                <line x1="40" y1="10"  x2="40"  y2="170" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="170" x2="330" y2="170" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="40"  x2="330" y2="40"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <line x1="40" y1="80"  x2="330" y2="80"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <line x1="40" y1="120" x2="330" y2="120" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <text x="35" y="13"  textAnchor="end" fontSize="9" fill="#777799">250k t</text>
                <text x="35" y="43"  textAnchor="end" fontSize="9" fill="#777799">220k t</text>
                <text x="35" y="83"  textAnchor="end" fontSize="9" fill="#777799">200k t</text>
                <text x="35" y="123" textAnchor="end" fontSize="9" fill="#777799">185k t</text>
                <text x="35" y="173" textAnchor="end" fontSize="9" fill="#777799">150k t</text>
                <path
                  d="M 40,60 L 80,48 L 120,38 L 155,40 L 190,55 L 220,75 L 255,90 L 280,100 L 300,108 L 320,118 L 330,122 L 330,170 L 40,170 Z"
                  fill="url(#stockGrad)"
                />
                <polyline
                  points="40,60 80,48 120,38 155,40 190,55 220,75 255,90 280,100 300,108 320,118 330,122"
                  fill="none" stroke="#64748B" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                />
                <circle cx="120" cy="38" r="4" fill="#EF5350" stroke="white" strokeWidth="1.5"/>
                <rect x="65" y="22" width="68" height="14" rx="3" fill="#991B1B"/>
                <text x="99" y="32" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Peak 246k t</text>
                <circle cx="330" cy="122" r="3.5" fill="#22C55E" stroke="white" strokeWidth="1.5"/>
                <rect x="268" y="107" width="60" height="14" rx="3" fill="#15803D"/>
                <text x="298" y="117" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">183k t ↓</text>
                <text x="90"  y="185" textAnchor="middle" fontSize="9" fill="#777799">Apr'25</text>
                <text x="185" y="185" textAnchor="middle" fontSize="9" fill="#777799">Oct'25</text>
                <text x="295" y="185" textAnchor="middle" fontSize="9" fill="#777799">Apr'26</text>
              </svg>
            </div>
            <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
              LME registered warehouses · Weekly · Tonnes on warrant (excludes off-warrant)
            </p>
          </div>

          {/* Chart: Cancelled Warrants */}
          <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
            <div className="p-[14px_18px] border-b border-bdr">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                LME Cancelled Warrants · Weekly · Bullish when rising
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                LME Nickel Cancelled Warrants
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                Currently: <strong className="text-ink">28,400 t (15.5%)</strong> of total ·
                Rising = metal leaving exchange = bullish
              </p>
            </div>

            <div className="w-full p-4">
              <svg
                viewBox="0 0 340 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto block"
                role="img"
                aria-label="Cancelled Warrants — weekly bar chart"
              >
                <line x1="40" y1="10"  x2="40"  y2="170" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="170" x2="330" y2="170" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="55"  x2="330" y2="55"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <line x1="40" y1="110" x2="330" y2="110" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <text x="35" y="13"  textAnchor="end" fontSize="9" fill="#777799">50k t</text>
                <text x="35" y="58"  textAnchor="end" fontSize="9" fill="#777799">35k t</text>
                <text x="35" y="113" textAnchor="end" fontSize="9" fill="#777799">20k t</text>
                <text x="35" y="173" textAnchor="end" fontSize="9" fill="#777799">0</text>
                {/* Amber bars — earlier period */}
                {[
                  [45,145,25],[58,135,35],[71,152,18],[84,140,30],[97,130,40],
                  [110,120,50],[123,142,28],[136,155,15],[149,148,22],[162,138,32],
                  [175,125,45],[188,150,20],[201,140,30],[214,128,42],[227,118,52],
                  [240,130,40],
                ].map(([x, y, h], i) => (
                  <rect key={i} x={x} y={y} width="9" height={h} rx="1" fill="#F59E0B" opacity="0.8"/>
                ))}
                {/* Green bars — recent rising period */}
                {[
                  [253,120,50],[266,110,60],[279,100,70],[292,108,62],[305,98,72],[318,90,80],
                ].map(([x, y, h], i) => (
                  <rect key={i} x={x} y={y} width="9" height={h} rx="1" fill="#22C55E" opacity="0.8"/>
                ))}
                <text x="40"  y="185" fontSize="9" fill="#777799">Apr'25 ↔ Apr'26</text>
                <text x="274" y="83"  fontSize="8" fill="#22C55E" fontWeight="700">↑ Rising</text>
                <text x="274" y="93"  fontSize="8" fill="#22C55E">= Bullish</text>
              </svg>
            </div>
            <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
              LME · Cancelled warrants = metal ordered for delivery and leaving LME system · Weekly
            </p>
          </div>
        </div>

        {/* Callout — green */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-grn-bg border border-[rgba(26,122,74,0.18)]">
          <span className="text-lg flex-shrink-0 mt-0.5">✓</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              How to read LME nickel stocks for price direction
            </p>
            <p className="text-[13px] text-ink3 leading-[1.72] m-0">
              Rising LME stocks = supply building up in exchange warehouses = bearish (more metal
              available than buyers need). Falling LME stocks + rising cancelled warrants
              simultaneously = physical demand removing metal from the exchange system = bullish.
              The cancelled warrant ratio (currently 15.5%) and its trend is more informative than
              absolute stock levels.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LMEStocks;