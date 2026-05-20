// components/sections/TimingSection.jsx

const conditions = [
  {
    num: "1",
    title: "LME warehouse stocks declining for 12+ weeks consistently",
    desc: "Physical demand drawing down supply faster than new deliveries.",
    link: { href: "/data/#lme-stocks", label: "Live warehouse stocks" },
  },
  {
    num: "2",
    title: "Cancelled warrants above 15% and rising",
    desc: "Metal leaving the exchange, indicating real physical consumption.",
    link: { href: "/data/#lme-stocks", label: "Live cancelled warrants" },
  },
  {
    num: "3",
    title: "Chinese stainless steel PMI expanding >51",
    desc: "The dominant demand sector showing genuine growth.",
    link: { href: null, label: "Latest China NBS manufacturing PMI" },
  },
  {
    num: "4",
    title: "NPI monthly output declining for 2+ consecutive months",
    desc: "The supply side showing genuine curtailment.",
    link: { href: "/data/#drivers", label: "SMM monthly NPI survey" },
  },
  {
    num: "5",
    title: "RKAB tightening confirmed by Indonesian MEMR announcement",
    desc: "The policy variable signalling.",
    link: { href: null, label: "Latest Indonesian MEMR RKAB announcements" },
  },
];

export default function TimingSection() {
  return (
    <section className="bg-white py-16 md:py-20" id="timing">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 15
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          Timing and Entry Strategy — When Does the Recovery Come?
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          Timing a commodity cycle is difficult. Timing nickel specifically is harder than most,
          because the dominant supply driver (Indonesia) is a political entity with its own
          interests that don't map neatly to economic models. Here is the framework-level
          thinking rather than a specific price call.
        </p>

        {/* Five conditions */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          The five conditions that historically precede nickel recoveries
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-6 leading-relaxed">
          Based on the 2016 and 2020 recovery cycles, these conditions have historically
          preceded nickel price recoveries:
        </p>

        <div className="flex flex-col gap-3 mb-6">
          {conditions.map((c) => (
            <div
              key={c.num}
              className="bg-[#F4F7FB] rounded-xl border border-bdr p-5 flex gap-4 items-start"
            >
              <div className="w-7 h-7 rounded-full bg-white border border-bdr flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-ink">{c.num}</span>
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <p className="font-semibold text-ink text-sm leading-snug">{c.title}</p>
                <p className="text-sm text-ink/70 leading-relaxed">{c.desc}</p>
                {c.link.href ? (
                  <a
                    href={c.link.href}
                    className="text-xs text-li underline underline-offset-2 hover:opacity-80 transition-opacity mt-0.5 self-start"
                  >
                    Check: {c.link.label} →
                  </a>
                ) : (
                  <p className="text-xs text-ink/40 mt-0.5">Check: {c.link.label}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Most important callout */}
        <div className="flex gap-4 items-start bg-[rgba(var(--li-rgb),0.06)] border border-[rgba(var(--li-rgb),0.2)] rounded-xl p-5 md:p-6 max-w-[1600px] mb-10">
          <span className="text-xl leading-none mt-0.5 shrink-0" aria-hidden="true">⚡</span>
          <div>
            <p className="font-semibold text-ink text-sm mb-1.5">
              Most important signal: NPI output
            </p>
            <p className="text-sm text-ink/80 leading-relaxed">
              When SMM's monthly NPI survey shows two consecutive months of declining output,
              that is historically the most reliable precursor to a sustained LME price move.{" "}
              <a
                href="/data/#drivers"
                className="text-li underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Check current readings on the live signal dashboard →
              </a>
            </p>
          </div>
        </div>

        {/* DCA vs lump sum */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Dollar-cost averaging vs lump sum for nickel
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          Given the deeper surplus and longer timeline relative to lithium, dollar-cost averaging
          over 12–18 months is more defensible than a lump-sum entry at current prices. The
          downside scenario (deficit delayed to 2030) could see LME nickel retesting
          $13,000–$14,000/t, which would hurt a concentrated lump-sum position. The upside
          scenario (deficit arrives 2026 H2 on RKAB tightening) could mean LME moves to $20,000+
          before full deployment, but that upside can be partially captured even with a DCA
          approach if you start now.
        </p>

        {/* Position-reduction signal */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          The position-reduction signal
        </h3>
        <div className="flex gap-4 items-start bg-red-50/60 border border-red-200 rounded-xl p-5 md:p-6 max-w-[1600px]">
          <span className="text-xl leading-none mt-0.5 shrink-0" aria-hidden="true">⚠️</span>
          <div>
            <p className="font-semibold text-ink text-sm mb-1.5">
              When to reduce exposure
            </p>
            <p className="text-sm text-ink/80 leading-relaxed">
              If SMM's monthly NPI survey shows NPI output rising for two consecutive months
              while LME warehouse stocks also rise — indicating supply is building while
              Indonesian producers are adding, not curtailing — that is a signal the surplus is
              re-deepening and the deficit thesis is pushing further out. Use that combination as
              a prompt to review position size.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}