import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Monitoring Portal | ITSEC Technology',
  description: 'ITSEC Technology system monitoring and security analytics portal.',
  robots: 'noindex, nofollow',
};

// Use dynamic import to force this to be a client component since it uses state
const MonitoringLayoutClient = dynamic(() => import('@/components/monitoring/MonitoringLayoutClient'), {
  ssr: false,
});

export default function MonitoringPage() {
  return <MonitoringLayoutClient />;
}
