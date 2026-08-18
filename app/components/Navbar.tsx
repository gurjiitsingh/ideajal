'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Branding Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Dev<span className="text-sky-400">Agency</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="#services" className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-400">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-400">
                Our Work
              </Link>
              <Link href="#about" className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-400">
                About
              </Link>
              <Link href="#process" className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-400">
                Process
              </Link>
            </div>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="rounded-lg border border-sky-400 px-4 py-2 text-sm font-semibold text-sky-400 transition-all hover:bg-sky-400 hover:text-slate-900"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-b border-slate-800 bg-slate-900`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-sky-400"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-sky-400"
          >
            Our Work
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-sky-400"
          >
            About
          </Link>
          <Link
            href="#process"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-sky-400"
          >
            Process
          </Link>
          <div className="pt-4 pb-2 border-t border-slate-800 mt-2">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center rounded-lg bg-sky-400 px-4 py-2 text-base font-semibold text-slate-900 transition-all hover:bg-sky-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
