import { servicesData, type Service } from '@/lib/services-data';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = servicesData.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="relative min-h-screen bg-background text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
            {/* Signature Background Overlay Removed */}

            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex mb-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 dark:text-white font-semibold">{service.title}</span>
                    </nav>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Left Column: Content */}
                        <div className="lg:col-span-2 space-y-10">
                            {service.slug === 'smart-systems' ? (
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                                            {service.title}
                                        </h1>
                                        {service.description && (
                                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                                {service.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                                        <img
                                            src={service.bannerImage}
                                            alt="Smart Systems Visualization"
                                            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                                    </div>

                                    {service.longDescription && service.longDescription !== service.description && (
                                        <div className="prose prose-slate dark:prose-invert max-w-none">
                                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                                            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                                {service.longDescription}
                                            </p>
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Smart Solutions</h2>
                                        <Accordion type="single" collapsible className="w-full space-y-4">
                                            {service.features.map((featureObj, i) => {
                                                const [featTitle, ...rest] = featureObj.split(':');
                                                const featDesc = rest.join(':');
                                                return (
                                                    <AccordionItem
                                                        key={i}
                                                        value={`item-${i}`}
                                                        className="border rounded-2xl px-6 bg-white dark:bg-slate-900 shadow-sm border-slate-200 dark:border-slate-800"
                                                    >
                                                        <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                                                            {featTitle?.trim() || featureObj}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="text-lg text-slate-600 dark:text-slate-400 pb-6 leading-relaxed">
                                                            {featDesc?.trim() || `Advanced, scalable ${featTitle?.toLowerCase()} tailored for your specific business requirements and operational excellence.`}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                )
                                            })}
                                        </Accordion>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-10">
                                    <div className="space-y-6">
                                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
                                            {service.title}
                                        </h1>
                                        {service.longDescription && (
                                            <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                                                {service.longDescription}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                        <div className="grid sm:grid-cols-1 gap-4">
                                            {service.features.map((featureObj, i) => {
                                                const [featTitle, ...rest] = featureObj.split(':');
                                                const featDesc = rest.join(':');
                                                return (
                                                    <Card key={i} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm p-6 hover:shadow-md transition-shadow">
                                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                                                            <ArrowRight className="w-5 h-5 text-primary mr-2" />
                                                            {featTitle?.trim() || featureObj}
                                                        </h4>
                                                        {featDesc && (
                                                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed ml-7">
                                                                {featDesc.trim()}
                                                            </p>
                                                        )}
                                                    </Card>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: CTA & Sidebar */}
                        <div className="space-y-8">
                            <Card className="p-8 rounded-3xl relative overflow-hidden group border-none shadow-2xl bg-white dark:bg-slate-900">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={service.sidebarImage || service.bannerImage || '/images/sidebar-cta-bg.jpg'}
                                        alt="Secure your business"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-blue-900/50" />

                                    {/* Service Logo Asset */}
                                    {service.logoImage && (
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                            <img
                                                src={service.logoImage}
                                                alt={`${service.title} Logo`}
                                                className="w-full h-full object-contain animate-float"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="relative z-10 space-y-6 text-center lg:text-left">
                                    <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Ready to secure your business?</h3>
                                    <p className="text-white text-lg leading-relaxed font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        Our experts are ready to help you implement {service.title} tailored to your organization’s needs.
                                    </p>
                                    <Link href="/contact" className="block">
                                        <Button size="lg" className="w-full h-14 text-lg font-bold shadow-2xl hover:scale-105 transition-all bg-white text-slate-900 hover:bg-white/90">
                                            Get a Free Quote
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </Card>

                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 space-y-6">
                                <h4 className="text-lg font-bold">Other Services</h4>
                                <div className="space-y-3">
                                    {servicesData
                                        .filter((s) => s.slug !== service.slug)
                                        .slice(0, 4)
                                        .map((s) => (
                                            <Link
                                                key={s.slug}
                                                href={`/services/${s.slug}`}
                                                className="flex items-center p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all group"
                                            >
                                                <span className="text-sm font-medium">{s.title}</span>
                                            </Link>
                                        ))}
                                </div>
                                <Link href="/services" className="block text-center text-sm font-bold text-primary hover:underline">
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
