import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { TITLES } from '@/lib/navigation';

export const metadata: Metadata = { title: TITLES.services };

export default function Page() {
  return <ServicesPage />;
}
