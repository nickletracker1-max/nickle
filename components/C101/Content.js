// components/Content.jsx
import React from "react";

const takeaways = [
  "In March 2022, the Tsingshan short squeeze drove LME nickel to $101,365/t — the exchange cancelled $3.9 billion in trades and suspended the market for over a week. It remains the most dramatic event in industrial metals history.",
  "Nickel splits into two distinct markets: Class 1 (LME-deliverable refined nickel, used in batteries and plating) and Class 2 (NPI and ferronickel, used almost exclusively in stainless steel). They trade at a significant premium/discount to each other.",
  "Indonesia now accounts for over 50% of global nickel mine supply, up from near zero in 2010. The country's RKAB quota system gives it direct control over global supply volumes — making Indonesian policy the single biggest price driver.",
  "LFP (lithium iron phosphate) batteries are bearish for nickel demand, not bullish. LFP uses no nickel. As LFP takes share in EVs — now ~65% of new EV production in China — nickel's battery demand growth story weakens.",
  "Stainless steel accounts for approximately 70% of global nickel demand. EV batteries represent ~9%. The clean-energy narrative overstates nickel's battery exposure; it is primarily an industrial metal tied to construction and manufacturing.",
  "LME warehouse stocks are the key weekly signal. When stocks fall below 100,000 t the market tightens rapidly; the 2022 squeeze occurred with stocks near historic lows. Current stocks: 183,000 t.",
  "New Caledonia's nickel industry has been in crisis since 2024, with major smelters curtailing output. This is removing Class 1 supply from the market and supporting the LME-to-NPI premium.",
  "NPI (nickel pig iron) is China's low-cost alternative to Class 1 refined nickel for stainless steel. NPI is produced from Indonesian limonite ore and trades at a discount to LME. The NPI price sets the floor for stainless mill economics.",
  "HPAL (High-Pressure Acid Leach) processing can upgrade Indonesian laterite ore to battery-grade mixed hydroxide precipitate (MHP), bridging the Class 2/Class 1 divide. HPAL project ramp-up is the key long-term supply variable for battery nickel.",
];

const tocItems = [
  { href: "#what-is-nickel", label: "What Nickel Actually Is" },
  { href: "#how-price-works", label: "How the LME Nickel Price Works" },
  { href: "#class-split", label: "Class 1 vs Class 2 — The Core Distinction" },
  { href: "#short-squeeze", label: "The $101,365 Short Squeeze — What Really Happened" },
  { href: "#where-now", label: "Where We Are Now: The $15,500 Setup" },
  { href: "#indonesia", label: "Indonesia: How One Country Took Over Supply" },
  { href: "#stainless", label: "Stainless Steel: Still 70% of Demand" },
  { href: "#battery", label: "Battery Demand and the LFP Headwind" },
  { href: "#bull-bear", label: "Bull Case vs Bear Case — Both Sides Fairly" },
  { href: "#deficit", label: "The Supply Deficit Thesis" },
  { href: "#ways-to-invest", label: "5 Ways to Invest in Nickel" },
  { href: "#etfs", label: "Nickel ETFs: REMX, LIT, and the Gap" },
  { href: "#producers", label: "Major Producers: Vale, BHP, Glencore, Nornickel" },
  { href: "#junior-miners", label: "Junior Nickel Miners — TSX and TSX.V" },
  { href: "#timing", label: "Timing and Entry Strategy" },
  { href: "#taxes", label: "Nickel Taxes for US Investors" },
  { href: "#signals", label: "6 Signals to Monitor" },
  { href: "#history", label: "Price History 2010–2026" },
  { href: "#forecast", label: "Price Forecast 2026–2028" },
  { href: "#allocation", label: "Portfolio Allocation" },
  { href: "#glossary", label: "Nickel Glossary" },
  { href: "#faq", label: "FAQ" }
];

const priceStrip = [
  { label: "LME Nickel Spot", value: "$15,500", unit: "/t", sub: "LME Cash · Updated daily", color: "text-accent" },
  { label: "NPI China", value: "$13,200", unit: "/t", sub: "Nickel pig iron · SMM assessed", color: "text-white" },
  { label: "Class 1 Premium", value: "+$2,300", unit: "/t", sub: "LME vs NPI spread", color: "text-grn" },
  { label: "LME Stocks", value: "183,000", unit: " t", sub: "LME warehouse · Weekly", color: "text-white" },
];

