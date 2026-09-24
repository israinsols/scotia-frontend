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
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
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
    <header className="w-full bg-white shadow-xs sticky top-0 z-50 font-sans">
      
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
      <div className="bg-white py-2.5 sm:py-3 md:py-4 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-8 flex items-center justify-between gap-1 sm:gap-3 md:gap-4">
          
          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition shrink-0"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Official Scotiabank Red Logo Image */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="https://www.scotiabank.com/content/dam/scotiabank/images/logos/2019/scotiabank-logo-red-desktop-200px.svg"
              alt="Scotiabank Logo"
              className="h-5 sm:h-7 md:h-8 w-auto max-w-[130px] sm:max-w-none"
            />
          </a>

          {/* Search Box — desktop only */}
          <div className="w-[340px] relative hidden md:block" ref={searchRef}>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Begin Your Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#EC111A] focus:ring-1 focus:ring-[#EC111A]"
              />
              {searchQuery ? (
                <button onClick={() => setSearchQuery('')} className="absolute right-3.5 text-gray-400">
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <Search className="w-4 h-4 text-gray-500 absolute right-3.5 stroke-[2]" />
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

          {/* Right Utility Icons & Sign In */}
          <div className="flex items-center space-x-1 sm:space-x-3 md:space-x-8 shrink-0">
            
            {/* Mobile search icon */}
            <button
              className="md:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-700 hover:text-[#EC111A] transition shrink-0"
              onClick={() => setMobileSearchOpen((v) => !v)}
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
            </button>

            {/* Location */}
            <a href="#" className="hidden md:flex flex-col items-center text-[#333333] hover:text-[#EC111A] group transition">
              <MapPin className="w-5 h-5 text-[#333333] group-hover:text-[#EC111A] mb-1 stroke-[1.5]" />
              <span className="text-[11px] font-medium">Location</span>
            </a>

            {/* Contact Us */}
            <a href="#" className="hidden md:flex flex-col items-center text-[#333333] hover:text-[#EC111A] group transition">
              <Phone className="w-5 h-5 text-[#333333] group-hover:text-[#EC111A] mb-1 stroke-[1.5]" />
              <span className="text-[11px] font-medium">Contact Us</span>
            </a>

            {/* Offers */}
            <a href="#" className="hidden md:flex flex-col items-center text-[#333333] hover:text-[#EC111A] group transition">
              <Award className="w-5 h-5 text-[#333333] group-hover:text-[#EC111A] mb-1 stroke-[1.5]" />
              <span className="text-[11px] font-medium">Offers</span>
            </a>

            {/* Sign In Button */}
            <div className="flex flex-col items-center shrink-0">
              <button
                onClick={onOpenSignIn}
                className="bg-[#EC111A] hover:bg-[#C40912] text-white font-bold px-2.5 sm:px-4 md:px-7 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 text-xs md:text-sm whitespace-nowrap shrink-0 shadow-xs hover:shadow-md transition duration-150"
              >
                <Lock className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5] shrink-0" />
                <span className="whitespace-nowrap">Sign In</span>
              </button>
              <div className="hidden md:block text-[10px] text-gray-600 mt-1">
                New to Scotia OnLine?{' '}
                <a href="#" className="text-[#333333] font-bold underline hover:text-[#EC111A]">
                  Activate Now
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile inline search bar — shown when search icon tapped */}
        {mobileSearchOpen && (
          <div className="md:hidden px-4 pb-3 pt-2 border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Begin Your Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#EC111A] focus:ring-1 focus:ring-[#EC111A]"
              />
              {searchQuery ? (
                <button onClick={() => setSearchQuery('')} className="absolute right-3.5 text-gray-400">
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <Search className="w-4 h-4 text-gray-500 absolute right-3.5 stroke-[2]" />
              )}
            </div>
          </div>
        )}
      </div>

      {/* ROW 3: BOTTOM MEGA MENU — hidden on mobile */}
      <div className="hidden md:block bg-white border-b border-gray-200 py-3 text-[13px] relative z-40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-8 text-[#4A4A4A] overflow-x-auto scrollbar-none">
            {megaMenuItems.map((item) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveCategory(item.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="hover:text-[#EC111A] font-medium whitespace-nowrap transition-colors flex items-center space-x-0.5">
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
        <div className="fixed inset-0 z-[100] flex md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer panel */}
          <div className="relative w-[85vw] max-w-[360px] h-full bg-white flex flex-col shadow-2xl overflow-y-auto">
            
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
              <img
                src="https://www.scotiabank.com/content/dam/scotiabank/images/logos/2019/scotiabank-logo-red-desktop-200px.svg"
                alt="Scotiabank"
                className="h-7 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Drawer Sign In Button */}
            <div className="p-4 bg-red-50/50 border-b border-gray-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignIn();
                }}
                className="w-full bg-[#EC111A] hover:bg-[#C40912] text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 text-sm shadow-sm transition"
              >
                <Lock className="w-4 h-4 stroke-[2.5]" />
                <span>Sign In to Scotia OnLine</span>
              </button>
            </div>

            {/* Business lines tabs */}
            <div className="px-5 py-3 border-b border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-2 tracking-wider">Line of Business</p>
              <div className="flex flex-wrap gap-2">
                {businessLines.map((line, idx) => (
                  <button
                    key={idx}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                      line.active
                        ? 'bg-[#EC111A] text-white border-[#EC111A]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#EC111A] hover:text-[#EC111A]'
                    }`}
                  >
                    {line.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile search */}
            <div className="px-5 py-3 border-b border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Begin Your Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#EC111A] focus:ring-1 focus:ring-[#EC111A]"
                />
                {searchQuery ? (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3.5 text-gray-400">
                    <X className="w-4 h-4" />
                  </button>
                ) : (
                  <Search className="w-4 h-4 text-gray-500 absolute right-3.5 stroke-[2]" />
                )}
              </div>
            </div>

            {/* Mega menu as accordion */}
            <div className="flex-1 overflow-y-auto">
              {megaMenuItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100">
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-[#222222] hover:bg-gray-50 transition min-h-[52px]"
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-[#EC111A] transition-transform duration-200 ${
                        mobileAccordion === item.id ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {mobileAccordion === item.id && (
                    <ul className="bg-gray-50 px-5 pb-3 space-y-1">
                      {item.items.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a
                            href="#"
                            className="flex items-center justify-between py-2.5 text-xs text-gray-700 hover:text-[#EC111A] font-medium border-b border-gray-100 last:border-0 min-h-[44px]"
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

            {/* Footer utility icons */}
            <div className="px-5 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-around text-[#333333]">
              <a href="#" className="flex flex-col items-center gap-1 text-[11px] font-medium hover:text-[#EC111A] transition min-w-[52px] min-h-[44px] justify-center">
                <MapPin className="w-5 h-5 stroke-[1.5]" />
                Location
              </a>
              <a href="#" className="flex flex-col items-center gap-1 text-[11px] font-medium hover:text-[#EC111A] transition min-w-[52px] min-h-[44px] justify-center">
                <Phone className="w-5 h-5 stroke-[1.5]" />
                Contact
              </a>
              <a href="#" className="flex flex-col items-center gap-1 text-[11px] font-medium hover:text-[#EC111A] transition min-w-[52px] min-h-[44px] justify-center">
                <Award className="w-5 h-5 stroke-[1.5]" />
                Offers
              </a>
              <div className="flex flex-col items-center gap-1 text-[11px] font-medium text-[#555555]">
                <button
                  onClick={() => setLangDropdownOpen((v) => !v)}
                  className="flex items-center gap-0.5 hover:text-[#EC111A] transition"
                >
                  <span>{currentLang === 'en' ? 'EN' : 'FR'}</span>
                  <ChevronDown className="w-3 h-3 text-[#EC111A]" />
                </button>
                {langDropdownOpen && (
                  <div className="absolute bottom-20 right-16 w-28 bg-white shadow-xl rounded border border-gray-200 py-1 z-50">
                    <button onClick={() => { setLang('en'); setLangDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-xs hover:bg-gray-100">English</button>
                    <button onClick={() => { setLang('fr'); setLangDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-xs hover:bg-gray-100">Français</button>
                  </div>
                )}
                Lang
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
