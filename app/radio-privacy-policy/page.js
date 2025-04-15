'use client';

import { useState, useEffect } from 'react';

const FadeInText = ({ text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <span className={`fade-in-text ${isVisible ? 'visible' : ''}`}>{text}</span>;
};

export default function PrivacyPolicy() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>
          <FadeInText text="Sunday Tuner Privacy Policy 🔒" />
        </h1>
        <p>
          <FadeInText
            text="Your privacy is important to us. This policy explains how we collect, use, and protect your information. 🎵"
            delay={500}
          />
        </p>
      </section>

      {/* Privacy Policy Section */}
      <section className="about-section fade-in">
        <h2>Privacy Policy</h2>
        <p>
          This Privacy Policy describes how E&J Products LLC dba Sundai ("we," "us," or "our") collects, uses, and shares your personal information when you use our Sunday Tuner application ("the App").
        </p>
        <p>
          By using the App, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h3>1. Information We Collect</h3>
        
        <h4>1.1. Information You Provide</h4>
        <p>
          We collect minimal information that you voluntarily provide when using our App, which may include:
        </p>
        <ul>
          <li>User preferences for audio stations</li>
          <li>Sleep timer settings</li>
          <li>Feedback and support requests you submit</li>
        </ul>
        
        <h4>1.2. Information Collected Automatically</h4>
        <p>
          We collect certain information automatically when you use the App:
        </p>
        <ul>
          <li>Device information (model, operating system version)</li>
          <li>App usage statistics and performance data</li>
          <li>Error logs to improve app functionality</li>
        </ul>
        
        <h3>2. How We Use Your Information</h3>
        <p>
          We use the information we collect for the following purposes:
        </p>
        <ul>
          <li>To provide and maintain the App's functionality</li>
          <li>To improve and personalize your experience</li>
          <li>To respond to your requests and support needs</li>
          <li>To monitor and analyze usage patterns and trends</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>

        <h3>3. Third-Party Audio Content</h3>
        <p>
          Sunday Tuner provides access to audio content through iHeartRadio:
        </p>
        <ul>
          <li>When you play audio content, you are streaming directly from iHeartRadio</li>
          <li>Your interaction with iHeartRadio content is subject to their privacy policies</li>
          <li>We do not control or take responsibility for how iHeartRadio may collect or use your data</li>
        </ul>

        <h3>4. Data Sharing</h3>
        <p>
          We do not sell or rent your personal information to third parties. We may share information in the following limited circumstances:
        </p>
        <ul>
          <li>With service providers who help us operate the App (e.g., analytics providers)</li>
          <li>If required by law or to respond to legal process</li>
          <li>To protect our rights, property, or safety, or that of our users or others</li>
          <li>In connection with a business transfer, such as a merger or acquisition</li>
        </ul>

        <h3>5. Apple App Store</h3>
        <p>
          When you download our App through the App Store:
        </p>
        <ul>
          <li>Apple processes your information according to their privacy policy</li>
          <li>We receive only limited information necessary to provide our services</li>
          <li>We do not have access to your payment method details</li>
        </ul>

        <h3>6. Data Security</h3>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h3>7. Your Rights and Choices</h3>
        <p>
          Depending on your location, you may have certain rights regarding your personal information:
        </p>
        <ul>
          <li>Access and review the information we have about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Restrict or object to certain processing activities</li>
          <li>Data portability</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the details provided below.
        </p>

        <h3>8. Children's Privacy</h3>
        <p>
          The App is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13.
        </p>

        <h3>9. Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically for any changes.
        </p>

        <h3>10. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <p>
          E&J Products LLC dba Sundai<br />
          Email: <a href="mailto:cokeke@sundai.us">cokeke@sundai.us</a>
        </p>
        <p>
          Last Updated: April 15, 2025
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>
    </main>
  );
}