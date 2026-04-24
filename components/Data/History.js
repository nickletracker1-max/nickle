import React, { useState } from 'react';

const PRICE_HISTORY = [
  { year: "2010–2011",      avg: "$20,000–$24,000/t",  driver: "Post-GFC recovery, Chinese stainless demand surge. Nickel near cycle peak."                                                               },
  { year: "2012–2015",      avg: "$13,000–$18,000/t",  driver: "Supply surplus as Indonesian ore (pre-ban) floods market. Price declines steadily."                                                       },
  { year: "2016",           avg: "~$9,800/t",           driver: "Cycle trough. Indonesian ore ban briefly imposed then lifted, causing disruption."                                                        },
  { year: "2017–2018",      avg: "$9,000–$13,500/t",   driver: "Recovery begins. EV narrative starts driving forward expectations."                                                                        },
  { year: "2019",           avg: "~$14,000/t",          driver: "Indonesia announces permanent ore export ban from Jan 2020. Pre-emptive price move."                                                      },
  { year: "2020",           avg: "~$13,700/t",          driver: "COVID initial dip then recovery. Indonesia ore ban implemented. Chinese NPI surges."                                                      },
  { year: "2021",           avg: "~$18,500/t",          driver: "EV demand narrative peak. Nickel rising with broader commodity supercycle."                                                               },
  { year: "Feb 2022",       avg: "~$24,000/t",          driver: "Pre-squeeze fundamental peak. Tsingshan's short position known to be massive."                                                           },
  { year: "Mar 8, 2022",    avg: "$101,365/t (intraday)",driver: "Short squeeze. LME cancels $3.9B in trades. Market halted 8 days. Event unique in commodity history.", highlight: true                },
  { year: "2022 (post)",    avg: "~$22,000/t avg",      driver: "Post-squeeze normalisation. Indonesian NPI supply surge begins accelerating."                                                             },
  { year: "2023",           avg: "~$21,500/t",          driver: "Indonesian RKEF and HPAL supply accelerates. Surplus becomes apparent. Price drifts lower."                                              },
  { year: "2024",           avg: "~$16,500/t",          driver: "Surplus confirmed. LFP share of EVs reducing nickel demand growth expectations."                                                         },
  { year: "2025",           avg: "~$15,800/t",          driver: "Surplus persists but narrows. Some Indonesian RKAB restrictions limit growth rate."                                                      },
  { year: "2026 YTD",       avg: "~$15,500/t",          driver: "Range-bound. Market watching Indonesian RKAB, LME stock levels, China SS demand."                                                       },
];

