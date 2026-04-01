import React from 'react';
import './ServicesGrid.css';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: 'AI Strategy & Consulting',
      shortDesc: 'Turn AI uncertainty into a roadmap, prioritised use cases, and a clear ROI path.',
      items: [
        'AI strategy',
        'Opportunity mapping',
        'Responsible AI guidance'
      ]
    },
    {
      id: 2,
      title: 'Custom AI Development',
      shortDesc: 'Build practical AI solutions that fit your needs, from machine learning to generative AI.',
      items: [
        'Bespoke AI development',
        'ML development',
        'Generative AI solutions'
      ]
    },
    {
      id: 3,
      title: 'Web & Mobile Development',
      shortDesc: 'Build apps and portals people actually adopt, from prototype to production.',
      items: [
        'Web apps',
        'iOS/Android apps',
        'User experience (UX) design',
        'Internal tools'
      ]
    },
    {
      id: 4,
      title: 'E-Commerce + AI Experiences',
      shortDesc: 'Modern e-commerce builds and AI-powered shopping experiences that convert and scale.',
      items: [
        'AI-powered e-commerce development',
        'Performance and UX optimisation'
      ]
    },
    {
      id: 5,
      title: 'Integrations + Automation',
      shortDesc: 'Connect your stack and automate workflows to reduce operational load.',
      items: [
        'Payment integrations',
        'Chat/text/email integrations',
        'Custom APIs',
        'DevOps'
      ]
    },
    {
      id: 6,
      title: 'Cloud, Managed IT + Security',
      shortDesc: 'Secure, scalable foundations with ongoing management and hardening.',
      items: [
        'Cloud migration (AWS, Azure, GCP)',
        'Infrastructure management',
        'Security posture',
        'Ongoing support'
      ]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Header removed as requested; "Everything you need..." sits directly above this component in Home.jsx */}
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

                  <div className="card-footer-box" style={{ marginTop: '1rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {service.items.map((item, index) => (
                        <li key={index} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--color-accent-blue)', fontSize: '1rem', fontWeight: 'bold' }}>→</span> {item}
                        </li>
                      ))}
                    </ul>
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
