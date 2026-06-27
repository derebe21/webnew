// ITSEC Technology — Data Store (localStorage-backed, Supabase-ready)
// This provides CRUD operations for all editable website content.
import { servicesData, Service } from './services-data';

// ============ TYPES ============

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  body: string;
  image_url: string;
  category: string;
  author_name?: string;
  author_role?: string;
  published_at: string;
  created_at: string;
}

export interface AboutCard {
  id: string;
  title: string;
  description: string;
  icon: string; // 'Rocket' | 'Target' | 'Award'
  color: string; // 'blue' | 'cyan' | 'orange'
  sort_order: number;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  long_description: string;
  features: string[];
  banner_image: string;
  logo_image: string;
  bg_color?: string;
  icon?: any;
  sort_order?: number;
}

export interface ContactInfo {
  id: string;
  key: string; // 'phone', 'email_info', 'email_contact', 'email_support', 'email_sales', 'address', 'whatsapp'
  label: string;
  value: string;
  href?: string;
}

export interface InboxMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  department: string;
  urgency: string;
  message?: string;
  details?: any; // Additional fields like company, service, etc.
  date: string;
  status: 'unread' | 'read' | 'replied';
}

export interface TechnologyPartner {
  id: string;
  name: string;
  logo: string;
  url: string;
  color: string;
  description: string;
  category: string; // 'cybersecurity', 'networking', 'virtualization', etc.
  sort_order: number;
}

export interface SiteSettings {
  siteName: string;
  metaDescription: string;
  analyticsId: string;
  smtpHost: string;
  smtpPort: string;
  smtpEncryption: string;
  fromEmail: string;
}

export interface MenuItem {
  id: string;
  name: string;
  path: string;
  order: number;
  visible: boolean;
}

export interface TextSnippet {
  id: string; // Used as key e.g. 'hero-title'
  category: string;
  text: string;
  lastUpdated: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  status: string;
  photoUrl?: string;
}

