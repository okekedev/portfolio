'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Apps() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>Innovation at Your Fingertips 🌟</h1>
        <p>
          Discover our suite of apps designed to empower businesses and individuals with secure, AI-driven solutions. 🚀
        </p>
      </section>

      {/* Apps Section */}
      <section className="projects-section fade-in">
        <h2>Our Apps ✨</h2>
        {/* Apps with App Store Links (Medical Cares, Scroll, Sundai Radio, Sundai Stocks, and Sundai EQ) */}
        <div className="projects-grid projects-grid-links">
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
              An app connecting Medicare beneficiaries with providers, featuring Power BI dashboards. 🩺
            </p>
            <p><strong>Tech Stack:</strong> Power BI, Microsoft Datamart, Swift</p>
            <p>
              Impact: Improved provider visibility and accessibility for over 2 million records.
            </p>
            <p>
              <a
                href="https://apps.apple.com/us/app/find-medicare-providers/id6680199478"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on App Store
              </a>
            </p>
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
              A Bible app curating inspiring verses using AI algorithms for daily reflection. 📖
            </p>
            <p><strong>Tech Stack:</strong> Swift, AI Development</p>
            <p>
              Impact: Provides users with personalized spiritual encouragement.
            </p>
            <p>
              <a
                href="https://apps.apple.com/us/app/scroll/id6497410297"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on App Store
              </a>
            </p>
          </div>
          <div className="project-card">
            <Image
              src="/sundairadio.png"
              alt="Sundai Radio Player"
              width={150}
              height={150}
              quality={75}
              loading="lazy"
            />
            <h3>Sundai Radio Player</h3>
            <p>
              A beautiful, retro-styled web radio player with curated Christian music channels and 1940s-inspired design. 🎵
            </p>
            <p><strong>Tech Stack:</strong> Python, Dash, Docker</p>
            <p>
              Impact: Provides high-quality Christian music streaming with categories including Piano, Lofi, Christian Rap, and more.
            </p>
            <p>
              <a
                href="https://radio.sundai.us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Sundai Radio Player
              </a>
            </p>
          </div>
          <div className="project-card">
            <Image
              src="/sundaistocks.png"
              alt="Sundai Stocks"
              width={300}
              height={150}
              quality={75}
              loading="lazy"
            />
            <h3>Sundai Stocks</h3>
            <p>
              An advanced stock analysis and prediction platform combining technical analysis with AI-powered sentiment analysis. 📈
            </p>
            <p><strong>Tech Stack:</strong> Python, Dash, Docker, Google Gemini AI</p>
            <p>
              Impact: Provides comprehensive market insights with AI+ predictions, news sentiment analysis, and technical indicators.
            </p>
            <p>
              <a
                href="https://stocks.sundai.us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Sundai Stocks
              </a>
            </p>
          </div>
          <div className="project-card">
            <Image
              src="/sundaieq.png"
              alt="Sundai EQ Chrome Extension"
              width={300}
              height={150}
              quality={75}
              loading="lazy"
            />
            <h3>Sundai EQ</h3>
            <p>
              The ultimate YouTube audio equalizer Chrome extension with professional 8-band EQ and live visualizer. 🎵
            </p>
            <p><strong>Tech Stack:</strong> JavaScript, Chrome Extension API, Web Audio API</p>
            <p>
              Impact: Transforms YouTube audio experience with real-time equalizer effects and audio visualization.
            </p>
            <p>
              <a
                href="https://chromewebstore.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Available on Chrome Web Store
              </a>
            </p>
          </div>
        </div>
        {/* Apps with Embedded Videos (Sundai and RoadVision) */}
        <div className="projects-grid projects-grid-videos">
          <div className="project-card">
            <h3>Sundai App</h3>
            <p>
              Secure AI integration for document processing with enterprise-grade security. 🔒
            </p>
            <p><strong>Tech Stack:</strong> React, Python, Microsoft Azure</p>
            <p>
              Impact: Ensures data privacy while enabling efficient document analysis.
            </p>
            <div className="embed-video">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7299500719542288385?compact=1"
                height="399"
                width="100%"
                frameBorder="0"
                allowFullScreen=""
                title="Sundai App Embedded Post"
              ></iframe>
            </div>
          </div>
          <div className="project-card">
            <h3>RoadVision</h3>
            <p>
              An innovative app for road safety and navigation, powered by AI. 🛣️
            </p>
            <p><strong>Tech Stack:</strong> React, AI Development</p>
            <p>
              Impact: Enhances road safety with AI-driven insights.
            </p>
            <div className="embed-video">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7178911923894190080?compact=1"
                height="399"
                width="100%"
                frameBorder="0"
                allowFullScreen=""
                title="RoadVision Embedded Post"
              ></iframe>
            </div>
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