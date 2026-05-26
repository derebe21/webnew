'use client';

import { useState, useEffect } from 'react';
import { servicesStore } from '@/lib/data-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Service } from '@/lib/services-data';

export function ServicesManager() {
  const [items, setItems] = useState<Service[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<Service>>({});
  const { toast } = useToast();

  useEffect(() => { loadItems(); }, []);
  const loadItems = () => setItems(servicesStore.getAll());

  const handleAdd = () => {
    setCurrentItem({
      title: '',
      slug: '',
      description: '',
      long_description: '',
      logo_image: '',
      banner_image: '',
      features: []
    });
    setIsEditing(true);
  };

  const handleEdit = (item: Service) => {
    setCurrentItem({ ...item });
    setIsEditing(true);
  };

  const handleDelete = (slug: string) => {
    if (confirm('Delete this service?')) {
      servicesStore.remove(slug);
      loadItems();
      toast({ title: 'Success', description: 'Service removed' });
    }
  };

  const handleSave = () => {
    if (!currentItem.title || !currentItem.slug) {
        toast({ title: 'Error', description: 'Title and Slug are required', variant: 'destructive' });
        return;
    }
    
    if (servicesStore.getById(currentItem.slug)) {
      servicesStore.update(currentItem.slug, currentItem);
      toast({ title: 'Success', description: 'Service updated' });
    } else {
      servicesStore.add(currentItem as Service);
      toast({ title: 'Success', description: 'Service added' });
    }
    setIsEditing(false);
    loadItems();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Services Manager</h2>
          <p className="text-slate-500">Manage your main service offerings</p>
        </div>
        <Button onClick={handleAdd} className="bg-blue-600 text-white font-bold"><Plus className="w-4 h-4 mr-2" /> Add Service</Button>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <Card key={item.slug} className="p-4 flex flex-col md:flex-row gap-4 items-center">
            <div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center overflow-hidden shrink-0">
                {item.logo_image && <img src={item.logo_image} className="max-w-full max-h-full object-contain p-2" />}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-2">{item.description}</p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" onClick={() => handleEdit(item)}><Pencil className="w-4 h-4" /></Button>
                <Button variant="outline" className="text-red-500" onClick={() => handleDelete(item.slug)}><Trash2 className="w-4 h-4" /></Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{servicesStore.getById(currentItem.slug || '') ? 'Edit' : 'Add'} Service</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-bold uppercase text-slate-500">Title</label>
                    <Input value={currentItem.title || ''} onChange={e => setCurrentItem({...currentItem, title: e.target.value})} placeholder="Title" />
                </div>
                <div>
                    <label className="text-xs font-bold uppercase text-slate-500">Slug</label>
                    <Input value={currentItem.slug || ''} onChange={e => setCurrentItem({...currentItem, slug: e.target.value})} placeholder="url-slug-example" disabled={!!servicesStore.getById(currentItem.slug || '') && currentItem.slug !== ''} />
                </div>
            </div>
            <div>
                <label className="text-xs font-bold uppercase text-slate-500">Short Description</label>
                <Textarea value={currentItem.description || ''} onChange={e => setCurrentItem({...currentItem, description: e.target.value})} placeholder="Short Description" />
            </div>
            <div>
                <label className="text-xs font-bold uppercase text-slate-500">Long Description</label>
                <Textarea value={currentItem.long_description || ''} onChange={e => setCurrentItem({...currentItem, long_description: e.target.value})} placeholder="Long Description" rows={4} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-bold uppercase text-slate-500">Logo Image URL</label>
                    <Input value={currentItem.logo_image || ''} onChange={e => setCurrentItem({...currentItem, logo_image: e.target.value})} />
                </div>
                <div>
                    <label className="text-xs font-bold uppercase text-slate-500">Banner Image URL</label>
                    <Input value={currentItem.banner_image || ''} onChange={e => setCurrentItem({...currentItem, banner_image: e.target.value})} />
                </div>
            </div>
            <div>
                <label className="text-xs font-bold uppercase text-slate-500">Features (comma separated)</label>
                <Textarea 
                    value={currentItem.features ? currentItem.features.join(', ') : ''} 
                    onChange={e => setCurrentItem({...currentItem, features: e.target.value.split(',').map(s => s.trim()).filter(Boolean)})} 
                    placeholder="Feature 1, Feature 2..." 
                />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
