"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import jsonData from "../../../data/data.json";

export default function CategoryBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-BarGrey w-full shadow-lg sticky`}>
      <div className="flex items-center justify-evenly whitespace-nowrap ">
        <Button
          className="bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-4 left-0 cursor-pointer p-2"
          onClick={toggleDrawer}
          radius="none"
          size="sm"
          startContent={<i className="bi bi-list"></i>}
        >
          All
        </Button>
        {jsonData &&
          jsonData.catButtons.map((btn, index) => (
            <Button
              key={index}
              className="bg-BarGrey capitalize hover:border-white border-transparent border-2 transition text-white top-0 w-fit left-0 cursor-pointer p-2"
              onClick={toggleDrawer}
              radius="none"
              size="sm"
            >
              {btn}
            </Button>
          ))}
      </div>
      {isOpen && (
        <div
          className={`p-4 bg-blue-400 absolute left-0 top-0 h-[100vh] w-[400px] flex z-10 transition-transform duration-800 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } ease-in-out`}
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
