import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';
import { TITLES } from '@/lib/navigation';

export const metadata: Metadata = { title: TITLES.home };

export default function Page() {
  return <HomePage />;
}
