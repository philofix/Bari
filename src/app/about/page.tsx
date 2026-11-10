import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
import { TITLES } from '@/lib/navigation';

export const metadata: Metadata = { title: TITLES.about };

export default function Page() {
  return <AboutPage />;
}
