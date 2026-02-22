import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../data/products';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="pt-40 pb-32 min-h-screen flex flex-col items-center justify-center px-6">
        <span className="material-symbols-outlined text-6xl text-stone-200 mb-6">inventory_2</span>
        <h2 className="serif-text text-2xl text-stone-850 mb-4">Product not found</h2>
        <p className="text-stone-850/50 mb-8">The product you're looking for may have been moved or discontinued.</p>
        <Link to="/collections" className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1">
          Browse Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-850/50 uppercase tracking-widest">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/collections" className="hover:text-primary transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-primary">{product.title}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 md:py-24 px-6 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 shadow-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2">
                {product.isNewArrival && (
                  <span className="bg-primary text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">New Arrival</span>
                )}
                {product.isBestSeller && (
                  <span className="bg-stone-850 text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Best Seller</span>
                )}
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">{product.subCategory}</p>
              <h1 className="serif-text text-4xl md:text-5xl text-stone-850 leading-tight">{product.title}</h1>
              <p className="text-lg text-stone-850/70 leading-relaxed">{product.description}</p>

              <div className="pt-6 space-y-4">
                <p className="text-sm text-stone-850/50">
                  Every AYSHA piece is available for immediate delivery or bespoke customization. Visit our Bompai showroom to experience it in person.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-stone-850 transition-all shadow-lg"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Inquire Now
                  </Link>
                  <Link
                    to="/showroom"
                    className="inline-flex items-center gap-2 border-2 border-stone-850 text-stone-850 px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-stone-850 hover:text-white transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">storefront</span>
                    View in Showroom
                  </Link>
                </div>
              </div>

              <div className="pt-8 border-t border-stone-200">
                <p className="text-[10px] uppercase tracking-widest font-bold text-stone-850/50 mb-2">Details</p>
                <ul className="space-y-2 text-sm text-stone-850/70">
                  <li><strong className="text-stone-850">Category:</strong> {product.category}</li>
                  <li><strong className="text-stone-850">Subcategory:</strong> {product.subCategory}</li>
                  <li><strong className="text-stone-850">Availability:</strong> Floor model & custom orders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related / Back to collections */}
      <section className="py-16 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-stone-850/50 mb-6">Explore more from our collection</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/collections" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2 group">
              Browse Catalog <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </Link>
            <Link to="/showroom" className="text-stone-850 font-bold uppercase tracking-widest text-xs flex items-center gap-2 group">
              Visit Showroom <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
