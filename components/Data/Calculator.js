// components/sections/NickelCalculatorSection.jsx
"use client";

import { useState, useCallback } from "react";

const LBS_PER_TONNE = 2204.6;
const KG_PER_TONNE = 1000;
const TROY_OZ_PER_TONNE = 32150.75;

const referenceRows = [
  { unit: "1 tonne Ni metal", value: "$15,500", factor: "Base unit (LME)" },
  { unit: "1 lb (pound) Ni", value: "$7.03", factor: "÷ 2,204.6 lb/t" },
  { unit: "1 kg Ni", value: "$15.50", factor: "÷ 1,000 kg/t" },
  { unit: "1 troy ounce Ni", value: "$0.482", factor: "÷ 32,150.75 toz/t" },
  { unit: "1% Ni in 1t ore (100% recovery)", value: "$155", factor: "1% of $15,500" },
  { unit: "NPI 10% Ni, 1t product", value: "$1,550", factor: "10% × $15,500" },
  { unit: "MHP 35% Ni, 1t product", value: "$5,425", factor: "35% × $15,500" },
  { unit: "Nickel Sulphate (NiSO₄·6H₂O)", value: "~$4,850/t product", factor: "22.3% Ni content × $15,500 × factor" },
];

function fmt(n, decimals = 2) {
  return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function fmtCurrency(n) {
  if (n >= 1_000_000) return "$" + fmt(n / 1_000_000, 3) + "M";
  if (n >= 1_000)     return "$" + fmt(n, 0);
  return "$" + fmt(n, 2);
}

export default function Calculator() {
  // Price converter
  const [niPrice, setNiPrice]   = useState(15500);
  const [niUnit, setNiUnit]     = useState("lb");
  const [niQty, setNiQty]       = useState(1);

  // Ore calculator
  const [grade, setGrade]       = useState(1.5);
  const [tonnes, setTonnes]     = useState(1000);
  const [recovery, setRecovery] = useState(85);

  // Price conversion logic
  const { convertedPrice, convertedLabel, convertedUnit } = useCallback(() => {
    const price = Number(niPrice) || 0;
    const qty   = Number(niQty)   || 1;
    if (niUnit === "lb") {
      const perLb = price / LBS_PER_TONNE;
      return { convertedPrice: perLb * qty, convertedLabel: `LME $${fmt(price, 0)}/t = $${fmt(perLb)}/lb`, convertedUnit: "per lb" };
    }
    if (niUnit === "kg") {
      const perKg = price / KG_PER_TONNE;
      return { convertedPrice: perKg * qty, convertedLabel: `LME $${fmt(price, 0)}/t = $${fmt(perKg)}/kg`, convertedUnit: "per kg" };
    }
    const perToz = price / TROY_OZ_PER_TONNE;
    return { convertedPrice: perToz * qty, convertedLabel: `LME $${fmt(price, 0)}/t = $${fmt(perToz, 3)}/toz`, convertedUnit: "per troy oz" };
  }, [niPrice, niUnit, niQty])();

  // Ore value logic
  const recoverableNi    = (Number(tonnes) || 0) * (Number(grade) / 100) * (Number(recovery) / 100);
  const oreValue         = recoverableNi * (Number(niPrice) || 0);
  const oreSub           = `At LME $${fmt(Number(niPrice) || 0, 0)}/t · ${grade}% grade · ${recovery}% recovery`;

  const inputCls = "w-full bg-[#F4F7FB] border border-bdr rounded-lg px-3 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-li/30 focus:border-li transition-colors";
  const labelCls = "block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5";

  return (
    <section className="bg-white py-16 md:py-20" id="calc" aria-label="Nickel calculator section">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section M
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          Nickel Unit Conversion &amp; Value Calculator
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          Convert between LME price and common unit bases, or calculate the nickel content and
          value of a given quantity of ore, concentrate, or product.
        </p>

        <div className="bg-[#F4F7FB] rounded-xl border border-bdr p-6 md:p-8 flex flex-col gap-10">

          {/* ── Price Converter ── */}
          <div>
            <p className="text-sm font-bold text-ink mb-5">Price Converter</p>
            <div className="grid gap-4 sm:grid-cols-3 mb-5">
              <div>
                <label className={labelCls}>Nickel price (USD/t)</label>
                <input
                  type="number"
                  value={niPrice}
                  onChange={(e) => setNiPrice(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Unit to convert to</label>
                <select
                  value={niUnit}
                  onChange={(e) => setNiUnit(e.target.value)}
                  className={inputCls}
                >
                  <option value="lb">USD per pound (lb)</option>
                  <option value="kg">USD per kilogram (kg)</option>
                  <option value="oz_troy">USD per troy ounce</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Quantity (optional)</label>
                <input
                  type="number"
                  value={niQty}
                  onChange={(e) => setNiQty(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            {/* Result */}
            <div className="bg-ink rounded-xl px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-0.5">Converted price</p>
                <p className="text-xs text-white/50">{convertedLabel}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-2xl font-bold text-li">{fmtCurrency(convertedPrice)}</p>
                <p className="text-xs text-white/30">{convertedUnit}</p>
              </div>
            </div>
          </div>

          {/* ── Ore Value Calculator ── */}
          <div>
            <p className="text-sm font-bold text-ink mb-5">Ore Value Calculator</p>
            <div className="grid gap-4 sm:grid-cols-3 mb-5">
              <div>
                <label className={labelCls}>Ore grade (% Ni)</label>
                <input
                  type="number"
                  value={grade}
                  step="0.1"
                  min="0.1"
                  max="20"
                  onChange={(e) => setGrade(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Tonnes of ore</label>
                <input
                  type="number"
                  value={tonnes}
                  onChange={(e) => setTonnes(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Recovery rate (%)</label>
                <input
                  type="number"
                  value={recovery}
                  min="50"
                  max="98"
                  onChange={(e) => setRecovery(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            {/* Result */}
            <div className="bg-ink rounded-xl px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-0.5">Recoverable nickel value</p>
                <p className="text-xs text-white/50">{oreSub}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-2xl font-bold text-grn">{fmtCurrency(oreValue)}</p>
                <p className="text-xs text-white/30">{fmt(recoverableNi, 2)} t Ni recovered</p>
              </div>
            </div>
          </div>

          {/* ── Reference table ── */}
          <div>
            <p className="text-sm font-bold text-ink mb-4">
              Quick reference conversions at $15,500/t LME
            </p>
            <div className="overflow-x-auto rounded-xl border border-bdr">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-white border-b border-bdr">
                    {["Unit", "Value at $15,500/t", "Conversion factor"].map((h) => (
                      <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {referenceRows.map((row, i) => (
                    <tr
                      key={row.unit}
                      className={`border-b border-bdr last:border-0 transition-colors hover:bg-white/80 ${
                        i % 2 === 0 ? "bg-white/40" : "bg-white/10"
                      }`}
                    >
                      <td className="px-5 py-3.5 font-medium text-ink align-top">{row.unit}</td>
                      <td className="px-5 py-3.5 font-mono font-semibold text-li align-top">{row.value}</td>
                      <td className="px-5 py-3.5 text-ink/60 align-top">{row.factor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}