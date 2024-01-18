"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

export default function CategoryBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`bg-BarGrey w-full shadow-lg`}>
      <div className="flex w-full items-center justify-evenly whitespace-nowrap">
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-2 "
          onClick={toggleDrawer}
          radius="none"
          size="sm"
          startContent={<i className="bi bi-list"></i>}
        >
          All
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-6 left-0 cursor-pointer p-0"
          radius="none"
        >
          Fresh
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-8 left-0 cursor-pointer p-0"
          radius="none"
        >
          Amazon Pay
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Prime
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Buy Again
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Todays deal
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Electronics
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Best sellers
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Fashion
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Amazon miniTV
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Sell
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Subscribe & Save
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Gift Cards
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0"
          radius="none"
        >
          Amazon Business
        </Button>
        <Button
          className=" bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-0 "
          radius="none"
        >
          New Launches from mobile , Electronics & more
        </Button>
      </div>
      {isOpen && (
        <div
          className={`p-4 bg-blue-400 absolute left-0 top-0 h-[100vh] w-[400px] flex z-10 transition-transform duration-200 transform ${
            isOpen ? "translate-x-[0px]" : "-translate-x-[0px]"
          }`}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            consequatur culpa illum amet in expedita officiis quia, ab
            consectetur perspiciatis quo explicabo, quaerat voluptatem labore
            eaque, veritatis eveniet. Culpa, nemo..
          </p>

          <i className="bi bi-x-square" onClick={toggleDrawer}></i>
        </div>
      )}
    </div>
  );
}
