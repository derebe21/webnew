'use client';

import { useState, useEffect } from 'react';
import { Globe, Cloud, Server, Video, Zap, ArrowRight, Monitor, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Products() {
    const cyberSecurityPartners = [
        {
            name: 'Cisco',
            color: '1BA0D7',
            logoPath: '/images/partners/cisco-logo.svg',
            url: 'https://www.cisco.com/site/us/en/products/security/index.html',
            description: 'Network security, firewalls, intrusion prevention, and secure access solutions.'
        },
        {
            name: 'Palo Alto Networks',
            color: 'FA582D',
            simpleIcon: 'paloaltonetworks',
            url: 'https://www.paloaltonetworks.com/network-security',
            description: 'Next-generation firewalls, advanced threat prevention, and cloud security.'
        },
        {
            name: 'Fortinet',
            color: 'EE3124',
            simpleIcon: 'fortinet',
            url: 'https://www.fortinet.com/products',
            description: 'High-performance firewalls, secure SD-WAN, and integrated security platforms.'
        },
        {
            name: 'Check Point',
            color: 'CC0000',
            logoPath: '/images/partners/checkpoint_logo_professional.png',
            url: 'https://www.checkpoint.com/quantum/next-generation-firewall/',
            description: 'Enterprise firewall, threat intelligence, and advanced cyber defense.'
        },
        {
            name: 'Sophos',
            color: '0071CE',
            logoPath: '/images/partners/sophos_logo_professional.png',
            url: 'https://www.sophos.com/en-us/products',
            description: 'Endpoint protection, firewall security, and centralized security management.'
        },
        {
            name: 'Trend Micro',
            color: 'D71920',
            simpleIcon: 'trendmicro',
            url: 'https://www.trendmicro.com/en_us/business/products.html',
            description: 'Endpoint, server, and cloud workload security with advanced malware protection.'
        },
        {
            name: 'CrowdStrike',
            color: 'FF0000',
            logoPath: '/images/partners/crowdstrike_logo_professional.png',
            url: 'https://www.crowdstrike.com/platform/',
            description: 'AI-powered endpoint detection and response (EDR) and threat intelligence.'
        },
        {
            name: 'Darktrace',
            color: '9013FE',
            logoPath: '/images/partners/darktrace_logo_professional.png',
            url: 'https://darktrace.com/products',
            description: 'AI-driven threat detection, network visibility, and autonomous response.'
        },
        {
            name: 'Imperva',
            color: 'E30613',
            logoPath: '/images/partners/imperva_logo_professional.png',
            url: 'https://www.imperva.com/products/',
            description: 'Web application firewall (WAF), database security, and DDoS protection.'
        }
    ];

    const digitalInfrastructurePartners = [
        { name: 'Cisco', logo: '/images/partners/cisco-logo.svg', url: 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/index.html' },
        { name: 'Huawei', logo: '/images/partners/huawei-logo.svg', url: 'https://e.huawei.com/en/products/enterprise-networking' },
        { name: 'HPE Aruba', logo: '/images/partners/hpe-logo.svg', url: 'https://www.arubanetworks.com/products/' },
        { name: 'Juniper Networks', logo: '/images/partners/juniper-logo.svg', url: 'https://www.juniper.net/us/en/products.html' },
        { name: 'Ericsson', logo: 'ericsson', url: 'https://www.ericsson.com/en/portfolio' },
        { name: 'F5 Networks', logo: 'f5', url: 'https://www.f5.com/products' }
    ];

    const cloudVirtualizationPartners = [
        { name: 'VMware', logo: '/images/partners/vmware-logo.svg', url: 'https://www.vmware.com/products.html' },
        { name: 'Proxmox', logo: 'proxmox', url: 'https://www.proxmox.com/en/proxmox-ve' },
        { name: 'Microsoft Hyper-V', logo: '/images/partners/hyperv-logo.svg', url: 'https://virtualization/hyper-v-on-windows/' },
        { name: 'Oracle Cloud', logo: '/images/partners/oracle-logo.svg', url: 'https://www.oracle.com/cloud/products.html' },
        { name: 'IBM Cloud', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure' },
        { name: 'Red Hat Virtualization', logo: '/images/partners/redhat-logo.svg', url: 'https://all-products' }
    ];

    const dataCenterPartners = [
        { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/en-us/dt/servers/index.htm' },
        { name: 'HPE', logo: '/images/partners/hpe-new.png', url: 'https://www.hpe.com/us/en/servers.html' },
        { name: 'Lenovo', logo: 'lenovo', url: 'https://www.lenovo.com/us/en/servers-storage/' },
        { name: 'Huawei', logo: '/images/partners/huawei-servers.png', url: 'https://e.huawei.com/en/products/compute' },
        { name: 'IBM', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure' },
        { name: 'NetApp', logo: 'netapp', url: 'https://www.netapp.com/data-storage/' },
        { name: 'Synology', logo: 'synology', url: 'https://www.synology.com/en-us/products' },
        { name: 'Supermicro', logo: 'supermicro', url: 'https://www.supermicro.com/en/products' }
    ];

    const integratedSecurityPartners = [
        { name: 'Hikvision', logo: '/images/partners/hikvision.png', url: 'https://www.hikvision.com/en/products/' },
        { name: 'Dahua', logo: '/images/partners/dahua.png', url: 'https://www. dahuasecurity.com/products' },
        { name: 'Axis', logo: '/images/partners/axis.png', url: 'https://www.axis.com/products-and-solutions' },
        { name: 'Honeywell', logo: '/images/partners/honeywell.png', url: 'https://buildings.honeywell.com/us/en/products/security' },
        { name: 'Suprema', logo: '/images/partners/suprema.png', url: 'https://www.supremainc.com/en/hardware/product-list.asp' },
        { name: 'ZKTeco', logo: '/images/partners/zkteco.png', url: 'https://www.zkteco.com/en/product_list/' }
    ];

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
        <section id="technology" className="py-24 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic mb-6">
                        OUR <span className="text-primary">TECHNOLOGY</span>
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
                                className="group p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center hover:-translate-y-1 w-full"
                            >
                                <div className="w-36 h-36 mb-6 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                                    <img
                                        src={partner.logoPath || `https://cdn.simpleicons.org/${partner.simpleIcon}/${partner.color}`}
                                        alt={partner.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{partner.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {partner.description}
                                </p>
                                <div className="mt-4 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
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
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {digitalInfrastructurePartners.map((partner) => (
                            <Link
                                key={partner.name}
                                href={partner.url}
                                target="_blank"
                                className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                    <img
                                        src={partner.logo.startsWith('/') ? partner.logo : `https://cdn.simpleicons.org/${partner.logo}/4755E9`}
                                        alt={partner.name}
                                        className={`w-full h-full object-contain ${partner.name === 'Cisco' ? '' : 'dark:invert dark:group-hover:invert-0'}`}
                                    />
                                </div>
                                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">{partner.name}</span>
                            </Link>
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
                        <div className="grid grid-cols-3 gap-4">
                            {cloudVirtualizationPartners.map((p) => (
                                <Link key={p.name} href={p.url} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all flex items-center justify-center h-20 grayscale hover:grayscale-0">
                                    <img src={p.logo.startsWith('/') ? p.logo : `https://cdn.simpleicons.org/${p.logo}/4755E9`} alt={p.name} className="max-w-[80%] max-h-[80%] object-contain dark:invert dark:hover:invert-0" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Data Center Solutions */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <Server className="w-6 h-6 text-blue-600" />
                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Data Center Solutions</h3>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {dataCenterPartners.slice(0, 8).map((p) => (
                                <Link key={p.name} href={p.url} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all flex items-center justify-center h-20 grayscale hover:grayscale-0">
                                    <img src={p.logo.startsWith('/') ? p.logo : `https://cdn.simpleicons.org/${p.logo}/4755E9`} alt={p.name} className="max-w-[80%] max-h-[80%] object-contain dark:invert dark:hover:invert-0" />
                                </Link>
                            ))}
                        </div>
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
                                        src={selectedPartner.logoPath || `https://cdn.simpleicons.org/${selectedPartner.simpleIcon}/${selectedPartner.color}`}
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

                                <div className="flex flex-wrap gap-4 mt-auto">
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
                    </div>
                </div>
            )}
        </section>
    );
}
