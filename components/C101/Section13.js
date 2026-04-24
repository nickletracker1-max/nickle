// components/sections/MajorProducersSection.jsx

const producerRows = [
  {
    company: "Nornickel",
    ticker: "MCX: GMKN",
    output: "~200kt Class 1",
    product: "Refined nickel, PGMs",
    aisc: "~$8k–$11k/t",
    accessible: "no",
    accessLabel: "✗ Russia-listed",
  },
  {
    company: "Vale Nickel",
    ticker: "NYSE: VALE",
    output: "~160kt Class 1",
    product: "Refined, intermediates",
    aisc: "~$9k–$13k/t",
    accessible: "yes",
    accessLabel: "✓ NYSE ADR",
  },
  {
    company: "Tsingshan",
    ticker: "Private",
    output: "~350kt+ (Class 2 + HPAL)",
    product: "NPI, FeNi, MHP",
    aisc: "~$7k–$9k/t",
    accessible: "no",
    accessLabel: "✗ Not listed",
  },
  {
    company: "Glencore",
    ticker: "OTC: GLNCY",
    output: "~100kt",
    product: "Refined, FeNi",
    aisc: "~$10k–$15k/t",
    accessible: "yes",
    accessLabel: "✓ OTC ADR",
  },
  {
    company: "BHP",
    ticker: "NYSE: BHP",
    output: "~80kt",
    product: "Refined, sulphate",
    aisc: "~$14k–$18k/t",
    accessible: "partial",
    accessLabel: "✓ NYSE ADR",
  },
  {
    company: "PT Vale Indonesia",
    ticker: "IDX: INCO",
    output: "~75kt FeNi → HPAL",
    product: "FeNi, converting to MHP",
    aisc: "~$10k–$14k/t",
    accessible: "partial",
    accessLabel: "⚠ Jakarta only",
  },
];

const accessStyles = {
  yes:     "bg-grn-bg text-grn border-grn/30",
  no:      "bg-red-50 text-red-500 border-red-200",
  partial: "bg-[#FFFBEB] text-[#B45309] border-[#FCD34D]/50",
};

const producers = [
  {
    name: "Nornickel (Norilsk Nickel): the Class 1 giant",
    body: [
      "Nornickel (MCX: GMKN) produces approximately 200,000 tonnes of refined Class 1 nickel per year from its sulphide operations in Norilsk (Krasnoyarsk region, Siberia) and the Kola Peninsula. It is simultaneously the world's largest Class 1 nickel producer and the world's largest palladium producer (approximately 40% of global palladium). Nornickel's operations are among the lowest-AISC Class 1 operations globally at approximately $8,000–$11,000/t — profitable at current prices.",
      "The investment problem: Nornickel is listed on the Moscow Exchange (MCX). Western retail investors cannot access MCX directly, and sanctions risk since 2022 has deterred most Western institutional participation. Nickel itself was not sanctioned, but the reputational and counterparty risks are real. For US investors, Nornickel is effectively inaccessible as a direct investment.",
    ],
  },
  {
    name: "Vale S.A.: the most accessible Class 1 option",
    body: [
      "Vale (NYSE: VALE, B3: VALE3) is Brazil's largest mining company and the world's second-largest Class 1 nickel producer. Vale's Nickel & Cobalt division produces approximately 160,000 tonnes of refined nickel annually from operations in Canada (Sudbury Complex, Thompson, Voisey's Bay), Indonesia (PT Vale Indonesia, converting from ferronickel to HPAL), and Brazil (Onça Puma). Vale Nickel's AISC is approximately $9,000–$13,000/t, making most operations profitable at today's LME price but with tight margins at Sudbury and better margins at Voisey's Bay.",
      "Vale separated its Nickel & Cobalt business into a distinct reporting segment in 2024 with external investment from Manara Minerals (Saudi Arabia's Public Investment Fund) and Engine No.1. This structure offers the possibility of a future partial IPO of the nickel division, which could unlock valuation. For US investors, NYSE-listed Vale is the primary liquid equity exposure to Class 1 nickel. Dividends carry Brazilian withholding tax (15% under US-Brazil treaty), creditable on Form 1116.",
    ],
  },
  {
    name: "BHP: Nickel West — strategic review at current prices",
    body: [
      "BHP's Nickel West division in Western Australia is the most vertically integrated nickel-to-battery-materials operation in Australia. The division mines sulphide ore from Mt Keith, Leinster, and Rocky's Reward, processes through Kambalda, refines at Kalgoorlie, and converts nickel sulphate at Kwinana for direct sale to battery cathode manufacturers. This end-to-end integration is strategically valuable — but at $15,500/t LME, Nickel West's AISC of approximately $14,000–$18,000/t makes it borderline loss-making on a full-cost basis.",
      "BHP publicly flagged Nickel West as \"under review\" in its 2024 and 2025 annual results, noting it is not generating adequate returns at current prices. A divestiture or joint venture is possible if prices do not recover. A Nickel West sale would be accretive to BHP's returns but would remove one of the few integrated Western nickel-to-battery-materials production chains.",
    ],
  },
  {
    name: "Glencore: nickel as a byproduct business",
    body: [
      "Glencore (LSE: GLEN, OTC: GLNCY) produces approximately 100,000 tonnes of nickel annually, primarily from its Sudbury operations in Ontario and Murrin Murrin HPAL in Western Australia. Nickel represents approximately 5% of Glencore's revenue, making it a secondary commodity behind copper (30%), coal (25%), and zinc (15%). The advantage of Glencore is its marketing desk, which gives the company superior price realisation on its nickel vs pure mining peers.",
    ],
  },
  {
    name: "Tsingshan: the world's largest producer, but not investable",
    body: [
      "Tsingshan Holding Group produces more nickel than any other company globally — estimated 350,000–400,000 tonnes Ni equivalent annually from its Indonesian RKEF and growing HPAL operations. But Tsingshan is a private Chinese company. There is no publicly listed vehicle for retail investors. Its actions (RKAB management, supply decisions, future HPAL scale) are critical to the global nickel market, but investors cannot own Tsingshan equity directly. The closest public proxy is companies that supply or partner with Tsingshan's Indonesian operations — which includes some Chinese-listed companies inaccessible to US retail accounts.",
    ],
    highlight: true,
  },
];

