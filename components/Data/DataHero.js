import React from 'react';

const PRICE_GRID = [
  {
    label: "LME Nickel Spot",
    value: "$15,500",
    unit: "/t",
    sub: "$7.03/lb · LME official · Down 85% from $101k ATH",
    valueColor: "text-[#86EFAC]",
  },
  {
    label: "NPI (China)",
    value: "$13,200",
    unit: "/t",
    sub: "Nickel pig iron · SHFE equiv · Class 2",
    valueColor: "text-[#EF5350]",
  },
  {
    label: "Class 1 Premium",
    value: "+$2,300",
    unit: "/t",
    sub: "LME vs NPI equiv · Narrowing trend",
    valueColor: "text-[#F59E0B]",
  },
  {
    label: "LME Warehouse Stocks",
    value: "183,000",
    unit: " t",
    sub: "Registered · Weekly · 8-wk trend: ↓ Declining",
    valueColor: "text-[#94A3B8]",
  },
  {
    label: "Nickel Sulphate",
    value: "$4,850",
    unit: "/t",
    sub: "Battery grade · MHP equiv · Fastmarkets",
    valueColor: "text-[#3B82F6]",
  },
];

const DataHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#1A1A2E] py-11 md:py-14"
      role="banner"
    >
      {/* Radial gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(34,197,94,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_100%_20%,rgba(21,128,61,0.05),transparent)]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Eyebrow */}
        <p className="mb-3 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
          {/* Live dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-[#86EFAC]">Nickel market data</span>
          <span className="text-white/20">·</span>
          <span id="last-updated">Last updated: April 15, 2026 at 17:00 BST</span>
          <span className="text-white/20">·</span>
          <span>LME Official Settlement + Fastmarkets + SMM</span>
        </p>

        {/* H1 */}
        <h1 className="mb-3 text-[clamp(24px,4vw,42px)] font-bold leading-[1.12] text-white">
          Live{' '}
          <span className=" text-accent-bright">Nickel</span>{' '}
          Price Today
        </h1>

        {/* Sub */}
        <p className="mb-6 max-w-[640px] text-[13px] leading-[1.75] text-white/45">
          LME nickel is{' '}
          <strong className="text-[#86EFAC]">$15,500/t ($7.03/lb)</strong> as of April 2026 —
          down 85% from the $101,365 short squeeze high. Indonesia produces 55% of world supply.
          Stainless steel is 70% of demand. The nickel market is in significant surplus (−250kt in
          2024), with the deficit not expected before 2028–2029. Live data: LME prices, NPI,
          Class 1 premium, warehouse stocks, cost curve by ore type, supply–demand balance.
        </p>

        {/* Price grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 overflow-hidden rounded-xl border border-white/[0.07] ">
          {PRICE_GRID.map((item, i) => (
            <div
              key={i}
              className="bg-white/[0.03] p-[14px_16px] transition-colors hover:bg-[rgba(34,197,94,0.06)]"
            >
              <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.09em] text-white/25">
                {item.label}
              </p>
              <div className="mb-0.5 flex items-baseline gap-0.5">
                <span className={`text-[17px] leading-[1.2] ${item.valueColor}`}>
                  {item.value}
                </span>
                <span className="text-[11px] text-white/30">{item.unit}</span>
              </div>
              <p className="text-[10px] text-white/[0.22]">{item.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DataHero;