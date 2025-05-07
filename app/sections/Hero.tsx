export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl min-h-[calc(100vh-80px)] flex flex-col justify-center py-32 px-8">
      <p className="text-highlight text-lg md:text-xl mb-1 font-mono">Hi, I&apos;m Chris Tycer</p>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Lead Data Analyst.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-foreground/70 mb-8">
        I transform data into business value.
      </h2>
      <p className="max-w-2xl text-foreground text-lg mb-12">
        Former supply chain leader with 18+ years of experience managing $50M in demand and $10M in vendor spend. 
        I architect enterprise BI systems, deploy ML forecasting models, and lead cross-functional data strategies 
        using SQL, Python, and modern analytics tools.
      </p>
      <div className="flex gap-4">
        <a
          href="https://drive.google.com/file/d/1b00tEEyP5fJV8h4i4yek-K-lkDlkgiLl/view?usp=sharing"
          className="highlight-button text-lg px-8 py-4"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
