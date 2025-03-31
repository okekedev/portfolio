'use client';
import Link from 'next/link';

export default function Licenses() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>Licenses & Certifications 🏆</h1>
        <p>
          Explore the credentials that power Sundai's expertise in secure, AI-driven solutions. 🚀
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
            <p>Skills: Cloud Infrastructure, MDM ☁️</p>
          </div>
          <div className="cert-card">
            <h3>Microsoft 365 Certified: Fundamentals</h3>
            <p><strong>Issuer:</strong> Microsoft</p>
            <p><strong>Issued:</strong> Dec 2023</p>
            <p><strong>Credential ID:</strong> 996061243</p>
            <p>Skills: Microsoft Intune, Microsoft Azure, System Architecture 🌐</p>
          </div>
          <div className="cert-card">
            <h3>CompTIA Security+ ce Certification</h3>
            <p><strong>Issuer:</strong> CompTIA</p>
            <p><strong>Issued:</strong> Nov 2023 · <strong>Expires:</strong> Nov 2026</p>
            <p>Skills: Security, Leadership, Cybersecurity 🔐</p>
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