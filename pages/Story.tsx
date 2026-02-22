import React from 'react';
import { Link } from 'react-router-dom';

const Story: React.FC = () => {
  return (
    <div className="pt-40 pb-32 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Legacy</span>
          <h1 className="serif-text text-5xl md:text-6xl text-stone-850 leading-tight">The Full Story of AYSHA</h1>
        </div>

        <article className="prose prose-lg max-w-none space-y-10 text-stone-850/80 leading-relaxed">
          <p className="text-xl text-stone-850 font-light">
            AYSHA began in 1995 with a vision to bring world-class furniture and cutting-edge electronics to Northern Nigeria's most discerning homes. What started as a small showroom in Kano has grown into a landmark of luxury for the region.
          </p>

          <div className="w-20 h-1 bg-primary my-12"></div>

          <h2 className="serif-text text-2xl text-stone-850 mt-12">A Local Vision, A Global Standard</h2>
          <p>
            Our founder, Alhaji Musa Abdullahi, recognized a growing desire among Nigerian families for furniture that does not just fill a room—but defines a home's soul. He saw an opportunity to blend Nigerian heritage with international craftsmanship, creating spaces that honour tradition while embracing modern comfort.
          </p>

          <p>
            At AYSHA, we believe that luxury is a resonance of quality. Whether it is our handcrafted furniture or our state-of-the-art electronics, every piece is chosen to bring timeless comfort to your sanctuary.
          </p>

          <h2 className="serif-text text-2xl text-stone-850 mt-12">Craftsmanship & Curation</h2>
          <p>
            We source Nigerian Oak, Italian marble, and exotic mahogany. We partner with master craftsmen and leading electronics brands to ensure each piece meets our exacting standards. From ergonomic office chairs to 8K cinema displays, from silk accent cushions to solid teak wardrobes—every item in our showroom is available for immediate delivery or bespoke customization.
          </p>

          <h2 className="serif-text text-2xl text-stone-850 mt-12">The Bompai Experience</h2>
          <p>
            Our flagship showroom in Bompai, Kano, is where vision meets reality. Visit us for a private consultation with our design specialists. We invite you to experience the AYSHA difference—where hospitality and elegance come together.
          </p>

          <blockquote className="border-l-4 border-primary pl-8 py-4 my-12 italic text-stone-850/70">
            "AYSHA is more than a name; it is a promise of quality and hospitality, designed to welcome the world into your living room."
            <cite className="block mt-4 text-sm font-bold uppercase tracking-widest text-primary not-italic">— Alhaji Musa Abdullahi, Founder</cite>
          </blockquote>

          <div className="pt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1 group">
              Visit Our Showroom <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-lg">arrow_right_alt</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Story;
