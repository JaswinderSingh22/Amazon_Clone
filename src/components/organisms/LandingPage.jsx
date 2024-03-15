import React from "react";
import Carousel from "../molecules/Carousel";
import {
  carouselImages,
  recentViews,
  todaysDeals,
  bestSeller,
} from "../../../data/data.json";
import RecentlyView from "./RecentlyView";
import TodaysDeals from "../molecules/TodaysDeals";

export default function LandingPage() {
  return (
    <div className="w-11/12 m-auto">
      <Carousel carouselImages={carouselImages} />
      <RecentlyView recentViews={recentViews} />
      <TodaysDeals deals={todaysDeals} title={"Top deals"} />
      <TodaysDeals deals={bestSeller} title={"Best Sellers"} />
      <TodaysDeals deals={bestSeller} title={"Best Sellers in Books"} />
      <TodaysDeals deals={bestSeller} title={"Best Sellers in Home and Kitchen"} />
    </div>
  );
}
