import Link from 'next/link';
import { Award, Target, Rocket, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* High-Visibility Blue Nexus Identity */}
      <div className="absolute inset-0 z-0 bg-blue-900/5">

        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-slate-50/80 to-blue-50/90 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-blue-950/95" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic mb-8">
            <span className="text-primary">ABOUT US</span>
          </h2>
          <div className="w-24 h-1.5 bg-slate-900 dark:bg-white mx-auto rounded-full" />
        </div>

        {/* Info Cards Section */}
        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
          {[
            {
              title: 'About Us',
              description: 'We design and deploy comprehensive end-to-end ICT infrastructure solutions that empower organizations worldwide to operate with maximum efficiency, reliability, and security.',
              icon: Rocket,
              color: 'blue',
              number: '01'
            },
            {
              title: 'Vision',
              description: 'To deliver secure, scalable, and high-performance technology infrastructures that ensure long-term digital transformation and regulatory compliance for modern enterprises.',
              icon: Target,
              color: 'cyan',
              number: '02'
            },
            {
              title: 'Mission',
              description: 'To empower organizations with reliable, future-ready technology infrastructures through technical excellence in networking, data centers, security, and smart building solutions.',
              icon: Award,
              color: 'orange',
              number: '03'
            }
          ].map((item, index) => (
            <div key={index} className="relative group perspective-1000">
              {/* Background Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color === 'blue' ? 'from-blue-600 to-indigo-500' :
                item.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                  'from-orange-500 to-primary'
                } rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />

              <div className="relative h-full p-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-x-2 group-hover:border-primary/30 flex flex-col">
                {/* Floating Number Indicator */}
                <div className="absolute top-8 right-10 text-6xl font-black text-slate-100 dark:text-slate-800/50 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-700">
                  {item.number}
                </div>

                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 ${item.color === 'blue' ? 'bg-blue-600 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.4)]' :
                    item.color === 'cyan' ? 'bg-cyan-500 shadow-[0_10px_30px_-5px_rgba(6,182,212,0.4)]' :
                      'bg-[#F6A113] shadow-[0_10px_30px_-5px_rgba(246,161,19,0.4)]'
                    }`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic leading-none">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex-grow relative z-10">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className={`h-1.5 w-0 group-hover:w-full transition-all duration-1000 rounded-full mt-10 ${item.color === 'blue' ? 'bg-blue-600' :
                  item.color === 'cyan' ? 'bg-cyan-500' :
                    'bg-primary'
                  }`} />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
