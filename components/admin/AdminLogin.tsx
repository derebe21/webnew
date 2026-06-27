'use client';

import { useState, useCallback } from 'react';
import { adminAuth } from '@/lib/data-store';
import { Lock, LogIn, Mail, Phone, ShieldCheck, ArrowRight, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  // Forgot Password State
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [resetStep, setResetStep] = useState<1 | 2 | 3 | 4>(1);
  const [resetMethod, setResetMethod] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isResetting, setIsResetting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated network delay
    setTimeout(() => {
      const success = adminAuth.login(username, password);
      
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

  const handleSendCode = () => {
    if (!resetMethod) return;
    setIsResetting(true);
    setTimeout(() => {
      setIsResetting(false);
      setResetStep(2);
      toast({ title: 'Security Code Sent', description: `A 6-digit code has been sent to ${resetMethod}` });
    }, 1000);
  };

  const handleVerifyCode = () => {
    if (resetCode.length < 4) {
      toast({ title: 'Invalid Code', description: 'Please enter a valid security code', variant: 'destructive' });
      return;
    }
    setIsResetting(true);
    setTimeout(() => {
      setIsResetting(false);
      setResetStep(3);
    }, 1000);
  };

  const handleUpdatePassword = () => {
    if (newPassword.length < 6) {
      toast({ title: 'Password too short', description: 'Password must be at least 6 characters', variant: 'destructive' });
      return;
    }
    setIsResetting(true);
    setTimeout(() => {
      adminAuth.updateCredentials('admin', newPassword);
      setIsResetting(false);
      setResetStep(4);
      setPassword(''); // Clear login form password
    }, 1000);
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
              <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Admin Username</label>
              <Input 
                type="text" 
                placeholder="Enter username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="h-12 bg-slate-50 border-slate-200 text-slate-900 dark:text-slate-900"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Admin Password</label>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setResetStep(1);
                    setResetMethod('');
                    setResetCode('');
                    setNewPassword('');
                    setIsResetOpen(true);
                  }}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Enter password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 bg-slate-50 border-slate-200 text-slate-900 dark:text-slate-900 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
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

      <Dialog open={isResetOpen} onOpenChange={setIsResetOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Reset Admin Password</DialogTitle>
            <DialogDescription>
              {resetStep === 1 && "Choose where we should send your security code."}
              {resetStep === 2 && "Enter the security code you received."}
              {resetStep === 3 && "Create a new strong password."}
              {resetStep === 4 && "Password updated successfully!"}
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            {resetStep === 1 && (
              <div className="space-y-3">
                <button 
                  onClick={() => setResetMethod('0911407439')}
                  className={`w-full flex items-center p-4 border rounded-xl transition-all ${resetMethod === '0911407439' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-200 hover:border-blue-400'}`}
                >
                  <Phone className="w-5 h-5 text-slate-500 mr-4" />
                  <div className="text-left">
                    <div className="font-bold text-sm">Send SMS</div>
                    <div className="text-xs text-slate-500">*** *** 7439</div>
                  </div>
                </button>
                <button 
                  onClick={() => setResetMethod('admin@itsectechnology.com')}
                  className={`w-full flex items-center p-4 border rounded-xl transition-all ${resetMethod === 'admin@itsectechnology.com' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-200 hover:border-blue-400'}`}
                >
                  <Mail className="w-5 h-5 text-slate-500 mr-4" />
                  <div className="text-left">
                    <div className="font-bold text-sm">Send Email</div>
                    <div className="text-xs text-slate-500">adm***@itsectechnology.com</div>
                  </div>
                </button>
                <button 
                  onClick={() => setResetMethod('derebe@itsectechnology.com')}
                  className={`w-full flex items-center p-4 border rounded-xl transition-all ${resetMethod === 'derebe@itsectechnology.com' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-200 hover:border-blue-400'}`}
                >
                  <Mail className="w-5 h-5 text-slate-500 mr-4" />
                  <div className="text-left">
                    <div className="font-bold text-sm">Send Email</div>
                    <div className="text-xs text-slate-500">der***@itsectechnology.com</div>
                  </div>
                </button>
              </div>
            )}

            {resetStep === 2 && (
              <div className="space-y-4">
                <div className="flex justify-center mb-4"><ShieldCheck className="w-12 h-12 text-blue-500" /></div>
                <div className="text-center text-sm mb-4">We sent a code to <span className="font-bold">{resetMethod}</span></div>
                <Input 
                  type="text" 
                  placeholder="Enter 6-digit code" 
                  value={resetCode}
                  onChange={(e) => setResetCode(e.target.value)}
                  className="text-center text-xl tracking-widest h-14"
                  maxLength={6}
                />
              </div>
            )}

            {resetStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-500">New Password</label>
                  <Input 
                    type="password" 
                    placeholder="Enter new password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </div>
            )}

            {resetStep === 4 && (
              <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                <div>
                  <h3 className="font-bold text-xl">Success!</h3>
                  <p className="text-sm text-slate-500 mt-2">Your admin password has been successfully updated. You can now login with your new credentials.</p>
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            {resetStep === 1 && (
              <Button onClick={handleSendCode} disabled={!resetMethod || isResetting} className="w-full">
                {isResetting ? 'Sending...' : 'Send Security Code'} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
            {resetStep === 2 && (
              <Button onClick={handleVerifyCode} disabled={!resetCode || isResetting} className="w-full">
                {isResetting ? 'Verifying...' : 'Verify Code'} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
            {resetStep === 3 && (
              <Button onClick={handleUpdatePassword} disabled={!newPassword || isResetting} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                {isResetting ? 'Updating...' : 'Save New Password'}
              </Button>
            )}
            {resetStep === 4 && (
              <Button onClick={() => setIsResetOpen(false)} className="w-full">
                Return to Login
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
