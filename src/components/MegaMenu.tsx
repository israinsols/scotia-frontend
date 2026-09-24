import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface MenuItem {
  id: string;
  title: string;
  columns: {
    heading: string;
    items: (string | { title: string; isExternal?: boolean })[];
  }[];
}

export const MegaMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'bank-accounts',
      title: 'Bank Accounts',
      columns: [
        {
          heading: 'PRODUCTS',
          items: [
            'Chequing accounts',
            'Savings accounts',
            'Seniors bank accounts',
            'Student and youth accounts'
          ]
        },
        {
          heading: 'SERVICES',
          items: [
            'Account services',
            'Overdraft protection',
            'Canada Deposit Insurance Corporation',
            'Change your account',
            'Regulatory information',
            'International Money Transfer'
          ]
        },
        {
          heading: 'RESOURCES',
          items: [
            'Why switch banks?',
            'How to switch to Scotia',
            'Tips to reduce fees',
            'Banking made easy',
            'Be rewarded for your banking',
            'Save automatically',
            'The Student Hub'
          ]
        }
      ]
    },
    {
      id: 'credit-cards',
      title: 'Credit Cards',
      columns: [
        {
          heading: 'CARD TYPES',
          items: [
            'Cash back credit cards',
            'Travel & lifestyle credit cards',
            'No annual fee credit cards',
            'Low interest credit cards',
            'Scene+ rewards credit cards',
            'Student credit cards',
            { title: 'Newcomer credit cards', isExternal: true },
            'Award-winning credit cards',
            'All credit cards'
          ]
        },
        {
          heading: 'SERVICES',
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
          heading: 'RESOURCES',
          items: [
            'Digital banking guide - credit cards',
            'Credit cards welcome kits',
            'How to redeem your points',
            'Credit card fees at a glance',
            'Credit card interest rates',
            'Checking your credit score',
            'Security and fraud',
            { title: 'Credit card FAQs', isExternal: true }
          ]
        },
        {
          heading: 'TOOLS',
          items: [
            'Credit card calculators and tools',
            'Credit card rewards calculator',
            'Find the right credit solution for you',
            'Compare American Express Credit Cards',
            { title: 'Interest savings calculator', isExternal: true }
          ]
        }
      ]
    },
    {
      id: 'investments',
      title: 'Investments',
      columns: [
        {
          heading: 'POPULAR INVESTMENTS',
          items: [
            'Tax-Free Savings Accounts (TFSA)',
            'First Home Savings Account (FHSA)',
            'Registered Retirement Savings Plans (RRSP)',
            'Registered Education Savings Plans (RESP)',
            'Guaranteed Investment Certificates (GICs)',
            { title: 'Scotia Essentials Portfolios', isExternal: true },
            { title: 'Mutual funds', isExternal: true }
          ]
        },
        {
          heading: 'WAYS TO INVEST',
          items: [
            'Talk to a Scotia advisor',
            'Guided investing - Scotia Smart Investor',
            { title: 'Self-directed investing – Scotia iTRADE', isExternal: true },
            'Wealth management',
            'Scotia Financial Planning'
          ]
        },
        {
          heading: 'TOOLS AND RESOURCES',
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
      title: 'Loans & Lines of Credit',
      columns: [
        {
          heading: 'LOANS',
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
          heading: 'LINES OF CREDIT',
          items: [
            'ScotiaLine® Personal Line of Credit',
            'ScotiaLine® Personal Line of Credit (STEP)',
            'ScotiaLine® Personal Line of Credit for students',
            'Scotia RSP catch-up line of credit'
          ]
        },
        {
          heading: 'TOOLS',
          items: [
            'Auto loan payment calculator',
            'Personal loan calculator'
          ]
        },
        {
          heading: 'BORROWING BASICS',
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
      title: 'Mortgages',
      columns: [
        {
          heading: 'ADVICE',
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
          heading: 'PRODUCTS',
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
          heading: 'RESOURCES',
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
      title: 'Insurance',
      columns: [
        {
          heading: 'PROTECTION PRODUCTS',
          items: ['Creditor Insurance', 'Home Insurance', 'Auto Insurance', 'Travel Insurance']
        }
      ]
    },
    {
      id: 'advice-plus',
      title: 'Advice+',
      columns: [
        {
          heading: 'ADVICE HUB',
          items: ['Scotia Advice+ Centre', 'Financial Health Checkup', 'Book an Appointment']
        }
      ]
    },
    {
      id: 'scene-plus',
      title: 'Scene+',
      columns: [
        {
          heading: 'REWARDS PROGRAM',
          items: ['Earn Points', 'Redeem Points', 'Scene+ Partners']
        }
      ]
    },
    {
      id: 'programs',
      title: 'Programs',
      columns: [
        {
          heading: 'SPECIAL PROGRAMS',
          items: ['StartRight Newcomers', 'Healthcare Program', 'Student Hub']
        }
      ]
    },
    {
      id: 'rates-fees',
      title: 'Rates & Fees',
      columns: [
        {
          heading: 'CURRENT RATES',
          items: ['Mortgage Rates', 'GIC Rates', 'Savings Rates', 'Prime Rate']
        }
      ]
    }
  ];

  return (
    <nav 
      className="bg-white border-b border-gray-200 text-xs font-sans relative z-30"
      onMouseLeave={() => setActiveCategory(null)}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto scrollbar-none py-0">
          {menuItems.map((item) => {
            const isOpen = activeCategory === item.id;
            return (
              <li
                key={item.id}
                className="relative py-3"
                onMouseEnter={() => setActiveCategory(item.id)}
              >
                <button
                  onClick={() => setActiveCategory(isOpen ? null : item.id)}
                  className={`flex items-center space-x-1 font-normal text-xs sm:text-[13px] py-1 border-b-2 transition-all cursor-pointer ${
                    isOpen 
                      ? 'border-[#EC111A] text-[#222222] font-bold' 
                      : 'border-transparent text-[#333333] hover:text-[#EC111A]'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Full Width Mega Dropdown Flyout */}
      {activeCategory && (
        <div 
          className="absolute left-0 right-0 top-full w-full bg-white shadow-2xl border-t border-gray-200/80 z-50 animate-fadeIn"
          onMouseEnter={() => {
            // Keep open when mouse enters dropdown body
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-8">
            {menuItems
              .filter((item) => item.id === activeCategory)
              .map((item) => (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 md:grid-cols-3 ${
                    item.columns.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                  } gap-8 items-start`}
                >
                  {item.columns.map((col, cIdx) => (
                    <div key={cIdx} className="space-y-3">
                      <h4 className="text-[11px] font-extrabold text-[#555555] tracking-widest uppercase mb-3">
                        {col.heading}
                      </h4>
                      <ul className="space-y-2.5">
                        {col.items.map((subItem, sIdx) => {
                          const title = typeof subItem === 'string' ? subItem : subItem.title;
                          const isExternal = typeof subItem === 'object' && subItem.isExternal;
                          return (
                            <li key={sIdx}>
                              <a
                                href="#"
                                className="text-xs sm:text-[13px] text-[#333333] hover:text-[#EC111A] transition-colors leading-snug font-normal inline-flex items-center gap-1.5"
                              >
                                <span>{title}</span>
                                {isExternal && (
                                  <ExternalLink className="w-3 h-3 text-[#333333] shrink-0 inline stroke-[2]" />
                                )}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
          </div>

          {/* Bottom Bar: View All */}
          <div className="bg-[#F8F9FA] py-3 text-center border-t border-gray-200/60 font-bold text-xs text-[#222222] hover:text-[#EC111A] hover:underline cursor-pointer transition">
            View All
          </div>
        </div>
      )}
    </nav>
  );
};
