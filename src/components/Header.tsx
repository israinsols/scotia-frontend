import React, { useState } from 'react';
import { Search, MapPin, Phone, Tag, Lock, X } from 'lucide-react';

interface HeaderProps {
  onOpenSignIn: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSignIn }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const trendingSearches = [
    'Car loan calculator',
    'Mortgage calculator',
    'GIC rates',
    "Scotiabank's current offers and promotions",
    '2-step verification (2SV)',
    'How to pay bills',
    'Change or reset your password',
    'How to set up InfoAlerts'
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Scotiabank Logo */}
        <a href="#" className="flex items-center space-x-1 shrink-0">
          <span className="text-3xl font-black text-[#EC111A] tracking-tighter font-sans">
            Scotiabank<span className="text-[#EC111A]">.</span>
          </span>
        </a>

        {/* Search Bar */}
        <div className="flex-1 max-w-sm relative hidden md:block mx-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Begin Your Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="w-full pl-4 pr-10 py-1.5 bg-white border border-gray-300 rounded-full text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#EC111A]"
            />
            {searchQuery ? (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 text-gray-400">
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Search className="w-3.5 h-3.5 absolute right-3 text-gray-400" />
            )}
          </div>

          {/* Search Dropdown */}
          {isSearchFocused && (
            <div className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
              <div className="px-3 pb-1 text-[10px] font-bold text-gray-400 uppercase">
                Trending Searches
              </div>
              {trendingSearches.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(item)}
                  className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-red-50 hover:text-[#EC111A] flex items-center space-x-2"
                >
                  <Search className="w-3 h-3 text-gray-400" />
                  <span>{item}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right side utilities & Sign In */}
        <div className="flex items-center space-x-6">
          
          {/* Quick utility icon links */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-700 text-[11px]">
            <a href="#" className="flex flex-col items-center hover:text-[#EC111A] transition">
              <MapPin className="w-4 h-4 text-gray-600 mb-0.5" />
              <span>Location</span>
            </a>
            <a href="#" className="flex flex-col items-center hover:text-[#EC111A] transition">
              <Phone className="w-4 h-4 text-gray-600 mb-0.5" />
              <span>Contact Us</span>
            </a>
            <a href="#" className="flex flex-col items-center hover:text-[#EC111A] transition">
              <Tag className="w-4 h-4 text-gray-600 mb-0.5" />
              <span>Offers</span>
            </a>
          </div>

          {/* Sign In Button */}
          <div className="flex flex-col items-end">
            <button
              onClick={onOpenSignIn}
              className="bg-[#EC111A] hover:bg-[#C40912] text-white font-bold px-6 py-2 rounded-full flex items-center space-x-2 shadow-sm transition text-xs"
            >
              <Lock className="w-3.5 h-3.5 fill-current" />
              <span>Sign In</span>
            </button>
            <div className="text-[10px] text-gray-500 mt-0.5">
              New to Scotia OnLine?{' '}
              <a href="#" className="text-[#EC111A] underline font-semibold">
                Activate Now
              </a>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
