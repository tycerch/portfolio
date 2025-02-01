"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

interface NavItem {
  number: string;
  label: string;
  href: string;
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { number: "01.", label: "About", href: "#about" },
    { number: "02.", label: "Certifications", href: "#certifications" },
    { number: "03.", label: "Experience", href: "#experience" },
    { number: "04.", label: "Projects", href: "#projects" },
    { number: "05.", label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 pt-4 ${
        scrolled ? "bg-background/80 backdrop-blur-sm shadow-lg" : ""
      } transition-colors duration-300`}
    >
      <div className="w-full px-8 flex items-center justify-between">
        <Link href="#hero" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-8">
            {navItems.map(({ number, label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-center text-slate-300 hover:text-highlight transition-colors duration-200"
                >
                  <span className="font-mono text-sm text-highlight mr-1">
                    {number}
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
