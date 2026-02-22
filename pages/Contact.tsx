
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Contact Details & Form */}
          <div className="space-y-16">
            <header>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Concierge & Inquiries</span>
              <h1 className="serif-text text-5xl md:text-6xl text-stone-850 mb-6">Connect with <br/>AYSHA</h1>
              <p className="text-stone-850/50 text-lg leading-relaxed font-light">
                Whether you are seeking bespoke furniture or the latest in smart home tech, our specialists are ready to assist you.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Direct Reach</h4>
                <div className="space-y-2">
                  <a href="tel:08088549819" className="block text-lg font-medium hover:text-primary transition-colors">0808 854 9819</a>
                  <a href="tel:08166485357" className="block text-lg font-medium hover:text-primary transition-colors">0816 648 5357</a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Email Support</h4>
                <a href="mailto:concierge@aysha.com" className="block text-lg font-medium hover:text-primary transition-colors underline underline-offset-8 decoration-primary/30">concierge@aysha.com</a>
              </div>
            </div>

            <form className="bg-stone-100 p-8 md:p-12 rounded-3xl space-y-8 border border-stone-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-850/40">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-0 border-b border-stone-300 focus:ring-0 focus:border-primary transition-colors px-0 py-3" placeholder="Alhaji Aminu..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-850/40">Inquiry Type</label>
                  <select className="w-full bg-transparent border-0 border-b border-stone-300 focus:ring-0 focus:border-primary transition-colors px-0 py-3 appearance-none">
                    <option>Bespoke Furniture</option>
                    <option>Home Electronics</option>
                    <option>Showroom Visit</option>
                    <option>Vaults & Safes</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-850/40">Your Vision</label>
                <textarea rows={4} className="w-full bg-transparent border-0 border-b border-stone-300 focus:ring-0 focus:border-primary transition-colors px-0 py-3 resize-none" placeholder="Tell us about your space..."></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-850 text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary transition-all shadow-xl">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Map & Hours */}
          <div className="lg:sticky lg:top-40 space-y-12">
            <div className="h-[500px] relative rounded-3xl overflow-hidden shadow-2xl group border border-stone-200">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeiX3HQPcjCZ6iZ3kj8R1guLHAFapwoUSaDj0VRjP7PKcpdHyCUUb8nmwSB0eBaYNOt0yEByHOBP0An_6vAlTgVCh9s11zH2i8IjFJwyf4c_q82ml0TsA8vrWdPwBDHRWCy3qmFEE5dbxD3somNHD_ww_FqwufpC6U6ymv_PQTNX39Gey48zkyemYM8dlaCXQCo7kDarKBxvV2Ef_UpAOkM18xstjyIwzy7NoeFDaSljRvt9HZqoyhaCe0i43cpHbxBtimePAH7u8" 
                alt="Location Map" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-850/10 pointer-events-none"></div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-primary/20 max-w-[240px]">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <h5 className="font-bold text-stone-850 text-sm">Flagship HQ</h5>
                    <p className="text-[11px] text-stone-850/60 leading-relaxed mt-2">Plot 42, Gwarzo Road, Bompai District, Kano, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background-light p-10 rounded-3xl border border-stone-100 shadow-sm flex flex-col md:flex-row justify-between gap-12">
              <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">schedule</span>
                   Opening Hours
                 </h4>
                 <div className="grid grid-cols-1 gap-2 text-sm">
                   <div className="flex justify-between w-64 border-b border-stone-100 pb-2">
                     <span className="text-stone-850/50">Mon - Fri</span>
                     <span className="font-bold">9am - 6pm</span>
                   </div>
                   <div className="flex justify-between w-64 border-b border-stone-100 pb-2">
                     <span className="text-stone-850/50">Saturday</span>
                     <span className="font-bold">10am - 4pm</span>
                   </div>
                   <div className="flex justify-between w-64 border-b border-stone-100 pb-2">
                     <span className="text-stone-850/50">Sunday</span>
                     <span className="font-bold text-primary italic">Closed</span>
                   </div>
                 </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">handshake</span>
                   Corporate
                 </h4>
                 <p className="text-xs text-stone-850/60 leading-relaxed max-w-[200px]">
                   For partnerships, interior design projects, and bulk electronics supplies.
                 </p>
                 <a href="#" className="text-[10px] font-black uppercase tracking-widest text-stone-850 border-b border-stone-850 hover:text-primary hover:border-primary transition-all pb-1">B2B Portal</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
