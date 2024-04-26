import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/kyran-janssen-551b31193/",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/towa0/",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://drive.google.com/file/d/1ivbY6p7QV7M3l3-miZb6bhp3xKu28gab/view",
      label: "Resume",
      icon: FiFileText,
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-blue-500">
        Kyran Janssen🇯🇵🇳🇱
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              target="_blank"
              href={social.link}
              key={index}
              aria-label={social.label}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
