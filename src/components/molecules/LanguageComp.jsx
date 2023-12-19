import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function LanguageComp() {
  return (
    <Popover placement="bottom-start" offset={20} showArrow>
      <PopoverTrigger>
        <Button
          color="primary"
          variant="flat"
          radius="none"
          className="h-12 text-white bg-DarkPrimary capitalize hover:border-white border-transparent border-2 transition"
        >
          <i class="bi bi-flag-fill"></i>EN<i class="bi bi-caret-down-fill"></i>
        </Button>
      </PopoverTrigger>
      hellooooo
    </Popover>
  );
}
