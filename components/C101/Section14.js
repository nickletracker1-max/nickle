// components/sections/JuniorMinersSection.jsx

const juniorRows = [
  {
    company: "Canada Nickel",
    ticker: "TSX.V: CNC",
    asset: "Crawford Nickel-Cobalt, Ontario",
    status: "FS underway",
    notable: "World's largest undeveloped Ni sulphide (1.07 Blb Ni M+I). Samsung SDI US$18.5M investment. Export Development Canada US$500M commitment. Ontario nickel district scale vision. Targets FID 2026–2027 at favourable prices.",
    statusStyle: "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.25)]",
  },
  {
    company: "FPX Nickel",
    ticker: "TSX.V: FPX",
    asset: "Baptiste awaruite, BC",
    status: "PEA/IPD filed",
    notable: "Unique awaruite (Ni-Fe alloy) ore: no acid or high-pressure processing required. 3.9 Blb Ni resource. POSCO 7.5% strategic stake. Toyota-Panasonic JV + JOGMEC MOU 2025. Lower environmental footprint than sulphide.",
    statusStyle: "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.25)]",
  },
  {
    company: "Talon Metals",
    ticker: "TSX: TLO",
    asset: "Tamarack Ni-Cu-Co, Minnesota",
    status: "51% JV with Rio Tinto",
    notable: "High-grade massive sulphide (8.56 Mt @ 1.73% Ni). New Vault Zone discovery 2025 (record 57.76% CuEq over 34.9m). Rio Tinto JV gives credibility and financing pathway. Only significant US-based primary nickel project.",
    statusStyle: "bg-grn-bg text-grn border-grn/30",
  },
  {
    company: "Royal Nickel / RNC Minerals",
    ticker: "TSX.V: RNC",
    asset: "Dumont Ni-Co, Quebec",
    status: "FS complete",
    notable: "4.8 Blb Ni — one of world's largest undeveloped sulphide deposits. FS complete, construction-ready. PEA NPV US$2.2B at $20k/t. Waiting for nickel price recovery to attract project financing.",
    statusStyle: "bg-grn-bg text-grn border-grn/30",
  },
  {
    company: "Nickel Creek Platinum",
    ticker: "TSX.V: NIC",
    asset: "Nickel Shäw, BC/YK",
    status: "PFS complete",
    notable: "4.3 Blb NiEq — one of largest undeveloped Ni-Cu-Co-PGM deposits globally. Glencore strategic relationship. PFS complete. Up 400% YTD 2025 on drilling results.",
    statusStyle: "bg-grn-bg text-grn border-grn/30",
  },
  {
    company: "Nickel 28 Capital",
    ticker: "TSX.V: NICX",
    asset: "Ramu HPAL, Papua New Guinea",
    status: "Operating",
    notable: "Unique: already producing HPAL nickel (8.56% stake in Ramu). Royalty/streaming-like exposure on a running HPAL operation. Battery-grade Ni sulphate output. ~C$98M mkt cap.",
    statusStyle: "bg-[#FFFBEB] text-[#B45309] border-[#FCD34D]/50",
  },
  {
    company: "Power Metallic Mines",
    ticker: "TSX.V: PNPN",
    asset: "Nisk Ni-Cu-Co-PGM, Quebec",
    status: "Active drilling",
    notable: "High-grade: Lion Zone 14.3m @ 6.3% NiEq. Active discovery program. CVMR battery-grade Ni JV. Formerly Power Nickel, ~C$297M mkt cap.",
    statusStyle: "bg-[#FFFBEB] text-[#B45309] border-[#FCD34D]/50",
  },
];

const checkFactors = [
  {
    title: "Resource scale and grade",
    desc: "A project needs at minimum 300–500 million lb Ni at 0.7%+ grade (sulphide) to justify the capital. Crawford Nickel-Cobalt (CNC) at 1.07 Blb and Dumont at 4.8 Blb are at scale. Many TSX.V nickel explorers have inferred resources of 100–200 Mlb at marginal grades — insufficient for a standalone project.",
  },
  {
    title: "Strategic partner or offtake agreement",
    desc: "At $15,500/t, no nickel development project can attract conventional project finance. The projects moving forward all have strategic investors (Samsung SDI in Crawford, Rio Tinto in Talon, POSCO in FPX) providing credibility and non-market financing.",
  },
  {
    title: "Balance sheet to survive the wait",
    desc: "Junior miners burn cash. If nickel doesn't recover until 2028–2029, a company with C$15M in the bank and C$3M quarterly burn is at dilution risk before prices recover. Check cash runway before any junior purchase.",
  },
  {
    title: "Ore type advantage",
    desc: "FPX's awaruite needs no HPAL or high-temperature smelting — a genuine processing cost advantage. Talon's massive sulphide has extremely high grade. These technical differentiators determine which projects attract capital first in a recovery.",
  },
];

export default function JuniorMinersSection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="junior-miners">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 14
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
          Junior Nickel Miners — TSX and TSX.V Guide for US Investors
        </h2>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          Junior nickel miners are the highest-octane version of this trade. A development-stage
          company whose project needs $20,000/t LME to attract financing is essentially a deep
          out-of-the-money option on a nickel recovery. If nickel gets to $25,000/t, some of
          these could 5–10×. If it stays at $15,500 for another three years, most of them dilute
          shareholders into irrelevance and some go to zero. That is the honest risk profile.
          Treat this as venture capital, not commodity investing — and size it like venture
          capital (i.e. small).
        </p>

        {/* TSX access guide */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          How to access TSX.V stocks from the US
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          Most major US brokerages (Interactive Brokers, TD Ameritrade, Fidelity) can trade TSX
          and TSX.V stocks directly in Canadian dollars. You need to confirm international trading
          is enabled on your account. Many TSX.V stocks also trade on OTC Markets (Pink Sheets or
          OTCQB) in the US — look for a 5-letter ticker ending in "F" (e.g., CNIKF for Canada
          Nickel). OTC trading typically has wider spreads and lower liquidity than direct TSX.V
          trading. Interactive Brokers offers the best execution for Canadian junior miners from a
          US account.
        </p>

        {/* Key projects table */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
          Key development-stage projects (from our database of 1,044 nickel assets)
        </h3>
        <div className="overflow-x-auto rounded-xl border border-bdr mb-12">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-bdr">
                {["Company", "Ticker", "Key asset", "Status", "Why notable"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {juniorRows.map((row, i) => (
                <tr
                  key={row.company}
                  className={`border-b border-bdr last:border-0 transition-colors hover:bg-white/80 ${
                    i % 2 === 0 ? "bg-white/60" : "bg-white/20"
                  }`}
                >
                  <td className="px-5 py-4 font-semibold text-ink align-top whitespace-nowrap">
                    {row.company}
                  </td>
                  <td className="px-5 py-4 font-mono text-ink/60 align-top whitespace-nowrap">
                    {row.ticker}
                  </td>
                  <td className="px-5 py-4 text-ink/80 align-top">{row.asset}</td>
                  <td className="px-5 py-4 align-top">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${row.statusStyle}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-ink/70 align-top leading-relaxed max-w-sm">
                    {row.notable}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* What to look for */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
          What to look for in a junior nickel miner
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-6 leading-relaxed">
          Four factors separate viable development-stage projects from exploration-stage hope:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {checkFactors.map((f, i) => (
            <div key={f.title} className="bg-white rounded-xl border border-bdr p-5 flex gap-4">
              <div className="w-7 h-7 rounded-full bg-[#F4F7FB] border border-bdr flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-ink">{i + 1}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-semibold text-ink text-sm">{f.title}</p>
                <p className="text-sm text-ink/75 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}