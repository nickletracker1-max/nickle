

import { useEffect, useState } from "react";
import { MOST_FOLLOWED, LITHIUM_STOCK_DETAIL } from "@/src/api/lithiumAPI";
import { useRouter } from "next/navigation";
import axios from "axios";

const MostFollowed = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MOST_FOLLOWED);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Ensure data is an array before calling slice
        const dataArray = Array.isArray(data) ? data : [];
        setStockData(dataArray.slice(0, 10)); // Limit to 10 stocks
      } catch (err) {
        setError(err.message);
        setStockData([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const checkSubpageExists = async (stockTicker) => {
    try {
      const response = await axios.get(
        `${LITHIUM_STOCK_DETAIL}?stock_ticker=${stockTicker}`
      );
      return response.data.exists ?? true;
    } catch (error) {
      console.error("Error checking subpage existence:", error);
      return false;
    }
  };

  const handleStockClick = async (stockTicker) => {
    setErrorMessage("");
    const exists = await checkSubpageExists(stockTicker);

    if (exists) {
      router.push(`/stock-detail/${stockTicker}`);
    } else {
      setErrorMessage(`Details for ${stockTicker} are not available.`);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  return (
    <div className="w-full">
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-colors"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded shadow-md w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-2">Error</h2>
            <p className="text-sm mb-4">{errorMessage}</p>
            <button
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <table className="w-full text-left text-sm font-sans">
          <tbody>
            {stockData
              .sort(
                (a, b) =>
                  (b.intraday_percentage || 0) - (a.intraday_percentage || 0)
              ) // Sort by intraday percentage
              .map((stock) => (
                <tr
                  key={stock.id || stock.ticker || Math.random()}
                  className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleStockClick(stock.ticker?.split(".")[0])}
                >
                  <td className="py-2">
                    <div>
                      <strong className="text-accent">
                        {stock.ticker || "N/A"}
                      </strong>
                    </div>
                    <div className="text-gray-500">{stock.name || "N/A"}</div>
                  </td>
                  <td className="py-2 text-right">
                    <div>${parseFloat(stock.current_price || 0).toFixed(2)}</div>
                    <div
                      className={`${
                        parseFloat(stock.intraday_percentage || 0) < 0
                          ? "text-red-600"
                          : "text-green-500"
                      }`}
                    >
                      {parseFloat(stock.intraday_percentage || 0).toFixed(2)}%
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {/* View More Link */}
      <div className="mt-4 text-left">
        <a
          href="/investments"
          className="inline-flex items-center text-sm font-bold text-accent hover:underline"
        >
          View More
          <span className="ml-1">&gt;</span>
        </a>
      </div>
    </div>
  );
};

export default MostFollowed;