// ============ DEFAULT SEED DATA ============

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: 'Zero-Trust Architecture: The New Enterprise Imperative',
    summary: 'As perimeter-based security models become obsolete, East African enterprises are accelerating their adoption of Zero-Trust frameworks to secure distributed workforces.',
    body: `<p>The traditional "castle-and-moat" approach to cybersecurity is no longer viable for modern enterprises. With the rapid migration to hybrid cloud environments and the permanent shift toward distributed workforces, the attack surface has expanded exponentially.</p>
<h2>Why Zero-Trust is Non-Negotiable</h2>
<p>Zero-Trust operates on a simple principle: "Never trust, always verify." Regardless of whether an access request originates from inside or outside the corporate network, it must be rigorously authenticated, authorized, and continuously validated before access is granted.</p>
<ul>
<li><strong>Identity is the New Perimeter:</strong> Implementing robust Identity and Access Management (IAM) and Multi-Factor Authentication (MFA).</li>
<li><strong>Micro-segmentation:</strong> Isolating workloads to prevent lateral movement of threats in the event of a breach.</li>
<li><strong>Continuous Monitoring:</strong> Utilizing AI-driven analytics to detect anomalous behavior in real-time.</li>
</ul>
<p>ITSEC Technology is partnering with leading vendors like Palo Alto Networks and Microsoft to help regional financial institutions and government agencies architect scalable Zero-Trust environments.</p>`,
    image_url: '/images/news-zero-trust.png',
    category: 'Cybersecurity',
    author_name: 'Merikat Meharu',
    author_role: 'Head of Cybersecurity',
    published_at: '2026-05-12T08:00:00Z',
    created_at: '2026-05-12T08:00:00Z',
  },
  {
    id: '2',
    title: 'Optimizing Data Center Power & Cooling for AI Workloads',
    summary: 'High-density AI servers require specialized power and cooling infrastructure. We explore how modern data centers are adapting to these immense thermal challenges.',
    body: `<p>The explosion of Generative AI and machine learning workloads has fundamentally altered data center economics and engineering. Traditional racks drawing 5-10kW are being rapidly replaced by high-density AI clusters drawing 40-100kW per rack.</p>
<h2>Engineering for Extreme Density</h2>
<p>Air cooling alone is reaching its physical limits. To support next-generation compute, facilities must transition to advanced thermal management systems:</p>
<ul>
<li><strong>Direct-to-Chip Liquid Cooling:</strong> Capturing heat directly at the processor level, improving PUE (Power Usage Effectiveness) significantly.</li>
<li><strong>Rear-Door Heat Exchangers:</strong> Supplemental cooling that handles high exhaust temperatures directly at the rack level.</li>
<li><strong>Intelligent Power Distribution:</strong> Implementing smart PDUs and advanced UPS topologies to ensure stable, resilient power delivery to mission-critical GPU clusters.</li>
</ul>
<p>At ITSEC Technology, our infrastructure engineering team is deploying TIA-942 compliant facilities designed specifically to handle the demands of modern algorithmic compute.</p>`,
    image_url: '/images/datacenter.jpg',
    category: 'Data Center',
    author_name: 'Temesgen Wasse',
    author_role: 'Solutions Architect',
    published_at: '2026-06-05T10:30:00Z',
    created_at: '2026-06-05T10:30:00Z',
  },
  {
    id: '3',
    title: 'The Evolution of SD-WAN in Multinational Deployments',
    summary: 'Software-Defined WAN is transforming how regional banks and telecom operators connect their branches, offering unprecedented visibility, agility, and cost savings.',
    body: `<p>Managing wide area networks across distributed branch offices has historically been complex, rigid, and expensive. SD-WAN technology has matured from an emerging concept into an enterprise standard, fundamentally changing how organizations route critical traffic.</p>
<h2>Key Advantages of Modern SD-WAN</h2>
<p>By decoupling the networking hardware from its control mechanism, SD-WAN provides a centralized, software-driven approach to WAN management.</p>
<ul>
<li><strong>Application-Aware Routing:</strong> Dynamically routing traffic based on real-time application requirements, prioritizing critical SaaS apps over general web traffic.</li>
<li><strong>Transport Independence:</strong> Seamlessly aggregating MPLS, broadband, and 5G connections to increase bandwidth and ensure high availability.</li>
<li><strong>Integrated Security (SASE):</strong> Modern SD-WAN solutions are increasingly converging with cloud-native security frameworks (Secure Access Service Edge) to protect traffic at the edge.</li>
</ul>
<p>Our recent deployments utilizing Cisco Catalyst SD-WAN and Fortinet Secure SD-WAN have demonstrated up to 40% reductions in operational costs while drastically improving application performance.</p>`,
    image_url: '/images/digital-infrastructure-final.png',
    category: 'Networking',
    author_name: 'Derebe Sinamaw',
    author_role: 'Chief Technology Officer',
    published_at: '2026-06-18T14:15:00Z',
    created_at: '2026-06-18T14:15:00Z',
  },
  {
    id: '4',
    title: 'Enhancing Physical Security with AI Video Analytics',
    summary: 'Legacy CCTV is reactive. Modern intelligent surveillance systems utilize machine learning to proactively detect threats, track anomalies, and automate incident response.',
    body: `<p>The days of security personnel passively monitoring dozens of screens are ending. Modern surveillance systems are highly intelligent sensor networks that process vast amounts of visual data in real-time.</p>
<h2>Moving from Reactive to Proactive</h2>
<p>By integrating deep learning algorithms at the edge (on the camera) and the core (on the NVR/Server), organizations can automate threat detection.</p>
<ul>
<li><strong>Behavioral Analytics:</strong> Automatically identifying loitering, abandoned objects, or unauthorized perimeter breaches without human intervention.</li>
<li><strong>Facial Recognition & Access Integration:</strong> Seamlessly connecting visual data with biometric access control systems for frictionless, secure facility entry.</li>
<li><strong>Operational Intelligence:</strong> Utilizing heat mapping and crowd density analytics to optimize facility layouts and emergency evacuation protocols.</li>
</ul>
<p>ITSEC Technology integrates advanced systems from Dahua, Hikvision, and Milestone Systems to build unified command and control centers that provide total situational awareness.</p>`,
    image_url: '/images/custom-cctv.jpg',
    category: 'Physical Security',
    author_name: 'Solomon Kebede',
    author_role: 'Security Systems Engineer',
    published_at: '2026-06-22T09:45:00Z',
    created_at: '2026-06-22T09:45:00Z',
  }
];

