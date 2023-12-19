"use client";
import React from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Products from "../../../data/data.json";
export default function SearchBar() {
  console.log("categories:", Products?.Products.categories);
  return (
    <div className="flex w-full gap-0 items-center justify-center  rounded-lg">
      <Select
        isRequired
        defaultSelectedKeys={"all"}
        radius="none"
        className="w-12"
        color="primary"
      >
        {Products.Products?.categories.map((category, index) => (
          <SelectItem key={index} value={category}>
            {category}
          </SelectItem>
        ))}
      </Select>
      <Input
        radius="none"
        placeholder="Search Amazon.in"
        aria-label="Categories"
      />
      <Button radius="none" className="bg-[#f4cb43] h-14">
        <i className="bi bi-search"></i>
      </Button>
    </div>
  );
}
