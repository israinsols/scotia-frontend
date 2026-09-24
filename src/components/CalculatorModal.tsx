import React, { useState } from 'react';
import { X, Calculator } from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'mortgage' | 'savings'>('mortgage');

  // Mortgage state
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(4.89);
  const [amortization, setAmortization] = useState(25);

  // Savings state
  const [initialSavings, setInitialSavings] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(300);
  const [savingsRate, setSavingsRate] = useState(4.5);
  const [savingsYears, setSavingsYears] = useState(5);

  if (!isOpen) return null;

  // Mortgage math
  const loanAmount = Math.max(0, homePrice - downPayment);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = amortization * 12;
  const monthlyPayment = monthlyRate > 0
    ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    : loanAmount / numberOfPayments;

  // Savings math
  const calculateFutureSavings = () => {
    let total = initialSavings;
    const r = savingsRate / 100 / 12;
    const months = savingsYears * 12;
    for (let i = 0; i < months; i++) {
      total = (total + monthlyContribution) * (1 + r);
    }
    return total;
  };

  const futureSavings = calculateFutureSavings();
  const totalContributed = initialSavings + (monthlyContribution * savingsYears * 12);
  const interestEarned = Math.max(0, futureSavings - totalContributed);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 relative">
        
        {/* Header */}
        <div className="bg-gray-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#EC111A] flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black">Scotia Financial Calculator</h3>
              <p className="text-xs text-gray-400">Estimate your payments & savings growth in real-time</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          <button
            onClick={() => setTab('mortgage')}
            className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${
              tab === 'mortgage'
                ? 'border-[#EC111A] text-[#EC111A] bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Mortgage Payment Calculator
          </button>
          <button
            onClick={() => setTab('savings')}
            className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${
              tab === 'savings'
                ? 'border-[#EC111A] text-[#EC111A] bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Savings Growth Estimator
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {tab === 'mortgage' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Inputs */}
              <div className="space-y-4 text-xs font-medium text-gray-700">
                <div>
                  <label className="block mb-1 font-bold">Home Purchase Price ($)</label>
                  <input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EC111A]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold">Down Payment ($)</label>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EC111A]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EC111A]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold">Amortization Period (Years)</label>
                  <select
                    value={amortization}
                    onChange={(e) => setAmortization(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EC111A]"
                  >
                    <option value={15}>15 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={25}>25 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>
              </div>

              {/* Output Card */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex flex-col justify-between text-center">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Estimated Monthly Payment</span>
                  <div className="text-3xl font-black text-[#EC111A] mt-2">
                    ${isNaN(monthlyPayment) ? '0' : monthlyPayment.toFixed(2)}
                  </div>
                  <span className="text-[11px] text-gray-500">per month</span>
                </div>

                <div className="my-4 border-t border-red-200/60 pt-4 space-y-2 text-left text-xs">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Mortgage Loan:</span>
                    <span className="font-bold text-gray-900">${loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Amortization Term:</span>
                    <span className="font-bold text-gray-900">{amortization} Years</span>
                  </div>
                </div>

                <button className="w-full bg-[#EC111A] hover:bg-[#C40912] text-white font-bold py-2.5 rounded-xl text-xs shadow-md transition">
                  Get Pre-Approved for Mortgage
                </button>
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Inputs */}
              <div className="space-y-4 text-xs font-medium text-gray-700">
                <div>
                  <label className="block mb-1 font-bold">Initial Deposit ($)</label>
                  <input
                    type="number"
                    value={initialSavings}
                    onChange={(e) => setInitialSavings(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EC111A]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold">Monthly Deposit ($)</label>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EC111A]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold">Annual Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={savingsRate}
                    onChange={(e) => setSavingsRate(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EC111A]"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-bold">Investment Horizon (Years)</label>
                  <select
                    value={savingsYears}
                    onChange={(e) => setSavingsYears(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EC111A]"
                  >
                    <option value={1}>1 Year</option>
                    <option value={3}>3 Years</option>
                    <option value={5}>5 Years</option>
                    <option value={10}>10 Years</option>
                  </select>
                </div>
              </div>

              {/* Output Card */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex flex-col justify-between text-center">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Estimated Total Balance</span>
                  <div className="text-3xl font-black text-emerald-700 mt-2">
                    ${futureSavings.toFixed(2)}
                  </div>
                  <span className="text-[11px] text-emerald-600 font-bold">After {savingsYears} Years</span>
                </div>

                <div className="my-4 border-t border-emerald-200/60 pt-4 space-y-2 text-left text-xs">
                  <div className="flex justify-between text-gray-600">
                    <span>Total You Contributed:</span>
                    <span className="font-bold text-gray-900">${totalContributed.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Interest Earned:</span>
                    <span className="font-bold text-emerald-700">+${interestEarned.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-md transition">
                  Open High Interest eSavings
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
