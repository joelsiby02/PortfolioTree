"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-auto w-screen rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05]  relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "ExpressJS",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "AWS",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Google Cloud",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "NextJS",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
];
