import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function DetailsOption() {
  return (
    <Popover placement="bottom-start" offset={20} showArrow color="primary">
      <PopoverTrigger>
        <Button
          color="primary"
          variant="flat"
          radius="none"
          className="w-48 bg-DarkPrimary h-12 capitalize flex  hover:border-white border-transparent border-2 transition text-xs text-white"
        >
          <div className="flex flex-col items-start justify-start">
            <span>Hello, Jaswinder</span>
            <span>Accounts & Lists</span>
          </div>
          <i className="bi bi-caret-down-fill"></i>
        </Button>
      </PopoverTrigger>
      hellooooo
    </Popover>
  );
}
