'use client';

import Link from 'next/link'; // Add the missing import
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

export default function Licenses() {
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
          <TypewriterText text="Licenses & Certifications 🏆" />
        </h1>
        <p>
          <TypewriterText
            text="Explore the credentials that power Sundai’s expertise in secure, AI-driven solutions. 🚀"
            delay={2000}
          />
        </p>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section fade-in">
        <h2>Our Credentials ✨</h2>
        <div className="certifications-grid">
          <div className="cert-card">
            <h3>Microsoft 365 Certified: Endpoint Administrator Associate</h3>
            <p><strong>Issuer:</strong> Microsoft</p>
            <p><strong>Issued:</strong> Jan 2024 · <strong>Expires:</strong> Jan 2025</p>
            <p><strong>Credential ID:</strong> 1D63EA1F19EDCB57</p>
            <p>
              <TypewriterText text="Skills: Cloud Infrastructure, MDM ☁️" />
            </p>
          </div>
          <div className="cert-card">
            <h3>Microsoft 365 Certified: Fundamentals</h3>
            <p><strong>Issuer:</strong> Microsoft</p>
            <p><strong>Issued:</strong> Dec 2023</p>
            <p><strong>Credential ID:</strong> 996061243</p>
            <p>
              <TypewriterText text="Skills: Microsoft Intune, Microsoft Azure, System Architecture 🌐" />
            </p>
          </div>
          <div className="cert-card">
            <h3>CompTIA Security+ ce Certification</h3>
            <p><strong>Issuer:</strong> CompTIA</p>
            <p><strong>Issued:</strong> Nov 2023 · <strong>Expires:</strong> Nov 2026</p>
            <p>
              <TypewriterText text="Skills: Security, Leadership, Cybersecurity 🔐" />
            </p>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Call to Action */}
      <section className="features-section fade-in">
        <h2>Work with Certified Experts 🚀</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          Contact us to learn how our certified team can help your business succeed.
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