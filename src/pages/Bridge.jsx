import React, { useEffect, useRef, useCallback } from 'react';
import './Bridge.css';

/* ── Cyber Pillar Card (adapted from uiverse.io / 00Kubi) ── */
const CyberPillarCard = ({ icon, title, desc, accent }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -20;
    const rotY = ((x - cx) / cx) * 20;
    cardRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    cardRef.current.style.transition = '125ms ease-in-out';
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(-10px)';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    cardRef.current.style.transition = '700ms';
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  const isBlue = accent === 'blue';
  const glowColor = isBlue ? 'rgba(0,210,255,' : 'rgba(157,78,221,';
  const accentHex = isBlue ? '#00d2ff' : '#9d4edd';

  return (
    <div
      ref={containerRef}
      className="cyber-pillar-container noselect"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className="cyber-pillar-card">
        {/* Glare */}
        <div className="cpc-glare"></div>

        {/* Animated cyber lines */}
        <div className="cpc-cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>

        {/* Corner brackets */}
        <div className="cpc-corners">
          <span style={{ borderColor: `${accentHex}66` }}></span>
          <span style={{ borderColor: `${accentHex}66` }}></span>
          <span style={{ borderColor: `${accentHex}66` }}></span>
          <span style={{ borderColor: `${accentHex}66` }}></span>
        </div>

        {/* Scan line */}
        <div className="cpc-scan"></div>

        {/* Glowing blobs */}
        <div className="cpc-glows">
          <div style={{ background: `radial-gradient(circle, ${glowColor}0.35) 0%, transparent 70%)` }}></div>
          <div style={{ background: `radial-gradient(circle, ${glowColor}0.25) 0%, transparent 70%)` }}></div>
          <div style={{ background: `radial-gradient(circle, ${glowColor}0.2) 0%, transparent 70%)` }}></div>
        </div>

        {/* Particles */}
        <div className="cpc-particles">
          <span style={{ background: accentHex }}></span>
          <span style={{ background: accentHex }}></span>
          <span style={{ background: accentHex }}></span>
          <span style={{ background: accentHex }}></span>
          <span style={{ background: accentHex }}></span>
          <span style={{ background: accentHex }}></span>
        </div>

        {/* Content */}
        <div className="cpc-icon" style={{ filter: `contrast(0) brightness(20) drop-shadow(0 0 10px ${accentHex})` }}>{icon}</div>
        <div ref={titleRef} className="cpc-title" style={{ background: `linear-gradient(45deg, ${accentHex}, #ffffff)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {title}
        </div>
        <div className="cpc-desc">{desc}</div>

        {/* Top edge glow */}
        <div className="cpc-top-edge" style={{ background: accentHex, boxShadow: `0 0 15px ${accentHex}` }}></div>
      </div>
    </div>
  );
};


const Bridge = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const count = 50;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
      });
    }
    
    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      ctx.shadowBlur = 0;
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 245, 212, 0.6)';
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="page-container bridge-page relative">
      <div className="particle-background" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        <canvas ref={canvasRef} style={{ display: 'block' }}></canvas>
      </div>
      <section className="bridge-hero relative w-full overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', background: 'transparent' }}>


        <div className="container hero-content text-center" style={{ zIndex: 30, position: 'relative' }}>
          <div className="inline-block px-4 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20 mb-6 font-mono text-sm uppercase tracking-widest">
            Coming Soon — Register Your Interest
          </div>
          <div className="glitch-container mb-6" style={{ position: 'relative', zIndex: 10 }}>
            BRIDGE
            <span aria-hidden="true">BRIDGE</span>
            <span aria-hidden="true">BRIDGE</span>
          </div>
          <p className="hero-subheadline visible mx-auto text-xl" style={{ margin: '0 auto 3rem', position: 'relative', zIndex: 10 }}>
            A new initiative connecting Australian and Indian businesses through technology, talent, and strategic partnership — to build, scale, and grow together.
          </p>

          {/* ── Cyber Electric AU — BRIDGE — IN ── */}
          <div className="w-full max-w-3xl mx-auto mt-10 mb-16 relative z-10 select-none bridge-connection-graphic">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

              {/* AU */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '120px', textAlign: 'center' }}>
                <span style={{ fontWeight: 900, color: 'white', fontSize: '3.8rem', lineHeight: 1, textShadow: '0 0 35px rgba(0,210,255,0.9)' }}>AU</span>
                <span style={{ fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.35em', marginTop: '8px', color: 'rgba(0,210,255,0.85)' }}>AUSTRALIA</span>
              </div>

              {/* Left line */}
              <div style={{ position: 'relative', flex: 1, height: '2px', minWidth: '60px' }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '2px', background: 'linear-gradient(90deg, rgba(0,210,255,0.25), rgba(255,215,0,0.3))' }}></div>
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '2px',
                  background: 'linear-gradient(90deg, transparent, #00d2ff 35%, #ffd700 65%, transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'beamTravel 2.5s linear infinite',
                }}></div>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#ffd700',
                  boxShadow: '0 0 10px #ffd700, 0 0 22px rgba(255,215,0,0.5)',
                  animation: 'nodePulse 1.8s ease-in-out infinite',
                }}></div>
              </div>

              {/* Centre — golden handshake */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '110px' }}>
                <div style={{
                  width: '82px', height: '82px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid rgba(255,215,0,0.5)',
                  background: 'radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)',
                  boxShadow: '0 0 30px rgba(255,215,0,0.45), inset 0 0 15px rgba(255,215,0,0.08)',
                  animation: 'ringPulse 2.5s ease-in-out infinite',
                  fontSize: '2.4rem',
                }}>🤝</div>
                <span style={{
                  color: '#ffd700',
                  fontSize: '0.6rem',
                  fontWeight: 900,
                  letterSpacing: '0.55em',
                  marginTop: '10px',
                  textShadow: '0 0 10px #ffd700',
                  animation: 'textGlow 2s ease-in-out infinite',
                  textTransform: 'uppercase',
                }}>BRIDGE</span>
              </div>

              {/* Right line */}
              <div style={{ position: 'relative', flex: 1, height: '2px', minWidth: '60px' }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '2px', background: 'linear-gradient(90deg, rgba(255,215,0,0.3), rgba(157,78,221,0.25))' }}></div>
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '2px',
                  background: 'linear-gradient(90deg, transparent, #ffd700 35%, #9d4edd 65%, transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'beamTravel 2.5s linear infinite 1.25s',
                }}></div>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#ffd700',
                  boxShadow: '0 0 10px #ffd700, 0 0 22px rgba(255,215,0,0.5)',
                  animation: 'nodePulse 1.8s ease-in-out infinite 0.9s',
                }}></div>
              </div>

              {/* IN */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '120px', textAlign: 'center' }}>
                <span style={{ fontWeight: 900, color: 'white', fontSize: '3.8rem', lineHeight: 1, textShadow: '0 0 35px rgba(157,78,221,0.9)' }}>IN</span>
                <span style={{ fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.35em', marginTop: '8px', color: 'rgba(157,78,221,0.85)' }}>INDIA</span>
              </div>

            </div>
          </div>


          <div className="max-w-xl mx-auto w-full relative z-30">
            <form className="modern-form-group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="modern-input"
                required
              />
              <button type="submit" className="modern-submit-btn">Subscribe</button>
            </form>
            <p className="text-gray-400 text-sm mt-4 font-medium tracking-wide">Be the first to know when BRIDGE launches. No spam, ever.</p>
          </div>

        </div>


      </section>

      <section className="py-20 relative z-20 bg-dark-layer">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">What is BRIDGE</h2>
            <p className="section-subtitle">A platform built for two-way technological exchange</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-10 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl text-white font-bold mb-4 relative z-10">Cross-Border Connection</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                BRIDGE is DEKODE's initiative designed to remove the friction of doing business across Australia and India. Whether you're an Australian company looking for specialist tech talent, or an Indian business ready to enter the ANZ market.
              </p>
            </div>
            
            <div className="glass-card p-10 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl text-white font-bold mb-4 relative z-10">Strategic Expansion</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Starting with two of the world's most complementary technology ecosystems. Expanding from there. BRIDGE will grow to become a global network of technology, talent, and trade, facilitated by our deep delivery expertise on both sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-20" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">What Bridge Enables</h2>
            <p className="section-subtitle">Six pillars of cross-border collaboration</p>
          </div>

          <div className="pillar-grid">
            {[
              { icon: '🤝', title: 'Business Partnerships', desc: 'Joint ventures & strategic alliances between AU/IN technology businesses.', accent: 'blue' },
              { icon: '👥', title: 'Resourcing & Staffing', desc: 'Verified tech professionals matched to real cross-border project requirements.', accent: 'purple' },
              { icon: '💻', title: 'Product Development', desc: 'Co-build digital products leveraging Australian insight & Indian engineering depth.', accent: 'blue' },
              { icon: '🎓', title: 'Cross-Skilling & Training', desc: 'Upskill teams across borders — embedding emerging tech skills directly in your workforce.', accent: 'purple' },
              { icon: '🔬', title: 'R&D Collaboration', desc: 'Joint innovation programs accelerating the development of new solutions & IP.', accent: 'blue' },
              { icon: '🌐', title: 'Talent Exchange', desc: 'Secondments & long-term embedded placements that build genuine cross-cultural capability.', accent: 'purple' },
            ].map((pillar, i) => (
              <CyberPillarCard key={i} {...pillar} />
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 relative z-20 bg-dark-layer">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple to start. Built to grow.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-30 hidden md:block"></div>

            <div className="flex flex-col gap-8">
              {[
                { num: '01', title: 'Register Your Interest', desc: 'Tell us about your business, your goals, and what kind of cross-border connection you\'re looking for.' },
                { num: '02', title: 'Discovery Consultation', desc: 'Our team meets with you to understand the opportunity and identify the right BRIDGE pathway for your needs.' },
                { num: '03', title: 'Matched & Connected', desc: 'We facilitate introductions, agreements, and the delivery structure to make the partnership work in practice.' },
                { num: '04', title: 'Ongoing Support', desc: 'DEKODE stays involved to ensure quality, resolve friction, and help the partnership grow over time.' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-6 md:gap-10 glass-card p-8 rounded-xl border border-white/5 hover:border-accent-blue/30 transition-colors duration-500 group relative">
                  {/* Step number node */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-accent-blue/50 flex items-center justify-center relative z-10 bg-black group-hover:border-accent-blue group-hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-500">
                    <span className="text-accent-blue font-mono font-bold text-lg">{step.num}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl text-white font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
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

export default Bridge;
