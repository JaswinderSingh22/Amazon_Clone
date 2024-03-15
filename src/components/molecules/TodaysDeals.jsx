import Image from "next/image";
import React from "react";

export default function TodaysDeals({ deals, title }) {
  return (
    <div className="w-full  h-[30vh] flex flex-col justify-start gap-5 mt-5 overflow-auto p-3 bg-slate-50">
      <div className="font-bold">{title}</div>
      <div className="flex overflow-auto gap-3 flex-1">
        {deals.map((product, index) => (
          <Image
            key={index}
            width={140}
            height={100}
            alt="product"
            src={product.path}
          />
        ))}
      </div>
    </div>
  );
}
