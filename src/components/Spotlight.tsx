import React from "react";
import { cn } from "@/lib/utils"
import Spotlight from "@/components/ui/Spotlight";
import { TextRevealCardPreview } from "./Text-Reveal";
import { SparklesPreview } from "./Sparkles";

import { Socials } from "@/components/Socials";


export function SpotlightPreview() {
  return (
    <div className="w-full h-screen flex items-center md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="select-none text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Joel Siby
        </h1>
        <div className="m-3">

        </div>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        From Data to Decisions: Empowering Tomorrow with Insights Today
        </p>
        <div className="mt-20">
        <Socials/>
        </div>
      </div>
    </div>
  );
}
