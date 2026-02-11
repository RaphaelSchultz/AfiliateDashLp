import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/layout/ScrollToTop';

// Lazy Imports
const Home = lazy(() => import('./pages/Home'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

// Loading component
const LoadingData = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingData />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="obrigado" element={<ThankYou />} />
            <Route path="termos-de-uso" element={<TermsOfUse />} />
            <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
