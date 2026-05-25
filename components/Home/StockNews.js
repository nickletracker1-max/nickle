import React, { useState, useEffect } from "react";
import { STOCK_NEWS } from "@/src/api/lithiumAPI";

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

const StockNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(STOCK_NEWS);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const processed = Array.isArray(data)
          ? data.map((n) => ({ ...n, date: n.date || new Date().toISOString() }))
          : [];
        setNewsData(processed);
      } catch (err) {
        console.error("Error fetching stock news:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return null;

  if (error) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Nickel Stock News
        </h1>
        <div className="text-center py-8 text-red-500">Error loading stock news: {error}</div>
      </div>
    );
  }

  if (!newsData.length) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Nickel Stock News
        </h1>
        <div className="text-center py-12 text-gray-600">No stock news available at this time</div>
      </div>
    );
  }

  const [featuredNews, ...rest] = newsData;
  const remainingNews = rest.slice(0, 4);

  return (
    <div>
      <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
        Nickel Stock News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
        {/* Featured */}
        <div className="col-span-5">
          <a href={featuredNews.url} target="_blank" rel="noopener noreferrer" className="block">
            <div className="overflow-hidden group cursor-pointer">
              <img
                src={featuredNews.image_url || "/no-image.png"}
                alt={featuredNews.title}
                className="w-full h-[300px] object-cover rounded-sm"
              />
              <div className="pt-4">
                <div className="flex gap-x-3 mb-2">
                  <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                    {featuredNews.ticker}
                  </span>
                  {featuredNews.company_name && (
                    <span className="bg-gray-100 text-[11px] rounded-sm text-gray-700 px-2 py-1">
                      {featuredNews.company_name}
                    </span>
                  )}
                </div>
                <h3 className="text-[18px] font-medium leading-6 mb-2 group-hover:underline">
                  {featuredNews.title}
                </h3>
                {featuredNews.summary && (
                  <p className="text-[14px] text-gray-600 mb-2 line-clamp-2">
                    {featuredNews.summary.length > 150
                      ? `${featuredNews.summary.substring(0, 150)}...`
                      : featuredNews.summary}
                  </p>
                )}
                <div className="text-[14px] text-gray-500 space-x-2">
                  <span>{formatDate(featuredNews.date)}</span>
                  <span>|</span>
                  <span>{featuredNews.provider || "Unknown"}</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Remaining */}
        {remainingNews.length > 0 && (
          <div className="col-span-4 space-y-3">
            {remainingNews.map((news, index) => (
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                key={news.id || index}
                className="flex items-center overflow-hidden group cursor-pointer border-b border-black/10 pb-2"
              >
                <div className="flex-1">
                  <div className="flex gap-x-3 mb-2">
                    <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                      {news.ticker}
                    </span>
                  </div>
                  <h3 className="text-[15px] leading-6 mb-1 font-medium group-hover:underline">
                    {news.title?.length > 90 ? `${news.title.slice(0, 90)}...` : news.title}
                  </h3>
                  {news.company_name && (
                    <p className="text-[12px] text-gray-600 mb-1">{news.company_name}</p>
                  )}
                  <div className="text-[12px] text-gray-500">{formatDate(news.date)}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StockNews;
