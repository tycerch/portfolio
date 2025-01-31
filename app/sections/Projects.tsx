"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tech: string[];
  external: string;
  image?: string;
}

export default function Projects() {
  const featuredProjects: Project[] = useMemo(
    () => [
      {
        title: "Forecastify.ai",
        description: "Time series forecasting platform with advanced foundation models.",
        tech: ["FastAPI", "Next.js", "Python", "Docker"],
        external: "https://forecastify.ai",
        image: "/forecastify.png",
      },
      {
        title: "Demo Project",
        description:
          "An example featured project with a short paragraph of text, highlight your best work here!",
        tech: ["Python", "Postgres", "Docker"],
        external: "https://example.com",
        image: "/project.jpg",
      },
    ],
    []
  );

  const otherProjects: Project[] = useMemo(
    () => [
      {
        title: "Cool Data Viz",
        description: "Data visualization project exploring education metrics.",
        tech: ["React", "Tailwind"],
        external: "#",
      },
      {
        title: "ETL Pipeline Example",
        description: "Robust ETL pipeline for educational data using Airbyte.",
        tech: ["Airbyte", "BigQuery"],
        external: "#",
      },
      {
        title: "Recommendation Engine",
        description: "LightFM-based recommendation engine for personalized marketing.",
        tech: ["Python", "LightFM"],
        external: "#",
      },
      {
        title: "More Sample 1",
        description: "Lorem ipsum dolor sit amet, others.",
        tech: ["Tool1", "Tool2"],
        external: "#",
      },
      {
        title: "More Sample 2",
        description: "Lorem ipsum dolor sit amet, others.",
        tech: ["Tool1", "Tool2"],
        external: "#",
      },
    ],
    []
  );

  const [showMore, setShowMore] = useState(false);
  const PROJECT_LIMIT = 3;

  return (
    <section className="container mx-auto container-padding section-padding">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="text-highlight mr-2">03.</span> Some Things I’ve Built
        <div className="ml-4 flex-grow border-t border-slate-700" />
      </h2>

      {/* Featured Projects */}
      <div className="grid gap-12 mb-16">
        {featuredProjects.map((proj, index) => (
          <Link
            key={index}
            href={proj.external}
            target="_blank"
            rel="noreferrer"
            className="card group cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-4 group-hover:text-highlight transition-colors">
              {proj.title}
            </h3>
            <p className="text-slate mb-4">{proj.description}</p>
            <ul className="flex gap-3 text-sm text-slate-light">
              {proj.tech.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      {/* Other Projects */}
      <h3 className="text-xl font-bold text-white mb-6">Other Noteworthy Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(showMore ? otherProjects : otherProjects.slice(0, PROJECT_LIMIT)).map((proj, index) => (
          <Link
            key={index}
            href={proj.external}
            target="_blank"
            rel="noreferrer"
            className="card group cursor-pointer"
          >
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-highlight transition-colors">
              {proj.title}
            </h4>
            <p className="text-sm text-slate-300 mb-4">{proj.description}</p>
            <ul className="flex flex-wrap gap-2 text-xs text-slate-400">
              {proj.tech.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      {otherProjects.length > PROJECT_LIMIT && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="border border-highlight text-highlight px-4 py-2 rounded hover:bg-highlight hover:text-[#0a192f] transition-all"
          >
            Show {showMore ? "Less" : "More"}
          </button>
        </div>
      )}
    </section>
  );
}
