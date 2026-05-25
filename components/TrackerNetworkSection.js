import React from "react";

const trackers = [
  {
    name: "Lithium Tracker",
    url: "https://www.lithiumtracker.com/",
    dot: "bg-green-500",
    dotColor: "#22c55e",
  },
  {
    name: "Copper Tracker",
    url: "https://www.coppertracker.com/",
    dot: "bg-orange-500",
    dotColor: "#f97316",
  },
  {
    name: "Nickel Metal Tracker",
    url: "https://www.nickelmetaltracker.com/",
    dot: "bg-blue-500",
    dotColor: "#3b82f6",
    current: true,
  },
  {
    name: "Uranium Tracker",
    url: "https://www.uraniumtracker.com/",
    dot: "bg-yellow-400",
    dotColor: "#eab308",
  },
  {
    name: "PGM Tracker",
    url: "https://www.pgmtracker.com/",
    dot: "bg-[#8C7A52]",
    dotColor: "#8C7A52",
  },
  {
    name: "Gold & Silver Tracker",
    url: "https://www.goldandsilvertracker.com/",
    dot: "bg-amber-400",
    dotColor: "#f59e0b",
  },
];

const TrackerNetworkSection = () => {
  return (
    <section className="w-full bg-[#0f1623] py-12 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-[11px] font-semibold tracking-widest text-blue-400 uppercase mb-3">
          Commodities Tracker Network
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
          Explore our suite of real-time commodity trackers
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          Built for investors who move fast.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {trackers.map((tracker) => (
            <a
              key={tracker.name}
              href={tracker.url}
              target={tracker.current ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-[#1a2235] hover:bg-[#1e2a40] border border-white/5 hover:border-white/10 rounded-xl p-4 transition-all duration-200 min-h-[90px]"
            >
              {/* Dot */}
              <span
                className={`w-2.5 h-2.5 rounded-full mb-3 flex-shrink-0 ${tracker.dot}`}
              />

              {/* Name */}
              <div>
                <p className="text-white text-[13px] font-medium leading-snug mb-2">
                  {tracker.name}
                </p>
                {/* Visit link */}
                <span className="text-blue-400 text-[12px] group-hover:text-blue-300 transition-colors flex items-center gap-x-1">
                  Visit
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackerNetworkSection;
