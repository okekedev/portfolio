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

export default function ConsultingServices() {

  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>
          <TypewriterText text="Consulting Services by Sundai 🌟" />
        </h1>
        <p>
          <TypewriterText
            text="Transform your business with expert consulting in healthcare IT, cloud infrastructure, cybersecurity, and more. 🚀"
            delay={2000}
          />
        </p>
        <Link href="/contact">
          <button className="cta-button">Get in Touch</button>
        </Link>
      </section>

   
      {/* Services Section */}
      <section className="features-section fade-in">
        <h2>Our Consulting Services ✨</h2>
        <div className="features">
          <div className="card">
            <Image
              src="/healthcare-tech-3.jpg"
              alt="Healthcare IT Consulting"
              width={80}
              height={80}
              quality={75}
            />
            <h3>Healthcare IT Consulting 🩺</h3>
            <p>
              <TypewriterText text="Optimize your healthcare operations with tailored IT solutions, from EMR integration to patient data security." />
            </p>
          </div>
          <div className="card">
            <Image
              src="/cybersecurity-5.jpg"
              alt="Cybersecurity Consulting"
              width={80}
              height={80}
              quality={75}
            />
            <h3>Cybersecurity Consulting 🔒</h3>
            <p>
              <TypewriterText text="Protect your business with enterprise-grade security strategies, compliance audits, and risk assessments." />
            </p>
          </div>
          <div className="card">
            <Image
              src="/tech-workspace-4.jpg"
              alt="Cloud Infrastructure Consulting"
              width={80}
              height={80}
              quality={75}
            />
            <h3>Cloud Infrastructure Consulting ☁️</h3>
            <p>
              <TypewriterText text="Seamlessly migrate to the cloud with expert guidance on Microsoft Azure, Intune, and more." />
            </p>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Benefits Section */}
      <section className="about-section fade-in">
        <h2>Why Choose Sundai Consulting? 💡</h2>
        <p>
          At Sundai, we bring over 3 years of expertise in healthcare IT, cloud infrastructure, and cybersecurity to help your business thrive. Our founder, Christian Okeke, is a Microsoft 365 Certified Endpoint Administrator and CompTIA Security+ certified professional, ensuring you receive top-tier guidance. We’ve transformed industries with projects like the Sundai app, Medical Cares, and Scroll, and we’re ready to bring that same innovation to your organization. Let’s work together to enhance efficiency, secure your data, and drive growth.
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Call to Action */}
      <section className="features-section fade-in">
        <h2>Ready to Transform Your Business? 🚀</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          Contact us today to discuss how Sundai’s consulting services can help you achieve your goals.
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