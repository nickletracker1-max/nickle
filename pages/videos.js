import Navbar from "@/components/Navbar";
import VideoHero from "@/components/VideosPage/VideoHero";
import React from "react";
import { useRouter } from "next/router";
import TabsSection from "@/components/VideosPage/TabSection";
import Footer from "@/components/Footer";
import VideoList from "@/components/VideosPage/VideoList";
import SEO from "@/components/SEO";

const getCategoryFromTab = (tab) => {
  switch (tab) {
    case "featured":
      return "Featured";
    case "education":
      return "Education";
    case "company":
      return "Company";
    case "podcasts":
      return "Podcast";
    default:
      return "All";
  }
};

const Videos = () => {
  const { query } = useRouter();
  const currentTab = query.tab || "all";

  return (
    <div>
      <SEO
        title="Nickel Video Hub - Market Updates, Education & Insights"
        description="Enhance your Nickel market knowledge through our educational video content. From market fundamentals to advanced trading strategies, explore our comprehensive library of featured videos, company insights, podcasts, and educational resources."
        keywords="Nickel videos, market updates, Nickel education, trading strategies, company insights, Nickel podcasts, investment knowledge, Nickel and Nickel Alloys"
      />
      <Navbar />
      <div className="pt-[116px]">
        <VideoHero />
      </div>
      <div>
        <TabsSection />
        <div className="mt-6 px-3 md:px-12 mx-auto py-5 md:py-5">
          <VideoList category={getCategoryFromTab(currentTab)} />
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

// ISR: revalidate every 10 minutes — video catalogue changes infrequently
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 600, // 10 minutes
  };
}

export default Videos;
