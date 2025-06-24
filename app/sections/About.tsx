import Image from "next/image";
import React from "react";

const skills = [
  "Python & Machine Learning",
  "SQL & Data Warehousing",
  "BI Architecture & Visualization",
  "Statistical Analysis & Forecasting",
  "ETL/ELT Pipeline Design",
  "Supply Chain Analytics",
  "ERP Systems & Integration",
  "Cross-functional Collaboration",
  "Data Modeling & Governance",
  "BigQuery & Apache Superset",
  "Crisis Management & Strategy",
  "Process Optimization"
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
            I&apos;m a Data Analyst with 18+ years of specialized operations and supply chain expertise, combining advanced analytics, machine learning, and BI architecture to drive cross-departmental business transformations. 
            My experience spans from preventing $80M in revenue loss during global semiconductor disruptions through data-driven crisis management to architecting enterprise BI infrastructure that serves entire organizations.
          </p>
          <p className="mb-4">
            I architect enterprise BI solutions, develop custom analytical tools using Python and machine learning, and excel at working across executive, sales, marketing, and operations teams. 
            My approach blends deep technical skills with strong facilitation abilities, enabling me to translate complex data insights into actionable business strategies. 
            Currently completing my Bachelor&apos;s in Data Analytics to further strengthen my analytical foundation.
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

      {/* Skills section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-4">Core Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="text-foreground font-medium p-3 rounded-md border border-foreground/20 hover:border-highlight transition-colors duration-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