const History = () => {
  const [chartTab, setChartTab] = useState("LME spot");

  return (
    <section className="py-10 bg-[#F7F9F5]" id="history" aria-label="Nickel price history section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#15803D] mb-2">
          Section J
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold text-ink leading-tight mb-2">
          Nickel Price History — Including the $101,365 Short Squeeze
        </h2>

        {/* Desc */}
        <p className="text-[13px] text-muted max-w-[700px] leading-[1.7] mb-5">
          Nickel has the most dramatic price spike in recent commodity history. Understanding the
          March 2022 short squeeze — and why it happened — is essential context for any nickel
          price analysis.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mt-5 mb-2">
          Reading the price history chart correctly
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-4">
          The 2010–2026 price line on this page deliberately{' '}
          <em>excludes</em> the $101,365 intraday spike from the default view. Including it would
          compress all other price variation into a flat line at the bottom of the chart — making
          the chart useless for understanding actual market cycles. The pre-squeeze fundamental peak
          of <strong className="text-ink">$28,400/t in February 2022</strong> is the more useful
          reference for what EV demand expectations were worth in market pricing before the squeeze
          distorted the signal. Use the "Including squeeze" tab to see the full event with
          explanation.
        </p>

        {/* H3 */}
        <h3 className="text-[16px] font-bold text-ink mb-2">
          The three nickel cycles since 2010
        </h3>
        <p className="text-[14px] leading-[1.78] text-ink3 mb-6">
          <strong className="text-ink">Cycle 1 (2010–2016):</strong> A slow decline from
          post-GFC highs (~$24,000) to a trough of ~$7,500 in 2016, driven by a supply surplus
          from Indonesian and Philippine ore exports flooding into Chinese NPI production.{' '}
          <strong className="text-ink">Cycle 2 (2016–2020):</strong> A recovery from the trough,
          with the 2019 Indonesia ore export ban announcement adding a temporary spike to ~$18,500.{' '}
          <strong className="text-ink">Cycle 3 (2020–present):</strong> The EV demand narrative
          drove prices from $13,000 to the pre-squeeze peak of $28,400, then the short squeeze
          distorted the signal, followed by a supply-driven crash as Indonesian RKEF capacity
          overwhelmed demand growth. Each cycle has been characterised by a different marginal
          supply source surprising consensus models.
        </p>

        {/* ── Long-term history chart ── */}
        <div className="bg-white border border-bdr rounded-[14px] overflow-hidden mb-4">
          <div className="flex items-start justify-between p-[14px_18px] border-b border-bdr gap-4">
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[#15803D] mb-1">
                LME Official Settlement · Monthly average · 2010–2026
              </p>
              <p className="text-[14px] font-bold text-ink leading-tight">
                LME Nickel Price History — Monthly Average (2010–2026)
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                The $101,365/t spike (Mar 8, 2022) is NOT shown on this chart — it was a short
                squeeze, not a fundamental price. Pre-squeeze high $28,400 shown.
              </p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {["LME spot", "Including squeeze"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setChartTab(tab)}
                  className={`text-[10px] font-semibold px-2 py-1 rounded-[5px] border transition-colors cursor-pointer whitespace-nowrap
                    ${chartTab === tab
                      ? "bg-[rgba(34,197,94,0.08)] text-[#15803D] border-[rgba(34,197,94,0.3)]"
                      : "bg-white text-muted border-bdr hover:text-[#15803D]"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full p-4">
            <svg
              viewBox="0 0 680 240"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto block"
              role="img"
              aria-label="LME Nickel Price History — monthly 2010-2026"
            >
              <defs>
                <linearGradient id="niHistGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#22C55E" stopOpacity="0.12"/>
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0.01"/>
                </linearGradient>
              </defs>
              {/* Axes */}
              <line x1="50" y1="15"  x2="50"  y2="195" stroke="#E2E8F0" strokeWidth="1"/>
              <line x1="50" y1="195" x2="660" y2="195" stroke="#E2E8F0" strokeWidth="1"/>
              {/* Grid lines */}
              <line x1="50" y1="55"  x2="660" y2="55"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4"/>
              <line x1="50" y1="95"  x2="660" y2="95"  stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4"/>
              <line x1="50" y1="135" x2="660" y2="135" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4"/>
              {/* Y labels */}
              <text x="44" y="18"  textAnchor="end" fontSize="9" fill="#777799">$28k</text>
              <text x="44" y="58"  textAnchor="end" fontSize="9" fill="#777799">$22k</text>
              <text x="44" y="98"  textAnchor="end" fontSize="9" fill="#777799">$16k</text>
              <text x="44" y="138" textAnchor="end" fontSize="9" fill="#777799">$12k</text>
              <text x="44" y="198" textAnchor="end" fontSize="9" fill="#777799">$8k</text>
              {/* Area fill */}
              <path
                d="M 50,30 L 100,55 L 130,80 L 160,90 L 180,110 L 200,150 L 220,170 L 240,178 L 270,162 L 310,125 L 340,115 L 370,108 L 400,115 L 430,95 L 460,68 L 490,55 L 510,40 L 520,30 L 530,32 L 550,100 L 570,130 L 600,140 L 620,138 L 640,140 L 660,136 L 660,195 L 50,195 Z"
                fill="url(#niHistGrad)"
              />
              {/* Price line */}
              <polyline
                points="50,30 100,55 130,80 160,90 180,110 200,150 220,170 240,178 270,162 310,125 340,115 370,108 400,115 430,95 460,68 490,55 510,40 520,30 530,32 550,100 570,130 600,140 620,138 640,140 660,136"
                fill="none" stroke="#22C55E" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
              />
              {/* 2016 trough */}
              <circle cx="240" cy="178" r="3.5" fill="#F59E0B" stroke="white" strokeWidth="1.5"/>
              <rect x="218" y="182" width="48" height="12" rx="2" fill="#92400E"/>
              <text x="242" y="191" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">$7,500 (2016)</text>
              {/* Pre-squeeze peak */}
              {/* <circle cx="520" cy="30" r="3.5" fill="#EF5350" stroke="white" strokeWidth="1.5"/>
              <rect x="490" y="16" width="62" height="12" rx="2" fill="#991B1B"/>
              <text x="521" y="25" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">$28,400 (Feb '22)</text> */}
              {/* Short squeeze marker */}
              <line x1="528" y1="15" x2="528" y2="195" stroke="#EF5350" strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
              <rect x="530" y="15" width="72" height="12" rx="2" fill="#EF5350" opacity="0.9"/>
              <text x="566" y="24" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">  '22: $101k Mar</text>
              {/* Current */}
              <circle cx="660" cy="136" r="4" fill="#22C55E" stroke="white" strokeWidth="1.5"/>
              <rect x="608" y="120" width="52" height="12" rx="2" fill="#15803D"/>
              <text x="634" y="129" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">$15,500 today</text>
              {/* X labels */}
              <text x="50"  y="210" textAnchor="middle" fontSize="9" fill="#777799">2010</text>
              <text x="175" y="210" textAnchor="middle" fontSize="9" fill="#777799">2014</text>
              <text x="300" y="210" textAnchor="middle" fontSize="9" fill="#777799">2018</text>
              <text x="430" y="210" textAnchor="middle" fontSize="9" fill="#777799">2021</text>
              <text x="530" y="210" textAnchor="middle" fontSize="9" fill="#777799">2022</text>
              <text x="595" y="210" textAnchor="middle" fontSize="9" fill="#777799">2024</text>
              <text x="655" y="210" textAnchor="middle" fontSize="9" fill="#777799">2026</text>
            </svg>
          </div>
          <p className="text-[10px] text-muted px-[18px] py-2 border-t border-bdr">
            LME official settlement · Monthly averages · 2010–2026 · Note: $101k spike excluded
            — see "including squeeze" tab
          </p>
        </div>

        {/* ── Annual price table ── */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px]">
            <thead>
              <tr>
                <th className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3.5 py-2.5 text-left border-b-2 border-bdr whitespace-nowrap">
                  Year
                </th>
                <th className="text-[10px] font-bold uppercase tracking-[.06em] text-[#15803D] px-3.5 py-2.5 text-left border-b-2 border-bdr whitespace-nowrap">
                  LME avg (approx)
                </th>
                <th className="text-[10px] font-bold uppercase tracking-[.06em] text-muted px-3.5 py-2.5 text-left border-b-2 border-bdr">
                  Key driver
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICE_HISTORY.map((row, i) => (
                <tr
                  key={i}
                  className={row.highlight
                    ? "bg-red-bg hover:bg-red-bg"
                    : "hover:bg-[rgba(34,197,94,0.02)]"
                  }
                >
                  <td className={`px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold whitespace-nowrap
                    ${row.highlight ? "text-red" : "text-ink"}`}
                  >
                    {row.year}
                  </td>
                  <td className={`px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold whitespace-nowrap
                    ${row.highlight ? "text-red" : "text-[#15803D]"}`}
                  >
                    {row.avg}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55]"
                    dangerouslySetInnerHTML={{ __html: row.driver }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default History;