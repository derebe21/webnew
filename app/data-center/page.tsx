import React from 'react';
import { Cable, ShieldCheck, Server, Cpu, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function DataCenterPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/data-center-main.jpg"
                        alt="Data Center"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Expert Data Center Construction Services</h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                        Comprehensive fiber optic installation, physical security systems, and rack & stack solutions for mission-critical data center environments.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Data Center Construction & Cabling Services</h2>
                    <p className="text-xl text-slate-600 mb-4 font-medium max-w-4xl mx-auto">
                        Turnkey fiber, copper, wireless, and physical security infrastructure for mission-critical data centers.
                    </p>
                    <p className="text-lg text-slate-500 max-w-4xl mx-auto">
                        ITSEC Technology, LLC delivers precision-engineered data center environments — from structured cabling and fiber optics to rack-and-stack, access control, and surveillance.
                    </p>
                </div>
            </section>

            {/* Services Icon Strip */}
            <section className="bg-[#0b1121] py-16 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="flex flex-col items-center">
                            <Cable className="w-16 h-16 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Fiber Optic Installation</h3>
                            <p className="text-slate-400">High-performance fiber optic cabling systems designed for maximum bandwidth and reliability in data center environments.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ShieldCheck className="w-16 h-16 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Physical Security Systems</h3>
                            <p className="text-slate-400">Comprehensive security solutions including surveillance, access control, and intrusion detection for data center protection.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Server className="w-16 h-16 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Rack & Stack Services</h3>
                            <p className="text-slate-400">Professional server installation, cable management, and equipment deployment in data center environments.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Cpu className="w-16 h-16 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Control Systems</h3>
                            <ul className="text-slate-400 text-left space-y-2 list-disc list-inside">
                                <li>SCADA Systems</li>
                                <li>Building Management Systems</li>
                                <li>Electrical Power Monitoring Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fiber Optic Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-[#0b1121] mb-8 tracking-tight">Enterprise Fiber Optic Installation</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our certified technicians design and install high-density fiber optic infrastructure that supports current needs while providing scalability for future growth. We specialize in data center-grade installations that meet the most demanding performance requirements.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Single-mode and multi-mode fiber installations',
                                    'High-density MPO/MTP connectivity solutions',
                                    'Fiber optic splice enclosures and patch panels',
                                    'OTDR and OLTS testing and certification',
                                    'Backbone and horizontal fiber cabling',
                                    'Future-ready infrastructure design'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Industry Standards:</strong> We follow TIA-942 guidelines for data center cabling and provide full documentation and certification for all installations.
                            </p>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img src="/images/fiber-optic-install.png" alt="Fiber Optic Installation" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Physical Security Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img src="/images/physical-security-door.png" alt="Physical Security" className="w-full h-full object-cover" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0b1121] mb-8 tracking-tight">Advanced Physical Security Systems</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Protect your critical data center assets with our comprehensive security solutions. From perimeter protection to internal monitoring, we design multi-layered security systems that provide complete visibility and control.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'IP-based video surveillance systems',
                                    'Biometric and card-based access control',
                                    'Intrusion detection and alarm systems',
                                    'Environmental monitoring integration',
                                    '24/7 remote monitoring capabilities',
                                    'Compliance with SOC 2 and PCI DSS standards'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Trusted Partners:</strong> We work with industry-leading manufacturers to ensure your security systems meet the highest standards for reliability and performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rack & Stack Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-[#0b1121] mb-8 tracking-tight">Professional Rack & Stack Services</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our experienced technicians handle all aspects of server and equipment installation, ensuring optimal airflow, cable management, and accessibility in your data center environment.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Server and network equipment installation',
                                    'Professional cable management systems',
                                    'Power distribution unit (PDU) installation',
                                    'Environmental monitoring setup',
                                    'Equipment labeling and documentation',
                                    'Post-installation testing and verification'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Quality Assurance:</strong> Every installation includes comprehensive testing and detailed documentation to ensure your equipment operates at peak performance.
                            </p>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img src="/images/rack-stack-cable.png" alt="Rack and Stack" className="w-full h-full object-cover shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SCADA Systems Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img src="/images/scada-systems-control.png" alt="SCADA Systems" className="w-full h-full object-cover shadow-lg" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0b1121] mb-8 tracking-tight">SCADA Systems</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our SCADA installation services provide real-time monitoring, automation, and control for critical systems. We design and integrate scalable solutions tailored to your facility, ensuring accurate data flow, safe operations, and efficient performance. From network configuration to operator training, we deliver reliable, secure SCADA environments built for long-term stability and growth.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Water and wastewater treatment facility SCADA systems',
                                    'Industrial plant process monitoring and automation',
                                    'Municipal utility remote monitoring and control networks',
                                    'Pump station and lift station SCADA integration',
                                    'Energy management and power distribution SCADA setups',
                                    'Facility-wide SCADA upgrades, retrofits, and system expansions'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Industry Standards:</strong> We install in accordance with industry standards such as ISA-95, IEC-62443, and NIST cybersecurity guidelines to ensure reliability, interoperability, and secure operational control across industrial environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Building Management Systems Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-[#0b1121] mb-8 tracking-tight">Building Management Systems</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                occupant comfort. We design and integrate smart, scalable platforms that provide real-time monitoring, automated adjustments, and data-driven optimization. The result is a safer, more efficient, and more cost-effective building environment.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'IP-based video surveillance systems',
                                    'HVAC Control Sequences',
                                    'Intrusion detection and alarm systems',
                                    'Real-time equipment performance monitoring',
                                    'Data analytics and reporting for efficiency planning'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Trusted Partners:</strong> Our team integrates solutions from trusted software and hardware partners while adhering to ISA, IEC, and NIST guidelines. This approach ensures interoperability, long-term support, and consistent operational reliability across facilities.
                            </p>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img src="/images/physical-security-door.png" alt="Building Management Systems" className="w-full h-full object-cover shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Electrical Power Monitoring Systems Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img src="/images/rack-stack-cable.png" alt="Electrical Power Monitoring Systems" className="w-full h-full object-cover shadow-lg" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0b1121] mb-8 tracking-tight">Electrical Power Monitoring Systems</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our EPMS solutions deliver real-time insight into a facility's electrical infrastructure, helping you track power quality, load distribution, and system performance. By identifying imbalances and inefficiencies early, EPMS improves reliability, prevents downtime, and supports energy cost reduction. We design and integrate scalable EPMS platforms that enhance operational awareness and ensure stable, safe electrical system performance.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Real-time monitoring of electrical power usage',
                                    'Power quality analysis',
                                    'Alarm and event notifications',
                                    'Energy reporting to support efficiency and cost-reduction',
                                    'Integration with existing facility management',
                                    'Scalable architecture'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Quality Assurance:</strong> We follow guidelines from IEEE, IEC, and NFPA, as well as utility metering and cybersecurity best practices. This ensures consistent data quality, secure communication, and dependable monitoring across all electrical systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-[#0b1121] mb-6 tracking-tight">Ready to Start Your Data Center Project?</h2>
                    <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
                        Contact our data center specialists today for a free consultation and project estimate.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                                <Phone strokeWidth={2.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Call Us Today</h3>
                            <a href="tel:+251911407430" className="text-lg text-blue-600 hover:text-blue-700 font-medium">+251911407430</a>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                                <Mail strokeWidth={2.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Email Consultation</h3>
                            <a href="mailto:info@itsectechnology.com" className="text-lg text-blue-600 hover:text-blue-700 font-medium">info@itsectechnology.com</a>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                                <MapPin strokeWidth={2.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Visit Our Office</h3>
                            <p className="text-lg text-slate-600 text-center">ITSEC Technology LLC</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
