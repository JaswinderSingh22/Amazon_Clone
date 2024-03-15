import Image from "next/image";
import React from "react";
import { countries } from "../../../data/data.json";

export default function Footer() {
  return (
    <div className="w-full  bg-slate-600 flex flex-col items-start justify-center mt-5">
      <div className="w-full h-10 flex items-center justify-center text-white hover:bg-slate-400">
        <button className="w-full">Back to Top</button>
      </div>
      <div className=" w-full flex justify-center gap-24 p-5 bg-[#232F3E] text-small text-white">
        <div className="flex flex-col">
          <div className="font-bold">Get to Know Us</div>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Press Releases</a>
          <a href="/">Amazon Science</a>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Connect with Us</div>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Make Money with Us</div>
          <a href="/">Sell on Amazon</a>
          <a href="/">Make Money with Us Sell on Amazon</a>
          <a href="/">Protect and Build Your Brand</a>
          <a href="/">Amazon Global Selling</a>
          <a href="/">Become an Affiliate</a>
          <a href="/">Fulfilment by Amazon</a>
          <a href="/">Advertise Your Products</a>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Let Us Help You</div>
          <a href="/">COVID-19 and Amazon</a>
          <a href="/">Your Account</a>
          <a href="/">Returns Centre</a>
          <a href="/">100% Purchase Protection</a>
          <a href="/">Amazon App Download</a>
          <a href="/">Help</a>
        </div>
      </div>
      <hr class="solid"></hr>
      <div className="flex flex-col w-full p-5 bg-[#232F3E]">
        <div className="flex items-center justify-center">
          <Image alt="logo" width={100} height={100} src="/amazon.png"></Image>
          <select
            name="language"
            defaultValue={"English"}
            className="bg-[#232F3E] text-white outline p-1"
          >
            <option value="English">English</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <div></div>
      </div>
    </div>
  );
}
