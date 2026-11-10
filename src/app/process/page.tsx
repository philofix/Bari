import type { Metadata } from 'next';
import { ProcessPage } from '@/components/pages/ProcessPage';
import { TITLES } from '@/lib/navigation';

export const metadata: Metadata = { title: TITLES.process };

export default function Page() {
  return <ProcessPage />;
}
