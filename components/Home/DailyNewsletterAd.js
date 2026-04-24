import React from "react";
import { useRouter } from "next/router";
import CardSkeleton from "@/components/CardSkeleton"

const DailyNewsletterAd = () => {
  const router = useRouter();

  const handleSubscribe = () => {
    router.push("/data/"); // Redirects to the signup page
  };

  return (
    <div className="bg-gradient-to-b from-accent to-accent/50 rounded-lg p-8">
      {/* Heading Section */}
      <h2 className="text-white text-3xl font-semibold cambay">
        Go  our <span className="text-white">Free</span>
      </h2>
      <h2 className="text-white text-3xl font-bold cambay">
        Data Page.
      </h2>

      {/* Button Section */}
      <div className="mt-6">
        <button
          onClick={handleSubscribe}
          className="w-full text-sm bg-white hover:bg-white/80 text-black font-bold py-[10px] rounded transition-colors duration-200"
        >
          Data Page
        </button>
      </div>
    </div>
  );
};

export default DailyNewsletterAd;
