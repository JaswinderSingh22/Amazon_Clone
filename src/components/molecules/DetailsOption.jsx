import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function DetailsOption() {
  return (
    <Popover placement="bottom-end" offset={20} showArrow>
      <PopoverTrigger>
        <Button
          color="primary"
          variant="flat"
          radius="none"
          className="w-48 bg-DarkPrimary h-12 capitalize flex  hover:border-white border-transparent border-2 transition text-xs text-white"
        >
          <div className="flex flex-col items-start justify-start text-white">
            <span>Hello, Jaswinder</span>
            <span>Accounts & Lists</span>
          </div>
          <i className="bi bi-caret-down-fill"></i>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="">
        <div className="flex p-7 gap-5">
          <div className="flex-col flex">
            <div className="font-bold text-medium mb-3">Your Lists</div>
            <a className="text-sm" href="/">
              Create a Wish List
            </a>
            <a className="text-sm" href="/">
              Wish From any website
            </a>
            <a className="text-sm" href="/">
              Baby wishlist
            </a>
            <a className="text-sm" href="/">
              Discover your style
            </a>
            <a className="text-sm" href="/">
              Explore Showroom
            </a>
          </div>
          <div className="bg-blue-100 w-0.5 "></div>
          <div className="flex flex-col">
            <div className="font-bold text-medium mb-3">Your Account</div>
            <a className="text-sm" href="/">
              Your Account
            </a>
            <a className="text-sm" href="/">
              Your Order
            </a>
            <a className="text-sm" href="/">
              Your Wishlist
            </a>
            <a className="text-sm" href="/">
              Your Account
            </a>
            <a className="text-sm" href="/">
              Your OrderAccount
            </a>
            <a className="text-sm" href="/">
              Your WishlistAccount
            </a>
            <a className="text-sm" href="/">
              Your Account
            </a>
            <a className="text-sm" href="/">
              Your Order
            </a>
            <a className="text-sm" href="/">
              Your WishlistAccount
            </a>
            <a className="text-sm" href="/">
              Your Account
            </a>
            <a className="text-sm" href="/">
              Your OrderAccount
            </a>
            <a className="text-sm" href="/">
              Your Wishlist
            </a>
            <a className="text-sm" href="/">
              Your Account
            </a>
            <a className="text-sm" href="/">
              Your Order
            </a>
            <a className="text-sm" href="/">
              Your Wishlist
            </a>
            <a className="text-sm" href="/">
              Your Account
            </a>
            <a className="text-sm" href="/">
              Your Order
            </a>
            <a className="text-sm" href="/">
              Your Wishlist
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
