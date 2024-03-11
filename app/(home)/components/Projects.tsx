import React from "react";
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
  SiVite,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Threads Clone (Breads)",
      tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiMongodb],
      link: "https://breads-mu.vercel.app/sign-in?redirect_url=https%3A%2F%2Fbreads-mu.vercel.app%2F",
      cover: "/threads_clone.png",
    },
    {
      title: "Brainwave",
      tech: [SiVite, SiReact, SiJavascript, SiTailwindcss],
      link: "https://brainwaveai-lake.vercel.app/",
      cover: "/Brainwave.png",
    },
    {
      title: "Elektrische Lease",
      tech: [SiReact, SiJavascript, SiPython, SiTailwindcss, SiMongodb],
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
            <Link href={project.link} key={index}>
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
