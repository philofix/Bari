import type { Metadata } from 'next';
import { WorkPage } from '@/components/pages/WorkPage';
import { TITLES } from '@/lib/navigation';

export const metadata: Metadata = { title: TITLES.work };

export default function Page() {
  return <WorkPage />;
}
