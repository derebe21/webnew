'use client';

import { useState, useEffect } from 'react';
import { Globe, Cloud, Server, Video, Zap, ArrowRight, Monitor, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { technologyStore, TechnologyPartner } from '@/lib/data-store';

export function Products() {
    const [cyberSecurityPartners, setCyberSecurityPartners] = useState<TechnologyPartner[]>([]);
    const [digitalInfrastructurePartners, setDigitalInfrastructurePartners] = useState<TechnologyPartner[]>([]);
    const [cloudVirtualizationPartners, setCloudVirtualizationPartners] = useState<TechnologyPartner[]>([]);
    const [dataCenterPartners, setDataCenterPartners] = useState<TechnologyPartner[]>([]);
    const [integratedSecurityPartners, setIntegratedSecurityPartners] = useState<TechnologyPartner[]>([]);
    const [unifiedCommunicationsPartners, setUnifiedCommunicationsPartners] = useState<TechnologyPartner[]>([]);

    useEffect(() => {
        setCyberSecurityPartners(technologyStore.getByCategory('cyberSecurity'));
        setDigitalInfrastructurePartners(technologyStore.getByCategory('digitalInfrastructure'));
        setCloudVirtualizationPartners(technologyStore.getByCategory('cloudVirtualization'));
        setDataCenterPartners(technologyStore.getByCategory('dataCenter'));
        setIntegratedSecurityPartners(technologyStore.getByCategory('integratedSecurity'));
        setUnifiedCommunicationsPartners(technologyStore.getByCategory('unifiedCommunications'));
    }, []);

    const [selectedPartner, setSelectedPartner] = useState<any>(null);

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedPartner(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <section id="solutions" className="py-24 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic mb-6">
                        OUR <span className="text-primary">SOLUTIONS</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-slate-900 dark:bg-white mx-auto rounded-full" />
                </div>

                {/* Cyber Security Section - Minimal */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-1.5 h-10 bg-blue-600 rounded-full" />
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            Cyber Security & IT Security
                        </h3>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-4xl leading-relaxed">
                        We deploy industry-leading cybersecurity technologies to protect networks, endpoints, applications, cloud environments, and data from modern threats.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cyberSecurityPartners.map((partner) => (
                            <button
                                key={partner.name}
                                onClick={() => setSelectedPartner(partner)}
                                className="group p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center hover:-translate-y-1 w-full relative overflow-hidden"
                            >
                                {/* Decorative Line */}
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-36 h-36 mb-6 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                                    <img
                                        src={partner.logo.startsWith('/') ? partner.logo : `https://cdn.simpleicons.org/${partner.logo}/${partner.color || '1BA0D7'}`}
                                        alt={partner.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{partner.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {partner.description}
                                </p>
                                <div className="mt-4 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 transition-opacity">
                                    VIEW DETAILS <ArrowRight className="ml-1 w-3 h-3" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Digital Infrastructure Section - Minimal */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-1.5 h-10 bg-blue-600 rounded-full" />
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            Digital Infrastructure
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {digitalInfrastructurePartners.map((partner) => (
                            <button
                                key={partner.name}
                                onClick={() => setSelectedPartner(partner)}
                                className="group p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center hover:-translate-y-1 relative overflow-hidden w-full"
                            >
                                {/* Decorative Line */}
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="w-32 h-32 mb-6 flex items-center justify-center transition-all group-hover:scale-110">
                                    <img
                                        src={partner.logo.startsWith('/') ? partner.logo : `https://cdn.simpleicons.org/${partner.logo}/${partner.color || '1BA0D7'}`}
                                        alt={partner.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{partner.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {partner.description}
                                </p>
                                <div className="mt-4 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 transition-opacity">
                                    VIEW DETAILS <ArrowRight className="ml-1 w-3 h-3" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Other Categories combined to reduce clutter */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Cloud & Virtualization */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <Cloud className="w-6 h-6 text-blue-600" />
                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Cloud & Virtualization</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {cloudVirtualizationPartners.map((p) => (
                                <button key={p.name} onClick={() => setSelectedPartner(p)} className="group p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center hover:-translate-y-1 relative overflow-hidden w-full">
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-24 h-24 mb-6 flex items-center justify-center transition-transform group-hover:scale-110">
                                        <img src={p.logo.startsWith('/') ? p.logo : `https://cdn.simpleicons.org/${p.logo}/${p.color || '3B82F6'}`} alt={p.name} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{p.name}</h4>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4">{p.description}</p>
                                    <div className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400">
                                        VIEW DETAILS <ArrowRight className="ml-1 w-2.5 h-2.5" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Data Center Solutions */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <Server className="w-6 h-6 text-blue-600" />
                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Data Center Solutions</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {dataCenterPartners.slice(0, 8).map((p) => (
                                <button key={p.name} onClick={() => setSelectedPartner(p)} className="group p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center hover:-translate-y-1 relative overflow-hidden w-full">
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-24 h-24 mb-6 flex items-center justify-center transition-transform group-hover:scale-110">
                                        <img src={p.logo.startsWith('/') ? p.logo : `https://cdn.simpleicons.org/${p.logo}/${p.color || '006699'}`} alt={p.name} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{p.name}</h4>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4">{p.description}</p>
                                    <div className="mt-auto flex items-center text-[10px] font-bold text-blue-600 dark:text-blue-400">
                                        VIEW DETAILS <ArrowRight className="ml-1 w-2.5 h-2.5" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Integrated Security Systems */}
                <div className="mt-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-1.5 h-10 bg-blue-600 rounded-full" />
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            Integrated Security Systems
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {integratedSecurityPartners.map((partner) => (
                            <button
                                key={partner.name}
                                onClick={() => setSelectedPartner(partner)}
                                className="group p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center hover:-translate-y-1 relative overflow-hidden w-full"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-32 h-32 mb-6 flex items-center justify-center transition-all group-hover:scale-110">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{partner.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {partner.description}
                                </p>
                                <div className="mt-4 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 transition-opacity">
                                    VIEW DETAILS <ArrowRight className="ml-1 w-3 h-3" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Unified Communications */}
                <div className="mt-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-1.5 h-10 bg-blue-600 rounded-full" />
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            Unified Communications
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {unifiedCommunicationsPartners.map((partner) => (
                            <button
                                key={partner.name}
                                onClick={() => setSelectedPartner(partner)}
                                className="group p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center hover:-translate-y-1 relative overflow-hidden w-full"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-32 h-32 mb-6 flex items-center justify-center transition-all group-hover:scale-110">
                                    <img
                                        src={partner.logo.startsWith('/') ? partner.logo : `https://cdn.simpleicons.org/${partner.logo}/${partner.color || '4285F4'}`}
                                        alt={partner.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{partner.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {partner.description}
                                </p>
                                <div className="mt-4 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 transition-opacity">
                                    VIEW DETAILS <ArrowRight className="ml-1 w-3 h-3" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Partner Detail Modal */}
            {selectedPartner && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedPartner(null)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden transform transition-all border border-slate-100 dark:border-slate-800">
                        <button
                            onClick={() => setSelectedPartner(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col md:flex-row h-full">
                            {/* Logo Section */}
                            <div className="md:w-1/3 bg-slate-50 dark:bg-slate-800/50 p-12 flex items-center justify-center">
                                <div className="w-48 h-48 relative">
                                    <img
                                        src={selectedPartner.logo.startsWith('/') ? selectedPartner.logo : `https://cdn.simpleicons.org/${selectedPartner.logo}/${selectedPartner.color || '1BA0D7'}`}
                                        alt={selectedPartner.name}
                                        className="w-full h-full object-contain filter drop-shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="md:w-2/3 p-12 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                                    <Zap className="w-4 h-4 fill-current" />
                                    Technology Partner
                                </div>
                                <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                                    {selectedPartner.name}
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    {selectedPartner.description}
                                </p>

                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Link
                                        href={selectedPartner.url}
                                        target="_blank"
                                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105"
                                    >
                                        Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                                    </Link>
                                    <button
                                        onClick={() => setSelectedPartner(null)}
                                        className="inline-flex items-center px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Solutions Grid (if available) */}
                        {selectedPartner.solutions && (
                            <div className="p-12 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {selectedPartner.solutions.map((sol: any) => (
                                    <div key={sol.title} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all">
                                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                                            <img src={sol.icon} alt={sol.title} className="w-full h-full object-contain" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{sol.title}</h4>
                                        <ul className="space-y-2">
                                            {sol.features.map((f: string) => (
                                                <li key={f} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
