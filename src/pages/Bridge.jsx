import React, { useEffect, useRef, useCallback, useState, Suspense, lazy } from 'react';
import './Bridge.css';
import { WorldMap } from '../components/ui/world-map';

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
  const [bridgeEmail, setBridgeEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const cooldownTimerRef = useRef(null);

  useEffect(() => {
    if (cooldownSeconds <= 0) {
      return undefined;
    }

    cooldownTimerRef.current = setTimeout(() => {
      setCooldownSeconds((current) => current - 1);
    }, 1000);

    return () => clearTimeout(cooldownTimerRef.current);
  }, [cooldownSeconds]);

  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
      }
    };
  }, []);

  const handleBridgeSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      email: formData.get('email')?.toString() || '',
      website: formData.get('website')?.toString() || '',
    };

    try {
      const response = await fetch('/api/bridge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong while registering your interest.');
      }

      setFormStatus({
        type: 'success',
        message: 'Thanks. Your interest has been submitted successfully and we will keep you updated.',
      });
      setCooldownSeconds(5);
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error.message || 'Your interest could not be submitted. Please try again in a moment.',
      });
      setCooldownSeconds(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container bridge-page relative">
      <section className="bridge-hero relative w-full overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '20px', background: 'linear-gradient(160deg, #0d2040 0%, #0a192f 50%, #061120 100%)' }}>
        <div className="bridge-grid-overlay"></div>


        <div className="container hero-content text-center" style={{ zIndex: 30, position: 'relative' }}>
          <div className="coming-soon-badge">
            <span className="blink-dot"></span>
            Coming Soon — Register Your Interest
          </div>
          <div className="glitch-container" style={{ position: 'relative', zIndex: 10, color: 'var(--color-accent-yellow)' }}>
            BRIDGE
            <span aria-hidden="true">BRIDGE</span>
            <span aria-hidden="true">BRIDGE</span>
          </div>
          <p className="hero-subheadline visible mx-auto" style={{ position: 'relative', zIndex: 10 }}>
            A new initiative connecting Australian and Indian businesses through technology, talent, and strategic partnership — to build, scale, and grow together.
          </p>

          {/* ── Cyber Electric AU — BRIDGE — IN ── */}
          <div className="w-full mx-auto mt-12 mb-16 relative z-10 select-none bridge-connection-graphic">
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
                  marginTop: '5px', 
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>AUSTRALIA</span>
              </div>

              {/* Left line */}
              <div style={{ position: 'relative', flex: 2, height: '2px', minWidth: '160px' }}>
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
                  marginTop: '4px',
                  textShadow: '0 0 10px #FEB611',
                  animation: 'textGlow 2s ease-in-out infinite',
                  textTransform: 'uppercase',
                }}>BRIDGE</span>
              </div>

              {/* Right line */}
              <div style={{ position: 'relative', flex: 2, height: '2px', minWidth: '160px' }}>
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
                  marginTop: '5px', 
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>INDIA</span>
              </div>

            </div>
          </div>


          <div className="max-w-2xl mx-auto w-full relative z-30">
            <form className="bridge-form-new" onSubmit={handleBridgeSubmit}>
              <div className="bridge-input-wrapper">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address" 
                  className="bridge-email-input-new"
                  value={bridgeEmail}
                  onChange={(event) => setBridgeEmail(event.target.value)}
                  required
                />
                <input type="text" name="website" className="bridge-honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                <button type="submit" className="bridge-notify-btn-new" disabled={isSubmitting || cooldownSeconds > 0}>
                  {isSubmitting
                    ? 'Sending...'
                    : cooldownSeconds > 0
                      ? `Wait ${cooldownSeconds}s`
                      : formStatus.type === 'success'
                        ? 'Sent'
                        : 'Notify Me'}
                </button>
              </div>
            </form>
            {formStatus.message ? (
              <p className={`bridge-form-status ${formStatus.type === 'success' ? 'success' : 'error'}`} aria-live="polite">
                {formStatus.message}
              </p>
            ) : null}
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', marginTop: '1.2rem', fontWeight: 500, letterSpacing: '0.03em' }}>Be the first to know when BRIDGE launches. No spam, ever.</p>
          </div>

        </div>

      </section>

      <section className="bridge-section-padding relative z-20 bg-dark-layer">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '1.4rem' }}>
            <p className="bridge-section-label" style={{ color: '#3576C1', opacity: 1, marginBottom: '0.5rem' }}>ABOUT THE INITIATIVE</p>
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
          <div className="text-center" style={{ marginBottom: '1.4rem' }}>
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

      {/* Operating Section with Map */}
      <section className="bridge-section-padding relative w-full overflow-hidden z-20" style={{ background: 'linear-gradient(160deg, #0d2040 0%, #0a192f 60%, #061120 100%)', paddingBottom: '7rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="bridge-section-label">WHERE WE OPERATE</p>
          <h2 className="bridge-section-heading">
            Where <span style={{ color: 'var(--color-accent-yellow)' }}>BRIDGE</span> operates
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-6 mb-12">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" style={{ backgroundColor: '#10b981', display: 'inline-block', width: '16px', height: '16px', borderRadius: '50%', boxShadow: '0 0 12px rgba(16,185,129,0.8)' }}></span>
              <span className="font-semibold tracking-wide text-sm md:text-base" style={{ color: '#ffffff' }}>ACTIVE: AUSTRALIA & INDIA</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" style={{ backgroundColor: '#ef4444', display: 'inline-block', width: '16px', height: '16px', borderRadius: '50%', boxShadow: '0 0 12px rgba(239,68,68,0.8)' }}></span>
              <span className="font-semibold tracking-wide text-sm md:text-base" style={{ color: '#a3a3a3' }}>COMING SOON: CANADA, UK, UAE</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10 px-4 md:px-8">
          {/* Subtle background flares behind map */}
          <div style={{ position: 'absolute', top: '50%', left: '0%', transform: 'translateY(-50%)', width: '400px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(53, 118, 193, 0.4) 0%, rgba(53, 118, 193, 0) 70%)', filter: 'blur(60px)', zIndex: -1, pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', top: '50%', right: '0%', transform: 'translateY(-50%)', width: '400px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(254, 182, 17, 0.25) 0%, rgba(254, 182, 17, 0) 70%)', filter: 'blur(60px)', zIndex: -1, pointerEvents: 'none' }}></div>
          
          <WorldMap
            dots={[
              {
                start: { lat: 40.7128, lng: -74.0060, label: 'USA' }, // USA
                end: { lat: 51.5074, lng: -0.1278, label: 'UK' }, // UK
                color: "#ef4444" // Coming Soon (Red)
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // UK
                end: { lat: 25.2048, lng: 55.2708, label: 'UAE' }, // UAE
                color: "#ef4444" // Coming Soon (Red)
              },
              {
                start: { lat: 25.2048, lng: 55.2708 }, // UAE
                end: { lat: 20.5937, lng: 78.9629, label: 'INDIA' }, // India
                color: "#ef4444" // Coming Soon (Red)
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: -25.2744, lng: 133.7751, label: 'AUSTRALIA' }, // Australia
                color: "#10b981" // Active (Green)
              }
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default Bridge;
