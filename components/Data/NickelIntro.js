import React from 'react';

const TAKEAWAYS = [
  <>
    <strong className="text-ink">LME nickel</strong> is trading at approximately{' '}
    <strong className="text-ink">$15,500/t ($7.03/lb)</strong> as of April 2026 — down 85% from
    the March 2022 short squeeze high of $101,365, and down 45% from the pre-squeeze fundamental
    peak of $28,400/t.
  </>,
  <>
    <strong className="text-ink">Indonesia produces ~55%</strong> of global nickel mine supply
    (2024, USGS) — a 680% increase since 2017, driven by RKEF NPI smelting and now expanding
    HPAL plants. No other country comes close.
  </>,
  <>
    Nickel trades as two fundamentally different products:{' '}
    <strong className="text-ink">Class 1</strong> (LME-deliverable, ≥99.8% pure — used in EV
    batteries) and <strong className="text-ink">Class 2</strong> (NPI, ferronickel — used in
    stainless steel). Current Class 1 premium: +$2,300/t.
  </>,
  <>
    <strong className="text-ink">Stainless steel accounts for ~70%</strong> of global nickel
    demand. Battery demand is growing but still only ~9% of total. The LFP shift (LFP batteries
    contain zero nickel) is reducing battery demand growth below 2021 forecasts.
  </>,
  <>
    The nickel market is in{' '}
    <strong className="text-ink">significant surplus</strong> — approximately −250kt in 2024 —
    driven by Indonesian supply growth outpacing demand. Consensus projects the surplus persisting
    through 2026–2027, with a potential deficit emerging 2028–2029.
  </>,
  <>
    At $15,500/t, approximately{' '}
    <strong className="text-ink">23% of global supply</strong> (primarily New Caledonia and
    high-cost operations) is operating below its estimated AISC. New Caledonia's SLN and Koniambo
    suspended operations in 2024–2025 — the cost curve mechanism in action.
  </>,
];

const KEY_FACTS = [
  { value: "$15,500/t", valueColor: "text-[#15803D]", label: "LME Spot",         src: "$7.03/lb · LME settlement"   },
  { value: "$13,200/t", valueColor: "text-[#EF5350]", label: "NPI (China)",       src: "Class 2 · SMM daily"          },
  { value: "~70%",      valueColor: "text-[#64748B]", label: "Stainless demand",  src: "Of total nickel use"          },
  { value: "~55%",      valueColor: "text-[#F97316]", label: "Indonesia share",   src: "Global mine production"       },
  { value: "−250kt",    valueColor: "text-[#C0392B]", label: "2024 surplus",      src: "Supply minus demand"          },
  { value: "2028–29",   valueColor: "text-[#1A7A4A]", label: "Deficit expected",  src: "IEA/BNEF consensus"           },
];

const TOC_LINKS = [
  { href: "#prices",      label: "Prices today"          },
  { href: "#class-split", label: "Class 1 vs Class 2"    },
  { href: "#lme-stocks",  label: "LME warehouse stocks"  },
  { href: "#indonesia",   label: "Indonesia supply"       },
  { href: "#supply",      label: "Supply by country"      },
  { href: "#pipeline",    label: "Project pipeline"       },
  { href: "#stainless",   label: "Stainless demand"       },
  { href: "#battery",     label: "Battery demand"         },
  { href: "#forecast",    label: "Price forecast"         },
  { href: "#balance",     label: "Supply vs demand"       },
  { href: "#producers",   label: "Major producers"        },
  { href: "#history",     label: "Price history"          },
  { href: "#drivers",     label: "Price drivers"          },
  { href: "#cost-curve",  label: "Cost curve"             },
  { href: "#calc",        label: "Calculator"             },
  { href: "#faq-section", label: "FAQ"                    },
];

const NickelIntro = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col gap-4">

      {/* ── Key Takeaways ── */}
      <div className="bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.22)] rounded-[14px] px-6 py-5">
        <p className="text-[11px] font-bold uppercase tracking-[.12em] text-accent-bright mb-3">
          Key Takeaways
        </p>
        <ul className="list-none p-0 m-0">
          {TAKEAWAYS.map((item, i) => (
            <li
              key={i}
              className={`flex gap-2.5 text-[13px] text-ink3 leading-[1.65] py-1.5
                ${i !== TAKEAWAYS.length - 1 ? "border-b border-[rgba(34,197,94,0.12)]" : ""}`}
            >
              <span className="text-[#22C55E] flex-shrink-0 mt-0.5">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Key Facts ── */}
      <div className="bg-white border border-bdr rounded-[14px] px-5 py-4" id="what-is-nickel">
        <p className="text-[10px] font-bold uppercase tracking-[.12em] text-muted mb-3">
          Nickel at a glance — April 2026
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {KEY_FACTS.map((kf, i) => (
            <div key={i} className="text-center px-2 py-2">
              <p className={`text-[18px] font-medium leading-[1.1] mb-0.5 ${kf.valueColor}`}>
                {kf.value}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[.06em] text-muted">
                {kf.label}
              </p>
              <p className="text-[9px] text-muted mt-0.5">{kf.src}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Jump to section TOC ── */}
      <div className="bg-white border border-bdr rounded-[14px] px-5 py-4">
        <p className="text-[10px] font-bold uppercase tracking-[.1em] text-muted mb-3">
          Jump to section
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-0.5">
          {TOC_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] text-[#15803D] py-[3px] block hover:underline"
            >
              ↳ {link.label}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NickelIntro;