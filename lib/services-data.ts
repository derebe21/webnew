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
    Target,
    Network,
    Camera,
    Wrench,
    Database,
    Lock,
    Eye
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
    partners?: { name: string; logo: string; url: string; color?: string; description: string }[];
}

export const servicesData: Service[] = [
    {
        slug: 'cybersecurity',
        icon: ShieldCheck,
        logoImage: '/images/services/cybersecurity-new-banner.png',
        sidebarImage: '',
        bannerImage: '/images/services/cybersecurity-new-banner.png',
        bgColor: '#0F172A',
        title: 'Cybersecurity Services',
        description: 'Professional-grade security operations and policy enforcement to safeguard your digital assets.',
        longDescription: 'Professional-grade security operations and policy enforcement to safeguard your digital assets.',
        features: [
            'SOC with IDS/IPS and SIEM: Dedicated facility for real-time monitoring, threat detection, and response.',
            'Network Access Control (NAC): Policy enforcement to ensure only authorized users and compliant devices connect.',
            'Security Assessments: Auditing, penetration testing, and AI-driven threat analysis for proactive defense.',
            'Endpoint & Network Protection: Comprehensive security layering for users, servers, and infrastructure.'
        ],
        benefits: ['Reduced breach risk', '24/7 threat monitoring', 'Regulatory compliance', 'Proactive defense posture'],
    },
    {
        slug: 'digital-infrastructure',
        icon: Network,
        logoImage: '/images/services/network-infrastructure-new.png',
        sidebarImage: '',
        bannerImage: '/images/services/network-infrastructure.png',
        bgColor: '#2E3A59',
        title: 'Network Infrastructure Services',
        description: 'End-to-end ICT infrastructure design and deployment for maximum efficiency, security, and reliability.',
        longDescription: 'End-to-end ICT infrastructure design and deployment for maximum efficiency, security, and reliability.',
        features: [
            'Enterprise Networking: LAN/WAN, wireless mobility, VPNs, firewalls, and IDS/IPS for optimized connectivity.',
            'Structured Cabling: High-performance UTP, fiber, and copper cabling with integrated rack management.',
            'High Availability: Redundancy, load balancing, and real-time monitoring to ensure zero-disruption operations.',
            'Digital Transformation: Scalable ICT foundations built for enterprise-grade growth and regulatory compliance.'
        ],
        benefits: ['99.99% network uptime', 'Scalable bandwidth', 'Reduced latency', 'Enterprise-grade reliability'],
    },
    {
        slug: 'data-center-solutions',
        icon: Server,
        logoImage: '/images/data-center-final.png',
        sidebarImage: '',
        bannerImage: '/images/services/data-center.jpg',
        bgColor: '#1E293B',
        title: 'Data Center Services',
        description: 'Installation and configuration of high-availability data center facilities and virtualization platforms.',
        longDescription: 'Installation and configuration of high-availability data center facilities and virtualization platforms.',
        features: [
            'Server & Storage Solutions: Performance-optimized server deployment and scalable enterprise storage.',
            'Virtualization Platforms: Advanced cloud-ready virtualization for maximized resource utilization.',
            'Power & Cooling: Redundant power systems and precision cooling for equipment integrity.',
            'Disaster Recovery: Business continuity planning and automated failover for critical facility operations.'
        ],
        benefits: ['High availability', 'Optimized cooling efficiency', 'Rapid disaster recovery', 'Scalable storage'],
    },
    {
        slug: 'cloud-virtualization',
        icon: Cloud,
        logoImage: '/images/cloud-virtualization-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/services/cloud-virtualization.jpg',
        bgColor: '#38BDF8',
        title: 'Cloud & Virtualization Services',
        description: 'Cloud-ready platforms and virtualization solutions for scalability and resource optimization.',
        longDescription: 'Building cloud-ready infrastructures to deliver enterprise-grade flexibility, scalability, and resilience.',
        features: [
            'Public, Private & Hybrid Cloud: Tailored cloud deployment solutions to meet organizational needs.',
            'Cloud Migration: Secure migration of workloads with continuous optimization for performance.',
            'Virtualization Platforms: High-density server and desktop virtualization for resource efficiency.',
            'Disaster Recovery & Backup: Robust data protection systems ensuring seamless business continuity.'
        ],
        benefits: ['Reduced infrastructure costs', 'Elastic scalability', 'Faster deployment', 'Seamless migration'],
    },
    {
        slug: 'unified-communications',
        icon: MessageSquare,
        logoImage: '/images/unified-communications-new.png',
        sidebarImage: '',
        bannerImage: '/images/services/unified-communications.jpg',
        bgColor: '#1E293B',
        title: 'Unified Communications Services',
        description: 'Integrated voice, video, messaging, and collaboration tools for seamless connectivity.',
        longDescription: 'IP-based VoIP, video conferencing, and collaboration platforms for seamless communication and connection.',
        features: [
            'Voice, Video & Messaging Platforms: Seamless enterprise-grade communication tools for collaboration.',
            'Collaboration Tools: Secure platforms for team interaction, project management, and document sharing.',
            'Scalable Communication Networks: Reliable and expandable networks supporting voice, video, and data traffic.',
            'Infrastructure Integration: Seamless connection of communication systems with existing enterprise IT environments.'
        ],
        benefits: ['Seamless collaboration', 'Reduced communication costs', 'Remote-ready infrastructure', 'Unified platform'],
        partners: [
            { name: 'Cisco', logo: '/images/ciscoo.png', url: 'https://www.cisco.com/c/en/us/solutions/collaboration/index.html', color: '1BA0D7', description: 'Comprehensive collaboration, IP telephony, and video conferencing.' },
            { name: 'Dinstar', logo: '/images/partners/dinstar_new_v2.png', url: 'https://www.dinstar.com/', description: 'IP unified communications and VoIP gateway solutions.' },
            { name: 'VaxVoIP', logo: '/images/partners/vaxvoip_new_v2.png', url: 'https://www.vaxvoip.com/', description: 'Specialized SIP-based voice and video communication technologies.' },
            { name: 'Grandstream', logo: '/images/partners/grandstream_new_v2.png', url: 'http://www.grandstream.com/', description: 'High-quality IP voice, video, data, and mobility solutions.' }
        ]
    },
    {
        slug: 'integrated-security',
        icon: Camera,
        logoImage: '/images/services/integrated-security-new.jpg',
        sidebarImage: '',
        bannerImage: '/images/services/integrated-security.jpg',
        bgColor: '#22C55E',
        title: 'Integrated Security System Services',
        description: 'Physical and digital security integration for comprehensive site and facility protection.',
        longDescription: 'Comprehensive deployment of physical security frameworks integrated with digital identity management.',
        features: [
            'IP Surveillance (CCTV): High-definition PTZ and fixed cameras with centralized intelligent recording.',
            'One Card System: Unified solution for identity, access, attendance, and visitor management using smart cards.',
            'Video Analytics & AI: Proactive monitoring with automated object recognition and security alerts.',
            'Access Control: Hardware-software integration for managed facility entry and real-time reporting.'
        ],
        benefits: ['Real-time threat detection', 'Centralized monitoring', 'Reduced security incidents', 'AI-powered analytics'],
    },
    {
        slug: 'smart-systems',
        icon: Cpu,
        logoImage: '/images/smart-systems-final.png',
        sidebarImage: '',
        bannerImage: '/images/services/smart-systems.png',
        bgColor: '#FACC15',
        title: 'Smart Systems & Automation Services',
        description: 'Intelligent building automation, IoT integration, and smart environment solutions.',
        longDescription: 'Intelligent, automated, and connected facilities for modern, efficient enterprise operations.',
        features: [
            'Building Automation: Integration and optimization of lighting, HVAC, and energy monitoring.',
            'IoT Integration: Real-time analytics and intelligent device management for smart facilities.',
            'Energy Management: Automated controls designed for operational efficiency and sustainability.',
            'Intelligent Security: AI-driven surveillance and automated facility response systems.'
        ],
        benefits: ['Energy savings up to 40%', 'Automated facility control', 'Real-time IoT analytics', 'Predictive maintenance'],
    },
    {
        slug: 'technology-advisory',
        icon: Lightbulb,
        logoImage: '/images/technology-advisory-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/services/technology-advisory.jpg',
        bgColor: '#8B5CF6',
        title: 'Technology Advisory & Consultancy Services',
        description: 'Strategic ICT consultancy to align technology investments with your business goals.',
        longDescription: 'Guidance in aligning ICT investments with business objectives while providing hands-on deployment support.',
        features: [
            'Digital Transformation: Strategic roadmaps for technology-driven growth and modernization.',
            'Managed ICT Deployment: Full-cycle deployment and maintenance of enterprise IT systems.',
            'ICT Strategy Consulting: Aligning technology solutions with long-term organizational goals.',
            'Support & Maintenance: 24/7 technical assistance with specialized SLA-based service contracts.'
        ],
        benefits: ['Aligned IT strategy', 'Faster digital transformation', 'Cost-optimized solutions', 'Expert guidance'],
    },
    {
        slug: 'engineering-critical',
        icon: Zap,
        logoImage: '/images/engineering-electrical-final.jpg',
        sidebarImage: '',
        bannerImage: '/images/services/critical-power.png',
        bgColor: '#1C1C1C',
        title: 'Critical Power & Electrical Services',
        description: 'UPS, generator systems, and precision electrical engineering for critical facilities.',
        longDescription: 'Mission-critical power and infrastructure solutions for operational reliability.',
        features: [
            'Power Optimization: Efficient electrical systems designed for stable and reliable power delivery.',
            'Redundancy Planning: Fail-safe architecture with backup systems to minimize downtime.',
            'Cooling Systems: Advanced HVAC and thermal management for sensitive equipment.',
            'Environmental Controls: Precision monitoring of temperature, humidity, and airflow for operational safety.',
            'Facility Engineering Support: Expert installation, configuration, and integration of critical systems.',
            'Monitoring & Performance Enhancement: Continuous oversight and optimization of infrastructure performance.'
        ],
        benefits: ['Zero-downtime power', 'Redundant failover systems', 'Precision environmental control', 'Operational safety'],
    },
    {
        slug: 'support-maintenance',
        icon: Wrench,
        logoImage: '/images/enterprise-apps-logo.png',
        sidebarImage: '',
        bannerImage: '/images/services/support-maintenance.png',
        bgColor: '#3B82F6',
        title: 'Support & Maintenance Services',
        description: 'Ongoing technical support, SLA-backed maintenance, and proactive infrastructure monitoring.',
        longDescription: 'Comprehensive SLA-based technical support to ensure continuous operation of all enterprise systems.',
        features: [
            'Preventive Maintenance: Scheduled health checks and system optimization.',
            '24/7 Technical Support: Dedicated helpdesk and rapid-response technical assistance.',
            'SLA-Based Contracts: Guaranteed response times and resolution metrics.',
            'System Updates & Patching: Continuous security and feature updates across all infrastructure.'
        ],
        benefits: ['Guaranteed SLA response', 'Preventive issue detection', 'Continuous system updates', 'Dedicated helpdesk'],
    }
];
