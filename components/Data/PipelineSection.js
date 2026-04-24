// components/sections/PipelineSection.jsx

const stats = [
  { value: "1,044", label: "Total assets tracked", sub: "Mines, projects, facilities", color: "text-li" },
  { value: "27", label: "Operating", sub: "Producing mines & plants", color: "text-grn" },
  { value: "27", label: "Development", sub: "FID taken or near-FID", color: "text-[#6366f1]" },
  { value: "10", label: "Care & Maintenance", sub: "Shut down at current prices", color: "text-[#f59e0b]" },
];

const regionRows = [
  { region: "Indonesia", operating: "~2,200kt", development: "~400kt", explore: "~200kt" },
  { region: "Canada", operating: "~110kt", development: "~500kt", explore: "~1,000kt" },
  { region: "Australia", operating: "~148kt", development: "~200kt", explore: "~450kt" },
  { region: "Russia", operating: "~260kt", development: "~50kt", explore: "~80kt" },
  { region: "Philippines", operating: "~350kt", development: "~80kt", explore: "~120kt" },
  { region: "USA", operating: "~5kt", development: "~80kt", explore: "~250kt" },
  { region: "Europe", operating: "~20kt", development: "~40kt", explore: "~100kt" },
  { region: "Other", operating: "~250kt", development: "~150kt", explore: "~400kt" },
];

function PipelineChart() {
  return (
    <svg
      viewBox="0 0 340 220"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ height: 220, display: "block" }}
      role="img"
      aria-label="Pipeline by Status and Ore Type — grouped bars"
    >
      {/* Axes */}
      <line x1="40" y1="10" x2="40" y2="175" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="40" y1="175" x2="330" y2="175" stroke="#E2E8F0" strokeWidth="1" />

      {/* Y labels */}
      {[
        { y: 13, label: "2,000kt" },
        { y: 63, label: "1,300kt" },
        { y: 113, label: "700kt" },
        { y: 163, label: "100kt" },
      ].map((t) => (
        <text key={t.label} x="35" y={t.y} textAnchor="end" fontSize="9" fill="#777799">
          {t.label}
        </text>
      ))}

      {/* Operating */}
      <rect x="55" y="82" width="35" height="93" rx="2" fill="#F97316" opacity="0.85" />
      <rect x="55" y="53" width="35" height="29" fill="#8B5CF6" opacity="0.8" />
      <rect x="55" y="36" width="35" height="17" fill="#94A3B8" opacity="0.7" />
      <text x="72" y="190" textAnchor="middle" fontSize="8" fill="#777799">Operating</text>

      {/* Development */}
      <rect x="140" y="100" width="35" height="75" rx="2" fill="#F97316" opacity="0.85" />
      <rect x="140" y="41" width="35" height="59" fill="#8B5CF6" opacity="0.8" />
      <rect x="140" y="30" width="35" height="11" fill="#94A3B8" opacity="0.7" />
      <text x="157" y="190" textAnchor="middle" fontSize="8" fill="#777799">Development</text>

      {/* Exploration */}
      <rect x="225" y="79" width="35" height="96" rx="2" fill="#F97316" opacity="0.6" />
      <rect x="225" y="32" width="35" height="47" fill="#8B5CF6" opacity="0.6" />
      <rect x="225" y="20" width="35" height="12" fill="#94A3B8" opacity="0.5" />
      <text x="242" y="190" textAnchor="middle" fontSize="8" fill="#777799">Exploration</text>

      {/* C&M */}
      <rect x="285" y="158" width="35" height="17" rx="2" fill="#EF5350" opacity="0.7" />
      <text x="302" y="190" textAnchor="middle" fontSize="8" fill="#777799">C&amp;M</text>

      {/* Legend */}
      <rect x="55" y="202" width="8" height="8" rx="1" fill="#F97316" opacity="0.85" />
      <text x="67" y="210" fontSize="8" fill="#1A1A2E">Laterite</text>
      <rect x="115" y="202" width="8" height="8" rx="1" fill="#8B5CF6" opacity="0.8" />
      <text x="127" y="210" fontSize="8" fill="#1A1A2E">Sulphide</text>
      <rect x="175" y="202" width="8" height="8" rx="1" fill="#94A3B8" opacity="0.7" />
      <text x="187" y="210" fontSize="8" fill="#1A1A2E">Mixed</text>
    </svg>
  );
}

