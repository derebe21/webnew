'use client';

import { InboxManager } from '@/components/admin/InboxManager';
import { ActivityDashboard } from '@/components/monitoring/ActivityDashboard';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MonitoringPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div>
            <h1 className="text-xl font-black tracking-widest uppercase text-slate-900">ITSEC/Monitoring</h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email & Contact Monitoring</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" asChild className="text-blue-600 border-blue-200 hover:bg-blue-50">
                <a href="/" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View All Website
                </a>
            </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 w-full max-w-6xl mx-auto">
        <ActivityDashboard />
        <InboxManager />
      </main>
    </div>
  );
}
