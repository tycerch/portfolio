"use client";

import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  external: string;
  image: string;
}

export default function Projects() {
  const currentProject: Project = {
    title: "Forecastify.ai",
    description:
      "An innovative forecasting platform designed for small businesses, built with FastAPI and Next.js. Leverages modern ML techniques to deliver precise, data-driven forecasts.",
    tech: ["FastAPI", "Next.js", "Python", "Docker"],
    external: "https://forecastify.ai",
    image: "/forecastify.png", // Expected: Resize to an aspect ratio of approx 899:656 (≈1.37)
  };

  const completedProject: Project = {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and TailwindCSS. Showcases data analytics and supply chain expertise with smooth animations and an elegant design.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    external: "https://github.com/tycerch/portfolio",
    image: "/portfolio.png", // Expected: Resize to the same aspect ratio as above for consistency.
  };

  const ProjectDisplay = ({ project }: { project: Project }) => (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <div className="md:w-3/5">
        <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-slate-300 mb-4">{project.description}</p>
        <ul className="flex flex-wrap gap-3 text-sm text-highlight">
          {project.tech.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="md:w-2/5">
        <Link href={project.external} target="_blank" rel="noreferrer">
          <div className="relative group">
            <div className="relative aspect-[899/656] bg-slate-800 rounded-md overflow-hidden">
              {/*
                Expected project image specs: Resize the image to 899x656 or maintain an equivalent aspect ratio (≈1.37).
              */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors duration-300" />
            </div>
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 border border-highlight rounded-md 
                           group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="mx-auto max-w-4xl py-24 px-8">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="text-highlight mr-2">03.</span> Projects
        <div className="ml-4 flex-grow border-t border-slate-700" />
      </h2>

      <div className="mb-16">
        <h3 className="text-xl font-bold text-white mb-6">Current Project</h3>
        <ProjectDisplay project={currentProject} />
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-6">Past Projects</h3>
        <ProjectDisplay project={completedProject} />
      </div>
    </section>
  );
}
