import React, { useState } from 'react';

const PRICE_SUMMARY = [
  { label: "LME spot (Apr 2026)",   value: "$15,500/t", color: "text-[#15803D]"  },
  { label: "ATH (Mar 8, 2022)",     value: "$101,365/t", color: "text-red"       },
  { label: "Pre-squeeze peak",      value: "$28,400/t",  color: "text-ink"       },
  { label: "Cycle trough",          value: "$15,090/t",  color: "text-amb"       },
  { label: "From pre-squeeze peak", value: "−45%",       color: "text-red"       },
  { label: "From ATH",              value: "−85%",       color: "text-red"       },
];

const ALL_GRADES = [
  { label: "LME Nickel (Class 1, full plate)", value: "$15,500/t",       color: "text-[#15803D]" },
  { label: "NPI 8–12% Ni (China domestic)",    value: "$13,200/t",       color: "text-[#EF5350]" },
  { label: "Ferronickel FeNi (LME equiv.)",    value: "$14,800/t",       color: "text-ink"       },
  { label: "MHP (Mixed Hydroxide Precipitate)",value: "$15,100/t",       color: "text-[#10B981]" },
  { label: "Nickel Sulphate (battery grade)",  value: "$4,850/t sulphate",color: "text-[#3B82F6]" },
];

const TIME_TABS = ["1Y", "3Y", "5Y", "All"];

