import React from 'react';
import { Link } from 'react-router-dom';
import { featuredProductIds, getProductById } from '../data/products';

// AYSHA furniture & electronics showroom images
const HERO_IMAGE = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1920'; // Luxury living room / furniture
const NARRATIVE_IMAGE = 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800'; // Craftsmanship / furniture making

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-850/40 z-10"></div>
          <img 
            src={HERO_IMAGE}
            alt="AYSHA Showroom"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-8 block animate-in slide-in-from-bottom-4 duration-1000">Established 1995</span>
          <h1 className="serif-text text-5xl md:text-8xl text-white leading-tight mb-8 animate-in slide-in-from-bottom-6 duration-1000 delay-100">
            A Legacy of Elegance by <br/><i className="font-normal italic">AYSHA</i>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            Celebrating nearly three decades of bringing world-class furniture and cutting-edge electronics to Northern Nigeria’s most discerning homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link to="/collections" className="bg-primary text-white px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-stone-850 transition-all shadow-xl">
              Explore Collections
            </Link>
            <Link to="/showroom" className="border border-white text-white px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Our Showroom
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl font-light">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-6 lg:px-40 bg-background-light">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="serif-text text-4xl md:text-5xl text-stone-850 leading-tight">AYSHA: From a Local Vision to a Landmark of Luxury</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-lg text-stone-850/70 leading-relaxed font-light">
              Our journey began with a vision to redefine Nigerian living. At AYSHA, we recognize a growing desire for furniture that doesn't just fill a room, but defines a home's soul.
            </p>
            <p className="text-lg text-stone-850/70 leading-relaxed font-light">
              We believe that luxury is a resonance of quality. Whether it is our handcrafted furniture or our state-of-the-art electronics, we bring a timeless comfort to your sanctuary.
            </p>
            <div className="pt-6">
              <Link to="/story" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2 group">
                Read our full story 
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={NARRATIVE_IMAGE}
                alt="AYSHA Craftsmanship" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-lg hidden lg:block shadow-xl">
              <p className="serif-text text-4xl text-white">28+</p>
              <p className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-32 bg-stone-100/50 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-10 opacity-40">format_quote</span>
          <h3 className="serif-text text-3xl md:text-5xl italic text-stone-850 leading-relaxed">
            "AYSHA is more than a name; it is a promise of quality and hospitality, designed to welcome the world into your living room."
          </h3>
          <p className="mt-12 font-bold uppercase tracking-[0.4em] text-sm text-primary">— Alhaji Musa Abdullahi, Founder</p>
        </div>
      </section>

      {/* AYSHA Masterpieces — featured products (click opens details) */}
      <section className="py-32 px-6 bg-background-light">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="serif-text text-4xl md:text-5xl mb-6">AYSHA Masterpieces</h2>
            <p className="text-stone-850/50 uppercase tracking-widest text-xs">Featured products — click for details</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full">
            {featuredProductIds.map((productId, idx) => {
              const product = getProductById(productId);
              if (!product) return null;
              return (
                <Link key={productId} to={`/product/${productId}`} className={`group block ${[1, 4, 7].includes(idx) ? 'pt-8 md:pt-12' : ''}`}>
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-stone-850/20 group-hover:bg-transparent transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-850/10">
                      <span className="bg-white text-stone-850 px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest">View Details</span>
                    </div>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-850/40 text-center group-hover:text-primary transition-colors">{product.title}</p>
                </Link>
              );
            })}
          </div>
          <Link to="/showroom" className="mt-16 text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2 group">
            View all in Showroom
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
