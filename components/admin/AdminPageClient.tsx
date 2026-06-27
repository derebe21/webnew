'use client';

import { useState, useEffect } from 'react';
import { NewsManager } from '@/components/admin/NewsManager';
import { AboutManager } from '@/components/admin/AboutManager';
import { ServicesManager } from '@/components/admin/ServicesManager';
import { TechnologyManager } from '@/components/admin/TechnologyManager';
import { ContactManager } from '@/components/admin/ContactManager';

import { DashboardManager } from '@/components/admin/DashboardManager';
import { PagesManager } from '@/components/admin/PagesManager';
import { TextManager } from '@/components/admin/TextManager';
import { ImageManager } from '@/components/admin/ImageManager';
import { MediaLibraryManager } from '@/components/admin/MediaLibraryManager';
import { ProductsManager } from '@/components/admin/ProductsManager';
import { TeamManager } from '@/components/admin/TeamManager';
import { MenuManager } from '@/components/admin/MenuManager';
import { UsersManager } from '@/components/admin/UsersManager';
import { SettingsManager } from '@/components/admin/SettingsManager';
import { SecurityManager } from '@/components/admin/SecurityManager';
import { LogsManager } from '@/components/admin/LogsManager';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const handleTabChange = (e: any) => setActiveTab(e.detail);
    window.addEventListener('adminTabChange', handleTabChange);
    return () => window.removeEventListener('adminTabChange', handleTabChange);
  }, []);

  return (
    <div className="p-6 md:p-10 w-full max-w-6xl mx-auto">
      {activeTab === 'dashboard' && <DashboardManager />}
      {activeTab === 'pages' && <PagesManager />}
      {activeTab === 'text' && <TextManager />}
      {activeTab === 'images' && <ImageManager />}
      {activeTab === 'media' && <MediaLibraryManager />}
      {activeTab === 'services' && <ServicesManager />}
      {activeTab === 'products' && <ProductsManager />}
      {activeTab === 'news' && <NewsManager />}
      {activeTab === 'team' && <TeamManager />}
      {activeTab === 'partners' && <TechnologyManager />}
      {activeTab === 'contact' && <ContactManager />}
      {activeTab === 'menu' && <MenuManager />}
      {activeTab === 'users' && <UsersManager />}
      {activeTab === 'settings' && <SettingsManager />}
      {activeTab === 'security' && <SecurityManager />}
      {activeTab === 'logs' && <LogsManager />}
    </div>
  );
}
