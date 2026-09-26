import React from 'react';

export const HeroCarousel: React.FC = () => {
  const triLogoUrl = "https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/category/en/project-windmill/Tri_Sco-Sce-She_Horizontal_Grey_RGB.png/_jcr_content/renditions/cq5dam.web.1280.1280.png";

  return (
    <section className="w-full overflow-hidden border-b border-gray-200/60 font-sans bg-white">
      
      {/* 45/55 Split container: image top on mobile, 48% text left / 52% image right on desktop */}
      <div className="w-full flex flex-col lg:flex-row min-h-[260px] lg:min-h-[250px]">
        
        {/* Left Side: Pure White Background (48% on desktop, 2nd on mobile) */}
        <div className="w-full lg:w-[48%] bg-white px-4 sm:px-8 py-8 lg:py-12 lg:pl-36 lg:pr-12 flex flex-col justify-center border-r border-gray-100 z-10 order-2 lg:order-1">
          
          <div className="w-full max-w-2xl space-y-4 sm:space-y-6">
            
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

            {/* 2. Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[45px] font-bold text-[#222222] leading-[1.18] sm:leading-[1.12] tracking-tight">
              Hit the road and get up to <br className="hidden sm:block" />10¢/ L in value at Shell
            </h1>

            {/* 3. Description Paragraph */}
            <p className="text-sm sm:text-lg lg:text-[18px] max-w-2xl text-[#4A4A4A] leading-relaxed font-normal">
              With our new partnership, you can link your card to your <a href="#" className="text-[#006699] hover:underline font-semibold">Shell Go+</a> account today so you can take advantage of this exclusive offer on your next fuel purchase at <a href="#" className="text-[#006699] hover:underline font-semibold">Shell</a> stations across Canada.
            </p>

            {/* 4. Action Buttons & Labels */}
            <div className="flex flex-row items-center justify-between sm:justify-start gap-8 sm:gap-16 lg:gap-24 pt-2">
              
              <div className="flex flex-col space-y-2 sm:space-y-4">
                <span className="text-xs sm:text-[16px] text-[#4A4A4A] font-normal">
                  Already a client?
                </span>
                <button className="px-5 sm:px-8 py-2.5 sm:py-4 bg-[#2D2D2D] hover:bg-white hover:text-black text-white border border-[#2D2D2D] font-bold text-xs sm:text-sm rounded-full shadow-xs transition duration-150 text-center whitespace-nowrap">
                  Enrol me
                </button>
              </div>

              <div className="flex flex-col space-y-2 sm:space-y-4">
                <span className="text-xs sm:text-[16px] text-[#4A4A4A] font-normal">
                  Not a client yet?
                </span>
                <button className="px-5 sm:px-8 py-2.5 sm:py-4 bg-white hover:bg-black hover:text-white text-[#222222] border border-[#2D2D2D] font-bold text-xs sm:text-sm rounded-full transition duration-150 text-center whitespace-nowrap">
                  Apply now
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side: Car Sunset Background Image (52% on desktop, 1st on mobile) */}
        <div className="w-full lg:w-[52%] relative min-h-[220px] sm:min-h-[300px] lg:min-h-[450px] order-1 lg:order-2">
          <img
            src="/hero-car.jpg"
            alt="Couple sitting on car at sunset"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

      </div>

    </section>
  );
};
