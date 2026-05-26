'use client';

import { useState, useEffect } from 'react';
import { NewsManager } from '@/components/admin/NewsManager';
import { AboutManager } from '@/components/admin/AboutManager';
import { ServicesManager } from '@/components/admin/ServicesManager';
import { TechnologyManager } from '@/components/admin/TechnologyManager';
import { ContactManager } from '@/components/admin/ContactManager';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('news');

  useEffect(() => {
    const handleTabChange = (e: any) => setActiveTab(e.detail);
    window.addEventListener('adminTabChange', handleTabChange);
    return () => window.removeEventListener('adminTabChange', handleTabChange);
  }, []);

  return (
    <div className="p-6 md:p-10 w-full max-w-6xl mx-auto">
      {activeTab === 'news' && <NewsManager />}
      {activeTab === 'about' && <AboutManager />}
      {activeTab === 'services' && <ServicesManager />}
      {activeTab === 'technology' && <TechnologyManager />}
      {activeTab === 'contact' && <ContactManager />}
    </div>
  );
}
