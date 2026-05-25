import React from "react";
import { useRouter } from "next/router";

const trackers = [
  {
    name: "Platinum",
    url: "https://www.pgmtracker.com/",
    color: "#8C7A52",        // warm gold — PGM
    dot: "bg-[#8C7A52]",
  },
  {
    name: "Lithium",
    url: "https://www.lithiumtracker.com/",
    color: "#22c55e",        // green
    dot: "bg-green-500",
  },
  {
    name: "Copper",
    url: "https://www.coppertracker.com/",
    color: "#f97316",        // orange
    dot: "bg-orange-500",
  },
  {
    name: "Nickel",
    url: "https://www.nickelmetaltracker.com/",
    color: "#3b82f6",        // blue
    dot: "bg-blue-500",
    current: true,
  },
  {
    name: "Uranium",
    url: "https://www.uraniumtracker.com/",
    color: "#eab308",        // yellow
    dot: "bg-yellow-400",
  },
  {
    name: "Gold & Silver",
    url: "https://www.goldandsilvertracker.com/",
    color: "#f59e0b",        // amber
    dot: "bg-amber-400",
  },
];

const NetworkBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 xl:px-10">
        <div className="flex items-center gap-x-1 py-[7px] overflow-x-auto no-scrollbar">
          {/* Label */}
          <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mr-3 flex-shrink-0">
            Network
          </span>

          {/* Tracker pills */}
          <div className="flex items-center gap-x-1 flex-shrink-0">
            {trackers.map((tracker) => (
              <a
                key={tracker.name}
                href={tracker.url}
                target={tracker.current ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-x-1.5 px-3 py-1 rounded-full text-[12.5px] font-medium transition-all duration-150 whitespace-nowrap flex-shrink-0 ${
                  tracker.current
                    ? "bg-gray-100 text-gray-800 border border-gray-200"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                {/* Coloured dot */}
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${tracker.dot}`}
                />
                {tracker.name}
                {/* Checkmark for current site, arrow for others */}
                {tracker.current ? (
                  <svg
                    className="w-3 h-3 text-gray-500 ml-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3 text-gray-400 ml-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkBar;
