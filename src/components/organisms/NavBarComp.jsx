import { Button, Image } from "@nextui-org/react";
import React from "react";
import SearchBar from "../molecules/SearchBar";
import LanguageComp from "../molecules/LanguageComp";
import DetailsOption from "../molecules/DetailsOption";

export default function NavBarComp() {
  return (
    <div className="bg-DarkPrimary text-white w-full h-16 flex gap-3 items-center p-3 ">
      <div className="h-14 w-48 flex items-center hover:border-white border-transparent border-2 transition">
        <Image alt="logo" width={150} height={100} src="/amazon.png"></Image>
      </div>
      <div className="text-xs flex items-center w-60 h-12 hover:border-white border-transparent border-2 transition justify-between">
        <i className="bi bi-geo-alt"></i>
        <div className="">
          <div>Deliver to Jaswinder</div>
          <span>Gurugram 122002</span>
        </div>
      </div>
      <SearchBar />
      <LanguageComp />
      <DetailsOption />
      <Button
        className="h-12 whitespace-break-spaces	bg-DarkPrimary text-white hover:border-white border-transparent border-2 transition"
        variant="bordered"
        radius="none"
      >
        Return & orders
      </Button>
      <Button
        radius="none"
        className="bg-DarkPrimary h-12 text-white hover:border-white border-transparent border-2 transition"
      >
        <i className="bi bi-cart3 bi-2x"></i>
        Cart
      </Button>
    </div>
  );
}
