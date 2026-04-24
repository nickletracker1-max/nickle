import React from 'react';

const HowLMEWorks = () => {
  return (
    <section className="py-12 bg-[#F4F7F4]" id="how-price-works">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section 2
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          How the LME Nickel Price Works — and Why It's Different from Other Metals
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          The London Metal Exchange (LME) nickel contract is the global benchmark for Class 1
          refined nickel. Unlike gold (which has a true 24-hour spot market) or copper (which
          trades simultaneously on LME, COMEX, and SHFE), nickel's price discovery is
          concentrated on the LME with{' '}
          <strong className="text-ink">much lower daily volumes</strong> and{' '}
          <strong className="text-ink">
            higher susceptibility to single-player position effects
          </strong>{' '}
          — as demonstrated catastrophically in March 2022.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The LME nickel contract: specifications
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The LME nickel contract specifies delivery of{' '}
          <strong className="text-ink">6 metric tonnes</strong> of nickel (≥99.8% purity) in
          approved warehouse locations. The contract trades electronically 24 hours a day on LME
          Select and by open outcry in the Ring sessions at LME offices in London. The daily
          official settlement price is set at the Ring session close. This settlement price is
          what media reports as "the LME nickel price."
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          For investors, the LME settlement price is the reference used in most contracts,
          offtake agreements, and financial instruments. But because the contract is for Class 1
          physical delivery, it only directly prices Class 1 nickel. NPI (Class 2) is priced
          separately by SMM in China at a persistent discount.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          SHFE nickel: China's domestic exchange
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          The Shanghai Futures Exchange (SHFE) also has a nickel contract, quoted in yuan per
          tonne. SHFE nickel includes a 13% VAT component and a China import premium or discount
          depending on local supply conditions. The LME and SHFE prices maintain a relationship
          through arbitrage, but they can diverge significantly when Chinese supply conditions
          differ from global conditions — which happens frequently given Indonesia's dominant and
          China-specific supply chain. Most analysts work with LME prices and translate to USD/t
          for global comparisons.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          Why the LME nickel market is structurally fragile
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The nickel market is smaller by value and volume than copper or aluminium. Total annual
          LME nickel trading volume is a fraction of copper's. This means a single large
          participant — a major producer like Norilsk, or a large industrial hedger like
          Tsingshan — can move the market in ways that are impossible in deeper commodity
          markets. The March 2022 short squeeze was the most extreme expression of this
          structural fragility, but smaller versions of this dynamic occur regularly in the form
          of sudden inventory moves or warrant concentrations.{' '}
          <strong className="text-ink">
            This liquidity risk is a factor retail investors should price into their nickel
            exposure.
          </strong>
        </p>

        {/* Fragility callout */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 mb-8 bg-amb-bg border border-[rgba(217,119,6,0.25)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚠</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              LME nickel vs copper liquidity — a key difference
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              Copper trades on three major exchanges (LME, COMEX, SHFE) with deep daily volumes
              that make single-player manipulation very difficult. Nickel is concentrated on the
              LME with far thinner volumes. The practical consequence: nickel is more volatile,
              more susceptible to short squeezes, and should be sized more conservatively in a
              portfolio than copper despite similar narrative exposure to electrification.
            </p>
          </div>
        </div>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          Nickel price per pound, per tonne, per kg — today
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          LME nickel at{' '}
          <strong className="text-ink">$15,500 per metric tonne</strong> equals{' '}
          <strong className="text-ink">$7.03 per pound (lb)</strong> and{' '}
          <strong className="text-ink">$15.50 per kilogram (kg)</strong>. The US trade press
          often quotes per pound; the LME quotes per tonne; European industry often works in
          €/t. To convert: divide USD/t by 2,204.6 for USD/lb. The March 2022 short squeeze
          peak of $101,365/t equalled approximately $45.97/lb — a price never seen before in any
          major base metal and never likely to be seen again in a legitimate supply-demand
          context.
        </p>

        {/* Price conversion cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bdr rounded-[10px] overflow-hidden">
          {[
            { label: "Per metric tonne",  value: "$15,500",  sub: "LME official benchmark",    color: "text-[#15803D]" },
            { label: "Per pound (lb)",    value: "$7.03",    sub: "÷ 2,204.6 from USD/t",      color: "text-[#3B82F6]" },
            { label: "Per kilogram (kg)", value: "$15.50",   sub: "÷ 1,000 from USD/t",        color: "text-[#8B5CF6]" },
            { label: "Short squeeze ATH", value: "$101,365", sub: "$45.97/lb · Mar 8, 2022",   color: "text-[#EF5350]" },
          ].map((card, i) => (
            <div key={i} className="bg-white px-4 py-4 text-center">
              <p className={`text-[20px] font-medium leading-none mb-1 ${card.color}`}>
                {card.value}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-muted mb-0.5">
                {card.label}
              </p>
              <p className="text-[11px] text-ink3">{card.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowLMEWorks;