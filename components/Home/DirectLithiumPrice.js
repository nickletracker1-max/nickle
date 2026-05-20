import React, { useState, useEffect } from "react";
import CardSkeleton from "@/components/CardSkeleton";

const DirectNickelPrice = () => {
  const [nickelData, setNickelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNickelPrice = async () => {
      try {
        setLoading(true);

        const response = await fetch('/api/cme-lithium-spot');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success || !data.data) {
          throw new Error('No CME nickel spot price data available - real data only');
        }

        const cmeData = data.data;

        setNickelData({
          price: parseFloat(cmeData.last_price),
          price_change: parseFloat(cmeData.price_change),
          price_change_percent: parseFloat(cmeData.price_change_percent),
          source: "CME Group",
          symbol: cmeData.globex_code,
          last_updated: cmeData.scraped_at
        });

      } catch (error) {
        console.error('Error fetching CME nickel spot price:', error);
        setError(error.message);
        setNickelData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNickelPrice();

    const interval = setInterval(fetchNickelPrice, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Nickel Price
        </h2>
        <CardSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Nickel Price
        </h2>
        <div className="text-center py-8 text-red-500">
          Error loading nickel price: {error}
        </div>
      </div>
    );
  }

  if (!nickelData) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Nickel Price
        </h2>
        <div className="text-center py-8 text-gray-500">
          No nickel price data available
        </div>
      </div>
    );
  }

  const { price, price_change, price_change_percent, source } = nickelData;

  const nickelSpotPrice = price > 1000
    ? price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    : price.toFixed(2);

  const change = parseFloat(price_change || 0);
  const formattedChange = Math.abs(change) > 1000
    ? Math.abs(change).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    : Math.abs(change).toFixed(2);

  const changePercentage = parseFloat(price_change_percent || 0).toFixed(2);

  return (
    <div className="text-center">
      <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
        Live Nickel Price
      </h2>

      {/* Header row */}
      <div className="bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div className="h-8 md:h-6 lg:h-8">
          <img
            className="w-16 md:w-10 2xl:w-26 h-10 md:h-6 lg:h-10 lg:w-20 sm:h-10 sm:w-28"
            src="/logo.png"
            alt="Nickel Tracker Logo"
          />
        </div>

        <div className="w-[60%] md:w-[70%] pr-1">
          <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-3 xl:gap-x-3 2xl:gap-x-5 text-xs md:text-[10px] lg:text-xs">
            <li className="w-[33%] text-black1/80 font-medium">Price</li>
            <li className="w-[33%] text-black1/80 font-medium">Change</li>
            <li className="w-[33%] text-black1/80 font-medium">% Change</li>
          </ul>
        </div>
      </div>

      {/* Data row */}
      <div className="mt-1 bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div>
          <h3 className="text-xs md:text-[9px] lg:text-sm font-bold text-green">
            Nickel Spot Price
          </h3>
        </div>

        <div className="w-[60%] md:w-[70%]">
          <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-5 text-xs md:text-[9px] lg:text-sm font-semibold text-green">
            <li className="w-[33%]">
              <p>${nickelSpotPrice}</p>
            </li>
            <li className="w-[33%]">
              <p className={`${change >= 0 ? "text-green-600" : "text-red-500"}`}>
                {change >= 0 ? `+$${formattedChange}` : `-$${formattedChange}`}
              </p>
            </li>
            <li className="w-[33%]">
              <p className={`${parseFloat(changePercentage) >= 0 ? "text-green-600" : "text-red-500"}`}>
                {parseFloat(changePercentage) >= 0 ? `+${changePercentage}%` : `${changePercentage}%`}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-2 text-start font-medium text-date text-sm md:text-xs lg:text-sm">
        <a
          target="_blank"
          className="text-accent hover:text-accent/60 transition-all duration-200"
          href="https://www.lme.com/en/metals/non-ferrous/nickel"
          rel="noopener noreferrer"
        >
          LME - Nickel Futures
        </a>
      </p>
    </div>
  );
};

export default DirectNickelPrice;