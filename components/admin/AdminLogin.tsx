'use client';

import { useState } from 'react';
import { adminAuth } from '@/lib/data-store';
import { Lock, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated network delay
    setTimeout(() => {
      const success = adminAuth.login(password);
      
      if (success) {
        toast({
          title: 'Login successful',
          description: 'Welcome to the ITSEC Admin Portal',
        });
        onLogin();
      } else {
        toast({
          title: 'Authentication failed',
          description: 'Incorrect password. Please try again.',
          variant: 'destructive',
        });
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="p-8 text-center bg-blue-900 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-slate-900 opacity-80"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-widest uppercase mb-2">ITSEC Portal</h1>
            <p className="text-blue-200 text-sm">Secure Admin Area</p>
          </div>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Admin Password</label>
              <Input 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 bg-slate-50 border-slate-200"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider rounded-xl transition-all"
              disabled={isLoading}
            >
              {isLoading ? 'Authenticating...' : (
                <span className="flex items-center">
                  Login to Portal <LogIn className="w-4 h-4 ml-2" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
