import type { Metadata, Viewport } from 'next';
import { Host_Grotesk, Instrument_Sans, Noto_Sans_Ethiopic } from 'next/font/google';
import { ChromeRuntime } from '@/components/runtime/ChromeRuntime';
import { DrawerMarkup } from '@/components/site/DrawerMarkup';
import { Footer } from '@/components/site/Footer';
import { HeaderMarkup } from '@/components/site/HeaderMarkup';
import { NoiseFilter } from '@/components/site/NoiseFilter';
import { DESCRIPTION, TITLES } from '@/lib/navigation';
import '@/styles/globals.css';

const hostGrotesk = Host_Grotesk({ subsets: ['latin', 'latin-ext'], weight: 'variable', variable: '--font-host-grotesk', display: 'swap', adjustFontFallback: false, fallback: [] });
const instrumentSans = Instrument_Sans({ subsets: ['latin', 'latin-ext'], weight: 'variable', variable: '--font-instrument-sans', display: 'swap', adjustFontFallback: false, fallback: [] });
const notoEthiopic = Noto_Sans_Ethiopic({ subsets: ['ethiopic'], weight: 'variable', variable: '--font-noto-ethiopic', display: 'swap', adjustFontFallback: false, fallback: [] });

export const metadata: Metadata = {
  title: { default: TITLES.home, template: '%s' },
  description: DESCRIPTION,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

/** Runs before paint: restores the saved theme and enables motion-ready initial states (.m). */
const bootScript = `(function(){var r=document.documentElement;try{var t=localStorage.getItem('bari-theme');if(t==='light'||t==='dark')r.setAttribute('data-theme',t);}catch(e){}if(!r.getAttribute('data-theme'))r.setAttribute('data-theme',matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches))r.classList.add('m');})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hostGrotesk.variable} ${instrumentSans.variable} ${notoEthiopic.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <NoiseFilter />
        <a href="#main" className="btn p" style={{ position: 'absolute', left: '-9999px' }}>
          Skip to content
        </a>
        <div id="prog" aria-hidden="true" />
        <HeaderMarkup />
        <DrawerMarkup />
        <main id="main">{children}</main>
        <Footer />
        <ChromeRuntime />
      </body>
    </html>
  );
}
