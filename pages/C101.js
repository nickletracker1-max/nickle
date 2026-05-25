import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import SEO from "@/components/SEO";
import Content from "@/components/C101/Content"
import Section1 from "@/components/C101/Section1"
import Section2 from "@/components/C101/Section2"
import Section3 from "@/components/C101/Section3"
import Section4 from "@/components/C101/Section4"
import Section5 from "@/components/C101/Section5"
import Section6 from "@/components/C101/Section6"
import Section7 from "@/components/C101/Section7"
import Section8 from "@/components/C101/Section8"
import Section9 from "@/components/C101/Section9"
import Section10 from "@/components/C101/Section10"
import Section11 from "@/components/C101/Section11"
import Section12 from "@/components/C101/Section12"
import Section13 from "@/components/C101/Section13"
import Section14 from "@/components/C101/Section14"
import Section15 from "@/components/C101/Section15"
import Section16 from "@/components/C101/Section16"
import Section17 from "@/components/C101/Section17"
import Section18 from "@/components/C101/Section18"
import Faq from "@/components/Data/Faq.js"

const C101 = () => {
  return (
    <div>
      <SEO
        title="How to Invest in Nickel — Complete 2026 Guide"
        description="A complete guide to nickel investing: LME Class 1 vs NPI Class 2, Indonesian supply dominance, the Tsingshan short squeeze, stainless steel demand, and how to invest via ETFs and mining stocks."
        keywords="nickel investing, nickel price, LME nickel, NPI nickel, Class 1 nickel, nickel ETF, nickel stocks, nickel market, how to invest in nickel, nickel guide"
      />
      <Navbar />
      <div className='flex flex-col divide-y divide-bdr pt-[116px]'>
        <Content/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Section10/>
        <Section11/>
        <Section12/>
        <Section13/>
        <Section14/>
        <Section15/>
        <Section16/>
        <Section17/>
        <Section18/>
        <Faq/>
      </div>
      

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

// ISR: C101 is pure static educational content — revalidate once per day
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400, // 24 hours
  };
}

export default C101;