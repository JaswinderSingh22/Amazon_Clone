"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import LandingPage from "@/components/organisms/LandingPage";

export default function Home() {
  return (
    <NextUIProvider className="bg-blue-100">
      <LandingPage />
    </NextUIProvider>
  );
}
