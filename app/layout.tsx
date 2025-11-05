import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Mitti & Mitti ? Terracotta and Ceramic Handicrafts',
  description: 'Artisan terracotta and ceramic crafts inspired by Indian heritage. Handmade, sustainable, and soulful.',
  metadataBase: new URL('https://agentic-49a301c4.vercel.app'),
  openGraph: {
    title: 'Mitti & Mitti ? Terracotta and Ceramic Handicrafts',
    description: 'Artisan terracotta and ceramic crafts inspired by Indian heritage.',
    url: 'https://agentic-49a301c4.vercel.app',
    siteName: 'Mitti & Mitti',
    images: [
      { url: '/og.jpg', width: 1200, height: 630, alt: 'Mitti & Mitti' },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="bg-paper-texture">
        {children}
      </body>
    </html>
  );
}
