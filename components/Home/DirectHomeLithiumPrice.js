import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa6";
import CardSkeleton from "@/components/CardSkeleton";
import axios from "axios";

const DirectHomeLithiumPrice = () => {
  const [lithiumPrices, setLithiumPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
     const fetchPricesFromDatabase = async () => {
       try {
         setLoading(true);

         const response = await axios("/api/lithium-prices");

         if (!response.data) {
           console.warn(
             `Lithium prices API returned ${response.status} — showing empty state`,
           );
           setLithiumPrices([]);
           setLoading(false);
           return;
         }

         const data = response.data;
         const metalPrices = data.slice(0, 4).map((item) => ({
           metal_name: item.metal_name,
           price: parseFloat(item.price),
           price_change: parseFloat(item.price_change),
           price_change_percent: parseFloat(item.price_change_percent),
         }));

         setLithiumPrices(metalPrices);
       } catch (err) {
         console.error("Error fetching prices from database:", err);
         setError(err.message);

         setLithiumPrices([]);
       } finally {
         setLoading(false);
       }
     };

     fetchPricesFromDatabase();

     // Refresh every 2 minutes
     const interval = setInterval(fetchPricesFromDatabase, 2 * 60 * 1000);
     return () => clearInterval(interval);
   }, []);


  const formatValue = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
      return "0.00";
    }
    return parseFloat(value).toFixed(4);
  };

  const getChangeClass = (value) => {
    if (value > 0) return "text-green-500";
    if (value < 0) return "text-red-500";
    return "text-black";
  };

  const renderRow = (metalData) => (
    <tr className="text-sm hover:bg-accent/10" key={metalData.metal_name}>
      <td className="border-t px-4 py-2 font-sm">{metalData.metal_name}</td>
      <td className="border-t px-4 py-3">${formatValue(metalData.price)}</td>
      <td
        className={`border-t px-4 py-3 ${getChangeClass(
          parseFloat(metalData.price_change),
        )}`}
      >
        {metalData.price_change > 0
          ? `$+${formatValue(metalData.price_change)}`
          : metalData.price_change < 0
            ? `${formatValue(metalData.price_change)}`
            : `$0.0000`}
      </td>
      <td
        className={`border-t px-4 py-3 ${getChangeClass(
          parseFloat(metalData.price_change_percent),
        )}`}
      >
        {formatValue(metalData.price_change_percent)}%
      </td>
    </tr>
  );

  if (loading) {
    return (
      <div className="text-center py-4">
        <CardSkeleton />
      </div>
    );
  }

  if (error && lithiumPrices.length === 0) {
    return (
      <div className="text-center py-4 text-red-500">
        Error: {error}
        <p className="text-sm text-gray-600 mt-2">Using fallback data</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto custom-scrollbar-hidden border border-black/10 p-3 mr-2 rounded-xl">
      <table className="table-auto w-full border-collapse text-sm">
        <thead className="text-left">
          <tr className="text-black/60">
            <th className=" px-4 py-4">Metal</th>
            <th className=" px-4 py-4">Price (USD/lb)</th>
            <th className=" px-4 py-4">Change</th>
            <th className=" px-4 py-4">% Change</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(lithiumPrices) && lithiumPrices.length > 0 ? (
            lithiumPrices.map((metalData) => renderRow(metalData))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No price data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {error && (
        <div className="mt-2 text-xs text-orange-600 text-center">
          Note: Some data may be simulated due to API restrictions
        </div>
      )}

      <div className="mt-2 text-xs text-gray-500 text-center">
        Last updated: {new Date().toLocaleTimeString()} • Auto-refresh: 2 min
      </div>
    </div>
  );
};

export default DirectHomeLithiumPrice;
