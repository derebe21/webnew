'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-red-600/5 blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[100px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <defs>
            <pattern id="err-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#err-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center gap-8">
        {/* Icon */}
        <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-red-600/20 to-red-500/5 border border-red-500/30 flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-red-400/10 animate-pulse" />
          <AlertTriangle className="relative w-12 h-12 text-red-400" />
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-950/20 backdrop-blur-md">
          <Shield className="w-3.5 h-3.5 text-red-400" />
          <span className="text-[10px] font-bold text-red-400 tracking-[0.2em] uppercase">System Error Detected</span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat,Montserrat,sans-serif)' }}>
            Something Went Wrong
          </h1>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            An unexpected error occurred. Our systems have logged the incident. Please try again or return to the homepage.
          </p>
          {error?.digest && (
            <p className="text-xs font-mono text-slate-600 bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg,#2563EB 0%,#0284C7 100%)',
              boxShadow: '0 8px 32px rgba(37,99,235,.4)',
            }}
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-bold text-sm border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
