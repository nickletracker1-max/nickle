import Footer from "@/components/Footer";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import Substacks from "@/components/Home/Substacks";
import Navbar from "@/components/Navbar";
import Hero from "@/components/News/Hero";
import React from "react";
import MoreNews from "@/components/News/MoreNews";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import SEO from "@/components/SEO";

const news = () => {
  return (
    <div>
      <SEO
        title="Nickel News - Latest Industry News, Stock Trends & Press Releases"
        description="Stay updated with the latest news on Nickel and Nickel Alloys, featuring company press releases, stock market trends, and real-time industry developments. Get accurate insights into financial updates, market movements, and key events shaping the Nickel sector."
        keywords="Nickel news, Company Press Releases, Stock news, Market news, Trending stock news, Company news"
      />
      <Navbar />
      <div className="pt-[116px]">
        <Hero />
      </div>

      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-16 py-12 mt-6">
        {/* left */}
        <div className="w-full lg:w-[66%] flex flex-col space-y-20">
          <LatestNews />
          <PressReleaseNews />
          <StockNews />
        </div>
        {/* right */}
        <div className="w-full lg:w-[26%] space-y-20">
          <DailyNewsletterAd />
          <Substacks />
          <PopularIntradayReturn />
        </div>
      </div>

      <MoreNews />

      <div className="mt-0">
        <Footer />
      </div>
    </div>
  );
};

// ISR: revalidate every 5 minutes so news stays fresh without a full SSR hit on every request
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 300, // 5 minutes
  };
}

export default news;
