import type { Metadata } from 'next';
import { SectorsPage } from '@/components/pages/SectorsPage';
import { TITLES } from '@/lib/navigation';

export const metadata: Metadata = { title: TITLES.sectors };

export default function Page() {
  return <SectorsPage />;
}
