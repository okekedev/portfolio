'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when the pathname changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Add scroll listener to minimize navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <h1 className="logo">Sundai</h1>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><Link href="/about" onClick={closeMenu}>About</Link></li>
        <li><Link href="/apps" onClick={closeMenu}>Apps</Link></li>
        <li><Link href="/consulting-services" onClick={closeMenu}>Consulting Services</Link></li>
        <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link href="/experience" onClick={closeMenu}>Experience</Link></li>
        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
        <li><Link href="/licenses" onClick={closeMenu}>Licenses & Certifications</Link></li>
      </ul>
    </nav>
  );
}