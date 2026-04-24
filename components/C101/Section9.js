// components/sections/BullBearSection.jsx

const bullPoints = [
  "At $15,500/t, 23% of global nickel supply operates below AISC. New Caledonia's crisis has removed 120–150kt of production that is not coming back until prices recover materially.",
  "Indonesia's government has an interest in supporting HPAL economics and is signalling RKAB tightening. LME warehouse stocks are declining on an 8-week trend.",
  "Battery maker demand for Class 1 is growing every year regardless of LFP's gains, because total EV volumes are rising.",
  "The world needs 2–3× more nickel by 2035 for electrification targets. No new sulphide mine of scale has taken FID since prices collapsed.",
  "The pipeline of development-stage projects requires $20,000–$25,000/t to attract financing. The incentive price is significantly above current spot.",
  "Institutional forecasters say 2028–2029 for deficit — at that point, LME nickel must rise to the incentive level.",
];

const bearPoints = [
  "Indonesian RKEF NPI production at $7,000–$9,000/t AISC is profitable at current LME prices. Unlike lithium's lepidolite, Indonesian RKEF operators are making money — no economic pressure to curtail.",
  "The self-correction mechanism is only active at the expensive fringe (New Caledonia, some Canadian sulphide). 77% of global supply faces no pressure to reduce output.",
  "Indonesia's HPAL build-out adds Class 1 supply on top of RKEF Class 2, creating a scenario where Indonesia floods both markets simultaneously.",
  "LFP continues to compress battery demand growth. If LFP reaches 70–75% of new EV batteries by 2028, the nickel demand growth thesis weakens further.",
  "RKAB is subject to political winds in Indonesia — a country with its own industrial interests and no obligation to manage the global nickel price for Canadian or Australian miners.",
  "Timing risk is severe: every year the deficit is delayed is another year of capital erosion for investors who sized in early.",
];

export default function BullBearSection() {
  return (
    <section className="bg-white py-16 md:py-20" id="bull-bear">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 9
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
          Bull Case vs Bear Case — Both Sides Fairly
        </h2>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          Most nickel analysis you will read is written by someone with a position. Miners write
          bullish press releases. Short-sellers write bearish reports. The strongest version of
          each argument is worth understanding, because the market is genuinely uncertain right
          now and both sides have real evidence.
        </p>

        {/* Two-column bull / bear */}
        <div className="grid gap-6 lg:grid-cols-2 mb-10">

          {/* Bull */}
          <div className="rounded-xl border border-grn/30 bg-grn-bg/30 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">📈</span>
              <p className="text-sm font-bold text-grn uppercase tracking-wider">
                The strongest bull case
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {bullPoints.map((pt, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink/80 leading-relaxed">
                  <span className="text-grn flex-shrink-0 mt-0.5 font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bear */}
          <div className="rounded-xl border border-red-200 bg-red-50/40 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">📉</span>
              <p className="text-sm font-bold text-red-500 uppercase tracking-wider">
                The strongest bear case
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {bearPoints.map((pt, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink/80 leading-relaxed">
                  <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold">✗</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Warning callout */}
        <div className="flex gap-4 items-start bg-[#FFFBEB] border border-[#FCD34D]/50 rounded-xl p-5 md:p-6 max-w-[1600px">
          <span className="text-xl leading-none mt-0.5 shrink-0" aria-hidden="true">⚠️</span>
          <div>
            <p className="font-semibold text-ink text-sm mb-1.5">The forecast graveyard</p>
            <p className="text-sm text-ink/80 leading-relaxed">
              In 2021, major analysts forecast nickel remaining above $25,000/t through 2025 on
              structural EV demand. In 2022, they forecast $20,000+. In 2023, they forecast
              $18,000. In 2024, they forecast a recovery to $16,000 by end-2025. Current
              consensus: $17,000–$19,000/t by end-2027. Each successive forecast has been less
              bullish and pushed further into the future. This history does not mean the current
              forecast is wrong — but it does mean it should be held with explicit uncertainty
              and position-sized accordingly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}