import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/WhatsAppButton';

// Removing next/font/google to prevent network timeout crashes. 
// Fonts are handled via global CSS variables now.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#020617',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://itsectechnology.com'),
  title: {
    default: 'ITSEC Technology | Cybersecurity & IT Solutions Ethiopia',
    template: '%s | ITSEC Technology',
  },
  description:
    'ITSEC Technology delivers end-to-end cybersecurity, digital infrastructure, fiber optic installation, 24/7 technical support, and data center solutions in Addis Ababa, Ethiopia.',
  keywords: [
    'ITSEC Technology',
    'cybersecurity Ethiopia',
    'IT support Addis Ababa',
    'Technical Support Ethiopia',
    'Fiber Optic Installation',
    'Data Center Construction',
    'ITSEC Portal',
    'B2B IT Solutions Ethiopia',
    'Server Maintenance',
    'Unified Communications',
    'itsectechnology.com',
    'server room build',
    'data center cabling',
    'rack and stack services',
    'data center security',
    'enterprise access control',
    'commercial biometric security',
    'IP surveillance setup',
    'SCADA systems installation',
    'industrial automation control',
    'pump station SCADA',
  ],
  authors: [{ name: 'ITSEC Technology PLC' }],
  creator: 'ITSEC Technology PLC',
  publisher: 'ITSEC Technology PLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://itsectechnology.com',
    siteName: 'ITSEC Technology',
    title: 'ITSEC Technology | Cybersecurity & IT Solutions Ethiopia',
    description:
      'ITSEC Technology delivers end-to-end cybersecurity, digital infrastructure, unified communications, and integrated security solutions in Ethiopia.',
    images: [
      {
        url: '/images/data-center-main.jpg',
        width: 1200,
        height: 630,
        alt: 'ITSEC Technology - Cybersecurity & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITSEC Technology | Cybersecurity & IT Solutions Ethiopia',
    description:
      'End-to-end cybersecurity, digital infrastructure, and IT solutions in Addis Ababa, Ethiopia.',
    site: '@ITSECTECHNOLOGY',
    creator: '@ITSECTECHNOLOGY',
    images: ['/images/data-center-main.jpg'],
  },
  alternates: {
    canonical: 'https://itsectechnology.com',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://itsectechnology.com/#organization',
      name: 'ITSEC Technology PLC',
      alternateName: 'ITSEC Technology',
      url: 'https://itsectechnology.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dlc8bgysp/image/upload/e_make_transparent/v1767612094/logo_fn47rb.png',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+251-911-407-439',
          contactType: 'customer service',
          availableLanguage: ['English', 'Amharic'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+251-955-190-019',
          contactType: 'customer service',
        },
      ],
      sameAs: [
        'https://facebook.com/ITSECTECHNOLOGY',
        'https://x.com/ITSECTECHNOLOGY',
        'https://instagram.com/ITSECTECHNOLOGY',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://itsectechnology.com/#localbusiness',
      name: 'ITSEC Technology PLC',
      image: 'https://res.cloudinary.com/dlc8bgysp/image/upload/e_make_transparent/v1767612094/logo_fn47rb.png',
      url: 'https://itsectechnology.com',
      telephone: '+251-911-407-439',
      email: 'info@itsectechnology.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kirkos Church',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.0105,
        longitude: 38.7537,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      priceRange: '$$',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://icon.horse" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Mobile optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
