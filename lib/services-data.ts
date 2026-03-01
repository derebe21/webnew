import {
    LucideIcon,
    Server,
    Shield,
    Code,
    Cpu,
    Cloud,
    Zap,
    Lightbulb,
    ShieldCheck,
    MessageSquare,
    Flame,
} from 'lucide-react';

export interface Service {
    slug: string;
    icon: LucideIcon;
    logoImage: string;
    sidebarImage: string;
    bannerImage: string;
    bgColor: string;
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    benefits: string[];
}

export const servicesData: Service[] = [
    {
        slug: 'cybersecurity',
        icon: ShieldCheck,
        logoImage: '/images/cyber-risk-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/custom-cybersecurity.png',
        bgColor: '#0F172A',
        title: 'Cybersecurity',
        description: 'Comprehensive digital security solutions to protect enterprise systems, networks, and data.',
        longDescription: 'Professional-grade security operations and policy enforcement to safeguard your digital assets.',
        features: [
            'SOC with IDS/IPS and SIEM: Dedicated facility for real-time monitoring, threat detection, and response.',
            'Network Access Control (NAC): Policy enforcement to ensure only authorized users and compliant devices connect.',
            'Security Assessments: Auditing, penetration testing, and AI-driven threat analysis for proactive defense.',
            'Endpoint & Network Protection: Comprehensive security layering for users, servers, and infrastructure.'
        ],
        benefits: [],
    },
    {
        slug: 'unified-communications',
        icon: MessageSquare,
        logoImage: '/images/unified-communications-new.png',
        sidebarImage: '',
        bannerImage: '/images/unified-communications-new.png',
        bgColor: '#1E293B',
        title: 'Unified Communications',
        description: 'Integrated communication solutions combining voice, video, messaging, and collaboration platforms.',
        longDescription: 'IP-based VoIP, video conferencing, and collaboration platforms for seamless communication and connection.',
        features: [
            'Voice, Video & Messaging Platforms: Seamless enterprise-grade communication tools for collaboration.',
            'Collaboration Tools: Secure platforms for team interaction, project management, and document sharing.',
            'Scalable Communication Networks: Reliable and expandable networks supporting voice, video, and data traffic.',
            'Infrastructure Integration: Seamless connection of communication systems with existing enterprise IT environments.'
        ],
        benefits: [],
    },
    {
        slug: 'digital-infrastructure',
        icon: Server,
        logoImage: '/images/digital-infrastructure-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/digital-infrastructure-final.png',
        bgColor: '#2E3A59',
        title: 'Digital Infrastructure',
        description: 'Robust and scalable foundational network and ICT design to support enterprise growth and security.',
        longDescription: 'End-to-end ICT infrastructure design and deployment for maximum efficiency, security, and reliability.',
        features: [
            'Enterprise Networking: LAN/WAN, wireless mobility, VPNs, firewalls, and IDS/IPS for optimized connectivity.',
            'Structured Cabling: High-performance UTP, fiber, and copper cabling with integrated rack management.',
            'High Availability: Redundancy, load balancing, and real-time monitoring to ensure zero-disruption operations.',
            'Digital Transformation: Scalable ICT foundations built for enterprise-grade growth and regulatory compliance.'
        ],
        benefits: [],
    },
    {
        slug: 'data-center-solutions',
        icon: Server,
        logoImage: '/images/data-center-final.png',
        sidebarImage: '',
        bannerImage: '/images/data-center-final.png',
        bgColor: '#1E293B',
        title: 'Data Center Solutions',
        description: 'Comprehensive data center design, power, cooling, and management for maximum uptime and efficiency.',
        longDescription: 'Installation and configuration of high-availability data center facilities and virtualization platforms.',
        features: [
            'Server & Storage Solutions: Performance-optimized server deployment and scalable enterprise storage.',
            'Virtualization Platforms: Advanced cloud-ready virtualization for maximized resource utilization.',
            'Power & Cooling: Redundant power systems and precision cooling for equipment integrity.',
            'Disaster Recovery: Business continuity planning and automated failover for critical facility operations.'
        ],
        benefits: [],
    },
    {
        slug: 'integrated-security',
        icon: Shield,
        logoImage: '/images/partners/hikvision.png',
        sidebarImage: '',
        bannerImage: '/images/custom-cctv.jpg',
        bgColor: '#22C55E',
        title: 'Integrated Security Systems',
        description: 'Multi-layered cybersecurity and physical security solutions protecting digital assets and facilities.',
        longDescription: 'Comprehensive deployment of physical security frameworks integrated with digital identity management.',
        features: [
            'IP Surveillance (CCTV): High-definition PTZ and fixed cameras with centralized intelligent recording.',
            'One Card System: Unified solution for identity, access, attendance, and visitor management using smart cards.',
            'Video Analytics & AI: Proactive monitoring with automated object recognition and security alerts.',
            'Access Control: Hardware-software integration for managed facility entry and real-time reporting.'
        ],
        benefits: [],
    },
    {
        slug: 'enterprise-platforms',
        icon: Code,
        logoImage: '/images/enterprise-apps-logo.png',
        sidebarImage: '',
        bannerImage: '/images/custom-enterprise-v2.jpg',
        bgColor: '#3B82F6',
        title: 'Enterprise Platforms & Applications',
        description: 'Business-critical ERP, collaboration, databases, and platforms designed for operational excellence.',
        longDescription: 'Deployment and integration of modern, scalable, and business-alined enterprise applications.',
        features: [
            'ERP & CRM Solutions: Deployment of integrated business process and customer management platforms.',
            'Custom Software Development: Tailored applications designed for unique organizational requirements.',
            'System Integration: Seamless connection of enterprise software with ICT and business infrastructure.',
            'Mobile & Web Applications: Secure, scalable, and user-friendly cross-platform application development.'
        ],
        benefits: [],
    },
    {
        slug: 'technology-advisory',
        icon: Lightbulb,
        logoImage: '/images/technology-advisory-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/technology-advisory-final.jpg',
        bgColor: '#8B5CF6',
        title: 'Technology Advisory & Integration',
        description: 'Strategic consulting for digital transformation, IT roadmap, and technology optimization.',
        longDescription: 'Guidance in aligning ICT investments with business objectives while providing hands-on deployment support.',
        features: [
            'Digital Transformation: Strategic roadmaps for technology-driven growth and modernization.',
            'Managed ICT Deployment: Full-cycle deployment and maintenance of enterprise IT systems.',
            'ICT Strategy Consulting: Aligning technology solutions with long-term organizational goals.',
            'Support & Maintenance: 24/7 technical assistance with specialized SLA-based service contracts.'
        ],
        benefits: [],
    },
    {
        slug: 'cloud-virtualization',
        icon: Cloud,
        logoImage: '/images/cloud-virtualization-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/custom-cloud.jpg',
        bgColor: '#38BDF8',
        title: 'Cloud & Virtualization Services',
        description: 'Flexible cloud deployments and virtualization to enhance scalability, backup, and continuity.',
        longDescription: 'Building cloud-ready infrastructures to deliver enterprise-grade flexibility, scalability, and resilience.',
        features: [
            'Public, Private & Hybrid Cloud: Tailored cloud deployment solutions to meet organizational needs.',
            'Cloud Migration: Secure migration of workloads with continuous optimization for performance.',
            'Virtualization Platforms: High-density server and desktop virtualization for resource efficiency.',
            'Disaster Recovery & Backup: Robust data protection systems ensuring seamless business continuity.'
        ],
        benefits: [],
    },
    {
        slug: 'smart-systems',
        icon: Cpu,
        logoImage: '/images/smart-systems-final.png',
        sidebarImage: '',
        bannerImage: '/images/smart-systems-final.png',
        bgColor: '#FACC15',
        title: 'Smart Systems & Automation',
        description: 'IoT-enabled building automation, energy management, intelligent security, and network optimization.',
        longDescription: 'Intelligent, automated, and connected facilities for modern, efficient enterprise operations.',
        features: [
            'Building Automation: Integration and optimization of lighting, HVAC, and energy monitoring.',
            'IoT Integration: Real-time analytics and intelligent device management for smart facilities.',
            'Energy Management: Automated controls designed for operational efficiency and sustainability.',
            'Intelligent Security: AI-driven surveillance and automated facility response systems.'
        ],
        benefits: [],
    },
    {
        slug: 'engineering-critical',
        icon: Zap,
        logoImage: '/images/engineering-electrical-final.jpg',
        sidebarImage: '',
        bannerImage: '/images/engineering-electrical-final.jpg',
        bgColor: '#1C1C1C',
        title: 'Critical Power & Infrastructure Systems',
        description: 'Engineering solutions including facility design, power optimization, cooling, and environmental controls.',
        longDescription: 'Mission-critical power and infrastructure solutions for operational reliability.',
        features: [
            'Power Optimization: Efficient electrical systems designed for stable and reliable power delivery.',
            'Redundancy Planning: Fail-safe architecture with backup systems to minimize downtime.',
            'Cooling Systems: Advanced HVAC and thermal management for sensitive equipment.',
            'Environmental Controls: Precision monitoring of temperature, humidity, and airflow for operational safety.',
            'Facility Engineering Support: Expert installation, configuration, and integration of critical systems.',
            'Monitoring & Performance Enhancement: Continuous oversight and optimization of infrastructure performance.'
        ],
        benefits: [],
    }
];
