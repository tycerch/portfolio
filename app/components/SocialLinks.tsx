import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

export default function SocialLinks() {
  const links: SocialLink[] = [
    { icon: <FaGithub />, url: "https://github.com/tycerch" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/chris-tycer-632b9796" },
    { icon: <FaEnvelope />, url: "mailto:chris@tycer.dev" },
  ];

  return (
    <aside className="hidden md:flex flex-col items-center fixed bottom-0 left-8 z-50">
      <ul className="flex flex-col space-y-5 after:content-[''] after:w-[1px] after:h-24 after:bg-foreground after:mx-auto">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-foreground hover:text-highlight transition-colors"
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
