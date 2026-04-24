import React from "react";

const TICKER_ITEMS = [
  { label: "LME NICKEL",       value: "$15,500/t",          change: "▲ +0.8%",    type: "up" },
  { label: "NPI (CHINA)",      value: "$13,200/t",          change: "▼ −0.3%",    type: "dn" },
  { label: "FERRONICKEL",      value: "$14,800/t",          change: "▲ +0.4%",    type: "up" },
  { label: "NICKEL SULPHATE",  value: "$4,850/t",           change: "▼ −0.6%",    type: "dn" },
  { label: "LME STOCKS",       value: "183,000 t",          change: "▼ Declining", type: "dn" },
  { label: "CLASS 1 PREMIUM",  value: "+$2,300/t",          change: "▼ Narrowing", type: "dn" },
  { label: "NORILSK (MCX)",    value: "GMKN",               change: "",           type: null },
  { label: "NI ATH",           value: "$101,365",           change: "Mar 2022",    type: null },
  { label: "UPDATED",          value: "Apr 22 2026",        change: "",           type: null },
];

const TickerItem = ({ label, value, change, type }) => (
  <>
    <span className="inline-flex items-center gap-2 text-[11px]">
      <span className="text-white/35 tracking-[.04em]">{label}</span>
      {value && (
        <span className="text-white text-[12px]">{value}</span>
      )}
      {change && (
        <span
          className={`text-[10px] font-bold ${
            type === "up" ? "text-[#4CAF50]" : type === "dn" ? "text-[#EF5350]" : "text-white/40"
          }`}
        >
          {change}
        </span>
      )}
    </span>
    <span className="text-white/15 text-sm">|</span>
  </>
);

const Ticker = () => {
  // Duplicate items for seamless infinite loop
  const allItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="bg-[#272729] border-b border-[rgba(3,6,12,0.15)] h-[40px] overflow-hidden relative  shadow-sm"
      aria-label="Live lithium market prices"
    >
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-[#0D1527] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-[#0D1527] to-transparent pointer-events-none" />

      {/* Scrolling track */}
      <div
        className="flex items-center gap-9 h-[34px] px-5 whitespace-nowrap animate-ticker"
        style={{ width: "max-content" }}
      >
        {allItems.map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Ticker;