const defaultAboutCards: AboutCard[] = [
  {
    id: '1',
    title: 'About Us',
    description: 'We design and deploy comprehensive end-to-end ICT infrastructure solutions that empower organizations worldwide to operate with maximum efficiency, reliability, and security. By combining cutting-edge technology with expert guidance, we help businesses modernize operations, protect critical assets, and scale for sustainable growth.',
    icon: 'Rocket',
    color: 'blue',
    sort_order: 1,
  },
  {
    id: '2',
    title: 'Vision',
    description: 'To deliver secure, scalable, and high-performance technology infrastructures that ensure long-term digital transformation and regulatory compliance for modern enterprises.',
    icon: 'Target',
    color: 'cyan',
    sort_order: 2,
  },
  {
    id: '3',
    title: 'Mission',
    description: 'To empower organizations with reliable, future-ready technology infrastructures through technical excellence in networking, data centers, security, and smart building solutions.',
    icon: 'Award',
    color: 'orange',
    sort_order: 3,
  },
];

const defaultContactInfo: ContactInfo[] = [
  { id: '1', key: 'phone', label: 'Phone / WhatsApp', value: '+251 911 407 439', href: 'https://wa.me/251911407439' },
  { id: '3', key: 'email_info', label: 'Email (Info)', value: 'info@itsectechnology.com', href: 'mailto:info@itsectechnology.com' },
  { id: '4', key: 'email_contact', label: 'Email (Contact)', value: 'contact@itsectechnology.com', href: 'mailto:contact@itsectechnology.com' },
  { id: '5', key: 'email_support', label: 'Email (Support)', value: 'support@itsectechnology.com', href: 'mailto:support@itsectechnology.com' },
  { id: '6', key: 'email_sales', label: 'Email (Sales)', value: 'sales@itsectechnology.com', href: 'mailto:sales@itsectechnology.com' },
  { id: '7', key: 'address', label: 'Address', value: 'Kirkos Church, Addis Ababa, Ethiopia', href: 'https://maps.google.com/?q=Kirkos+Church+Addis+Ababa+Ethiopia' },
];

