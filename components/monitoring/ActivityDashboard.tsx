'use client';

import { useState, useEffect } from 'react';
import { servicesStore, technologyStore, inboxStore } from '@/lib/data-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Cpu, Mail, BellRing, Activity } from 'lucide-react';

export function ActivityDashboard() {
  const [stats, setStats] = useState({
    services: 0,
    technology: 0,
    totalEmails: 0,
    unreadEmails: 0,
    recentActivity: [] as any[]
  });

  useEffect(() => {
    // Load all data
    const services = servicesStore.getAll();
    const tech = technologyStore.getAll();
    const emails = inboxStore.getAll();

    const unread = emails.filter(e => e.status === 'unread');

    // Create a mock activity feed based on emails (since we only have timestamps on emails)
    const recent = emails.slice(0, 5).map(e => ({
      id: e.id,
      title: `New contact request from ${e.name}`,
      time: new Date(e.date).toLocaleString(),
      type: 'email'
    }));

    setStats({
      services: services.length,
      technology: tech.length,
      totalEmails: emails.length,
      unreadEmails: unread.length,
      recentActivity: recent
    });

  }, []);

  return (
    <div className="space-y-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">System Activity Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold text-slate-500 uppercase">Active Services</CardTitle>
            <ShieldCheck className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-slate-900">{stats.services}</div>
            <p className="text-xs text-slate-500 mt-1">Live on website</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold text-slate-500 uppercase">Tech Partners</CardTitle>
            <Cpu className="w-4 h-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-slate-900">{stats.technology}</div>
            <p className="text-xs text-slate-500 mt-1">Across all categories</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold text-slate-500 uppercase">Total Requests</CardTitle>
            <Mail className="w-4 h-4 text-indigo-800" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-slate-900">{stats.totalEmails}</div>
            <p className="text-xs text-slate-500 mt-1">Emails & contacts logged</p>
          </CardContent>
        </Card>

        <Card className={`border-slate-200 shadow-sm transition-shadow ${stats.unreadEmails > 0 ? 'bg-blue-50 border-blue-200' : 'bg-white'}`}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold text-slate-500 uppercase">Unread / Action Needed</CardTitle>
            <BellRing className={`w-4 h-4 ${stats.unreadEmails > 0 ? 'text-blue-600 animate-pulse' : 'text-slate-400'}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-black ${stats.unreadEmails > 0 ? 'text-blue-700' : 'text-slate-900'}`}>{stats.unreadEmails}</div>
            <p className="text-xs text-slate-500 mt-1">Awaiting reply</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
