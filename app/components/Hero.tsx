import Link from 'next/link';

export default function Hero() {  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Decorative Radial Glowing Background Background */}
      <div 
        className="absolute left-1/2 top-0 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_50%)]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Top Banner Tag */}
          <div className="mx-auto mb-6 inline-flex items-center gap-x-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-sky-400">
            <span className="flex h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            Now booking projects for Q3 2026
          </div>

          {/* Primary High-Impact Heading */}
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
         Idea Plus <br className="hidden sm:inline" />
          
          </h1>

          {/* Supportive Explainer Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-slate-400">
            We are an elite software development group constructing high-velocity web apps, 
            optimized cloud orchestration, and responsive interfaces customized to accelerate market disruption.
          </p>

          {/* Call To Action Buttons Interface Container */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#contact"
              className="rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:bg-sky-400 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Let's Discuss Tech
            </Link>
            <Link
              href="#portfolio"
              className="group text-sm font-semibold leading-6 text-white transition-colors hover:text-sky-400"
            >
              View Our Systems <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Tech Ecosystem Metatags Display Section */}
          <div className="mt-20 border-t border-slate-900 pt-10">
           
          </div>

        </div>
      </div>
    </section>
  );
}
