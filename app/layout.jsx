import './globals.css';
import { Manrope } from 'next/font/google';
import { LocationProvider } from '@/context/LocationContext';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/WhatsAppButton';
import { AppErrorBoundary } from '@/components/AppErrorBoundary';
import { LocationPromptModal } from '@/components/LocationPromptModal';

import { LocationNoticeToast } from '@/components/LocationNoticeToast';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://safaisaarthi.com'),
  title: 'SafaiSaarthi | Professional Cleaning Services in Jaipur',
  description: 'Professional cleaning services for homes and businesses across selected areas of Jaipur. Transparent pricing, clear scope, easy WhatsApp booking.',
  openGraph: {
    title: 'SafaiSaarthi | Professional Cleaning Services in Jaipur',
    description: 'Professional cleaning services for homes and businesses across selected areas of Jaipur.',
    siteName: 'SafaiSaarthi',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">
        <AppErrorBoundary>
          <LocationProvider>
            <CartProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <FloatingWhatsApp />
              <LocationPromptModal />
              <LocationNoticeToast />
            </CartProvider>
          </LocationProvider>
        </AppErrorBoundary>
      </body>
    </html>
  );
}
