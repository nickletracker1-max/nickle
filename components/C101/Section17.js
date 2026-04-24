// components/sections/NickelSignalsSection.jsx

const signals = [
  {
    num: "1",
    signal: "LME warehouse stocks + cancelled warrants",
    what: "Declining stocks combined with rising cancelled warrants = physical demand removing metal from the exchange. The most actionable combination. Either signal alone is noise; both together is signal.",
    source: { label: "LME official", link: { href: "/nickel/#lme-stocks", label: "Live chart" } },
    cadence: "Weekly (Friday)",
    priority: "high",
  },
  {
    num: "2",
    signal: "Indonesian RKAB permit announcements",
    what: "Annual mine work plan approvals from Indonesia's Ministry of Energy (MEMR). Tighter RKAB = supply growth slows = bullish. Looser RKAB = more supply = bearish. One announcement can move the market.",
    source: { label: "Indonesian MEMR press releases · Reuters/Bloomberg Indonesia", link: null },
    cadence: "Quarterly / ad hoc",
    priority: "high",
  },
  {
    num: "3",
    signal: "Chinese NPI monthly production",
    what: "SMM survey of Chinese and Indonesian NPI producers. Rising output = more Class 2 supply, bearish for the Class 1 premium. Two consecutive months of declining output is the single most reliable precursor to an LME price move.",
    source: { label: "SMM monthly survey", link: { href: "/nickel/#drivers", label: "Live chart" } },
    cadence: "Monthly (~20th)",
    priority: "high",
  },
  {
    num: "4",
    signal: "China stainless steel production (CISA)",
    what: "Monthly crude stainless output from China Iron & Steel Association. Stainless is ~70% of nickel demand. Strong Chinese SS output growth = strong nickel demand. Weak = the main fundamental drag.",
    source: { label: "CISA monthly · Bloomberg / Reuters translate", link: null },
    cadence: "Monthly (mid-month)",
    priority: "normal",
  },
  {
    num: "5",
    signal: "Class 1 premium (LME vs NPI spread)",
    what: "LME price minus NPI equivalent on a Ni-content basis. Rising premium = battery demand accelerating, NMC gaining share. Compressing premium = LFP displacement continuing, battery demand weaker than expected.",
    source: { label: "Calculated daily", link: { href: "/nickel/#class-split", label: "Live chart" } },
    cadence: "Daily",
    priority: "normal",
  },
  {
    num: "6",
    signal: "LFP vs NMC battery chemistry split",
    what: "Monthly EV battery production by chemistry. Every percentage point LFP gains over NMC reduces nickel demand per EV. Structural rather than cyclical — moves slowly, but in one direction for the last five years.",
    source: { label: "CAAM monthly (China) · SNE Research quarterly (global)", link: null },
    cadence: "Monthly",
    priority: "normal",
  },
];

export default function NickelSignalsSection() {
  return (
    <section className="bg-white py-16 md:py-20" id="signals">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 17
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          6 Signals to Monitor — What Actually Moves Nickel Prices
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          Nickel has fewer reliable signals than copper (which has three transparent exchange
          warehouses) or lithium (which has a weekly SMM inventory survey). But the signals it
          does have are very good when they align. Most nickel investors watch the LME price and
          nothing else. The six signals below are what the professionals are watching —
          considerably more informative than the daily LME fix. For current readings on each,
          see the{" "}
          <a
            href="/nickel/#drivers"
            className="text-li underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            live driver dashboard →
          </a>
        </p>

        {/* Signals table — desktop */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-bdr mb-10">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7FB] border-b border-bdr">
                {["#", "Signal", "What it tells you", "Source", "Cadence"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {signals.map((row, i) => (
                <tr
                  key={row.num}
                  className={`border-b border-bdr last:border-0 transition-colors hover:bg-[#F4F7FB]/60 ${
                    row.priority === "high"
                      ? "bg-[rgba(var(--li-rgb),0.03)]"
                      : i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]/20"
                  }`}
                >
                  <td className="px-5 py-4 align-top">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      row.priority === "high"
                        ? "bg-[rgba(var(--li-rgb),0.12)] text-li"
                        : "bg-[#F4F7FB] text-ink/50"
                    }`}>
                      {row.num}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-ink align-top whitespace-nowrap ">
                    {row.signal}
                  </td>
                  <td className="px-5 py-4 text-ink/75 align-top leading-relaxed max-w-sm">
                    {row.what}
                  </td>
                  <td className="px-5 py-4 align-top">
                    <p className="text-ink/60 text-xs leading-relaxed">{row.source.label}</p>
                    {row.source.link && (
                      <a
                        href={row.source.link.href}
                        className="text-xs text-li underline underline-offset-2 hover:opacity-80 transition-opacity mt-0.5 inline-block"
                      >
                        {row.source.link.label} →
                      </a>
                    )}
                  </td>
                  <td className="px-5 py-4 text-ink/60 align-top whitespace-nowrap text-xs">
                    {row.cadence}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Signals cards — mobile */}
        <div className="flex flex-col gap-4 md:hidden mb-10">
          {signals.map((s) => (
            <div
              key={s.num}
              className={`rounded-xl border p-5 flex gap-4 ${
                s.priority === "high"
                  ? "bg-[rgba(var(--li-rgb),0.04)] border-[rgba(var(--li-rgb),0.2)]"
                  : "bg-[#F4F7FB] border-bdr"
              }`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                s.priority === "high"
                  ? "bg-[rgba(var(--li-rgb),0.12)] text-li"
                  : "bg-white border border-bdr text-ink/50"
              }`}>
                {s.num}
              </span>
              <div className="flex flex-col gap-2 min-w-0">
                <p className="font-semibold text-ink text-sm leading-snug">{s.signal}</p>
                <p className="text-sm text-ink/75 leading-relaxed">{s.what}</p>
                <div className="flex items-center justify-between gap-2 flex-wrap mt-1">
                  <div>
                    <p className="text-xs text-ink/50">{s.source.label}</p>
                    
                    {s.source.link && (
                      <a
                        href={s.source.link.href}
                        className="text-xs text-li underline underline-offset-2 hover:opacity-80 transition-opacity"
                      >
                        {s.source.link.label} →
                      </a>
                    )}
                  </div>
                  <span className="text-xs font-medium text-ink/50 bg-white border border-bdr px-2 py-0.5 rounded-full whitespace-nowrap">
                    {s.cadence}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to use callout */}
        <div className="flex gap-4 items-start bg-[rgba(var(--li-rgb),0.06)] border border-[rgba(var(--li-rgb),0.2)] rounded-xl p-5 md:p-6 max-w-[1600px]">
          <span className="text-xl leading-none mt-0.5 shrink-0" aria-hidden="true">⚡</span>
          <div>
            <p className="font-semibold text-ink text-sm mb-1.5">
              How to use these signals together
            </p>
            <p className="text-sm text-ink/80 leading-relaxed">
              No single signal is sufficient on its own. The strongest entry setups historically
              combine: LME stocks declining + cancelled warrants rising + an RKAB tightening
              announcement + NPI output beginning to decline. The strongest exit signal (reduce
              exposure, not sell outright) is two consecutive months of rising NPI output
              alongside rising LME warehouse stocks — surplus re-deepening. Check current
              readings for all six on the{" "}
              <a
                href="/nickel/#drivers"
                className="text-li underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                live driver dashboard →
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}