import React, { useEffect, useRef, useCallback, useState, Suspense, lazy } from 'react';
import './Bridge.css';

const GlobeDemo = lazy(() => import('../components/GlobeDemo').then(m => ({ default: m.GlobeDemo })));

const GlobeWrapper = () => {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {shouldLoad ? (
        <Suspense fallback={<div className="globe-skeleton" style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(53, 118, 193, 0.1)', animation: 'ringPulse 2s infinite' }} />}>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <GlobeDemo />
          </div>
        </Suspense>
      ) : (
        <div className="globe-skeleton" />
      )}
    </div>
  );
};

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
    cardRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-10px)`;
    cardRef.current.style.transition = '125ms ease-in-out';
  }, []);

  const handleMouseLeave = useCallback(() => {
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
    cardRef.current.style.transition = '700ms';
  }, []);

  const isBlue = accent === 'blue';
  const glowColor = isBlue ? 'rgba(0,210,255,' : 'rgba(157,78,221,';
  const accentHex = isBlue ? 'var(--color-accent-blue)' : '#9d4edd';

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
        <div className="cpc-icon" style={{ filter: `brightness(0) invert(1) drop-shadow(0 0 12px rgba(255,255,255,0.9))` }}>{icon}</div>
        <div ref={titleRef} className="cpc-title" style={{ color: 'var(--color-accent-yellow)', opacity: 1, transform: 'translateY(0)' }}>
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
  return (
    <div className="page-container bridge-page relative">
      <section className="bridge-hero relative w-full overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '20px', background: 'linear-gradient(160deg, #0d2040 0%, #0a192f 50%, #061120 100%)' }}>
        <div className="bridge-grid-overlay"></div>


        <div className="container hero-content text-center" style={{ zIndex: 30, position: 'relative' }}>
          <div className="coming-soon-badge">
            <span className="blink-dot"></span>
            Coming Soon — Register Your Interest
          </div>
          <div className="glitch-container mb-6" style={{ position: 'relative', zIndex: 10, color: 'var(--color-accent-yellow)' }}>
            BRIDGE
            <span aria-hidden="true">BRIDGE</span>
            <span aria-hidden="true">BRIDGE</span>
          </div>
          <p className="hero-subheadline visible mx-auto" style={{ margin: '0 auto 3rem', position: 'relative', zIndex: 10, color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem' }}>
            A new initiative connecting Australian and Indian businesses through technology, talent, and strategic partnership — to build, scale, and grow together.
          </p>

          {/* ── Cyber Electric AU — BRIDGE — IN ── */}
          <div className="w-full max-w-4xl mx-auto mt-14 mb-20 relative z-10 select-none bridge-connection-graphic">
            {/* Background Flares for Identity Section */}
            <div style={{ position: 'absolute', top: '50%', left: '0', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(53, 118, 193, 0.3) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: -1, pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', top: '50%', right: '0', transform: 'translate(50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(254, 182, 17, 0.2) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: -1, pointerEvents: 'none' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

              {/* AU */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '120px', textAlign: 'center' }}>
                <span style={{ 
                   fontWeight: 900, 
                   fontSize: '4.5rem', 
                   lineHeight: 1, 
                   color: '#ffffff',
                   filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))'
                }}>AU</span>
                <span style={{ 
                  fontWeight: 800, 
                  fontSize: '0.75rem', 
                  letterSpacing: '0.35em', 
                  marginTop: '12px', 
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>AUSTRALIA</span>
              </div>

              {/* Left line */}
              <div style={{ position: 'relative', flex: 1, height: '2px', minWidth: '60px' }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '2px', background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(254,182,17,0.2))' }}></div>
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 35%, #FEB611 65%, transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'beamTravel 2.5s linear infinite',
                }}></div>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#FEB611',
                  boxShadow: '0 0 10px #FEB611, 0 0 22px rgba(254,182,17,0.5)',
                  animation: 'nodePulse 1.8s ease-in-out infinite',
                }}></div>
              </div>

              {/* Centre — golden handshake */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '110px' }}>
                <div style={{
                  width: '82px', height: '82px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid rgba(254,182,17,0.5)',
                  background: 'radial-gradient(circle, rgba(254,182,17,0.18) 0%, transparent 70%)',
                  boxShadow: '0 0 30px rgba(254,182,17,0.45), inset 0 0 15px rgba(254,182,17,0.08)',
                  animation: 'ringPulse 2.5s ease-in-out infinite',
                  fontSize: '2.4rem',
                }}>🤝</div>
                <span style={{
                  color: '#FEB611',
                  fontSize: '0.6rem',
                  fontWeight: 900,
                  letterSpacing: '0.55em',
                  marginTop: '10px',
                  textShadow: '0 0 10px #FEB611',
                  animation: 'textGlow 2s ease-in-out infinite',
                  textTransform: 'uppercase',
                }}>BRIDGE</span>
              </div>

              {/* Right line */}
              <div style={{ position: 'relative', flex: 1, height: '2px', minWidth: '60px' }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '2px', background: 'linear-gradient(90deg, rgba(254,182,17,0.2), rgba(255,255,255,0.1))' }}></div>
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '2px',
                  background: 'linear-gradient(90deg, transparent, #FEB611 35%, rgba(255,255,255,0.4) 65%, transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'beamTravel 2.5s linear infinite 1.25s',
                }}></div>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#FEB611',
                  boxShadow: '0 0 10px #FEB611, 0 0 22px rgba(254,182,17,0.5)',
                  animation: 'nodePulse 1.8s ease-in-out infinite 0.9s',
                }}></div>
              </div>

              {/* IN */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '120px', textAlign: 'center' }}>
                <span style={{ 
                   fontWeight: 900, 
                   fontSize: '4.5rem', 
                   lineHeight: 1, 
                   color: '#ffffff',
                   filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))'
                }}>IN</span>
                <span style={{ 
                  fontWeight: 800, 
                  fontSize: '0.75rem', 
                  letterSpacing: '0.35em', 
                  marginTop: '12px', 
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>INDIA</span>
              </div>

            </div>
          </div>


          <div className="max-w-xl mx-auto w-full relative z-30">
            <form className="bridge-stacked-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bridge-email-input"
                required
              />
              <button type="submit" className="bridge-notify-btn">Notify Me</button>
            </form>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', marginTop: '1rem', fontWeight: 500, letterSpacing: '0.03em' }}>Be the first to know when BRIDGE launches. No spam, ever.</p>
          </div>

        </div>

      </section>

      <section className="bridge-section-padding relative z-20 bg-dark-layer">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="bridge-section-label" style={{ color: '#3576C1', opacity: 1, marginBottom: '1.25rem' }}>ABOUT THE INITIATIVE</p>
            <h2 className="section-title">What is BRIDGE</h2>
            <p className="section-subtitle" style={{ fontSize: '1.1rem', color: '#556070', maxWidth: '600px', margin: '0 auto' }}>A platform built for two-way technological exchange</p>
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

      <section className="bridge-section-padding relative z-20" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="bridge-section-label" style={{ color: '#3576C1', opacity: 1 }}>WHAT BRIDGE ENABLES</p>
            <h2 className="bridge-section-heading" style={{ color: '#0d1a2d', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              Six pillars of <span style={{ color: '#3576C1' }}>cross-border collaboration</span>
            </h2>
          </div>

          <div className="pillar-grid">
            {[
              { icon: '🤝', title: 'Business Partnerships', desc: 'Joint ventures & strategic alliances between AU/IN technology businesses.', accent: 'blue' },
              { icon: '👥', title: 'Resourcing & Staffing', desc: 'Verified tech professionals matched to real cross-border project requirements.', accent: 'purple' },
              { icon: '🚀', title: 'Product Development', desc: 'Co-build digital products leveraging Australian insight & Indian engineering depth.', accent: 'blue' },
              { icon: '🎓', title: 'Cross-Skilling & Training', desc: 'Upskill teams across borders — embedding emerging tech skills directly in your workforce.', accent: 'purple' },
              { icon: '🔬', title: 'R&D Collaboration', desc: 'Joint innovation programs accelerating the development of new solutions & IP.', accent: 'blue' },
              { icon: '✈️', title: 'Talent Exchange', desc: 'Secondments & long-term embedded placements that build genuine cross-cultural capability.', accent: 'purple' },
            ].map((pillar, i) => (
              <CyberPillarCard key={i} {...pillar} />
            ))}
          </div>
        </div>
      </section>


      <section className="how-it-works-wrapper relative z-20">
        <div className="how-it-works-header">
          <div className="container">
            <p className="bridge-section-label" style={{ color: 'rgba(255,255,255,0.9)' }}>HOW IT WORKS</p>
            <h2 className="bridge-section-heading" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              Simple to start. <span style={{ color: 'var(--color-accent-yellow)' }}>Built to grow.</span>
            </h2>
          </div>
        </div>

        <div className="how-it-works-content container">
          <div className="flex flex-col">
            {[
              { 
                num: '01', 
                title: 'Register Your Interest', 
                desc: 'Tell us about your business, your goals, and what kind of cross-border connection you\'re looking for.',
                ticks: ['Business profile entry', 'Strategic goal alignment', 'Immediate response']
              },
              { 
                num: '02', 
                title: 'Discovery Consultation', 
                desc: 'Our team meets with you to understand the opportunity and identify the right BRIDGE pathway for your needs.',
                ticks: ['Project scoping', 'Talent requirements', 'Market entry strategy']
              },
              { 
                num: '03', 
                title: 'Matched & Connected', 
                desc: 'We facilitate introductions, agreements, and the delivery structure to make the partnership work in practice.',
                ticks: ['Partner matching', 'Contract facilitation', 'Governance setup']
              },
              { 
                num: '04', 
                title: 'Ongoing Support', 
                desc: 'DEKODE stays involved to ensure quality, resolve friction, and help the partnership grow over time.',
                ticks: ['Performance monitoring', 'Friction resolution', 'Scalability planning']
              },
            ].map((step, i) => (
              <div key={i} className="how-step-card group">
                <div className="how-step-number">{step.num}</div>
                <div className="how-step-body">
                  <h3 className="how-step-title">{step.title}</h3>
                  <p className="how-step-desc">{step.desc}</p>
                  <div className="how-step-ticks">
                    {step.ticks.map((tick, idx) => (
                      <div key={idx} className="tick-item">
                        <span className="tick-icon">✓</span>
                        <span className="tick-text">{tick}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Globe Section */}
      <section className="bridge-section-padding relative w-full overflow-hidden z-20" style={{ background: 'linear-gradient(160deg, #0d2040 0%, #0a192f 60%, #061120 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="bridge-section-label">WHERE WE OPERATE</p>
          <h2 className="bridge-section-heading">Where <span style={{ color: 'var(--color-accent-yellow)' }}>BRIDGE</span> operates</h2>
          <p className="bridge-section-sub">Starting with two of the world's most complementary technology ecosystems. Expanding from there.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{ width: '100%', maxWidth: '600px', height: 'clamp(350px, 100vw, 600px)', position: 'relative', zIndex: 10 }}>
            {/* Left side Blue Flare */}
            <div style={{ position: 'absolute', top: '50%', left: '-30%', transform: 'translateY(-50%)', width: '500px', height: '800px', background: 'radial-gradient(ellipse at center, rgba(53, 118, 193, 0.75) 0%, rgba(53, 118, 193, 0) 70%)', filter: 'blur(50px)', zIndex: -1, pointerEvents: 'none' }}></div>
            {/* Right side Yellow Flare */}
            <div style={{ position: 'absolute', top: '50%', right: '-30%', transform: 'translateY(-50%)', width: '500px', height: '800px', background: 'radial-gradient(ellipse at center, rgba(254, 182, 17, 0.45) 0%, rgba(254, 182, 17, 0) 70%)', filter: 'blur(50px)', zIndex: -1, pointerEvents: 'none' }}></div>
            <GlobeWrapper />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bridge;