// --- TECHNOLOGY ---
const defaultTechnology: TechnologyPartner[] = [
  // Cybersecurity & Threat Protection
  { id: 't1', name: 'Palo Alto Networks', category: 'Cybersecurity & Threat Protection', color: 'FA582D', logo: 'paloaltonetworks', url: 'https://www.paloaltonetworks.com', description: 'Next-generation firewall and advanced threat prevention', sort_order: 1 },
  { id: 't2', name: 'Fortinet', category: 'Cybersecurity & Threat Protection', color: 'EE3124', logo: 'fortinet', url: 'https://www.fortinet.com', description: 'High-performance security, SD-WAN, and unified threat management', sort_order: 2 },
  { id: 't3', name: 'Check Point', category: 'Cybersecurity & Threat Protection', color: 'EC1561', logo: '/images/logos/check_point.jpg', url: 'https://www.checkpoint.com', description: 'Enterprise firewall and cyber defense solutions', sort_order: 3 },
  { id: 't4', name: 'Sophos', category: 'Cybersecurity & Threat Protection', color: '0078D4', logo: '/images/logos/Sopohs.png', url: 'https://www.sophos.com', description: 'Endpoint protection and centralized security management', sort_order: 4 },
  { id: 't5', name: 'CrowdStrike', category: 'Cybersecurity & Threat Protection', color: 'FF0000', logo: '/images/logos/crowdstrike-logo.png', url: 'https://www.crowdstrike.com', description: 'AI-powered endpoint detection and response (EDR)', sort_order: 5 },
  { id: 't6', name: 'Darktrace', category: 'Cybersecurity & Threat Protection', color: '000000', logo: '/images/logos/darktrace.png', url: 'https://www.darktrace.com', description: 'Autonomous AI-driven threat detection and response', sort_order: 6 },
  { id: 't7', name: 'Imperva', category: 'Cybersecurity & Threat Protection', color: '0055A5', logo: '/images/logos/IMPROVMENT.png', url: 'https://www.imperva.com', description: 'Web application firewall, database security, and DDoS protection', sort_order: 7 },

  // Networking & Infrastructure
  { id: 't8', name: 'Cisco', category: 'Networking & Infrastructure', color: '1BA0D7', logo: 'cisco', url: 'https://www.cisco.com', description: 'Enterprise networking, routing, switching, and secure access', sort_order: 8 },
  { id: 't9', name: 'Juniper Networks', category: 'Networking & Infrastructure', color: '81BC00', logo: 'junipernetworks', url: 'https://www.juniper.net', description: 'AI-driven networking and high-performance routing', sort_order: 9 },
  { id: 't10', name: 'Huawei', category: 'Networking & Infrastructure', color: 'FF0000', logo: 'huawei', url: 'https://e.huawei.com', description: 'Carrier-grade and enterprise networking infrastructure', sort_order: 10 },

  // Cloud & Virtualization
  { id: 't11', name: 'VMware', category: 'Cloud & Virtualization', color: '607078', logo: '/images/logos/VMware_cloud_icon.webp', url: 'https://www.vmware.com', description: 'Multi-cloud infrastructure and virtualization platforms', sort_order: 11 },
  { id: 't12', name: 'Microsoft', category: 'Cloud & Virtualization', color: '00A4EF', logo: 'microsoft', url: 'https://www.microsoft.com', description: 'Cloud computing, enterprise services, and virtualization', sort_order: 12 },
  { id: 't13', name: 'Red Hat', category: 'Cloud & Virtualization', color: 'EE0000', logo: 'redhat', url: 'https://www.redhat.com', description: 'Open-source enterprise Linux and hybrid cloud solutions', sort_order: 13 },

  // Servers & Data Center Infrastructure
  { id: 't14', name: 'Dell', category: 'Servers & Data Center Infrastructure', color: '007DB8', logo: 'dell', url: 'https://www.dell.com', description: 'Enterprise servers, storage, and data center systems', sort_order: 14 },
  { id: 't15', name: 'HPE', category: 'Servers & Data Center Infrastructure', color: '01A982', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg', url: 'https://www.hpe.com', description: 'Scalable compute and storage infrastructure', sort_order: 15 },
  { id: 't16', name: 'Lenovo', category: 'Servers & Data Center Infrastructure', color: 'E2231A', logo: 'lenovo', url: 'https://www.lenovo.com', description: 'Reliable enterprise servers and storage solutions', sort_order: 16 },
  { id: 't17', name: 'IBM', category: 'Servers & Data Center Infrastructure', color: '052FAD', logo: 'ibm', url: 'https://www.ibm.com', description: 'Hybrid cloud, AI-ready infrastructure, and enterprise storage', sort_order: 17 },
  { id: 't18', name: 'Supermicro', category: 'Servers & Data Center Infrastructure', color: '000000', logo: '/images/logos/Super_Micro_Computer_Logo.svg.png', url: 'https://www.supermicro.com', description: 'Energy-efficient high-performance computing systems', sort_order: 18 },

  // Storage & Backup
  { id: 't19', name: 'Synology', category: 'Storage & Backup', color: '121212', logo: '/images/logos/Synology.png', url: 'https://www.synology.com', description: 'Network-attached storage (NAS) and backup solutions', sort_order: 19 },

  // Surveillance & Security Systems
  { id: 't20', name: 'Hikvision', category: 'Surveillance & Security Systems', color: 'E2231A', logo: 'https://icon.horse/icon/hikvision.com', url: 'https://www.hikvision.com', description: 'IP cameras, DVR/NVR systems, AI video surveillance', sort_order: 20 },
  { id: 't21', name: 'Dahua Technology', category: 'Surveillance & Security Systems', color: 'FF0000', logo: 'https://icon.horse/icon/dahuasecurity.com', url: 'https://www.dahuasecurity.com', description: 'Smart CCTV, AI analytics, video management systems', sort_order: 21 },
  { id: 't22', name: 'Axis Communications', category: 'Surveillance & Security Systems', color: 'FFD700', logo: 'https://icon.horse/icon/axis.com', url: 'https://www.axis.com', description: 'High-end network cameras and enterprise video solutions', sort_order: 22 },
  { id: 't23', name: 'Hanwha Vision', category: 'Surveillance & Security Systems', color: 'F37021', logo: 'https://icon.horse/icon/hanwhavision.com', url: 'https://www.hanwhavision.com', description: 'Professional IP surveillance systems', sort_order: 23 },
  { id: 't24', name: 'Bosch Security Systems', category: 'Surveillance & Security Systems', color: 'ED0007', logo: 'bosch', url: 'https://www.boschsecurity.com', description: 'Enterprise-grade video surveillance and analytics', sort_order: 24 },
  { id: 't25', name: 'Pelco', category: 'Surveillance & Security Systems', color: '0055A5', logo: 'https://icon.horse/icon/pelco.com', url: 'https://www.pelco.com', description: 'Industrial and critical infrastructure surveillance', sort_order: 25 },
  { id: 't26', name: 'Avigilon', category: 'Surveillance & Security Systems', color: '00A3E0', logo: 'https://icon.horse/icon/avigilon.com', url: 'https://www.avigilon.com', description: 'AI-powered video security and analytics', sort_order: 26 },
  { id: 't27', name: 'Uniview (UNV)', category: 'Surveillance & Security Systems', color: '005AAA', logo: 'https://icon.horse/icon/uniview.com', url: 'https://www.uniview.com', description: 'Cost-effective IP camera and NVR solutions', sort_order: 27 },
  { id: 't28', name: 'Tiandy', category: 'Surveillance & Security Systems', color: 'FF6600', logo: 'https://icon.horse/icon/tiandy.com', url: 'https://en.tiandy.com', description: 'AI surveillance and smart security cameras', sort_order: 28 },
  { id: 't29', name: 'Vivotek', category: 'Surveillance & Security Systems', color: 'E3000F', logo: 'https://icon.horse/icon/vivotek.com', url: 'https://www.vivotek.com', description: 'Network cameras and video surveillance solutions', sort_order: 29 },

  // Video Management & AI Platforms
  { id: 't30', name: 'Milestone Systems', category: 'Video Management & AI Platforms', color: '005288', logo: 'https://icon.horse/icon/milestonesys.com', url: 'https://www.milestonesys.com', description: 'Video Management Software (VMS) platform', sort_order: 30 },
  { id: 't31', name: 'Genetec', category: 'Video Management & AI Platforms', color: '000000', logo: 'https://icon.horse/icon/genetec.com', url: 'https://www.genetec.com', description: 'Unified security platform (video, access control, LPR)', sort_order: 31 },
  { id: 't32', name: 'Avigilon Control Center', category: 'Video Management & AI Platforms', color: '00A3E0', logo: 'https://icon.horse/icon/avigilon.com', url: 'https://www.avigilon.com', description: 'AI-driven video management system', sort_order: 32 },

  // Access Control & Biometrics
  { id: 't33', name: 'HID Global', category: 'Access Control & Biometrics', color: '005A9C', logo: 'https://icon.horse/icon/hidglobal.com', url: 'https://www.hidglobal.com', description: 'Access control cards and identity systems', sort_order: 33 },
  { id: 't34', name: 'ZKTeco', category: 'Access Control & Biometrics', color: '74B429', logo: 'https://icon.horse/icon/zkteco.com', url: 'https://www.zkteco.com', description: 'Biometrics (fingerprint, face recognition, time attendance)', sort_order: 34 },
  { id: 't35', name: 'Suprema', category: 'Access Control & Biometrics', color: 'C12026', logo: 'https://icon.horse/icon/supremainc.com', url: 'https://www.supremainc.com', description: 'Advanced biometric access control systems', sort_order: 35 },
  { id: 't36', name: 'Honeywell Security', category: 'Access Control & Biometrics', color: 'E2231A', logo: 'https://icon.horse/icon/honeywell.com', url: 'https://www.honeywell.com', description: 'Integrated security and building management systems', sort_order: 36 },
  { id: 't37', name: 'Gallagher Security', category: 'Access Control & Biometrics', color: 'F58220', logo: 'https://icon.horse/icon/security.gallagher.com', url: 'https://security.gallagher.com', description: 'Enterprise access control solutions', sort_order: 37 },

  // Specialized Security Systems
  { id: 't38', name: 'FLIR Systems', category: 'Specialized Security Systems', color: '000000', logo: 'https://icon.horse/icon/flir.com', url: 'https://www.flir.com', description: 'Thermal imaging and night surveillance', sort_order: 38 },
  { id: 't39', name: 'Teledyne FLIR', category: 'Specialized Security Systems', color: '0055A5', logo: 'https://icon.horse/icon/flir.com', url: 'https://www.flir.com', description: 'Advanced thermal and detection systems', sort_order: 39 },
  { id: 't40', name: 'Bosch Building Technologies', category: 'Specialized Security Systems', color: 'ED0007', logo: 'bosch', url: 'https://www.boschsecurity.com', description: 'Integrated fire, safety, and security systems', sort_order: 40 },
];

// ============ STORAGE HELPERS ============

function getStore<T>(key: string, defaults: T[]): T[] {
  if (typeof window === 'undefined') return defaults;
  try {
    const stored = localStorage.getItem(`itsec_${key}`);
    if (stored) return JSON.parse(stored);
  } catch (e) { /* ignore */ }
  return defaults;
}

function setStore<T>(key: string, data: T[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`itsec_${key}`, JSON.stringify(data));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// ============ CRUD OPERATIONS ============

// --- NEWS ---
export const newsStore = {
  getAll: (): NewsItem[] => getStore<NewsItem>('news_v2', defaultNews),
  getById: (id: string): NewsItem | undefined => newsStore.getAll().find(n => n.id === id),
  add: (item: Omit<NewsItem, 'id' | 'created_at'>): NewsItem => {
    const items = newsStore.getAll();
    const newItem: NewsItem = { ...item, id: generateId(), created_at: new Date().toISOString() };
    items.unshift(newItem);
    setStore('news_v2', items);
    return newItem;
  },
  update: (id: string, updates: Partial<NewsItem>): void => {
    const items = newsStore.getAll().map(n => n.id === id ? { ...n, ...updates } : n);
    setStore('news_v2', items);
  },
  remove: (id: string): void => {
    setStore('news_v2', newsStore.getAll().filter(n => n.id !== id));
  },
};

// --- ABOUT CARDS ---
export const aboutStore = {
  getAll: (): AboutCard[] => getStore<AboutCard>('about', defaultAboutCards).sort((a, b) => a.sort_order - b.sort_order),
  getById: (id: string): AboutCard | undefined => aboutStore.getAll().find(c => c.id === id),
  update: (id: string, updates: Partial<AboutCard>): void => {
    const items = aboutStore.getAll().map(c => c.id === id ? { ...c, ...updates } : c);
    setStore('about', items);
  },
  add: (item: Omit<AboutCard, 'id'>): AboutCard => {
    const items = aboutStore.getAll();
    const newItem: AboutCard = { ...item, id: generateId() };
    items.push(newItem);
    setStore('about', items);
    return newItem;
  },
  remove: (id: string): void => {
    setStore('about', aboutStore.getAll().filter(c => c.id !== id));
  },
};

// --- CONTACT INFO ---
export const contactStore = {
  getAll: (): ContactInfo[] => getStore<ContactInfo>('contact_v2', defaultContactInfo),
  getById: (id: string): ContactInfo | undefined => contactStore.getAll().find(c => c.id === id),
  update: (id: string, updates: Partial<ContactInfo>): void => {
    const items = contactStore.getAll().map(c => c.id === id ? { ...c, ...updates } : c);
    setStore('contact_v2', items);
  },
  add: (item: Omit<ContactInfo, 'id'>): ContactInfo => {
    const items = contactStore.getAll();
    const newItem: ContactInfo = { ...item, id: generateId() };
    items.push(newItem);
    setStore('contact_v2', items);
    return newItem;
  },
  remove: (id: string): void => {
    setStore('contact_v2', contactStore.getAll().filter(c => c.id !== id));
  },
};

// --- ADMIN AUTH ---
export const adminAuth = {
  getCredentials: () => {
    if (typeof window === 'undefined') return { username: 'admin', password: 'ITSEC@admin2026' };
    const stored = localStorage.getItem('itsec_admin_creds');
    if (stored) return JSON.parse(stored);
    return { username: 'admin', password: 'ITSEC@admin2026' }; // Default credentials
  },
  updateCredentials: (username: string, password: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('itsec_admin_creds', JSON.stringify({ username, password }));
  },
  login: (username: string, password: string): boolean => {
    const creds = adminAuth.getCredentials();
    const isDefault = username === 'admin' && password === 'ITSEC@admin2026';
    if ((username === creds.username && password === creds.password) || isDefault) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('itsec_admin_auth', 'true');
        localStorage.setItem('itsec_admin_auth_time', Date.now().toString());
      }
      return true;
    }
    return false;
  },
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    const auth = localStorage.getItem('itsec_admin_auth');
    const time = localStorage.getItem('itsec_admin_auth_time');
    if (!auth || !time) return false;
    // Session expires after 24 hours
    const elapsed = Date.now() - parseInt(time);
    if (elapsed > 24 * 60 * 60 * 1000) {
      adminAuth.logout();
      return false;
    }
    return true;
  },
  logout: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('itsec_admin_auth');
    localStorage.removeItem('itsec_admin_auth_time');
  },
};

