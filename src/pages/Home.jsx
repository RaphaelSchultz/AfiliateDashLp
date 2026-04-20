import React, { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';

const DarkFeatures = lazy(() => import('../components/sections/DarkFeatures'));
const FeatureHighlightsSection = lazy(() => import('../components/sections/FeatureHighlightsSection'));
const MetaAdsSection = lazy(() => import('../components/sections/MetaAdsSection'));
const GroupsSection = lazy(() => import('../components/sections/GroupsSection'));
const Offer = lazy(() => import('../components/sections/Offer'));
const FinalCTA = lazy(() => import('../components/sections/FinalCTA'));
const FAQ = lazy(() => import('../components/sections/FAQ'));

const SectionLoader = () => (
  <div className="py-16 flex justify-center items-center">
    <div className="w-7 h-7 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
  </div>
);

export default function Home() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero scrollToOffer={scrollToOffer} />
      <Suspense fallback={<SectionLoader />}>
        <DarkFeatures />
        <FeatureHighlightsSection />
        <MetaAdsSection />
        <GroupsSection />
        <Offer />
        <FinalCTA scrollToOffer={scrollToOffer} />
        <FAQ />
      </Suspense>
    </>
  );
}
