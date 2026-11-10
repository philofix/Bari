import { HomePage } from '@/components/pages/HomePage';

// The prototype router falls back to the home page for unknown routes.
export default function NotFound() {
  return <HomePage />;
}
