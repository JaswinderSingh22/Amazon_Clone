import React from "react";
import Carousel from "../molecules/Carousel";
import jsonData from "../../../data/data.json";
import RecentlyView from "./RecentlyView";
import TodaysDeals from "../molecules/TodaysDeals";

export default function LandingPage() {
  return (
    <div className="w-11/12 m-auto">
      <Carousel carouselImages={jsonData.carouselImages} />
      <RecentlyView recentViews={jsonData.recentViews} />
      <TodaysDeals deals={jsonData.todaysDeals} title={"Top deals"} />
      <TodaysDeals deals={jsonData.bestSeller} title={"Best Sellers"} />
      <TodaysDeals deals={jsonData.bestSeller} title={"Best Sellers in Books"} />
      <TodaysDeals deals={jsonData.bestSeller} title={"Best Sellers in Home and Kitchen"} />
    </div>
  );
}
