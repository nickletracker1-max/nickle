import { useEffect } from "react";

const StocksMarquee = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "", proName: "NASDAQ:NIKL" },
        { description: "", proName: "NYSE:VALE" },
        { description: "", proName: "NYSE:BHP" },
        { description: "", proName: "NYSE:RIO" },
        { description: "", proName: "ASX:NIC" },
        { description: "", proName: "ASX:IGO" },
        { description: "", proName: "OTC:GLCNF" },
        { description: "", proName: "NYSE:TECK" },
        { description: "", proName: "NYSE:FCX" },
        { description: "", proName: "NYSE:AA" },
        { description: "", proName: "NYSE:NEM" },
        { description: "", proName: "LSE:ANTO" },
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
