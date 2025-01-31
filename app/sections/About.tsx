import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-4xl py-24 px-8">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="text-highlight mr-2">01.</span> About Me
        <div className="ml-4 flex-grow border-t border-slate-700" />
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Content */}
        <div className="md:w-2/3 text-slate-300 leading-7">
          <p className="mb-4">
            I am a data-driven problem solver with over 15 years of experience in
            supply chain optimization, forecasting, and data analytics. Passionate
            about transforming complex data into actionable insights, I specialize
            in leveraging machine learning, predictive analytics, and business
            intelligence to enhance decision-making and drive operational efficiency.
          </p>
          <p className="mb-4">
            With deep expertise in education data and supply chain analytics, I’ve
            architected end-to-end analytics solutions—from ETL pipelines and data
            warehouses (BigQuery) to BI platforms (Apache Superset). Working in
            resource-constrained environments has made me cost-conscious and
            skilled in leveraging open-source tools to deliver high-impact
            solutions under budget. My focus is always on building scalable,
            data-driven systems that not only solve today’s challenges but also
            anticipate tomorrow’s needs.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3 relative group">
          <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-md">
            <Image
              src="/me.png"
              alt="Chris Tycer"
              fill
              className="rounded-md object-cover grayscale group-hover:grayscale-0 transition-all"
            />
          </div>
          <div className="border border-highlight rounded-md absolute top-5 left-5 w-full h-full hidden md:block -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
        </div>
      </div>
    </section>
  );
}
