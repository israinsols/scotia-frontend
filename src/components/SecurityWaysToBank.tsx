import React from 'react';
import { ShieldCheck, Smartphone, Lock, BellRing, PlaneLanding, ArrowRight } from 'lucide-react';

export const SecurityWaysToBank: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Row 1: Security & Protection */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#EC111A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Bank Safely & Securely</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Your financial security is our top priority
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                With Scotia Security Guarantee, you’re 100% protected against unauthorized transactions when using Scotia OnLine or Mobile Banking.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700">
                  <Lock className="w-5 h-5 text-[#EC111A] mb-2" />
                  <h4 className="text-xs font-bold text-white">2-Step Verification</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Extra security layer when signing in</p>
                </div>
                <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700">
                  <BellRing className="w-5 h-5 text-[#EC111A] mb-2" />
                  <h4 className="text-xs font-bold text-white">InfoAlerts™</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Real-time alerts for account activity</p>
                </div>
                <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700">
                  <ShieldCheck className="w-5 h-5 text-[#EC111A] mb-2" />
                  <h4 className="text-xs font-bold text-white">Zero Liability</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Protected against unauthorized charges</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 text-center lg:text-right">
              <button className="bg-[#EC111A] hover:bg-[#C40912] text-white font-bold px-7 py-3.5 rounded-full text-sm inline-flex items-center space-x-2 shadow-lg transition">
                <span>Learn about Scotia Security</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Row 2: Mobile Banking App & Newcomers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card A: Scotia Mobile App */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#EC111A] flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Bank anywhere, anytime with the Scotia Mobile App
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Check balances, pay bills, deposit cheques by snapping a photo, send Interac e-Transfers®, and lock lost cards instantly.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-[#EC111A]">Available on iOS & Android</span>
              <a href="#" className="text-xs font-bold text-gray-900 hover:text-[#EC111A] flex items-center gap-1">
                Get the App <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card B: Newcomers to Canada StartRight */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <PlaneLanding className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Moving to Canada? StartRight® Program
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Special welcome accounts for permanent residents, international students, and foreign workers with no credit history required.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600">StartRight® Program</span>
              <a href="#" className="text-xs font-bold text-gray-900 hover:text-[#EC111A] flex items-center gap-1">
                Explore Newcomer Offers <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
