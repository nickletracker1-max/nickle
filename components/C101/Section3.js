import React from 'react';

const CLASS_TABLE = [
  { attr: "Purity",                     c1: "≥99.8% Ni",                             c2: "8–15% Ni (NPI), 20–40% (FeNi)"              },
  { attr: "LME deliverable",            c1: "✓ Yes",                                 c2: "✗ No"                                        },
  { attr: "EV battery suitable",        c1: "✓ Yes (via nickel sulphate)",           c2: "✗ No (economics prohibitive)"                },
  { attr: "Stainless steel",            c1: "✓ Yes",                                 c2: "✓ Yes (primary source)"                      },
  { attr: "Production route",           c1: "Sulphide smelter/refinery; HPAL MHP",  c2: "RKEF blast furnace; ferronickel smelter"     },
  { attr: "Primary producers",          c1: "Norilsk, Vale, Glencore, HPAL operators", c2: "Tsingshan (IMIP), CMOC, Philippines RKEF" },
  { attr: "Current price",              c1: "$15,500/t LME official",                c2: "$13,200/t (NPI equiv., SMM)"                 },
  { attr: "% of global Ni supply",      c1: "~40%",                                  c2: "~60%"                                        },
];

const ClassSplitArticle = () => {
  return (
    <section className="py-12 bg-white" id="class-split">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section 3
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          Class 1 vs Class 2 Nickel — The Core Distinction Every Investor Must Understand
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          The single most important concept in nickel investing is the Class 1 / Class 2 split.
          Most commodity markets have one price. Nickel effectively has two — and they are not
          interchangeable in all applications. Getting this wrong is the most common analytical
          error in retail nickel analysis.
        </p>

        {/* ── Two-column layout on large screens ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Class 1 */}
          <div>
            <h3 className="text-[17px] font-bold text-ink mt-0 mb-3">
              Class 1: LME-deliverable, battery-suitable, premium
            </h3>
            <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
              Class 1 nickel is refined to ≥99.8% purity and approved for delivery against LME
              contracts. It can be dissolved into a nickel sulphate solution and used directly in
              battery cathode precursor (pCAM) manufacturing for NMC and NCA batteries. Class 1
              sources:{' '}
              <strong className="text-ink">
                sulphide mine → smelter → refinery
              </strong>{' '}
              (Norilsk, Vale, Glencore); or{' '}
              <strong className="text-ink">
                laterite limonite → HPAL → MHP → nickel sulphate
              </strong>{' '}
              (Indonesia HPAL plants, Ramu PNG).
            </p>
            <p className="text-[15px] leading-[1.82] text-ink3">
              Current LME Class 1 spot price: approximately{' '}
              <strong className="text-ink">$15,500/t ($7.03/lb)</strong>. Class 1 is what the
              LME contract, most investment vehicles, and battery manufacturers are pricing.
            </p>
          </div>

          {/* Class 2 */}
          <div>
            <h3 className="text-[17px] font-bold text-ink mt-0 mb-3">
              Class 2: stainless-grade, cheap, dominant by volume
            </h3>
            <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
              Class 2 includes NPI (nickel pig iron, 8–15% Ni) and ferronickel (FeNi, ~20–40%
              Ni). Both are produced by smelting laterite saprolite ore in RKEF furnaces. They
              are used in stainless steel production but{' '}
              <strong className="text-ink">
                cannot be delivered against LME contracts
              </strong>{' '}
              and{' '}
              <strong className="text-ink">
                cannot be chemically processed into battery-grade nickel sulphate
              </strong>{' '}
              economically. Class 2 represents the majority of Indonesian production (RKEF NPI).
            </p>
            <p className="text-[15px] leading-[1.82] text-ink3">
              Current Chinese NPI price: approximately{' '}
              <strong className="text-ink">$13,200/t equivalent</strong> (SMM daily assessed,
              converted from yuan). This $2,300/t discount to LME Class 1 is the "Class 1
              premium" — one of the most important signals in the nickel market.
            </p>
          </div>
        </div>

        {/* ── Class 1 premium callout ── */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 mb-8 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.22)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              The Class 1 premium as a leading indicator
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              When EV battery demand expectations were highest (late 2021–early 2022), the Class 1
              premium reached +$8,000/t. It has since compressed to +$2,300/t as LFP gained
              market share.{' '}
              <strong className="text-ink">
                The direction of the Class 1 premium is a leading indicator of the nickel market's
                character far more informative than the absolute LME price level.
              </strong>{' '}
              If NMC recovers share, expect expansion. If LFP continues displacing NMC, expect
              further compression.
            </p>
          </div>
        </div>

        {/* H3 — Why Class 1 premium matters */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          Why the Class 1 premium matters
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The Class 1 premium is the market's measure of battery demand's incremental value over
          stainless-grade nickel. When EV battery demand expectations were highest (late 2021–early
          2022), the premium reached +$8,000/t. As LFP batteries gained market share (LFP uses
          zero nickel) and battery manufacturers became less aggressive about securing Class 1
          supply, the premium compressed to the current +$2,300/t.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          If NMC battery chemistry recovers market share (driven by solid-state batteries or
          ultra-long-range EVs), the Class 1 premium should expand. If LFP continues displacing
          NMC, the premium may compress further.
        </p>

        {/* H3 — MHP */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          MHP: the bridge from laterite to battery grade
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          MHP (Mixed Hydroxide Precipitate) is the intermediate product from HPAL processing of
          limonite laterite. It contains approximately 35–40% nickel plus cobalt, qualifies as
          Class 1, and is refined into nickel sulphate for battery cathodes. MHP is important
          because it means Indonesian laterite — which could only produce Class 2 NPI before HPAL
          — can now supply battery-grade Class 1 supply chains. Indonesia's ~40 HPAL plants
          (announced or under construction) are transforming this market. The MHP price
          (Fastmarkets, weekly CIF China) currently tracks LME at approximately $15,100/t — a
          thin discount reflecting HPAL's slightly higher processing uncertainty vs refined metal.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                <th className="text-[10px] font-bold uppercase tracking-[.07em] text-muted px-3.5 py-2.5 text-left border-b-2 border-bdr w-[180px]" />
                <th className="text-[10px] font-bold uppercase tracking-[.07em] text-[#15803D] px-3.5 py-2.5 text-left border-b-2 border-bdr">
                  Class 1
                </th>
                <th className="text-[10px] font-bold uppercase tracking-[.07em] text-muted px-3.5 py-2.5 text-left border-b-2 border-bdr">
                  Class 2
                </th>
              </tr>
            </thead>
            <tbody>
              {CLASS_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap">
                    {row.attr}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55]">
                    {row.c1}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55]">
                    {row.c2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default ClassSplitArticle;