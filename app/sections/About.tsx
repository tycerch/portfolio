import Image from "next/image";
import React from "react";

// We'll define skill data inline
const skills = [
  { name: "Forecasting/ML", rating: 8 },
  { name: "BI & Dashboards", rating: 7 },
  { name: "SQL", rating: 7 },
  { name: "Python", rating: 6 },
  { name: "Prompt Engineering", rating: 7 },
  { name: "Supply Chain Optimization", rating: 9 },

];

export default function About() {
  return (
    <section className="mx-auto max-w-4xl py-24 px-8" id="about">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="text-highlight mr-2">01.</span> About Me
        <div className="ml-4 flex-grow border-t border-foreground/20" />
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Content */}
        <div className="md:w-2/3 text-foreground leading-7">
          <p className="mb-4">
            My path has been one of continuous evolution, starting deep within supply chain operations and naturally progressing towards a focus on data analytics. 
            Over 18 years, primarily with one company, I&apos;ve moved from managing procurement and planning to architecting data solutions, 
            driven by a consistent desire to optimize processes and uncover efficiencies.
          </p>
          <p className="mb-4">
            What truly motivates me is leveraging technology—whether configuring ERP systems, developing Python tools, or building BI dashboards —to bring clarity to complex situations. 
            I enjoy not just analyzing data, but building systems and tools that empower others to make better decisions, a passion that continues with personal projects like forecastify.ai.
            I approach problems with a blend of analytical rigor gained from data science and a practical, results-oriented mindset honed through years of operational experience.
          </p>
        </div>

        {/* Portrait Image */}
        <div className="md:w-1/3 relative group">
          <div className="relative w-full aspect-[2659/2293]">
            {/* Decorative Border Container */}
            <div className="absolute inset-[-4px] -z-10 border-2 border-highlight rounded-md pointer-events-none" />
            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <Image
                src="/me.png"
                alt="Chris Tycer"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover rounded-md grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills embedded below the text/image */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-4">Core Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              {/* Skill Name */}
              <p className="text-foreground font-medium">{skill.name}</p>

              {/* Stepped Visualization: 10 small squares */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={
                      i < skill.rating
                        ? "h-3 w-3 bg-highlight rounded-sm"
                        : "h-3 w-3 bg-foreground/20 rounded-sm"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