const NickelPrices = () => {
  const [activeTab, setActiveTab] = useState("1Y");

  return (
    <section className="py-10 bg-white" id="prices" aria-label="Nickel price today section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section A
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Nickel Price Today — LME, NPI, Ferronickel &amp; Sulphate
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-5">
          LME nickel is the global Class 1 benchmark. NPI and ferronickel are Class 2 products
          trading at a discount. Nickel sulphate is the battery-grade chemical. All four prices
          move independently.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mt-5 mb-2">
          Nickel price chart and nickel price today — per pound, per tonne, per kg
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-3">
          LME nickel is <strong className="text-ink">$15,500 per metric tonne</strong> as of April
          2026, equivalent to <strong className="text-ink">$7.03 per pound (lb)</strong> and{' '}
          <strong className="text-ink">$15.50 per kilogram (kg)</strong>. The LME official
          settlement is published daily at approximately 17:00 London time. It is the Class 1
          global benchmark price used in contracts worldwide.
        </p>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          The pre-squeeze fundamental peak was $28,400/t in February 2022 — a realistic reference
          for fair value analysis, unlike the $101,365 March 2022 spike which was a short squeeze,
          not a supply shortage signal. See{' '}
          <a href="#history" className="text-[#15803D] hover:underline">price history</a> for the
          full context.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          Why LME nickel and NPI prices diverge
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          LME nickel (Class 1, ≥99.8% pure) and Chinese NPI (Class 2, 8–12% Ni content in a
          ferronickel alloy) serve different end markets and have different production costs. LME
          is produced primarily from sulphide ore at higher AISC; NPI is produced from cheap
          Indonesian laterite ore via RKEF blast furnaces at $7,000–$9,000/t AISC. The current{' '}
          <strong className="text-ink">$2,300/t Class 1 premium</strong> reflects the additional
          refining cost and the battery market's demand for high-purity Class 1 nickel sulphate.
          When battery demand expectations were highest (2022), this spread reached +$8,000/t.
        </p>

        {/* ── Chart + Price Summary (5fr/2fr) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-4 mb-4">

          {/* LME Spot Chart */}
          <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
            {/* Chart header */}
            <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                  LME Official Settlement · USD/t · Daily
                </p>
                <p className="text-[14px] font-bold text-ink leading-tight">
                  LME Nickel Spot Price
                </p>
                <p className="text-[11px] text-muted mt-0.5">
                  Current:{' '}
                  <strong className="text-[#15803D]">$15,500/t</strong> · ATH $101,365 (Mar 8
                  2022 — short squeeze) · Pre-squeeze high $28,400 (Feb 2022)
                </p>
              </div>
              {/* Time tabs */}
              <div className="flex gap-1 flex-shrink-0">
                {TIME_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer
                      ${activeTab === tab
                        ? "bg-[rgba(34,197,94,0.08)] text-[#15803D] border-[rgba(34,197,94,0.3)]"
                        : "bg-white text-muted border-bdr hover:text-[#15803D] hover:border-[rgba(34,197,94,0.3)]"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Chart */}
            <div className="w-full p-4">
              <svg
                viewBox="0 0 680 220"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto block"
                role="img"
                aria-label="LME Nickel Spot Price — 1 year line chart"
              >
                <defs>
                  <linearGradient id="niGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0.01"/>
                  </linearGradient>
                </defs>
                <line x1="50" y1="15"  x2="50"  y2="190" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="50" y1="190" x2="660" y2="190" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="50" y1="15"  x2="660" y2="15"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <line x1="50" y1="63"  x2="660" y2="63"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <line x1="50" y1="111" x2="660" y2="111" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <line x1="50" y1="159" x2="660" y2="159" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <text x="44" y="18"  textAnchor="end" fontSize="9" fill="#777799">$28k</text>
                <text x="44" y="66"  textAnchor="end" fontSize="9" fill="#777799">$22k</text>
                <text x="44" y="114" textAnchor="end" fontSize="9" fill="#777799">$18k</text>
                <text x="44" y="162" textAnchor="end" fontSize="9" fill="#777799">$15k</text>
                <text x="110" y="204" textAnchor="middle" fontSize="9" fill="#777799">Apr'25</text>
                <text x="235" y="204" textAnchor="middle" fontSize="9" fill="#777799">Jul'25</text>
                <text x="360" y="204" textAnchor="middle" fontSize="9" fill="#777799">Oct'25</text>
                <text x="490" y="204" textAnchor="middle" fontSize="9" fill="#777799">Jan'26</text>
                <text x="610" y="204" textAnchor="middle" fontSize="9" fill="#777799">Apr'26</text>
                <path
                  d="M 50,168 L 82,162 L 110,158 L 140,153 L 170,159 L 200,165 L 230,171 L 260,174 L 290,176 L 320,173 L 350,170 L 380,166 L 410,162 L 440,165 L 470,168 L 500,163 L 530,159 L 560,157 L 590,160 L 620,162 L 650,159 L 660,159 L 660,190 L 50,190 Z"
                  fill="url(#niGrad)"
                />
                <polyline
                  points="50,168 82,162 110,158 140,153 170,159 200,165 230,171 260,174 290,176 320,173 350,170 380,166 410,162 440,165 470,168 500,163 530,159 560,157 590,160 620,162 650,159 660,159"
                  fill="none" stroke="#22C55E" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                />
                <circle cx="660" cy="159" r="4" fill="#22C55E" stroke="white" strokeWidth="1.5"/>
                <rect x="610" y="143" width="54" height="14" rx="3" fill="#15803D"/>
                <text x="637" y="153" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">$15,500/t</text>
              </svg>
            </div>
            <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
              LME Official Settlement · Daily · USD per tonne ·{' '}
              <a href="/nickel/#history" className="text-[#15803D] hover:underline">5-year history</a>
            </p>
          </div>

          {/* Price Summary Panel */}
          <div className="bg-white border border-bdr rounded-[14px] p-[16px_18px]">
            <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#15803D] mb-3">
              Price summary
            </p>
            <div className="flex flex-col gap-0">
              {PRICE_SUMMARY.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-2.5
                    ${i !== PRICE_SUMMARY.length - 1 ? "border-b border-bdr" : ""}`}
                >
                  <span className="text-[12px] text-muted">{row.label}</span>
                  <span className={`font-bold text-[13px] ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── All Grades + NPI Chart (2 col) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* All Grades Panel */}
          <div className="bg-white border border-bdr rounded-[14px] p-[16px_18px]">
            <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#15803D] mb-3">
              All nickel grades — April 2026
            </p>
            <div className="flex flex-col gap-0">
              {ALL_GRADES.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-2 text-[12px]
                    ${i !== ALL_GRADES.length - 1 ? "border-b border-bdr" : ""}`}
                >
                  <span className="text-muted">{row.label}</span>
                  <span className={`font-bold ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NPI Line Chart */}
          <div className="bg-white border border-bdr rounded-[14px] overflow-hidden">
            <div className="p-[14px_18px] border-b border-bdr">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                SHFE / SMM Daily · China domestic · Class 2
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                NPI Price — China Domestic (2023–2026)
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                Nickel pig iron at <strong className="text-ink">$13,200/t equiv</strong> · Discount
                to LME: <strong className="text-ink">$2,300/t</strong>
              </p>
            </div>
            <div className="w-full p-4">
              <svg
                viewBox="0 0 340 180"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto block"
                role="img"
                aria-label="NPI China Price — 2 year declining line"
              >
                <defs>
                  <linearGradient id="npiGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EF5350" stopOpacity="0.12"/>
                    <stop offset="100%" stopColor="#EF5350" stopOpacity="0.01"/>
                  </linearGradient>
                </defs>
                <line x1="40" y1="10"  x2="40"  y2="160" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="160" x2="330" y2="160" stroke="#E2E8F0" strokeWidth="1"/>
                <line x1="40" y1="50"  x2="330" y2="50"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <line x1="40" y1="100" x2="330" y2="100" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/>
                <text x="35" y="13"  textAnchor="end" fontSize="9" fill="#777799">$18k</text>
                <text x="35" y="53"  textAnchor="end" fontSize="9" fill="#777799">$15k</text>
                <text x="35" y="103" textAnchor="end" fontSize="9" fill="#777799">$13k</text>
                <text x="35" y="163" textAnchor="end" fontSize="9" fill="#777799">$11k</text>
                <path
                  d="M 40,35 L 80,42 L 120,55 L 160,78 L 200,105 L 240,120 L 280,128 L 310,130 L 330,132 L 330,160 L 40,160 Z"
                  fill="url(#npiGrad)"
                />
                <polyline
                  points="40,35 80,42 120,55 160,78 200,105 240,120 280,128 310,130 330,132"
                  fill="none" stroke="#EF5350" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                />
                <circle cx="330" cy="132" r="3.5" fill="#EF5350" stroke="white" strokeWidth="1.5"/>
                <rect x="270" y="118" width="58" height="14" rx="3" fill="#991B1B"/>
                <text x="299" y="128" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">$13,200/t</text>
                <text x="87"  y="174" textAnchor="middle" fontSize="9" fill="#777799">Jan'24</text>
                <text x="187" y="174" textAnchor="middle" fontSize="9" fill="#777799">Jan'25</text>
                <text x="290" y="174" textAnchor="middle" fontSize="9" fill="#777799">Apr'26</text>
              </svg>
            </div>
            <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
              SMM China domestic · NPI 8–12% Ni grade · USD equiv · Daily
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NickelPrices;