export default function Aboutus() {
  const stats = [
    { value: '40+', label: 'Engineers & Architects' },
    { value: '150+', label: 'Production Apps Deployed' },
    { value: '99.9%', label: 'SLA Uptime Maintained' },
    { value: '$40M+', label: 'Client Funding Raised' },
  ];

  const values = [
    {
      title: 'Production-First Mindset',
      description: 'We do not build prototypes that stall. We write thoroughly tested, production-grade systems ready for heavy user scale.',
    },
    {
      title: 'Complete System Transparency',
      description: 'You get full access to our Slack channels, real-time Jira sprint boards, and direct GitHub commit code repositories.',
    },
  ];

  return (
    <section id="about" className="bg-slate-950 py-24 sm:py-32 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid Layout Container */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          
          {/* Left Column: Agency Story Narrative */}
          <div>
            <h2 className="text-base font-semibold tracking-wider uppercase text-sky-400">
              Who We Are
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              An elite engineering group solving complex scale problems
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Founded by senior systems architects, we stepped away from corporate bureaucracies to construct a fast, high-caliber development alternative. We operate as a tightly integrated engineering extension for ambitious tech companies.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              We skip the fluff agency talk. Our teams focus purely on writing high-performance code, configuring automated scaling pipelines, and delivering secure architectures that maximize business velocity.
            </p>

            {/* Core Values Mini Cards */}
            <div className="mt-10 space-y-6">
              {values.map((value, idx) => (
                <div key={idx} className="border-l-2 border-sky-500/40 pl-4">
                  <h4 className="text-md font-bold text-white tracking-wide">{value.title}</h4>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Performance Stats Display Grid */}
          <div className="relative lg:mt-4">
            {/* Subtle decorative backing glow effect */}
            <div 
              className="absolute -inset-4 -z-10 bg-gradient-to-tr from-sky-500/10 to-blue-500/5 opacity-50 blur-xl rounded-3xl" 
              aria-hidden="true" 
            />
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center sm:p-8 transition-colors hover:border-slate-700/80"
                >
                  <p className="text-3xl font-extrabold tracking-tight text-sky-400 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Graphic Technical Badge box */}
            <div className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-900/20 p-6 flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                100% of our lead engineers hold senior certifications across AWS Core Systems, Google Cloud architectures, or advanced Kubernetes networks.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