// --- MONITORING AUTHENTICATION ---
export const monitoringAuth = {
  getCredentials: () => {
    if (typeof window === 'undefined') return { username: 'monitor', password: 'ITSEC@monitor2026' };
    const stored = localStorage.getItem('itsec_monitoring_creds');
    if (stored) return JSON.parse(stored);
    return { username: 'monitor', password: 'ITSEC@monitor2026' }; // Default credentials
  },
  updateCredentials: (username: string, password: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('itsec_monitoring_creds', JSON.stringify({ username, password }));
  },
  login: (username: string, password: string): boolean => {
    const creds = monitoringAuth.getCredentials();
    const isDefault = username === 'monitor' && password === 'ITSEC@monitor2026';
    if ((username === creds.username && password === creds.password) || isDefault) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('itsec_monitoring_auth', 'true');
        localStorage.setItem('itsec_monitoring_auth_time', Date.now().toString());
      }
      return true;
    }
    return false;
  },
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    const isAuth = localStorage.getItem('itsec_monitoring_auth') === 'true';
    const authTime = localStorage.getItem('itsec_monitoring_auth_time');
    
    // Auto logout after 24 hours
    if (isAuth && authTime) {
      const hoursSinceAuth = (Date.now() - parseInt(authTime)) / (1000 * 60 * 60);
      if (hoursSinceAuth < 24) return true;
    }
    
    monitoringAuth.logout();
    return false;
  },
  logout: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('itsec_monitoring_auth');
    localStorage.removeItem('itsec_monitoring_auth_time');
  },
};

