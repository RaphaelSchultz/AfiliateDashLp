import React from 'react';
import { useLocation } from 'react-router-dom';
import PricingCard from '../pricing/PricingCard';
import { plans } from '../pricing/plansData';

const Offer = () => {
  const location = useLocation();
  const isPv2 = location.pathname === '/pv2';
  const routePlans = plans.map((plan) => ({
    ...plan,
    ctaHref: isPv2 ? plan.pv2CtaHref : plan.ctaHref,
  }));

  return (
    <section
      id="oferta"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1F2D3D 0%, #1D2939 100%)',
        paddingTop: '56px',
        paddingBottom: '64px',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-4 items-stretch">
          {routePlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
