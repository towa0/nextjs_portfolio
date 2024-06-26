import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiThreedotjs,
  SiRailway,
  SiSqlite,
  SiOpenai,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Apple iPhone 15 landing page",
      tech: [SiVite, SiReact, SiThreedotjs, SiTailwindcss],
      link: "https://apple-frontend-clone.vercel.app/",
      cover: "/apple_clone.png",
    },
    {
      title: "Threads Clone (Breads)",
      tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiMongodb],
      link: "https://breads-mu.vercel.app/sign-in?redirect_url=https%3A%2F%2Fbreads-mu.vercel.app%2F",
      cover: "/threads_clone.png",
    },
    {
      title: "Motorverzekeringen Vergelijk",
      tech: [
        SiVite,
        SiReact,
        SiJavascript,
        SiTailwindcss,
        SiExpress,
        SiSqlite,
        SiOpenai,
        SiRailway,
      ],
      link: "https://motorverzekeringen-vergelijk.nl/",
      cover: "/motorverzekeringen.png",
    },
    {
      title: "Zenno",
      tech: [
        SiVite,
        SiReact,
        SiJavascript,
        SiTailwindcss,
        SiExpress,
        SiSqlite,
        SiRailway,
      ],
      link: "https://zenno-ten.vercel.app/",
      cover: "/ZennoImg.png",
    },
    {
      title: "Brainwave",
      tech: [SiVite, SiReact, SiJavascript, SiTailwindcss],
      link: "https://brainwaveai-lake.vercel.app/",
      cover: "/Brainwave.png",
    },
    {
      title: "Elektrische-Lease",
      tech: [
        SiReact,
        SiJavascript,
        SiPython,
        SiTailwindcss,
        SiMongodb,
        SiExpress,
        SiRailway,
      ],
      link: "https://elektrische-lease.nl/",
      cover: "/elektrische-lease.png",
    },
    {
      title: "HiLink",
      tech: [SiVite, SiReact, SiTypescript, SiTailwindcss],
      link: "https://travel-app-ashy-delta.vercel.app/",
      cover: "/travel_app.png",
    },
    {
      title: "Tesla Clone",
      tech: [SiVite, SiReact, SiTypescript, SiTailwindcss],
      link: "https://tesla-frontend-clone.vercel.app/",
      cover: "/teslaclone.png",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
