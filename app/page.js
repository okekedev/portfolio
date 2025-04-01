'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>Sundai: Innovate with Confidence 🌟</h1>
        <p>
          A company focused on bridging the gap between technology, processes, and people. 🚀
        </p>
        <Link href="/contact">
          <button className="cta-button">Get Started Today</button>
        </Link>
      </section>

      {/* Overview Section */}
      <section className="about-section fade-in">
        <h2>Welcome to Sundai 🏢</h2>
        <p>
          Sundai is a pioneering business dedicated to delivering solutions for modern enterprises. Our mission is to empower businesses by providing innovative tools that enhance operational efficiency, and provide seamless accessibility.
        </p>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/about">
            <button className="cta-button">Learn More About Us</button>
          </Link>
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Services Overview */}
      <section className="features-section fade-in">
        <h2>Our Services ✨</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem' }}>
          From consulting to app development, Sundai offers a range of services to transform your business.
        </p>
        <div className="features">
          <div className="card">
            <Image
              src="/tech-workspace-4.jpg"
              alt="Consulting Services"
              width={80}
              height={80}
              quality={75}
            />
            <h3>Consulting Services</h3>
            <p>
              Expert guidance in healthcare IT, cybersecurity, and cloud infrastructure.
            </p>
            <Link href="/consulting-services">
              <button className="cta-button">Explore Consulting</button>
            </Link>
          </div>
          <div className="card">
            <Image
              src="/ai-concept-1.jpg"
              alt="Apps"
              width={80}
              height={80}
              quality={75}
            />
            <h3>Apps</h3>
            <p>
              Innovative apps like Sundai, Medical Cares, and Scroll to empower your business.
            </p>
            <Link href="/apps">
              <button className="cta-button">Discover Our Apps</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Credentials Overview */}
      <section className="about-section fade-in">
        <h2>Our Credentials 🏆</h2>
        <p>
          Sundai's team is backed by industry-leading certifications, ensuring top-tier expertise in every project.
        </p>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/licenses">
            <button className="cta-button">View Certifications</button>
          </Link>
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>

      {/* Call to Action */}
      <section className="features-section fade-in">
        <h2>Ready to Partner with Sundai? 🚀</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          Contact us today to explore how Sundai can help your business thrive with secure, innovative solutions.
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