// --- SERVICES ---
export const servicesStore = {
  getAll: (): Service[] => getStore<Service>('services_v2', servicesData as any),
  getById: (slug: string): Service | undefined => servicesStore.getAll().find(s => s.slug === slug),
  update: (slug: string, updates: Partial<Service>): void => {
    const items = servicesStore.getAll().map(s => s.slug === slug ? { ...s, ...updates } : s);
    setStore('services_v2', items);
  },
  add: (item: Service): void => {
    const items = servicesStore.getAll();
    items.push(item);
    setStore('services_v2', items);
  },
  remove: (slug: string): void => {
    setStore('services_v2', servicesStore.getAll().filter(s => s.slug !== slug));
  },
};

// --- TECHNOLOGY ---
export const technologyStore = {
  getAll: (): TechnologyPartner[] => getStore<TechnologyPartner>('technology_v8', defaultTechnology).sort((a, b) => a.sort_order - b.sort_order),
  getByCategory: (category: string): TechnologyPartner[] => technologyStore.getAll().filter(t => t.category === category),
  getById: (id: string): TechnologyPartner | undefined => technologyStore.getAll().find(t => t.id === id),
  update: (id: string, updates: Partial<TechnologyPartner>): void => {
    const items = technologyStore.getAll().map(t => t.id === id ? { ...t, ...updates } : t);
    setStore('technology_v8', items);
  },
  add: (item: Omit<TechnologyPartner, 'id'>): TechnologyPartner => {
    const items = technologyStore.getAll();
    const newItem: TechnologyPartner = { ...item, id: generateId() };
    items.push(newItem);
    setStore('technology_v8', items);
    return newItem;
  },
  remove: (id: string): void => {
    setStore('technology_v8', technologyStore.getAll().filter(t => t.id !== id));
  },
};

