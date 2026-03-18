import React from 'react';
import './ServicesGrid.css';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: 'AI Strategy & Consulting',
      shortDesc: 'Turn AI uncertainty into a clear roadmap and ROI path.',
      fullDesc: 'We help you define a prioritized list of use cases, assess AI readiness, and map practical opportunities.'
    },
    {
      id: 2,
      title: 'Custom AI Development',
      shortDesc: 'Build AI solutions that actually fit your specific needs.',
      fullDesc: 'From machine learning to generative AI, we build internal copilots and tailored knowledge systems.'
    },
    {
      id: 3,
      title: 'Web & Mobile Dev',
      shortDesc: 'Apps and portals people actually want to adopt.',
      fullDesc: 'Full lifecycle development from prototype to production. We build web apps, iOS/Android apps, and UX design.'
    },
    {
      id: 4,
      title: 'AI-Powered E-Commerce',
      shortDesc: 'Modern commerce experiences that convert and scale.',
      fullDesc: 'Leverage personalized product recommendations, intelligent search, and automated inventory.'
    },
    {
      id: 5,
      title: 'Integrations & Automation',
      shortDesc: 'Connect your stack and automate custom workflows.',
      fullDesc: 'We reduce operational load through custom APIs, payment integrations, and deep business process automation.'
    },
    {
      id: 6,
      title: 'Cloud, IT & Security',
      shortDesc: 'Secure, scalable foundations and structural hardening.',
      fullDesc: 'End-to-end cloud migration (AWS, Azure, GCP), ongoing infrastructure management, and security reviews.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Capabilities</h2>
          <p className="section-subtitle">
            AI, product development, cloud, and security—delivered seamlessly by a single expert partner. No patchwork vendors. No handoff gaps.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card-wrapper">
              <div className="card-container">
                <div className="card-content">
                  <div className="card-title-box">
                    <div className="title-text">{service.title}</div>
                  </div>
                  
                  <div className="card-body-box">
                    <p className="service-short-desc">{service.shortDesc}</p>
                  </div>

                  <div className="card-footer-box">
                    <p className="service-full-desc">{service.fullDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
