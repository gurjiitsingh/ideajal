import Link from 'next/link';

export default function Footer() { 
     const currentYear = new Date().getFullYear();

  const navigation = {
    solutions: [
      { name: 'Custom Web Apps', href: '#services' },
      { name: 'Mobile Architecture', href: '#services' },
      { name: 'Cloud & DevOps Systems', href: '#services' },
      { name: 'AI Integration', href: '#services' },
    ],
    agency: [
      { name: 'About Us', href: '#about' },
      { name: 'Proven Deployments', href: '#portfolio' },
      { name: 'Our Process', href: '#process' },
      { name: 'Contact Intake', href: '#contact' },
    ],
    legal: [
      { name: 'Data Security', href: '#' },
      { name: 'NDA Terms', href: '#' },
      { name: 'Privacy Protocol', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Main Grid Area Layout */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand Left Box Section */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Dev<span className="text-sky-400">Agency</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Constructing production-ready software systems engineered to eliminate architectural constraints.
            </p>
            {/* System Server Operational Health Indicator */}
            <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-medium text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </div>
          </div>

          {/* Links Column Group Container */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Solutions</h3>
              <ul role="list" className="mt-4 space-y-2.5">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Agency</h3>
              <ul role="list" className="mt-4 space-y-2.5">
                {navigation.agency.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 mt-8 sm:mt-0">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Security & Legal</h3>
              <ul role="list" className="mt-4 space-y-2.5">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Section Area */}
        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-slate-500 order-2 md:order-1">
            &copy; {currentYear} DevAgencyX. Distributed infrastructure frameworks. All rights reserved.
          </p>
          
          {/* Functional Code Architecture Framework Stamps */}
          <div className="flex items-center gap-x-4 text-[10px] font-mono text-slate-600 order-1 md:order-2">
            <span>SECURE ISO-27001</span>
            <span>•</span>
            <span>SOC2 TYPE II COMPLIANT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
