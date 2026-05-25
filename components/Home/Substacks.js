import React, { useState, useEffect } from "react";
import Link from "next/link";
import CardSkeleton from "@/components/CardSkeleton";

const Substacks = () => {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const res = await fetch("/api/nickel-substacks");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setPosts(data.items || []);
      } catch (err) {
        console.error("Substacks RSS error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFeeds();
  }, []);

  const header = (
    <h2 className="text-[19px] md:text-[21px] font-bold cambay border-b border-gray-200 pb-2 mb-4">
      Nickel Substacks
    </h2>
  );

  if (loading) {
    return (
      <div>
        {header}
        <CardSkeleton />
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div>
        {header}
        <p className="text-center py-8 text-gray-400 text-sm">
          {error ? `Could not load feeds: ${error}` : "No posts available right now."}
        </p>
      </div>
    );
  }

  return (
    <div>
      {header}

      <div className="space-y-4">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-3 pb-4 border-b border-gray-100 last:border-b-0 group"
          >
            {/* Text */}
            <div className="flex-1 min-w-0">
              {/* Source name */}
              <p className="text-[11px] font-semibold text-accent mb-1 truncate">
                {post.source}
              </p>

              {/* Title */}
              <h3 className="text-[13.5px] font-bold text-gray-900 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-[12px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Date */}
              {post.date && (
                <span className="text-[11px] text-gray-400 mt-1.5 block">
                  {post.date}
                </span>
              )}
            </div>

            {/* Thumbnail */}
            {post.thumbnail && (
              <div className="flex-shrink-0 w-[68px] h-[64px] rounded-md overflow-hidden bg-gray-100">
                <img
                  src={post.thumbnail}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Footer link */}
      <div className="mt-4 text-right">
        <a
          href="https://substack.com/search?q=nickel+metals"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12.5px] text-accent font-medium hover:underline"
        >
          More on Substack →
        </a>
      </div>
    </div>
  );
};

export default Substacks;
