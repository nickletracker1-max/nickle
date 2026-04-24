// components/sections/NickelPriceHistorySection.jsx

const historyRows = [
  { period: "2010–2011", lme: "$20,000–$24,000/t", driver: "Post-GFC recovery; Chinese stainless steel demand surge; nickel near cycle peak before Indonesian ore began flooding market.", band: "high" },
  { period: "2012–2015", lme: "$13,000–$18,000/t", driver: "Supply surplus as Indonesian/Philippine laterite ore exports grew rapidly into Chinese NPI production. Price declines consistently.", band: "neutral" },
  { period: "2016", lme: "~$9,800/t", driver: "Cycle trough. Indonesian ore ban briefly imposed then lifted, causing confusion. NPI capacity at maximum, demand soft. Nickel at multi-year lows.", band: "trough" },
  { period: "2017–2019", lme: "$9,000–$15,000/t", driver: "Recovery driven by EV narrative beginning, Indonesia announcing permanent ore ban from 2020. Supply uncertainty premium building.", band: "neutral" },
  { period: "2020", lme: "~$13,700/t", driver: "COVID disruption then recovery. Indonesia ore ban implemented January 2020. Chinese NPI smelters begin construction in Indonesia at scale.", band: "neutral" },
  { period: "2021", lme: "~$18,500/t", driver: "EV demand narrative peak. Nickel rising with broader commodity supercycle. Battery manufacturers expressing concern about Class 1 supply adequacy.", band: "surge" },
  { period: "Feb 2022", lme: "~$24,000/t", driver: "Pre-squeeze fundamental peak. Tsingshan's LME short position known to be large. Supply-demand fundamentals supportive of elevated prices.", band: "surge" },
  { period: "Mar 8, 2022", lme: "$101,365/t (intraday)", driver: "Short squeeze only. LME cancelled $3.9B of trades. Not supply-demand. Fundamental price was ~$28,400 at the time (February close).", band: "squeeze", squeezeNote: true },
  { period: "2022 (post-squeeze)", lme: "~$22,000/t avg", driver: "Post-squeeze normalisation. Indonesian RKEF capacity ramp accelerating. Market beginning to realise scale of Indonesian supply growth.", band: "high" },
  { period: "2023", lme: "~$21,500/t", driver: "Indonesian supply surge becomes fully apparent. Surplus emerges. LFP battery share rising, reducing nickel demand per EV. Price drifts lower.", band: "neutral" },
  { period: "2024", lme: "~$16,500/t", driver: "Surplus confirmed at −250kt. New Caledonia crisis removes 120–150kt. LME stocks peak then begin declining. Price stabilises near cost curve support.", band: "trough" },
  { period: "2025", lme: "~$15,800/t", driver: "Surplus narrows to ~−180kt. LME stocks declining trend established. RKAB signals tightening. Range-bound as bulls and bears balance near cost curve floor.", band: "neutral" },
  { period: "2026 YTD", lme: "~$15,500/t", driver: "Continued range-bound. Cancelled warrants rising bullishly. NPI output still elevated. Consensus waiting for deficit conditions to materialise 2028–2029.", band: "current" },
];

const bandStyles = {
  high:    { row: "bg-grn-bg/30",          lme: "text-grn font-semibold" },
  trough:  { row: "bg-blue-50/50",         lme: "text-blue-400 font-semibold" },
  surge:   { row: "bg-[#FFFBEB]/60",       lme: "text-[#B45309] font-semibold" },
  squeeze: { row: "bg-red-50/60",          lme: "text-red-500 font-bold" },
  current: { row: "bg-[rgba(var(--li-rgb),0.05)] ring-1 ring-inset ring-li/20", lme: "text-li font-semibold" },
  neutral: { row: "",                       lme: "text-ink/70" },
};

