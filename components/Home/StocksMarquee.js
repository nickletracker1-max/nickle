// import { useEffect, useState } from "react";
// import { STOCK_SCREENER } from "@/src/api/lithiumAPI";

// const StocksMarquee = () => {
//   const [symbols, setSymbols] = useState([]);

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(STOCK_SCREENER);
//         const data = await response.json();

//         const formattedSymbols = data.map((stock) => ({
//           description: "",
//           proName: `${stock.exchange.toUpperCase()}:${stock.ticker.toUpperCase()}`,
//         }));

//         setSymbols(formattedSymbols);
//       } catch (error) {
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   useEffect(() => {
//     if (symbols.length > 0) {
//       const script = document.createElement("script");
//       script.src =
//         "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
//       script.async = true;
//       script.innerHTML = JSON.stringify({
//         symbols: symbols,
//         showSymbolLogo: true,
//         isTransparent: false,
//         displayMode: "regular",
//         colorTheme: "light",
//         locale: "en",
//       });

//       document.getElementById("tradingview-widget-script").appendChild(script);
//     }
//   }, [symbols]);

//   return (
//     <div className="tradingview-widget-container">
//       <div
//         className="tradingview-widget-container__widget"
//         id="tradingview-widget-script"
//       ></div>
//     </div>
//   );
// };

// export default StocksMarquee;

// import { useEffect, useState } from "react";
// import { STOCK_SCREENER } from "@/src/api/lithiumAPI";

// const StocksMarquee = () => {
//   const [symbols, setSymbols] = useState([]);

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(STOCK_SCREENER);
//         const data = await response.json();

//         const formattedSymbols = data.map((stock) => ({
//           description: "",
//           proName: `${stock.exchange.toUpperCase()}:${stock.ticker
//             .split(".")[0]
//             .toUpperCase()}`, // Extract only the first part before `.`
//         }));

//         setSymbols(formattedSymbols);
//       } catch (error) {
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   useEffect(() => {
//     if (symbols.length > 0) {
//       const script = document.createElement("script");
//       script.src =
//         "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
//       script.async = true;
//       script.innerHTML = JSON.stringify({
//         symbols: symbols,
//         showSymbolLogo: true,
//         isTransparent: false,
//         displayMode: "regular",
//         colorTheme: "light",
//         locale: "en",
//       });

//       document.getElementById("tradingview-widget-script").appendChild(script);
//     }
//   }, [symbols]);

//   return (
//     <div className="tradingview-widget-container">
//       <div
//         className="tradingview-widget-container__widget"
//         id="tradingview-widget-script"
//       ></div>
//     </div>
//   );
// };

// export default StocksMarquee;

import { useEffect } from "react";

const StocksMarquee = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "", proName: "NASDAQ:NIKL" },   // Sprott Nickel Miners ETF
        { description: "", proName: "NYSE:VALE" },      // Vale - largest nickel producer
        { description: "", proName: "NYSE:BHP" },       // BHP Group - nickel mining
        { description: "", proName: "NYSE:RIO" },       // Rio Tinto - nickel mining
        { description: "", proName: "ASX:NIC" },        // Nickel Industries Ltd
        { description: "", proName: "ASX:IGO" },        // IGO Limited - nickel producer
        { description: "", proName: "TSX:NKLA" },       // Nikola / nickel related
        { description: "", proName: "OTC:GLCNF" },      // Glencore - nickel producer
        { description: "", proName: "NYSE:TECK" },      // Teck Resources - nickel mining
        { description: "", proName: "NYSE:FCX" },       // Freeport-McMoRan - base metals
        { description: "", proName: "NYSE:AA" },        // Alcoa - base metals
        { description: "", proName: "NYSE:NEM" },       // Newmont - mining
        { description: "", proName: "LSE:ANTO" },       // Antofagasta - mining
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "regular",
      colorTheme: "light",
      locale: "en",
    });

    document.getElementById("tradingview-widget").appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        className="tradingview-widget-container__widget"
        id="tradingview-widget"
      ></div>
    </div>
  );
};

export default StocksMarquee;
