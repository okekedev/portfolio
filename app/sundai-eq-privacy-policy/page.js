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

export default function SundaiEQPrivacyPolicy() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>
          <FadeInText text="Sundai EQ Privacy Policy 🔒" />
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
          This Privacy Policy describes how E&J Products LLC dba Sundai ("we," "us," or "our") collects, uses, and shares your personal information when you use our Sundai EQ Chrome extension ("the Extension").
        </p>
        <p>
          By using the Extension, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h3>1. Information We Collect</h3>
        
        <h4>1.1. Information You Provide</h4>
        <p>
          We collect minimal information that you voluntarily provide when using our Extension, which may include equalizer settings and presets you create, audio preference configurations, and feedback and support requests you submit.
        </p>
        
        <h4>1.2. Information Collected Automatically</h4>
        <p>
          We collect certain information automatically when you use the Extension including browser information (version, operating system), extension usage statistics and performance data, error logs to improve extension functionality, and YouTube audio interaction data (for equalizer functionality only).
        </p>
        
        <h3>2. How We Use Your Information</h3>
        <p>
          We use the information we collect to provide and maintain the Extension's audio equalizer functionality, to remember your equalizer settings between YouTube sessions, to improve and personalize your audio experience, to respond to your requests and support needs, to monitor and analyze usage patterns and trends, and to detect, prevent, and address technical issues.
        </p>

        <h3>3. YouTube Integration and Audio Processing</h3>
        <p>
          Sundai EQ enhances your YouTube audio experience. The Extension processes YouTube audio in real-time for equalizer effects. Audio processing happens locally in your browser - no audio data is transmitted to our servers. We only access YouTube's audio stream to apply equalizer effects and visualizations. Your YouTube viewing habits and personal data remain private. The Extension does not interfere with YouTube's functionality beyond audio enhancement.
        </p>

        <h3>4. Local Storage and Data Privacy</h3>
        <p>
          Sundai EQ is designed with privacy in mind. Your equalizer settings are stored locally in your browser. Audio processing occurs entirely within your device. We do not collect or store your YouTube usage data. No personal audio content is transmitted to our servers.
        </p>

        <h3>5. Data Sharing</h3>
        <p>
          We do not sell or rent your personal information to third parties. We may share information in the following limited circumstances: with service providers who help us operate the Extension (e.g., analytics providers), if required by law or to respond to legal process, to protect our rights, property, or safety, or that of our users or others, and in connection with a business transfer, such as a merger or acquisition.
        </p>

        <h3>6. Chrome Web Store and Browser Permissions</h3>
        <p>
          When you install our Extension through the Chrome Web Store: Google processes your information according to their privacy policy, we request only the minimum necessary permissions for audio processing, the Extension requires access to YouTube tabs to provide equalizer functionality, and storage permission is used only to save your equalizer preferences locally.
        </p>

        <h3>7. Data Security</h3>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Since most data processing occurs locally in your browser, your information remains under your control.
        </p>

        <h3>8. Your Rights and Choices</h3>
        <p>
          Depending on your location, you may have certain rights regarding your personal information including access and review the information we have about you, request correction of inaccurate data, request deletion of your data, restrict or object to certain processing activities, data portability, and uninstall the Extension at any time to stop all data collection.
        </p>
        <p>
          To exercise these rights, please contact us using the details provided below.
        </p>

        <h3>9. Children's Privacy</h3>
        <p>
          The Extension is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13.
        </p>

        <h3>10. Third-Party Services</h3>
        <p>
          Our Extension enhances YouTube functionality but does not control YouTube's data practices. Please review YouTube's privacy policy for information about how they handle your data when using their platform.
        </p>

        <h3>11. Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically for any changes.
        </p>

        <h3>12. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <p>
          E&J Products LLC dba Sundai<br />
          Email: <a href="mailto:cokeke@sundai.us">cokeke@sundai.us</a>
        </p>
        <p>
          Last Updated: June 2, 2025
        </p>
      </section>

      {/* Retro Divider */}
      <div className="retro-divider"></div>
    </main>
  );
}