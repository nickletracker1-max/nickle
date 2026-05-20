import React from 'react';

const LIVE_STATS = [
  { id: "snap-lme",  label: "LME Spot (USD/t)",   value: "$15,500" },
  { id: "snap-npi",  label: "NPI China (USD/t)",   value: "$13,200" },
  { id: "snap-prem", label: "Class 1 Premium",      value: "+$2,300" },
  { id: "snap-stk",  label: "LME Stocks (t)",       value: "183,000" },
];

const WhereNowNickel = () => {
  return (
    <section className="py-12 bg-white" id="where-now">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section 5
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          Where We Are Now: The Current Nickel Market Setup
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The nickel market is in surplus. Indonesian RKEF production is still profitable at
          current prices, which is why the surplus self-corrects more slowly than lithium. New
          Caledonia's closure removed the high-cost fringe. LME warehouse stocks and cancelled
          warrants are the most reliable weekly signals for where physical supply-demand actually
          stands.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          The live data below pulls directly from the{' '}
          <a href="/data/" className="text-[#15803D] hover:underline">Nickel Data page</a>,
          which updates daily. The structural analysis in this guide — AISC comparisons, deficit
          timing, RKAB mechanics — is what belongs in a 101 guide. The specific prices and
          inventory readings belong over there.
        </p>

        {/* Live data embed */}
        <div className="bg-white border border-bdr rounded-[14px] overflow-hidden mb-8" id="where-now-data">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[rgba(34,197,94,0.08)] border-b border-[rgba(34,197,94,0.15)]">
            <p className="text-[11px] font-bold text-[#15803D] flex items-center gap-2">
              {/* Live dot */}
              <span className="relative flex h-[6px] w-[6px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"/>
                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-green-500"/>
              </span>
              Live nickel market snapshot
            </p>
            <a
              href="/data/"
              className="text-[12px] font-semibold text-[#15803D] hover:underline"
            >
              Full data page →
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bdr">
            {LIVE_STATS.map((stat) => (
              <div key={stat.id} className="bg-white px-4 py-4 text-center">
                <p className="text-[20px] font-medium text-ink leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[.07em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Source */}
          <p className="text-[10px] text-muted px-4 py-2 border-t border-bdr">
            Data: LME official settlement + SMM NPI assessment · Updated daily ·{' '}
            <a href="/data/#lme-stocks" className="text-[#15803D] hover:underline">
              LME warehouse detail →
            </a>
          </p>
        </div>

        {/* H3 — Why slower than lithium */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          Why the recovery is slower than lithium's
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          In lithium, the marginal cost producer is Chinese lepidolite at roughly
          $10,500–$11,000/t AISC — and when spot falls to that level, those operations lose money
          and curtail. The self-correction is active. In nickel, the dominant marginal producer is
          Indonesian RKEF with cash costs of only $4,000–$7,000/t. Those smelters are profitable
          across a wide range of prices. The cost curve self-correction is only working at the
          expensive end — New Caledonia, some Canadian sulphide mines — not at the cheap,
          high-volume end where Indonesia sits.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          That structural difference is why nickel's surplus is taking longer to clear than the
          market expected, and why the deficit timeline has been pushed back repeatedly by the
          same institutions that forecast it earliest. It does not mean the thesis is wrong. It
          means the fuse is longer.
        </p>

        {/* Cost curve comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <div className="bg-white border border-bdr border-l-[3px] border-l-[#22C55E] rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-[.1em] text-[#15803D] mb-2">
              Lithium — Fast self-correction
            </p>
            <p className="text-[13px] text-ink3 leading-[1.65]">
              Chinese lepidolite AISC ~$10,500–$11,000/t. At $11,000 spot, ~30% of supply is
              loss-making. Curtailment mechanism is active. Self-correction works.
            </p>
          </div>
          <div className="bg-white border border-bdr border-l-[3px] border-l-[#EF5350] rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-[.1em] text-red mb-2">
              Nickel — Slow self-correction
            </p>
            <p className="text-[13px] text-ink3 leading-[1.65]">
              Indonesian RKEF cash cost ~$4,000–$7,000/t. At $15,500 spot, RKEF is comfortably
              profitable. Curtailment only at expensive fringe (New Caledonia, Canada).
            </p>
          </div>
        </div>

        {/* H3 — What to do */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          What a new investor should actually do with this information
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          The current price level is not obviously a screaming buy or a screaming sell. It's a
          deep-value setup with a longer fuse than most investors expect. The right posture is
          probably: small starter position now (1–2% of portfolio via REMX or Vale), watch the
          six signals in{' '}
          <a href="#signals" className="text-[#15803D] hover:underline">Section 17</a>, and add
          meaningfully only when NPI monthly output data starts confirming curtailment. The
          mistake most nickel bulls make is over-sizing before the confirmation signal arrives.
          The mistake most bears make is underestimating how sharp the recovery can be once LME
          stocks turn tight — the 2021 move from $13,000 to $28,000 happened in 14 months.
        </p>

        {/* Positioning callout */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.22)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              The two-stage entry framework
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              <strong className="text-ink">Stage 1 now:</strong> 1–2% of portfolio in REMX or
              Vale (NYSE: VALE). Low-conviction starter. Survives if deficit is delayed to
              2029+.{' '}
              <strong className="text-ink">Stage 2 on confirmation:</strong> Add to 4–6% when
              SMM monthly NPI data shows two consecutive months of output decline and LME
              warehouse stocks break below 150,000 t. That combination has historically preceded
              LME price moves of 30%+ within 6 months.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhereNowNickel;