import React, { Suspense, lazy } from 'react';

// Static Imports (First Contentful Paint components)
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';

// Lazy Imports (Code Splitting for performance optimization)
const PainSection = lazy(() => import('./components/sections/PainSection'));
const Features = lazy(() => import('./components/sections/Features'));
const DeepDive = lazy(() => import('./components/sections/DeepDive'));
const Offer = lazy(() => import('./components/sections/Offer'));
const FAQ = lazy(() => import('./components/sections/FAQ'));
const Footer = lazy(() => import('./components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingData = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
  </div>
);

export default function AfiliateDashLanding() {
  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1121] text-gray-300 font-sans selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/10 rounded-full blur-[120px]" />
      </div>

      <Header scrollToOffer={scrollToOffer} />

      <main className="relative z-10 pt-20">
        <Hero scrollToOffer={scrollToOffer} />

        <Suspense fallback={<LoadingData />}>
          <PainSection />
          <Features />
          <DeepDive />
          <Offer />
          <FAQ />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}