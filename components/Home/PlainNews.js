import React, { useState, useEffect } from "react";
import { PRESS_RELEASE } from "@/src/api/lithiumAPI";
import Loader from "../Loader";

const formatDate = (dateString) => {
  const fallback = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
  });
  if (!dateString) return fallback;
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric",
    });
  } catch {
    return fallback;
  }
};

const PlainNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(PRESS_RELEASE);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const processed = Array.isArray(data) && data.length > 0
          ? data.map((n) => ({ ...n, date: n.date || new Date().toISOString() }))
          : [];
        setNewsData(processed);
      } catch (err) {
        console.error("Error fetching plain news:", err);
        setError("Failed to fetch news data");
      } finally {
        setLoading(false);
      }
    };
    fetchNewsData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-3">Latest Nickel News</h1>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-3">Latest Nickel News</h1>
        <div className="text-center py-8 text-red-500">{error}</div>
      </div>
    );
  }

  if (!newsData.length) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-3">Latest Nickel News</h1>
        <div className="text-center py-8 text-gray-500">No data available</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-[21px] cambay font-bold mb-3">Latest Nickel News</h1>
      <div className="w-full grid grid-cols-1 gap-3">
        {newsData.slice(0, 16).map((news, index) => (
          <a
            key={news.id || index}
            target="_blank"
            rel="noopener noreferrer"
            href={news.url}
            className="bg-white pb-4 rounded-sm overflow-hidden block group transition-shadow duration-300"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                {news.ticker && (
                  <div className="mb-2">
                    <span className="bg-accent text-[10px] rounded-sm text-white px-2 py-1">
                      {news.ticker}
                    </span>
                  </div>
                )}
                <h2 className="group-hover:underline text-[16px] md:text-[17px] text-primary leading-6">
                  {news.title}
                </h2>
                {news.company_name && (
                  <p className="text-[12px] text-gray-600 mt-1">{news.company_name}</p>
                )}
              </div>
              <span className="text-gray-500 text-xs whitespace-nowrap">{formatDate(news.date)}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlainNews;
