import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Sundai - Secure Business Solutions',
  description: 'Innovative, secure solutions for your business by Christian Okeke.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}