export default function Content() {
  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-bdr/70">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-2 text-xs text-muted" aria-label="Breadcrumb">
          <a href="/" className="text-muted hover:underline">Home</a>
          {" › "}
          <a href="/data/" className="text-muted hover:underline">Nickel Data</a>
          {" › Nickel Investing 101"}
        </div>
      </div>

      {/* HERO */}
      <div className="bg-[#1A1A2E] relative overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_5%_50%,rgba(59,130,246,0.08),transparent),radial-gradient(ellipse_40%_60%_at_95%_30%,rgba(30,64,175,0.06),transparent)] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 relative pt-12 md:pt-16 pb-12 md:pb-16">
          <p className="text-xs font-semibold tracking-[.15em] uppercase text-white/30 mb-3">
            <span className="text-accent">LME $15,500/t · NPI $13,200/t</span>
            {" · "}Class 1 Premium +$2,300{" · "}Updated April 14, 2026
          </p>
          <h1 className="text-[clamp(28px,4.5vw,46px)] font-bold text-white leading-tight mb-2.5">
            How to Invest in Nickel
          </h1>
          <p className="text-sm text-white/50 max-w-2xl leading-loose mb-8">
            Nickel has one of the most dramatic price histories of any industrial metal — a short
            squeeze on the LME in March 2022 drove prices to $100,000/t before trades were
            cancelled. Today the metal sits at $15,500/t, split between two distinct markets:
            Class 1 (LME-deliverable, used in batteries) and Class 2 (NPI and ferronickel, used
            in stainless steel). Indonesia now dominates supply, accounting for over 50% of global
            output. This guide explains the mechanics, the investment options, and what signals
            actually matter.
          </p>
          <div className="flex gap-5 flex-wrap mb-7">
            <span className="text-sm text-white/30">📅 April 14, 2026</span>
            <span className="text-sm text-white/30">
              <strong className="font-bold text-white/60">17,500 words</strong> · ~22 min read
            </span>
            <span className="text-sm text-white/30">✓ Updated with 2026 data</span>
          </div>

          {/* PRICE STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/10">
            {priceStrip.map((p) => (
              <div key={p.label} className="bg-white/5 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-white/30 mb-1">{p.label}</p>
                <p className={`text-lg font-semibold mb-0.5 ${p.color}`}>
                  {p.value}<span className="text-xs font-normal">{p.unit}</span>
                </p>
                <p className="text-xs text-white/20">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN */}
      <main id="main">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-8 flex flex-col gap-4">

          {/* DATA BANNER */}
          <div className="bg-ink rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-blue-300/20">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-1">⚡️ Live Nickel Data</p>
              <p className="text-sm font-bold text-white mb-0.5">LME spot, NPI, Class 1 premium, LME warehouse stocks, RKAB, NPI monthly output</p>
              <p className="text-xs text-white/30">Prices, spreads, Class 1 premium, supply vs demand balance</p>
            </div>
            <a
              href="/data/"
              className="shrink-0 bg-accent hover:opacity-85 text-white font-semibold rounded-lg text-sm px-5 py-2.5 no-underline"
            >
              See live data →
            </a>
          </div>

          {/* KEY TAKEAWAYS */}
          <div className="bg-li-bg border border-blue-300/20 rounded-xl p-5 md:p-6">
            <p className="text-xs font-bold tracking-widest uppercase text-li-d mb-3">Key Takeaways</p>
            <ul className="list-none p-0 m-0">
              {takeaways.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-ink3 py-2 border-b border-blue-300/10 last:border-none flex gap-2.5 leading-relaxed"
                >
                  <span className="text-li flex-shrink-0 mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TABLE OF CONTENTS */}
          <div className="bg-white border border-bdr rounded-xl p-5 md:p-6">
            <p className="text-xs font-bold tracking-wider uppercase text-muted mb-3">Contents</p>
            <ol className="list-decimal list-inside m-0 md:columns-2 md:gap-6 text-sm text-ink3 leading-loose">
              {tocItems.map((item, i) => (
                <li key={i} className="break-inside-avoid mb-2">
                  <a href={item.href} className="text-li-d hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </main>
    </>
  );
}