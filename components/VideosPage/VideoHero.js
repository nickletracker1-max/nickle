import React from "react";

const VideoHero = () => {
  return (
    <div className="relative bg-black w-full py-12">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(https://www.garfieldrefining.com/wp-content/uploads/2021/07/platinum-scaled.jpeg)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className="relative flex items-start overflow-hidden rounded-lg fade-in pt-[60px] md:pt-[80px]"
          style={{ height: "350px" }}
        >
          <div className="relative z-10 p-6 text-white max-w-2xl">
            <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent">
              Nickel Videos
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold my-4 cambay">
              Your Source for the Latest{" "}
              <span className="text-white">Nickel Market Updates</span>
            </h1>

            <p className="text-sm md:text-base mb-10">
              Enhance your Nickel market knowledge through our educational video
              content. From market fundamentals to advanced trading strategies,
              explore our comprehensive library of featured, company insights,
              podcasts, and educational resources.
            </p>

            <div className="text-xs text-gray-300">
              <p className="text-gray-300">
                Learn, grow, and master Nickel markets with our expert content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
