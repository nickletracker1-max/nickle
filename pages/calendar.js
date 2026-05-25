import CalendarPage from "@/components/Calendar/CalendarPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import SEO from "@/components/SEO";

const calendar = () => {
  return (
    <div>
      <SEO
        title="Nickel Market Calendar - Key Events & Industry Updates"
        description="Stay informed with the latest Nickel market events in 2025. Track key industry conferences, financial updates, and supply-demand shifts with our comprehensive market calendar."
        keywords="Nickel market calendar 2025, Nickel and Nickel Alloys events, Nickel industry conferences, market updates, financial events, supply and demand trends"
      />
      <Navbar />
      <CalendarPage />

      <div className="mt-10 md:mt-16">
        <Footer />
      </div>
    </div>
  );
};

// ISR: calendar events change infrequently — revalidate every hour
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600, // 1 hour
  };
}

export default calendar;
