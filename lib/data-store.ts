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

// ============ DEFAULT SEED DATA ============

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: 'ITSEC Technology Expands Data Center Services in East Africa',
    summary: 'We are proud to announce the expansion of our data center construction and management services across the East African region, bringing world-class infrastructure closer to businesses.',
    body: '',
    image_url: '/images/data-center-main.jpg',
    category: 'Company News',
    published_at: '2026-05-20T00:00:00Z',
    created_at: '2026-05-20T00:00:00Z',
  },
  {
    id: '2',
    title: 'New Cybersecurity Partnership with Palo Alto Networks',
    summary: 'ITSEC Technology has partnered with Palo Alto Networks to deliver next-generation firewall and threat prevention solutions to enterprise clients in Ethiopia.',
    body: '',
    image_url: '/images/custom-cybersecurity.png',
    category: 'Partnership',
    published_at: '2026-05-15T00:00:00Z',
    created_at: '2026-05-15T00:00:00Z',
  },
  {
    id: '3',
    title: 'Unified Communications Solutions for Modern Enterprises',
    summary: 'Our latest unified communications deployment integrates voice, video, and messaging platforms for seamless collaboration across distributed teams.',
    body: '',
    image_url: '/images/unified-communications-new.png',
    category: 'Solutions',
    published_at: '2026-05-10T00:00:00Z',
    created_at: '2026-05-10T00:00:00Z',
  },
  {
    id: '4',
    title: 'Smart Building Automation Deployed at Leading Financial Institution',
    summary: 'ITSEC Technology successfully implemented an integrated smart building automation system including IoT sensors, energy management, and intelligent security for a premier banking headquarters.',
    body: '',
    image_url: '/images/smart-systems-final.png',
    category: 'Case Study',
    published_at: '2026-05-05T00:00:00Z',
    created_at: '2026-05-05T00:00:00Z',
  },
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
  // Cyber Security & IT Security
  { id: 't1', name: 'Cisco', category: 'cyberSecurity', color: '1BA0D7', logo: 'cisco', url: 'https://www.cisco.com', description: 'Network security, firewalls, intrusion prevention, and secure access solutions.', sort_order: 1 },
  { id: 't2', name: 'Palo Alto Networks', category: 'cyberSecurity', color: 'FA582D', logo: 'paloaltonetworks', url: 'https://www.paloaltonetworks.com', description: 'Next-generation firewalls, advanced threat prevention, and cloud security.', sort_order: 2 },
  { id: 't3', name: 'Fortinet', category: 'cyberSecurity', color: 'EE3124', logo: 'fortinet', url: 'https://www.fortinet.com', description: 'High-performance firewalls, secure SD-WAN, and integrated security platforms.', sort_order: 3 },
  { id: 't4', name: 'Check Point', category: 'cyberSecurity', color: 'EC1561', logo: 'checkpoint', url: 'https://www.checkpoint.com', description: 'Enterprise firewall, threat intelligence, and advanced cyber defense.', sort_order: 4 },
  { id: 't5', name: 'Sophos', category: 'cyberSecurity', color: '0078D4', logo: 'sophos', url: 'https://www.sophos.com', description: 'Endpoint protection, firewall security, and centralized security management.', sort_order: 5 },
  { id: 't6', name: 'Trend Micro', category: 'cyberSecurity', color: 'D22630', logo: 'trendmicro', url: 'https://www.trendmicro.com', description: 'Endpoint, server, and cloud workload security with advanced malware protection.', sort_order: 6 },
  { id: 't7', name: 'CrowdStrike', category: 'cyberSecurity', color: 'FF0000', logo: 'crowdstrike', url: 'https://www.crowdstrike.com', description: 'AI-powered endpoint detection and response (EDR) and threat intelligence.', sort_order: 7 },
  { id: 't8', name: 'Darktrace', category: 'cyberSecurity', color: '000000', logo: 'darktrace', url: 'https://www.darktrace.com', description: 'AI-driven threat detection, network visibility, and autonomous response.', sort_order: 8 },
  { id: 't9', name: 'Imperva', category: 'cyberSecurity', color: '0055A5', logo: 'imperva', url: 'https://www.imperva.com', description: 'Web application firewall (WAF), database security, and DDoS protection.', sort_order: 9 },

  // Digital Infrastructure
  { id: 't10', name: 'Cisco', category: 'digitalInfrastructure', color: '1BA0D7', logo: 'cisco', url: 'https://www.cisco.com', description: 'Enterprise networking, routing, switching, and wireless solutions.', sort_order: 1 },
  { id: 't11', name: 'Huawei', category: 'digitalInfrastructure', color: 'FF0000', logo: 'huawei', url: 'https://e.huawei.com', description: 'Next-generation carrier and enterprise networking infrastructure.', sort_order: 2 },
  { id: 't12', name: 'HPE Aruba', category: 'digitalInfrastructure', color: 'FF8300', logo: 'hpe', url: 'https://www.arubanetworks.com', description: 'AI-powered network solutions for edge-to-cloud connectivity.', sort_order: 3 },
  { id: 't13', name: 'Juniper Networks', category: 'digitalInfrastructure', color: '81BC00', logo: 'junipernetworks', url: 'https://www.juniper.net', description: 'AI-driven networking, routing, and switching for modern enterprises.', sort_order: 4 },
  { id: 't14', name: 'Ericsson', category: 'digitalInfrastructure', color: '0082D1', logo: 'ericsson', url: 'https://www.ericsson.com', description: 'Advanced 5G and mobile network infrastructure solutions.', sort_order: 5 },
  { id: 't15', name: 'F5 Networks', category: 'digitalInfrastructure', color: 'E9292D', logo: 'f5', url: 'https://www.f5.com', description: 'Application delivery, security, and multi-cloud networking.', sort_order: 6 },

  // Cloud & Virtualization
  { id: 't16', name: 'VMware', category: 'cloudVirtualization', color: '607078', logo: 'vmware', url: 'https://www.vmware.com', description: 'Industry-leading multi-cloud services and virtualization platforms.', sort_order: 1 },
  { id: 't17', name: 'Proxmox', category: 'cloudVirtualization', color: 'E57000', logo: 'proxmox', url: 'https://www.proxmox.com', description: 'Open-source server virtualization and management platform.', sort_order: 2 },
  { id: 't18', name: 'Microsoft Hyper-V', category: 'cloudVirtualization', color: '00A4EF', logo: 'microsoft', url: 'https://www.microsoft.com', description: 'Native Windows-based hardware virtualization and cloud infrastructure.', sort_order: 3 },
  { id: 't19', name: 'Oracle Cloud', category: 'cloudVirtualization', color: 'F80000', logo: 'oracle', url: 'https://www.oracle.com/cloud/', description: 'Integrated suite of cloud applications and platform services.', sort_order: 4 },
  { id: 't20', name: 'IBM Cloud', category: 'cloudVirtualization', color: '052FAD', logo: 'ibm', url: 'https://www.ibm.com/cloud', description: 'Hybrid cloud and AI-ready enterprise infrastructure.', sort_order: 5 },
  { id: 't21', name: 'Red Hat', category: 'cloudVirtualization', color: 'EE0000', logo: 'redhat', url: 'https://www.redhat.com', description: 'Enterprise-grade open-source virtualization and cloud solutions.', sort_order: 6 },

  // Data Center Solutions
  { id: 't22', name: 'Dell', category: 'dataCenter', color: '007DB8', logo: 'dell', url: 'https://www.dell.com', description: 'High-performance servers, storage, and data center infrastructure.', sort_order: 1 },
  { id: 't23', name: 'HPE', category: 'dataCenter', color: '01A982', logo: 'hpe', url: 'https://www.hpe.com', description: 'Scalable compute, storage, and networking for modern data centers.', sort_order: 2 },
  { id: 't24', name: 'Lenovo', category: 'dataCenter', color: 'E2231A', logo: 'lenovo', url: 'https://www.lenovo.com', description: 'Reliable enterprise servers and software-defined storage solutions.', sort_order: 3 },
  { id: 't25', name: 'Huawei', category: 'dataCenter', color: 'FF0000', logo: 'huawei', url: 'https://e.huawei.com', description: 'Efficient and intelligent data center compute and storage systems.', sort_order: 4 },
  { id: 't26', name: 'IBM', category: 'dataCenter', color: '052FAD', logo: 'ibm', url: 'https://www.ibm.com', description: 'Robust enterprise mainframes and modernized data center storage.', sort_order: 5 },
  { id: 't27', name: 'NetApp', category: 'dataCenter', color: '0067C5', logo: 'netapp', url: 'https://www.netapp.com', description: 'Advanced data management and cloud-integrated storage solutions.', sort_order: 6 },
  { id: 't28', name: 'Synology', category: 'dataCenter', color: '121212', logo: 'synology', url: 'https://www.synology.com', description: 'Reliable network-attached storage (NAS) and data backup solutions.', sort_order: 7 },
  { id: 't29', name: 'Supermicro', category: 'dataCenter', color: '000000', logo: 'supermicro', url: 'https://www.supermicro.com', description: 'High-efficiency, green computing server and storage solutions.', sort_order: 8 },
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
  getAll: (): NewsItem[] => getStore<NewsItem>('news', defaultNews),
  getById: (id: string): NewsItem | undefined => newsStore.getAll().find(n => n.id === id),
  add: (item: Omit<NewsItem, 'id' | 'created_at'>): NewsItem => {
    const items = newsStore.getAll();
    const newItem: NewsItem = { ...item, id: generateId(), created_at: new Date().toISOString() };
    items.unshift(newItem);
    setStore('news', items);
    return newItem;
  },
  update: (id: string, updates: Partial<NewsItem>): void => {
    const items = newsStore.getAll().map(n => n.id === id ? { ...n, ...updates } : n);
    setStore('news', items);
  },
  remove: (id: string): void => {
    setStore('news', newsStore.getAll().filter(n => n.id !== id));
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
    if (username === creds.username && password === creds.password) {
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
    if (username === creds.username && password === creds.password) {
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
  getAll: (): Service[] => getStore<Service>('services', servicesData as any),
  getById: (slug: string): Service | undefined => servicesStore.getAll().find(s => s.slug === slug),
  update: (slug: string, updates: Partial<Service>): void => {
    const items = servicesStore.getAll().map(s => s.slug === slug ? { ...s, ...updates } : s);
    setStore('services', items);
  },
  add: (item: Service): void => {
    const items = servicesStore.getAll();
    items.push(item);
    setStore('services', items);
  },
  remove: (slug: string): void => {
    setStore('services', servicesStore.getAll().filter(s => s.slug !== slug));
  },
};

// --- TECHNOLOGY ---
export const technologyStore = {
  getAll: (): TechnologyPartner[] => getStore<TechnologyPartner>('technology_v2', defaultTechnology).sort((a, b) => a.sort_order - b.sort_order),
  getByCategory: (category: string): TechnologyPartner[] => technologyStore.getAll().filter(t => t.category === category),
  getById: (id: string): TechnologyPartner | undefined => technologyStore.getAll().find(t => t.id === id),
  update: (id: string, updates: Partial<TechnologyPartner>): void => {
    const items = technologyStore.getAll().map(t => t.id === id ? { ...t, ...updates } : t);
    setStore('technology_v2', items);
  },
  add: (item: Omit<TechnologyPartner, 'id'>): TechnologyPartner => {
    const items = technologyStore.getAll();
    const newItem: TechnologyPartner = { ...item, id: generateId() };
    items.push(newItem);
    setStore('technology_v2', items);
    return newItem;
  },
  remove: (id: string): void => {
    setStore('technology_v2', technologyStore.getAll().filter(t => t.id !== id));
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



