import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "../Loader";
import { STOCK_NEWS } from "@/src/api/lithiumAPI";

const formatDate = (isoDate) => {
  const fallback = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
  });
  if (!isoDate) return fallback;
  try {
    return new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric",
    });
  } catch {
    return fallback;
  }
};

const MoreNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(STOCK_NEWS);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (!data || !data.length) throw new Error("No news available");
        const processed = Array.isArray(data)
          ? data.map((item) => ({ ...item, date: item.date || new Date().toISOString() }))
          : [];
        setNews(processed);
      } catch (err) {
        console.error("Error fetching more news:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const wrapper = (children) => (
    <div className="px-3 md:px-10 lg:px-16 py-12 md:py-24 bg-secondary/10 mt-10">
      <h2 className="text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-2 mb-6">
        More News
      </h2>
      {children}
    </div>
  );

  if (loading) return wrapper(<div className="flex justify-center items-center py-8"><Loader /></div>);
  if (error) return wrapper(<div className="flex justify-center items-center h-32 text-red-500">Error: {error}</div>);
  if (!news.length) return wrapper(<div className="text-center py-8 text-gray-500">No additional news available at this time</div>);

  return wrapper(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.slice(5, 20).map((item, index) => (
        <Link
          key={item.id || index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col space-y-2 pb-4 border-b group"
        >
          {item.ticker && (
            <span className="bg-accent text-[10px] rounded-sm text-white px-2 py-1 self-start">
              {item.ticker}
            </span>
          )}
          <h3 className="text-md font-bold text-gray-800 group-hover:text-accent transition-colors leading-tight">
            {item.title}
          </h3>
          {item.company_name && (
            <p className="text-xs text-gray-600">{item.company_name}</p>
          )}
          <span className="text-xs text-gray-500">{formatDate(item.date)}</span>
        </Link>
      ))}
    </div>
  );
};

export default MoreNews;
