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

  // Add blur effect to background and handle click on blurred area
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      // Add event listener to close menu when clicking on blurred area
      const handleOverlayClick = (e) => {
        if (e.target.classList.contains('menu-overlay')) {
          closeMenu();
        }
      };
      document.addEventListener('click', handleOverlayClick);
      return () => {
        document.removeEventListener('click', handleOverlayClick);
      };
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <h1 className="logo">Sundai</h1>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li>
          <Link
            href="/"
            onClick={closeMenu}
            className={pathname === '/' ? 'active-link' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={closeMenu}
            className={pathname === '/about' ? 'active-link' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/apps"
            onClick={closeMenu}
            className={pathname === '/apps' ? 'active-link' : ''}
          >
            Apps
          </Link>
        </li>
        <li>
          <Link
            href="/consulting-services"
            onClick={closeMenu}
            className={pathname === '/consulting-services' ? 'active-link' : ''}
          >
            Consulting Services
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onClick={closeMenu}
            className={pathname === '/contact' ? 'active-link' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/licenses"
            onClick={closeMenu}
            className={pathname === '/licenses' ? 'active-link' : ''}
          >
            Licenses & Certifications
          </Link>
        </li>
      </ul>
      {isMenuOpen && <div className="menu-overlay"></div>}
    </nav>
  );
}