import React from "react";
import RecentProduct from "../molecules/RecentProduct";

export default function RecentlyView({ recentViews }) {
  const recent = [1, 2, 3, 4];
  return (
    <div className="w-full mt-[-70px] h-[40vh] flex justify-between items-center p-3 gap-5 ">
      {recent.map((item, index) => (
        <RecentProduct product={recentViews} key={index} />
      ))}
    </div>
  );
}
