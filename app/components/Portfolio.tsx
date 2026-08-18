import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'QuantumPay Core Architecture',
      category: 'Fintech Platform',
      metric: '0.4s Global Latency',
      description: 'Engineered a decentralized high-throughput transactional engine capable of processing micro-payments with near-zero edge latency.',
      tech: ['Next.js 15', 'Go / Rust', 'Redis', 'AWS Edge'],
      link: '#',
    },
    {
      title: 'HelixHealth AI Core',
      category: 'Healthcare Machine Learning',
      metric: '99.4% Diagnostic Speed',
      description: 'Constructed an encrypted real-time vector analysis model routing system to process massive laboratory image telemetry arrays securely.',
      tech: ['TypeScript', 'Python', 'PyTorch', 'Kubernetes'],
      link: '#',
    },
    {
      title: 'ApexCommerce Cloud Engine',
      category: 'Enterprise E-Commerce',
      metric: '+142% Load Performance',
      description: 'Migrated an aging enterprise catalog database into a global headless infrastructure system built to handle flash-sale spikes seamlessly.',
      tech: ['Next.js Commerce', 'GraphQL', 'Stripe API', 'Docker'],
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="bg-slate-950 py-24 sm:py-32 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Content Metadata */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold tracking-wider uppercase text-sky-400">
              Proven Deployments
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Systems built for enterprise scale
            </p>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 max-w-sm text-sm md:text-right">
            We deliver production-ready software deployments that achieve measurable technical results.
          </p>
        </div>

        {/* Dynamic Project Performance Matrix Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/30 p-8 transition-all duration-300 hover:border-slate-700/80 hover:bg-slate-900/60"
            >
              <div>
                {/* Category & Performance KPI Stat Metric Badge */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-mono font-medium text-sky-400 border border-sky-500/20">
                    {project.metric}
                  </span>
                </div>

                {/* Case Study Core Context */}
                <h3 className="mt-6 text-xl font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Architecture Ecosystem Meta Tags */}
                <div className="mt-8 flex flex-wrap gap-1.5">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded bg-slate-950 px-2 py-0.5 font-mono text-[11px] text-slate-400 border border-slate-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Case Study Optimized Link block */}
                <div className="mt-6 pt-4 border-t border-slate-800/60">
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-xs font-semibold tracking-wide text-white uppercase group-hover:text-sky-400 transition-colors"
                  >
                    Examine Architecture 
                    <svg className="ml-1.5 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
