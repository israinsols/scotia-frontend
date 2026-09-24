import React from 'react';
import { Film, ShoppingBag, Utensils, Plane, ArrowRight, Check } from 'lucide-react';

export const ScenePlusSection: React.FC = () => {
  const perks = [
    { icon: ShoppingBag, label: 'Groceries at Sobeys, FreshCo, Safeway & IGA' },
    { icon: Film, label: 'Movies & Entertainment at Cineplex' },
    { icon: Utensils, label: 'Dining at Harvey’s, Montana’s & Swiss Chalet' },
    { icon: Plane, label: 'Travel bookings with Scene+ Travel powered by Expedia' },
  ];

  return (
    <section className="bg-gradient-to-br from-red-50 via-white to-gray-50 py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-[#EC111A] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              <span>Canada’s Premier Loyalty Rewards Program</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Earn and redeem Scene+™ points on your everyday purchases
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              With Scotiabank debit and credit cards, turning daily spending into free movies, groceries, dining out, and dream vacations has never been easier.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {perks.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[#EC111A] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-gray-800 leading-snug">{p.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button className="bg-[#EC111A] hover:bg-[#C40912] text-white font-bold px-6 py-3 rounded-full text-sm flex items-center space-x-2 shadow-lg transition">
                <span>Explore Scene+ Cards</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#" className="text-sm font-bold text-gray-700 hover:text-[#EC111A] hover:underline">
                Learn how to redeem points
              </a>
            </div>
          </div>

          {/* Right Visual Card Showcase */}
          <div className="lg:col-span-6">
            <div className="relative bg-black text-white p-8 rounded-3xl shadow-2xl overflow-hidden border border-gray-800">
              
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC111A]/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/20 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-2xl font-black text-red-500 tracking-wider">Scene<span className="text-white">+</span></span>
                  <span className="text-xs text-gray-400 font-mono">SCOTIABANK OFFICIAL</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Scene+™ Visa* Card</h3>
                  <p className="text-xs text-gray-300">
                    No annual fee. Earn 2,000 bonus points with your first purchase within the first 60 days.
                  </p>
                </div>

                <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Card Annual Fee</span>
                    <span className="text-green-400 font-bold">$0 / year</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Bonus Points Value</span>
                    <span className="text-white font-bold">$20 towards rewards</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <Check className="w-4 h-4 text-red-500" />
                  <span>Instant redemption at checkout across 1,000+ participating stores</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
