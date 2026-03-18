import React from 'react';
import HeroSection from '../components/HeroSection';

const About = () => {
  const team = [
    { name: 'Pankaj Banga', role: 'Founder' },
    { name: 'Guneet Uppal', role: 'Principal Consultant' },
    { name: 'Ronny Garg', role: 'Principal Consultant' },
    { name: 'Tayyab Qureshi', role: 'Delivery Lead' },
    { name: 'Bharat Shori', role: 'QA Head' },
    { name: 'Kris Ganugapati', role: 'QA Lead' },
    { name: 'Raushan Kumar', role: 'Technical Lead' }
  ];

  return (
    <div className="page-container">
      <HeroSection />

      <section className="py-20 bg-dark-layer">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title text-left mb-6">Why We Exist</h2>
              <p className="text-gray-300 text-lg mb-4">
                We started DEKODE because we kept seeing the same problem: businesses that knew they needed to evolve but couldn't find a partner that made the process feel manageable. The big IT firms were too expensive, too impersonal, and spoke a language most teams couldn't follow. Meanwhile, the technology gap kept growing.
              </p>
              <p className="text-gray-300 text-lg mb-4">
                We believed there was a better way. Practical technology, delivered simply, at a price that respects your budget. No jargon. No bloated scopes. No disappearing after launch.
              </p>
              <p className="text-accent-blue font-bold text-lg">
                That belief still drives everything we do.
              </p>
            </div>
            <div>
              <h2 className="section-title text-left mb-6">What Makes Us Different</h2>
              <div className="grid gap-6">
                <div>
                  <h4 className="text-white font-bold mb-1">Simple</h4>
                  <p className="text-gray-400">We communicate in plain language, keep scope focused, and prioritise what actually moves your business forward.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Transparent</h4>
                  <p className="text-gray-400">You'll always know what we're building, what it costs, and how we'll measure success. No surprises.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Accountable</h4>
                  <p className="text-gray-400">We own the outcome, not just the output. If something isn't working, we fix it.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Reliable</h4>
                  <p className="text-gray-400">Security and stability aren't afterthoughts. They're built into every system from day one, with ongoing support to keep things running.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl text-white font-bold mb-4">Who We Work With</h2>
              <p className="text-gray-300">
                We partner with small and medium businesses across education, healthcare, finance, accounting, legal, food and agriculture, and retail. Our clients share one thing in common: they want technology that solves real problems without creating new ones.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl text-white font-bold mb-4">Where We're Going</h2>
              <p className="text-gray-300 mb-4">
                The world is shifting fast. AI is reshaping how businesses operate, compete, and serve their customers. There's a lot of noise and a lot of fear, but also an extraordinary opportunity for businesses willing to participate rather than wait.
              </p>
              <p className="text-gray-300">
                DEKODE is building toward becoming a trusted global technology partner for businesses navigating that shift. Our goal is simple: make digital transformation and AI adoption accessible, affordable, and genuinely useful for the people it's meant to serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-layer">
        <div className="container text-center mb-16">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">The people behind the technology.</p>
        </div>
        <div className="container grid md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="glass-card p-8 text-center rounded-xl hover:translate-y-[-5px] transition-all duration-300 border border-white/5 hover:border-accent-blue/30 hover:shadow-[0_0_20px_rgba(0,210,255,0.15)] group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-white font-black text-xl mb-2 tracking-wide relative z-10">{member.name}</h3>
              <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest relative z-10">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
