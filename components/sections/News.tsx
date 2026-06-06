'use client';

import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Newspaper, Tag, Zap, Clock, ExternalLink } from 'lucide-react';
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

  const getCategoryStyle = (category: string) => {
    const styles: Record<string, { text: string; border: string; bg: string }> = {
      'Company News':  { text: 'text-itsec-primary',   border: 'border-itsec-primary/30',   bg: 'bg-itsec-primary/10' },
      'Partnership':   { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
      'Solutions':     { text: 'text-purple-400',  border: 'border-purple-500/30',  bg: 'bg-purple-500/10' },
      'Case Study':    { text: 'text-amber-400',   border: 'border-amber-500/30',   bg: 'bg-amber-500/10' },
      'Event':         { text: 'text-rose-400',    border: 'border-rose-500/30',    bg: 'bg-rose-500/10' },
    };
    return styles[category] || { text: 'text-itsec-primary', border: 'border-itsec-primary/30', bg: 'bg-itsec-primary/10' };
  };

  if (!loaded) return null;

  return (
    <section id="news" className="relative py-24 md:py-32 bg-[#020617] text-white overflow-hidden">

      {/* ── BACKGROUND VISUAL EFFECTS ────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tech Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]"><defs>
          <pattern id="news-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#news-grid)"/>
        </svg>
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[120px]" />
        {/* Edge lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-itsec-primary/30 bg-cyan-950/20 backdrop-blur-md mx-auto mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-itsec-primary opacity-70"/>
              <span className="relative rounded-full h-2 w-2 bg-itsec-primary"/>
            </span>
            <Newspaper className="w-3.5 h-3.5 text-itsec-primary" />
            <span className="text-[10px] font-bold text-itsec-primary tracking-[0.2em] uppercase">
              Latest Updates
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-6"
              style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
            News &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Insights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
        </div>

        {/* ── CONTENT ───────────────────────────────── */}
        {news.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-slate-800 bg-slate-900/40">
            <Newspaper className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-lg text-slate-500 font-medium">No news articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-8">

            {/* ── FEATURED ARTICLE (Spans 3 cols) ──── */}
            <div className="lg:col-span-3 group relative rounded-3xl border border-slate-800/80 hover:border-blue-500/40 bg-gradient-to-b from-slate-900/70 to-slate-950/70 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(var(--itsec-primary),0.15)] flex flex-col">
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0">
                <img
                  src={news[0].image_url || '/images/data-center-main.jpg'}
                  alt={news[0].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  {(() => {
                    const s = getCategoryStyle(news[0].category);
                    return (
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border backdrop-blur-md ${s.text} ${s.border} ${s.bg}`}>
                        <Tag className="w-3 h-3" />
                        {news[0].category}
                      </span>
                    );
                  })()}
                </div>

                {/* Featured badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border border-itsec-primary/30 bg-cyan-950/60 text-itsec-primary backdrop-blur-md">
                    <Zap className="w-3 h-3" />
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col p-8 gap-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <time>{formatDate(news[0].published_at)}</time>
                  </span>
                  <span className="w-px h-3 bg-slate-700" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    5 min read
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight group-hover:text-itsec-primary transition-colors"
                    style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                  {news[0].title}
                </h3>

                <p className="text-sm md:text-base text-slate-400 leading-relaxed flex-grow">
                  {news[0].summary}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-itsec-primary group-hover:text-cyan-300 transition-colors mt-auto pt-4 border-t border-white/5">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* ── SECONDARY ARTICLES (2 col grid) ──── */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {news.slice(1, 5).map((item) => {
                const s = getCategoryStyle(item.category);
                return (
                  <div
                    key={item.id}
                    className="group relative flex gap-4 p-5 rounded-2xl border border-slate-800/80 hover:border-itsec-primary/30 bg-gradient-to-r from-slate-900/60 to-slate-950/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden"
                  >
                    {/* left accent line */}
                    <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Thumbnail */}
                    {item.image_url && (
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-800">
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    )}

                    {/* Text */}
                    <div className="flex-grow min-w-0 flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold border ${s.text} ${s.border} ${s.bg}`}>
                          {item.category}
                        </span>
                        <span className="text-[10px] text-slate-500 flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5" />
                          {formatDate(item.published_at)}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-itsec-primary transition-colors"
                          style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>

                      <div className="flex items-center gap-1 text-[10px] font-bold text-itsec-primary group-hover:text-itsec-primary transition-colors mt-auto">
                        Read More <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* View All CTA */}
              <a
                href="/news"
                className="flex items-center justify-center gap-2.5 p-4 rounded-2xl border border-dashed border-slate-700/60 hover:border-cyan-500/40 bg-slate-900/20 hover:bg-slate-900/60 transition-all duration-300 text-sm font-bold text-slate-400 hover:text-itsec-primary group"
              >
                <ExternalLink className="w-4 h-4" />
                View All News &amp; Insights
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
