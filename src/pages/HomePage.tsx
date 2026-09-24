import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroCarousel } from '../components/HeroCarousel';
import { CardShowcase } from '../components/CardShowcase';
import { FeaturedContainer } from '../components/FeaturedContainer';
import { Footer } from '../components/Footer';
import { CalculatorModal } from '../components/CalculatorModal';

interface HomePageProps {
  onOpenSignIn: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSignIn }) => {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  useEffect(() => {
    document.title = 'Personal Banking | Soctiabank Canada';
  }, []);


  return (
    <div className="min-h-screen bg-[#F3F4F6] text-gray-900 font-sans flex flex-col antialiased selection:bg-red-100 selection:text-[#EC111A]">
      
      {/* Official Scotiabank Navbar */}
      <Navbar
        onOpenSignIn={onOpenSignIn}
        currentLang={lang}
        setLang={setLang}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Shell 10¢/L Offer Hero Banner */}
        <HeroCarousel />

        {/* "You may be interested in" 3 Card Showcase */}
        <CardShowcase />

        {/* "Featured" White Container with 6 Grid Cards & Tabs */}
        <FeaturedContainer onOpenCalculator={() => setIsCalculatorOpen(true)} />
      </main>

      {/* Official CDIC Banner, Action Columns & Footer */}
      <Footer />

      {/* Interactive Calculator Modal */}
      <CalculatorModal isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />

    </div>
  );
};
