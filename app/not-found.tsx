import { FileSearch, Home, ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 – Page Not Found | ITSEC Technology',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-600/5 blur-[100px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <defs>
            <pattern id="nf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nf-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center gap-8">
        {/* Big 404 number */}
        <div className="relative select-none">
          <span
            className="text-[8rem] md:text-[12rem] font-black leading-none"
            style={{
              fontFamily: 'var(--font-montserrat,Montserrat,sans-serif)',
              background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(6,182,212,0.15) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.05em',
            }}
          >
            404
          </span>
          {/* Icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.2)]">
              <FileSearch className="w-10 h-10 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-950/20 backdrop-blur-md">
          <Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase">Page Not Found</span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat,Montserrat,sans-serif)' }}>
            This Page Does Not Exist
          </h1>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-sm mx-auto">
            The page you are looking for may have been moved, deleted, or never existed. Please check the URL or navigate back.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg,#2563EB 0%,#0284C7 100%)',
              boxShadow: '0 8px 32px rgba(37,99,235,.4)',
            }}
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-bold text-sm border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            View Services
          </Link>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          {['About', 'Solutions', 'Contact', 'Insights'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-xs text-slate-500 hover:text-cyan-400 transition-colors border border-slate-800 hover:border-cyan-500/30 px-3 py-1.5 rounded-lg"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
