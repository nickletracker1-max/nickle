import React from "react";

const InvestmentHero = () => {
  return (
    <div className="relative bg-black w-full py-12">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(https://www.garfieldrefining.com/wp-content/uploads/2021/07/platinum-scaled.jpeg)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className="relative flex items-start overflow-hidden rounded-lg fade-in pt-[60px] md:pt-[80px]"
          style={{ height: "350px" }}
        >
          <div className="relative z-10 p-6 text-white max-w-2xl">
            <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent">
              Nickel Investments
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold my-4 cambay">
              Elevate Your Portfolio with{" "}
              <span className="text-white">Nickel Investment Strategies</span>
            </h1>

            <p className="text-sm md:text-base mb-10">
              Discover nickel investment opportunities through ETFs, mining
              stocks, and real-time market data. Nickel is the critical
              industrial metal behind stainless steel (70% of demand) and a
              growing share of EV battery cathodes — with supply dominated by
              Indonesia and pricing driven by LME dynamics.
            </p>

            <p className="text-xs text-gray-300">
              Track LME prices, Class 1 premiums, and major producers to build
              an informed nickel investment thesis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHero;
