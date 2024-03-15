import Image from "next/image";
import React from "react";

export default function RecentProduct({ product }) {
  return (
    <div className="w-full h-full p-2 bg-white flex flex-col gap-5 z-10">
      <div className="font-bold">Pick up heading</div>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {product &&
          product.map((pro, index) => (
            <div key={index}>
              <Image width={120} height={100} src={pro.path} alt="Image" />
              <p>{pro.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
