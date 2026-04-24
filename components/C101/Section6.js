import React from 'react';

const IndonesiaArticle = () => {
  return (
    <section className="py-12 bg-[#F4F7F4]" id="indonesia">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section 6
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          Indonesia: How One Country Took Over Global Nickel Supply
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          No single country has dominated a major commodity market the way Indonesia has come to
          dominate nickel in the past decade. Understanding how this happened, what sustains it,
          and what could disrupt it is the single most important analytical question in nickel
          investing.
        </p>

        {/* H3 — Ore export ban */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The ore export ban: one policy decision that changed everything
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Indonesia's government banned raw laterite nickel ore exports in January 2020 (a more
          permanent version of a ban first attempted in 2014 before being reversed). The policy
          rationale: force downstream processing investment inside Indonesia rather than exporting
          raw ore value to China. The result exceeded all expectations. Chinese stainless steel
          companies — led by Tsingshan — poured tens of billions of dollars into RKEF smelter
          complexes at{' '}
          <strong className="text-ink">Morowali Industrial Park (IMIP)</strong> and{' '}
          <strong className="text-ink">Weda Bay Industrial Park (IWIP)</strong>. Within five
          years, Indonesia went from exporting ore to China to exporting processed NPI and
          ferronickel at scale.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          Between 2017 and 2024, Indonesian nickel output grew by{' '}
          <strong className="text-ink">approximately 680%</strong> — from roughly 230,000 tonnes
          Ni content to 1,800,000 tonnes. No other single-country supply shift has had a
          comparable effect on a major commodity market in the same period. This supply surge is
          the primary reason LME nickel is at $15,500/t rather than the $25,000–$30,000/t that
          pre-2020 demand models projected.
        </p>

        {/* Stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bdr rounded-[10px] overflow-hidden mb-8">
          {[
            { value: "680%",     color: "text-[#F97316]", label: "Output growth 2017–2024",   sub: "230kt → 1,800kt Ni content"     },
            { value: "~55%",     color: "text-[#F97316]", label: "Indonesia global share",    sub: "Mine production 2024 (USGS)"    },
            { value: "Jan 2020", color: "text-muted",     label: "Ore export ban (permanent)", sub: "Forced domestic processing"    },
            { value: "40+",      color: "text-[#10B981]", label: "HPAL plants",               sub: "Announced/under construction"  },
          ].map((s, i) => (
            <div key={i} className="bg-white px-4 py-3.5 text-center">
              <p className={`text-[20px] font-medium leading-none mb-1 ${s.color}`}>{s.value}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-muted mb-0.5">{s.label}</p>
              <p className="text-[11px] text-ink3">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* H3 — RKAB */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          RKAB permits: Indonesia's throttle valve on world supply
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Every Indonesian nickel mine must have an approved annual RKAB (Rencana Kerja dan
          Anggaran Biaya) work plan. The government uses these approvals to control total output.
          In 2025, RKAB quotas were tightened below 2024 levels as part of Indonesia's strategy
          to protect the economics of its own HPAL plants (which need higher nickel prices than
          RKEF to be profitable). This is the single most important geopolitical variable in the
          global nickel market. Any meaningful tightening of RKAB approvals would materially
          change the surplus timeline. Any loosening would extend it.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          For investors, RKAB is both a risk and an opportunity. It is a risk because it
          represents arbitrary policy interference in supply. It is an opportunity because if
          Indonesia decides — as it has signalled it may — to restrain supply growth to ensure
          HPAL investment returns, the nickel price recovery arrives earlier than the base case
          projects.
        </p>

        {/* RKAB callout */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 mb-8 bg-amb-bg border border-[rgba(217,119,6,0.25)]">
          <span className="text-[16px] flex-shrink-0 mt-0.5">⚙</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              RKAB: the variable most analysts underweight
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              Most nickel supply models treat Indonesian output as a smooth extrapolation of
              past growth. RKAB quotas can step-change that trajectory in either direction
              within a single quarter. Watch for Indonesian MEMR announcements, particularly
              around October–November when quotas for the following year are typically set.
              A 10% reduction in RKAB quotas would remove approximately 180kt of supply — more
              than the current annual surplus.
            </p>
          </div>
        </div>

        {/* H3 — HPAL */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The HPAL revolution: Indonesia going Class 1
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The next chapter of Indonesia's nickel dominance is HPAL. HPAL (High-Pressure Acid
          Leach) converts limonite laterite ore — which can only produce Class 2 NPI via RKEF —
          into MHP (Mixed Hydroxide Precipitate), a Class 1 battery-grade intermediate product.
          Indonesia has approximately{' '}
          <strong className="text-ink">
            40 HPAL plants announced or under construction
          </strong>
          , of which approximately 8 are operating at time of writing. Key operators include
          Huafei, Harita, and QMB (a JV involving CATL and Zhejiang Huayou). When these plants
          ramp to full capacity, Indonesia becomes the dominant global source of both Class 2 and
          Class 1 nickel — directly supplying the EV battery supply chain from the world's
          largest laterite resource base.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          This transformation has profound implications for Class 1 pricing: if Indonesia's HPAL
          plants produce at lower AISC than sulphide-based Class 1 producers (the economic test
          is approximately $10,000–$14,000/t HPAL vs $9,000–$18,000/t sulphide, so HPAL is
          cheaper for lower-cost operators), the Class 1 premium may permanently compress as
          Indonesian laterite replaces sulphide as the marginal Class 1 producer.
        </p>

        {/* HPAL vs RKEF comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <div className="bg-white border border-bdr border-l-[3px] border-l-[#EF5350] rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-[.1em] text-[#EF5350] mb-2">
              RKEF — Class 2 NPI
            </p>
            <p className="text-[13px] text-ink3 leading-[1.65] mb-2">
              Processes saprolite laterite. Output: NPI 8–12% Ni. Used in stainless steel.
              Cannot enter EV battery supply chain.
            </p>
            <p className="text-[12px] font-semibold text-ink">
              AISC: ~$4,000–$7,000/t · Profitable at $15,500 LME
            </p>
          </div>
          <div className="bg-white border border-bdr border-l-[3px] border-l-[#10B981] rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-[.1em] text-[#10B981] mb-2">
              HPAL — Class 1 MHP
            </p>
            <p className="text-[13px] text-ink3 leading-[1.65] mb-2">
              Processes limonite laterite. Output: MHP 35%+ Ni+Co. Battery-grade Class 1.
              Feeds NMC cathode precursor supply chain.
            </p>
            <p className="text-[12px] font-semibold text-ink">
              AISC: ~$10,000–$14,000/t · Marginal at $15,500 LME
            </p>
          </div>
        </div>

        {/* H3 — New Caledonia */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          New Caledonia's crisis: the cost curve in action
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          New Caledonia is a French territory with substantial laterite nickel resources but AISC
          of $14,000–$20,000/t — among the most expensive nickel in the world. By 2024–2025,
          three major operations had suspended or entered administration:{' '}
          <strong className="text-ink">SLN (Société Le Nickel)</strong>,{' '}
          <strong className="text-ink">Koniambo Nickel SAS</strong>, and{' '}
          <strong className="text-ink">Prony Resources</strong>. Political unrest
          (independence-related violence and mine blockades) compounded the economic pressure
          from low prices. The closures collectively removed approximately 120–150kt of annual
          supply — the largest single-country production loss of the current price cycle. New
          Caledonian production is unlikely to return at scale unless LME prices recover
          sustainably above $18,000/t.
        </p>

        {/* New Caledonia callout */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-red-bg border border-[rgba(192,57,43,0.18)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚠</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              New Caledonia: 120–150kt of permanent supply reduction
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              Unlike cyclical curtailments that restart when prices recover, New Caledonia's
              closures involve shuttered plants, redundant workforces, and deteriorating
              infrastructure. Koniambo's restart would require hundreds of millions in
              recommissioning capex — not viable below $18,000–$20,000/t. This supply loss is
              increasingly being treated by analysts as structural, not temporary — which
              meaningfully tightens the long-run supply model.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndonesiaArticle;