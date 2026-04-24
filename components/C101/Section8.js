// components/sections/BatteryDemandSection.jsx

const batteryRows = [
  {
    type: "LFP (budget/standard)",
    nickel: "0 kg Ni",
    pack: "40–80 kWh",
    perEv: "0 kg",
    cost: "$0 — no nickel",
    zero: true,
  },
  {
    type: "NMC 622 (mid-range)",
    nickel: "~0.35 kg Ni/kWh",
    pack: "75 kWh",
    perEv: "~26 kg",
    cost: "~$403",
  },
  {
    type: "NMC 811 (long-range)",
    nickel: "~0.53 kg Ni/kWh",
    pack: "90 kWh",
    perEv: "~48 kg",
    cost: "~$744",
  },
  {
    type: "NCA (performance)",
    nickel: "~0.60 kg Ni/kWh",
    pack: "100 kWh",
    perEv: "~60 kg",
    cost: "~$930",
  },
  {
    type: "NMC 90 (ultra high-Ni)",
    nickel: "~0.70 kg Ni/kWh",
    pack: "100 kWh",
    perEv: "~70 kg",
    cost: "~$1,085",
  },
];

export default function BatteryDemandSection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="battery">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 8
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
          Battery Demand — The Growth Story and the LFP Headwind
        </h2>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          Battery demand is nickel's growth narrative, but it has been badly distorted by a
          chemistry shift that most 2020–2021 era forecasts failed to model correctly.
          Understanding the actual battery demand trajectory — rather than the narrative — is
          essential for any serious nickel investment thesis.
        </p>

        <div className="flex flex-col gap-8 max-w-[1600px] mb-10">

          {/* NMC supply chain */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
              How nickel enters EV batteries: the NMC supply chain
            </h3>
            <p className="text-base text-ink/80 leading-relaxed mb-4">
              In NMC (Nickel Manganese Cobalt) and NCA (Nickel Cobalt Aluminium) batteries,
              nickel is the primary active cathode material. NMC 811 (80% Ni, 10% Mn, 10% Co in
              the cathode active material) is the highest-nickel commercial chemistry, used in
              premium long-range EVs. The supply chain runs:
            </p>
            {/* Supply chain pill flow */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                "Class 1 nickel",
                "Nickel sulphate (NiSO₄)",
                "pCAM",
                "CAM",
                "Battery cell",
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="bg-white border border-bdr rounded-lg px-3 py-1.5 text-xs font-semibold text-ink whitespace-nowrap">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-ink/30 text-sm">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-ink/50 mt-3 leading-relaxed">
              Each step requires Class 1 purity — Class 2 NPI cannot enter this chain.
            </p>
          </div>

          {/* LFP problem */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
              The LFP problem: the biggest forecast error in commodity markets
            </h3>
            <p className="text-base text-ink/80 leading-relaxed mb-4">
              LFP (Lithium Iron Phosphate) batteries contain{" "}
              <strong className="text-ink font-semibold">zero nickel</strong>. They use lithium,
              iron, and phosphate only. In 2020, most demand models assumed NMC would dominate EV
              batteries as range anxiety drove consumers toward high-energy-density chemistries.
              The reality has been completely different. LFP now represents approximately{" "}
              <strong className="text-ink font-semibold">
                65% of new EV battery production globally
              </strong>
              , up from roughly 30% in 2020. CATL's cell-to-pack technology (which improved LFP
              energy density by 30% without changing chemistry) and BYD's Blade Battery have made
              LFP competitive even in mid-range vehicles.
            </p>
            <p className="text-base text-ink/80 leading-relaxed">
              The result: the weighted average nickel content per EV has fallen from ~35 kg Ni in
              2021 EV demand models to approximately 15–18 kg today, because 65% of new batteries
              contain zero nickel. Battery nickel demand is still growing in absolute terms (more
              EVs = more total nickel demand even at lower per-vehicle intensity), but it is
              growing much slower than 2021 forecasts projected — approximately 35–40% slower in
              the IEA's revised models.
            </p>
          </div>

        </div>

        {/* Battery comparison table */}
        <div className="overflow-x-auto rounded-xl border border-bdr mb-10">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-bdr">
                {["Battery type", "Nickel content", "Pack size (example)", "Ni per EV at 65 kWh", "Ni cost at $15.5k/t"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {batteryRows.map((row, i) => (
                <tr
                  key={row.type}
                  className={`border-b border-bdr last:border-0 transition-colors hover:bg-white/80 ${
                    row.zero
                      ? "bg-red-50/40"
                      : i % 2 === 0 ? "bg-white/40" : "bg-white/10"
                  }`}
                >
                  <td className="px-5 py-4 font-medium text-ink align-top whitespace-nowrap">{row.type}</td>
                  <td className={`px-5 py-4 font-mono align-top ${row.zero ? "text-red-400 font-semibold" : "text-ink/80"}`}>
                    {row.nickel}
                  </td>
                  <td className="px-5 py-4 text-ink/70 align-top">{row.pack}</td>
                  <td className="px-5 py-4 font-mono text-ink/80 align-top">{row.perEv}</td>
                  <td className={`px-5 py-4 font-mono align-top ${row.zero ? "text-red-400 font-semibold" : "text-li font-semibold"}`}>
                    {row.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Solid-state */}
        <div className="max-w-[1600px">
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
            Solid-state batteries: NMC's potential recovery
          </h3>
          <p className="text-base text-ink/80 leading-relaxed">
            Solid-state batteries (which replace the liquid electrolyte with a solid) are the main
            technology that could restore NMC's market position. Solid-state enables
            higher-nickel cathodes with better thermal stability — theoretically allowing NMC
            9½+ cathodes that would increase nickel content per kWh rather than decrease it.
            Toyota, Samsung SDI, and Solid Power are targeting solid-state production in the
            2027–2030 window. If solid-state succeeds commercially, it is bullish for Class 1
            nickel demand. If it underdelivers (the more likely scenario before 2030), LFP
            continues its march.
          </p>
        </div>

      </div>
    </section>
  );
}