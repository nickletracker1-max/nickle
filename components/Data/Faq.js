// components/sections/NickelFaqSection.jsx
"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is the nickel price today?",
    a: "LME nickel is trading at approximately $15,500/t ($7.03/lb) as of April 2026. Chinese NPI (nickel pig iron, Class 2) is approximately $13,200/t equivalent. These are the two key price benchmarks. LME is the Class 1 exchange-traded price; NPI is the main Chinese domestic indicator. See the live charts above for current readings.",
  },
  {
    q: "Why did nickel hit $101,000/t in March 2022?",
    a: "The March 8, 2022 spike to $101,365/t was a short squeeze, not a fundamental supply shortage. Tsingshan Holdings, the world's largest nickel producer, held a massive short position on the LME (estimated 150,000+ tonnes). When the nickel price rose due to Russia/Ukraine sanctions concerns, Tsingshan faced enormous margin calls. As it scrambled to cover, the price spiked exponentially. The LME controversially cancelled ~$3.9B in executed trades and halted the market for 8 days. The pre-squeeze fundamental price peak was approximately $28,400/t — a more realistic reflection of supply-demand conditions. The $101k figure should not be used as a reference price for fair-value analysis.",
  },
  {
    q: "What is Class 1 vs Class 2 nickel?",
    a: "Class 1 nickel is high-purity (≥99.8% Ni) refined metal approved for delivery against LME contracts. It can be used in both stainless steel and EV battery applications. Sources: sulphide mining (Norilsk, Vale, Wyloo), MHP from HPAL processing. Class 2 is lower-grade products — NPI (nickel pig iron, 8–15% Ni) and ferronickel — used primarily in stainless steel but not LME-deliverable and not suitable for battery cathode precursors. The Class 1 premium over Class 2 (currently ~$2,300/t) reflects the battery and LME-specific demand for pure nickel.",
  },
  {
    q: "What is NPI (nickel pig iron)?",
    a: "NPI is a low-grade ferronickel alloy (8–15% nickel content) produced by smelting laterite ore in blast furnaces (RKEF — Rotary Kiln Electric Furnace process). It was pioneered in China as a cheap alternative to importing refined nickel for stainless steel production. Indonesia built massive RKEF capacity after its 2020 ore export ban, making NPI production in Indonesia (rather than importing ore to China for processing) the dominant supply route. NPI is Class 2 — it cannot be used for battery cathodes or delivered against LME contracts.",
  },
  {
    q: "What is HPAL and why does it matter?",
    a: "HPAL (High-Pressure Acid Leach) is a processing technology that treats limonite laterite ore with sulphuric acid under high pressure and temperature to extract nickel and cobalt. The output is MHP (Mixed Hydroxide Precipitate) — a Class 1 intermediate product that can be refined into nickel sulphate for EV battery cathodes. HPAL matters because it creates a Class 1 pathway from laterite ore (previously only yielding Class 2 NPI). Indonesia is building ~40 HPAL plants, which will dramatically increase Class 1 supply from Indonesian laterite, potentially narrowing the Class 1 premium and supplying battery demand from the world's largest laterite resource base.",
  },
  {
    q: "Is nickel in surplus or deficit right now?",
    a: "Nickel is in significant surplus as of April 2026. The IEA estimates the 2024 surplus at approximately −250kt, narrowing to −180kt in 2025 and −120kt in 2026. The surplus is primarily driven by Indonesian NPI production growing faster than stainless and battery demand. The consensus of major institutions (IEA, BNEF, BMI, Wood Mackenzie) projects the surplus persisting through 2026–2027, with potential deficit emerging in 2028–2029 if Indonesian production growth slows and EV demand (particularly NMC) accelerates. This is a deeper and longer-duration surplus than lithium's, making the recovery timeline less clear.",
  },
  {
    q: "Does LFP vs NMC battery shift affect nickel?",
    a: "Yes — significantly. LFP batteries contain zero nickel — the nickel battery chemistry threat is entirely from NMC/NCA displacement. NMC batteries contain 28–55 kg of nickel per EV depending on the specific chemistry. As LFP's share of EV battery production has risen from ~30% in 2020 to ~65% in 2024, the weighted average nickel content per EV has fallen sharply. Battery demand models published in 2021 assumed NMC would dominate, driving rapid nickel demand growth. The LFP shift has reduced the nickel demand growth forecast by approximately 35% vs those original models — a major contributor to the current surplus. If NMC 811 and ultra-high nickel chemistries gain share in premium long-range EVs, this headwind could partially reverse.",
  },
  {
    q: "What happened to New Caledonia's nickel industry?",
    a: "New Caledonia's nickel industry entered acute crisis in 2024–2025. Three major operations — SLN (Société Le Nickel), Koniambo Nickel, and Prony Resources — suspended operations or entered administration due to unsustainable costs at current LME prices. New Caledonia's laterite operations have AISC of approximately $14,000–$20,000/t — most of which is above the current $15,500 spot price. The closures collectively removed approximately 120–150kt of annual nickel production. This is the cost curve mechanism at work: high-cost operations cannot survive below their AISC for extended periods. The crisis was exacerbated by political unrest in 2024 that disrupted operations further.",
  },
  {
    q: "What is the nickel price per pound today?",
    a: <>LME nickel is approximately <strong className="text-ink font-semibold">$7.03 per pound</strong> as of April 2026, based on LME official settlement of $15,500 per metric tonne ($15,500 ÷ 2,204.6 lb/t = $7.03/lb). The March 2022 short squeeze peak reached approximately $45.95/lb at the $101,365 intraday high. Use the calculator above to convert any LME price to per-lb, per-kg, or per-troy-oz equivalents.</>,
  },
  {
    q: "What is nickel used for?",
    a: <>Nickel uses span three major categories: (1) <strong className="text-ink font-semibold">Stainless steel (~70%)</strong> — 300-series SS contains 8–14% nickel for corrosion resistance, used in kitchens, hospitals, construction, and industrial equipment; (2) <strong className="text-ink font-semibold">EV batteries (~9%, growing)</strong> — NMC and NCA battery cathodes use nickel for energy density. NMC 811 has 80% nickel in the cathode; (3) <strong className="text-ink font-semibold">Superalloys, plating, alloys (~21%)</strong> — jet engine components, gas turbines, electroplating. Without nickel, 300-series stainless steel does not exist, and high-energy EV batteries require it.</>,
  },
  {
    q: "How can I invest in nickel?",
    a: <>Options for US retail investors: (1) <strong className="text-ink font-semibold">REMX ETF</strong> (VanEck Rare Earth/Strategic Metals, 0.53%/yr) — partial nickel exposure via critical minerals. No pure-play nickel ETF exists. (2) <strong className="text-ink font-semibold">Vale (NYSE: VALE)</strong> — most accessible Class 1 nickel producer for US investors. (3) <strong className="text-ink font-semibold">BHP (NYSE: BHP ADR) and Glencore (OTC: GLNCY)</strong> — nickel alongside other metals. (4) <strong className="text-ink font-semibold">Junior miners</strong> (TSX.V: CNC, FPX, TLO) — high leverage to price recovery with development risk. No physical nickel market exists for retail investors. For more, see our <a href="/nickel-investing-101/" className="text-li underline underline-offset-2 hover:opacity-80 transition-opacity">Nickel 101 guide</a>.</>,
  },
  {
    q: "What is the nickel price forecast for 2027?",
    a: "Institutional 2027 forecasts: IEA $16,000–$20,000/t, BNEF $15,500–$19,000/t, Benchmark Mineral Intelligence $16,500–$21,000/t, Wood Mackenzie $15,000–$18,000/t. Base case consensus ~$17,000–$19,000/t, assuming the surplus narrows through 2026–2027 and a deficit begins to emerge. Bull scenario: RKAB tightening + NMC recovery → $20,000+. Bear scenario: unchecked Indonesian growth + LFP dominance → range-bound $12,000–$15,000.",
  },
  {
    q: "What is the NPI nickel price in China today?",
    a: <>Chinese NPI (Nickel Pig Iron) is priced at approximately <strong className="text-ink font-semibold">$13,200 per tonne Ni content</strong> as of April 2026 (SMM daily assessment). NPI is quoted in Chinese yuan per nickel unit on SHFE and converted to USD/t for comparison with LME. NPI is Class 2 — it cannot be delivered against LME contracts and is not suitable for EV battery precursors. The $2,300/t discount to LME reflects these limitations. NPI price is published by SMM (Shanghai Metals Market) daily at approximately 09:00 Beijing time.</>,
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-bdr last:border-0">
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base font-semibold text-ink group-hover:text-li transition-colors leading-snug">
          {q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-bdr flex items-center justify-center text-ink/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[800px] pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-base text-ink/75 leading-relaxed pr-10">{a}</p>
      </div>
    </div>
  );
}

export default function NickelFaqSection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="faq-section" aria-label="Frequently asked questions">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          FAQ
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-10 leading-snug">
          Nickel Market FAQ
        </h2>

        <div className="bg-white rounded-xl border border-bdr divide-y divide-bdr px-6 md:px-8">
          {faqs.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

      </div>
    </section>
  );
}