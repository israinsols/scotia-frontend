import React from 'react';
import { Sparkles, Calculator, CalendarCheck, BookOpen, ChevronRight, Compass } from 'lucide-react';

interface AdviceSectionProps {
  onOpenCalculator: () => void;
}

export const AdviceSection: React.FC<AdviceSectionProps> = ({ onOpenCalculator }) => {
  const articles = [
    {
      tag: 'HOMEOWNERSHIP',
      title: '5 smart ways to pay off your mortgage faster in Canada',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80',
    },
    {
      tag: 'SAVINGS & INVESTING',
      title: 'TFSA vs RRSP: Which investment vehicle is right for your goals?',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80',
    },
    {
      tag: 'BUDGETING',
      title: 'How to build an inflation-proof emergency fund step by step',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner header: Scotia Advice+ */}
        <div className="bg-gradient-to-r from-red-900 via-[#EC111A] to-red-800 rounded-3xl text-white p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Scotia Advice+ Hub</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get personalized financial advice tailored to your life goals
            </h2>
            
            <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
              Whether you’re buying your first home, planning for retirement, or saving for your children’s education, Scotia advisors are here to help.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={onOpenCalculator}
                className="bg-white text-[#EC111A] hover:bg-gray-100 font-bold px-6 py-3 rounded-full text-sm flex items-center space-x-2 shadow-lg transition"
              >
                <Calculator className="w-4 h-4" />
                <span>Try Financial Calculators</span>
              </button>
              <button className="bg-black/30 hover:bg-black/40 text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center space-x-2 backdrop-blur-xs border border-white/20 transition">
                <CalendarCheck className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>

          {/* Background Graphic Accent */}
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-12 translate-y-12 pointer-events-none hidden md:block">
            <Compass className="w-96 h-96 text-white" />
          </div>
        </div>

        {/* Advice Articles & Guides */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Trending Financial Articles & Tips
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Expert insights to help you make informed financial decisions.
              </p>
            </div>
            <a href="#" className="text-sm font-bold text-[#EC111A] hover:underline hidden sm:flex items-center">
              <span>Explore Advice+ Centre</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((art, idx) => (
              <a
                key={idx}
                href="#"
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#EC111A] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md tracking-wider">
                      {art.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase">
                      {art.readTime}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#EC111A] transition-colors mt-1 leading-snug">
                      {art.title}
                    </h4>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center text-xs font-bold text-[#EC111A]">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                  <span>Read article</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
