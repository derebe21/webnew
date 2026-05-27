'use client';

import { Shield, CheckCircle2, Target, Eye, Users, Lightbulb, Star } from 'lucide-react';

export function About({ showOnlyAboutUs = false }: { showOnlyAboutUs?: boolean }) {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-100/50 dark:bg-blue-900/20 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Main About Box (Full Width Card) */}
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-10 md:p-16 border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900/50 transition-colors">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About ITSEC Technology
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed text-center max-w-5xl mx-auto font-medium">
            ITSEC Technology is a leading provider of ICT, cybersecurity, and integrated technology solutions, delivering secure, scalable, and innovative enterprise services for government, financial, healthcare, education, telecom, and commercial sectors. The company designs, implements, and supports advanced digital infrastructure and intelligent systems aligned with international standards and global best practices.
          </p>
        </div>

        {/* 2. Mission & Vision (Two Side Boxes) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-10 md:p-12 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 text-blue-600 dark:text-blue-400 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
              <Target className="w-12 h-12" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Deliver secure, innovative, and world-class ICT & cybersecurity solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-10 md:p-12 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/30 text-cyan-600 dark:text-cyan-400 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner">
              <Eye className="w-12 h-12" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Vision</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Become a globally trusted leader in intelligent digital transformation, ICT infrastructure, and cybersecurity solutions.
            </p>
          </div>
        </div>

        {/* 3. Core Values (Grid Box Section) */}
        <div className="pt-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Core Values</h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Integrity and professionalism', icon: Shield, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'hover:border-blue-200 dark:hover:border-blue-800' },
              { title: 'Innovation and continuous improvement', icon: Lightbulb, color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-900/20', border: 'hover:border-cyan-200 dark:hover:border-cyan-800' },
              { title: 'Customer satisfaction and service excellence', icon: Star, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'hover:border-blue-200 dark:hover:border-blue-800' },
              { title: 'Security, reliability, and quality', icon: CheckCircle2, color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-900/20', border: 'hover:border-cyan-200 dark:hover:border-cyan-800' },
              { title: 'Teamwork and long-term partnership', icon: Users, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'hover:border-blue-200 dark:hover:border-blue-800' },
            ].map((value, idx) => (
              <div key={idx} className={`bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 border border-slate-100 dark:border-slate-800 flex items-center gap-5 ${value.border}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${value.bg} ${value.color}`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">
                    {value.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
