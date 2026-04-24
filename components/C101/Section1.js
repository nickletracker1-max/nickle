import React from 'react';

const END_USES = [
  {
    use: "Stainless steel",
    pct: "~70%",
    product: "Class 1 or Class 2",
    driver: "300-series SS (8–14% Ni): construction, food processing, medical, industrial. China produces ~60% of world SS.",
  },
  {
    use: "Nickel alloys & superalloys",
    pct: "~13%",
    product: "Class 1 refined",
    driver: "Jet engine turbine blades, gas turbines, industrial equipment. Nickel superalloy is indispensable at temperatures above 1,000°C.",
  },
  {
    use: "EV batteries (NMC/NCA)",
    pct: "~9%",
    product: "Class 1 (nickel sulphate)",
    driver: "NMC 811 cathode: 80% Ni content. Growing but headwinds from LFP gaining market share. LFP contains zero nickel.",
  },
  {
    use: "Nickel electroplating",
    pct: "~5%",
    product: "Class 1 refined",
    driver: "Automotive trim, electronics connectors, bathroom hardware, aerospace components. Corrosion resistance.",
  },
  {
    use: "Other (batteries non-EV, coins, etc.)",
    pct: "~3%",
    product: "Various",
    driver: "Consumer electronics, stationary storage, specialty applications.",
  },
];

const WhatIsNickel = () => {
  return (
    <section className="py-12 bg-white" id="what-is-nickel">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section 1
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          What Nickel Actually Is — and Why It Matters
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          Start with the thing that trips up almost every new nickel investor. Nickel is not one
          market. It is two, and the two products cannot substitute for each other in every
          application. One is used in EV batteries and trades on the LME. The other is used in
          stainless steel and trades at a discount in Shanghai. They come from different geology,
          go through different processing, and serve different customers. Until that distinction
          is clear, most of what you read about nickel will not make sense.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          Where nickel comes from: two completely different ore types
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          <strong className="text-ink">Sulphide deposits</strong> are ancient, deep, and
          high-grade. The Sudbury Basin in Ontario has been producing nickel for over a century.
          Russia's Norilsk region sits on one of the largest sulphide deposits ever found. These
          ores run 0.5–3% nickel, require conventional hard-rock underground mining, and get
          processed through smelting and refining into{' '}
          <strong className="text-ink">Class 1 refined nickel</strong> — pure enough (≥99.8% Ni)
          to deliver against LME contracts and dissolve directly into the nickel sulphate that
          battery makers need. Sulphide ore also tends to come with copper, cobalt, and platinum
          group metals as byproducts. That byproduct credit is part of what makes the economics
          work, given how expensive these operations are to run at depth.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          <strong className="text-ink">Laterite deposits</strong> are the opposite in almost
          every way: shallow, tropical, lower-grade, and far more abundant by total tonnage. They
          sit just under the surface in Indonesia, the Philippines, New Caledonia, and Brazil,
          formed over millions of years as nickel-bearing rock slowly weathered. Laterites contain
          more nickel in aggregate than sulphides do, but they require completely different
          processing — and the processing route chosen determines whether the output ends up as
          battery-grade or stainless-grade nickel.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          Why the processing route is the thing that actually matters
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Laterite ore comes in two layers. The deeper, magnesium-rich saprolite gets smelted in
          RKEF (Rotary Kiln Electric Furnace) blast furnaces to produce NPI, nickel pig iron — a
          coarse alloy running 8–15% nickel used in Chinese stainless mills. It is cheap to
          produce (around $7,000–$9,000/t all-in sustaining cost) but it is what the industry
          calls Class 2. The LME will not accept it for delivery, and battery manufacturers
          cannot use it. The shallower, iron-rich limonite layer takes a different path: HPAL
          (High-Pressure Acid Leach), a more capital-intensive process that produces MHP, mixed
          hydroxide precipitate. MHP is Class 1. It can be refined into nickel sulphate and go
          straight into an NMC battery cathode.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          This processing split explains most of the current nickel market. Between 2017 and 2024,
          Indonesia built the world's largest RKEF industry and flooded the market with cheap
          Class 2 NPI, driving the LME price from $28,000 toward $15,500. Now Indonesia is
          building roughly 40 HPAL plants to produce Class 1 MHP for batteries. Whether those
          plants succeed — and how fast — determines whether the Class 1 premium holds or
          collapses. That question runs under almost every forecast argument you will encounter
          in this market.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          What nickel is actually used for
        </h3>

        {/* End uses table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                {[
                  { label: "End use",                 highlight: false },
                  { label: "% of demand",             highlight: true  },
                  { label: "Nickel product needed",   highlight: false },
                  { label: "Key driver",              highlight: false },
                ].map(({ label, highlight }) => (
                  <th
                    key={label}
                    className={`text-[10px] font-bold uppercase tracking-[.07em] px-3.5 py-2.5 text-left border-b-2 border-bdr whitespace-nowrap
                      ${highlight ? "text-[#15803D]" : "text-muted"}`}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {END_USES.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink">
                    {row.use}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-[#15803D] font-bold">
                    {row.pct}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                    {row.product}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55] max-w-[320px]">
                    {row.driver}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Callout — nickel green */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.22)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚙</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              Why nickel is different from gold as an investment
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              Gold is a monetary metal whose price is driven primarily by real interest rates,
              dollar strength, and fear. Nickel is an industrial metal whose price is driven by
              Chinese stainless steel demand, Indonesian supply policy, and EV battery chemistry
              trends. You cannot hold physical nickel as a retail investor, there is no nickel
              equivalent of a gold ETF that tracks spot, and the market has fundamentally
              different signals. These are complementary portfolio components, not substitutes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsNickel;