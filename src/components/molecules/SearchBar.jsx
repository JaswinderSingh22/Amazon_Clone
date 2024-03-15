"use client";
import React, { useState } from "react";
import { Products } from "../../../data/data.json";
export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="flex w-full gap-0 items-center justify-between text-black rounded-lg">
      <select
        name="products"
        id="products"
        defaultValue={"all"}
        className=" bg-slate-200 p-2 h-10 rounded-md rounded-e-none capitalize"
      >
        {Products.categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search Amazon.in"
        className="flex-1 p-2 focus:border-orange-300"
      />
      <button className="bg-orange-300 p-2 w-10 rounded-md rounded-s-none">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}
