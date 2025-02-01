import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-4xl py-24 px-8" id="about">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="text-highlight mr-2">01.</span> About Me
        <div className="ml-4 flex-grow border-t border-slate-700" />
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Content */}
        <div className="md:w-2/3 text-slate-300 leading-7">
          <p className="mb-4">
            I am a data-driven problem solver with over 15 years of experience in supply
            chain optimization, forecasting, and data analytics. Passionate about
            transforming complex data into actionable insights, I specialize in leveraging
            machine learning, predictive analytics, and business intelligence to enhance
            decision-making and drive operational efficiency.
          </p>
          <p className="mb-4">
            With deep expertise in education data and supply chain analytics, I’ve architected
            end-to-end analytics solutions—from ETL pipelines and data warehouses to BI platforms.
            My focus is on building scalable, data-driven systems that solve today’s challenges
            while anticipating tomorrow’s needs.
          </p>
          <p className="mb-4">
            <strong>Skills:</strong> SQL, Python, Systems Design & Analysis, Machine Learning,
            Forecasting, and Business Intelligence.
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
    </section>
  );
}
