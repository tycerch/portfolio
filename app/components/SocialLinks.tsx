import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

export default function SocialLinks() {
  const links: SocialLink[] = [
    { icon: <FaGithub />, url: "https://github.com/tycerch" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/chris-tycer-632b9796/" },
    { icon: <FaEnvelope />, url: "mailto:chris@tycer.dev" },
  ];

  return (
    <aside className="hidden md:flex flex-col items-center fixed bottom-12 left-8 z-50">
      <div className="flex flex-col gap-6">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-highlight transition-colors duration-200 text-xl"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}
