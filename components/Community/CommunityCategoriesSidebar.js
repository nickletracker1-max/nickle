import React, { useState } from "react";
import { FaRegNewspaper, FaDollarSign, FaCalendarAlt, FaGlobe } from "react-icons/fa";

const categories = [
  { name: "Latest News",              hashtag: "#latestnews",              icon: <FaRegNewspaper /> },
  { name: "Nickel Price",             hashtag: "#nickelprice",             icon: <FaDollarSign /> },
  { name: "Nickel Industry Events",   hashtag: "#nickelindustryevents",    icon: <FaCalendarAlt /> },
  { name: "Geopolitical News",        hashtag: "#geopoliticalnews",        icon: <FaGlobe /> },
];

const CommunityCategoriesSidebar = ({ onCategoryClick, setNewPost, newPost }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    onCategoryClick(category.hashtag.slice(1));

    // Replace any existing category hashtag in the post text
    let updatedPost = newPost;
    categories.forEach((cat) => {
      updatedPost = updatedPost.replace(new RegExp(cat.hashtag + "\\s*", "g"), "");
    });
    updatedPost = updatedPost.trim();
    updatedPost += (updatedPost ? " " : "") + category.hashtag + " ";

    setNewPost(updatedPost);
    setSelectedCategory(category.hashtag);
  };

  return (
    <aside className="w-62 h-full border-l border-gray-200 p-3 hidden xl:block lg:order-3 shadow-sm">
      <h3 className="text-lg font-bold mb-4 text-black/90">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.hashtag}
            onClick={() => handleCategoryClick(category)}
            className={`w-full flex items-center px-2 py-1 text-left text-accent rounded-md font-medium transition-colors duration-200 ${
              selectedCategory === category.hashtag
                ? "bg-accent/20"
                : "bg-accent/10 hover:bg-accent/20"
            }`}
          >
            <span className="mr-2 text-lg">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default CommunityCategoriesSidebar;
