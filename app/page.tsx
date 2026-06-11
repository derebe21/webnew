'use client';

import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Products } from '@/components/sections/Products';
import { News } from '@/components/sections/News';
import { Contact } from '@/components/sections/Contact';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <About />
      <Services variant="grid" />
      <Products />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