export default function MajorProducersSection() {
  return (
    <section className="bg-white py-16 md:py-20" id="producers">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 13
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
          Major Nickel Producers — Vale, BHP, Glencore, Nornickel: Who Owns What
        </h2>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          Six companies produce the majority of the world's refined and semi-refined nickel.
          Understanding their cost positions, product types, geographic exposure, and strategic
          situation determines which offers the best risk-reward for equity investors at current
          prices.
        </p>

        {/* Producer write-ups */}
        <div className="flex flex-col gap-8 max-w-[1600px] mb-12">
          {producers.map((p) => (
            <div key={p.name}>
              <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">{p.name}</h3>
              {p.highlight && (
                <div className="flex gap-3 items-start bg-red-50/60 border border-red-200 rounded-xl p-4 mb-3">
                  <span className="text-base shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider leading-relaxed">
                    Not investable for retail investors — private company, no listed equity
                  </p>
                </div>
              )}
              <div className="flex flex-col gap-3">
                {p.body.map((para, i) => (
                  <p key={i} className="text-base text-ink/80 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-xl border border-bdr">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7FB] border-b border-bdr">
                {["Company", "Ticker", "Annual Ni output", "Product", "AISC est.", "US-accessible?"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {producerRows.map((row, i) => (
                <tr
                  key={row.company}
                  className={`border-b border-bdr last:border-0 transition-colors hover:bg-[#F4F7FB]/60 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]/30"
                  }`}
                >
                  <td className="px-5 py-4 font-semibold text-ink align-top whitespace-nowrap">{row.company}</td>
                  <td className="px-5 py-4 font-mono text-ink/60 align-top whitespace-nowrap">{row.ticker}</td>
                  <td className="px-5 py-4 font-mono text-ink/80 align-top">{row.output}</td>
                  <td className="px-5 py-4 text-ink/70 align-top">{row.product}</td>
                  <td className="px-5 py-4 font-mono text-ink/70 align-top whitespace-nowrap">{row.aisc}</td>
                  <td className="px-5 py-4 align-top">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${accessStyles[row.accessible]}`}>
                      {row.accessLabel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}