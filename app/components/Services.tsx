export default function Services() {
  const services = [
    {
      title: 'Custom Web Apps',
      description: 'High-performance, secure frontends linked to reliable distributed backends using modern technologies.',
      tech: ['Next.js', 'React', 'Node.js', 'GraphQL'],
      icon: (
        <svg className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: 'Mobile Architecture',
      description: 'Native iOS and Android systems built with clean interface architectures and high runtime operational speeds.',
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      icon: (
        <svg className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3M12 18.75h.008v.008H12v-.008Z" />
        </svg>
      ),
    },
    {
      title: 'Cloud & DevOps Systems',
      description: 'Automated software configuration pipelines and horizontal scaling infrastructure across major cloud providers.',
      tech: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
      icon: (
        <svg className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
    {
      title: 'AI & Data Integration',
      description: 'Deploying secure localized large language models, structured vector routing, and automated pipeline analysis tools.',
      tech: ['Python', 'PyTorch', 'LangChain', 'Pinecone'],
      icon: (
        <svg className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l8.913-6.247M18 12V4.5A2.25 2.25 0 0 0 15.75 2.25H3.75A2.25 2.25 0 0 0 1.5 4.5V18a2.25 2.25 0 0 0 2.25 2.25h7.5M18 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm0 0h3.375C22.25 12 23 12.75 23 13.625v5.625c0 .875-.75 1.625-1.625 1.625H18v-8.875Z" />
        </svg>
      ),
    },
    {
      title: 'E-Commerce Infrastructure',
      description: 'Highly available transactional storefront engines designed with optimal page load speed and smooth payment paths.',
      tech: ['Shopify Plus', 'Next.js Commerce', 'Stripe'],
      icon: (
        <svg className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      ),
    },
    {
      title: 'Dedicated Squads',
      description: 'Full-time agile engineering extensions equipped to manage product backlogs and deliver high-velocity output.',
      tech: ['Agile Process', 'CI/CD Flow', 'Daily Syncs'],
      icon: (
        <svg className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Metadata */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold tracking-wider uppercase text-sky-400">
            Our Capability Spectrum
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineered solution offerings for modern companies
          </p>
          <p className="mt-4 text-lg text-slate-400">
            We deliver robust production architectures that eliminate engineering backlogs and scale systems cleanly.
          </p>
        </div>

        {/* Dynamic 3-Column Responsive Grid Area */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900"
            >
              {/* Icon Interactive Badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 transition-colors group-hover:border-sky-500/20 group-hover:bg-sky-500/10">
                {service.icon}
              </div>

              {/* Service Details info */}
              <h3 className="mt-6 text-xl font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>

              {/* Technology Tags Meta Bar Container */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {service.tech.map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center rounded-md bg-slate-950 px-2.5 py-1 text-xs font-mono text-slate-400 border border-slate-800/80"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
