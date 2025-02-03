export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl min-h-[calc(100vh-80px)] flex flex-col justify-center py-32 px-8">
      <p className="text-highlight text-lg md:text-xl mb-1 font-mono">Hi, I&apos;m Chris Tycer</p>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Data & Supply Chain Analyst.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-foreground/70 mb-8">
        I build data-driven solutions.
      </h2>
      <p className="max-w-2xl text-foreground text-lg mb-12">
        With over 15 years of experience in supply chain optimization, forecasting, and data analytics, 
        I design scalable data infrastructures and predictive models that empower businesses with actionable 
        insights and operational efficiency.
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:chris@tycer.dev"
          className="highlight-button text-lg px-8 py-4"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
