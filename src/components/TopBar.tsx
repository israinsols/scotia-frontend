import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface TopBarProps {
  currentLang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}

export const TopBar: React.FC<TopBarProps> = ({ currentLang, setLang }) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const businessLines = [
    { label: 'Personal', active: true },
    { label: 'Business', active: false },
    { label: 'Commercial', active: false },
    { label: 'Global Markets', active: false },
    { label: 'Global Wealth', active: false },
    { label: 'About Us', active: false },
    { label: 'Investors', active: false },
  ];

  return (
    <div className="bg-white border-b border-gray-200 text-[11px] font-sans text-gray-600">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
        
        {/* Left navigation links */}
        <nav className="flex items-center space-x-5 overflow-x-auto scrollbar-none" aria-label="Line of Business">
          {businessLines.map((line, idx) => (
            <a
              key={idx}
              href="#"
              className={`py-1 transition-colors ${
                line.active
                  ? 'text-[#EC111A] font-bold border-b-2 border-[#EC111A]'
                  : 'text-gray-600 hover:text-black hover:underline'
              }`}
            >
              {line.label}
            </a>
          ))}
        </nav>

        {/* Right navigation utilities */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-black hover:underline">
            More Sites
          </a>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1 text-gray-600 hover:text-black py-0.5"
            >
              <span>{currentLang === 'en' ? 'English' : 'Français'}</span>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white text-gray-900 shadow-lg rounded border border-gray-200 py-1 z-50">
                <button
                  onClick={() => { setLang('en'); setLangDropdownOpen(false); }}
                  className="w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 flex items-center justify-between font-medium"
                >
                  <span>English</span>
                  {currentLang === 'en' && <Check className="w-3 h-3 text-[#EC111A]" />}
                </button>
                <button
                  onClick={() => { setLang('fr'); setLangDropdownOpen(false); }}
                  className="w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 flex items-center justify-between font-medium"
                >
                  <span>Français</span>
                  {currentLang === 'fr' && <Check className="w-3 h-3 text-[#EC111A]" />}
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
