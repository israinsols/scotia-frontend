import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Phone, Award, Lock, ChevronDown, X, ArrowRight, Menu, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenSignIn: () => void;
  currentLang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSignIn, currentLang, setLang }) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const businessLines = [
    { label: 'Personal', active: true },
    { label: 'Business', active: false },
    { label: 'Commercial', active: false },
    { label: 'Global Markets', active: false },
    { label: 'Global Wealth', active: false },
    { label: 'About Us', active: false },
    { label: 'Investors', active: false },
  ];

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

  const megaMenuItems = [
    { id: 'accounts', label: 'Bank Accounts', items: ['Chequing accounts', 'Savings accounts', 'Seniors bank accounts', 'Student and youth accounts'] },
    { id: 'cards', label: 'Credit Cards', items: ['All Credit Cards', 'Cash Back Cards', 'Scene+ Rewards Cards', 'No Annual Fee Cards'] },
    { id: 'investments', label: 'Investments', items: ['GICs', 'TFSA', 'RRSP', 'FHSA', 'Scotia iTRADE'] },
    { id: 'loans', label: 'Loans & Lines of Credit', items: ['Personal Line of Credit', 'Scotia Plan Loans', 'Auto Loans'] },
    { id: 'mortgages', label: 'Mortgages', items: ['Fixed Rate', 'Variable Rate', 'Scotia Total Equity Plan (STEP)'] },
    { id: 'insurance', label: 'Insurance', items: ['Creditor Insurance', 'Home Insurance', 'Auto Insurance', 'Travel Insurance'] },
    { id: 'advice', label: 'Advice+', items: ['Scotia Advice+ Centre', 'Financial Health Checkup', 'Book an Appointment'] },
    { id: 'scene', label: 'Scene+', items: ['Earn Points', 'Redeem Points', 'Scene+ Partners'] },
    { id: 'programs', label: 'Programs', items: ['StartRight Newcomers', 'Healthcare Program', 'Student Hub'] },
    { id: 'rates', label: 'Rates & Fees', items: ['Mortgage Rates', 'GIC Rates', 'Savings Rates', 'Prime Rate'] },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-50 font-sans border-t-2 border-[#EC111A]">
      
      {/* ROW 1: TOP UTILITY LINE OF BUSINESS BAR — hidden on mobile */}
      <div className="hidden md:block bg-[#F8F9FA] border-b border-gray-200/80 text-[12px] text-[#4A4A4A]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
          
          {/* Left: Line of business tabs */}
          <nav className="flex items-center space-x-6 overflow-x-auto scrollbar-none h-full" aria-label="Line of Business">
            {businessLines.map((line, idx) => (
              <a
                key={idx}
                href="#"
                className={`h-full flex items-center transition-colors ${
                  line.active
                    ? 'text-[#222222] font-bold border-b-[3px] border-[#EC111A] pt-[3px]'
                    : 'text-[#555555] hover:text-black'
                }`}
              >
                {line.label}
              </a>
            ))}
          </nav>

          {/* Right: More Sites & Language selector */}
          <div className="flex items-center space-x-6 text-[12px] text-[#555555]">
            <a href="#" className="hover:text-black hover:underline">
              More Sites
            </a>

            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 hover:text-black py-0.5"
              >
                <span>{currentLang === 'en' ? 'English' : 'Français'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#EC111A]" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white text-gray-900 shadow-xl rounded border border-gray-200 py-1 z-50">
                  <button
                    onClick={() => { setLang('en'); setLangDropdownOpen(false); }}
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 flex items-center justify-between"
                  >
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => { setLang('fr'); setLangDropdownOpen(false); }}
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 flex items-center justify-between"
                  >
                    <span>Français</span>
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ROW 2: MAIN HEADER (LOGO, SEARCH, UTILITY ICONS, SIGN IN) */}
      <div className="bg-white py-3 sm:py-3.5 md:py-4 border-b border-gray-100">
        
        {/* Mobile Header Layout (3-Column Grid: Left Logo, Center Sign In, Right Hamburger) */}
        <div className="grid grid-cols-3 items-center md:hidden px-4 sm:px-6">
          {/* Left: Mobile Red Icon Logo */}
          <div className="flex justify-start">
            <a href="#" className="flex items-center shrink-0">
              <img
                src="https://www.scotiabank.com/content/dam/scotiabank/images/logos/2023/scotiabank-logo-red-mobile.svg"
                alt="Scotiabank Logo"
                className="h-7 sm:h-8 w-auto"
              />
            </a>
          </div>

          {/* Center: Red Lock Icon + Sign In Text */}
          <div className="flex justify-center">
            <button
              onClick={onOpenSignIn}
              className="flex items-center space-x-1.5 text-[#EC111A] hover:text-[#C40912] font-semibold text-[17px] transition whitespace-nowrap"
            >
              <Lock className="w-5 h-5 text-[#EC111A] stroke-[2.2] shrink-0" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Right: Hamburger Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center justify-center text-[#222222] hover:text-black transition"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Desktop Header Layout */}
        <div className="hidden md:flex max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 items-center justify-start md:gap-16 lg:gap-32">
          
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="https://www.scotiabank.com/content/dam/scotiabank/images/logos/2019/scotiabank-logo-red-desktop-200px.svg"
              alt="Scotiabank Logo"
              className="h-7 md:h-8 w-auto"
            />
          </a>

          {/* Search Box — desktop only */}
          <div className="w-[275px] relative hidden md:block" ref={searchRef}>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Begin Your Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#EC111A] focus:ring-1 focus:ring-[#EC111A]"
              />
              {searchQuery ? (
                <button onClick={() => setSearchQuery('')} className="absolute right-3.5 text-gray-400">
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <Search className="w-5 h-5 text-gray-500 absolute right-3.5 stroke-[2]" />
              )}
            </div>

            {/* Trending Searches Dropdown */}
            {isSearchFocused && (
              <div className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 z-50">
                <div className="px-3 pb-1 text-[10px] font-bold text-gray-400 uppercase">
                  Trending Searches
                </div>
                {trendingSearches.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSearchQuery(item); setIsSearchFocused(false); }}
                    className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-red-50 hover:text-[#EC111A] flex items-center space-x-2"
                  >
                    <Search className="w-3.5 h-3.5 text-gray-400" />
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Right Utility Icons & Sign In */}
          <div className="hidden md:flex items-center space-x-8 shrink-0 ml-auto">
            
            {/* Location */}
            <a href="#" className="flex flex-col items-center text-[#333333] hover:text-[#EC111A] group transition">
              <MapPin className="w-7 h-12 text-[#333333] group-hover:text-[#EC111A] mb-1 stroke-[1.5]" />
              <span className="text-[13px] ">Location</span>
            </a>

            {/* Contact Us */}
            <a href="#" className="flex flex-col items-center text-[#333333] hover:text-[#EC111A] group transition">
              <Phone className="w-7 h-12 text-[#333333] group-hover:text-[#EC111A] mb-1 stroke-[1.5]" />
              <span className="text-[13px] ">Contact Us</span>
            </a>

            {/* Offers */}
            <a href="#" className="flex flex-col items-center text-[#333333] hover:text-[#EC111A] group transition">
              <Award className="w-7 h-12 text-[#333333] group-hover:text-[#EC111A] mb-1 stroke-[1.5]" />
              <span className="text-[13px] ">Offers</span>
            </a>

            {/* Sign In Button */}
            <div className="flex flex-col items-center shrink-0">
              <button
                onClick={onOpenSignIn}
                className="bg-[#EC111A] hover:bg-[#C40912] text-white font-bold px-18 py-4 rounded-md flex items-center space-x-2 text-sm whitespace-nowrap shrink-0 shadow-xs hover:shadow-md transition duration-150"
              >
                <Lock className="w-4 h-4 stroke-[2.5] shrink-0" />
                <span className="whitespace-nowrap">Sign In</span>
              </button>
              <div className="text-[13px] text-gray-600 mt-1">
                New to Scotia OnLine?{' '}
                <a href="#" className="text-[#333333] font-bold underline hover:text-[#EC111A]">
                  Activate Now
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ROW 3: BOTTOM MEGA MENU — hidden on mobile */}
      <div className="hidden md:block bg-white border-b border-gray-200 py-3 text-[15px] relative z-40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-11 text-[#4A4A4A] overflow-x-auto scrollbar-none">
            {megaMenuItems.map((item) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveCategory(item.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="hover:text-[#EC111A]  whitespace-nowrap transition-colors flex items-center space-x-0.5">
                  <span>{item.label}</span>
                </button>

                {/* Dropdown Flyout */}
                {activeCategory === item.id && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-200 p-4 z-50">
                    <ul className="space-y-2">
                      {item.items.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a href="#" className="text-xs text-gray-700 hover:text-[#EC111A] flex items-center justify-between font-medium">
                            <span>{sub}</span>
                            <ArrowRight className="w-3 h-3 text-[#EC111A]" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col md:hidden">
          
          {/* Drawer Header (Sticky Top with Red Border Line, Logo, Center Sign In, Boxed Close Button) */}
          <div className="bg-white border-t-2 border-[#EC111A] border-b border-gray-100 sticky top-0 z-10">
            <div className="grid grid-cols-3 items-center px-4 py-3 sm:px-6">
              
              {/* Left: Red Mobile Logo */}
              <div className="flex justify-start">
                <a href="#" className="flex items-center shrink-0">
                  <img
                    src="https://www.scotiabank.com/content/dam/scotiabank/images/logos/2023/scotiabank-logo-red-mobile.svg"
                    alt="Scotiabank Logo"
                    className="h-7 sm:h-8 w-auto"
                  />
                </a>
              </div>

              {/* Center: Red Lock Icon + Sign In */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignIn();
                  }}
                  className="flex items-center space-x-1.5 text-[#EC111A] hover:text-[#C40912] font-semibold text-[17px] transition whitespace-nowrap"
                >
                  <Lock className="w-5 h-5 text-[#EC111A] stroke-[2.2] shrink-0" />
                  <span>Sign In</span>
                </button>
              </div>

              {/* Right: Boxed X Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded border border-gray-400/80 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[2]" />
                </button>
              </div>

            </div>
          </div>

          {/* Drawer Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto bg-white">
            
            {/* Search Input Box */}
            <div className="p-6 bg-white border-b border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Begin Your Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#EC111A]"
                />
                <Search className="w-5 h-5 text-gray-500 absolute right-4 stroke-[1.8]" />
              </div>
            </div>

            {/* Menu Items List */}
            <div>
              {megaMenuItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100">
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between px-6 py-4.5 text-[17px] text-[#333333] hover:bg-gray-50 transition min-h-[56px]"
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      className={`w-4.5 h-4.5 text-gray-400 transition-transform duration-200 ${
                        mobileAccordion === item.id ? 'rotate-90 text-[#EC111A]' : ''
                      }`}
                    />
                  </button>

                  {/* Accordion Expanded Sub-items */}
                  {mobileAccordion === item.id && (
                    <ul className="bg-gray-50/70 px-6 pb-3 pt-1 space-y-1">
                      {item.items.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a
                            href="#"
                            className="flex items-center justify-between py-2.5 text-sm text-gray-700 hover:text-[#EC111A] font-medium border-b border-gray-100/60 last:border-0"
                          >
                            <span>{sub}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#EC111A] shrink-0" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Language Select Section */}
            <div className="px-6 py-6 border-b border-gray-100">
              <label htmlFor="mobile-lang-select" className="block font-bold text-[#222222] text-base mb-2">
                Language
              </label>
              <select
                id="mobile-lang-select"
                value={currentLang}
                onChange={(e) => setLang(e.target.value as 'en' | 'fr')}
                className="w-40 px-3 py-2 border border-gray-300 rounded bg-white text-base text-gray-700 focus:outline-none focus:border-[#EC111A]"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>

            {/* Scotiabank Sites Select Section */}
            <div className="px-6 py-6 border-b border-gray-100">
              <label htmlFor="mobile-sites-select" className="block font-bold text-[#222222] text-base mb-2">
                Scotiabank Sites
              </label>
              <select
                id="mobile-sites-select"
                className="w-44 px-3 py-2 border border-gray-300 rounded bg-white text-base text-gray-700 focus:outline-none focus:border-[#EC111A]"
              >
                {businessLines.map((line, idx) => (
                  <option key={idx} value={line.label}>
                    {line.label}
                  </option>
                ))}
              </select>
            </div>

            {/* More Sites Section */}
            <div className="px-6 py-6 border-b border-gray-100">
              <a href="#" className="text-[17px] text-[#333333] hover:underline font-normal">
                More Sites
              </a>
            </div>

          </div>

          {/* Sticky Bottom Utility Bar (Contact Us & Offers) */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 py-4 px-6 sm:px-8 flex items-center justify-between text-[#333333] shrink-0 z-10">
            {/* Contact Us */}
            <a href="#" className="flex flex-col items-center gap-1.5 text-xs text-[#333333] hover:text-[#EC111A] transition">
              <Phone className="w-6.5 h-6.5 text-[#333333] stroke-[1.5]" />
              <span className="text-[13px] font-medium">Contact Us</span>
            </a>

            {/* Offers */}
            <a href="#" className="flex flex-col items-center gap-1.5 text-xs text-[#333333] hover:text-[#EC111A] transition">
              <Award className="w-6.5 h-6.5 text-[#333333] stroke-[1.5]" />
              <span className="text-[13px] font-medium">Offers</span>
            </a>
          </div>

        </div>
      )}

    </header>
  );
};
