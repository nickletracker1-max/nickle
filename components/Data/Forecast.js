import React from 'react';

const CONSENSUS_TABLE = [
  {
    institution: "IEA Critical Minerals Outlook",
    e2026: "$15,000–$17,000/t",
    e2027: "$16,000–$20,000/t",
    e2028: "$18,000–$24,000/t",
    assumption: "Surplus narrows to deficit 2028–2029; Indonesian RKAB tightens",
  },
  {
    institution: "BloombergNEF",
    e2026: "$14,500–$16,500/t",
    e2027: "$15,500–$19,000/t",
    e2028: "$17,000–$22,000/t",
    assumption: "LFP headwind partly offset by solid-state NMC growth",
  },
  {
    institution: "Benchmark Min. Intelligence",
    e2026: "$15,000–$17,500/t",
    e2027: "$16,500–$21,000/t",
    e2028: "$19,000–$26,000/t",
    assumption: "New Caledonia permanent closures remove 120kt supply",
  },
  {
    institution: "Wood Mackenzie",
    e2026: "$14,000–$16,000/t",
    e2027: "$15,000–$18,000/t",
    e2028: "$16,000–$20,000/t",
    assumption: "Conservative — Indonesian growth persists longer",
  },
];

const SCENARIOS = [
  {
    emoji: "🟢",
    label: "BULL",
    range: "$20,000–$26,000/t by 2028",
    labelColor: "text-[#1A7A4A]",
    borderTop: "border-t-[3px] border-t-grn",
    text: "Indonesia tightens RKAB meaningfully. New Caledonia does not restart. NMC regains share in premium EV segment. HPAL ramp slower than planned. Deficit arrives 2026 H2. Incentive price for new sulphide = $22,000–$26,000/t.",
  },
  {
    emoji: "🔵",
    label: "BASE",
    range: "$16,000–$20,000/t by 2028",
    labelColor: "text-[#15803D]",
    borderTop: "border-t-[3px] border-t-[#22C55E]",
    text: "Surplus narrows gradually 2026–2027. Deficit starts 2028. LFP holds ~65% share. Indonesian HPAL ramps steadily. Recovery is slow grind, not spike. Base case of 3 of 4 major institutions.",
  },
  {
    emoji: "🔴",
    label: "BEAR",
    range: "$12,000–$15,000/t range-bound",
    labelColor: "text-red",
    borderTop: "border-t-[3px] border-t-red",
    text: "Indonesia does not restrict RKAB. HPAL ramp exceeds expectations, adding Class 1 supply faster than battery demand absorbs it. LFP continues displacing NMC. Surplus persists 2026–2030. Price range-bound near current levels.",
  },
];

const Forecast = () => {
  return (
    <section className="py-10 bg-white" id="forecast" aria-label="Nickel price forecast section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section — Outlook
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Nickel Price Forecast 2026–2028 — What Analysts Expect
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-6">
          The nickel price consensus reflects a market in surplus that is slowly normalising. The
          recovery is slower than most 2022-era forecasts projected — but the structural demand
          case remains intact for the medium term.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-3">
          Consensus price forecasts by institution
        </h3>

        {/* Consensus table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr>
                {[
                  { label: "Institution",  highlight: false },
                  { label: "2026E avg",    highlight: true  },
                  { label: "2027E avg",    highlight: false },
                  { label: "2028E avg",    highlight: false },
                  { label: "Key assumption", highlight: false },
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
              {CONSENSUS_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap">
                    {row.institution}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-[#15803D] font-semibold whitespace-nowrap">
                    {row.e2026}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.e2027}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.e2028}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55] max-w-[260px]">
                    {row.assumption}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-4">
          The bull, base, and bear scenarios
        </h3>

        {/* Scenario cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {SCENARIOS.map((s, i) => (
            <div
              key={i}
              className={`bg-white border border-bdr rounded-[14px] p-[16px_18px] ${s.borderTop}`}
            >
              <p className={`text-[11px] font-bold mb-2 ${s.labelColor}`}>
                {s.emoji} {s.label} — {s.range}
              </p>
              <p className="text-[12px] text-ink3 leading-[1.65] m-0">{s.text}</p>
            </div>
          ))}
        </div>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-3">
          The incentive price as the long-run anchor
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-4">
          The incentive price — the LME level needed to attract capital into new greenfield
          sulphide nickel development — is generally estimated at{' '}
          <strong className="text-ink">$22,000–$28,000/t</strong>. This is significantly above
          current prices. No rational company will invest $3–5 billion in a new Canadian sulphide
          mine at $15,500/t. As the market moves from surplus toward deficit, prices need to
          approach this level to incentivise the supply that will be needed in the 2030s when
          battery demand becomes a much larger share of total demand. The current price is
          therefore structurally unsustainable in a decade-long demand growth scenario — the
          question is timing of recovery, not direction.
        </p>

        {/* Incentive price callout */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.22)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              Key levels to watch
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              <strong className="text-ink">$15,090/t</strong> — cycle trough support.{' '}
              <strong className="text-ink">$18,000/t</strong> — approximate New Caledonia restart
              threshold.{' '}
              <strong className="text-ink">$22,000–$28,000/t</strong> — greenfield sulphide
              incentive price range. A sustained break above $18,000 would signal the recovery
              phase has begun in earnest.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Forecast;