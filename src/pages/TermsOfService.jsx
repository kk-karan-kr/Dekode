import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="container max-w-4xl mx-auto px-6">
        <div className="mb-16 border-b border-white/10 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-accent-blue font-mono text-sm uppercase tracking-widest">Last updated: {new Date().toLocaleDateString('en-AU')}</p>
        </div>

        <div className="text-gray-300 leading-relaxed text-[1.05rem]">
          <p className="text-xl text-white font-medium leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Welcome to DEKODE Consultancy. Please read these Terms of Service carefully before using our website or engaging our services.
          </p>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">01.</span> Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use DEKODE Consultancy's website if you do not agree to take all of the terms and conditions stated on this page.
            </p>
          </section>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">02.</span> Services and Warranties
            </h2>
            <p className="leading-relaxed">
              DEKODE Consultancy provides AI consultancy, custom AI development, web and mobile application development, and cloud/IT security services. While we strive for excellence and "practical delivery, not hype", all software and services are provided "as is" and "as available". We do not warrant that our services will completely eliminate all operational risks or precisely guarantee specific ROI outcomes unless explicitly detailed in a separate, formal Statement of Work (SOW) agreement.
            </p>
          </section>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">03.</span> Intellectual Property
            </h2>
            <p className="leading-relaxed">
              Unless otherwise stated, DEKODE Consultancy and/or its licensors own the intellectual property rights for all material on DEKODE Consultancy. All intellectual property rights are reserved. You may access this from DEKODE Consultancy for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
          </section>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">04.</span> Limitations of Liability
            </h2>
            <p className="leading-relaxed">
              In no event shall DEKODE Consultancy, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract. DEKODE Consultancy shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
            </p>
          </section>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">05.</span> Revisions and Errata
            </h2>
            <p className="leading-relaxed">
              The materials appearing on DEKODE Consultancy's website could include technical, typographical, or photographic errors. DEKODE Consultancy does not warrant that any of the materials on its website are accurate, complete, or current. DEKODE Consultancy may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">06.</span> Governing Law
            </h2>
            <p className="leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
