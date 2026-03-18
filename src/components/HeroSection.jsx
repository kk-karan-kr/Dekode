import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [initialized, setInitialized] = useState(false);
  const [textStage, setTextStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setInitialized(true), 500);
    const timer2 = setTimeout(() => setTextStage(1), 1500);
    const timer3 = setTimeout(() => setTextStage(2), 2500);
    const timer4 = setTimeout(() => setTextStage(3), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <section id="about" className="hero-section">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="container hero-content">
        <div className={`terminal-container ${initialized ? 'active' : ''}`}>
          <div className="terminal-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="terminal-title">SYS_INIT // DEKODE</span>
          </div>
          <div className="terminal-body">
            <p className={`terminal-line ${textStage >= 0 ? 'visible' : ''}`}>
              <span className="prompt">&gt;</span> Executing module: core_mission.sh
            </p>
            <p className={`terminal-line success ${textStage >= 1 ? 'visible' : ''}`}>
              [OK] System Ready.
            </p>
            <h1 className={`hero-headline ${textStage >= 2 ? 'visible' : ''}`}>
              We make <span className="text-gradient">technology</span> work for the people who use it.
            </h1>
            <p className={`hero-subheadline ${textStage >= 3 ? 'visible' : ''}`}>
              DEKODE helps businesses and communities modernise their systems, adopt AI with confidence, and build digital products that teams actually want to use. We handle the complexity so you don't have to.
            </p>
            
            <div className={`hero-actions ${textStage >= 3 ? 'visible' : ''}`}>
              <a href="mailto:pm@dekodeglobal.com" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', position: 'relative', zIndex: 20 }}>Book a Discovery Call</a>
              <a href="#services" className="btn-secondary" style={{ display: 'inline-block', textDecoration: 'none', position: 'relative', zIndex: 20 }}>Explore Services</a>
            </div>
          </div>
        </div>


        <div className={`vision-cards ${textStage >= 3 ? 'visible' : ''}`}>
          <div className="glass-card vision-card">
            <div className="card-icon neon-emoji-1">⚡</div>
            <h3>Practical Technology</h3>
            <p>Delivered simply, at a price that respects your budget.</p>
          </div>
          <div className="glass-card vision-card">
            <div className="card-icon neon-emoji-2">🧠</div>
            <h3>AI With Confidence</h3>
            <p>Turn AI uncertainty into a clear, prioritized roadmap.</p>
          </div>
          <div className="glass-card vision-card">
            <div className="card-icon neon-emoji-3">🤝</div>
            <h3>True Partnership</h3>
            <p>No jargon. No bloated scopes. No disappearing after launch.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
