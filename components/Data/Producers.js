import React from 'react';

const PRODUCERS = [
  {
    company: "Nornickel (Norilsk Nickel)",
    exchange: "MCX: GMKN",
    output: "~200kt Ni refined",
    product: "Class 1 refined, PGMs, copper, cobalt",
    aisc: "~$8,000–$11,000/t",
    notes: "World's largest Class 1 producer. Russian-listed — sanctions risk for Western investors. Also world's largest palladium/platinum producer. Operations in Norilsk and Kola Peninsula.",
  },
  {
    company: "Vale (Vale Base Metals)",
    exchange: "NYSE: VALE / B3",
    output: "~160kt Ni refined",
    product: "Class 1 refined, MHP, intermediates",
    aisc: "~$9,000–$13,000/t",
    notes: "Brazilian miner with nickel operations in Canada (Sudbury, Thompson, Voisey's Bay), Indonesia (PT Vale HPAL), and New Caledonia (partial). Spun off Base Metals division. US-accessible via NYSE ADR.",
  },
  {
    company: "Tsingshan Holding",
    exchange: "Private (Chinese)",
    output: "~350kt+ NPI",
    product: "Class 2 NPI primarily; expanding into HPAL MHP",
    aisc: "~$7,000–$8,500/t",
    notes: "World's largest nickel producer by volume. Built Indonesia's IMIP industrial park. Caused the March 2022 LME short squeeze. Not publicly listed — no direct equity access.",
  },
  {
    company: "Glencore",
    exchange: "LSE: GLEN",
    output: "~100kt Ni refined",
    product: "Class 1 refined (Sudbury, Murrin Murrin)",
    aisc: "~$10,000–$15,000/t",
    notes: "Diversified miner with nickel as ~5% of revenue. Sudbury (Ontario) sulphide operations + Murrin Murrin HPAL (WA). Balance sheet and diversification reduce nickel price sensitivity vs pure-plays.",
  },
  {
    company: "BHP",
    exchange: "ASX/LSE/NYSE: BHP",
    output: "~80kt Ni",
    product: "Class 1 (Nickel West, WA) + MHP",
    aisc: "~$10,000–$16,000/t",
    notes: "Nickel West in WA is fully integrated — mining to refinery to nickel sulphate for batteries. BHP has flagged Nickel West as under review at current prices. Nickel is <3% of BHP revenue.",
  },
  {
    company: "PT Vale Indonesia",
    exchange: "IDX: INCO",
    output: "~75kt FeNi",
    product: "Class 2 ferronickel (converting to HPAL)",
    aisc: "~$10,000–$14,000/t",
    notes: "Vale's Indonesian JV. Converting from ferronickel to HPAL MHP with Huayou partnership. Beneficiary of Indonesia's ore ban — processes local ore. Listed on Jakarta exchange.",
  },
];

const Producers = () => {
  return (
    <section className="py-10 bg-white" id="producers" aria-label="Major nickel producers section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section — Companies
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Major Nickel Producers — Norilsk, Vale, Tsingshan &amp; Beyond
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-6">
          Six companies dominate global nickel supply. Understanding their cost positions, product
          types, and strategic postures explains much of the nickel market's structure and price
          dynamics.
        </p>

        {/* Producers table */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr>
                {[
                  { label: "Company",       highlight: false },
                  { label: "Exchange",      highlight: true  },
                  { label: "Annual output", highlight: false },
                  { label: "Product type",  highlight: false },
                  { label: "AISC est.",     highlight: false },
                  { label: "Key notes",     highlight: false },
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
              {PRODUCERS.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(34,197,94,0.02)]">
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap align-top">
                    {row.company}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] text-[#15803D] font-semibold whitespace-nowrap align-top">
                    {row.exchange}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap align-top">
                    {row.output}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.5] align-top max-w-[160px]">
                    {row.product}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap align-top">
                    {row.aisc}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55] align-top max-w-[280px]">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vale callout */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 mb-8 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.22)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
          <p className="text-[13px] text-ink3 leading-[1.7] m-0">
            For US equity investors,{' '}
            <strong className="text-ink">Vale Nickel (NYSE: VALE)</strong> is the most liquid
            access point to Class 1 nickel production. Vale's nickel division operates the Sudbury
            Complex (Ontario), Thompson (Manitoba), Voisey's Bay (Labrador), and PTVI (Indonesia).
            The company trades at a discount to its copper peers partly because nickel is a drag on
            margins at current prices — which is also why it offers the most upside in a nickel
            recovery.
          </p>
        </div>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-3">
          The March 2022 short squeeze: what happened and why it matters
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-3">
          On March 7–8 2022, LME nickel prices spiked from approximately $29,000/t to $101,365/t
          in under 24 hours. The cause: Tsingshan Holdings had built an enormous short position on
          the LME (estimated 150,000–200,000 tonnes) as a hedge against its Indonesian production.
          When nickel prices rose sharply (initially on Russia-Ukraine supply concern), Tsingshan
          faced catastrophic margin calls. Its counterparties — primarily Western banks — pressed
          for settlement. The price spiral reflected forced covering, not physical supply shortage.
        </p>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-3">
          The LME's response was controversial: it halted the market and cancelled approximately
          $3.9 billion in trades executed during the spike. Multiple hedge funds (including AQR,
          Clifford Asness) publicly criticised the decision as a betrayal of market integrity —
          their valid long positions were cancelled after execution. The FCA (UK Financial Conduct
          Authority) conducted an investigation. The episode triggered multiple lawsuits against the
          LME. LME nickel volumes and open interest have not fully recovered to pre-squeeze levels,
          as institutional trust in the contract was damaged.
        </p>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          For investors, the lesson: the LME nickel contract is susceptible to
          position-concentration risk in ways that copper (which has three major exchange
          warehouses and a larger physical market) is not. The $101,365 price is not a fundamental
          reference — the pre-squeeze $28,400 and the cost structure analysis are more useful for
          fair-value thinking.
        </p>

        {/* Short squeeze callout */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-red-bg border border-[rgba(192,57,43,0.18)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚠</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              Why $101,365 is not a price reference
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              The March 2022 spike was a short squeeze — a financial event, not a supply signal.
              Analysing nickel fair value from the $101k ATH is misleading. The analytically
              relevant peak is the <strong className="text-ink">$28,400 pre-squeeze fundamental high</strong>{' '}
              (February 2022), which reflected genuine supply tightness before the financial
              distortion. Current prices of $15,500/t represent a 45% decline from that genuine
              fundamental peak.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Producers;