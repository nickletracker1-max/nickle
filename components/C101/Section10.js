// components/sections/DeficitThesisSection.jsx

const institutionRows = [
  {
    institution: "IEA Critical Minerals Outlook",
    bal2026: "−120kt surplus",
    bal2027: "−80kt surplus",
    deficitStart: "2028–2029",
    priceTarget: "$16,000–$20,000/t",
  },
  {
    institution: "BloombergNEF",
    bal2026: "−90kt surplus",
    bal2027: "−50kt surplus",
    deficitStart: "2028",
    priceTarget: "$15,500–$19,000/t",
  },
  {
    institution: "Benchmark Min. Intelligence",
    bal2026: "−130kt surplus",
    bal2027: "−80kt surplus",
    deficitStart: "2028–2030",
    priceTarget: "$16,500–$22,000/t",
  },
  {
    institution: "Wood Mackenzie",
    bal2026: "−150kt surplus",
    bal2027: "−100kt surplus",
    deficitStart: "2029",
    priceTarget: "$14,000–$17,000/t",
  },
];

const accelerators = [
  {
    num: "1",
    title: "Indonesia meaningfully tightens RKAB",
    desc: "If new mine permits are restricted to protect HPAL economics, the supply growth rate slows.",
  },
  {
    num: "2",
    title: "New Caledonia operations do not restart",
    desc: "Permanent removal of 120–150kt of high-cost supply is already occurring.",
  },
  {
    num: "3",
    title: "NMC battery share recovers",
    desc: "Solid-state batteries or policy incentives for long-range EVs could shift chemistry mix back toward high-nickel cathodes.",
  },
];

const scenarios = [
  {
    dot: "bg-grn",
    tag: "Bull",
    tagColor: "text-grn",
    price: "$20k–$26k",
    priceColor: "text-grn",
    border: "border-grn/30",
    bg: "bg-grn-bg/30",
    label: "by 2028",
    text: "RKAB tightens meaningfully. New Cal does not restart. NMC regains share via solid-state. Deficit arrives 2026–2027. Price rallies toward incentive level.",
    note: "Requires Indonesian policy shift",
  },
  {
    dot: "bg-li",
    tag: "Base",
    tagColor: "text-li",
    price: "$17k–$20k",
    priceColor: "text-li",
    border: "border-[rgba(var(--li-rgb),0.25)]",
    bg: "bg-[rgba(var(--li-rgb),0.05)]",
    label: "by 2028",
    text: "Surplus narrows gradually. Deficit starts 2028–2029. LFP holds ~65% share. HPAL ramps steadily but Indonesian RKEF also persists. Slow grind.",
    note: "Consensus of IEA, BNEF, BMI",
  },
  {
    dot: "bg-red-400",
    tag: "Bear",
    tagColor: "text-red-400",
    price: "$12k–$15k",
    priceColor: "text-red-400",
    border: "border-red-200",
    bg: "bg-red-50/40",
    label: "range-bound",
    text: "No RKAB restriction. HPAL adds Class 1 supply faster than battery demand absorbs it. LFP continues displacement. Deficit delayed to 2030+.",
    note: "Requires continued Indonesian growth",
  },
];

export default function DeficitThesisSection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="deficit">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 10
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
          The Nickel Supply Deficit Thesis — 2028–2029 at Current Consensus
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          The structural long-term case for nickel rests on demand growing faster than supply can
          respond — a deficit that eventually forces prices to the incentive level for new
          development. Understanding the institutional consensus, the variables that move the
          timing, and what would confirm the thesis is advancing is the analytical core of the
          investment case.
        </p>

        {/* Institution projections */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
          What the institutions are actually projecting
        </h3>
        <div className="overflow-x-auto rounded-xl border border-bdr mb-5">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-bdr">
                {["Institution", "2026E balance", "2027E balance", "Deficit start", "Price target (deficit onset)"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {institutionRows.map((row, i) => (
                <tr
                  key={row.institution}
                  className={`border-b border-bdr last:border-0 transition-colors hover:bg-white/80 ${
                    i % 2 === 0 ? "bg-white/60" : "bg-white/20"
                  }`}
                >
                  <td className="px-5 py-4 font-medium text-ink align-top">{row.institution}</td>
                  <td className="px-5 py-4 font-mono text-red-400 align-top">{row.bal2026}</td>
                  <td className="px-5 py-4 font-mono text-red-400 align-top">{row.bal2027}</td>
                  <td className="px-5 py-4 font-mono font-semibold text-ink align-top">{row.deficitStart}</td>
                  <td className="px-5 py-4 font-mono text-li font-semibold align-top">{row.priceTarget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          All four institutions agree: the nickel market remains in surplus through 2026–2027,
          with a deficit beginning in 2028–2029 in base cases. Nickel's surplus is deeper and
          more structurally embedded than lithium's, making the timeline more predictable if also
          more frustrating for investors who entered early.
        </p>

        {/* Accelerators */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
          What accelerates the deficit
        </h3>
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          {accelerators.map((a) => (
            <div key={a.num} className="bg-white rounded-xl border border-bdr p-5 flex flex-col gap-3">
              <div className="w-7 h-7 rounded-full bg-[#F4F7FB] border border-bdr flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-ink">{a.num}</span>
              </div>
              <p className="font-semibold text-ink text-sm">{a.title}</p>
              <p className="text-sm text-ink/70 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Incentive price */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          The incentive price: the long-run anchor
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          The incentive price for new greenfield sulphide development is generally estimated at{" "}
          <strong className="text-ink font-semibold">$22,000–$28,000/t LME</strong>. This is
          the level needed to justify $3–5 billion of capital investment in a new Canadian or
          Australian sulphide mine. Laterite HPAL projects in Indonesia need approximately
          $15,000–$18,000/t to clear their hurdle rates. At $15,500/t, virtually no new major
          supply project is financeable. This is simultaneously the argument for higher prices in
          the long run and the explanation for why the current surplus — built when prices were
          $25,000+ — will not be replaced when it eventually depletes.
        </p>

        {/* Scenario cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {scenarios.map((s) => (
            <div key={s.tag} className={`rounded-xl border ${s.border} ${s.bg} p-6 flex flex-col gap-3`}>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${s.dot}`} aria-hidden="true" />
                <p className={`text-xs font-bold uppercase tracking-wider ${s.tagColor}`}>
                  {s.tag} — {s.label}
                </p>
              </div>
              <p className={`text-3xl font-bold ${s.priceColor}`}>{s.price}</p>
              <p className="text-sm text-ink/75 leading-relaxed">{s.text}</p>
              <p className="text-xs text-ink/40 border-t border-bdr/50 pt-3 mt-auto">{s.note}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}