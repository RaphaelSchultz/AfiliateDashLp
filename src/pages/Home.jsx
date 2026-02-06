import React, { Suspense, lazy } from 'react';

// Static Imports (First Contentful Paint components)
import Hero from '../components/sections/Hero';

// Lazy Imports (Code Splitting for performance optimization)
const PainSection = lazy(() => import('../components/sections/PainSection'));
const Features = lazy(() => import('../components/sections/Features'));
const DeepDive = lazy(() => import('../components/sections/DeepDive'));
const Offer = lazy(() => import('../components/sections/Offer'));
const FAQ = lazy(() => import('../components/sections/FAQ'));

export default function Home() {
    const scrollToOffer = () => {
        const offerElement = document.getElementById('oferta');
        if (offerElement) {
            offerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Hero scrollToOffer={scrollToOffer} />
            <PainSection />
            <Features />
            <DeepDive />
            <Offer />
            <FAQ />
        </>
    );
}
