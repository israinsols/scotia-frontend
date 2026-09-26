import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface FeaturedContainerProps {
  onOpenCalculator: () => void;
}

export const FeaturedContainer: React.FC<FeaturedContainerProps> = ({ onOpenCalculator }) => {
  const [activeTab, setActiveTab] = useState('Featured');

  const tabs = ['Featured', 'Accounts', 'Credit cards', 'Borrowing', 'Investments', 'Learning'];

  // 1. Featured Tab Cards
  const featuredCards = [
    {
      category: 'CREDIT CARDS',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/08-2026/Homepage-AmEx-Gold-Tile-686x386.png',
      fallback: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=686&q=80',
      title: 'Earn up to $950 in value¹',
      description: 'Including 50,000 welcome bonus Scene+™ points¹ with the Scotiabank® Gold American Express® Card.',
      linkText: 'Start now',
    },
    {
      category: 'CHEQUING',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/07-2026/Homepage_D2D_Tile_686x386.jpg',
      fallback: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=686&q=80',
      title: 'Make more with everyday banking from Scotiabank.',
      description: 'Earn up to $1,000 when you bundle an eligible banking package, savings account and credit card*.',
      linkText: 'Learn more',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/03-2026/Homepage-Investments-Tile-686x386.jpg',
      fallback: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=686&q=80',
      title: "Invest in what you're really invested in.",
      description: 'Earn a 1.5% cash bonus on transfers into an eligible registered account*.',
      linkText: 'Learn more',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/scotia-growth-institute/7761001_Project_Legacy_tile_%20image.png',
      fallback: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=686&q=80',
      title: 'Introducing the Scotia Growth Institute',
      description: "A new source for expert analysis, proprietary research, and thoughtful insights on the future of Canada's long-term competitiveness.",
      linkText: 'Learn more',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/08-2026/Homepage-IMT-Gold-Tile-686x386.png',
      fallback: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=686&q=80',
      title: 'Sending money abroad is now faster than your commute',
      description: 'Now enjoy fast trackable transfers with $0 transfer fees* with Scotia International Money Transfer. Plus, get up to 50,000 bonus Scene+™ points.†',
      linkText: 'Explore more',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/03-2024/RCT_Tile.jpg',
      fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=686&q=80',
      title: 'Discover your credit card rewards',
      description: "Enter your monthly spending details to compare Scotiabank's credit card benefits and calculate your rewards.",
      linkText: 'Use the rewards calculator',
      linkAction: onOpenCalculator,
    },
  ];

  // 2. Accounts Tab Cards
  const accountsCards = [
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/05-2026/homepage-ultimate-package-tile-686x386.jpg',
      fallback: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=686&q=80',
      title: 'The Ultimate Package',
      description: 'Earn up to $1,000 when you bundle an Ultimate package, savings account, and credit card*.',
      linkText: 'Open your account now',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/05-2026/homepage-preferred-package-tile-686x386.jpg',
      fallback: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=686&q=80',
      title: 'The Preferred Package',
      description: 'Earn up to $1,000 when you bundle a Preferred Package, savings account, and credit card*.',
      linkText: 'Open your account now',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/05-2026/Homepage-Accounts-HISA-1200x600.png',
      fallback: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=686&q=80',
      title: 'Scotia High Interest Savings Account (HISA)',
      description: 'Earn up to a 5.00%* interest rate for the first 3 months, then continue earning a high regular rate that grows the more you save and invest.',
      linkText: 'Start saving now',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/07-2026/Homepage_D2D_Tile_686x343.jpg',
      fallback: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=686&q=80',
      title: 'Special Offer',
      description: 'Earn up to $1,000 when you bundle an eligible banking package, savings account and credit card*.',
      linkText: 'Get offer',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/07-2026/Homepage_N2C_SR_Tile_686x386.jpg',
      fallback: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=686&q=80',
      title: 'New to Canada?',
      description: 'Join the award winning® StartRight™ Program designed for newcomers to Canada.‡',
      linkText: 'StartRight offer details',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/common/imagery/visual-id/GettyImages-1463882645-card.png',
      fallback: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=686&q=80',
      title: 'The Money Master Savings Account',
      description: 'Enjoy an easier and more flexible way to build your savings, all while having access to your money at any time.',
      linkText: 'Start saving now',
    },
  ];

  // 3. Credit Cards Tab Data
  const creditCardsCards = [
    {
      category: 'TRAVEL & LIFESTYLE',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/category/fr/PVI-Plus-EN-V2.png',
      title: 'Scotiabank Passport® Visa Infinite +* Card',
      offer: 'Earn up to $1,250 in first year welcome offers, rewards and savings, including up to 35,000 bonus Scene+ points.¹',
      fee: '$150',
      rates: '20.99% purchases / 22.99% cash advances',
      linkText: 'View more card details',
    },
    {
      category: 'CASH BACK',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/category/en/Momentum-Infinite-Plus-EN.png',
      title: 'Scotia Momentum® Visa Infinite +* Card',
      offer: 'Earn 10% cash back on all purchases for the first 3 months (up to $2,000 in total purchases).¹ Plus, get a 0% introductory interest rate on balance transfers for the first 12 months.',
      fee: '$120',
      rates: '20.99% purchases / 22.99% cash advances',
      linkText: 'View more card details',
    },
    {
      category: 'TRAVEL & LIFESTYLE',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/category/en/AmexGold_GoldLogo_MC_En.png',
      title: 'Scotiabank Gold American Express® Card',
      offer: 'Earn up to $950* in welcome offers, first year rewards and savings value, and up to 50,000 bonus Scene+ points.***',
      fee: '$120',
      rates: '21.99% purchases / 22.99% cash advances',
      linkText: 'View more card details',
    },
    {
      category: 'REWARDS',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/category/en/ScenePlus_Visa_NoName_MC_En.png',
      title: 'Scotiabank® Scene+™ Visa* Card',
      offer: 'Earn up to 5,000 bonus Scene+ points within your first 3 months.¹',
      fee: '$0',
      rates: '21.99% purchases / 22.99% cash advances',
      linkText: 'View more card details',
    },
    {
      category: 'LOW INTEREST',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/02-2026/scotiabank-value-visa-card-en.png',
      title: 'Scotiabank Value® Visa* Card',
      offer: '0% promotional interest rate on balance transfers for the first 9 months with a 1% balance transfer fee.¹ Plus pay no annual fee in the first year.¹',
      fee: '$29',
      rates: '13.99% purchases / 13.99% cash advances',
      linkText: 'View more card details',
    },
    {
      category: 'CASH BACK',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/category/en/MomentumVisa_MC_eng.png',
      title: 'Scotia Momentum® Visa* Card',
      offer: 'Get a 0.99% introductory interest rate on balance transfers for the first 9 months (2% fee per cash advance, 22.99% after that; annual fee $49).¹',
      fee: '$49',
      rates: '20.99% purchases / 22.99% cash advances',
      linkText: 'View more card details',
    },
  ];

  // 4. Borrowing Tab Data
  const borrowingCards = [
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/04-2022/spring-lending-tile%20686x386.jpg',
      fallback: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=686&q=80',
      title: 'Life changes fast',
      description: 'The Scotia Total Equity® Plan (STEP) Mortgage changes with it. * A STEP Mortgage gives you the flexibility to use the equity from your home when you need it.',
      linkText: 'Learn more',
      linkAction: undefined,
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/05-2021/686px-x-386px---Second-mortgage-or-home-equity-loan.jpg',
      fallback: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=686&q=80',
      title: 'Mortgage calculator',
      description: 'How much mortgage can you afford?',
      linkText: 'Launch mortgage calculator',
      linkAction: onOpenCalculator,
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/uloc/images/AutoLoanCalculator_HPTile_Image.jpg',
      fallback: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=686&q=80',
      title: 'Auto loan payment calculator',
      description: "Looking to buy a new car? We'll do the math for you.",
      linkText: 'Launch auto loan calculator',
      linkAction: onOpenCalculator,
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/05-2021/686px-x-386px---Loans-vs.-lines-of-credit.jpg',
      fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=686&q=80',
      title: 'Scotiabank eHOME – the online mortgage hub',
      description: 'Get pre-approved, search for a home, and get mortgage approval online.',
      linkText: 'Start your journey',
      linkAction: undefined,
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/05-2021/686px-x-386px---Tips-on-successful-homebuying-from-a-scotia-advisor.jpg',
      fallback: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=686&q=80',
      title: 'Discover how to take the next STEP',
      description: "Find the mortgage that's right for you.",
      linkText: 'Visit our mortgage centre',
      linkAction: undefined,
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/05-2021/686px-x-386px---line-of-credit-vs-mortgage.jpg',
      fallback: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=686&q=80',
      title: 'Protect your biggest investment',
      description: 'Stay on track financially if the unexpected happens with optional Scotia Mortgage Protection.',
      linkText: 'Get started',
      linkAction: undefined,
    },
  ];

  // 5. Investments Tab Data
  const investmentsCards = [
    {
      category: 'SPECIAL OFFER',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/investments/4845059_FY26_RRSP_686x386_tile.jpg',
      fallback: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=686&q=80',
      title: 'Registered Retirement Savings Plan (RRSP)',
      description: 'An RRSP is a powerful tool to help grow your retirement savings and lower the income tax you pay.',
      extraOffer: 'Earn a 1.5% cash bonus\nOn transfers into an eligible registered account.*',
      linkText: 'Learn more',
    },
    {
      category: 'SPECIAL OFFER',
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/investments/4845059_FY26_Inv_TFSA%20686x386_tile.jpg',
      fallback: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=686&q=80',
      title: 'Tax-Free Savings Account (TFSA)',
      description: 'A TFSA is a great way to save for both short and long-term goals, with the flexibility to withdraw your money at any time without penalty.¹',
      extraOffer: 'Earn a 1.5% cash bonus\nOn transfers into an eligible registered account.*',
      linkText: 'Learn more',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/en/imagery/4845059_FY26_Inv_GIC_686x386.jpg',
      fallback: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=686&q=80',
      title: 'Guaranteed Investment Certificates (GICs)',
      description: 'A worry-free investment product that keeps your principal investment safe and has a guaranteed rate of return.',
      extraOffer: null,
      linkText: 'Learn about GICs',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/common/imagery/Savings-investments-tile.jpg',
      fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=686&q=80',
      title: 'Savings Accelerator Account',
      description: 'Grow your savings faster within your investment plan with this high-interest savings account.',
      extraOffer: null,
      linkText: 'Accelerate your savings',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/02-2023/Scotiabank_SSI_HomepageStatic_686x386_EN.jpg',
      fallback: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=686&q=80',
      title: 'Introducing Scotia Smart Investor via Advice+',
      description: 'Now you can set, change, and track your financial goals and rest easy.',
      extraOffer: null,
      linkText: 'Get started',
    },
    {
      category: null,
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/investments/4845059_FY26%20Inv_%20Essentials_686x386_tile.jpg',
      fallback: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=686&q=80',
      title: 'Scotia Essentials Portfolios™',
      description: 'Cost-effective ETFs and mutual funds, together in one portfolio. Scotia Essentials Portfolios.',
      extraOffer: null,
      linkText: 'Learn more',
    },
  ];

  // 6. Learning Tab Data
  const learningCards = [
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/canada/homepage/personal/02-2026/Homepage-advice-tile-686x386.jpg',
      fallback: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=686&q=80',
      title: "Bring in your vision. We'll help bring it into focus.",
      description: null,
      linkText: 'Talk to an advisor',
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/advice/articles-images/WhatToKnowMutualFunds_640958034_1200x600.jpg',
      fallback: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=686&q=80',
      title: 'What you need to know about mutual funds',
      description: 'Your guide to the different types and how they work.',
      linkText: 'Learn about mutual funds',
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/advice/articles-images/FHSAContributionLimits_1222861655_1200x600.jpg',
      fallback: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=686&q=80',
      title: 'Understanding FHSA contribution limits',
      description: 'How you can use the FHSA to save toward your first home.',
      linkText: 'Learn about FHSAs',
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/advice/articles-images/RRSPvsTFSA_578161007_1200x600.jpg',
      fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=686&q=80',
      title: 'RRSP vs. TFSAs: Not sure about selecting an RRSP or a TFSA?',
      description: 'Dive into what you need to know about how they work.',
      linkText: 'Explore RRSPs vs. TFSAs',
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/images/Mobile%20Banking%20v3.jpg',
      fallback: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=686&q=80',
      title: 'New to digital banking?',
      description: 'Our step-by-step guides can help you start banking on your phone, tablet, or desktop computer.',
      linkText: 'Go digital',
    },
    {
      image: 'https://www.scotiabank.com/content/dam/scotiabank/advice/articles-images/DebtRepaymentStrategies_1480997732_1200x600.jpg',
      fallback: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=686&q=80',
      title: '3 debt repayment strategies every Canadian should know',
      description: 'Worried about your debt load? Learn how to help lighten it.',
      linkText: 'Learn how to pay off debt',
    },
  ];

  return (
    <section className="bg-[#F8F9FA] pb-10 sm:pb-16 pt-4 font-sans">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main White Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-4 sm:p-8 lg:p-12">
          
          {/* Top Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-8 overflow-x-auto scrollbar-none">
            <div className="flex space-x-6 sm:space-x-10 text-[14px] font-medium">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-[#EC111A] text-[#222222] font-bold'
                      : 'border-transparent text-[#555555] hover:text-[#222222]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-1">
            <h2 className=" sm:text-4xl font-bold text-[#222222] ">
              {activeTab === 'Accounts' 
                ? 'Accounts' 
                : activeTab === 'Credit cards' 
                ? 'Credit cards' 
                : activeTab === 'Borrowing' 
                ? 'Borrowing' 
                : activeTab === 'Investments'
                ? 'Investments'
                : activeTab === 'Learning'
                ? 'Learning'
                : 'Featured'}
            </h2>
            <p className="text-xs sm:text-lg text-[#555555] ">
              {activeTab === 'Accounts'
                ? 'Keep your finances on track with an account that gives you flexibility and control over your money.'
                : activeTab === 'Credit cards'
                ? 'Browse all the Scotia cards so you can choose the one that’s right for you.'
                : activeTab === 'Borrowing'
                ? 'From buying your first home to renovating your current space, we have a borrowing plan that’s right for you.'
                : activeTab === 'Investments'
                ? 'Reach your investment goals tomorrow while enjoying your life today.'
                : activeTab === 'Learning'
                ? 'Get investment ideas, insights, and information for managing your money.'
                : 'Helping plan for your financial future.'}
            </p>
          </div>

          {/* LEARNING TAB VIEW */}
          {activeTab === 'Learning' ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1160px] mx-auto">
                {learningCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200/90 rounded-xl overflow-hidden shadow-2xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[440px] sm:min-h-[470px]"
                  >
                    <div>
                      <div className="relative h-52 overflow-hidden bg-gray-100">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            if (card.fallback) {
                              (e.target as HTMLImageElement).src = card.fallback;
                            }
                          }}
                        />
                      </div>

                      <div className="p-5 space-y-2">
                        <h3 className="text-lg sm:text-lg font-bold text-[#222222] leading-snug">
                          {card.title}
                        </h3>
                        {card.description && (
                          <p className="text-balance text-[#555555] leading-relaxed font-normal">
                            {card.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 mt-auto">
                      <button className="inline-flex items-center text-balance font-semibold text-[#006699] hover:underline hover:text-[#EC111A] transition-colors">
                        <span>{card.linkText}</span>
                        <ChevronRight className="ml-0.5" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center pt-2">
                <button className="bg-[#EC111A] hover:bg-[#C40912] text-white font-bold text-sm px-8 py-5 rounded-md shadow-xs transition">
                  Go to Advice+
                </button>
              </div>
            </div>
          ) : activeTab === 'Investments' ? (
            /* INVESTMENTS TAB VIEW */
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1160px] mx-auto">
                {investmentsCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200/90 rounded-xl shadow-2xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[460px] sm:min-h-[490px]"
                  >
                    <div>
                      <div className="relative h-52 bg-gray-100">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            if (card.fallback) {
                              (e.target as HTMLImageElement).src = card.fallback;
                            }
                          }}
                        />
                        {card.category && (
                          <span className="absolute -top-2 left-3 bg-[#EC111A] text-white text-[12px] font-bold px-2 py-1 rounded tracking-wider uppercase shadow-xs">
                            {card.category}
                          </span>
                        )}
                      </div>

                      <div className="p-5 space-y-2.5">
                        <h3 className="text-lg sm:text-lg font-bold text-[#222222] leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-balance text-[#555555] leading-relaxed font-normal">
                          {card.description}
                        </p>
                        {card.extraOffer && (
                          <div className="pt-2 text-balance font-semibold text-[#222222] leading-snug">
                            {card.extraOffer.split('\n').map((line, lIdx) => (
                              <p key={lIdx}>{line}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 mt-auto">
                      <button className="inline-flex items-center text-balance font-semibold text-[#006699] hover:underline hover:text-[#EC111A] transition-colors">
                        <span>{card.linkText}</span>
                        <ChevronRight className="ml-0.5" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                <button className="w-full sm:w-auto bg-[#EC111A] hover:bg-[#C40912] text-white font-bold text-balance px-7 py-5 rounded-md shadow-xs transition">
                  View all investment plans
                </button>
                <button className="w-full sm:w-auto bg-[#EC111A] hover:bg-[#C40912] text-white font-bold text-balance px-7 py-5 rounded-md shadow-xs transition">
                  View all investment products
                </button>
              </div>
            </div>
          ) : activeTab === 'Borrowing' ? (
            /* BORROWING TAB VIEW */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1160px] mx-auto">
              {borrowingCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/90 rounded-xl overflow-hidden shadow-2xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[440px] sm:min-h-[470px]"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          if (card.fallback) {
                            (e.target as HTMLImageElement).src = card.fallback;
                          }
                        }}
                      />
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-lg sm:text-lg font-bold text-[#222222] leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-balance text-[#555555] leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto">
                    <button
                      onClick={card.linkAction}
                      className="inline-flex items-center text-balance font-semibold text-[#006699] hover:underline hover:text-[#EC111A] transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <ChevronRight className="ml-0.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          ) : activeTab === 'Credit cards' ? (
            /* CREDIT CARDS TAB VIEW */
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1160px] mx-auto">
                {creditCardsCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200/90 rounded-xl shadow-2xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[540px] sm:min-h-[580px]"
                  >
                    <div>
                      <div className="relative h-64 bg-[#F2F4F7] flex items-center justify-center p-4 border-b border-gray-100">
                        {card.category && (
                          <span className="absolute -top-3 left-3 bg-[#1A1A1A] text-white text-[12px] font-bold px-2 py-0.5 rounded tracking-wider uppercase z-10">
                            {card.category}
                          </span>
                        )}
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-48 sm:h-52 w-auto max-w-[90%] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-5 space-y-3">
                        <h3 className="text-lg sm:text-lg font-bold text-[#222222] leading-snug text-center">
                          {card.title}
                        </h3>

                        <div className="space-y-1 text-[18px] text-[#4A4A4A] leading-relaxed">
                          <p className="font-bold text-[#222222]">Special offer:</p>
                          <p>{card.offer}</p>
                        </div>

                        <div className="pt-2 border-t border-gray-100 space-y-0.5 text-[17px] text-[#555555]">
                          <p>
                            <span className=" text-[#222222]">Annual fee:</span>{' '}
                            <span className="font-semibold text-[#222222]">{card.fee}</span>
                          </p>
                          <p>
                            <span className=" text-[#222222]">Interest rates:</span>{' '}
                            <span>{card.rates}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 mt-auto">
                      <button className="inline-flex items-center text-balance font-semibold text-[#006699] hover:underline hover:text-[#EC111A] transition-colors">
                        <span>{card.linkText}</span>
                        <ChevronRight className=" ml-0.5" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center pt-2">
                <button className="bg-[#EC111A] hover:bg-[#C40912] text-white font-bold text-sm px-8 py-5 rounded-md shadow-xs transition">
                  Browse all credit cards
                </button>
              </div>
            </div>
          ) : activeTab === 'Accounts' ? (
            /* ACCOUNTS TAB VIEW */
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1160px] mx-auto">
                {accountsCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200/90 rounded-xl overflow-hidden shadow-2xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[440px] sm:min-h-[470px]"
                  >
                    <div>
                      <div className="relative h-52 overflow-hidden bg-gray-100">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            if (card.fallback) {
                              (e.target as HTMLImageElement).src = card.fallback;
                            }
                          }}
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="text-lg sm:text-lg font-bold text-[#222222] leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-balance text-[#555555] leading-relaxed font-normal">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 pt-0 mt-auto">
                      <button className="inline-flex items-center text-balance font-semibold text-[#006699] hover:underline hover:text-[#EC111A] transition-colors">
                        <span>{card.linkText}</span>
                        <ChevronRight className=" ml-0.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                <button className="w-full sm:w-auto bg-[#EC111A] hover:bg-[#C40912] text-white font-bold text-sm px-7 py-5 rounded-md shadow-xs transition">
                  View all bank accounts
                </button>
                <button className="w-full sm:w-auto bg-[#EC111A] hover:bg-[#C40912] text-white font-bold text-sm px-7 py-5 rounded-md shadow-xs transition">
                  View all savings accounts
                </button>
              </div>
            </div>
          ) : (
            /* FEATURED TAB VIEW */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1160px] mx-auto">
              {featuredCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/90 rounded-xl shadow-2xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[440px] sm:min-h-[470px]"
                >
                  <div>
                    <div className="relative h-52 bg-gray-100">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          if (card.fallback) {
                            (e.target as HTMLImageElement).src = card.fallback;
                          }
                        }}
                      />
                      {card.category && (
                        <span className="absolute -top-3 z-40 left-3 bg-[#005B94] text-white text-[12px] font-bold px-2 py-1 rounded-sm tracking-wider uppercase shadow-xs">
                          {card.category}
                        </span>
                      )}
                    </div>

                    <div className="p-5 space-y-5">
                      <h3 className="text-lg sm:text-lg font-bold text-[#222222] leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-balance text-[#555555] leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto">
                    <button
                      onClick={'linkAction' in card ? card.linkAction : undefined}
                      className="inline-flex items-center text-balance font-semibold text-[#006699] hover:underline hover:text-[#EC111A] transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <ChevronRight className=" ml-0.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
