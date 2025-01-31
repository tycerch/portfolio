export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl min-h-[calc(100vh-80px)] flex flex-col justify-center py-24 px-8">
      <p className="text-highlight text-lg mb-2">Hi, my name is</p>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Chris Tycer.
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-5">
        I build data-driven solutions.
      </h2>
      <p className="max-w-2xl text-slate-300">
        I’m a data analyst, software developer, and machine learning enthusiast
        specializing in building end-to-end analytics solutions to solve real-world
        business problems and optimize supply chains. Currently, I’m focused on
        building efficient, cost-conscious open-source data pipelines.
      </p>
    </section>
  );
}