const cycles = [
  {
    label: "Cycle 1 (2010–2016)",
    body: "Nickel's first sustained crash was driven by NPI production in China using Indonesian and Philippine ore imports. The supply response to 2007–2011 high prices came from an unexpected source (Chinese NPI) rather than the anticipated new mines — a lesson about supply elasticity through alternative processing routes.",
    lesson: "Supply responses come from unexpected routes, not the mines you're modelling.",
  },
  {
    label: "Cycle 2 (2016–2022)",
    body: "Recovery was driven by the Indonesian ore export ban (policy) and the EV narrative (demand expectations). The lesson: commodity prices respond to policy changes faster than new mines can be built. Indonesia's 2020 ore ban was the most powerful single supply event since OPEC-era oil policy.",
    lesson: "Policy moves commodity prices faster than new mine supply ever can.",
  },
  {
    label: "Cycle 3 (2022–present)",
    body: "The short squeeze distorted price signals massively. After the squeeze resolved, the market discovered that Indonesia had built not just RKEF NPI capacity (known) but also HPAL capacity (less well-modelled) while prices were high.",
    lesson: "At $80,000+/t, every possible laterite processing route becomes economic — supply can come from places you haven't modelled.",
  },
];

export default function NickelPriceHistorySection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="history">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 18
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
          Nickel Price History 2010–2026 — Three Cycles and One Unprecedented Event
        </h2>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          Every commodity has a few inflection points that define its character for a decade. For
          nickel, those are the 2016 trough (when Indonesian ore exports briefly halted then
          resumed, causing confusion), the 2020 ore export ban (one government policy that
          rerouted global supply chains), and the March 2022 short squeeze (the most dramatic
          single-day commodity event in modern history). Understanding what caused each move
          makes the current situation much easier to read.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { color: "bg-grn-bg border-grn/30", dot: "bg-grn", label: "Cycle high" },
            { color: "bg-blue-50 border-blue-200", dot: "bg-blue-400", label: "Trough" },
            { color: "bg-[#FFFBEB] border-[#FCD34D]/40", dot: "bg-[#B45309]", label: "Surge" },
            { color: "bg-red-50 border-red-200", dot: "bg-red-400", label: "Short squeeze" },
            { color: "bg-[rgba(var(--li-rgb),0.06)] border-[rgba(var(--li-rgb),0.2)]", dot: "bg-li", label: "Current" },
          ].map((l) => (
            <span key={l.label} className={`inline-flex items-center gap-2 text-xs text-ink/60 border rounded-full px-3 py-1 ${l.color}`}>
              <span className={`w-2 h-2 rounded-full shrink-0 ${l.dot}`} />
              {l.label}
            </span>
          ))}
        </div>

        {/* History table */}
        <div className="overflow-x-auto rounded-xl border border-bdr mb-14">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-bdr">
                {["Period", "LME avg (approx)", "Key driver"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {historyRows.map((row) => {
                const style = bandStyles[row.band];
                return (
                  <tr key={row.period} className={`border-b border-bdr last:border-0 transition-colors hover:brightness-95 ${style.row}`}>
                    <td className="px-5 py-4 font-mono font-medium text-ink align-top whitespace-nowrap">
                      {row.period}
                    </td>
                    <td className={`px-5 py-4 font-mono align-top whitespace-nowrap ${style.lme}`}>
                      {row.lme}
                    </td>
                    <td className="px-5 py-4 text-ink/75 align-top leading-relaxed">
                      {row.squeezeNote ? (
                        <>
                          <span className="inline-block text-xs font-bold text-red-500 bg-red-50 border border-red-200 rounded px-1.5 py-0.5 mr-2 whitespace-nowrap">
                            Short squeeze only
                          </span>
                          LME cancelled $3.9B of trades. Not supply-demand. Fundamental price was ~$28,400 at the time (February close).
                        </>
                      ) : (
                        row.driver
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Cycle lessons */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-6">
          Lessons from each cycle
        </h3>
        <div className="grid gap-5 sm:grid-cols-3">
          {cycles.map((c) => (
            <div key={c.label} className="bg-white rounded-xl border border-bdr p-6 flex flex-col gap-3">
              <p className="text-xs font-mono uppercase tracking-wider text-ink/40">{c.label}</p>
              <p className="text-sm text-ink/75 leading-relaxed">{c.body}</p>
              <p className="text-sm font-semibold text-ink border-t border-bdr pt-3 leading-relaxed">
                Lesson: {c.lesson}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}