import React, { useEffect, useRef } from 'react';
import './About.css';
import whoWeWorkWithImg from '../assets/who-we-work-with.jpg';
import whereWeGoingImg from '../assets/where-we-going.jpg';
import whyWeExistImg from '../assets/90449.jpg';

const graphNodes = [
  { id: 1, label: 'AI Strategist', x: 15, y: 25 },
  { id: 2, label: 'AI Journalist', x: 25, y: 75 },
  { id: 3, label: 'Software Engineer', x: 50, y: 50 },
  { id: 4, label: 'Prompt Engineer', x: 80, y: 30 },
  { id: 5, label: 'Data Scientist', x: 45, y: 85 },
  { id: 6, label: 'Machine Learning Engineer', x: 75, y: 75 },
  { id: 7, label: 'Cloud Architect', x: 45, y: 15 },
  { id: 8, label: 'Product Manager', x: 10, y: 60 },
  { id: 9, label: 'Ethics Consultant', x: 90, y: 50 },
];

const graphConnections = [
  [1, 7], [1, 8], [8, 2], [2, 5], [7, 3], [5, 3], [3, 4], [3, 6], [4, 9], [6, 9], [7, 4], [2, 3], [5, 6], [1, 3]
];

const About = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header-section" ref={addToRefs}>
        <div className="container">
          <h1 className="about-headline">About Us</h1>
          <h2 className="about-subheadline">
            We make technology work for the people who use it.
          </h2>
          <p className="about-lead">
            DEKODE helps businesses and communities modernise their systems, adopt AI with confidence, and build digital products that teams actually want to use. We handle the complexity so you don’t have to: from strategy and architecture through to build, security, and long-term support.
          </p>
          <p className="about-accent-text">
            Progress only counts when it reaches everyone.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="about-why-section glass-section" ref={addToRefs}>
        <div className="container">
          <div className="about-grid">
            <div className="about-text-content">
              <h2 className="about-section-title">Why We Exist</h2>
              <p>
                We started DEKODE because we kept seeing the same problem: businesses that knew they needed to evolve but couldn’t find a partner that made the process feel manageable. The big IT firms were too expensive, too impersonal, and spoke a language most teams couldn’t follow. Meanwhile, the technology gap kept growing.
              </p>
              <p>
                We believed there was a better way. Practical technology, delivered simply, at a price that respects your budget. No jargon. No bloated scopes. No disappearing after launch.
              </p>
              <p className="about-highlight-box">
                That belief still drives everything we do.
              </p>
            </div>
            
            <div className="about-image-container">
              <img src={whyWeExistImg} alt="DEKODE's mission" className="about-embedded-image" />
              <div className="glow-shape blue-shape"></div>
              <div className="glow-shape yellow-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="about-different-section" ref={addToRefs}>
        <div className="container">
          <h2 className="about-section-title text-center">What Makes Us Different</h2>
          <div className="differences-grid">
            
            <div className="difference-card" ref={addToRefs}>
              <div className="diff-icon">🎯</div>
              <h3>Simple</h3>
              <p>We communicate in plain language, keep scope focused, and prioritise what actually moves your business forward.</p>
            </div>
            
            <div className="difference-card" ref={addToRefs}>
              <div className="diff-icon">🔍</div>
              <h3>Transparent</h3>
              <p>You'll always know what we're building, what it costs, and how we'll measure success. No surprises.</p>
            </div>
            
            <div className="difference-card" ref={addToRefs}>
              <div className="diff-icon">📋</div>
              <h3>Accountable</h3>
              <p>We own the outcome, not just the output. If something isn't working, we fix it.</p>
            </div>
            
            <div className="difference-card" ref={addToRefs}>
              <div className="diff-icon">🛡️</div>
              <h3>Reliable</h3>
              <p>Security and stability aren't afterthoughts. They're built into every system from day one, with ongoing support to keep things running.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Who We Work With & Where We're Going */}
      <section className="about-vision-section" ref={addToRefs}>
        <div className="container">
          <div className="vision-rows">
            
            <div className="vision-row" ref={addToRefs}>
              <div className="vision-text-side">
                <h2 className="about-section-title">Who We Work With</h2>
                <p>
                  We partner with small and medium businesses across education, healthcare, finance, accounting, legal, food and agriculture, and retail. Our clients share one thing in common: they want technology that solves real problems without creating new ones.
                </p>
              </div>
              <div className="vision-image-side">
                <img src={whoWeWorkWithImg} alt="Diverse professionals working together" />
              </div>
            </div>
            
            <div className="vision-row inverse-row" ref={addToRefs}>
              <div className="vision-text-side">
                <h2 className="about-section-title">Where We're Going</h2>
                <p>
                  The world is shifting fast. AI is reshaping how businesses operate, compete, and serve their customers. There’s a lot of noise and a lot of fear, but also an extraordinary opportunity for businesses willing to participate rather than wait.
                </p>
                <p>
                  DEKODE is building toward becoming a trusted global technology partner for businesses navigating that shift. Our goal is simple: make digital transformation and AI adoption accessible, affordable, and genuinely useful for the people it’s meant to serve.
                </p>
              </div>
              <div className="vision-image-side">
                <img src={whereWeGoingImg} alt="Technology and futuristic vision" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who Do We Work With Connected Graph Section */}
      <section className="who-do-we-work-with-section" ref={addToRefs}>
        <div className="container">
          <h2 className="about-section-title text-center">Who Do We Work With</h2>
          <p className="about-lead text-center">
            A dynamic network of professionals driving the future of technology and AI.
          </p>
          <div className="graph-container">
            <div className="connected-graph-track">
              <svg className="graph-lines" width="100%" height="100%">
                {graphConnections.map((conn, idx) => {
                  const n1 = graphNodes.find(n => n.id === conn[0]);
                  const n2 = graphNodes.find(n => n.id === conn[1]);
                  return (
                    <line 
                      key={idx}
                      x1={`${n1.x}%`} 
                      y1={`${n1.y}%`} 
                      x2={`${n2.x}%`} 
                      y2={`${n2.y}%`} 
                    />
                  );
                })}
              </svg>
              {graphNodes.map(node => (
                <div className="graph-node" key={node.id} style={{ left: `${node.x}%`, top: `${node.y}%` }}>
                  <div className="node-content">
                    <div className="node-label">{node.label}</div>
                    <div className="node-pin-line"></div>
                    <div className="node-dot"></div>
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

export default About;
