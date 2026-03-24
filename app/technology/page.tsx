import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Products } from '@/components/sections/Products';

export const metadata: Metadata = {
    title: 'Technology & Partners | ITSEC Technology',
    description: 'Explore our technology partnerships and enterprise solutions from Cisco, Huawei, Dell, and more.',
    alternates: { canonical: 'https://itsectechnology.com/technology' },
};

export default function TechnologyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-20">
                <Products />
            </main>
            <Footer />
        </div>
    );
}
