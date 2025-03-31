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
  title: 'Christian Okeke Portfolio',
  description: 'Portfolio of Christian Okeke, showcasing projects and services by Sundai.',
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