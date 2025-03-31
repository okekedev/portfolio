'use client';

import Link from 'next/link';
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

export default function About() {
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
          <TypewriterText text="About Sundai 🌟" />
        </h1>
        <p>
          <TypewriterText
            text="Learn more about our mission to deliver secure, AI-driven solutions for modern enterprises. 🚀"
            delay={20}
          />
        </p>
      </section>


      {/* Company Overview Section */}
      <section className="about-section fade-in">
        <h2>Our Mission 🏢</h2>
        <p>
          Sundai is a pioneering business dedicated to delivering secure, AI-driven solutions for modern enterprises. Founded by Christian Okeke, an IT Director at Healing Hands Healthcare, Sundai leverages over 3 years of expertise in healthcare IT, cloud infrastructure, cybersecurity, and business process design. Our mission is to empower businesses with innovative tools that enhance operational efficiency, protect sensitive data, and provide seamless accessibility. We’ve transformed industries with projects like the Sundai app, Medical Cares, and Scroll, and we’re committed to driving innovation for our clients.
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Founder Bio Section */}
      <section className="about-section fade-in">
        <h2>Meet Our Founder: Christian Okeke 👋</h2>
        <p>
          Christian Okeke is the visionary behind Sundai, serving as its founder and an IT Director at Healing Hands Healthcare. With over 3 years of experience in healthcare IT, Christian specializes in cloud infrastructure, cybersecurity, and business process design. He holds certifications as a Microsoft 365 Certified Endpoint Administrator Associate, Microsoft 365 Certified Fundamentals, and CompTIA Security+ professional. Christian’s passion for innovation has led to the creation of impactful projects like the Sundai app, Medical Cares, and Scroll, transforming industries from healthcare to spiritual wellness. His leadership and expertise ensure that Sundai delivers top-tier solutions to its clients.
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Call to Action */}
      <section className="features-section fade-in">
        <h2>Partner with Sundai 🚀</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          Contact us to learn how Sundai can help your business achieve its goals with secure, innovative solutions.
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