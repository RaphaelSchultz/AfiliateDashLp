import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = ({ scrollToOffer }) => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#EFF8FF', paddingTop: '90px', paddingBottom: '90px' }}
    >
      <div className="max-w-[1054px] mx-auto px-5 text-center">
        <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-[#1D2939] leading-[1.08] mb-5">
          Pronto para dominar seus números?
        </h2>
        <p className="text-[16px] text-[#475467] max-w-[500px] mx-auto leading-relaxed mb-8">
          Junte-se a mais de 10.000 afiliados que já tomam decisões baseadas em dados reais. Comece gratuitamente hoje.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-[10px] shadow-[0_8px_24px_rgba(249,115,22,0.30)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Criar conta
            <ArrowRight size={16} />
          </button>
          <a
            href="https://app.afiliadodash.com/login"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-[#475467] border border-slate-300 rounded-[10px] hover:border-orange-300 hover:text-orange-500 transition-all duration-200"
          >
            Já tenho conta
          </a>
        </div>

        <p className="mt-5 text-[12px] text-[#98A2B3]">Sem cartão de crédito necessário</p>
      </div>
    </section>
  );
};

export default FinalCTA;
