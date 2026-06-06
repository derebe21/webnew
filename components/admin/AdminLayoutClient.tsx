'use client';

import { useState, useEffect } from 'react';
import { adminAuth } from '@/lib/data-store';
import { AdminLogin } from '@/components/admin/AdminLogin';
import { LayoutDashboard, Newspaper, Info, ShieldCheck, Cpu, Phone, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('news');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsAuthenticated(adminAuth.isAuthenticated());
  }, []);

  const handleLogout = () => {
    adminAuth.logout();
    setIsAuthenticated(false);
  };

  if (!mounted) return null; // Prevent SSR errors

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  const menuItems = [
    { id: 'news', label: 'News Manager', icon: Newspaper },
    { id: 'about', label: 'About Section', icon: Info },
    { id: 'services', label: 'Services Manager', icon: ShieldCheck },
    { id: 'technology', label: 'Technology Partners', icon: Cpu },
    { id: 'contact', label: 'Contact Info', icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-blue-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="font-black tracking-widest uppercase">ITSEC Portal</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-blue-900 text-white shadow-xl z-40 flex flex-col md:sticky md:top-0 md:h-screen transition-all`}>
        <div className="p-6 hidden md:block">
          <h1 className="text-xl font-black tracking-widest uppercase mb-1">ITSEC Portal</h1>
          <p className="text-blue-300 text-xs font-bold uppercase tracking-wider">Content Manager</p>
        </div>
        
        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      if (window.innerWidth < 768) setIsSidebarOpen(false);
                      // Custom event to tell the page which tab to show
                      window.dispatchEvent(new CustomEvent('adminTabChange', { detail: item.id }));
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-blue-800">
          <Button 
            variant="ghost" 
            className="w-full flex items-center justify-start gap-3 text-blue-200 hover:text-white hover:bg-red-500/20"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-x-hidden min-h-[calc(100vh-64px)] md:min-h-screen relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 z-0 bg-[url('/images/data-center-main.jpg')] opacity-[0.02] bg-cover bg-center pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
