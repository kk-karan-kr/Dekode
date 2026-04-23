import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="container max-w-4xl mx-auto px-6">
        <div className="mb-16 border-b border-white/10 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-accent-blue font-mono text-sm uppercase tracking-widest">Last updated: 02/03/2026 </p>
        </div>

        <div className="text-gray-300 leading-relaxed text-[1.05rem]">
          <p className="text-xl text-white font-medium leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            At DEKODE Consultancy, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">01.</span> Information We Collect
            </h2>
            <p className="mb-6">We may collect the following types of information when you interact with our services:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and company details provided through forms or direct communication.</li>
              <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, and pages visited, collected via analytics tools.</li>
              <li><strong className="text-white">Project Data:</strong> Information relevant to the execution and delivery of consulting and development services.</li>
            </ul>
          </section>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">02.</span> How We Use Your Information
            </h2>
            <p className="mb-6">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>To provide, operate, and maintain our services.</li>
              <li>To communicate with you, including responding to inquiries and providing project updates.</li>
              <li>To improve our website and services through analyzing user behavior.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">03.</span> Data Security
            </h2>
            <p className="leading-relaxed">
              As a technology consultancy focused on secure foundations, we take data security seriously. We implement robust, industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We emphasize "Security-first" principles in all our operations.
            </p>
          </section>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">04.</span> Sharing Your Information
            </h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners. We may use third-party service providers to help us operate our business, provided they adhere to strict confidentiality agreements.
            </p>
          </section>

          <section className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-accent-blue font-mono text-sm">05.</span> Your Rights
            </h2>
            <p className="leading-relaxed">
              Depending on your location, you may have the right to access, correct, or delete your personal data. If you wish to exercise these rights or have any questions about our privacy practices, please contact us using the details below.
            </p>
          </section>

          <section className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 p-8 md:p-12 rounded-2xl border border-accent-blue/30 mt-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Questions about your privacy?</h2>
              <p className="mb-8 text-gray-300 text-lg">Please reach out to our team directly.</p>
              <a href="mailto:pm@dekodeglobal.com" className="btn-primary" style={{ display: 'inline-block' }}>Contact Support</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
