import React, { Suspense } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Outlet } from 'react-router-dom';

const LoadingData = () => (
    <div className="py-20 flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
    </div>
);

const MainLayout = () => {
    const scrollToOffer = () => {
        // If we are on the home page, scroll to offer
        // If not, we might need to navigate home first - but for now let's just implement the scroll
        const offerElement = document.getElementById('oferta');
        if (offerElement) {
            offerElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback if not on home page or element not found
            window.location.href = "/#oferta";
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#1D2939] selection:bg-orange-500/20 selection:text-orange-900 overflow-x-hidden flex flex-col">


            <Header scrollToOffer={scrollToOffer} />

            <main className="relative z-10 flex-grow">
                <Suspense fallback={<LoadingData />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
