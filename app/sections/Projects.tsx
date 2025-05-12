"use client";

import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  external: string;
  image: string;
  alt: string;
}

export default function Projects() {
  const protests: Project = {
    title: "US Civil Unrest Analysis",
    description:
      "Interactive dashboard analyzing US protest events using GDELT data. Built with Streamlit, Mapbox and Python.",
    tech: ["Python", "Streamlit", "Pandas", "Mapbox", "GDELT", "SQL"],
    external: "/protests", // Changed from external URL to internal route
    image: "/protests-analysis.png",
    alt: "Screenshot of US Civil Unrest Analysis Dashboard",
  };

  const portfolio: Project = {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and TailwindCSS.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Cloudflare"],
    external: "https://github.com/tycerch/portfolio",
    image: "/portfolio.png",
    alt: "Screenshot of Tycer.dev portfolio website",
  };

  const projects = [protests, portfolio];

  return (
    <section className="mx-auto max-w-4xl py-24 px-8" id="projects">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="text-highlight mr-2">03.</span> Projects
        <div className="ml-4 flex-grow border-t border-foreground/20" />
      </h2>

      {projects.map((project, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-3/5">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-foreground mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-3 text-sm text-highlight">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/5">
            {/* Image links externally to the project */}
            <Link 
              href={project.external} 
              target={project.external.startsWith('/') ? '_self' : '_blank'}
            >
              <div className="relative group">
                <div className="relative aspect-[899/656] bg-background-light rounded-md overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                {/* Decorative Border Container */}
                <div className="absolute inset-[-4px] -z-10 border-2 border-highlight rounded-md pointer-events-none" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
