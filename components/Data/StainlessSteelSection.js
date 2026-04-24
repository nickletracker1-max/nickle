// components/sections/StainlessSteelSection.jsx

const stats = [
  { value: "~70%", label: "Stainless share", sub: "Of total nickel demand", color: "text-ink" },
  { value: "~60%", label: "China share of SS", sub: "China dominates global production", color: "text-[#6366f1]" },
  { value: "~3.2 Mt", label: "Annual stainless demand", sub: "kt Ni content 2025E", color: "text-ink/60" },
  { value: "+3.5%", label: "SS demand growth", sub: "2025E YoY (IEA)", color: "text-grn" },
];

const tableRows = [
  { driver: "Global SS production growth", trend: "+3.5% YoY · China leading" },
  { driver: "China SS output", trend: "~32Mt (60% of world) · Stable" },
  { driver: "NPI use in SS", trend: "~70% of China SS Ni input is NPI" },
  { driver: "300 series SS (most Ni-intensive)", trend: "~25% of SS production" },
  { driver: "200 series SS (lower Ni)", trend: "Growing share in China — bearish Ni intensity" },
  { driver: "Substitution risk", trend: "200 series and duplex SS use less Ni — structural drag on demand/tonne of SS" },
];

function DemandChart() {
  const bars = [
    { x: 40,  ssH: 117, batH: 3,  allH: 29, othH: 11 },
    { x: 69,  ssH: 115, batH: 3,  allH: 30, othH: 12 },
    { x: 105, ssH: 113, batH: 5,  allH: 30, othH: 11 },
    { x: 141, ssH: 112, batH: 6,  allH: 30, othH: 12 },
    { x: 177, ssH: 112, batH: 8,  allH: 29, othH: 11 },
    { x: 213, ssH: 112, batH: 10, allH: 27, othH: 11 },
    { x: 249, ssH: 112, batH: 11, allH: 27, othH: 10 },
    { x: 285, ssH: 110, batH: 13, allH: 27, othH: 10 },
  ];

  const xLabels = [
    { x: 52,  label: "2018" },
    { x: 117, label: "2020" },
    { x: 189, label: "2022" },
    { x: 261, label: "2024" },
    { x: 297, label: "2025E" },
  ];

  return (
    <svg
      viewBox="0 0 340 220"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ height: 220, display: "block" }}
      role="img"
      aria-label="Stainless vs Battery Demand — stacked bar chart"
    >
      {/* Axes */}
      <line x1="40" y1="15" x2="40" y2="175" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="40" y1="175" x2="330" y2="175" stroke="#E2E8F0" strokeWidth="1" />

      {/* Y labels */}
      {[
        { y: 18,  label: "100%" },
        { y: 68,  label: "75%" },
        { y: 118, label: "50%" },
        { y: 168, label: "25%" },
      ].map((t) => (
        <text key={t.label} x="35" y={t.y} textAnchor="end" fontSize="9" fill="#777799">
          {t.label}
        </text>
      ))}

      {/* Stacked bars */}
      {bars.map((b) => {
        const ssY   = 175 - b.othH - b.allH - b.batH - b.ssH;
        const batY  = 175 - b.othH - b.allH - b.batH;
        const allY  = 175 - b.othH - b.allH;
        const othY  = 175 - b.othH;
        return (
          <g key={b.x}>
            <rect x={b.x} y={ssY}  width="25" height={b.ssH}  rx="2" fill="#64748B" opacity="0.68" />
            <rect x={b.x} y={batY} width="25" height={b.batH} fill="#3B82F6" opacity="0.88" />
            <rect x={b.x} y={allY} width="25" height={b.allH} fill="#94A3B8" opacity="0.64" />
            <rect x={b.x} y={othY} width="25" height={b.othH} fill="#CBD5E1" opacity="0.70" />
          </g>
        );
      })}

      {/* X labels */}
      {xLabels.map((t) => (
        <text key={t.label} x={t.x} y="190" textAnchor="middle" fontSize="8" fill="#777799">
          {t.label}
        </text>
      ))}

      {/* Band labels */}
      <text x="180" y="70"  textAnchor="middle" fontSize="10" fill="white" fontWeight="700">Stainless ~70%</text>
      <text x="180" y="131" textAnchor="middle" fontSize="9"  fill="white" fontWeight="700">Battery ↑</text>
      <text x="180" y="149" textAnchor="middle" fontSize="9"  fill="#1A1A2E">Alloys</text>

      {/* Legend */}
      <rect x="40"  y="202" width="8" height="8" rx="1" fill="#64748B" opacity="0.7" />
      <text x="52"  y="210" fontSize="8" fill="#1A1A2E">Stainless steel</text>
      <rect x="125" y="202" width="8" height="8" rx="1" fill="#3B82F6" opacity="0.9" />
      <text x="137" y="210" fontSize="8" fill="#1A1A2E">Battery (EV)</text>
      <rect x="200" y="202" width="8" height="8" rx="1" fill="#94A3B8" opacity="0.65" />
      <text x="212" y="210" fontSize="8" fill="#1A1A2E">Alloys/plating</text>
      <rect x="285" y="202" width="8" height="8" rx="1" fill="#CBD5E1" opacity="0.7" />
      <text x="297" y="210" fontSize="8" fill="#1A1A2E">Other</text>
    </svg>
  );
}

