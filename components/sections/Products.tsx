'use client';

import { useState, useEffect } from 'react';
import { Globe, Cloud, Server, Video, Zap, ArrowRight, Monitor, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Products() {
    const cyberSecurityPartners = [
        {
            name: 'Cisco',
            color: '1BA0D7',
            logoPath: '/images/ciscoo.png',
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
            logoPath: '/images/checkpointt.logo.PNG',
            url: 'https://www.checkpoint.com/quantum/next-generation-firewall/',
            description: 'Enterprise firewall, threat intelligence, and advanced cyber defense.'
        },
        {
            name: 'Sophos',
            color: '0071CE',
            logoPath: '/images/partners/sophos-shield.jpg',
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
            logoPath: '/images/partners/crowdstrike-falcon.png',
            url: 'https://www.crowdstrike.com/platform/',
            description: 'AI-powered endpoint detection and response (EDR) and threat intelligence.'
        },
        {
            name: 'Darktrace',
            color: '9013FE',
            logoPath: '/images/partners/Darktrace.png',
            url: 'https://darktrace.com/products',
            description: 'AI-driven threat detection, network visibility, and autonomous response.'
        },
        {
            name: 'Imperva',
            color: 'E30613',
            logoPath: '/images/partners/imperva_shield_professional.png',
            url: 'https://www.imperva.com/products/',
            description: 'Web application firewall (WAF), database security, and DDoS protection.',
            solutions: [
                {
                    title: 'Application Security',
                    icon: '/images/partners/imperva-app-sec.svg',
                    features: [
                        'Protect applications and APIs anywhere',
                        'Mitigate DDoS, bot, API and supply chain attacks',
                        'Comply with PCI 4.0'
                    ]
                },
                {
                    title: 'Data Security',
                    icon: '/images/partners/imperva-data-sec.svg',
                    features: [
                        'Secure sensitive data across on-premises and cloud environments',
                        'Simplify compliance and audit reporting'
                    ]
                }
            ]
        }
    ];

    const digitalInfrastructurePartners = [
        { name: 'Cisco', logo: '/images/ciscoo.png', url: 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/index.html', description: 'Enterprise networking, routing, switching, and wireless solutions.' },
        { name: 'Huawei', logo: '/images/Huaweii.webp', url: 'https://e.huawei.com/en/products/enterprise-networking', description: 'Next-generation carrier and enterprise networking infrastructure.' },
        { name: 'HPE Aruba', logo: '/images/partners/hpe-logo.svg', url: 'https://www.arubanetworks.com/products/', description: 'AI-powered network solutions for edge-to-cloud connectivity.' },
        { name: 'Juniper Networks', logo: '/images/partners/juniper-logo.svg', url: 'https://www.juniper.net/us/en/products.html', description: 'AI-driven networking, routing, and switching for modern enterprises.' },
        { name: 'Ericsson', logo: 'ericsson', url: 'https://www.ericsson.com/en/portfolio', color: '002561', description: 'Advanced 5G and mobile network infrastructure solutions.' },
        { name: 'F5 Networks', logo: 'f5', url: 'https://www.f5.com/products', color: 'E4312F', description: 'Application delivery, security, and multi-cloud networking.' }
    ];

    const cloudVirtualizationPartners = [
        { name: 'VMware', logo: '/images/partners/vmware-logo.svg', url: 'https://www.vmware.com/products.html', description: 'Industry-leading multi-cloud services and virtualization platforms.' },
        { name: 'Proxmox', logo: 'proxmox', url: 'https://www.proxmox.com/en/proxmox-ve', color: 'E57000', description: 'Open-source server virtualization and management platform.' },
        { name: 'Microsoft Hyper-V', logo: '/images/partners/hyperv-logo.svg', url: 'https://virtualization/hyper-v-on-windows/', description: 'Native Windows-based hardware virtualization and cloud infrastructure.' },
        { name: 'Oracle Cloud', logo: '/images/partners/oracle-logo.svg', url: 'https://www.oracle.com/cloud/products.html', description: 'Integrated suite of cloud applications and platform services.' },
        { name: 'IBM Cloud', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure', description: 'Hybrid cloud and AI-ready enterprise infrastructure.' },
        { name: 'Red Hat', logo: '/images/partners/redhat-logo.svg', url: 'https://all-products', description: 'Enterprise-grade open-source virtualization and cloud solutions.' }
    ];

    const dataCenterPartners = [
        { name: 'Dell', logo: 'dell', url: 'https://www.dell.com/en-us/dt/servers/index.htm', color: '006BBFE', description: 'High-performance servers, storage, and data center infrastructure.' },
        { name: 'HPE', logo: '/images/partners/hpe-new.png', url: 'https://www.hpe.com/us/en/servers.html', description: 'Scalable compute, storage, and networking for modern data centers.' },
        { name: 'Lenovo', logo: 'lenovo', url: 'https://www.lenovo.com/us/en/servers-storage/', color: 'E2231A', description: 'Reliable enterprise servers and software-defined storage solutions.' },
        { name: 'Huawei', logo: '/images/Huaweii.webp', url: 'https://e.huawei.com/en/products/compute', description: 'Efficient and intelligent data center compute and storage systems.' },
        { name: 'IBM', logo: '/images/partners/ibm-logo.svg', url: 'https://www.ibm.com/it-infrastructure', description: 'Robust enterprise mainframes and modernized data center storage.' },
        { name: 'NetApp', logo: 'netapp', url: 'https://www.netapp.com/data-storage/', color: '0067DA', description: 'Advanced data management and cloud-integrated storage solutions.' },
        { name: 'Synology', logo: 'synology', url: 'https://www.synology.com/en-us/products', color: '1C1C1C', description: 'Reliable network-attached storage (NAS) and data backup solutions.' },
        { name: 'Supermicro', logo: 'supermicro', url: 'https://www.supermicro.com/en/products', color: '0078AE', description: 'High-efficiency, green computing server and storage solutions.' }
    ];

    const integratedSecurityPartners = [
        { name: 'Hikvision', logo: '/images/partners/hikvision.png', url: 'https://www.hikvision.com/en/products/', description: 'Global leader in video surveillance and smart security solutions.' },
        { name: 'Dahua', logo: '/images/partners/dahua.png', url: 'https://www. dahuasecurity.com/products', description: 'Innovative video-centric smart IoT solutions and services.' },
        { name: 'Axis', logo: '/images/partners/axis.png', url: 'https://www.axis.com/products-and-solutions', description: 'Network-based video surveillance, access control and audio systems.' },
        { name: 'Honeywell', logo: '/images/partners/honeywell.png', url: 'https://buildings.honeywell.com/us/en/products/security', description: 'Integrated building security and advanced fire safety systems.' },
        { name: 'Suprema', logo: '/images/partners/suprema.png', url: 'https://www.supremainc.com/en/hardware/product-list.asp', description: 'Biometric access control and time & attendance solutions.' },
        { name: 'ZKTeco', logo: '/images/partners/zkteco.png', url: 'https://www.zkteco.com/en/product_list/', description: 'Global provider of biometric and security management technology.' }
    ];

    const unifiedCommunicationsPartners = [
        { name: 'Cisco', logo: 'cisco', url: 'https://www.cisco.com/c/en/us/solutions/collaboration/index.html', color: '1BA0D7', description: 'Comprehensive collaboration, IP telephony, and video conferencing.' },
        { name: 'Dinstar', logo: 'dinstar', url: 'https://www.dinstar.com/', color: '005DAA', description: 'IP unified communications and VoIP gateway solutions.' },
        { name: 'VaxVoIP', logo: 'vaxvoip', url: 'https://www.vaxvoip.com/', color: '000000', description: 'Specialized SIP-based voice and video communication technologies.' },
        { name: 'Grandstream', logo: 'grandstream', url: 'http://www.grandstream.com/', color: '0054A6', description: 'High-quality IP voice, video, data, and mobility solutions.' }
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
                                className="group p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center hover:-translate-y-1 w-full relative overflow-hidden"
                            >
                                {/* Decorative Line */}
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                        src={partner.logoPath || (partner.simpleIcon && `https://cdn.simpleicons.org/${partner.simpleIcon}/${partner.color || '1BA0D7'}`)}
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

                {/* Unified Communications Technologies */}
                <div className="mt-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-1.5 h-10 bg-blue-600 rounded-full" />
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            Unified Communications Technologies
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
                                        src={selectedPartner.logoPath || selectedPartner.logo || `https://cdn.simpleicons.org/${selectedPartner.simpleIcon}/${selectedPartner.color}`}
                                        alt={selectedPartner.name}
                                        className="w-full h-full object-contain filter drop-shadow-lg"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            if (selectedPartner.logo && !selectedPartner.logo.startsWith('/')) {
                                                target.src = `https://cdn.simpleicons.org/${selectedPartner.logo}/${selectedPartner.color || '1BA0D7'}`;
                                            }
                                        }}
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
