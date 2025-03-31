import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Sundai. All rights reserved.</p>
      <div className="footer-links">
        <a
          href="https://github.com/okekedev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Sundai's GitHub profile"
        >
          <FaGithub className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/christianokeke/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Christian Okeke's LinkedIn profile"
        >
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}