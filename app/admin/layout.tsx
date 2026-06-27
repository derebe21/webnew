import dynamic from 'next/dynamic';

const AdminLayoutClient = dynamic(() => import('@/components/admin/AdminLayoutClient'), {
  ssr: false,
});

export const metadata = {
  title: 'Admin Portal - ITSEC Technology',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
