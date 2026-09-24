import React from 'react';
import { CreditCard, Landmark, Calculator, PiggyBank, Calendar, Gift, ArrowRight } from 'lucide-react';

interface QuickTasksProps {
  onOpenCalculator: () => void;
}

export const QuickTasks: React.FC<QuickTasksProps> = ({ onOpenCalculator }) => {
  const tasks = [
    {
      title: 'Open a Chequing Account',
      subtitle: 'Earn up to $400 bonus',
      icon: Landmark,
      action: 'Explore accounts',
      color: 'bg-red-50 text-[#EC111A]',
      onClick: undefined,
    },
    {
      title: 'Apply for a Credit Card',
      subtitle: 'Find your ideal rewards card',
      icon: CreditCard,
      action: 'Compare cards',
      color: 'bg-blue-50 text-blue-600',
      onClick: undefined,
    },
    {
      title: 'Mortgage Calculator',
      subtitle: 'Estimate monthly payments',
      icon: Calculator,
      action: 'Calculate now',
      color: 'bg-emerald-50 text-emerald-600',
      onClick: onOpenCalculator,
    },
    {
      title: 'High Interest Savings',
      subtitle: 'Guaranteed GIC rates',
      icon: PiggyBank,
      action: 'View rates',
      color: 'bg-amber-50 text-amber-600',
      onClick: undefined,
    },
    {
      title: 'Book an Advisor',
      subtitle: 'In-person or virtual call',
      icon: Calendar,
      action: 'Schedule appointment',
      color: 'bg-purple-50 text-purple-600',
      onClick: undefined,
    },
    {
      title: 'Scene+ Rewards',
      subtitle: 'Earn & redeem points',
      icon: Gift,
      action: 'Explore Scene+',
      color: 'bg-rose-50 text-rose-600',
      onClick: undefined,
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Popular Banking Shortcuts
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Select an option below to quickly get started with your financial goals.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-sm font-bold text-[#EC111A] hover:underline mt-4 md:mt-0"
          >
            <span>View all products & services</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {tasks.map((task, idx) => {
            const Icon = task.icon;
            return (
              <div
                key={idx}
                onClick={task.onClick}
                className="group relative bg-white border border-gray-200 hover:border-[#EC111A] rounded-2xl p-3 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform group-hover:scale-110 ${task.color}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#EC111A] transition-colors leading-snug">
                    {task.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-2">
                    {task.subtitle}
                  </p>
                </div>
                
                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100 flex items-center text-[11px] sm:text-xs font-bold text-[#EC111A]">
                  <span className="truncate">{task.action}</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
