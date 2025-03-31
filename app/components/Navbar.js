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

  const closeMenu = (e) => {
    e?.stopPropagation();
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
      // Create the overlay element
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

      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';

      return () => {
        // Clean up the overlay and event listener
        overlay.removeEventListener('click', handleOverlayClick);
        document.body.removeChild(overlay);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
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
            href="/experience"
            onClick={closeMenu}
            className={pathname === '/experience' ? 'active-link' : ''}
          >
            Experience
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
    </nav>
  );
}