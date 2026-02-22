import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions: React.FC = () => {
  return (
    <div className="pt-40 pb-32 animate-in fade-in duration-700">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Legal</span>
          <h1 className="serif-text text-5xl md:text-6xl text-stone-850 leading-tight">Terms & Conditions</h1>
          <p className="text-stone-850/50 mt-4">Last updated: 2024</p>
        </div>

        <article className="space-y-8 text-stone-850/80 leading-relaxed text-sm">
          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing this website or engaging with AYSHA Furniture & Electronics ("AYSHA"), you agree to these Terms and Conditions. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">2. Products & Services</h2>
            <p>
              AYSHA offers furniture and electronics for sale or bespoke order. Product availability, specifications, and pricing are subject to change. Custom pieces are subject to separate quotation and agreement. All items displayed on our showroom floor are available for immediate delivery or customization.
            </p>
          </section>

          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">3. Showroom Visits & Consultations</h2>
            <p>
              Bookings for showroom visits are subject to availability. We reserve the right to reschedule or cancel visits with reasonable notice. Consultations and design sessions are offered at our discretion.
            </p>
          </section>

          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website—including text, images, logos, and design—is the property of AYSHA and is protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">5. Limitation of Liability</h2>
            <p>
              AYSHA is not liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. Our liability is limited to the amount paid for the relevant product or service.
            </p>
          </section>

          <section>
            <h2 className="serif-text text-xl text-stone-850 mb-4">6. Contact</h2>
            <p>
              For questions about these Terms & Conditions, contact us at <a href="mailto:concierge@aysha.com" className="text-primary hover:underline">concierge@aysha.com</a> or visit Bompai District, Kano, Nigeria.
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

export default TermsConditions;
