"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";

interface NavItem {
  number: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { number: "01.", label: "About", href: "/#about" },
  { number: "02.", label: "Projects", href: "/#projects" },
  { number: "03.", label: "Experience", href: "/#experience" },
  { number: "04.", label: "Certifications", href: "/#certifications" },
  { number: "05.", label: "Contact", href: "/#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    // Handle hash navigation
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const element = document.querySelector(href.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href.replace('/', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 pt-4 ${
        scrolled ? "bg-background/80 backdrop-blur-sm shadow-lg" : ""
      } transition-colors duration-300`}
    >
      <div className="w-full px-8 flex items-center justify-between">
        {/* Logo / Home */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="Logo for tycer.dev"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ number, label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="group flex items-center text-foreground hover:text-highlight transition-colors duration-200"
            >
              <span className="font-mono text-sm text-highlight mr-1">{number}</span>
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground hover:text-highlight transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-foreground/20 mt-4 px-8 py-4">
          <ul className="flex flex-col gap-6">
            {navItems.map(({ number, label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className="block text-foreground hover:text-highlight transition-colors duration-200"
                >
                  <span className="font-mono text-sm text-highlight mr-2">{number}</span>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
