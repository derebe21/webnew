'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Cloud, ShieldCheck, Building2, DatabaseBackup, Network, RefreshCcw, Activity } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    title: 'AI & Automation Solutions',
    description: 'Intelligent automation platforms, workflow automation, AI-driven monitoring systems, smart operational technologies, and intelligent data processing.',
    icon: Bot,
    slug: 'ai-automation'
  },
  {
    title: 'Cloud Infrastructure Solutions',
    description: 'Private and hybrid cloud infrastructure, secure migration services, virtualization platforms, and high availability architectures.',
    icon: Cloud,
    slug: 'cloud-infrastructure'
  },
  {
    title: 'Cybersecurity & SOC Solutions',
    description: 'Security Operations Center (SOC), threat detection, endpoint protection, Identity & Access Management (IAM), and compliance governance.',
    icon: ShieldCheck,
    slug: 'cybersecurity'
  },
  {
    title: 'Smart Building & Intelligent Systems',
    description: 'Smart building technologies, Building Management Systems (BMS), IoT integration, intelligent monitoring, and facility automation.',
    icon: Building2,
    slug: 'smart-building'
  },
  {
    title: 'Data Protection & Backup Solutions',
    description: 'Backup and recovery solutions, disaster recovery infrastructure, data encryption, secure storage, and critical data protection platforms.',
    icon: DatabaseBackup,
    slug: 'data-protection'
  },
  {
    title: 'Enterprise Networking Solutions',
    description: 'Enterprise network infrastructure, LAN/WAN solutions, wireless networks, fiber optic infrastructure, and secure connectivity platforms.',
    icon: Network,
    slug: 'enterprise-networking'
  },
  {
    title: 'Digital Transformation Solutions',
    description: 'Enterprise modernization, intelligent systems integration, business process optimization, and scalable technology transformation strategies.',
    icon: RefreshCcw,
    slug: 'digital-transformation'
  },
  {
    title: 'Business Continuity Solutions',
    description: 'Operational resilience solutions, infrastructure redundancy, disaster recovery planning, and high availability continuity strategies.',
    icon: Activity,
    slug: 'business-continuity'
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* 1. Solutions Hero Banner */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-slate-950 overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
          <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-to-tr from-cyan-900/20 via-blue-900/10 to-transparent rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter italic mb-8">
            Intelligent Enterprise<br />
            <span className="text-cyan-400">Technology Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
            Delivering secure, scalable, and future-ready technology solutions that empower organizations through cybersecurity, cloud infrastructure, intelligent automation, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
            >
              Request Consultation
            </Link>
            <Link 
              href="#overview" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-xl font-black uppercase tracking-widest transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Technology Solutions Overview */}
      <section id="overview" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">
            Enterprise Solutions Overview
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            ITSEC Technology delivers advanced enterprise technology solutions designed to improve operational efficiency, cybersecurity resilience, infrastructure performance, scalability, and business continuity for modern organizations.
          </p>
        </div>
      </section>

      {/* 3-10. Solutions Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="w-full">
                  <Link href={`/services`} className="block group h-full">
                    <Card
                      className="h-full border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 flex flex-col group-hover:-translate-y-2 p-8 rounded-2xl"
                    >
                      {/* Circular Icon Area */}
                      <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40">
                        <Icon className="w-8 h-8 text-blue-600 dark:text-cyan-400 stroke-[1.5]" />
                      </div>

                      {/* Text Content Area */}
                      <div className="flex-grow flex flex-col">
                        <CardTitle className="text-xl font-black tracking-tight text-slate-900 dark:text-white mb-4 line-clamp-2">
                          {solution.title}
                        </CardTitle>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-4 mb-8 flex-grow leading-relaxed">
                          {solution.description}
                        </p>
                        
                        {/* Learn More Link */}
                        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-600 dark:text-cyan-400 group-hover:text-blue-800 dark:group-hover:text-cyan-300 transition-colors mt-auto">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Contact & Consultation CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-900/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/20 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic mb-6">
            Ready to Transform Your<br />
            <span className="text-cyan-400">Enterprise Infrastructure?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
            Contact ITSEC Technology for secure, intelligent, and scalable enterprise technology solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-xl font-black uppercase tracking-widest transition-all border-2 border-white/20 flex items-center justify-center gap-2"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
