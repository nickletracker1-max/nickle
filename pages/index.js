import React from "react";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import StayAhead from "@/components/Home/StayAhead";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import PopularTools from "@/components/Home/PopularTools";
import MostPopularNews from "@/components/Home/MostPopularNews";
import Substacks from "@/components/Home/Substacks";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import Footer from "@/components/Footer";
import TVLithiumCFD from "@/components/Home/TVLithiumCFD";
import TVLithium from "@/components/Home/TVLithium";
import DirectHomeLithiumPrice from "@/components/Home/DirectHomeLithiumPrice";
import HomeInsiderTransactions from "@/components/Home/HomeInsiderTransactions";
import SEO from "@/components/SEO";
import StocksMarquee from "@/components/Home/StocksMarquee";
import MostFollowedStocksTable from "@/components/Home/MostFollowedStocksTable";
import Head from "next/head";

// Build the full JSON-LD graph with live price data
function buildJsonLd(spotPrice, priceChange, priceChangePct, dateModified) {
  const siteUrl = "https://www.nickelmetaltracker.com";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#org`,
        name: "Nickel Metal Tracker",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
          width: 200,
          height: 60,
        },
        sameAs: [
          "https://www.uraniumtracker.com/",
          "https://www.lithiumtracker.com/",
          "https://www.coppertracker.com/",
          "https://www.pgmtracker.com/",
          "https://www.goldandsilvertracker.com/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Nickel Metal Tracker",
        inLanguage: "en-US",
        publisher: { "@id": `${siteUrl}/#org` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/news?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Nickel Tracker - Real-time News, Prices & Analysis",
        description: "Stay ahead with real-time Nickel market news, price updates, and in-depth analysis.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#org` },
        datePublished: "2023-01-01",
        dateModified,
      },
      {
        "@type": "Dataset",
        "@id": `${siteUrl}/#dataset-nickel-price`,
        name: "Nickel Spot Price",
        description: "Live nickel spot price in USD per pound, updated daily.",
        license: `${siteUrl}/disclaimer`,
        creator: { "@id": `${siteUrl}/#org` },
        dateModified,
        keywords: ["nickel price", "spot price", "nickel", "industrial metal"],
        variableMeasured: [
          {
            "@type": "PropertyValue",
            name: "Nickel Spot Price",
            unitCode: "USD/lb",
            value: spotPrice,
          },
          {
            "@type": "PropertyValue",
            name: "Daily Change",
            unitCode: "USD/lb",
            value: priceChange,
          },
          {
            "@type": "PropertyValue",
            name: "Daily Change Percent",
            unitCode: "%",
            value: priceChangePct,
          },
        ],
      },
    ],
  };
}

const home = ({ nickelSpot, jsonLd }) => {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <SEO
        title="Nickel Tracker - Real-time News, Prices & Analysis"
        description="Stay ahead with real-time Nickel market news, price updates, and in-depth analysis."
        keywords="Nickel prices, Nickel news, Nickel market analysis"
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {nickelSpot && (
        <div className="sr-only" aria-label="Live nickel spot price data">
          <p>
            Nickel Spot Price: ${nickelSpot.price} per pound.
            Daily change: ${nickelSpot.price_change} ({nickelSpot.price_change_percent}).
            Data as of {nickelSpot.date}.
          </p>
        </div>
      )}

      <Navbar />

      <div className="pt-[116px] w-full">
        <div className="mt-2 w-full">
          <StocksMarquee />
        </div>

        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-4 md:px-10 lg:px-12 py-8 items-start w-full mx-auto">
          
          <div className="lg:col-span-9 flex flex-col items-stretch space-y-12 w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-5 xl:col-span-5 w-full border border-black/10 rounded-lg pt-3 pl-3 pb-2 pr-3">
                <h2 className="text-[21px] font-bold mb-2 pb-1">
                  Nickel Price Chart
                </h2>
                <TVLithiumCFD />
              </div>
              <div className="md:col-span-7 xl:col-span-7 bg-white border border-black/10 rounded-lg pt-3 pl-3 pb-2">
                <h2 className="text-[21px] cambay font-bold mb-2">Prices</h2>
                <DirectHomeLithiumPrice />
              </div>
            </div>

            <div className="w-full block border border-black/10 p-3 mr-2 rounded-xl">
              <div className="flex justify-between items-center mb-3 border-black/10 pb-1">
                <h1 className="text-[21px] cambay font-bold">
                  Recent Canadian Company Insider Transactions
                </h1>
                <a href="/investments" className="text-sm text-accent font-semibold hover:underline">
                  view all
                </a>
              </div>
              <div className="w-full">
                <HomeInsiderTransactions />
              </div>
            </div>
            
            <div className="flex flex-col items-stretch w-full space-y-12">
              <div className="w-full block border border-black/10 p-3 mr-2 rounded-xl">
                <LatestNews />
              </div>
              <div className="w-full block border border-black/10 p-3 mr-2 rounded-xl">
                <PressReleaseNews />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col items-stretch space-y-8 w-full">
            <div className="border border-black/10 p-3 mr-2 rounded-xl">
              <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
                Nickel Futures
              </h2>
              <TVLithium />
            </div>
            <div className="border border-black/10 p-3 mr-2 rounded-xl">
              <Substacks />
            </div>
            <div className="border border-black/10 p-3 mr-2 rounded-xl">
              <PopularIntradayReturn />
            </div>
            <div className="border border-black/10 p-3 mr-2 rounded-xl">
              <PopularTools />
            </div>   
            <DailyNewsletterAd />
          </div>
        </div>

        <div className="px-4 md:px-10 lg:px-12 w-full space-y-16">
          <div className="border p-3 mr-2 border-black/10 pt-10 w-full rounded-xl">
            <StockNews />
          </div>
          <div className="border p-3 mr-2 border-black/10 pt-10 w-full rounded-xl">
            <MostPopularNews />
          </div>
        </div>
      </div>
      <div className="border-black/10 pt-10 w-full">
        <MostFollowedStocksTable />
      </div>
      <div className="pb-8 w-full">
        <StayAhead />
      </div>
      <Footer />
    </div>
  );
};

export default home;

export async function getServerSideProps() {
  const dateModified = new Date().toISOString();
  let nickelSpot = null;

  try {
    const res = await fetch("https://metal-scrapper.onrender.com/commodities", {
      headers: { "Accept": "application/json" },
      signal: AbortSignal.timeout(5000),
    });

    if (res.ok) {
      const data = await res.json();
      const nickel = Array.isArray(data)
        ? data.find((i) => i.name === "Nickel" || i.name === "nickel")
        : null;

      if (nickel) {
        nickelSpot = {
          price: parseFloat(nickel.price || 0).toFixed(4),
          price_change: parseFloat(nickel.day_change || 0).toFixed(4),
          price_change_percent: nickel.percent_change
            ? `${parseFloat(nickel.percent_change).toFixed(2)}%`
            : "0.00%",
          date: dateModified,
        };
      }
    }
  } catch (err) {
    console.warn("SSR nickel price fetch failed:", err.message);
  }

  const jsonLd = buildJsonLd(
    nickelSpot?.price ?? "N/A",
    nickelSpot?.price_change ?? "0",
    nickelSpot?.price_change_percent ?? "0%",
    dateModified
  );

  return {
    props: {
      nickelSpot,
      jsonLd,
    },
  };
}