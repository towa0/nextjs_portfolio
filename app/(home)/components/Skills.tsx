"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "HTML",
      icon: SiHtml5,
    },
    {
      text: "CSS",
      icon: SiCss3,
    },
    {
      text: "JavaScript",
      icon: SiJavascript,
    },
    {
      text: "TypeScript",
      icon: SiTypescript,
    },
    {
      text: "Python",
      icon: SiPython,
    },
    {
      text: "ReactJS",
      icon: SiReact,
    },
    {
      text: "NextJS",
      icon: SiNextdotjs,
    },
    {
      text: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      text: "NodeJS",
      icon: SiNodedotjs,
    },
    {
      text: "ExpressJS",
      icon: SiExpress,
    },
    {
      text: "MongoDB",
      icon: SiMongodb,
    },
    {
      text: "Git",
      icon: SiGit,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
