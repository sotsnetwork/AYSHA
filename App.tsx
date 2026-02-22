
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Showroom from './pages/Showroom';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Story from './pages/Story';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AICurator from './components/AICurator';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Showroom', path: '/showroom' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-background-light/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">temple_hindu</span>
          <div className="flex flex-col space-y-1">
            <span className="text-2xl font-black tracking-[0.25em] uppercase text-stone-850 leading-none">AYSHA</span>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-primary leading-none">Furniture & Electronics</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-primary ${pathname === link.path ? 'text-primary' : 'text-stone-850/70'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-stone-850 transition-all shadow-md">
          Book Visit
        </Link>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-stone-850 text-white py-20 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-primary text-4xl">temple_hindu</span>
          <div className="flex flex-col space-y-1">
            <span className="text-2xl font-black tracking-[0.25em] uppercase text-white leading-none">AYSHA</span>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-primary leading-none">Furniture & Electronics</span>
          </div>
        </div>
        <p className="text-white/50 font-light max-w-sm leading-relaxed">
          Defining the standard for luxury living in Northern Nigeria. Quality furniture and state-of-the-art electronics for the modern home since 1995.
        </p>
      </div>
      <div>
        <h5 className="font-bold mb-6 text-xs uppercase tracking-widest text-primary">Explore</h5>
        <ul className="space-y-4 text-sm text-white/60">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/collections" className="hover:text-primary transition-colors">Collections</Link></li>
          <li><Link to="/showroom" className="hover:text-primary transition-colors">Showroom</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold mb-6 text-xs uppercase tracking-widest text-primary">Connect</h5>
        <div className="flex gap-4 mb-6">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-xl">share</span>
          </a>
          <a href="mailto:info@aysha.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-xl">mail</span>
          </a>
          <a href="tel:08088549819" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-xl">call</span>
          </a>
        </div>
        <p className="text-xs text-white/40 font-medium">Bompai District, Kano, Nigeria</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-[0.3em]">
      <p>© 2024 AYSHA Furniture & Electronics. All rights reserved.</p>
      <div className="flex gap-8">
        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/story" element={<Story />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AICurator />
      </div>
    </Router>
  );
};

export default App;
