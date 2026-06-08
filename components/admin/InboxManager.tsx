'use client';

import { useState, useEffect } from 'react';
import { inboxStore, InboxMessage } from '@/lib/data-store';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Eye, Trash2, Mail, CheckCircle2, Reply, Send, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

export function InboxManager() {
  const [messages, setMessages] = useState<InboxMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<InboxMessage | null>(null);
  
  // Compose State
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [composeData, setComposeData] = useState({ to: '', subject: '', message: '' });
  
  const { toast } = useToast();

  useEffect(() => { loadMessages(); }, []);
  const loadMessages = () => setMessages(inboxStore.getAll());

  const handleView = (msg: InboxMessage) => {
    setSelectedMessage(msg);
    if (msg.status === 'unread') {
      inboxStore.updateStatus(msg.id, 'read');
      loadMessages();
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this message permanently?')) {
      inboxStore.remove(id);
      loadMessages();
      toast({ title: 'Success', description: 'Message deleted' });
      setSelectedMessage(null);
    }
  };

  const handleMarkReplied = (id: string) => {
    inboxStore.updateStatus(id, 'replied');
    loadMessages();
    setSelectedMessage(null);
    toast({ title: 'Success', description: 'Message marked as replied' });
  };

  const handleSendCompose = () => {
    if (!composeData.to || !composeData.message) {
      toast({ title: 'Error', description: 'Recipient and message are required', variant: 'destructive' });
      return;
    }
    
    // Log outbound email to store
    inboxStore.add({
      name: 'ITSEC Admin (Sent)',
      email: composeData.to,
      department: composeData.subject || 'Outbound',
      urgency: 'Medium',
      message: composeData.message,
      details: {
        direction: 'Outbound / Sent Email',
        subject: composeData.subject
      }
    });

    toast({ title: 'Logged', description: 'Outgoing email log recorded successfully' });
    setIsComposeOpen(false);
    setComposeData({ to: '', subject: '', message: '' });
    loadMessages();
  };

  const getStatusColor = (status: string, direction?: string) => {
    if (direction === 'Outbound / Sent Email') return 'bg-indigo-100 text-indigo-900 border-indigo-300';
    switch (status) {
      case 'unread': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'replied': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Inbox & Sent Mail</h2>
          <p className="text-slate-500">Monitor all received messages and log sent emails</p>
        </div>
        <Button onClick={() => setIsComposeOpen(true)} className="bg-blue-600 text-white font-bold">
          <Plus className="w-4 h-4 mr-2" /> Log Sent Email
        </Button>
      </div>

      <div className="grid gap-4">
        {messages.length === 0 ? (
          <Card className="p-12 text-center text-slate-500">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>No messages received or sent yet.</p>
          </Card>
        ) : (
          messages.map((msg) => {
            const isOutbound = msg.details?.direction === 'Outbound / Sent Email';
            return (
              <Card key={msg.id} className={`p-4 flex flex-col md:flex-row gap-4 items-center transition-colors ${msg.status === 'unread' && !isOutbound ? 'bg-blue-50/50 border-blue-100' : ''}`}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${getStatusColor(msg.status, msg.details?.direction)}`}>
                      {isOutbound ? 'Sent' : msg.status}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{msg.department}</span>
                    <span className="text-[10px] text-slate-400">• {new Date(msg.date).toLocaleString()}</span>
                  </div>
                  <h3 className={`text-lg truncate ${msg.status === 'unread' && !isOutbound ? 'font-black text-slate-900' : 'font-semibold text-slate-700'}`}>
                    {isOutbound ? `To: ${msg.email}` : `${msg.name} (${msg.email})`}
                  </h3>
                  <p className="text-sm text-slate-500 truncate">{msg.message}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant={msg.status === 'unread' && !isOutbound ? 'default' : 'outline'} size="sm" onClick={() => handleView(msg)}>
                    <Eye className="w-4 h-4 mr-2" /> View
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500" onClick={() => handleDelete(msg.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* View Message Dialog */}
      <Dialog open={!!selectedMessage} onOpenChange={(open) => !open && setSelectedMessage(null)}>
        {selectedMessage && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                Message Details
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${getStatusColor(selectedMessage.status, selectedMessage.details?.direction)}`}>
                  {selectedMessage.details?.direction === 'Outbound / Sent Email' ? 'Sent' : selectedMessage.status}
                </span>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl">
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase mb-1">Name / Entity</p>
                  <p className="font-medium">{selectedMessage.name}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase mb-1">Email Address</p>
                  <p className="font-medium"><a href={`mailto:${selectedMessage.email}`} className="text-blue-600 hover:underline">{selectedMessage.email}</a></p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase mb-1">Phone / WhatsApp</p>
                  <p className="font-medium">{selectedMessage.phone || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase mb-1">Date Logged</p>
                  <p className="font-medium">{new Date(selectedMessage.date).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase mb-1">Department / Subject</p>
                  <p className="font-medium">{selectedMessage.department}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase mb-1">Urgency</p>
                  <p className="font-medium">{selectedMessage.urgency}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 border-b pb-2">Full Message & Details</h4>
                <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-700 whitespace-pre-wrap">
                  <p className="mb-4">{selectedMessage.message}</p>
                  {Object.entries(selectedMessage.details || {}).map(([key, value]) => {
                    if (!value || key === 'tab' || key === 'direction') return null;
                    return (
                      <div key={key} className="mb-2 text-xs text-slate-500">
                        <span className="font-bold text-slate-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                        {value as string}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t">
                {selectedMessage.status !== 'replied' && selectedMessage.details?.direction !== 'Outbound / Sent Email' && (
                  <Button onClick={() => handleMarkReplied(selectedMessage.id)} className="bg-green-600 hover:bg-green-700 text-white">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Mark as Replied
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <a href={`mailto:${selectedMessage.email}?subject=RE: ITSEC Portal - ${selectedMessage.department} Inquiry`}>
                    <Reply className="w-4 h-4 mr-2" /> {selectedMessage.details?.direction === 'Outbound / Sent Email' ? 'Send Follow-up' : 'Reply via Email'}
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Compose Sent Email Dialog */}
      <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Log Outbound Email</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-slate-500">
              Manually create a record of an email you sent out to keep all communications logged here.
            </p>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">To (Email)</label>
                <Input value={composeData.to} onChange={e => setComposeData({...composeData, to: e.target.value})} placeholder="client@example.com" />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <Input value={composeData.subject} onChange={e => setComposeData({...composeData, subject: e.target.value})} placeholder="Proposal follow-up" />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message Content</label>
                <Textarea value={composeData.message} onChange={e => setComposeData({...composeData, message: e.target.value})} rows={5} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsComposeOpen(false)}>Cancel</Button>
            <Button onClick={handleSendCompose} className="bg-blue-600 text-white"><Send className="w-4 h-4 mr-2" /> Save Record</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
