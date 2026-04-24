import Navbar from "@/components/Navbar";
import React from "react";
import DataHero from "@/components/Data/DataHero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NickelIntro from "@/components/Data/NickelIntro";
import Prices from "@/components/Data/NickelPrices"
import ClassSplit from "@/components/Data/ClassSplit";
import LMEStocks from "@/components/Data/LMEStocks";
import Indonesia from "@/components/Data/Indonesia";
import NickelSupply from "@/components/Data/NickelSupply";
import PipelineSection from "@/components/Data/PipelineSection";
import StainlessSteelSection from "@/components/Data/StainlessSteelSection";
import Calculator from "@/components/Data/Calculator";
import Faq from "@/components/Data/Faq"
import BatteryDemand from "@/components/Data/BatteryDemand"
import Forecast from "@/components/Data/Forecast"
import Balance from "@/components/Data/Balance"
import Producers from "@/components/Data/Producers";
import History from "@/components/Data/History"
import Drivers from "@/components/Data/Drivers"
import Ticker from "@/components/Data/Ticker"
import SectionNav from "@/components/Data/SectionNav"
import CostCurve from "@/components/Data/CostCurve";

const Data = () => {
  

  return (
    <div>
      <SEO
        title="Nickel Market Data - Price Trends, Supply & Demand Insights"
        description="Access comprehensive Nickel market data, including price trends, supply and demand metrics, and industry analysis. Our detailed datasets provide the insights you need for informed decision-making in the Nickel market."
        keywords="Nickel market data, price trends, Nickel supply and demand, industry analysis, Nickel research, market insights, Nickel and Nickel Alloys, data analytics"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/data"
      />
      <Navbar />
      
      
      
      <div className="pt-28">
          <Ticker/>
          <DataHero />
      </div>

      <div className="flex flex-col divide-y divide-bdr ">
        <NickelIntro/>
        <SectionNav/>
        
        
        <Prices/>
        <ClassSplit/>
        <LMEStocks/>
        <Indonesia/>
        <NickelSupply/>
        <PipelineSection/>
        <StainlessSteelSection/>
        <BatteryDemand/>
        <Forecast/>
        <Balance/>
        <Producers/>
        <History/>
        <Drivers/>
        <CostCurve/>
        <Calculator/>
        <Faq/>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Data;
