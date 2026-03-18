import React, { useState, useEffect } from 'react';
import './PortfolioShowcase.css';

const PortfolioShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'AttendMe',
      client: 'Physical Premises Tracking',
      platform: 'Cloud / Proprietary',
      core: 'Records movement of children, staff, and visitors as they arrive or leave the premises.',
      features: 'Incident reporting and automated medical care documentation for children.'
    },
    {
      id: 2,
      title: 'Estrado',
      client: 'Melbourne Retail Tech Start-up',
      platform: 'iPad and Web',
      core: 'Smart Point of Sale (POS) solution replacing traditional systems with an intuitive iPad interface.',
      features: 'Integrated web management console for real-time inventory and sales tracking.'
    },
    {
      id: 3,
      title: 'CHAUFFR',
      client: 'Logistics / Transport',
      platform: 'Android, iOS, and Web',
      core: 'Mobile application and web portal for professional chauffeurs to manage bookings on the go.',
      features: 'Real-time booking management, integrated driver scheduling, and client portals.'
    },
    {
      id: 4,
      title: 'Smart Loan Helper',
      client: 'Smart Money Solutions (AU)',
      platform: 'iOS and Android',
      core: 'Unified platform for mortgage calculations and borrowing capacity assessment.',
      features: 'Repayment calculators, stamp duty assessment, and persistent calculation recording.'
    },
    {
      id: 5,
      title: 'SmartBroker',
      client: 'Melbourne Fintech Start-up',
      platform: 'iOS and Web',
      core: 'Professional relationship management platform for mortgage brokers and their clients.',
      features: 'Mobile-first client management, document tracking, and real-time status updates.'
    },
    {
      id: 6,
      title: 'Recycled Market',
      client: 'Sustainable E-Commerce',
      platform: 'Responsive Web',
      core: 'Browser-independent online marketplace for products crafted from recycled materials.',
      features: 'Fully integrated custom CMS and highly responsive shopping experience.'
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
          <h2 className="section-title text-gradient">Projects</h2>
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
                  <div className="project-card">
                    <div className="project-info">
                      <span className="project-client">{project.client}</span>
                      <h3>{project.title}</h3>
                      <div className="project-description">
                        <h4>Core Functionality</h4>
                        <p>{project.core}</p>
                      </div>
                      <div className="project-description">
                        <h4>Key Features</h4>
                        <p>{project.features}</p>
                      </div>
                    </div>

                    <div className="project-meta">
                      <div className="meta-item">
                        <h5>Platform</h5>
                        <p>{project.platform}</p>
                      </div>
                      <div className="meta-item">
                        <h5>Project Type</h5>
                        <p>Technical Delivery</p>
                      </div>
                      <div className="meta-item">
                        <h5>Status</h5>
                        <p>Live / Production</p>
                      </div>
                      <div className="meta-item">
                        <h5>Innovation</h5>
                        <p>High</p>
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
