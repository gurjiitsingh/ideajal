
'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {  
    const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API Network requests
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-slate-950 py-24 sm:py-32 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left Column: Direct Agency Trust Indicators */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-base font-semibold tracking-wider uppercase text-sky-400">
                Start a Project
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's scope your product engineering requirements
              </p>
              <p className="mt-4 text-lg text-slate-400">
                Have a clear architectural blueprint or just an alpha product goal? Fill out our system onboarding intake form and an engineering director will reach back out within 1 business day.
              </p>
            </div>

            {/* Direct Contact Metadata Points */}
            <div className="mt-12 space-y-6 border-t border-slate-900 pt-8">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-sky-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase">Direct Pipeline</p>
                  <p className="text-sm font-semibold text-white">sprints@devagencyx.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-sky-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase">Onboarding Guarantee</p>
                  <p className="text-sm font-semibold text-slate-300">NDA signed automatically prior to initial code audit review calls.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-qualifying Input Intake Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8 relative">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 animate-bounce">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Transmission Secured</h3>
                <p className="mt-2 text-sm text-slate-400 max-w-sm">
                  Your architecture request parameters have loaded successfully. An engineering advisor will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-2 block w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Estimated Project Budget Range
                  </label>
                  <select
                    id="budget"
                    className="mt-2 block w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="10k-25k">$10,000 – $25,000</option>
                    <option value="25k-50k">$25,000 – $50,000</option>
                    <option value="50k+">$50,000+ Enterprise Tier</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Project Scope Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="Tell us about the digital platform, stack preferences, or scale requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-sky-500 px-4 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition-all hover:bg-sky-400 disabled:opacity-50"
                >
                  {loading ? 'Initializing Interface Securely...' : 'Deploy System Inquiry'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
