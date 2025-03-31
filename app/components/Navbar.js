'use client';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Use useCallback to memorize functions
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);
  
  const closeMenu = useCallback((e) => {
    e?.stopPropagation();
    setIsMenuOpen(false);
  }, []);
  
  // Close the menu when the pathname changes
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);
  
  // Optimized scroll listener with debounce and requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 50;
          if (isScrolled !== shouldBeScrolled) {
            setIsScrolled(shouldBeScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);
  
  // Optimized overlay effect
  useEffect(() => {
    if (!isMenuOpen) return;
    
    // Create the overlay element only once
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    // Add event listener to close menu when clicking on blurred area
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains('menu-overlay')) {
        closeMenu();
      }
    };
    
    overlay.addEventListener('click', handleOverlayClick);
    document.body.style.overflow = 'hidden';
    
    return () => {
      overlay.removeEventListener('click', handleOverlayClick);
      document.body.removeChild(overlay);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, closeMenu]);
  
  // Pre-compute link classes to minimize calculations in render
  const homeLinkClass = pathname === '/' ? 'active-link' : '';
  const aboutLinkClass = pathname === '/about' ? 'active-link' : '';
  const appsLinkClass = pathname === '/apps' ? 'active-link' : '';
  const consultingLinkClass = pathname === '/consulting-services' ? 'active-link' : '';
  const contactLinkClass = pathname === '/contact' ? 'active-link' : '';
  const experienceLinkClass = pathname === '/experience' ? 'active-link' : '';
  const licensesLinkClass = pathname === '/licenses' ? 'active-link' : '';
  
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <h1 className="logo">Sundai</h1>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li>
          <Link href="/" onClick={closeMenu} className={homeLinkClass}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeMenu} className={aboutLinkClass}>
            About
          </Link>
        </li>
        <li>
          <Link href="/apps" onClick={closeMenu} className={appsLinkClass}>
            Apps
          </Link>
        </li>
        <li>
          <Link href="/consulting-services" onClick={closeMenu} className={consultingLinkClass}>
            Consulting Services
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu} className={contactLinkClass}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/experience" onClick={closeMenu} className={experienceLinkClass}>
            Experience
          </Link>
        </li>
        <li>
          <Link href="/licenses" onClick={closeMenu} className={licensesLinkClass}>
            Licenses & Certifications
          </Link>
        </li>
      </ul>
    </nav>
  );
}