
import React from 'react';
import HeroSection from '@/components/HeroSection';
import BotsSection from '@/components/BotsSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BotsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
