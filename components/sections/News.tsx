'use client';

import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Newspaper, Tag } from 'lucide-react';
import { newsStore, NewsItem } from '@/lib/data-store';

export function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setNews(newsStore.getAll().slice(0, 6));
    setLoaded(true);
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Company News': 'bg-blue-500/10 text-blue-600 border-blue-200',
      'Partnership': 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      'Solutions': 'bg-purple-500/10 text-purple-600 border-purple-200',
      'Case Study': 'bg-amber-500/10 text-amber-600 border-amber-200',
      'Event': 'bg-rose-500/10 text-rose-600 border-rose-200',
    };
    return colors[category] || 'bg-slate-500/10 text-slate-600 border-slate-200';
  };

  if (!loaded) return null;

  return (
    <section id="news" className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-blue-900/5">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-slate-50/80 to-blue-50/90 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-blue-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 px-4">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-200 dark:border-blue-800 mb-8">
            <Newspaper className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic mb-8">
            <span className="text-primary">NEWS</span>
          </h2>
          <div className="w-24 h-1.5 bg-slate-900 dark:bg-white mx-auto rounded-full" />
        </div>

        {/* News Grid */}
        {news.length === 0 ? (
          <div className="text-center py-16">
            <Newspaper className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-lg text-slate-500 font-medium">No news articles yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Featured (first item) + Grid (rest) */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Featured Card */}
              <div className="relative group perspective-1000 lg:row-span-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700" />
                <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] flex flex-col">
                  <div className="relative h-72 w-full overflow-hidden flex-shrink-0">
                    <img
                      src={news[0].image_url || '/images/data-center-main.jpg'}
                      alt={news[0].title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(news[0].category)}`}>
                        <Tag className="w-3 h-3" />
                        {news[0].category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col p-8">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <time>{formatDate(news[0].published_at)}</time>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
                      {news[0].title}
                    </h3>
                    <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium flex-grow">
                      {news[0].summary}
                    </p>
                    <div className="h-1.5 w-0 group-hover:w-full transition-all duration-1000 rounded-full mt-6 bg-blue-600" />
                  </div>
                </div>
              </div>

              {/* Remaining Cards */}
              <div className="space-y-6">
                {news.slice(1, 4).map((item, index) => (
                  <div key={item.id} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-indigo-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative flex gap-5 p-5 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                      <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image_url || '/images/data-center-main.jpg'}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(item.published_at)}
                          </span>
                        </div>
                        <h4 className="text-base font-black text-slate-900 dark:text-white leading-snug mb-1.5 line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
