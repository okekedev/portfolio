import './globals.css';
import { Playfair_Display, Roboto } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SchemaOrg from './components/SchemaOrg';

// Load Playfair Display from Google Fonts
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

// Load Roboto as a fallback for Futura (since Futura is not on Google Fonts)
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata = {
  title: 'Sundai - By Christian Okeke',
  description: 'Sundai bridges technology, processes, and people through healthcare IT, cybersecurity, and cloud infrastructure consulting services.',
  keywords: 'Sundai, Christian Okeke, healthcare IT, cybersecurity, cloud infrastructure, consulting services',
  authors: [{ name: 'Christian Okeke' }],
  creator: 'Christian Okeke',
  publisher: 'Sundai',
  robots: 'index, follow',
  openGraph: {
    title: 'Sundai - By Christian Okeke',
    description: 'Innovate with confidence through our specialized consulting services and apps.',
    url: 'https://your-domain.com',
    siteName: 'Sundai',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logos 512.png',
        width: 512,
        height: 512,
        alt: 'Sundai Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sundai - By Christian Okeke',
    description: 'Innovate with confidence through our specialized consulting services and apps.',
    images: ['/logos 512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
    other: {
      rel: 'icon',
      url: '/logos 512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className={`${playfairDisplay.variable} ${roboto.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <SchemaOrg />
      </body>
    </html>
  );
}
