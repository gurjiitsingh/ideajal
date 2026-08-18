import Link from "next/link";
import {
  Calculator,
  Code2,
  Monitor,
  Globe,
  Download,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Laptop,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Calculator,
      title: "Professional Accounting Software Development",
      desc: "We are Accounting Software Professionals based in Jalandhar specializing in complete billing and financial management solutions.",
    },
    {
      icon: Code2,
      title: "Customized Computer Software Development",
      desc: "We provide customized software tailored specifically as per client requirements and business workflows.",
    },
    {
      icon: Monitor,
      title: "Computer Software & Hardware",
      desc: "All types of computer software installations, maintenance, and hardware service support.",
    },
    {
      icon: Globe,
      title: "Website Designing Services",
      desc: "All types of website designing and development services in Jalandhar to build your online presence.",
    },
  ];

  const downloads = [
    { title: "Ideaplus Update 2026.588", tag: "Software Release Patch" },
    { title: "Invoice Update 2753", tag: "GST & Billing Fix" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col scroll-smooth">
      {/* ---------------- NAVIGATION BAR ---------------- */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-white">
              IDEAPLUS <span className="text-[#F13E93]">SOFTWARES</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <Link href="#" className="hover:text-[#F13E93] transition-colors">
              Home
            </Link>
            <Link href="#services" className="hover:text-[#F13E93] transition-colors">
              Services
            </Link>
            <Link href="#demo" className="hover:text-[#F13E93] transition-colors">
              Software Demo
            </Link>
            <Link href="#updates" className="hover:text-[#F13E93] transition-colors">
              Downloads
            </Link>
            <Link href="#about" className="hover:text-[#F13E93] transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="hover:text-[#F13E93] transition-colors">
              Contact Us
            </Link>
          </nav>

          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F13E93] hover:bg-[#d82f7e] text-white font-medium text-sm transition-all shadow-lg shadow-[#F13E93]/20"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Link>
        </div>
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F13E93]/10 text-[#F13E93] text-xs font-semibold tracking-wide uppercase border border-[#F13E93]/20 mb-6">
            Software Development Company in Jalandhar
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Professional Accounting & Customized Computer Software
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Idea Plus Software provides custom desktop applications, accounting tools, hardware services, and website designing tailored to your exact business needs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#demo"
              className="px-6 py-3.5 rounded-xl bg-[#F13E93] hover:bg-[#d82f7e] text-white font-semibold text-base transition-all shadow-xl shadow-[#F13E93]/25 flex items-center gap-2"
            >
              Get Accounting Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-base transition-all border border-slate-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section id="services" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
            <p className="mt-3 text-slate-400">
              Reliable software engineering and technical services for business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#F13E93]/50 transition-all flex flex-col group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F13E93]/10 text-[#F13E93] flex items-center justify-center mb-6 group-hover:bg-[#F13E93] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mt-auto">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- DEMO BANNER SECTION ---------------- */}
      <section id="demo" className="py-16 bg-[#F13E93]/10 border-y border-[#F13E93]/20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex p-3 bg-[#F13E93]/20 rounded-2xl text-[#F13E93] mb-2">
            <Laptop className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-white">Accounting Software Demo Available</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Experience our professional accounting software before committing. Contact us today to request a free demonstration for your business.
          </p>
          <div className="pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F13E93] hover:bg-[#d82f7e] text-white font-semibold transition-all shadow-lg shadow-[#F13E93]/30"
            >
              Request Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- DOWNLOADS & UPDATES SECTION ---------------- */}
      <section id="updates" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-white">Downloads & Updates</h2>
            <p className="text-slate-400 mt-2">
              Latest software releases and updates for existing users.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {downloads.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#F13E93]/10 text-[#F13E93]">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <span className="text-xs text-slate-400">{item.tag}</span>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT US SECTION ---------------- */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">About Idea Plus Software</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Idea Plus Software is a Software Development company based in Jalandhar. We are Professional Accounting Software Developers providing customized software development, computer software, hardware maintenance, and website designing services to businesses across Punjab.
          </p>
        </div>
      </section>

      {/* ---------------- CONTACT US SECTION ---------------- */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
            <p className="mt-3 text-slate-400">
              Get in touch with us for software demos, customized development, or hardware support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F13E93]/10 text-[#F13E93] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">Office Address</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                IDEA PLUS SOFTWARE<br />
                HNo. 1153-B/32, Sant Nagar,<br />
                Laodwali Road, Jalandhar – 144001, Punjab
              </p>
            </div>

            {/* Mobile Numbers */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F13E93]/10 text-[#F13E93] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">Call Us</h3>
              <div className="text-slate-400 text-sm space-y-1">
                <p><strong className="text-slate-200">Mobile:</strong> 9888813328, 9876110328</p>
                <p><strong className="text-slate-200">Office:</strong> 0181-2915328, 0181-4150328</p>
                <p><strong className="text-slate-200">Support:</strong> 9877029600</p>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F13E93]/10 text-[#F13E93] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">Email Us</h3>
              <p className="text-slate-400 text-sm">
                <a href="mailto:iqbaljitsingh@yahoo.com" className="hover:text-[#F13E93] transition-colors">
                  iqbaljitsingh@yahoo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
    {/* ---------------- FOOTER ---------------- */}
      <footer className="mt-auto bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© 2026 IDEAPLUS SOFTWARES • Ideaplus Software</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p>
              Powered by{" "}
              <a
                href="https://gstadeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F13E93] hover:underline font-medium transition-all"
              >
                gstadeveloper.com
              </a>
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="#services" className="hover:text-slate-400">
              Services
            </Link>
            <Link href="#contact" className="hover:text-slate-400">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}