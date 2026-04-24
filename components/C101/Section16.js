// components/sections/NickelTaxesSection.jsx

const taxRows = [
  {
    investment: "REMX ETF shares",
    treatment: "Standard equity LTCG (0%/15%/20%)",
    holding: "Yes — >1yr = LTCG",
    notes: "Dividends may be qualified or ordinary. Check annual 1099-DIV.",
    accessible: true,
  },
  {
    investment: "Vale (NYSE: VALE)",
    treatment: "Standard equity LTCG",
    holding: "Yes",
    notes: "Brazilian dividends: 15% withholding under US-Brazil treaty. Creditable on Form 1116. Hold in taxable account to use credit.",
    accessible: true,
  },
  {
    investment: "BHP (NYSE: BHP ADR)",
    treatment: "Standard equity LTCG",
    holding: "Yes",
    notes: "Australian dividends: 15% withholding under US-Australia treaty. Creditable. ADR fee may apply (~$0.02/share/year).",
    accessible: true,
  },
  {
    investment: "Glencore (OTC: GLNCY)",
    treatment: "Standard equity LTCG",
    holding: "Yes",
    notes: "UK/Swiss registered. Dividends taxed per applicable treaty. OTC spread may be wide on thin days.",
    accessible: true,
  },
  {
    investment: "TSX.V juniors (e.g. CNC, FPX)",
    treatment: "Standard equity LTCG",
    holding: "Yes",
    notes: "Canadian companies. No withholding on capital gains under US-Canada treaty. Dividends rare at development stage.",
    accessible: true,
  },
  {
    investment: "Physical nickel",
    treatment: "N/A — no retail market",
    holding: "N/A",
    notes: "If hypothetically held, likely ordinary income on sale as a commodity. Irrelevant in practice.",
    accessible: false,
  },
];

export default function NickelTaxesSection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="taxes">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 16
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
          Nickel Investment Taxes — What US Investors Need to Know
        </h2>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          One underrated advantage of investing in nickel through equities rather than physical
          gold: the tax treatment is significantly better. Gold and silver held physically face a
          28% collectibles rate regardless of holding period. Nickel stocks and ETFs qualify for
          standard equity rates. Nobody talks about this enough.
        </p>

        {/* Tax table */}
        <div className="overflow-x-auto rounded-xl border border-bdr mb-12">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-bdr">
                {["Investment", "Tax treatment", "Holding >1yr?", "Notes"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {taxRows.map((row, i) => (
                <tr
                  key={row.investment}
                  className={`border-b border-bdr last:border-0 transition-colors hover:bg-white/80 ${
                    !row.accessible
                      ? "bg-[#F4F7FB]/80"
                      : i % 2 === 0 ? "bg-white/60" : "bg-white/20"
                  }`}
                >
                  <td className="px-5 py-4 font-medium text-ink align-top whitespace-nowrap">
                    {row.investment}
                  </td>
                  <td className={`px-5 py-4 align-top font-mono text-xs ${
                    row.accessible ? "text-grn font-semibold" : "text-ink/40"
                  }`}>
                    {row.treatment}
                  </td>
                  <td className="px-5 py-4 text-ink/70 align-top whitespace-nowrap">
                    {row.holding}
                  </td>
                  <td className="px-5 py-4 text-ink/70 align-top leading-relaxed">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vale withholding detail */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Vale's withholding tax: the detail people miss
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          Vale is a Brazilian company paying dividends in US dollars on its NYSE ADR. Brazil
          imposes a 15% withholding tax on dividends paid to US residents under the US-Brazil
          tax treaty. If you hold Vale in a taxable account, the 15% withheld is{" "}
          <strong className="text-ink font-semibold">creditable</strong> against your US tax
          liability via Form 1116. The effective US tax rate on Vale dividends is your marginal
          rate minus the 15% already withheld. However, if you hold Vale in an IRA or 401(k),
          the foreign tax credit mechanism is lost — the 15% is permanently sacrificed. For
          dividend-paying positions, taxable accounts may be preferable to retirement accounts
          for Brazilian or Australian mining stocks.
        </p>

        {/* Gold vs nickel tax comparison */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Nickel vs gold: the tax comparison
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-8 leading-relaxed">
          Physical gold ETFs (GLD, IAU) held by US investors are taxed at the{" "}
          <strong className="text-ink font-semibold">28% collectibles rate</strong> regardless
          of holding period — because physical gold is legally a collectible. REMX, Vale, and
          other nickel equity investments qualify for the standard 0%/15%/20% long-term capital
          gains rates. If you are comparing nickel and gold exposure for portfolio purposes,
          nickel wins the tax comparison by a significant margin at any income level above the
          15% bracket threshold. This advantage is often overlooked in commodity portfolio
          analysis.
        </p>

        {/* Visual comparison */}
        <div className="grid gap-4 sm:grid-cols-2 max-w-[1600px] mb-10">
          <div className="bg-grn-bg border border-grn/30 rounded-xl p-5 flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-grn">
              Nickel equities (REMX, VALE, BHP)
            </p>
            <p className="text-3xl font-bold text-grn">0–20%</p>
            <p className="text-sm text-ink/70 leading-relaxed">
              Standard long-term capital gains rate. 0% for lower brackets, 15% for most
              investors, 20% for top bracket. Holds &gt;1 year qualify.
            </p>
          </div>
          <div className="bg-red-50/60 border border-red-200 rounded-xl p-5 flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-red-400">
              Physical gold ETFs (GLD, IAU)
            </p>
            <p className="text-3xl font-bold text-red-400">28%</p>
            <p className="text-sm text-ink/70 leading-relaxed">
              Collectibles rate. Fixed regardless of holding period — 28% maximum whether held
              1 month or 10 years. Applies to all physically-backed precious metal ETFs.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-ink/50 italic max-w-[1600px]">
          This is general information, not tax advice. Consult a qualified tax advisor for your
          specific situation.
        </p>

      </div>
    </section>
  );
}