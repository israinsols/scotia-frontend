import React from 'react';

export const HeroCarousel: React.FC = () => {
  const triLogoUrl = "https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/category/en/project-windmill/Tri_Sco-Sce-She_Horizontal_Grey_RGB.png/_jcr_content/renditions/cq5dam.web.1280.1280.png";

  return (
    <section className="w-full overflow-hidden border-b border-gray-200/60 font-sans bg-white">
      
      {/* Mobile: single column (text top, image bottom). Desktop: 50/50 split grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Text content */}
        <div className="bg-white p-6 sm:p-10 lg:py-16 lg:pl-16 lg:pr-10 flex flex-col justify-center items-start border-r border-gray-100 z-10 order-1 lg:order-none">
          
          <div className="w-full max-w-[460px] space-y-4 sm:space-y-6">
            
            {/* 1. Tri-Logo Image */}
            <div className="h-9 sm:h-11 flex items-center">
              <img
                src={triLogoUrl}
                alt="Scotiabank Scene+ Shell"
                className="h-full w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* 2. Main Headline — smaller on mobile */}
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#222222] leading-[1.14] tracking-tight">
              Hit the road and get up to 10¢/ L in value at Shell
            </h1>

            {/* 3. Description Paragraph */}
            <p className="text-xs sm:text-[13px] text-[#4A4A4A] leading-relaxed font-normal">
              With our new partnership, you can link your card to your <a href="#" className="text-[#006699] hover:underline font-semibold">Shell Go+</a> account today so you can take advantage of this exclusive offer on your next fuel purchase at <a href="#" className="text-[#006699] hover:underline font-semibold">Shell</a> stations across Canada.
            </p>

            {/* 4. Client Status Links */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-1 text-xs text-[#4A4A4A] font-normal">
              <div>
                <a href="#" className="hover:underline">Already a client?</a>
              </div>
              <div>
                <a href="#" className="hover:underline">Not a client yet?</a>
              </div>
            </div>

            {/* 5. Action Buttons */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-1">
              <div>
                <button className="w-full min-w-[100px] bg-[#2D2D2D] hover:bg-white hover:text-black text-white border border-[#2D2D2D] font-bold text-xs px-4 sm:px-7 py-3 rounded-full shadow-xs transition duration-150">
                  Enrol me
                </button>
              </div>
              <div>
                <button className="w-full min-w-[100px] bg-white hover:bg-black hover:text-white text-[#222222] border border-[#2D2D2D] font-bold text-xs px-4 sm:px-7 py-3 rounded-full transition duration-150">
                  Apply now
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side / Bottom on mobile: Image — full width */}
        <div className="overflow-hidden order-2 lg:order-none">
          <img
            src="/hero-car.jpg"
            alt="Couple sitting on car at sunset"
            className="w-full h-auto block"
          />
        </div>

      </div>

    </section>
  );
};
