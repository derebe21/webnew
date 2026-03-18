import { servicesData } from '@/lib/services-data';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import { Phone, Mail, MapPin } from 'lucide-react';

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

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-slate-900 text-white overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.bannerImage || '/images/data-center-main.jpg'}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-8">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Expert {service.title} Services</h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                    <p className="text-xl text-slate-600 mb-4 font-medium max-w-4xl mx-auto leading-relaxed">
                        {service.longDescription}
                    </p>
                </div>
            </section>

            {/* Services Icon Strip (Features Grid) */}
            <section className="bg-[#0b1121] py-20 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {service.features.map((featureObj, index) => {
                            const [featTitle, ...rest] = featureObj.split(':');
                            const featDesc = rest.join(':').trim() || `Advanced, scalable ${featTitle.trim().toLowerCase()} tailored for your specific business requirements and operational excellence.`;

                            return (
                                <div key={index} className="flex flex-col items-center">
                                    <Icon className="w-16 h-16 text-blue-400 mb-6" />
                                    <h3 className="text-xl font-bold mb-4">{featTitle.trim()}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm lg:text-base">{featDesc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-[#0b1121] mb-6 tracking-tight">Ready to Start Your {service.title} Project?</h2>
                    <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
                        Contact our specialists today for a free consultation and project estimate.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                                <Phone strokeWidth={2.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Call Us Today</h3>
                            <a href="tel:+251911407430" className="text-lg text-blue-600 hover:text-blue-700 font-medium">+251911407430</a>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                                <Mail strokeWidth={2.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Email Consultation</h3>
                            <a href="mailto:info@itsectechnology.com" className="text-lg text-blue-600 hover:text-blue-700 font-medium">info@itsectechnology.com</a>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                                <MapPin strokeWidth={2.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Visit Our Office</h3>
                            <p className="text-lg text-slate-600 text-center">ITSEC Technology LLC</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
