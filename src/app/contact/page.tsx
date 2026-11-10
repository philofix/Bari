import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';
import { TITLES } from '@/lib/navigation';

export const metadata: Metadata = { title: TITLES.contact };

export default function Page() {
  return <ContactPage />;
}
