'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Calendar, ArrowRight, Newspaper, Tag, Zap, Clock, ExternalLink, ChevronLeft, ChevronRight, Radio } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { newsStore, NewsItem } from '@/lib/data-store';

const AUTO_PLAY_MS = 5000;

export function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setNews(newsStore.getAll());
    setLoaded(true);
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 0;
        return p + (100 / (AUTO_PLAY_MS / 100));
      });
    }, 100);
  }, []);

  const goNext = useCallback((len: number) => {
    setCurrentIndex(prev => (prev + 1) % Math.max(len, 1));
    resetProgress();
  }, [resetProgress]);

  const goPrev = useCallback((len: number) => {
    setCurrentIndex(prev => (prev - 1 + len) % Math.max(len, 1));
    resetProgress();
  }, [resetProgress]);

  // Auto-play
  useEffect(() => {
    if (!loaded || news.length <= 1 || paused) return;
    resetProgress();
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % news.length);
      setProgress(0);
    }, AUTO_PLAY_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [loaded, news.length, paused, resetProgress]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getCategoryStyle = (category: string) => {
    const styles: Record<string, { text: string; border: string; bg: string }> = {
      'Company News':  { text: 'text-blue-400',    border: 'border-blue-500/30',    bg: 'bg-blue-500/10' },
      'Partnership':   { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
      'Solutions':     { text: 'text-indigo-300',  border: 'border-indigo-700/40',  bg: 'bg-indigo-900/20' },
      'Case Study':    { text: 'text-amber-400',   border: 'border-amber-500/30',   bg: 'bg-amber-500/10' },
      'Event':         { text: 'text-rose-400',    border: 'border-rose-500/30',    bg: 'bg-rose-500/10' },
    };
    return styles[category] || { text: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' };
  };

  if (!loaded) return null;

  return (
    <section id="news" className="relative py-24 md:py-32 bg-[#020617] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]"><defs>
          <pattern id="news-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#news-grid)"/>
        </svg>
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            Live Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-6"
              style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
            News &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Insights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)] mb-8" />
          <p className="text-slate-400 text-lg leading-relaxed font-['Inter',sans-serif]">
            Stay informed with the latest cybersecurity intelligence, technology breakthroughs, and enterprise ICT insights from ITSEC Technology.
          </p>
        </div>

        {/* CONTENT */}
        {news.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-slate-800 bg-slate-900/40">
            <Newspaper className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-lg text-slate-500 font-medium">No news articles yet. Check back soon!</p>
          </div>
        ) : (
          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* PROGRESS BAR */}
            <div className="relative h-1 rounded-full bg-slate-800 mb-3 overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-none"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)] transition-none"
                style={{ left: `calc(${progress}% - 5px)` }}
              />
            </div>

            {/* STATUS ROW */}
            <div className="flex items-center justify-between mb-6 px-1">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-widest">
                <span className={`w-1.5 h-1.5 rounded-full ${paused ? 'bg-amber-400' : 'bg-cyan-400 animate-pulse'}`} />
                {paused ? 'Paused — hover to pause' : 'Auto-playing'}
              </div>
              <span className="text-xs font-bold text-slate-500 tabular-nums tracking-widest">
                {String(currentIndex + 1).padStart(2, '0')} / {String(news.length).padStart(2, '0')}
              </span>
            </div>

            {/* CAROUSEL CARD */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 bg-gradient-to-b from-slate-900/70 to-[#020617]/90 backdrop-blur-md overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] flex flex-col md:flex-row min-h-[360px] md:min-h-[420px]"
              >
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-0" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-[1.5px] border-r-[1.5px] border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-[1.5px] border-l-[1.5px] border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image */}
                <div className="relative w-full md:w-[45%] h-64 md:h-auto overflow-hidden flex-shrink-0">
                  <motion.img
                    key={`img-${currentIndex}`}
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6, ease: 'linear' }}
                    src={news[currentIndex].image_url || '/images/data-center-main.jpg'}
                    alt={news[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-slate-950/20 md:to-slate-950" />
                  <div className="absolute top-4 left-4">
                    {(() => {
                      const s = getCategoryStyle(news[currentIndex].category);
                      return (
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border backdrop-blur-md ${s.text} ${s.border} ${s.bg}`}>
                          <Tag className="w-3 h-3" />
                          {news[currentIndex].category}
                        </span>
                      );
                    })()}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border border-cyan-500/30 bg-cyan-950/60 text-cyan-400 backdrop-blur-md">
                      <Zap className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-grow flex flex-col p-8 md:p-12 gap-6 z-10">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <time>{formatDate(news[currentIndex].published_at)}</time>
                    </span>
                    <span className="w-px h-4 bg-slate-700" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight group-hover:text-cyan-400 transition-colors flex-grow"
                      style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                    {news[currentIndex].title}
                  </h3>

                  {news[currentIndex].summary && (
                    <p className="text-slate-400 leading-relaxed line-clamp-2 text-sm">
                      {news[currentIndex].summary}
                    </p>
                  )}

                  <Link href={`/insights/${news[currentIndex].id}`} className="flex items-center gap-2 text-sm font-bold text-cyan-500 hover:text-cyan-300 transition-colors mt-auto pt-6 border-t border-white/10 w-fit group/link">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next Buttons */}
            <button
              onClick={() => goPrev(news.length)}
              className="absolute top-1/2 -left-4 md:-left-14 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-cyan-400 hover:border-cyan-500 transition-all z-30 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => goNext(news.length)}
              className="absolute top-1/2 -right-4 md:-right-14 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-cyan-400 hover:border-cyan-500 transition-all z-30 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-10">
              {news.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setCurrentIndex(idx); resetProgress(); }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'bg-cyan-400 w-10 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                      : 'bg-slate-700 w-2 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12">
              <Link
                href="/insights"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-slate-700 hover:border-cyan-500/40 bg-slate-900/60 hover:bg-slate-800 transition-all duration-300 text-sm font-bold text-slate-300 hover:text-cyan-400 group"
              >
                <ExternalLink className="w-4 h-4" />
                View All News &amp; Insights
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
