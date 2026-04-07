import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const team = [
    { name: 'Pankaj Banga', role: 'Founder' },
    { name: 'Guneet Uppal', role: 'Principal Consultant' },
    { name: 'Ronny Garg', role: 'Principal Consultant' },
    { name: 'Tayyab Qureshi', role: 'Delivery Lead' },
    { name: 'Bharat Shori', role: 'QA Head' },
    { name: 'Kris Ganugapati', role: 'QA Lead' },
    { name: 'Raushan Kumar', role: 'Technical Lead' }
  ];

  return (
    <footer id="contact" className="modern-footer">
      <div className="container footer-content">
        <div className="footer-cta-container">
          <div className="footer-cta-left">
            <h2>
              Ready to turn an<br />
              AI idea into a<br />
              <span className="highlight-yellow">working product?</span>
            </h2>
            <p>
              If you’re exploring AI, modernising systems, improving user experience, 
              or building something new, DEKODE can help. Start with a discovery call 
              and we’ll map the fastest path to a secure, usable outcome.
            </p>
            <a href="https://calendly.com/dekodeglobal/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              BOOK A DISCOVERY CALL <span style={{ marginLeft: '8px' }}>→</span>
            </a>
          </div>

          <div className="footer-cta-right">
            <div className="contact-block">
              <h4>Email</h4>
              <a href="mailto:contactus@dekodeglobal.com" className="footer-email-link">contactus@dekodeglobal.com</a>
            </div>
            <div className="contact-block" style={{ marginTop: '2.5rem' }}>
              <h4>Phone Number</h4>
              <div className="phone-line">
                <span className="country-code">AU</span>
                <span className="phone-number">+61 421 196 363</span>
              </div>
              <div className="phone-line" style={{ marginTop: '0.8rem' }}>
                <span className="country-code">IN</span>
                <span className="phone-number">+91 88828 48489</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo-text" style={{ textDecoration: 'none', color: '#ffffff' }}>DEKODE</Link>
            <p className="footer-mission">
              Making technology work for the people who use it. No jargon. No bloated scopes.
            </p>
            <div className="social-links">
              <a href="mailto:contactus@dekodeglobal.com" className="social-link" title="Email Us">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href="tel:+61421196363" className="social-link" title="Call Us">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><a href="/services#ai-strategy">AI Strategy & Consulting</a></li>
              <li><a href="/services#custom-ai">Custom AI Development</a></li>
              <li><a href="/services#web-mobile">Web & Mobile Dev</a></li>
              <li><a href="/services#ecommerce">AI E-Commerce</a></li>
              <li><a href="/services#cloud-it">Cloud & Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={{ color: '#ffffff' }}>&copy; {new Date().getFullYear()} DEKODE Consultancy. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
