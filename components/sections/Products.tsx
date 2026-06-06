'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, ShieldCheck, Network, Cloud, Server, X, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { technologyStore, TechnologyPartner } from '@/lib/data-store';
import { cn } from '@/lib/utils';

type CategoryKey = 'cyberSecurity' | 'digitalInfrastructure' | 'cloudVirtualization' | 'dataCenter';

const categories: { id: CategoryKey; label: string; icon: React.ElementType }[] = [
    { id: 'cyberSecurity', label: 'Cyber Security & IT Security', icon: ShieldCheck },
    { id: 'digitalInfrastructure', label: 'Digital Infrastructure', icon: Network },
    { id: 'cloudVirtualization', label: 'Cloud & Virtualization', icon: Cloud },
    { id: 'dataCenter', label: 'Data Center Solutions', icon: Server },
];

export function Products() {
    const [activeTab, setActiveTab] = useState<CategoryKey>('cyberSecurity');
    const [partners, setPartners] = useState<TechnologyPartner[]>([]);
    const [selectedPartner, setSelectedPartner] = useState<TechnologyPartner | null>(null);

    useEffect(() => {
        setPartners(technologyStore.getByCategory(activeTab));
    }, [activeTab]);

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedPartner(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedPartner) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPartner]);

    return (
        <section id="technology" className="py-24 md:py-32 bg-[#0B1220] min-h-screen relative overflow-hidden transition-colors duration-500">
            {/* Dark Professional Gradient Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-[#020617] opacity-80 pointer-events-none" />
            
            {/* Subtle Cyan/Electric Blue Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB] rounded-full blur-[150px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06B6D4] rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 font-['Montserrat',sans-serif]">
                        OUR TECHNOLOGY <span className="text-[#06B6D4]">PARTNERS</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#2563EB] mx-auto rounded-full" />
                </div>

                {/* Category Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeTab === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={cn(
                                    "flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 border-2 font-['Inter',sans-serif]",
                                    isActive
                                        ? "bg-[#2563EB]/10 border-[#2563EB] text-white shadow-[0_0_20px_rgba(var(--insa-primary),0.3)]"
                                        : "bg-transparent border-[#1E293B] text-[#CBD5E1] hover:border-[#334155] hover:text-white"
                                )}
                            >
                                <Icon className={cn("w-5 h-5", isActive ? "text-[#06B6D4]" : "text-[#94A3B8]")} />
                                {category.label}
                            </button>
                        );
                    })}
                </div>

                {/* Partner Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group relative flex flex-col p-8 rounded-2xl bg-[#0F172A]/80 backdrop-blur-xl border border-[#1E293B] hover:border-[#2563EB]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
                            onClick={() => setSelectedPartner(partner)}
                            style={{
                                '--brand-color': `#${partner.color || '2563EB'}`
                            } as React.CSSProperties}
                        >
                            {/* Brand Glow Effect on Hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-color)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--brand-color)] rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none" />

                            {/* Logo */}
                            <div className="w-full h-24 mb-8 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-105">
                                <img
                                    src={partner.logo.startsWith('/') ? partner.logo : `https://cdn.simpleicons.org/${partner.logo}/white`}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                                    style={partner.logo.startsWith('/') ? { filter: 'brightness(0) invert(1)' } : undefined}
                                />
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10 flex-grow flex flex-col text-center">
                                <h4 className="text-xl font-bold text-white mb-4 tracking-wide font-['Montserrat',sans-serif]">
                                    {partner.name}
                                </h4>
                                <p className="text-sm text-[#CBD5E1] font-medium leading-relaxed mb-8 flex-grow font-['Inter',sans-serif]">
                                    {partner.description}
                                </p>

                                {/* View Details Button */}
                                <div className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#111827] group-hover:bg-[#2563EB] border border-[#1E293B] group-hover:border-transparent text-white text-sm font-bold rounded-lg transition-all duration-300">
                                    VIEW DETAILS
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Premium Dark Modal for Partner Details */}
            {selectedPartner && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md transition-opacity"
                        onClick={() => setSelectedPartner(null)}
                    />

                    {/* Modal Content */}
                    <div 
                        className="relative bg-[#0F172A] w-full max-w-4xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transform transition-all border border-[#1E293B] flex flex-col md:flex-row z-10"
                        style={{
                            '--brand-color': `#${selectedPartner.color || '2563EB'}`
                        } as React.CSSProperties}
                    >
                        {/* Top Gradient Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-color)] to-transparent" />
                        
                        <button
                            onClick={() => setSelectedPartner(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-[#1E293B] hover:bg-[#334155] text-white transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Logo Section */}
                        <div className="md:w-2/5 bg-[#0B1220] p-12 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--brand-color)] rounded-full blur-[100px] opacity-20 pointer-events-none" />
                            <div className="w-48 h-48 relative z-10">
                                <img
                                    src={selectedPartner.logo.startsWith('/') ? selectedPartner.logo : `https://cdn.simpleicons.org/${selectedPartner.logo}/white`}
                                    alt={selectedPartner.name}
                                    className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                                    style={selectedPartner.logo.startsWith('/') ? { filter: 'brightness(0) invert(1)' } : undefined}
                                />
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#0F172A] to-[#0B1220]">
                            <div className="inline-flex items-center gap-2 text-[#06B6D4] text-xs font-bold uppercase tracking-widest mb-4 font-['Inter',sans-serif]">
                                <Zap className="w-4 h-4 fill-current" />
                                Official Technology Partner
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight font-['Montserrat',sans-serif]">
                                {selectedPartner.name}
                            </h3>
                            <p className="text-lg text-[#CBD5E1] leading-relaxed mb-10 font-['Inter',sans-serif]">
                                {selectedPartner.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mt-auto">
                                <Link
                                    href={selectedPartner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(var(--insa-primary),0.4)]"
                                >
                                    Visit Website <ExternalLink className="ml-2 w-5 h-5" />
                                </Link>
                                <button
                                    onClick={() => setSelectedPartner(null)}
                                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#1E293B] text-white rounded-xl font-bold hover:border-[#334155] hover:bg-[#1E293B] transition-all"
                                >
                                    Close Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
