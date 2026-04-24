// components/sections/StainlessDemandSection.jsx

export default function StainlessDemandSection() {
  return (
    <section className="bg-white py-16 md:py-20" id="stainless">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 7
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
          Stainless Steel: Still 70% of Global Nickel Demand
        </h2>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          The EV narrative has been so loud for so long that many investors genuinely think nickel
          is primarily a battery metal. It isn't. Stainless steel accounts for approximately 70%
          of demand and will remain dominant through 2030 in every credible demand model. If
          you've been underweighting what China's stainless mills are doing, you've been missing
          the main driver.
        </p>

        <div className="grid gap-6 md:gap-8 max-w-[1600px]">

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
              Why nickel is in stainless steel
            </h3>
            <p className="text-base text-ink/80 leading-relaxed">
              The corrosion resistance of stainless steel comes primarily from its chromium content
              (minimum 10.5%), but it is nickel that gives 300-series stainless its characteristic
              ductility, formability, and resistance to both oxidising and reducing environments.
              Without nickel, 300-series stainless steel ceases to be austenitic — the crystal
              structure that makes it useful for food processing equipment, medical devices,
              chemical plants, and architectural applications. There is no substitute for nickel in
              the applications that need 304 or 316 stainless.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
              China's dominance of stainless production
            </h3>
            <p className="text-base text-ink/80 leading-relaxed">
              China produces approximately 32 million tonnes of stainless steel per year, roughly
              60% of global output. Chinese stainless production runs predominantly on{" "}
              <strong className="text-ink font-semibold">NPI</strong> (approximately 70% of
              Chinese stainless nickel input is NPI rather than refined LME nickel). This means
              the LME nickel price has a weaker direct link to Chinese stainless demand than it
              does to battery demand. When Chinese stainless is weak (construction slowdown,
              export restrictions), Chinese NPI demand falls — lowering the NPI price, narrowing
              the Class 1 premium, and putting indirect downward pressure on LME.{" "}
              <strong className="text-ink font-semibold">
                The strongest single macro driver of nickel demand remains Chinese construction
                and manufacturing activity.
              </strong>
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
              The 300-series vs 200-series substitution threat
            </h3>
            <p className="text-base text-ink/80 leading-relaxed">
              300-series stainless (304, 316) contains 8–14% nickel. 200-series stainless (used in
              lower-cost applications like budget cookware and construction fixtures) substitutes
              manganese for nickel, containing only 1–5% nickel. China has been gradually
              increasing 200-series production share — a structural drag on nickel intensity per
              tonne of stainless produced. This substitution effect means that even if Chinese
              stainless output grows at 3–4% annually, nickel demand from stainless may grow at
              only 1–2% due to declining nickel content per tonne. This is a genuine long-term
              demand headwind that stainless-focused nickel demand models need to account for.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
              Duplex stainless: the high-performance segment
            </h3>
            <p className="text-base text-ink/80 leading-relaxed">
              Duplex stainless steel (2205, 2507) uses 4–7% nickel but offers superior corrosion
              resistance and strength compared to standard 304. Its share is growing in oil and
              gas equipment, marine applications, and chemical processing. Duplex is less
              nickel-intensive per tonne than 300-series but commands a significant price premium
              — the economics are structurally different from commodity stainless. For nickel
              demand modelling, the share shift between 300-series, 200-series, and duplex is a
              variable that most simple forecasts undermodel.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}