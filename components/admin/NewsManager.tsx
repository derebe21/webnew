'use client';

import { useState, useEffect } from 'react';
import { newsStore, NewsItem } from '@/lib/data-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pencil, Trash2, Plus, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

export function NewsManager() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<NewsItem>>({});
  const { toast } = useToast();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    setItems(newsStore.getAll());
  };

  const handleEdit = (item: NewsItem) => {
    setCurrentItem({ ...item });
    setIsEditing(true);
  };

  const handleAdd = () => {
    setCurrentItem({
      title: '',
      summary: '',
      category: 'Company News',
      published_at: new Date().toISOString().split('T')[0],
      image_url: '/images/data-center-main.jpg'
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this news article?')) {
      newsStore.remove(id);
      loadItems();
      toast({ title: 'Success', description: 'News article deleted' });
    }
  };

  const handleSave = () => {
    if (!currentItem.title || !currentItem.summary) {
      toast({ title: 'Error', description: 'Title and Summary are required', variant: 'destructive' });
      return;
    }

    if (currentItem.id) {
      newsStore.update(currentItem.id, currentItem);
      toast({ title: 'Success', description: 'News article updated' });
    } else {
      newsStore.add(currentItem as Omit<NewsItem, 'id' | 'created_at'>);
      toast({ title: 'Success', description: 'News article added' });
    }
    
    setIsEditing(false);
    loadItems();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">News Articles</h2>
          <p className="text-slate-500">Manage the news section on the home page</p>
        </div>
        <Button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
          <Plus className="w-4 h-4 mr-2" /> Add News
        </Button>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden border-slate-200">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-48 h-32 md:h-auto bg-slate-100 flex-shrink-0">
                <img 
                  src={item.image_url || '/images/data-center-main.jpg'} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                        {item.category}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(item.published_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{item.summary}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="icon" onClick={() => handleEdit(item)}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleDelete(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
        {items.length === 0 && (
          <div className="text-center p-12 bg-slate-50 rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500">No news articles found. Add one to get started.</p>
          </div>
        )}
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{currentItem.id ? 'Edit News Article' : 'Add News Article'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Title *</label>
              <Input 
                value={currentItem.title || ''} 
                onChange={(e) => setCurrentItem({...currentItem, title: e.target.value})} 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Category</label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={currentItem.category || 'Company News'}
                  onChange={(e) => setCurrentItem({...currentItem, category: e.target.value})}
                >
                  <option>Company News</option>
                  <option>Partnership</option>
                  <option>Solutions</option>
                  <option>Case Study</option>
                  <option>Event</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Publish Date</label>
                <Input 
                  type="date"
                  value={currentItem.published_at ? currentItem.published_at.split('T')[0] : ''} 
                  onChange={(e) => setCurrentItem({...currentItem, published_at: new Date(e.target.value).toISOString()})} 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Image URL</label>
              <Input 
                value={currentItem.image_url || ''} 
                onChange={(e) => setCurrentItem({...currentItem, image_url: e.target.value})} 
                placeholder="/images/data-center-main.jpg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Summary *</label>
              <Textarea 
                value={currentItem.summary || ''} 
                onChange={(e) => setCurrentItem({...currentItem, summary: e.target.value})} 
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={handleSave} className="bg-blue-600 text-white">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
