import React from "react";
import { SidebarLatestNewsProvider } from "../context/SidebarLatestNewsContext";
import { CommunityPostUtilsProvider } from "../context/CommunityPostUtilsContext";
import SEO from "@/components/SEO";
import Community from "@/components/Community/Community";

const CommunityPage = () => {
  return (
    <>
      <SEO
        title="Nickel Community - Discussions, Insights & Market Trends"
        description="Join the Nickel investment community to discuss market trends, stock insights, and industry news. Share your views, connect with investors, and stay informed about the latest updates in the Nickel and Nickel Alloys sector."
        keywords="Nickel community, investment discussions, stock insights, market trends, investor forum, Nickel and Nickel Alloys, financial discussions, market analysis"
      />
      <SidebarLatestNewsProvider>
        <CommunityPostUtilsProvider>
          <Community />
        </CommunityPostUtilsProvider>
      </SidebarLatestNewsProvider>
    </>
  );
};

export default CommunityPage;
