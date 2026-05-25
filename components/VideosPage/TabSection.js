import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const tabs = [
  { name: "All", query: "all" },
  { name: "Education", query: "education" },
  { name: "Podcast", query: "podcasts" },
  { name: "Company", query: "company" },
];

const TabsSection = () => {
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.query === tab);
    setActiveTab(activeIndex >= 0 ? activeIndex : 0);
  }, [tab]);

  const handleTabClick = (index, query) => {
    setActiveTab(index);
    router.push(
      { pathname: router.pathname, query: { tab: query } },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="bg-white border-t border-gray-200">
      <div className="container px-3 md:px-12">
        <ul className="flex flex-wrap justify-start items-center gap-x-3 sm:gap-x-5 py-6 bg-white shadow-sm">
          {tabs.map((t, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index, t.query)}
              className={`cursor-pointer font-medium text-[12.5px] sm:text-sm px-2.5 sm:px-4 py-1 sm:py-2 rounded-full mb-2 md:mb-0 ${
                activeTab === index
                  ? "text-white bg-accent"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {t.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabsSection;
