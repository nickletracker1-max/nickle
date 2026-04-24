    // components/sections/WaysToInvestSection.jsx

const ways = [
  {
    option: "Option 1",
    title: "REMX ETF (Closest to a Nickel ETF)",
    text: "VanEck Rare Earth & Strategic Metals ETF (NYSE: REMX, 0.53%/yr). Holds a basket of critical mineral producers including Vale, Norilsk (indirectly), and nickel developers. Nickel is approximately 15–25% of the portfolio. Low minimum, very liquid, no international brokerage needed. The downside: REMX is primarily rare earth and critical minerals broadly — nickel is diluted by cobalt, lithium, and REE companies.",
    tag: "Best for most US investors",
    tagStyle: "bg-grn-bg text-grn border-grn/30",
  },
  {
    option: "Option 2",
    title: "Vale (NYSE: VALE) — Class 1 Pure-Play",
    text: "Vale S.A. is the world's second-largest Class 1 nickel producer and the most accessible for US investors. NYSE-listed ADR, highly liquid, pays dividends. Vale's Nickel & Cobalt division operates Sudbury Complex, Thompson, Voisey's Bay (Canada), PTVI (Indonesia), and Onça Puma (Brazil). Nickel represents approximately 20–25% of Vale's total revenue — primarily iron ore makes the rest. Advantage: you get Class 1 nickel leverage. Disadvantage: significant iron ore exposure means the stock reflects Brazil/iron ore as much as nickel.",
    tag: "Good for nickel + iron ore exposure",
    tagStyle: "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.25)]",
  },
  {
    option: "Option 3",
    title: "BHP (NYSE: BHP ADR) — Integrated with Nickel West",
    text: "BHP's Nickel West division in Western Australia is the most integrated nickel-to-battery-materials operation in Australia — mining through to nickel sulphate for battery cathodes. Nickel is less than 3% of BHP's total revenue, making BHP primarily an iron ore and copper play with nickel as a side exposure. BHP has flagged Nickel West as \"under strategic review\" at current prices — it could be divested, which is both a risk and a potential valuation catalyst.",
    tag: "Diversified — small nickel weight",
    tagStyle: "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.25)]",
  },
  {
    option: "Option 4",
    title: "TSX.V Junior Developers — Maximum Leverage",
    text: "Development-stage nickel miners on the TSX.V offer the highest leverage to a nickel price recovery but with correspondingly high development, financing, and execution risk. Most require prices above $20,000/t to attract project financing. They can 3–10× in a bull market and go to near-zero if the recovery doesn't arrive on schedule. This is venture capital exposure, not commodity investing.",
    tag: "High risk — experienced investors only",
    tagStyle: "bg-[#FFFBEB] text-[#B45309] border-[#FCD34D]/50",
  },
  {
    option: "Option 5",
    title: "Physical Nickel — Not Available",
    text: "There is no practical retail market for physical nickel. Unlike gold or silver, nickel is an industrial metal requiring specialist storage (it oxidises, can be contaminated, requires specific handling). No standardised retail market with buyback liquidity exists. LME futures are accessible institutionally but not designed for retail long-term holding. There is no nickel equivalent of a gold or silver coin.",
    tag: "Not available to retail investors",
    tagStyle: "bg-red-50 text-red-500 border-red-200",
  },
  {
    option: "Option 6",
    title: "Glencore (OTC: GLNCY)",
    text: "Glencore is a diversified miner and trader with nickel operations at Sudbury (Ontario), Murrin Murrin HPAL (Western Australia), and multiple other assets. Nickel is approximately 5% of Glencore's revenue. The OTC listing has adequate liquidity for retail positions. Glencore's commodity trading desk adds diversification to mining operations. Similar dilution issue to BHP — nickel is a small weight in a large portfolio of copper, coal, zinc, and cobalt.",
    tag: "Diversified — partial nickel",
    tagStyle: "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.25)]",
  },
];

export default function WaysToInvestSection() {
  return (
    <section className="bg-white py-16 md:py-20" id="ways-to-invest">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 11
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          5 Ways to Invest in Nickel — Trade-offs Laid Flat
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          Nickel is more difficult to access as an investment than copper, gold, or even lithium.
          There is no pure-play spot ETF, no physical market for retail investors, and the primary
          liquid equity options are diversified miners where nickel is a secondary contributor to
          revenue. Here are the five options available to US investors with honest trade-offs.
        </p>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((w) => (
            <div
              key={w.option}
              className="bg-[#F4F7FB] rounded-xl border border-bdr p-6 flex flex-col gap-3"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-ink/40">
                {w.option}
              </p>
              <p className="font-semibold text-ink text-base leading-snug">{w.title}</p>
              <p className="text-sm text-ink/75 leading-relaxed flex-1">{w.text}</p>
              <span
                className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border mt-1 ${w.tagStyle}`}
              >
                {w.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}