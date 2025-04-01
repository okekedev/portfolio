'use client';
import Link from 'next/link';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>About Sundai 🌟</h1>
        <p>
          Learn more about our mission to deliver secure, AI-driven solutions for modern enterprises. 🚀
        </p>
      </section>

      {/* Company Overview Section */}
      <section className="about-section fade-in">
        <h2>Our Mission 🏢</h2>
        <p>
          Sundai is a pioneering business dedicated to delivering secure, AI-driven solutions for modern enterprises. Our mission is to empower businesses with innovative tools that enhance operational efficiency, protect sensitive data, and provide seamless accessibility. We've transformed industries with projects like the Sundai app, Medical Cares, and Scroll, and we're committed to driving innovation for the right reasons.
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Founder Bio Section */}
      <section className="about-section fade-in">
        <h2>Meet Our Founder: Christian Okeke 👋</h2>
        <p>
          Christian Okeke is the visionary behind Sundai, serving as its founder and an IT Director at Healing Hands Healthcare. With over 3 years of experience in healthcare IT, Christian specializes in cloud infrastructure, cybersecurity, and business process design.
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