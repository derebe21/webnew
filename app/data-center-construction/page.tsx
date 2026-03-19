import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { CheckCircle2, Shield, Server, Cable, Activity } from 'lucide-react';

export default function DataCenterConstruction() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          {/* Using data-center-main.jpg which is already in the project for the datacenter image the user mentioned */}
          <div className="absolute inset-0 bg-slate-950/80 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent z-10" />
          <img
            src="/images/data-center-main.jpg"
            alt="Data Center Construction"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl pt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-white drop-shadow-md">
              Expert Data Center <br/>
              <span className="text-blue-400">Construction Services</span>
            </h1>
            <div className="p-1 px-4 border-l-4 border-blue-500 bg-white/5 backdrop-blur-sm rounded-r-xl max-w-2xl">
              <p className="text-xl md:text-2xl text-slate-100 font-medium leading-relaxed">
                Comprehensive fiber optic installation, physical security systems, and rack & stack solutions for mission-critical data center environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Intro Block */}
      <section className="py-24 bg-white relative z-10 -mt-8 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
            Data Center Construction & Cabling Services
          </h2>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8 max-w-4xl mx-auto">
            Turnkey fiber, copper, wireless, and physical security infrastructure for mission-critical data centers.
          </p>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            ITSEC Technology, LLC delivers precision-engineered data center environments — from structured cabling and fiber optics to rack-and-stack, access control, and surveillance.
          </p>
        </div>
      </section>

      {/* Four Icons Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {/* 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-8 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                <Cable className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">Fiber Optic<br/>Installation</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                High-performance fiber optic cabling systems designed for maximum bandwidth and reliability in data center environments.
              </p>
            </div>
            {/* 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-8 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                <Shield className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">Physical Security<br/>Systems</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Comprehensive security solutions including surveillance, access control, and intrusion detection for data center protection.
              </p>
            </div>
            {/* 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-8 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                <Server className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">Rack & Stack<br/>Services</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Professional server installation, cable management, and equipment deployment in data center environments.
              </p>
            </div>
            {/* 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-8 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                <Activity className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">Control<br/>Systems</h3>
              <div className="text-slate-400 text-sm w-full text-center mt-2 group-hover:text-blue-300 transition-colors">
                • SCADA Systems<br/>
                • Building Management Systems<br/>
                • Electrical Power Monitoring Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-32 relative z-10">
          
          {/* Fiber Optic */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold rounded-full text-xs tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Cabling Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">Enterprise Fiber Optic Installation</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our certified technicians design and install high-density fiber optic infrastructure that supports current needs while providing scalability for future growth. We specialize in data center-grade installations that meet the most demanding performance requirements.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                {[
                  'Single-mode and multi-mode fiber installations',
                  'High-density MPO/MTP connectivity solutions',
                  'Fiber optic splice enclosures and patch panels',
                  'OTDR and OLTS testing and certification',
                  'Backbone and horizontal fiber cabling',
                  'Future-ready infrastructure design'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900 text-lg block mb-1">Industry Standards:</span> We follow TIA-942 guidelines for data center cabling and provide full documentation and certification for all installations.</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors z-10 duration-500" />
                <img src="/images/fiber-optic-install.png" alt="Enterprise Fiber Optic Installation" className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </div>

          {/* Physical Security */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-200/60 border border-slate-300 text-slate-800 font-bold rounded-full text-xs tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <span>Facility Protection</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">Advanced Physical Security Systems</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Protect your critical data center assets with our comprehensive security solutions. From perimeter protection to internal monitoring, we design multi-layered security systems that provide complete visibility and control.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                {[
                  'IP-based video surveillance systems',
                  'Biometric and card-based access control',
                  'Intrusion detection and alarm systems',
                  'Environmental monitoring integration',
                  '24/7 remote monitoring capabilities',
                  'Compliance with SOC 2 and PCI DSS standards'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 border-l-4 border-l-slate-800">
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900 text-lg block mb-1">Trusted Partners:</span> We work with industry-leading manufacturers to ensure your security systems meet the highest standards for reliability and performance.</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10 duration-500" />
                <img src="/images/physical-security-door.png" alt="Advanced Physical Security Systems" className="w-full h-[500px] object-cover object-left-top transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </div>

          {/* Rack & Stack */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold rounded-full text-xs tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Equipment Deployment</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">Professional Rack & Stack Services</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our experienced technicians handle all aspects of server and equipment installation, ensuring optimal airflow, cable management, and accessibility in your data center environment.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                {[
                  'Server and network equipment installation',
                  'Professional cable management systems',
                  'Power distribution unit (PDU) installation',
                  'Environmental monitoring setup',
                  'Equipment labeling and documentation',
                  'Post-installation testing and verification'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900 text-lg block mb-1">Quality Assurance:</span> Every installation includes comprehensive testing and detailed documentation to ensure your equipment operates at peak performance.</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors z-10 duration-500" />
                <img src="/images/rack-stack-cable.png" alt="Professional Rack & Stack Services" className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </div>

          {/* SCADA Systems */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-200/60 border border-slate-300 text-slate-800 font-bold rounded-full text-xs tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <span>Industrial Automation</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">SCADA Systems</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our SCADA installation services provide real-time monitoring, automation, and control for critical systems. We design and integrate scalable solutions tailored to your facility, ensuring accurate data flow, safe operations, and efficient performance. From network configuration to operator training, we deliver reliable, secure SCADA environments built for long-term stability and growth.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                {[
                  'Water and wastewater treatment facility SCADA systems',
                  'Industrial plant process monitoring and automation',
                  'Municipal utility remote monitoring and control networks',
                  'Pump station and lift station SCADA integration',
                  'Energy management and power distribution SCADA setups',
                  'Facility-wide SCADA upgrades, retrofits, and system expansions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 border-l-4 border-l-slate-800">
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900 text-lg block mb-1">Industry Standards:</span> We install in accordance with industry standards such as ISA-95, IEC-62443, and NIST cybersecurity guidelines to ensure reliability, interoperability, and secure operational control across industrial environments.</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10 duration-500" />
                {/* Dynamically loading the SCADA image that is generated */}
                <img src="/images/scada_systems_generated.png" alt="SCADA Systems Integration" className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </div>

          {/* Building Management Systems */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold rounded-full text-xs tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Facility Optimization</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">Building Management Systems</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                occupant comfort. We design and integrate smart, scalable platforms that provide real-time monitoring, automated adjustments, and data-driven optimization. The result is a safer, more efficient, and more cost-effective building environment.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                {[
                  'IP-based video surveillance systems',
                  'HVAC Control Sequences',
                  'Intrusion detection and alarm systems',
                  'Real-time equipment performance monitoring',
                  'Data analytics and reporting for efficiency planning'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900 text-lg block mb-1">Trusted Partners:</span> Our team integrates solutions from trusted software and hardware partners while adhering to ISA, IEC, and NIST guidelines. This approach ensures interoperability, long-term support, and consistent operational reliability across facilities.</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors z-10 duration-500" />
                {/* Reusing the requested image per user instructions */}
                <img src="/images/physical-security-door.png" alt="Building Management Systems" className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </div>

          {/* Electrical Power Monitoring Systems */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-200/60 border border-slate-300 text-slate-800 font-bold rounded-full text-xs tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <span>Power Quality & Reliability</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">Electrical Power Monitoring Systems</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our EPMS solutions deliver real-time insight into a facility's electrical infrastructure, helping you track power quality, load distribution, and system performance. By identifying imbalances and inefficiencies early, EPMS improves reliability, prevents downtime, and supports energy cost reduction. We design and integrate scalable EPMS platforms that enhance operational awareness and ensure stable, safe electrical system performance.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                {[
                  'Real-time monitoring of electrical power usage',
                  'Power quality analysis',
                  'Alarm and event notifications',
                  'Energy reporting to support efficiency and cost-reduction',
                  'Integration with existing facility management',
                  'Scalable architecture'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10 duration-500" />
                <img src="/images/rack-stack-cable.png" alt="Electrical Power Monitoring Systems" className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