export default function StainlessSteelSection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="stainless" aria-label="Stainless steel demand section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section G
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          Stainless Steel Demand — Still 70% of Global Nickel Use
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          Despite the EV narrative, stainless steel remains by far the largest end use for nickel
          at approximately 70% of total demand. Understanding stainless demand (primarily driven
          by Chinese output) is essential to the overall nickel price view.
        </p>

        {/* Body */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          China's 300-series vs 200-series stainless shift: the nickel intensity problem
        </h3>
        <p className="text-base text-ink/80 max-w-3xl mb-8 leading-relaxed">
          Stainless steel comes in several grades.{" "}
          <strong className="text-ink font-semibold">300-series stainless</strong> (304, 316)
          contains 8–14% nickel and is the most common grade for food equipment, medical, and
          chemical applications.{" "}
          <strong className="text-ink font-semibold">200-series stainless</strong> contains only
          1–5% nickel, substituting manganese for nickel to reduce cost. China has been gradually
          increasing 200-series production share — a structural drag on nickel demand per tonne of
          stainless produced. This substitution effect means that even if Chinese stainless output
          grows at 3–4% annually, nickel demand from stainless may grow at only 1–2% due to the
          declining nickel intensity.
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Duplex stainless and the other grades
        </h3>
        <p className="text-base text-ink/80 max-w-3xl mb-8 leading-relaxed">
          Duplex stainless steel (2205, 2507) uses 4–7% nickel but significantly more chromium and
          molybdenum. Its share is growing in oil and gas and marine applications due to superior
          corrosion resistance. Duplex is less nickel-intensive per tonne than 300-series but
          commands a higher price — the economics are different from commodity stainless. For
          nickel demand modelling, the share shift between 300-series, 200-series, and duplex is a
          material variable that most simple forecasts undermodel.
        </p>

        <p className="text-base text-ink/80 max-w-3xl mb-8 leading-relaxed">
          Beyond stainless steel, nickel has two other significant industrial uses.{" "}
          <strong className="text-ink font-semibold">Nickel superalloy</strong> components —
          including turbine blades, combustion chambers, and exhaust systems — are indispensable
          in jet engines and industrial gas turbines because nickel superalloys retain strength at
          temperatures exceeding 1,000°C. No other material performs equivalently in these
          applications.{" "}
          <strong className="text-ink font-semibold">Nickel electroplating</strong> (depositing a
          thin nickel layer onto metal surfaces for corrosion resistance) is used throughout
          automotive manufacturing, electronics connectors, and bathroom fixtures. Together these
          applications account for approximately 21% of nickel demand.
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Chinese stainless production and its link to nickel price
        </h3>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          China produces approximately 32 million tonnes of stainless steel per year — roughly 60%
          of global output. Chinese stainless production runs largely on NPI (approximately 70% of
          Chinese SS nickel input is NPI rather than refined LME nickel). This means the direct
          LME nickel price has a weaker link to Chinese stainless demand than it does to battery
          demand. When Chinese stainless output is weak (construction slowdown, export
          restrictions), Chinese NPI demand falls — which lowers NPI price, which narrows the
          Class 1 premium, which puts indirect downward pressure on LME nickel.
        </p>

        {/* Stat band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bdr rounded-xl overflow-hidden border border-bdr mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-5 flex flex-col gap-1">
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-sm font-semibold text-ink">{s.label}</p>
              <p className="text-xs text-ink/50">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Chart + table */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Chart card */}
          <div className="bg-white rounded-xl border border-bdr p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/40 mb-1">
                  IEA · World Stainless Steel Association · Annual
                </p>
                <p className="text-sm font-bold text-ink">Nickel Demand by End Use 2018–2026E</p>
                <p className="text-xs text-ink/60 mt-0.5">
                  Stainless still dominant · Battery share rising but still &lt;10% of total · Alloys, plating, other ~20%
                </p>
              </div>
              <div className="flex gap-1 shrink-0">
                <button className="text-xs font-medium px-3 py-1 rounded-full bg-ink text-white">% share</button>
                <button className="text-xs font-medium px-3 py-1 rounded-full border border-bdr text-ink/60 hover:bg-[#F4F7FB] transition-colors">kt Ni</button>
              </div>
            </div>
            <DemandChart />
            <p className="text-[10px] text-ink/40">
              IEA Critical Minerals Outlook · World Stainless Steel Association · Annual
            </p>
          </div>

          {/* Table card */}
          <div className="bg-white rounded-xl border border-bdr p-5 flex flex-col gap-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-li">
              Stainless steel demand context
            </p>
            <div className="overflow-x-auto rounded-lg border border-bdr">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-[#F4F7FB] border-b border-bdr">
                    {["Driver", "2025 trend"].map((h) => (
                      <th key={h} className="px-4 py-3 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={row.driver}
                      className={`border-b border-bdr last:border-0 transition-colors hover:bg-[#F4F7FB]/60 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]/30"
                      }`}
                    >
                      <td className="px-4 py-3 font-medium text-ink align-top">{row.driver}</td>
                      <td className="px-4 py-3 text-ink/75 align-top leading-relaxed">{row.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}