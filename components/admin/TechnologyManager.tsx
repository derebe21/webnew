'use client';

import { useState, useEffect } from 'react';
import { technologyStore, TechnologyPartner } from '@/lib/data-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

export function TechnologyManager() {
  const [items, setItems] = useState<TechnologyPartner[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<TechnologyPartner>>({});
  const { toast } = useToast();

  useEffect(() => { loadItems(); }, []);
  const loadItems = () => setItems(technologyStore.getAll());

  const handleEdit = (item: TechnologyPartner) => {
    setCurrentItem({ ...item });
    setIsEditing(true);
  };

  const handleAdd = () => {
    setCurrentItem({
      name: '',
      description: '',
      category: 'cyberSecurity',
      logo: '',
      url: '',
      color: '1BA0D7',
      sort_order: 1
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this technology partner?')) {
      technologyStore.remove(id);
      loadItems();
      toast({ title: 'Success', description: 'Partner removed' });
    }
  };

  const handleSave = () => {
    if (!currentItem.name) {
      toast({ title: 'Error', description: 'Name is required', variant: 'destructive' });
      return;
    }
    if (currentItem.id) {
      technologyStore.update(currentItem.id, currentItem);
      toast({ title: 'Success', description: 'Partner updated' });
    } else {
      technologyStore.add(currentItem as Omit<TechnologyPartner, 'id'>);
      toast({ title: 'Success', description: 'Partner added' });
    }
    setIsEditing(false);
    loadItems();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Technology Partners</h2>
          <p className="text-slate-500">Manage partners displayed in the technology section</p>
        </div>
        <Button onClick={handleAdd} className="bg-blue-600 text-white font-bold"><Plus className="w-4 h-4 mr-2" /> Add Partner</Button>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <Card key={item.id} className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded">
                    <img 
                        src={item.logo.startsWith('/') ? item.logo : `https://cdn.simpleicons.org/${item.logo}/${item.color}`} 
                        alt={item.name} 
                        className="w-8 h-8 object-contain"
                    />
                </div>
                <div>
                <p className="font-bold">{item.name}</p>
                <div className="flex gap-2 text-xs">
                    <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{item.category}</span>
                    <span className="text-slate-500">{item.url}</span>
                </div>
                </div>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleEdit(item)}><Pencil className="w-4 h-4" /></Button>
                <Button variant="outline" size="sm" className="text-red-500" onClick={() => handleDelete(item.id)}><Trash2 className="w-4 h-4" /></Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader><DialogTitle>{currentItem.id ? 'Edit Partner' : 'Add Partner'}</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Name</label>
                    <Input value={currentItem.name || ''} onChange={e => setCurrentItem({...currentItem, name: e.target.value})} placeholder="e.g. Cisco" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Category</label>
                    <select 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={currentItem.category || 'cyberSecurity'}
                        onChange={(e) => setCurrentItem({...currentItem, category: e.target.value})}
                    >
                        <option value="cyberSecurity">Cyber Security</option>
                        <option value="digitalInfrastructure">Digital Infrastructure</option>
                        <option value="cloudVirtualization">Cloud & Virtualization</option>
                        <option value="dataCenter">Data Center</option>
                        <option value="integratedSecurity">Integrated Security</option>
                        <option value="unifiedCommunications">Unified Comms</option>
                    </select>
                </div>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Description</label>
                <Textarea value={currentItem.description || ''} onChange={e => setCurrentItem({...currentItem, description: e.target.value})} />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Website URL</label>
                <Input value={currentItem.url || ''} onChange={e => setCurrentItem({...currentItem, url: e.target.value})} placeholder="https://..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Logo (URL or SimpleIcon slug)</label>
                    <Input value={currentItem.logo || ''} onChange={e => setCurrentItem({...currentItem, logo: e.target.value})} placeholder="/images/... or cisco" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Hex Color (no #)</label>
                    <Input value={currentItem.color || ''} onChange={e => setCurrentItem({...currentItem, color: e.target.value})} placeholder="1BA0D7" />
                </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
