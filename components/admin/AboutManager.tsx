'use client';

import { useState, useEffect } from 'react';
import { aboutStore, AboutCard } from '@/lib/data-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

export function AboutManager() {
  const [items, setItems] = useState<AboutCard[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<AboutCard>>({});
  const { toast } = useToast();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => setItems(aboutStore.getAll());

  const handleEdit = (item: AboutCard) => {
    setCurrentItem({ ...item });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!currentItem.title || !currentItem.description) {
      toast({ title: 'Error', description: 'Title and Description required', variant: 'destructive' });
      return;
    }
    if (currentItem.id) {
      aboutStore.update(currentItem.id, currentItem);
      toast({ title: 'Success', description: 'Card updated' });
    } else {
      aboutStore.add(currentItem as Omit<AboutCard, 'id'>);
      toast({ title: 'Success', description: 'Card added' });
    }
    setIsEditing(false);
    loadItems();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">About Us Cards</h2>
          <p className="text-slate-500">Manage the 3 cards on the About Us page</p>
        </div>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <Card key={item.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
                <div className="mt-2 text-xs text-slate-400">Icon: {item.icon} | Color: {item.color} | Order: {item.sort_order}</div>
              </div>
              <Button variant="outline" onClick={() => handleEdit(item)}><Pencil className="w-4 h-4" /></Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader><DialogTitle>Edit Card</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <Input value={currentItem.title || ''} onChange={e => setCurrentItem({...currentItem, title: e.target.value})} placeholder="Title" />
            <Textarea value={currentItem.description || ''} onChange={e => setCurrentItem({...currentItem, description: e.target.value})} placeholder="Description" rows={5} />
            <div className="grid grid-cols-2 gap-4">
              <Input value={currentItem.icon || ''} onChange={e => setCurrentItem({...currentItem, icon: e.target.value})} placeholder="Icon name" />
              <Input value={currentItem.color || ''} onChange={e => setCurrentItem({...currentItem, color: e.target.value})} placeholder="Color (blue, cyan, orange)" />
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
