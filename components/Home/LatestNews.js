// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/lithiumAPI";

// const LatestNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(COPPER_NEWS);
//         if (!response.ok) {
//           throw new Error("Failed to fetch news");
//         }
//         const data = await response.json();
//         if (!data || data.length === 0) {
//           throw new Error("No news available");
//         }
//         setNewsData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-32">
//         <span className="ml-3 text-gray-800 font-semibold mx-auto">
//           <Loader />
//         </span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-32 text-red-500">
//         <span>Error: {error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Latest Platinum News
//       </h1>

//       <div className="flex flex-wrap md:flex-nowrap ">
//         {/* Full News Section */}
//         <div className="w-full md:w-[65%] space-y-4">
//           {newsData.slice(0, 5).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
//                   {news.title}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {new Date(news.date).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Side News */}
//         <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* Top Two News */}
//           {newsData.slice(6, 10).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
//                   {news.title.length > 43
//                     ? `${news.title.substring(0, 43)}...`
//                     : news.title}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {new Date(news.date).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/lithiumAPI";

// const LatestNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(COPPER_NEWS);
//         if (!response.ok) {
//           throw new Error("Failed to fetch news");
//         }
//         const data = await response.json();
//         if (!data || data.length === 0) {
//           throw new Error("No news available");
//         }
//         setNewsData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   // Function to format date safely
//   const formatDate = (dateString) => {
//     if (!dateString) return "";

//     try {
//       return new Date(dateString).toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       });
//     } catch (error) {
//       console.warn("Invalid date format:", dateString);
//       return "";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-32">
//         <span className="ml-3 text-gray-800 font-semibold mx-auto">
//           <Loader />
//         </span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-32 text-red-500">
//         <span>Error: {error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Latest Platinum News
//       </h1>

//       <div className="flex flex-wrap md:flex-nowrap ">
//         {/* Full News Section */}
//         <div className="w-full md:w-[65%] space-y-4">
//           {newsData.slice(0, 5).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
//                   {news.title || ""}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Side News */}
//         <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* Top Two News */}
//           {newsData.slice(6, 10).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
//                   {news.title.length > 43
//                     ? `${news.title.substring(0, 43)}...`
//                     : " "}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/lithiumAPI";

// const LatestNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentDate, setCurrentDate] = useState(new Date().toISOString());

//   // Update current date every minute
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDate(new Date().toISOString());
//     }, 60000); // Update every minute

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(COPPER_NEWS);
//         if (!response.ok) {
//           throw new Error("Failed to fetch news");
//         }
//         const data = await response.json();
//         if (!data || data.length === 0) {
//           throw new Error("No news available");
//         }

//         // Use current date for any null dates
//         const processedData = data.map((news) => ({
//           ...news,
//           date: news.date || currentDate,
//         }));

//         setNewsData(processedData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, [currentDate]); // Re-fetch when current date updates

//   // Function to format date safely
//   const formatDate = (dateString) => {
//     if (!dateString) return "";

//     try {
//       return new Date(dateString).toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       });
//     } catch (error) {
//       console.warn("Invalid date format:", dateString);
//       return "";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-32">
//         <span className="ml-3 text-gray-800 font-semibold mx-auto">
//           <Loader />
//         </span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-32 text-red-500">
//         <span>Error: {error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Latest Copper News
//       </h1>

//       <div className="flex flex-wrap md:flex-nowrap">
//         {/* Full News Section */}
//         <div className="w-full md:w-[65%] space-y-4">
//           {newsData.slice(0, 5).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
//                   {news.title || ""}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Side News */}
//         <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {newsData.slice(6, 10).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
//                   {news.title?.length > 43
//                     ? `${news.title.substring(0, 43)}...`
//                     : news.title || ""}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;



import React, { useState, useEffect } from "react";

import { GENERAL_NEWS } from "@/src/api/lithiumAPI";
import CardSkeleton from "@/components/CardSkeleton";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(GENERAL_NEWS);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (!data || data.length === 0){
          console.log("No News to show")
          setNewsData([])
          setLoading(false)
          return;
        }
        
        const processedData = Array.isArray(data)
          ? data.map((news) => ({
              ...news,
              date: news.date || new Date().toISOString(),
            }))
          : [];

        setNewsData(processedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) return (
    <div className="w-full">
      <CardSkeleton/>
    </div>
  );
  if (error) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Latest Nickel News
        </h1>
        <div className="flex justify-center items-center h-32 text-red-500">
          <span>Error: {error}</span>
        </div>
      </div>
    );
  }

  if (newsData.length === 0) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Latest Nickel News
        </h1>
        <div className="text-center py-8 text-gray-500">
          No news available at this time
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
        Latest Nickel News
      </h1>

      {/* Main Container: Stacked for better width utilization */}
      <div className="flex flex-col gap-8 w-full">
        
        {/* TOP SECTION: Featured Large News (Full Width) */}
        {newsData[0] && (
          <a
            href={newsData[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full"
          >
            <div className="relative w-full h-[400px] mb-4 overflow-hidden rounded-lg">
              {newsData[0].image_url ? (
                <img
                  src={newsData[0].image_url}
                  alt={newsData[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">No Image</div>
              )}
            </div>
            
            <div className="w-full">
              {(newsData[0].source || newsData[0].ticker) && (
                <span className="bg-accent text-[11px] font-bold uppercase tracking-wider text-white px-2 py-1 rounded-sm mb-3 inline-block">
                  {newsData[0].source || newsData[0].ticker}
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight group-hover:underline">
                {newsData[0].title}
              </h2>
              <p className="text-gray-600 text-base mb-3 line-clamp-3 leading-relaxed">
                {newsData[0].summary || newsData[0].content}
              </p>
              <p className="text-gray-500 text-sm font-medium">{formatDate(newsData[0].date)}</p>
            </div>
          </a>
        )}

        {/* BOTTOM SECTION: Sub-News Grid (Stretching to fill remaining space) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full border-t border-black/5 pt-8">
          {newsData.slice(1, 4).map((news, index) => (
            <a
              key={news.id || index}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col group w-full"
            >
              <div className="w-full h-48 overflow-hidden rounded-md mb-3">
                { news?.image_url &&(<img
                    src={news.image_url}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />) 
                
                }
              </div>
              <div>
                {(news.source || news.ticker) && (
                  <span className="text-accent text-[10px] font-bold uppercase mb-1 block">
                    {news.source || news.ticker}
                  </span>
                )}
                <h3 className="text-base font-bold text-primary leading-snug line-clamp-2 group-hover:underline mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-xs">{formatDate(news.date)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
