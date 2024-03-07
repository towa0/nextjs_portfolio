import Link from "next/link";
import React from "react";
import Title from "./Title";
import { MovingBorderBtn } from "@/components/ui/moving-border";

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex items-center justify-between lg:flex-row flex-col-reverse lg:gap-0 gap-14 animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋 <br />
          <span className="underline underline-offset-8 decoration-blue-500">
            {"I'm Kyran."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Abu Dhabi, I'm a Front-end developer passionate for building modern web applications that users love."
          }
        </p>
        <Link
          href={"mailto:janssenkyran999@gmail.com"}
          className="inline-block group"
        >
          <Title text="Contact me" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📢 Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
