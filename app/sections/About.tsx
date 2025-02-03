import Image from "next/image";
import React from "react";

// We'll define skill data inline
const skills = [
  { name: "Forecasting/ML", rating: 8 },
  { name: "BI & Dashboards", rating: 7 },
  { name: "SQL", rating: 5 },
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
            I am a data-driven problem solver with over 15 years of experience in supply chain optimization, 
            forecasting, and data analytics—based in Portland, Oregon. I transform complex data into actionable 
            insights by leveraging machine learning, predictive analytics, and business intelligence to drive 
            operational efficiency and improve decision-making.
          </p>
          <p className="mb-4">
            My expertise spans architecting end-to-end analytics solutions—from building robust ETL pipelines 
            and scalable data warehouses on BigQuery to deploying cost-effective BI platforms like Apache Superset 
            and developing predictive models. With a deep background in education data and supply chain analytics, 
            I design systems that address today’s challenges while anticipating tomorrow’s needs.
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