export default function PipelineSection() {
  return (
    <section className="bg-white py-16 md:py-20" id="pipeline" aria-label="Nickel project pipeline section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section F
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          Nickel Project Pipeline — Supply Coming Online Through 2030
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          From our proprietary database of{" "}
          <strong className="text-ink font-semibold">1,044 nickel assets</strong> across 66
          companies and 20+ countries. The pipeline determines whether Indonesian supply growth
          continues or new sulphide mines offset any Indonesian slowdown.
        </p>

        {/* Body text */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Why sulphide pipeline matters more than its tonnage suggests
        </h3>
        <p className="text-base text-ink/80 max-w-3xl mb-8 leading-relaxed">
          Sulphide deposits produce Class 1 nickel directly — critical for battery supply chains.
          Laterite deposits (which dominate by tonnage) mostly produce Class 2 NPI unless
          processed via HPAL. The global sulphide development pipeline is concentrated in Canada
          (Crawford Ni-Co, Tamarack, Shakespeare), Australia (various WA deposits), and the US
          (Talon Metals' Tamarack in Minnesota).{" "}
          <strong className="text-ink font-semibold">
            Canada holds the largest sulphide development pipeline globally
          </strong>
          , with projects like Canada Nickel's Crawford (estimated 1.07 billion lb Ni M+I
          resources) and FPX Nickel's Baptiste awaruite deposit. However, at current prices, most
          sulphide projects are uneconomic — AISC of $12,000–$18,000/t vs LME $15,500 leaves thin
          or no margin after capex recovery.
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Care and Maintenance: stranded supply that won't come back soon
        </h3>
        <p className="text-base text-ink/80 max-w-3xl mb-8 leading-relaxed">
          Ten assets in our database are on care and maintenance (C&M) — shut down but not
          permanently closed. Most are high-cost sulphide operations (notably in Canada and
          Australia) that are uneconomic below $17,000–$20,000/t.{" "}
          <strong className="text-ink font-semibold">
            C&M assets represent approximately 150–200kt of potential supply that would return in
            a price recovery
          </strong>{" "}
          — but they require 18–36 months of commissioning before first production, limiting their
          ability to respond quickly to price signals.
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Key projects to watch in 2026–2030
        </h3>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          The most significant development-stage projects by potential scale: Crawford
          Nickel-Cobalt Project (Canada Nickel Company, CNC:TSX.V, Ontario) — 1.07 billion lb Ni
          M+I resource, DFS underway, targeting ~40kt/yr Ni production.{" "}
          <strong className="text-ink font-semibold">Baptiste Awaruite (FPX Nickel, BC)</strong> —
          3.9 billion lb Ni, unique awaruite ore type requiring no acid or pressure, lower
          environmental footprint.{" "}
          <strong className="text-ink font-semibold">Tamarack (Talon Metals, MN)</strong> —
          high-grade Ni-Cu-Co sulphide, 51% JV with Rio Tinto, first US primary nickel mine in
          decades if developed.{" "}
          <strong className="text-ink font-semibold">
            Dumont Nickel-Cobalt (Waterton/Karora, QC)
          </strong>{" "}
          — large-scale sulphide, stalled at current prices. Each of these requires LME nickel
          sustained above $20,000–$22,000/t to attract the financing needed for construction. At
          $15,500/t, all are in active wait-and-see mode.
        </p>

        {/* Stat band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bdr rounded-xl overflow-hidden border border-bdr mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#F4F7FB] p-5 flex flex-col gap-1">
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-sm font-semibold text-ink">{s.label}</p>
              <p className="text-xs text-ink/50">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Chart + table two-column */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Chart card */}
          <div className="bg-[#F4F7FB] rounded-xl border border-bdr p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/40 mb-1">
                  goldandsilvertracker.com database · 1,044 assets · Quarterly update
                </p>
                <p className="text-sm font-bold text-ink">Nickel Pipeline by Status &amp; Ore Type</p>
                <p className="text-xs text-ink/60 mt-0.5">
                  Sulphide vs laterite distinction critical — sulphide produces Class 1, laterite mostly Class 2
                </p>
              </div>
              <div className="flex gap-1">
                <button className="text-xs font-medium px-3 py-1 rounded-full bg-ink text-white">By status</button>
                <button className="text-xs font-medium px-3 py-1 rounded-full border border-bdr text-ink/60 hover:bg-white transition-colors">By region</button>
              </div>
            </div>
            <PipelineChart />
            <p className="text-[10px] text-ink/40">
              goldandsilvertracker.com internal database · 1,044 assets · Quarterly refresh
            </p>
          </div>

          {/* Region table card */}
          <div className="bg-[#F4F7FB] rounded-xl border border-bdr p-5 flex flex-col gap-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-li">
              Pipeline by region
            </p>
            <div className="overflow-x-auto rounded-lg border border-bdr">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-white border-b border-bdr">
                    {["Region", "Operating", "Development", "Explore"].map((h) => (
                      <th key={h} className="px-4 py-3 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {regionRows.map((row, i) => (
                    <tr
                      key={row.region}
                      className={`border-b border-bdr last:border-0 transition-colors hover:bg-white/60 ${
                        i % 2 === 0 ? "bg-white/30" : "bg-white/10"
                      }`}
                    >
                      <td className="px-4 py-3 font-medium text-ink whitespace-nowrap">{row.region}</td>
                      <td className="px-4 py-3 font-mono text-ink/80">{row.operating}</td>
                      <td className="px-4 py-3 font-mono text-ink/80">{row.development}</td>
                      <td className="px-4 py-3 font-mono text-ink/60">{row.explore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-ink/40">
              All values kt Ni content nameplate capacity. Quarterly database refresh.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}