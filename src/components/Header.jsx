import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo-container">
          <div className="logo-glow"></div>
          <Link to="/" className="logo-text" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>DEK<span className="logo-accent">O</span>DE</Link>
        </div>
        
        <nav className="desktop-nav">
          <ul>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/#services" className="nav-link">Services</Link></li>
            <li><Link to="/#methodology" className="nav-link">Methodology</Link></li>
            <li><Link to="/bridge" className="nav-link">Bridge</Link></li>
          </ul>
        </nav>
        
        <div className="cta-container desktop-only">
          <a href="mailto:pm@dekodeglobal.com" className="btn-primary glow-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Book Discovery Call
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/#services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to="/#methodology" className="mobile-nav-link" onClick={closeMobileMenu}>Methodology</Link></li>
          <li><Link to="/bridge" className="mobile-nav-link" onClick={closeMobileMenu}>Bridge</Link></li>
        </ul>
        <div className="mobile-nav-cta">
          <a href="mailto:pm@dekodeglobal.com" className="btn-primary glow-btn w-full text-center block" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
            Book Discovery Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
