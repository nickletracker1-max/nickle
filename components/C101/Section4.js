import React from 'react';

const TIMELINE = [
  {
    dot: "default",
    date: "Late 2021 – early 2022",
    title: "Position building: Tsingshan shorts the LME",
    text: "LME nickel is rising on EV optimism. Tsingshan, the world's largest nickel producer (Class 2 NPI), builds a massive LME short position — estimated 150,000–200,000 tonnes — as a hedge. The position is far larger than a rational hedge of their production.",
  },
  {
    dot: "default",
    date: "February 24, 2022",
    title: "Russia invades Ukraine — the trigger",
    text: "Russia's Norilsk Nickel produces ~17% of global Class 1. Sanctions fear (even though nickel was ultimately not sanctioned) spikes LME nickel from ~$22,000 toward $28,400. Tsingshan's short position is already deep underwater.",
  },
  {
    dot: "squeeze",
    date: "March 7–8, 2022",
    title: "🔴 The squeeze: $22,000 → $101,365 in hours",
    text: "Banks issue margin calls Tsingshan cannot meet. Forced position covering begins. LME nickel doubles in one trading session. At 08:15 GMT on March 8, the LME halts all trading and announces cancellation of all trades after midnight — approximately $3.9B in executed contracts retroactively voided.",
  },
  {
    dot: "trough",
    date: "March 2022 – ongoing",
    title: "🟡 Fallout: lawsuits, FCA review, damaged trust",
    text: "Multiple hedge funds sue the LME for cancelling valid long positions. FCA investigation launched. Tsingshan agrees to supply physical nickel to Glencore and others to settle the position. LME nickel volumes have not fully recovered. The $101,365 number disappears from all fair-value analysis.",
  },
];

const CONSEQUENCES = [
  {
    num: "1",
    title: "LME credibility damaged",
    text: "Institutional trust in the LME nickel contract has not fully recovered. Several European banks reduced LME nickel market-making activity.",
  },
  {
    num: "2",
    title: "Position limits introduced",
    text: "The LME implemented position concentration rules to prevent a single entity holding positions comparable to Tsingshan's.",
  },
  {
    num: "3",
    title: "Tsingshan's strategic pivot",
    text: "Tsingshan agreed to supply physical Class 2 NPI to Glencore and others to settle its position, accelerating the flow of Indonesian NPI into global markets.",
  },
  {
    num: "4",
    title: "Insurance precedent",
    text: "The episode made clear that the LME nickel contract can be cancelled under extreme circumstances — a material risk that any long position must price.",
  },
];

const DOT_STYLES = {
  default: "bg-white border-2 border-[#15803D]",
  squeeze: "bg-[#EF5350] border-2 border-[#EF5350]",
  trough:  "bg-[#F59E0B] border-2 border-[#F59E0B]",
};

const ShortSqueeze = () => {
  return (
    <section className="py-12 bg-[#F4F7F4]" id="short-squeeze">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section 4
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          The $101,365 Short Squeeze — What Really Happened on March 8, 2022
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          The Tsingshan short squeeze is the most extraordinary event in the modern history of
          base metals markets. Understanding it is not just historical context — it permanently
          changed how institutional investors think about LME nickel liquidity risk, and it
          remains relevant to anyone who holds or considers holding nickel exposure.
        </p>

        {/* Timeline */}
        <div className="relative ml-3 pl-7 mb-10 border-l-2 border-bdr">
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative mb-6 last:mb-0">
              <span
                className={`absolute -left-[34px] top-0.5 w-3 h-3 rounded-full ${DOT_STYLES[item.dot]}`}
              />
              <p className="text-[11px] font-bold text-[#15803D] mb-0.5">{item.date}</p>
              <p className="text-[14px] font-bold text-ink mb-1">{item.title}</p>
              <p className="text-[13px] text-ink3 leading-[1.65]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* H3 — Position building */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          How the position was built
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          Tsingshan Holding Group is the world's largest nickel producer by volume, operating the
          Indonesia Morowali Industrial Park (IMIP) and producing vast quantities of NPI and
          ferronickel (Class 2). As Tsingshan also produces some Class 1 nickel through its own
          operations, it had a business logic for hedging: sell LME nickel short to lock in the
          current high price against future production. The problem was scale. By early 2022,
          Tsingshan's short position was estimated at{' '}
          <strong className="text-ink">150,000–200,000 tonnes</strong> — roughly 6–8 weeks of
          global LME nickel production. This was not a hedge. It was a speculative position of
          concentrated size that no single company should have held against a contract as thin as
          LME nickel.
        </p>

        {/* H3 — Trigger */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The March 2022 trigger and the spiral
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          On February 24, 2022, Russia invaded Ukraine. Russia's Norilsk Nickel produces
          approximately 17% of global Class 1 nickel. Sanctions concerns (even though nickel was
          ultimately not sanctioned) created fear of supply disruption. LME nickel began rising.
          As it rose, Tsingshan's short position accumulated mark-to-market losses. Banks holding
          the counterparty position issued margin calls. On the night of March 7–8, 2022,
          Tsingshan's position began being forcibly closed as banks could not get margin payment.
          The price went{' '}
          <strong className="text-ink">
            from approximately $48,000/t at the open of March 8 to $101,365/t intraday
          </strong>{' '}
          — a doubling in hours.
        </p>

        {/* H3 — LME decision */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The LME's controversial decision
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          At approximately 08:15 GMT on March 8, the LME halted nickel trading and cancelled all
          trades executed after midnight. This decision cancelled approximately{' '}
          <strong className="text-ink">$3.9 billion in executed contracts</strong>. Multiple hedge
          funds — including those run by AQR and Cliff Asness — had taken valid long positions at
          elevated prices and suffered losses when those trades were retroactively cancelled. The
          LME justified the decision on the grounds of maintaining market integrity, but critics
          argued it set a precedent that the exchange would not honour contracts when losses became
          large enough. The UK's Financial Conduct Authority (FCA) launched a review. Multiple
          lawsuits were filed against the LME. LME nickel volumes and open interest have not fully
          recovered.
        </p>

        {/* Callout — warning */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 mb-8 bg-amb-bg border border-[rgba(217,119,6,0.25)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚠</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              The $101,365 number: do not use it as a price reference
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              For any investment analysis, use the pre-squeeze fundamental peak of{' '}
              <strong className="text-ink">$28,400/t (February 2022)</strong> as the relevant
              reference for what EV demand optimism was worth in market pricing. The $101,365
              figure reflects a short squeeze, not supply-demand fundamentals. Using it as a
              "previous high" for percentage-from-peak calculations, recovery target estimates,
              or valuation work will produce misleading conclusions.
            </p>
          </div>
        </div>

        {/* H3 — Lasting consequences */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-4">
          What changed permanently after the squeeze
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CONSEQUENCES.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-bdr border-l-[3px] border-l-[#15803D] rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-[#15803D] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  {item.num}
                </span>
                <p className="text-[14px] font-bold text-ink">{item.title}</p>
              </div>
              <p className="text-[13px] text-ink3 leading-[1.65] m-0">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShortSqueeze;