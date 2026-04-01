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
            <a href="mailto:contactus@dekodeglobal.com" className="btn-primary">
              BOOK A DISCOVERY CALL <span style={{ marginLeft: '8px' }}>→</span>
            </a>
          </div>
          
          <div className="footer-cta-right">
            <div className="contact-block">
              <h4>Email</h4>
              <a href="mailto:contactus@dekodeglobal.com" className="contact-link">contactus@dekodeglobal.com</a>
            </div>
            <div className="contact-block" style={{ marginTop: '2.5rem' }}>
              <h4>Phone Number</h4>
              <div className="phone-line">
                <span className="flag" role="img" aria-label="Australia flag">🇦🇺</span>
                <span className="phone-number">+61 421 196 363</span>
              </div>
              <div className="phone-line" style={{ marginTop: '0.8rem' }}>
                <span className="flag" role="img" aria-label="India flag">🇮🇳</span>
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
              <a href="mailto:pm@dekodeglobal.com" className="social-link" style={{ fontSize: '0.8rem' }}>EMAIL</a>
              <a href="#contact" className="social-link" style={{ fontSize: '0.8rem' }}>CALL</a>
            </div>
          </div>
          
          <div className="footer-links-group" style={{ marginLeft: 'auto' }}>
            <h4>Services</h4>
            <ul>
              <li><a href="/#services">AI Strategy & Consulting</a></li>
              <li><a href="/#services">Custom AI Development</a></li>
              <li><a href="/#services">Web & Mobile Dev</a></li>
              <li><a href="/#services">AI E-Commerce</a></li>
              <li><a href="/#services">Cloud & Security</a></li>
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
