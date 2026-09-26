import React from 'react';

export const CardShowcase: React.FC = () => {
  const cards = [
    {
      title: 'Scotiabank Passport® Visa Infinite +* Card',
      linkText: 'Explore this card',
      bgImage: 'https://www.scotiabank.com/content/dam/scotia-project-checkout/canada/images/credit-cards/explore/Passport_Visa_Infinite_Explore-Card-416x528.jpg',
      cardArtImage: 'https://www.scotiabank.com/content/dam/scotia-project-checkout/canada/images/credit-cards/visa/scotiabank-passport-visa-infinite/cards/PVI-Plus-Card-EN.png',
    },
    {
      title: 'Scotiabank Gold American Express® Card',
      linkText: 'Explore this card',
      bgImage: 'https://www.scotiabank.com/content/dam/scotia-project-checkout/canada/images/credit-cards/american-express/scotiabank-gold-american-express/hero-banner/Stocksy_unlicensed_comp_182734.jpg',
      cardArtImage: 'https://www.scotiabank.com/content/dam/scotiabank/canada/credit-cards/images/card-art/AMEX_Gold_SceneGoldLogo_En.png',
    },
    {
      title: 'Scotia Momentum® Visa Infinite +* Card',
      linkText: 'Explore this card',
      bgImage: 'https://www.scotiabank.com/content/dam/scotia-project-checkout/canada/images/d2d/savings-accounts/high-interest-savings-account/hisa_hero_banner.png',
      cardArtImage: null, // removed for this card
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-10 sm:py-16 font-sans">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-[#222222] mb-7 sm:mb-10 tracking-tight">
          You may be interested in
        </h2>

        {/* 3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative h-[400px] md:h-[500px] rounded overflow-hidden shadow-md group cursor-pointer border border-gray-200/80 bg-gray-900 flex flex-col justify-between"
            >
              {/* Background Image */}
              <img
                src={card.bgImage}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Official Credit Card Art Image (only if provided) */}
              {card.cardArtImage && (
                <div className="relative z-10 pt-14 flex justify-center">
                  <img
                    src={card.cardArtImage}
                    alt={card.title}
                    className="w-56 h-auto drop-shadow-2xl transition-transform duration-300 group-hover:-translate-y-1 object-contain"
                  />
                </div>
              )}

              {/* Bottom Dark Translucent Box */}
              <div className="relative z-10 bg-[#1A1A1A]/50 backdrop-blur-xs p-6 text-white border-t border-white/10 mt-auto min-h-[135px] flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight">
                  {card.title}
                </h3>
                <a href="#" className="inline-block text-xs text-gray-300 group-hover:text-white hover:underline pt-2 font-medium">
                  {card.linkText}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};  
