
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CollectionItem } from '../types';
import { collectionItems } from '../data/products';

const Collections: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTag, setActiveTag] = useState<'all' | 'new' | 'best'>('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'appliances', name: 'Small Appliances' },
  ];

  const subFilters = [
    { id: 'all', name: 'Featured' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'best', name: 'Best Sellers' },
  ];

  const items: CollectionItem[] = collectionItems;

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const catMatch = activeCategory === 'all' || item.category === activeCategory;
      const tagMatch = activeTag === 'all' || 
                       (activeTag === 'new' && item.isNewArrival) || 
                       (activeTag === 'best' && item.isBestSeller);
      return catMatch && tagMatch;
    });
  }, [activeCategory, activeTag]);

  return (
    <div className="pt-40 pb-32 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Exquisite Selection</span>
          <h1 className="serif-text text-5xl md:text-7xl mb-6">AYSHA Catalog</h1>
          <p className="text-stone-850/50 max-w-2xl mx-auto font-light leading-relaxed">
            Browse our full range of master-crafted furniture and cutting-edge home electronics.
          </p>
        </header>

        {/* Top Level Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat.id 
                ? 'bg-stone-850 text-white shadow-xl' 
                : 'bg-stone-100 text-stone-850/60 hover:bg-stone-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Sub-Filters: New Arrivals / Best Sellers */}
        <div className="flex justify-center gap-10 mb-16 border-b border-stone-200 pb-6">
          {subFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveTag(filter.id as any)}
              className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all relative ${
                activeTag === filter.id ? 'text-primary' : 'text-stone-850/30 hover:text-stone-850'
              }`}
            >
              {filter.name}
              {activeTag === filter.id && (
                <span className="absolute -bottom-[25px] left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {filteredItems.map(item => (
              <Link key={item.id} to={`/product/${item.id}`} className="group block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-6 bg-stone-100 shadow-sm transition-shadow hover:shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Status Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.isNewArrival && (
                      <span className="bg-primary text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">New Arrival</span>
                    )}
                    {item.isBestSeller && (
                      <span className="bg-stone-850 text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Best Seller</span>
                    )}
                  </div>
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-stone-850/30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white text-stone-850 px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-2xl group-hover:bg-primary group-hover:text-white transition-all w-48 text-center">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary">{item.subCategory}</p>
                  </div>
                  <h3 className="serif-text text-2xl text-stone-850 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-stone-850/50 text-sm font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center">
            <span className="material-symbols-outlined text-6xl text-stone-200 mb-6">inventory_2</span>
            <p className="text-stone-850/40 font-medium">No items found matching your filters.</p>
            <button onClick={() => {setActiveCategory('all'); setActiveTag('all');}} className="mt-4 text-primary font-bold uppercase text-[10px] tracking-widest border-b border-primary pb-1">Reset Filters</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Collections;
