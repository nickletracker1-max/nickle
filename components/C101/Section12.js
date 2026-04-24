// components/sections/NickelEtfsSection.jsx

const etfRows = [
  {
    name: "VanEck Rare Earth/Strategic Metals",
    ticker: "REMX",
    aum: "c.$500M*",
    er: "0.53%",
    nickel: "~15–25% (Vale, Ni developers)",
    alsoHolds: "REE, cobalt, lithium, manganese",
    primary: true,
  },
  {
    name: "Global X Lithium & Battery Tech",
    ticker: "LIT",
    aum: "c.$2.5B*",
    er: "0.75%",
    nickel: "~5–10% (via battery material companies)",
    alsoHolds: "Lithium miners, CATL, BYD, Tesla",
  },
  {
    name: "Amplify Battery & Tech",
    ticker: "BATT",
    aum: "c.$150M*",
    er: "0.59%",
    nickel: "~8–12% (mixed battery metals)",
    alsoHolds: "Lithium, cobalt, manganese",
  },
  {
    name: "iShares MSCI Global Metals & Mining",
    ticker: "PICK",
    aum: "c.$600M*",
    er: "0.39%",
    nickel: "~10–15% (Vale, BHP, Glencore)",
    alsoHolds: "Copper, iron ore, diversified mining",
  },
];

export default function NickelEtfsSection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="etfs">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 12
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
          Nickel ETFs: REMX, LIT, and the Gap in the Market
        </h2>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          The most common question in nickel investing is simple and has an annoying answer:{" "}
          <strong className="text-ink font-semibold">there is no pure-play nickel ETF</strong>.
          Gold has GLD. Silver has SLV. Copper has CPER. Nickel has… REMX, which is maybe 20%
          nickel on a good day. The market structure gap is real, and it forces retail investors
          to either accept dilution through diversified funds or take individual stock risk. Here
          is what exists and what each actually gives you.
        </p>

        {/* REMX intro */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          REMX — the closest option
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-8 leading-relaxed">
          The VanEck Rare Earth &amp; Strategic Metals ETF (NYSE: REMX) is the most commonly used
          proxy. It holds approximately 50–60 companies involved in rare earth and critical mineral
          production. Nickel companies typically represent 15–25% of the portfolio depending on
          rebalancing. Top nickel-relevant holdings have included Vale, Norilsk (before sanctions
          concerns reduced some funds' Russian holdings), MP Materials, and nickel-adjacent
          critical mineral companies. Expense ratio: 0.53%/yr. AUM: approximately $500M.
        </p>

        {/* ETF comparison table */}
        <div className="overflow-x-auto rounded-xl border border-bdr mb-3">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-bdr">
                {["ETF", "Ticker", "AUM", "ER/yr", "Nickel exposure", "Also holds"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {etfRows.map((row, i) => (
                <tr
                  key={row.ticker}
                  className={`border-b border-bdr last:border-0 transition-colors hover:bg-white/80 ${
                    row.primary
                      ? "bg-[rgba(var(--li-rgb),0.05)]"
                      : i % 2 === 0 ? "bg-white/50" : "bg-white/20"
                  }`}
                >
                  <td className="px-5 py-4 font-medium text-ink align-top">{row.name}</td>
                  <td className="px-5 py-4 align-top">
                    <span className={`font-mono font-semibold text-xs px-2 py-0.5 rounded border ${
                      row.primary
                        ? "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.25)]"
                        : "bg-[#F4F7FB] text-ink/60 border-bdr"
                    }`}>
                      {row.ticker}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-mono text-ink/70 align-top whitespace-nowrap">{row.aum}</td>
                  <td className="px-5 py-4 font-mono text-ink/70 align-top">{row.er}</td>
                  <td className="px-5 py-4 text-ink/80 align-top">{row.nickel}</td>
                  <td className="px-5 py-4 text-ink/60 align-top">{row.alsoHolds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink/40 mb-10">
          * AUM figures approximate and change daily. Verify current AUM on ETF provider sites before investing.
        </p>

        {/* Why no pure-play */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Why no pure-play nickel ETF exists
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-8 leading-relaxed">
          For an ETF to track nickel prices, it either needs to hold the commodity physically
          (impractical for nickel — see Section 11) or hold a basket of nickel-focused equities.
          The problem: there are only 3–4 publicly listed companies where nickel represents more
          than 50% of revenue (Vale's nickel division is ~25% of Vale's total), and they have
          insufficient combined market cap to support a meaningful ETF vehicle. Most nickel
          companies are either private (Tsingshan), Russian-listed (Norilsk), or junior developers
          on the TSX.V without US exchange listing. This market structure gap means retail
          investors must accept partial exposure through diversified vehicles or take individual
          stock risk.
        </p>

        {/* REMX tracking problem */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          The REMX tracking problem
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] leading-relaxed">
          REMX does not track nickel prices. In the 2022 nickel spike, REMX rose approximately
          15% while LME nickel rose 60%+ on fundamentals (more if you include the squeeze). In
          the 2023–2024 nickel crash, REMX fell somewhat less than pure-play nickel equities
          because of its rare earth and lithium diversification. For investors who want maximum
          nickel leverage, REMX is an imperfect proxy. For investors who want broad critical
          minerals exposure with some nickel, it is reasonable.
        </p>

      </div>
    </section>
  );
}