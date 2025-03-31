'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on change
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Basic client-side validation
    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Construct mailto URL
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:cokeke@sundai.us?subject=${subject}&body=${body}`;

    // Reset form and show confirmation
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(true);
    setError('');

    // Hide confirmation message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

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
        <h1>Contact Sundai 🌟</h1>
        <p>
          Get in touch with us to explore how Sundai can help your business thrive. 🚀
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="features-section fade-in">
        <h2>Send Us a Message 📧</h2>
        {isSubmitted && (
          <p style={{ textAlign: 'center', color: '#D97706', marginBottom: '1rem' }}>
            Thank you! Your message has been prepared. Please send it from your email client.
          </p>
        )}
        {error && (
          <p style={{ textAlign: 'center', color: '#ff0000', marginBottom: '1rem' }}>
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button type="submit" className="cta-button">Send Message</button>
          </div>
        </form>
      </section>
    </main>
  );
}