'use client';

import { useState, useEffect } from 'react';
import { contactStore, ContactInfo } from '@/lib/data-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

export function ContactManager() {
  const [items, setItems] = useState<ContactInfo[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<ContactInfo>>({});
  const { toast } = useToast();

  useEffect(() => { loadItems(); }, []);
  const loadItems = () => setItems(contactStore.getAll());

  const handleAdd = () => {
    setCurrentItem({
      key: 'email', // default
      label: 'Email',
      value: '',
      href: ''
    });
    setIsEditing(true);
  };

  const handleEdit = (item: ContactInfo) => {
    setCurrentItem({ ...item });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this contact info?')) {
      contactStore.remove(id);
      loadItems();
      toast({ title: 'Success', description: 'Contact info removed' });
    }
  };

  const handleSave = () => {
    if (!currentItem.value || !currentItem.key) {
      toast({ title: 'Error', description: 'Type and Value are required', variant: 'destructive' });
      return;
    }

    if (currentItem.id) {
      contactStore.update(currentItem.id, currentItem);
      toast({ title: 'Success', description: 'Contact info updated' });
    } else {
      contactStore.add(currentItem as Omit<ContactInfo, 'id'>);
      toast({ title: 'Success', description: 'Contact info added' });
    }
    setIsEditing(false);
    loadItems();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Contact Information</h2>
          <p className="text-slate-500">Manage global contact details</p>
        </div>
        <Button onClick={handleAdd} className="bg-blue-600 text-white font-bold"><Plus className="w-4 h-4 mr-2" /> Add Contact</Button>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <Card key={item.id} className="p-4 flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">{item.label}</p>
              <p className="text-lg font-medium">{item.value}</p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" onClick={() => handleEdit(item)}><Pencil className="w-4 h-4" /></Button>
                <Button variant="outline" className="text-red-500" onClick={() => handleDelete(item.id)}><Trash2 className="w-4 h-4" /></Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader><DialogTitle>{currentItem.id ? 'Edit' : 'Add'} Contact Info</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Contact Type</label>
                <select 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={currentItem.key || 'email'}
                    onChange={(e) => {
                        const key = e.target.value;
                        const label = key === 'email' ? 'Email' : key === 'phone' ? 'Phone' : 'Address';
                        setCurrentItem({...currentItem, key, label});
                    }}
                >
                    <option value="email">Email</option>
                    <option value="phone">Phone / WhatsApp</option>
                    <option value="address">Address</option>
                </select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Value (Text shown to user)</label>
                <Input value={currentItem.value || ''} onChange={e => setCurrentItem({...currentItem, value: e.target.value})} placeholder="info@itsectechnology.com" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Link (href) - Optional</label>
                <Input value={currentItem.href || ''} onChange={e => setCurrentItem({...currentItem, href: e.target.value})} placeholder="mailto:... or tel:..." />
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