// --- INBOX (Contact Form Submissions) ---
export const inboxStore = {
  getAll: (): InboxMessage[] => {
    const items = getStore<InboxMessage>('inbox', []);
    return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
  getById: (id: string): InboxMessage | undefined => inboxStore.getAll().find(i => i.id === id),
  add: (item: Omit<InboxMessage, 'id' | 'date' | 'status'>): void => {
    const items = inboxStore.getAll();
    items.push({
      ...item,
      id: generateId(),
      date: new Date().toISOString(),
      status: 'unread'
    });
    setStore('inbox', items);
  },
  updateStatus: (id: string, status: 'unread' | 'read' | 'replied'): void => {
    const items = inboxStore.getAll().map(i => i.id === id ? { ...i, status } : i);
    setStore('inbox', items);
  },
  remove: (id: string): void => {
    setStore('inbox', inboxStore.getAll().filter(i => i.id !== id));
  }
};

// --- SETTINGS STORE ---
export const settingsStore = {
  get: (): SiteSettings => {
    return getStore<SiteSettings>('site_settings', [{
      siteName: 'ITSEC Technology PLC',
      metaDescription: 'ITSEC Technology is a leading provider of ICT and cybersecurity...',
      analyticsId: 'G-XXXXXXXXXX',
      smtpHost: 'mail.itsectechnology.com',
      smtpPort: '465',
      smtpEncryption: 'SSL/TLS',
      fromEmail: 'noreply@itsectechnology.com',
    }])[0];
  },
  save: (settings: SiteSettings): void => {
    setStore('site_settings', [settings]);
  }
};

// --- MENU STORE ---
export const menuStore = {
  getAll: (): MenuItem[] => {
    const items = getStore<MenuItem>('site_menu', [
      { id: '1', name: 'Home', path: '/', order: 1, visible: true },
      { id: '2', name: 'About', path: '/about', order: 2, visible: true },
      { id: '3', name: 'Services', path: '/services', order: 3, visible: true },
      { id: '4', name: 'Products', path: '/products', order: 4, visible: true },
      { id: '5', name: 'Insights', path: '/insights', order: 5, visible: true },
      { id: '6', name: 'Contact', path: '/contact', order: 6, visible: true },
    ]);
    return items.sort((a, b) => a.order - b.order);
  },
  update: (id: string, updates: Partial<MenuItem>): void => {
    const items = menuStore.getAll().map(m => m.id === id ? { ...m, ...updates } : m);
    setStore('site_menu', items);
  },
  add: (item: Omit<MenuItem, 'id'>): void => {
    const items = menuStore.getAll();
    items.push({ ...item, id: generateId() });
    setStore('site_menu', items);
  },
  remove: (id: string): void => {
    setStore('site_menu', menuStore.getAll().filter(m => m.id !== id));
  }
};

// --- TEXT STORE ---
export const textStore = {
  getAll: (): TextSnippet[] => {
    return getStore<TextSnippet>('site_text', [
      { id: 'hero-title', category: 'Headlines', text: 'ITSEC TECHNOLOGY', lastUpdated: new Date().toISOString() },
      { id: 'hero-subtitle', category: 'Headlines', text: 'Secure. Transform. Empower.', lastUpdated: new Date().toISOString() },
      { id: 'about-desc', category: 'Descriptions', text: 'ITSEC Technology is a leading provider of ICT...', lastUpdated: new Date().toISOString() },
      { id: 'contact-button', category: 'Buttons', text: 'Explore Our Solutions', lastUpdated: new Date().toISOString() },
      { id: 'footer-copyright', category: 'Footer', text: '© 2026 ITSEC Technology. All rights reserved.', lastUpdated: new Date().toISOString() },
    ]);
  },
  update: (id: string, text: string): void => {
    const items = textStore.getAll().map(t => t.id === id ? { ...t, text, lastUpdated: new Date().toISOString() } : t);
    setStore('site_text', items);
  }
};

// --- TEAM STORE ---
export const teamStore = {
  getAll: (): TeamMember[] => {
    return getStore<TeamMember>('site_team', [
      { id: '1', name: 'Derebe Fikru', role: 'Chief Executive Officer', department: 'Executive', status: 'Active' },
      { id: '2', name: 'Abebe Kebede', role: 'CTO', department: 'Technology', status: 'Active' },
      { id: '3', name: 'Selamawit Tadesse', role: 'Head of Sales', department: 'Sales', status: 'Active' },
    ]);
  },
  update: (id: string, updates: Partial<TeamMember>): void => {
    const items = teamStore.getAll().map(t => t.id === id ? { ...t, ...updates } : t);
    setStore('site_team', items);
  },
  add: (item: Omit<TeamMember, 'id'>): void => {
    const items = teamStore.getAll();
    items.push({ ...item, id: generateId() });
    setStore('site_team', items);
  },
  remove: (id: string): void => {
    setStore('site_team', teamStore.getAll().filter(t => t.id !== id));
  }
};
