import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function LanguageComp() {
  return (
    <Popover placement="bottom-end" offset={20} showArrow>
      <PopoverTrigger>
        <Button
          color="primary"
          variant="flat"
          radius="none"
          className="h-12 text-white bg-DarkPrimary capitalize hover:border-white border-transparent border-2 transition"
        >
          <i className="bi bi-flag-fill"></i>EN
          <i className="bi bi-caret-down-fill"></i>
        </Button>
      </PopoverTrigger>
      <PopoverContent>hello</PopoverContent>
    </Popover>
  );
}
