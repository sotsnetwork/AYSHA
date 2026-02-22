import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-40 pb-32 animate-in fade-in duration-700">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Legal</span>
          <h1 className="serif-text text-5xl md:text-6xl text-stone-850 leading-tight">Privacy Policy</h1>
          <p className="text-stone-850/50 mt-4">Last updated: 2024</p>
        </div>

        <article className="space-y-8 text-stone-850/80 leading-relaxed text-sm">
          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">1. Introduction</h2>
            <p>
              AYSHA Furniture & Electronics ("we", "our", or "AYSHA") respects your privacy. This policy describes how we collect, use, and protect your personal information when you visit our website, showroom, or use our services.
            </p>
          </section>

          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">2. Information We Collect</h2>
            <p>
              We may collect information you provide directly, such as your name, email address, phone number, and mailing address when you book a visit, request a consultation, or contact us. We may also collect information about your preferences and interests in our products and services.
            </p>
          </section>

          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">3. How We Use Your Information</h2>
            <p>
              We use your information to respond to inquiries, arrange showroom visits, process orders, and send relevant updates about our collections and services. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">4. Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information from unauthorized access, disclosure, or loss. However, no method of transmission over the internet is entirely secure.
            </p>
          </section>

          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">5. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or your personal data, please contact us at <a href="mailto:concierge@aysha.com" className="text-primary hover:underline">concierge@aysha.com</a> or visit our showroom at Bompai District, Kano, Nigeria.
            </p>
          </section>

          <div className="pt-12 border-t border-stone-200">
            <Link to="/" className="text-primary font-bold uppercase tracking-widest text-xs">
              ← Back to Home
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
