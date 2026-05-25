import React from "react";
import { data } from "../../public/static-data/demand-data";

const PlatinumTable = () => {
  const publishedYears = ["2021", "2022", "2023", "2024"];
  const estimateYears = ["2025", "2026", "2027", "2028"];

  const getSupplyData = (year, dataKey) => {
    const yearData =
      year >= 2025 ? data.wpic_estimates[year] : data.published_lithium[year];
    return yearData.supply.refined_mine_production[dataKey];
  };

  const getRecyclingData = (year, dataKey) => {
    const yearData =
      year >= 2025 ? data.wpic_estimates[year] : data.published_lithium[year];
    return yearData.supply.recycling[dataKey];
  };

  const getDemandData = (year, dataKey) => {
    const yearData =
      year >= 2025 ? data.wpic_estimates[year] : data.published_lithium[year];
    return yearData.demand[dataKey];
  };

  const getInvestmentData = (year, dataKey) => {
    const yearData =
      year >= 2025 ? data.wpic_estimates[year] : data.published_lithium[year];
    return yearData.demand.investment[dataKey];
  };

  return (
    // <div className="w-full overflow-x-auto">
    //   <div className="">
    //     <table className="w-auto text-sm border-collapse mx-auto">
    //       <thead>
    //         <tr className="bg-gray-50">
    //           <th className="text-left px-3 py-2 font-normal border border-gray-200 whitespace-nowrap"></th>
    //           <th
    //             className="text-center font-bold px-3 py-2 border border-gray-200"
    //             colSpan={4}
    //           >
    //             <div className="border-b border-gray-200 pb-1 bg-gray-50">
    //               PUBLISHED PLATINUM
    //             </div>
    //             <div className="grid grid-cols-4 pt-1">
    //               {publishedYears.map((year) => (
    //                 <div key={year} className="text-xs px-1">
    //                   {year}
    //                   {year === "2024" ? "f" : ""}
    //                 </div>
    //               ))}
    //             </div>
    //           </th>
    //           <th
    //             className="text-center font-bold text-accent px-2 py-2 border border-gray-200"
    //             colSpan={4}
    //           >
    //             <div className="border-b border-gray-200 pb-1 ">
    //               WPIC ESTIMATES‡
    //             </div>
    //             <div className="grid grid-cols-4 pt-1">
    //               {estimateYears.map((year) => (
    //                 <div key={year} className="text-xs px-1">
    //                   {year}f
    //                 </div>
    //               ))}
    //             </div>
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody className="text-sm">
    //         <tr className="bg-gray-50">
    //           <td
    //             colSpan={9}
    //             className="font-bold px-2 py-2 border border-gray-200 whitespace-nowrap"
    //           >
    //             PLATINUM SUPPLY
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="px-2 py-2 border border-gray-200 bg-gray-50 whitespace-nowrap">
    //             Refined mine production
    //           </td>
    //           {[...Array(8)].map((_, i) => (
    //             <td key={i} className="border border-gray-200 w-24"></td>
    //           ))}
    //         </tr>
    //         {[
    //           { label: "- South Africa", key: "south_africa" },
    //           { label: "- Zimbabwe", key: "zimbabwe" },
    //           { label: "- North America", key: "north_america" },
    //           { label: "- Russia", key: "russia" },
    //           { label: "- Other", key: "other" },
    //           {
    //             label: "- Producer inventory movement",
    //             key: "producer_inventory_movement",
    //           },
    //         ].map(({ label, key }) => (
    //           <tr key={key} className="hover:bg-gray-50">
    //             <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //               {label}
    //             </td>
    //             {[...publishedYears, ...estimateYears].map((year) => (
    //               <td
    //                 key={year}
    //                 className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                   year >= 2025 ? "text-accent" : ""
    //                 }`}
    //               >
    //                 {getSupplyData(year, key)}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}

    //         <tr className="font-semibold bg-gray-50">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total mining supply
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {getSupplyData(year, "total_mining_supply")}
    //             </td>
    //           ))}
    //         </tr>

    //         <tr>
    //           <td className="px-2 py-2 border border-gray-200 bg-gray-50 whitespace-nowrap">
    //             Recycling
    //           </td>
    //           {[...Array(8)].map((_, i) => (
    //             <td key={i} className="border border-gray-200 w-24"></td>
    //           ))}
    //         </tr>

    //         {[
    //           { label: "- Autocatalyst", key: "autocatalyst" },
    //           { label: "- Jewellery", key: "jewellery" },
    //           { label: "- Industrial", key: "industrial" },
    //         ].map(({ label, key }) => (
    //           <tr key={key} className="hover:bg-gray-50">
    //             <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //               {label}
    //             </td>
    //             {[...publishedYears, ...estimateYears].map((year) => (
    //               <td
    //                 key={year}
    //                 className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                   year >= 2025 ? "text-accent" : ""
    //                 }`}
    //               >
    //                 {getRecyclingData(year, key)}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}

    //         <tr className="font-bold bg-gray-50">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total recycling
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {getRecyclingData(year, "total_recycling")}
    //             </td>
    //           ))}
    //         </tr>

    //         <tr className="font-bold bg-gray-100">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total supply
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {year >= 2025
    //                 ? data.wpic_estimates[year].supply.total_supply
    //                 : data.published_platinum[year].supply.total_supply}
    //             </td>
    //           ))}
    //         </tr>

    //         <tr className="bg-gray-50">
    //           <td
    //             colSpan={9}
    //             className="font-bold px-2 py-2 border border-gray-200 whitespace-nowrap"
    //           >
    //             PLATINUM DEMAND
    //           </td>
    //         </tr>

    //         {[
    //           { label: "Automotive", key: "automotive" },
    //           { label: "Jewellery", key: "jewellery" },
    //           { label: "Industrial", key: "industrial" },
    //         ].map(({ label, key }) => (
    //           <tr key={key} className="hover:bg-gray-50 font-bold">
    //             <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //               {label}
    //             </td>
    //             {[...publishedYears, ...estimateYears].map((year) => (
    //               <td
    //                 key={year}
    //                 className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                   year >= 2025 ? "text-accent" : ""
    //                 }`}
    //               >
    //                 {getDemandData(year, key)}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}

    //         <tr className="hover:bg-gray-50 font-bold">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total Investment
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {getInvestmentData(year, "total")}
    //             </td>
    //           ))}
    //         </tr>

    //         {[
    //           { label: "- Bar and coin", key: "bar_and_coin" },
    //           { label: "- China bars ≥500g", key: "china_bars" },
    //           { label: "- ETF", key: "etf" },
    //           {
    //             label: "- Stocks held by exchanges",
    //             key: "stocks_held_by_exchanges",
    //           },
    //         ].map(({ label, key }) => (
    //           <tr key={key} className="hover:bg-gray-50">
    //             <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //               {label}
    //             </td>
    //             {[...publishedYears, ...estimateYears].map((year) => (
    //               <td
    //                 key={year}
    //                 className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                   year >= 2025 ? "text-accent0" : ""
    //                 }`}
    //               >
    //                 {getInvestmentData(year, key)}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}

    //         <tr className="font-bold bg-gray-100">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total demand
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {year >= 2025
    //                 ? data.wpic_estimates[year].demand.total_demand
    //                 : data.published_platinum[year].demand.total_demand}
    //             </td>
    //           ))}
    //         </tr>

    //         <tr className="font-bold bg-gray-100">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Supply/demand balance
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {year >= 2025
    //                 ? data.wpic_estimates[year].supply_demand_balance
    //                 : data.published_platinum[year].supply_demand_balance}
    //             </td>
    //           ))}
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    //..............................responsive

    <div className="w-full">
      <div className="overflow-x-auto md:overflow-x-visible">
        <table className="w-full text-xs md:text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-1 md:px-3 md:py-2 font-normal border border-gray-200 whitespace-nowrap"></th>
              <th
                className="text-center font-bold p-1 md:px-3 md:py-2 border border-gray-200"
                colSpan={4}
              >
                <div className="border-b border-gray-200 pb-1 bg-gray-50">
                  PUBLISHED PLATINUM
                </div>
                <div className="grid grid-cols-4 pt-1">
                  {publishedYears.map((year) => (
                    <div key={year} className="text-xs px-0.5 md:px-1">
                      {year}
                      {year === "2024" ? "f" : ""}
                    </div>
                  ))}
                </div>
              </th>
              <th
                className="text-center font-bold text-accent p-1 md:px-2 md:py-2 border border-gray-200"
                colSpan={4}
              >
                <div className="border-b border-gray-200 pb-1">
                  WPIC ESTIMATES‡
                </div>
                <div className="grid grid-cols-4 pt-1">
                  {estimateYears.map((year) => (
                    <div key={year} className="text-xs px-0.5 md:px-1">
                      {year}f
                    </div>
                  ))}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr className="bg-gray-50">
              <td
                colSpan={9}
                className="font-bold p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap"
              >
                PLATINUM SUPPLY
              </td>
            </tr>
            <tr>
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 bg-gray-50 whitespace-nowrap">
                Refined mine production
              </td>
              {[...Array(8)].map((_, i) => (
                <td
                  key={i}
                  className="border border-gray-200 min-w-[3rem] md:w-24"
                ></td>
              ))}
            </tr>
            {[
              { label: "- South Africa", key: "south_africa" },
              { label: "- Zimbabwe", key: "zimbabwe" },
              { label: "- North America", key: "north_america" },
              { label: "- Russia", key: "russia" },
              { label: "- Other", key: "other" },
              {
                label: "- Producer inventory movement",
                key: "producer_inventory_movement",
              },
            ].map(({ label, key }) => (
              <tr key={key} className="hover:bg-gray-50">
                <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                  {label}
                </td>
                {[...publishedYears, ...estimateYears].map((year) => (
                  <td
                    key={year}
                    className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                      year >= 2025 ? "text-accent" : ""
                    }`}
                  >
                    {getSupplyData(year, key)}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="font-semibold bg-gray-50">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total mining supply
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {getSupplyData(year, "total_mining_supply")}
                </td>
              ))}
            </tr>

            <tr>
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 bg-gray-50 whitespace-nowrap">
                Recycling
              </td>
              {[...Array(8)].map((_, i) => (
                <td
                  key={i}
                  className="border border-gray-200 min-w-[3rem] md:w-24"
                ></td>
              ))}
            </tr>

            {[
              { label: "- Autocatalyst", key: "autocatalyst" },
              { label: "- Jewellery", key: "jewellery" },
              { label: "- Industrial", key: "industrial" },
            ].map(({ label, key }) => (
              <tr key={key} className="hover:bg-gray-50">
                <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                  {label}
                </td>
                {[...publishedYears, ...estimateYears].map((year) => (
                  <td
                    key={year}
                    className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                      year >= 2025 ? "text-accent" : ""
                    }`}
                  >
                    {getRecyclingData(year, key)}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="font-bold bg-gray-50">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total recycling
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {getRecyclingData(year, "total_recycling")}
                </td>
              ))}
            </tr>

            <tr className="font-bold bg-gray-100">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total supply
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {year >= 2025
                    ? data.wpic_estimates[year].supply.total_supply
                    : data.published_lithium[year].supply.total_supply}
                </td>
              ))}
            </tr>

            <tr className="bg-gray-50">
              <td
                colSpan={9}
                className="font-bold p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap"
              >
                PLATINUM DEMAND
              </td>
            </tr>

            {[
              { label: "Automotive", key: "automotive" },
              { label: "Jewellery", key: "jewellery" },
              { label: "Industrial", key: "industrial" },
            ].map(({ label, key }) => (
              <tr key={key} className="hover:bg-gray-50 font-bold">
                <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                  {label}
                </td>
                {[...publishedYears, ...estimateYears].map((year) => (
                  <td
                    key={year}
                    className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                      year >= 2025 ? "text-accent" : ""
                    }`}
                  >
                    {getDemandData(year, key)}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="hover:bg-gray-50 font-bold">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total Investment
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {getInvestmentData(year, "total")}
                </td>
              ))}
            </tr>

            {[
              { label: "- Bar and coin", key: "bar_and_coin" },
              { label: "- China bars ≥500g", key: "china_bars" },
              { label: "- ETF", key: "etf" },
              {
                label: "- Stocks held by exchanges",
                key: "stocks_held_by_exchanges",
              },
            ].map(({ label, key }) => (
              <tr key={key} className="hover:bg-gray-50">
                <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                  {label}
                </td>
                {[...publishedYears, ...estimateYears].map((year) => (
                  <td
                    key={year}
                    className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                      year >= 2025 ? "text-accent" : ""
                    }`}
                  >
                    {getInvestmentData(year, key)}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="font-bold bg-gray-100">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total demand
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {year >= 2025
                    ? data.wpic_estimates[year].demand.total_demand
                    : data.published_lithium[year].demand.total_demand}
                </td>
              ))}
            </tr>

            <tr className="font-bold bg-gray-100">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Supply/demand balance
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {year >= 2025
                    ? data.wpic_estimates[year].supply_demand_balance
                    : data.published_lithium[year].supply_demand_balance}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlatinumTable;
