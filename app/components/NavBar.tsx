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
    { number: "02.", label: "Experience", href: "#experience" },
    { number: "03.", label: "Work", href: "#work" },
    { number: "04.", label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 pt-4 ${
        scrolled ? "bg-background/80 backdrop-blur-sm shadow-lg" : ""
      } transition-colors duration-300`}
    >
      <div className="w-full pl-8 pr-4 md:pr-8 lg:pr-12 flex items-center justify-between">
        <Link href="#hero" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  <span className="text-highlight mr-1">{item.number}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="https://drive.google.com/file/d/1b00tEEyP5fJV8h4i4yek-K-lkDlkgiLl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 border border-highlight px-4 py-2 text-highlight text-sm rounded hover:bg-highlight hover:text-[#0a192f] transition-all"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile Navigation (to be implemented) */}
        <div className="md:hidden">
          {/* TODO: Implement mobile hamburger menu */}
        </div>
      </div>
    </header>
  );
}
