import React from 'react';
import { Link } from 'react-router-dom';
import { showroomInventory } from '../data/products';

const SHOWROOM_HERO_IMAGE = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1920'; // Cozy living room with cushions

const Showroom: React.FC = () => {

  return (
    <div className="animate-in fade-in duration-700">
      {/* Header with background image */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-850/50 z-10"></div>
          <img
            src={SHOWROOM_HERO_IMAGE}
            alt="AYSHA Showroom"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Bompai Flagship Tour</span>
          <h1 className="serif-text text-5xl md:text-7xl text-white">The Floor Inventory</h1>
          <p className="text-white/90 max-w-2xl mt-6 text-lg font-light leading-relaxed">
            Experience our current floor models. Every piece displayed is available for immediate delivery or bespoke customization.
          </p>
        </div>
      </section>

      {/* Categorized Inventory Feed */}
      <div className="bg-background-light">
        {showroomInventory.map((section, sIdx) => (
          <section key={sIdx} className="py-24 border-b border-stone-100 last:border-0">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="serif-text text-3xl md:text-4xl text-stone-850 whitespace-nowrap">{section.category}</h2>
                <div className="h-px bg-stone-200 w-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {section.items.map((item) => (
                  <Link key={item.id} to={`/product/${item.id}`} className="group block">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-stone-100 mb-6">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
                        <p className="text-[8px] font-black uppercase tracking-widest text-primary">Floor Model Available</p>
                      </div>
                      <div className="absolute inset-0 bg-stone-850/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-stone-850 px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest">View Details</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="serif-text text-2xl text-stone-850 group-hover:text-primary transition-colors">{item.name}</h3>
                      <p className="text-stone-850/50 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Contact Trigger */}
      <section className="py-32 bg-stone-850 text-white text-center">
        <h2 className="serif-text text-4xl md:text-5xl mb-8">Looking for something bespoke?</h2>
        <p className="text-white/50 max-w-xl mx-auto mb-12 font-light">Visit us in Bompai for a private consultation with our master designers.</p>
        <Link to="/contact" className="bg-primary text-white px-12 py-5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-stone-850 transition-all shadow-xl">
          Book Design Session
        </Link>
      </section>

    </div>
  );
};

export default Showroom;
