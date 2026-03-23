import React, { useState } from 'react';
import './PortfolioShowcase.css';

// Import images and logos
import attendmeImg from '../assets/attendme.jpg';
import attendmeLogo from '../assets/attendme_logo.png';
import chauffrImg from '../assets/Chauffr.jpg';
import chauffrLogo from '../assets/chauffr_logo.png';
import smartLoanImg from '../assets/Smart-Loan.jpg';
import smartLoanLogo from '../assets/smart-loan-helper-logo.png';
import smartBrokerImg from '../assets/Smart-Broker.png';
import smartBrokerLogo from '../assets/smartbroker-logo.png';
import recycledImg from '../assets/Recycled.png';
import recycledLogo from '../assets/recycled_logo.png';

const PortfolioShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'AttendMe',
      image: attendmeImg,
      logo: attendmeLogo,
      bgColor: '#EBF4FE',
      paragraphs: [
        'AttendMe helps you record the movement of all children, staff and visitors as they arrive or leave your premises.',
        'This system also records and reports incidents where children require medical care.'
      ]
    },
    {
      id: 2,
      title: 'CHAUFFR',
      image: chauffrImg,
      logo: chauffrLogo,
      bgColor: '#FCEEF0',
      paragraphs: [
        'CHAUFFR is a mobile app that helps chauffeurs receive and manage bookings on the go.',
        'We designed and developed a mobile app for Android and iOS devices and an integrated web portal.'
      ]
    },
    {
      id: 3,
      title: 'Smart Loan Helper',
      image: smartLoanImg,
      logo: smartLoanLogo,
      bgColor: '#E3F1FF',
      paragraphs: [
        'Smart Loan Helper unifies various home loan calculators for home buyers looking to buy their first home, investment property or refinance. The app enables buyers to perform, record and access various mortgage calculations, determine borrowing capacity, repayments, stamp duty and much more.',
        'We created the iOS and Android version of the app for Smart Money Solutions, an independent mortgage broker in Australia.'
      ]
    },
    {
      id: 4,
      title: 'SmartBroker',
      image: smartBrokerImg,
      logo: smartBrokerLogo,
      bgColor: '#FDF6E2',
      paragraphs: [
        'SmartBroker is a Melbourne-based start-up that aims to provide a simple platform for mortgage brokers and their clients to manage their relationships on the go.',
        'We designed and delivered a web and iOS SmartBroker app.'
      ]
    },
    {
      id: 5,
      title: 'Recycled Market',
      image: recycledImg,
      logo: recycledLogo,
      bgColor: '#E3FDF4',
      paragraphs: [
        'Recycled Market is an online market for products made from recycled products.',
        'We designed and developed a browser-independent responsive web portal with integrated CMS.'
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A curated showcase of our technical delivery and product innovation.</p>
        </div>

        <div className="projects-carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className="projects-window">
            <div 
              className="projects-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`project-slide ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="portfolio-slide-content">
                    {/* Left Side: App Images with specific background color */}
                    <div className="portfolio-graphics" style={{ backgroundColor: project.bgColor }}>
                      <img src={project.image} alt={`${project.title} Interface`} className="portfolio-main-img" />
                    </div>

                    {/* Right Side: Logo and Description */}
                    <div className="portfolio-details">
                      <div className="portfolio-logo-wrapper">
                        <img src={project.logo} alt={`${project.title} Logo`} className="portfolio-logo" />
                      </div>
                      <div className="portfolio-text">
                        {project.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="carousel-pagination">
          {projects.map((_, index) => (
            <div 
              key={index} 
              className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
