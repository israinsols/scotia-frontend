import React from 'react';

export const HeroCarousel: React.FC = () => {
  const triLogoUrl = "https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/category/en/project-windmill/Tri_Sco-Sce-She_Horizontal_Grey_RGB.png/_jcr_content/renditions/cq5dam.web.1280.1280.png";

  return (
    <section className="w-full overflow-hidden border-b border-gray-200/60 font-sans bg-white">
      
      {/* 45/55 Split container: image top on mobile, 45% text left / 55% image right on desktop */}
      <div className="w-full flex flex-col lg:flex-row min-h-[460px] lg:min-h-[500px]">
        
        {/* Left Side: Pure White Background (45% on desktop, 2nd on mobile) */}
        <div className="w-full lg:w-[48%] bg-white p-6 sm:p-12 lg:py-16 lg:pl-36 lg:pr-0 flex flex-col justify-center border-r border-gray-100 z-10 order-2 lg:order-1">
          
          <div className="w-full space-y-6">
            
            {/* 1. Tri-Logo Image */}
            <div className="h-11 flex items-center">
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
            <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-[#222222] leading-[1.12] tracking-tight">
              Hit the road and get up to <br className="hidden sm:block" />10¢/ L in value at Shell
            </h1>

            {/* 3. Description Paragraph */}
            <p className="text-base sm:text-lg lg:text-[18px] w-2xl text-[#4A4A4A] leading-relaxed font-normal">
              With our new partnership, you can link your card to your <a href="#" className="text-[#006699] hover:underline font-semibold">Shell Go+</a> <br/> account today so you can take advantage of this exclusive offer on your <br/> next fuel purchase at <a href="#" className="text-[#006699] hover:underline font-semibold">Shell</a> stations across Canada.
            </p>

            {/* 4. Action Buttons & Labels (Spaced out labels and buttons) */}
            <div className="flex flex-wrap items-start gap-6 sm:gap-32 pt-1">
              
              <div className="flex flex-col space-y-10">
                <span className="text-xs sm:text-[16px] text-[#4A4A4A] font-normal">
                  Already a client?
                </span>
                <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[#2D2D2D] hover:bg-white hover:text-black text-white border border-[#2D2D2D] font-bold text-xs sm:text-sm rounded-full shadow-xs transition duration-150 text-center whitespace-nowrap">
                  Enrol me
                </button>
              </div>

              <div className="flex flex-col space-y-10">
                <span className="text-xs sm:text-[16px] text-[#4A4A4A] font-normal">
                  Not a client yet?
                </span>
                <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white hover:bg-black hover:text-white text-[#222222] border border-[#2D2D2D] font-bold text-xs sm:text-sm rounded-full transition duration-150 text-center whitespace-nowrap">
                  Apply now
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side: Car Sunset Background Image (55% on desktop, 1st on mobile) */}
        <div className="w-full lg:w-[52%] relative min-h-[300px] lg:min-h-full  order-1 lg:order-2">
          <img
            src="/hero-car.jpg"
            alt="Couple sitting on car at sunset"
            className="absolute inset-0 w-full h-full  object-center"
          />
        </div>

      </div>

    </section>
  );
};

