// components/Content.jsx
import React from "react";

const takeaways = [
  "Lithium carbonate (LCE) peaked at $80,000/t in November 2022, crashed to $7,800 in February 2024 — an 86% decline — and has partially recovered to ~$11,000 in April 2026.",
  "The crash was caused by Chinese lepidolite production doubling in 18 months, not by a collapse in EV demand. Demand kept growing throughout the downturn.",
  "At $11,000/t, roughly 30% of global supply is estimated to be operating below cash cost — primarily Chinese lepidolite. This is the self-correcting mechanism bulls are relying on.",
  "The supply deficit thesis (IEA, BNEF, BMI) projects the market flipping to shortage in 2026–2027, driving prices to $14,000–$20,000. This forecast has been pushed back twice since 2022.",
  "Unlike gold or copper, there is no exchange-traded lithium market. You cannot buy a lithium ETF that tracks the spot price directly — LIT holds mining and chemicals companies, not the metal.",
  "The signals that matter most are Wuxi warehouse stocks (weekly), the SC6→LCE refinery margin (daily), and Chinese battery maker inventory days on hand (monthly).",
  "LFP batteries (using carbonate) now represent ~65% of new EV production — up from 30% in 2020. This is structurally bullish for LCE demand vs LiOH.",
  "Australia (Greenbushes, Pilgangoora) produces 38% of global lithium. Chile (Atacama brine) produces 20%. China produces 18% but refines 65–75% of global battery-grade chemicals.",
  "The IRA's 45X tax credit and Critical Minerals Agreements with Australia are reshaping the supply chain — Australian spodumene is now IRA-qualifying; Chinese-processed chemicals are not.",
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
  { label: "LCE China Spot", value: "$11,000", unit: "/t", sub: "86% below ATH · SMM assessed", color: "text-li" },
  { label: "Spodumene SC6", value: "$800", unit: "/t", sub: "CIF China · Fastmarkets weekly", color: "text-white" },
  { label: "LiOH 56.5%", value: "$13,500", unit: "/t", sub: "+$2,500 premium to LCE", color: "text-white" },
  { label: "Refinery Margin", value: "+$3,880", unit: "/t", sub: "LCE minus SC6×8.9 · Daily", color: "text-grn" },
];

export default function Content() {
  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-bdr/70">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-2 text-xs text-muted" aria-label="Breadcrumb">
          <a href="/" className="text-muted hover:underline">Home</a>
          {" › "}
          <a href="/nickel/" className="text-muted hover:underline">Nickel Data</a>
          {" › Nickel Investing 101"}
        </div>
      </div>

      {/* HERO */}
      <div className="bg-[#1A1A2E] relative overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_5%_50%,rgba(59,130,246,0.08),transparent),radial-gradient(ellipse_40%_60%_at_95%_30%,rgba(30,64,175,0.06),transparent)] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 relative pt-12 md:pt-16 pb-12 md:pb-16">
          <p className="text-xs font-semibold tracking-[.15em] uppercase text-white/30 mb-3">
            <span className="text-li">LCE $11,000/t · SC6 $800/t</span>
            {" · "}ATH $80,000 (Nov 2022){" · "}Updated April 14, 2026
          </p>
          <h1 className="text-[clamp(28px,4.5vw,46px)] font-bold text-white leading-tight mb-2.5">
            How to Invest in <em className="italic text-accent-light">Lithium</em>
          </h1>
          <p className="text-sm text-white/50 max-w-2xl leading-loose mb-8">
            Lithium crashed 86% from its $80,000/t peak. It is now sitting near the estimated
            cash cost for Chinese lepidolite — the marginal producer. If you are trying to decide
            whether that makes it a buying opportunity or a value trap, the answer depends on one
            question: do you believe the supply deficit arrives on schedule? This guide explains
            the mechanics honestly, including what the bulls get wrong.
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
              <p className="text-xs font-bold tracking-widest uppercase text-li mb-1">⚡️ Live Lithium Data</p>
              <p className="text-sm font-bold text-white mb-0.5">28 charts · LCE, SC6, LiOH, Wuxi inventory, cost curve, pipeline</p>
              <p className="text-xs text-white/30">Prices, spreads, refinery margin, supply vs demand balance</p>
            </div>
            <a
              href="/lithium/"
              className="shrink-0 bg-li hover:opacity-85 text-white font-semibold rounded-lg text-sm px-5 py-2.5 no-underline"
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