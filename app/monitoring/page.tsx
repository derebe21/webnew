'use client';

import { useState, useEffect } from 'react';
import { monitoringAuth } from '@/lib/data-store';
import { InboxManager } from '@/components/admin/InboxManager';
import { ActivityDashboard } from '@/components/monitoring/ActivityDashboard';
import { LogOut, Lock, LogIn, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function MonitoringPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsAuthenticated(monitoringAuth.isAuthenticated());
    setIsChecking(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      if (monitoringAuth.login(username, password)) {
        setIsAuthenticated(true);
        toast({ title: 'Login Successful', description: 'Welcome to the Monitoring Portal' });
      } else {
        toast({ title: 'Authentication Failed', description: 'Invalid username or password', variant: 'destructive' });
      }
      setIsLoading(false);
    }, 500);
  };

  const handleLogout = () => {
    monitoringAuth.logout();
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  if (isChecking) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="p-8 text-center bg-slate-900 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-80"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-black text-white tracking-widest uppercase mb-2">ITSEC Monitoring</h1>
              <p className="text-slate-400 text-sm">Secure Access Required</p>
            </div>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Username</label>
                <Input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required className="h-12 bg-slate-50 border-slate-200" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Password</label>
                <Input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-12 bg-slate-50 border-slate-200" />
              </div>
              
              <Button type="submit" className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-bold tracking-wider rounded-xl transition-all" disabled={isLoading}>
                {isLoading ? 'Authenticating...' : <span className="flex items-center">Login to Dashboard <LogIn className="w-4 h-4 ml-2" /></span>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div>
            <h1 className="text-xl font-black tracking-widest uppercase text-slate-900">ITSEC/Monitoring</h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email & Contact Monitoring</p>
        </div>
        <div className="flex items-center gap-4">
            <Button variant="outline" asChild className="text-blue-600 border-blue-200 hover:bg-blue-50">
                <a href="/" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View All Website
                </a>
            </Button>
            <div className="h-8 w-px bg-slate-200"></div>
            <Button variant="ghost" onClick={handleLogout} className="text-slate-500 hover:text-red-600 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-2" /> Logout
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
