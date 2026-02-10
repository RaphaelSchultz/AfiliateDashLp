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
        <div className="min-h-screen bg-neutral-cream dark:bg-slate-900 text-neutral-charcoal dark:text-gray-100 font-sans selection:bg-orange-500/30 selection:text-orange-900 overflow-x-hidden flex flex-col transition-colors duration-300">
            {/* Background Ambience - Light Mode Only */}
            <div className="fixed inset-0 pointer-events-none z-0 dark:hidden">
                <div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-100/50 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-[120px] mix-blend-multiply" />
            </div>

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
