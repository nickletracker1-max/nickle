import React from "react";
import Hero from "@/components/Home/Hero";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import MostFollowed from "@/components/Home/MostFollowed";
import LithiumLivePrice from "@/components/Home/LithiumLivePrice";
import StayAhead from "@/components/Home/StayAhead";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import PopularTools from "@/components/Home/PopularTools";
import MostPopularNews from "@/components/Home/MostPopularNews";
import Substacks from "@/components/Home/Substacks";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import Footer from "@/components/Footer";
import TVLithiumCFD from "@/components/Home/TVLithiumCFD";
import TVLithium from "@/components/Home/TVLithium";
import PlainNews from "@/components/Home/PlainNews";
import HomeLithiumPrice from "@/components/Home/HomeLithiumPrice";
import HomeInsiderTransactions from "@/components/Home/HomeInsiderTransactions";

const home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[116px]">
        <Hero />
      </div>

      {/* 3 cols  */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 px-3 md:px-10 lg:px-12 py-8 mb-8">
        {/* 1  */}
        <div className="w-full lg:w-[24%] flex flex-col space-y-6">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Nickel Price Chart
            </h1>
            <TVLithiumCFD />
          </div>
          <DailyNewsletterAd />
        </div>

        {/* 2  */}
        <div className="w-full lg:w-[40%] flex flex-col space-y-6">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Metal Prices
            </h1>
            <HomeLithiumPrice />
          </div>
          <div>
            <div className="flex justify-between items-center mb-3 border-b border-black/10 pb-1">
              <h1 className="text-[21px] cambay font-bold">
                Recent Canadian Company Insider Transactions
              </h1>
              <a 
                href="/investments" 
                className="text-sm text-accent hover:text-accent/80 transition-colors"
              >
                view all
              </a>
            </div>
            <HomeInsiderTransactions />
          </div>
          <PlainNews />
        </div>

        {/* 3  */}
        <div className="w-full lg:w-[24%] flex flex-col space-y-6">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Nickel Market Data
            </h1>
            <TVLithium />
          </div>
          <Substacks />
        </div>
      </div>

      {/* 2 cols  */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 px-3 md:px-10 lg:px-12 py-8 mb-8">
        {/* left  */}
        <div className="w-full lg:w-[66%] flex flex-col space-y-12">
          {/* <LatestNews /> */}
          <PressReleaseNews />
          <StockNews />
          <MostPopularNews />
        </div>
        {/* right  */}
        <div className="w-full lg:w-[26%] space-y-12">
          <LithiumLivePrice />
          {/* <CopperTradingviewChart /> */}
          <MostFollowed />
          <PopularTools />
          {/* <DailyNewsletterAd /> */}
          {/* <Substacks /> */}
        </div>
      </div>
      {/* Stay ahead section */}
      <div className="mb-8">
        <StayAhead />
      </div>

      {/* footer -------------------------------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
};

export default home;
