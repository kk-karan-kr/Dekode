import React, { useState, useEffect } from 'react';
import './Contact.css';

// Assets
import contactBanner from '../assets/contact-banner.png';
import contactMap from '../assets/contact-map.png';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly do you respond?",
      answer: "Typically within 24 hours on business days. For urgent requests, WhatsApp is fastest."
    },
    {
      question: "Do you work with businesses outside Australia?",
      answer: "Yes. We work globally and our team is experienced in remote and cross-timezone delivery."
    },
    {
      question: "How much does it cost?",
      answer: "It depends on the scope. We’ll give you a clear, transparent estimate after the discovery call. No hidden fees, no surprises."
    },
    {
      question: "Do I need to know what I want before reaching out?",
      answer: "Not at all. Many of our clients start with a rough idea or a problem they need help defining. That’s exactly what the discovery call is for."
    },
    {
      question: "Can you work with our existing team or tools?",
      answer: "Absolutely. We integrate with your stack, your workflows, and your people. We’re here to complement what you already have, not replace it."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-container contact-page-v2">

      {/* SECTION 1: HERO (Deep Blue) */}
      <section className="contact-hero-section">
        {/* Animated Background Orbs */}
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
        
        <div className="container hero-split-grid">
          <div className="hero-text-block animate-on-scroll fade-up">
            <h1 className="hero-title">
              Let's figure out the right <br/><span className="text-yellow">next step, together</span>
            </h1>
            <p className="hero-subtitle">
              Whether you’re exploring AI, modernising your systems, building a new product, or just trying to make sense of where to start, we’re here to help. No pitch. No pressure. Just a conversation about what you need and how we can help you get there.
            </p>
          </div>
          <div className="hero-graphic-block animate-on-scroll fade-left">
            <img src={contactBanner} alt="Dekode Contact" className="hero-banner-img" />
          </div>
        </div>
      </section>

      {/* SECTION 2: FORM & INFO (White Background) */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-info-grid">
            
            {/* Left Column: Form */}
            <div className="form-column animate-on-scroll fade-up">
              <h2 className="dark-section-title">
                Tell Us About <span className="text-blue">Your Project</span>
              </h2>
              
              <div className="form-wrapper">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <input type="text" id="fullName" placeholder="Full Name*" required className="form-input" />
                    <input type="email" id="email" placeholder="Email*" required className="form-input" />
                  </div>
                  
                  <div className="form-row">
                    <input type="text" id="company" placeholder="Company / Project (Optional)" className="form-input" />
                    <div className="select-container">
                      <select id="lookingFor" className="form-input select-input" required defaultValue="">
                        <option value="" disabled>What are you looking for?</option>
                        <option value="ai">AI Integration</option>
                        <option value="modernisation">System Modernisation</option>
                        <option value="new-product">New Product Development</option>
                        <option value="consulting">Consulting / Strategy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row full-width">
                    <textarea id="message" placeholder="Message" rows="6" className="form-input textarea-input" required></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Submit 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Info Cards */}
            <div className="info-column animate-on-scroll fade-left" style={{animationDelay: '0.1s'}}>
              
              <div className="info-box gradient-box">
                <h3 className="box-title">Book a <span className="text-blue">Discovery Call</span></h3>
                <p className="box-desc">
                  The fastest way to get started. We’ll spend 30 minutes understanding your goals, challenges, and priorities, then map out a clear path forward.
                </p>
                <a href="mailto:contactus@dekodeglobal.com" className="schedule-btn-small" style={{ textDecoration: 'none' }}>
                  SCHEDULE A 30-MINUTE STRATEGY CALL <span className="arrow">→</span>
                </a>
                
                {/* CSS Phone Placeholder */}
                <div className="css-phone-graphic small-phone">
                  <div className="phone-base">
                     <div className="phone-dial">
                       {[...Array(12)].map((_, i) => <div key={i} className="dial-btn"></div>)}
                     </div>
                     <div className="phone-receiver"><div className="coil-cord"></div></div>
                  </div>
                </div>
              </div>

              <div className="info-box outline-box">
                <h3 className="box-title dark">Get in touch</h3>
                <p className="box-desc dark">Prefer to reach out directly? We’re available by email, phone, or WhatsApp. Whichever works best for you.</p>
                
                <div className="contact-list">
                  <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <a href="mailto:contactus@dekodeglobal.com" className="contact-link blue-link">contactus@dekodeglobal.com</a>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-label">Phone Number</span>
                    <div className="phone-group">
                      <a href="tel:+61421196363" className="contact-link dark-link phone-line-contact">
                        <span className="flag">🇦🇺</span>
                        <span className="phone-number">+61 421 196 363</span>
                      </a>
                      <a href="tel:+918882848489" className="contact-link dark-link phone-line-contact">
                        <span className="flag">🇮🇳</span>
                        <span className="phone-number">+91 88828 48489</span>
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <span className="contact-label">WhatsApp</span>
                    <a href="https://wa.me/61421196363" className="contact-link green-link whatsapp-line-contact" target="_blank" rel="noopener noreferrer">
                      <span className="whatsapp-icon">💬</span>
                      <span className="phone-number">+61 421 196 363</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS (Blue Gradients) */}
      <section className="contact-process-section wrapper-blue">
        <div className="container animate-on-scroll fade-up">
          <h2 className="title-center">What Happens After <span className="text-yellow">You Reach Out</span></h2>
          <p className="subtitle-center">We keep things simple from the very first conversation.</p>
          
          <div className="process-cards">
            <div className="proc-card animate-on-scroll fade-up" style={{animationDelay: '0.1s'}}>
              <div className="proc-num">01</div>
              <h3 className="proc-title">You get in touch</h3>
              <p className="proc-desc">Via the form, email, phone, or WhatsApp.</p>
            </div>
            
            <div className="proc-card animate-on-scroll fade-up" style={{animationDelay: '0.2s'}}>
              <div className="proc-num">02</div>
              <h3 className="proc-title">We listen</h3>
              <p className="proc-desc">No sales script. We learn about your business, your goals, and what’s not working.</p>
            </div>
            
            <div className="proc-card animate-on-scroll fade-up" style={{animationDelay: '0.3s'}}>
              <div className="proc-num">03</div>
              <h3 className="proc-title">We recommend a path</h3>
              <p className="proc-desc">A clear, honest next step. Sometimes that’s a full engagement. Sometimes it’s a quick fix. Sometimes it’s advice and a handshake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MAP & LOCATIONS */}
      <section className="contact-map-section animate-on-scroll fade-up">
        {/* Real Image Map */}
        <div className="world-map-container">
           <img src={contactMap} alt="Dekode Map Locations" className="world-map-image" />
        </div>

        <div className="container map-overlay-container">
          <div className="locations-floating-card">
            <h3 className="floating-title">Where We Work</h3>
            <p className="floating-desc">
              DEKODE operates across Australia and India, delivering remotely and on-site depending on what the project needs. Our team is distributed, responsive, and built to work across time zones.
            </p>
            <div className="loc-list">
              <div className="loc-item">
                <span className="loc-flag">🇦🇺</span>
                <p><strong>Australia</strong> - Little Collins Street, Melbourne, Vic 3000</p>
              </div>
              <div className="loc-item">
                <span className="loc-flag">🇮🇳</span>
                <p><strong>India</strong> - New Delhi 110018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ (White Background) */}
      <section className="contact-faq-section wrapper-white">
        <div className="container faq-split-grid animate-on-scroll fade-up">
          
          <div className="faq-intro-column">
             <h2 className="dark-section-title">Frequently Asked <br/>Questions</h2>
             <div className="css-3d-question-mark">
                <div className="speech-bubble">
                   <span>?</span>
                </div>
             </div>
          </div>

          <div className="faq-accordion-column">
             <div className="accordion-wrapper">
               {faqs.map((faq, index) => (
                 <div 
                   key={index} 
                   className={`acc-item ${activeFaq === index ? 'active' : ''}`}
                   onClick={() => toggleFaq(index)}
                 >
                   <div className="acc-question">
                     {faq.question}
                     <span className="acc-icon">{activeFaq === index ? '−' : '+'}</span>
                   </div>
                   <div 
                     className="acc-answer-wrapper"
                     style={{
                       maxHeight: activeFaq === index ? '200px' : '0',
                       opacity: activeFaq === index ? 1 : 0
                     }}
                   >
                     <div className="acc-answer">{faq.answer}</div>
                   </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
