import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import LazySection from '../components/LazySection';
import AuroraBackground from '../components/AuroraBackground';
import './Home.css';

const ServicesGrid = lazy(() => import('../components/ServicesGrid'));
const DeliveryFlow = lazy(() => import('../components/DeliveryFlow'));
const PortfolioShowcase = lazy(() => import('../components/PortfolioShowcase'));
const AnimatedOutcomes = lazy(() => import('../components/AnimatedOutcomes'));



/* Fades a section in when it enters the viewport */
const FadeInSection = ({ children, delay = 0, style = {} }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          setVisible(true); 
          observer.disconnect(); 
        } 
      },
      { rootMargin: '0px 0px -100px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section - Loads Immediately */}
      <section className="home-hero">
        <AuroraBackground showRadialGradient={true} className="home-hero-aurora">
          <div className="container hero-content text-center">
            <div className="aurora-hero-inner">
              <h1 className="hero-headline aurora-hero-fade mb-6">
                Future-proof your business and people with{' '}
                <span className="highlight-yellow">secure AI</span>{' '}and{' '}
                <span className="highlight-blue">scalable IT foundations</span>
              </h1>
              <p className="hero-subheadline aurora-hero-fade mx-auto" style={{ animationDelay: '0.15s' }}>
                We combine AI consultancy, solution development, infrastructure, and security to deliver real systems your team can adopt from day one.
              </p>
              <div className="hero-actions aurora-hero-fade" style={{ animationDelay: '0.3s' }}>
                <a href="mailto:pm@dekodeglobal.com" className="btn-primary">Book a Discovery Call</a>
                <Link to="/#services" className="btn-secondary">EXPLORE CAPABILITIES</Link>
              </div>
            </div>
          </div>
        </AuroraBackground>
      </section>

      {/* Services Section */}
      <LazySection minHeight="16vh" rootMargin="500px">
        <section id="services" className="py-20 bg-dark-layer">
          <Suspense fallback={<div style={{ minHeight: '40rem' }} />}>
            <FadeInSection>
              <div className="container text-center mb-16">
                <h2 className="section-title">Everything you need for <span className="glow-text-blue">real-world adoption</span></h2>
                <p className="section-subtitle">Strategy is only useful when it ships. We bring AI, infrastructure, and security together so your solution works in the real world, not just in a demo.</p>
              </div>
              <ServicesGrid />
            </FadeInSection>
          </Suspense>
        </section>
      </LazySection>


      {/* Methodology Section */}
      <LazySection minHeight="16vh" rootMargin="500px">
        <section id="methodology" className="py-20">
          <Suspense fallback={<div style={{ minHeight: '35rem' }} />}>
            <FadeInSection>
              <div className="container text-center mb-16">
                <h2 className="section-title">A simple <span className="glow-text-blue">delivery flow</span> that reduces risk</h2>
                <p className="section-subtitle">Clear steps. Clean scope. Security built in. We move from discovery to launch, then stay with you to run and improve what we build.</p>
              </div>
              <DeliveryFlow />
            </FadeInSection>
          </Suspense>
        </section>
      </LazySection>


      {/* Outcomes Section */}
      <LazySection minHeight="16vh" rootMargin="500px">
        <section className="py-20 bg-dark-layer">
          <Suspense fallback={<div style={{ minHeight: '35rem' }} />}>
            <FadeInSection>
              <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="section-title text-left">What changes after DEKODE builds with you</h2>
                    <p className="section-subtitle text-left mb-8">Practical improvements you can measure, across operations, decision-making, adoption, and security.</p>
                  </div>
                  <div className="outcomes-list">
                    <AnimatedOutcomes
                      outcomes={[
                        "Faster execution through automation and AI-assisted workflows",
                        "Better decisions with reliable data and intelligent insights",
                        "Reduced operational load on teams",
                        "Higher adoption through intuitive UI and streamlined user journeys",
                        "Stronger security posture while adopting new AI capabilities",
                        "Infrastructure that scales as your business grows"
                      ]}
                    />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </Suspense>
        </section>
      </LazySection>

      {/* Principles Section */}
      <LazySection minHeight="16vh" rootMargin="500px">
        <section className="py-20">
          <Suspense fallback={<div style={{ minHeight: '35rem' }} />}>
            <FadeInSection>
              <div className="container text-center mb-16">
                <h2 className="section-title">Practical <span className="glow-text-blue">delivery</span>, not hype</h2>
                <p className="section-subtitle">We don't just advise. We design, build, secure, and support systems that your team can use from day one, and improve over time.</p>
              </div>
              <div className="principles-grid container">
                {[
                  { title: "Practical AI, not hype", desc: "Focused on outcomes your team can actually use" },
                  { title: "UI that drives adoption", desc: "Interfaces built for clarity, speed, and real workflows" },
                  { title: "Simple by default", desc: "Clear communication, clean scope, no jargon" },
                  { title: "Security-first", desc: "Governance and protection embedded from day one" },
                  { title: "Sustainable foundations", desc: "Maintainable systems and cost-aware infrastructure" },
                  { title: "Long-term partner mindset", desc: "Build it, run it, improve it" },
                ].map((item, i) => (
                  <div key={i} className="principle-card">
                    <div className="principle-icon-wrapper">
                      <svg className="principle-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h3 className="principle-title">{item.title}</h3>
                    <p className="principle-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </Suspense>
        </section>
      </LazySection>

      {/* Portfolio Showcase */}
      <LazySection minHeight="16vh" rootMargin="500px">
        <Suspense fallback={<div style={{ minHeight: '40rem' }} />}>
          <FadeInSection>
            <PortfolioShowcase />
          </FadeInSection>
        </Suspense>
      </LazySection>
    </div>
  );
};

export default Home;

