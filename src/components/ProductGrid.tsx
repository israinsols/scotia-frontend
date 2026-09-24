import React from 'react';
import { ArrowRight, CheckCircle2, Star, Sparkles } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const products = [
    {
      id: 1,
      category: 'CHEQUING ACCOUNT',
      title: 'Scotiabank Preferred Package',
      tagline: 'Ideal for everyday banking with maximum Scene+ rewards.',
      badge: 'Earn up to $400 Cash',
      badgeColor: 'bg-[#EC111A] text-white',
      rating: 4.8,
      features: [
        'Unlimited debit and Interac e-Transfer® transactions',
        'First-year annual fee waiver on eligible credit cards',
        'Earn Scene+™ points on everyday debit purchases',
        'High interest boost on your savings'
      ],
      monthlyFee: '$16.95 / mo',
      feeWaiver: 'Waived with $4,000 minimum daily balance',
      ctaText: 'Open account',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      category: 'CREDIT CARD',
      title: 'Scotiabank Gold American Express® Card',
      tagline: 'The ultimate travel & dining rewards card.',
      badge: '40,000 Bonus Points',
      badgeColor: 'bg-amber-500 text-white',
      rating: 4.9,
      features: [
        '5x Scene+ points on groceries, dining & entertainment',
        '0% Foreign Transaction Fees on purchases abroad',
        '3x Scene+ points on popular streaming subscriptions',
        'Comprehensive Travel Insurance Coverage'
      ],
      monthlyFee: '$120 annual fee',
      feeWaiver: 'Special first-year offer available',
      ctaText: 'Apply now',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      category: 'SAVINGS ACCOUNT',
      title: 'High Interest eSavings Account',
      tagline: 'Watch your money grow with zero monthly fees.',
      badge: 'High Interest Rate',
      badgeColor: 'bg-emerald-600 text-white',
      rating: 4.7,
      features: [
        'High competitive interest rate on every dollar',
        '$0 monthly fee and no minimum balance required',
        'Free transfers to your Scotiabank chequing account',
        'Set up automated recurring savings plan (Bank the Rest®)'
      ],
      monthlyFee: '$0.00 / mo',
      feeWaiver: 'No balance required',
      ctaText: 'Start saving',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      category: 'MORTGAGE & LOANS',
      title: 'Scotia Total Equity Plan (STEP®)',
      tagline: 'Borrow against your home equity with complete flexibility.',
      badge: 'Most Flexible',
      badgeColor: 'bg-indigo-600 text-white',
      rating: 4.9,
      features: [
        'Consolidate mortgage & credit under 1 customized plan',
        'Borrow up to 80% of your home’s appraised value',
        'Lock in fixed rates or stay flexible with variable',
        'Re-borrow principal as you pay down your mortgage'
      ],
      monthlyFee: 'Custom Rate Quote',
      feeWaiver: 'Tailored payment terms',
      ctaText: 'Learn about STEP®',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1 text-xs font-bold text-[#EC111A] uppercase tracking-wider bg-red-100 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Financial Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Designed for the way you live and bank
          </h2>
          <p className="text-gray-600 text-base mt-3">
            Explore our top-rated bank accounts, reward credit cards, and mortgage solutions.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Image & Badge Header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md tracking-wider">
                    {p.category}
                  </span>

                  {/* Offer Badge */}
                  <span className={`absolute bottom-3 left-3 text-xs font-bold px-3 py-1 rounded-full shadow-md ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-center space-x-1 text-amber-500 mb-1.5 text-xs font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{p.rating} / 5.0 Rating</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-[#EC111A] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  
                  <p className="text-xs text-gray-600 mt-1 mb-4 leading-relaxed">
                    {p.tagline}
                  </p>

                  <div className="border-t border-gray-100 pt-3 mb-4 space-y-2">
                    {p.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EC111A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer & Action */}
              <div className="p-5 pt-0 border-t border-gray-100 mt-auto">
                <div className="my-3 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-bold text-gray-900">{p.monthlyFee}</span>
                    <p className="text-[10px] text-gray-500">{p.feeWaiver}</p>
                  </div>
                </div>

                <button className="w-full bg-[#EC111A] hover:bg-[#C40912] text-white font-bold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center space-x-1.5 shadow-md transition-colors">
                  <span>{p.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
