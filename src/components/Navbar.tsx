import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Phone, Award, Lock, ChevronDown, X, Menu, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

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
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
  const [mobileActiveColumn, setMobileActiveColumn] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const formatHeaderTitleCase = (header: string) => {
    return header
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

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
    {
      id: 'accounts',
      label: 'Bank Accounts',
      columns: [
        {
          header: 'PRODUCTS',
          items: ['Chequing accounts', 'Savings accounts', 'Seniors bank accounts', 'Student and youth accounts']
        },
        {
          header: 'SERVICES',
          items: ['Account services', 'Overdraft protection', 'Canada Deposit Insurance Corporation', 'Change your account', 'Regulatory information', 'International Money Transfer']
        },
        {
          header: 'RESOURCES',
          items: ['Why switch banks?', 'How to switch to Scotia', 'Tips to reduce fees', 'Banking made easy', 'Be rewarded for your banking', 'Save automatically', 'The Student Hub']
        }
      ]
    },
    {
      id: 'cards',
      label: 'Credit Cards',
      columns: [
        {
          header: 'CARD TYPES',
          items: [
            'Cash back credit cards',
            'Travel & lifestyle credit cards',
            'No annual fee credit cards',
            'Low interest credit cards',
            'Scene+ rewards credit cards',
            'Student credit cards',
            { label: 'Newcomer credit cards', isExternal: true },
            'Award-winning credit cards',
            'All credit cards'
          ]
        },
        {
          header: 'SERVICES',
          items: [
            'Activate your credit card',
            'Manage your credit card',
            'Order supplementary credit cards',
            'Click to Pay - easy, secure online checkout',
            'Scotia SelectPay - Installment payment plans',
            'Credit Card Protection insurance'
          ]
        },
        {
          header: 'RESOURCES',
          items: [
            'Digital banking guide - credit cards',
            'Credit cards welcome kits',
            'How to redeem your points',
            'Credit card fees at a glance',
            'Credit card interest rates',
            'Checking your credit score',
            'Security and fraud',
            { label: 'Credit card FAQs', isExternal: true }
          ]
        },
        {
          header: 'TOOLS',
          items: [
            'Credit card calculators and tools',
            'Credit card rewards calculator',
            'Find the right credit solution for you',
            'Compare American Express Credit Cards',
            { label: 'Interest savings calculator', isExternal: true }
          ]
        }
      ]
    },
    {
      id: 'investments',
      label: 'Investments',
      columns: [
        {
          header: 'POPULAR INVESTMENTS',
          items: [
            'Tax-Free Savings Accounts (TFSA)',
            'First Home Savings Account (FHSA)',
            'Registered Retirement Savings Plans (RRSP)',
            'Registered Education Savings Plans (RESP)',
            'Guaranteed Investment Certificates (GICs)',
            { label: 'Scotia Essentials Portfolios', isExternal: true },
            { label: 'Mutual funds', isExternal: true }
          ]
        },
        {
          header: 'WAYS TO INVEST',
          items: [
            'Talk to a Scotia advisor',
            'Guided investing - Scotia Smart Investor',
            { label: 'Self-directed investing – Scotia iTRADE', isExternal: true },
            'Wealth management',
            'Scotia Financial Planning'
          ]
        },
        {
          header: 'TOOLS AND RESOURCES',
          items: [
            'Investment calculators and tools',
            'TFSA calculator',
            'Investing basics',
            'Investment account fees',
            'Pre-Authorized Contributions (PAC)',
            'Regulatory disclosures'
          ]
        }
      ]
    },
    {
      id: 'loans',
      label: 'Loans & Lines of Credit',
      columns: [
        {
          header: 'LOANS',
          items: [
            'Scotia Plan® Loan',
            'Auto loans',
            'Grad auto loans',
            'StartRight auto finance program',
            'Marine & boat loans',
            'Recreational vehicle (RV) loan'
          ]
        },
        {
          header: 'LINES OF CREDIT',
          items: [
            'ScotiaLine® Personal Line of Credit',
            'ScotiaLine® Personal Line of Credit (STEP)',
            'ScotiaLine® Personal Line of Credit for students',
            'Scotia RSP catch-up line of credit'
          ]
        },
        {
          header: 'TOOLS',
          items: ['Auto loan payment calculator', 'Personal loan calculator']
        },
        {
          header: 'BORROWING BASICS',
          items: [
            'Building a good credit history',
            'The loan or lease decision',
            'Lower your overall cost of borrowing',
            'How to choose a vehicle'
          ]
        }
      ]
    },
    {
      id: 'mortgages',
      label: 'Mortgages',
      columns: [
        {
          header: 'ADVICE',
          items: [
            'Connect with a home financing advisor',
            'Buying another property',
            'Existing homeowners',
            'Mortgage renewal',
            'First-time homebuyers',
            'Renovations',
            'Understanding mortgage prepayments and charges',
            'Conventional vs. collateral mortgage charges'
          ]
        },
        {
          header: 'PRODUCTS',
          items: [
            'Scotiabank eHOME',
            'Scotia Total Equity® Plan (STEP)',
            'Fixed rate mortgages',
            'Variable rate mortgages',
            'Switch to Scotiabank program',
            'Mortgage Special Offers and Programs',
            'Second home mortgages',
            'Mortgage Protection insurance'
          ]
        },
        {
          header: 'RESOURCES',
          items: [
            'Mortgage calculator',
            'Mortgage articles',
            'Mortgage glossary',
            'Mortgage tools',
            'Manage your mortgage online',
            'Solicitor / Notary',
            'Mortgage videos',
            'Mortgage rates'
          ]
        }
      ]
    },
    {
      id: 'insurance',
      label: 'Insurance',
      columns: [
        {
          header: 'INSURANCE PRODUCTS',
          items: [
            'Mortgage Protection insurance',
            'Credit Card Protection insurance',
            'Line of Credit Protection insurance',
            'Business Loan Protection insurance',
            'Loan Protection insurance',
            'Travel insurance'
          ]
        },
        {
          header: 'CLAIMS FORMS',
          items: ['Creditor protection insurance claims', 'Travel Insurance claims']
        },
        {
          header: 'TOOLS & RESOURCES',
          items: [
            'Creditor Insurance Protection Planner',
            { label: 'Mortgage protection insurance calculator', isExternal: true },
            { label: 'Credit card protection insurance calculator', isExternal: true },
            { label: 'Line of credit protection insurance calculator', isExternal: true },
            'Loan protection insurance calculator',
            'Education Centre'
          ]
        }
      ]
    },
    {
      id: 'advice',
      label: 'Advice+',
      columns: [
        {
          header: 'ADVICE+ PLANNING',
          items: [
            'Create a financial plan',
            'Get started with investing',
            'Build a budget',
            'Plan your move to Canada',
            'Buy a home',
            'Get out of debt',
            'Planning for life',
            'Banking 101'
          ]
        },
        {
          header: 'ADVICE+ RESOURCES',
          items: [
            'Trending articles',
            'Interest rates and inflation',
            'Protect yourself from fraud',
            'Scene+',
            'Book an Advice+ appointment'
          ]
        },
        {
          header: 'ADVICE+ TOOLS',
          items: [
            'How Advice+ works',
            'Scotia Smart Money',
            'Guided investing - Scotia Smart Investor',
            "What's your Money Style?",
            'Mortgage calculator',
            'Credit card rewards calculator',
            'Personal loan calculator'
          ]
        }
      ]
    },
    {
      id: 'scene',
      label: 'Scene+',
      bottomLinkText: 'Explore Scene+',
      columns: [
        {
          header: 'THE PROGRAM',
          items: ['Scene+', 'Debit and credit cards', 'Earn and redeem', 'Partners', 'Scene+ app']
        },
        {
          header: 'GET SUPPORT',
          items: ['Frequently asked questions', 'Program tips', 'Advice+', 'Credit card rewards calculator']
        },
        {
          header: 'SCENE+ DEBIT CARDS',
          items: ['Ultimate Package', 'Preferred Package']
        },
        {
          header: 'SCENE+ CREDIT CARDS',
          items: [
            'Scotiabank Scene+ Visa Card',
            'Scotiabank Passport Visa Infinite card',
            'Scotiabank Gold American Express card',
            'Scotiabank American Express card',
            'Scotiabank Platinum American Express card',
            'ScotiaGold Passport Visa card'
          ]
        },
        {
          header: 'SCENE+ FOR STUDENTS',
          items: [
            'Preferred Package for Students and Youth - 16 and over',
            'Preferred Package for Students and Youth - Under 16',
            'Scotiabank Scene+ Visa Card for Students',
            'Scene+ Student Banking Bundle',
            'The Student Hub'
          ]
        }
      ]
    },
    {
      id: 'programs',
      label: 'Programs',
      columns: [
        {
          header: 'PROGRAMS & SERVICES',
          items: [
            'Scene+',
            'Shell',
            'Indigenous Peoples',
            'Smart savings tools',
            'Hockey for All',
            'Scotia Perks',
            'Bank The Rest® savings program',
            'Referral Program'
          ]
        },
        {
          header: 'SPECIALTY SERVICES',
          items: [
            { label: 'StartRight program for Newcomers', isExternal: true },
            { label: 'Higher credit limit with Nova Credit', isExternal: true },
            'Seniors Resource Centre',
            'The Student Hub',
            'Healthcare+ Banking Programs',
            'Lawyer Banking Program'
          ]
        },
        {
          header: 'OFFERS',
          items: [
            'Credit bureau reports',
            'Scene+ Student Banking Bundle',
            'Willful',
            'English Language Test with Pearson (PTE)'
          ]
        }
      ]
    },
    {
      id: 'rates',
      label: 'Rates & Fees',
      columns: [
        {
          header: 'BANK FEES',
          items: [
            'Bank account fees at a glance',
            'Credit card fees at a glance',
            'Tips to reduce fees',
            'Chequing account rates',
            'Investment account fees'
          ]
        },
        {
          header: 'BORROWING',
          items: ['Credit card interest rates', 'Mortgage rates']
        },
        {
          header: 'SAVING & INVESTING',
          items: [
            'Savings account interest rates',
            'GIC Interest rates',
            'Mutual funds prices',
            'Registered plan interest rates'
          ]
        },
        {
          header: 'CURRENCY',
          items: ['Foreign exchange rates', 'Foreign exchange services']
        }
      ]
    }
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
    <header className="w-full bg-white shadow-xs relative z-50 font-sans ">
      
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
          <div className="w-[280px] h-[46px] relative hidden md:block" ref={searchRef}>
            
            {/* Collapsed Search Input (Normal DOM Flow) */}
            {!isSearchFocused && (
              <div className="w-full h-full relative flex items-center">
                <input
                  type="text"
                  placeholder="Begin Your Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#006699]"
                />
                <Search className="w-5 h-5 text-gray-500 absolute right-3.5 stroke-[2]" />
              </div>
            )}

            {/* Focused Popover Card (Single white box wrapping Input + Trending Searches) */}
            {isSearchFocused && (
              <div className="absolute -top-3 -left-3 w-[340px] bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-4 z-50">
                
                {/* Active Search Input inside popover with blue border */}
                <div className="relative flex items-center mb-3">
                  <input
                    type="text"
                    placeholder="Begin Your Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full px-4 py-2.5 border-2 border-[#006699] rounded-lg text-base text-[#222222] placeholder-gray-400 focus:outline-none font-sans"
                  />
                  {searchQuery ? (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 text-gray-400 hover:text-black"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : (
                    <Search className="w-5 h-5 text-[#444444] absolute right-3.5 stroke-[1.8]" />
                  )}
                </div>

                {/* Section Title */}
                <h3 className="font-bold text-[#222222] text-[19px] font-sans mb-3 mt-1 px-1">
                  Trending searches
                </h3>

                {/* Trending Searches Item List */}
                <div className="divide-y divide-gray-200/80">
                  {trendingSearches.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSearchQuery(item);
                        setIsSearchFocused(false);
                      }}
                      className="w-full text-left py-2.5 px-1 hover:bg-gray-50/80 transition flex items-center justify-between"
                    >
                      <span className="text-[14px] font-normal text-[#222222] hover:text-[#006699] border-b border-dotted border-gray-700">
                        {item}
                      </span>
                    </button>
                  ))}
                </div>

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

      {/* ROW 3: BOTTOM MEGA MENU BAR (Desktop) */}
      <div 
        className="hidden md:block bg-white border-b border-gray-200 text-[15px] relative z-40"
        onMouseLeave={() => setActiveCategory(null)}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between text-[#4A4A4A] py-3">
            {megaMenuItems.map((item) => {
              const isActive = activeCategory === item.id;
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveCategory(item.id)}
                >
                  <button className={`py-1.5 whitespace-nowrap transition-colors flex items-center space-x-0.5 border-b-2 ${
                    isActive 
                      ? 'border-[#EC111A] text-[#222222] font-bold' 
                      : 'border-transparent text-[#4A4A4A] hover:text-[#222222]'
                  }`}>
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* FULL WIDTH MEGA MENU FLYOUT DROPDOWN MATCHING SCREENSHOTS */}
        {activeCategory && (() => {
          const activeItemData = megaMenuItems.find(m => m.id === activeCategory);
          if (!activeItemData) return null;
          const colCount = activeItemData.columns.length;
          return (
            <div 
              className="absolute top-full left-0 right-0 w-full bg-white border-b border-gray-200 shadow-2xl z-50 pt-8 pb-6 animate-in fade-in duration-150"
              onMouseEnter={() => setActiveCategory(activeCategory)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
                
                {/* Columns Grid: 3, 4 or 5 columns dynamically */}
                <div className={`grid ${colCount === 5 ? 'grid-cols-5' : colCount === 4 ? 'grid-cols-4' : 'grid-cols-3'} gap-8 text-left`}>
                  
                  {activeItemData.columns.map((col, cIdx) => (
                    <div key={cIdx}>
                      <h4 className="text-[12px] font-bold tracking-wider text-[#4A4A4A] uppercase mb-4 font-sans">
                        {col.header}
                      </h4>
                      <ul className="space-y-2.5">
                        {col.items.map((sub, sIdx) => {
                          const label = typeof sub === 'string' ? sub : sub.label;
                          const isExternal = typeof sub === 'object' && sub.isExternal;
                          return (
                            <li key={sIdx}>
                              <a href="#" className="inline-flex items-center text-[13.5px] text-[#4A4A4A] hover:text-[#EC111A] hover:underline font-normal transition-colors leading-normal">
                                <span>{label}</span>
                                {isExternal && (
                                  <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#4A4A4A] stroke-[2] shrink-0 inline" />
                                )}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}

                </div>

                {/* Bottom Center: Custom or Default View All Link */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex justify-center">
                  <a href="#" className="text-[14px] font-bold text-[#222222] hover:text-[#EC111A] underline transition-colors">
                    {activeItemData.bottomLinkText || "View All"}
                  </a>
                </div>

              </div>
            </div>
          );
        })()}

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
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileActiveCategory(null);
                    setMobileActiveColumn(null);
                  }}
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

            {/* LEVEL 0: MAIN MENU CATEGORIES */}
            {!mobileActiveCategory && (
              <>
                <div>
                  {megaMenuItems.map((item) => (
                    <div key={item.id} className="border-b border-gray-100">
                      <button
                        onClick={() => {
                          setMobileActiveCategory(item.id);
                          setMobileActiveColumn(null);
                        }}
                        className="w-full flex items-center justify-between px-6 py-4.5 text-[17px] text-[#333333] hover:bg-gray-50 transition min-h-[56px] text-left"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4.5 h-4.5 text-gray-400 stroke-[2] shrink-0" />
                      </button>
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
              </>
            )}

            {/* LEVEL 1: CATEGORY SUBMENU (View All, Products, Services, Resources, etc.) */}
            {mobileActiveCategory && !mobileActiveColumn && (() => {
              const activeCatData = megaMenuItems.find(m => m.id === mobileActiveCategory);
              if (!activeCatData) return null;

              return (
                <div>
                  {/* Back to main menu */}
                  <div className="border-b border-gray-100">
                    <button
                      onClick={() => {
                        setMobileActiveCategory(null);
                        setMobileActiveColumn(null);
                      }}
                      className="w-full flex items-center px-6 py-4.5 text-[16px] text-[#333333] hover:bg-gray-50 transition min-h-[56px] text-left"
                    >
                      <ChevronLeft className="w-4.5 h-4.5 text-gray-600 mr-2 shrink-0 stroke-[2]" />
                      <span>Back to main menu</span>
                    </button>
                  </div>

                  {/* View all / Custom bottom link */}
                  <div className="border-b border-gray-100">
                    <a
                      href="#"
                      className="block px-6 py-4.5 text-[16px] text-[#333333] hover:bg-gray-50 transition min-h-[56px]"
                    >
                      {activeCatData.bottomLinkText || "View all"}
                    </a>
                  </div>

                  {/* Column Headers List */}
                  {activeCatData.columns.map((col, cIdx) => (
                    <div key={cIdx} className="border-b border-gray-100">
                      <button
                        onClick={() => setMobileActiveColumn(col.header)}
                        className="w-full flex items-center justify-between px-6 py-4.5 text-[16px] text-[#333333] hover:bg-gray-50 transition min-h-[56px] text-left"
                      >
                        <span>{formatHeaderTitleCase(col.header)}</span>
                        <ChevronRight className="w-4.5 h-4.5 text-gray-400 stroke-[2] shrink-0" />
                      </button>
                    </div>
                  ))}
                </div>
              );
            })()}

            {/* LEVEL 2: COLUMN SUB-ITEMS LIST */}
            {mobileActiveCategory && mobileActiveColumn && (() => {
              const activeCatData = megaMenuItems.find(m => m.id === mobileActiveCategory);
              const activeColData = activeCatData?.columns.find(c => c.header === mobileActiveColumn);
              if (!activeColData) return null;

              return (
                <div>
                  {/* Back */}
                  <div className="border-b border-gray-100">
                    <button
                      onClick={() => setMobileActiveColumn(null)}
                      className="w-full flex items-center px-6 py-4.5 text-[16px] text-[#333333] hover:bg-gray-50 transition min-h-[56px] text-left"
                    >
                      <ChevronLeft className="w-4.5 h-4.5 text-gray-600 mr-2 shrink-0 stroke-[2]" />
                      <span>Back</span>
                    </button>
                  </div>

                  {/* Sub-items List */}
                  {activeColData.items.map((sub, sIdx) => {
                    const label = typeof sub === 'string' ? sub : sub.label;
                    const isExternal = typeof sub === 'object' && sub.isExternal;
                    return (
                      <div key={sIdx} className="border-b border-gray-100">
                        <a
                          href="#"
                          className="flex items-center px-6 py-4 text-[15px] text-[#333333] hover:bg-gray-50 transition min-h-[52px]"
                        >
                          <span>{label}</span>
                          {isExternal && (
                            <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-gray-500 shrink-0 inline" />
                          )}
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

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
