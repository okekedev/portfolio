import './globals.css';
import { Playfair_Display, Roboto } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
  description: 'Projects and services by Sundai.',
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
      <body className={`${playfairDisplay.variable} ${roboto.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

