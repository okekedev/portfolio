'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [index, text]);

  return <span className="typewriter">{displayedText}</span>;
};

export default function Apps() {
  // Add smooth scrolling for mouse wheel
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const scrollAmount = event.deltaY * 0.5; // Reduce scroll speed by 50%
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth', // Smooth scrolling for mouse wheel
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>
          <TypewriterText text="Sundai Apps: Innovation at Your Fingertips 🌟" />
        </h1>
        <p>
          <TypewriterText
            text="Discover our suite of apps designed to empower businesses and individuals with secure, AI-driven solutions. 🚀"
            delay={2000}
          />
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Apps Section */}
      <section className="projects-section fade-in">
        <h2>Our Apps ✨</h2>
        <div className="projects-grid">
          <div className="project-card">
            <Image
              src="/ai-concept-1.jpg"
              alt="Sundai App"
              width={300}
              height={150}
              quality={75}
              loading="lazy"
            />
            <h3>Sundai App</h3>
            <p>
              <TypewriterText text="Secure AI integration for document processing with enterprise-grade security. 🔒" />
            </p>
            <p><strong>Tech Stack:</strong> React, Python, Microsoft Azure</p>
            <p>
              <TypewriterText text="Impact: Ensures data privacy while enabling efficient document analysis." />
            </p>
            <p><a href="https://lnkd.in/example">Learn More</a></p>
          </div>
          <div className="project-card">
            <Image
              src="/healthcare-tech-2.jpg"
              alt="Medical Cares Project"
              width={300}
              height={150}
              quality={75}
              loading="lazy"
            />
            <h3>Medical Cares</h3>
            <p>
              <TypewriterText text="An app connecting Medicare beneficiaries with providers, featuring Power BI dashboards. 🩺" />
            </p>
            <p><strong>Tech Stack:</strong> Power BI, Microsoft Datamart, Swift</p>
            <p>
              <TypewriterText text="Impact: Improved provider visibility and accessibility for over 2 million records." />
            </p>
            <p><a href="https://medicalcares.org">Visit Site</a></p>
          </div>
          <div className="project-card">
            <Image
              src="/scroll-thumb.jpg"
              alt="Scroll Project"
              width={300}
              height={150}
              quality={75}
              loading="lazy"
            />
            <h3>Scroll</h3>
            <p>
              <TypewriterText text="A Bible app curating inspiring verses using AI algorithms for daily reflection. 📖" />
            </p>
            <p><strong>Tech Stack:</strong> Swift, AI Development</p>
            <p>
              <TypewriterText text="Impact: Provides users with personalized spiritual encouragement." />
            </p>
            <p><a href="https://apps.apple.com/scroll">Download App</a></p>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Call to Action */}
      <section className="features-section fade-in">
        <h2>Explore More with Sundai 🚀</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          Contact us to learn how our apps can transform your business or personal experience.
        </p>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/contact">
            <button className="cta-button">Contact Us</button>
          </Link>
        </div>
      </section>
    </main>
  );
}