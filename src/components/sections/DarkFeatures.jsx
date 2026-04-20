import React from 'react';
import { BarChart3, Wallet, LineChart, Users, TrendingUp } from 'lucide-react';

const DarkFeatures = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#E9EFF4', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="max-w-[1054px] mx-auto px-5 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-[#1D2939] leading-[1.08] mb-5">
            Foi exatamente por viver os
            <br />
            mesmos problemas que você que
            <br />
            decidimos criar o AfiliadoDash
          </h2>
          <p className="text-[16px] text-[#475467] max-w-[760px] mx-auto leading-relaxed">
            Um painel pensado para afiliados que vivem operação de verdade: comissões, pedidos, SubIDs,
            anúncios e grupos em uma única visão clara para decidir mais rápido.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-4 md:-left-7 top-[20%] z-20 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#1570EF] shadow-[0_10px_24px_rgba(21,112,239,0.35)] flex items-center justify-center">
            <LineChart size={24} className="text-white" />
          </div>
          <div className="absolute -right-4 md:-right-7 top-[40%] z-20 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#F97316] shadow-[0_10px_24px_rgba(249,115,22,0.35)] flex items-center justify-center">
            <Wallet size={24} className="text-white" />
          </div>
          <div className="absolute left-[18%] -bottom-4 md:-bottom-7 z-20 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#6366F1] shadow-[0_10px_24px_rgba(99,102,241,0.35)] flex items-center justify-center">
            <Users size={24} className="text-white" />
          </div>
          <div className="absolute right-[18%] -bottom-4 md:-bottom-7 z-20 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#22C55E] shadow-[0_10px_24px_rgba(34,197,94,0.35)] flex items-center justify-center">
            <BarChart3 size={24} className="text-white" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/70 shadow-[0_24px_70px_rgba(13,39,80,0.15)]">
            <img
              src="/images/afiliado-dash-sessao-1.png"
              alt="Tela do dashboard do Afiliado Dash"
              className="w-full block aspect-[16/10] object-cover object-top"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                const fallback = event.currentTarget.nextElementSibling;
                if (fallback) {
                  fallback.classList.remove('hidden');
                }
              }}
            />
            <div className="hidden bg-gradient-to-b from-[#f8fafc] to-[#eef2f7] p-8 md:p-12">
              <div className="h-[320px] md:h-[420px] rounded-xl border border-slate-200/70 bg-white/70 animate-pulse" />
            </div>
            {/* Mini metric card — bottom left */}
            <div className="absolute bottom-4 left-4 z-10 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-3 py-2.5 flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                <TrendingUp size={14} className="text-orange-500" />
              </div>
              <div>
                <div className="text-[8px] font-semibold text-slate-400 uppercase tracking-wide leading-none mb-0.5">Receita do Mês</div>
                <div className="text-[13px] font-black text-[#1D2939] leading-none">R$ 52.671</div>
              </div>
              <div className="ml-1 px-1.5 py-0.5 rounded-full bg-green-50 text-green-600 text-[9px] font-bold">
                +14,3%
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            className="btn-primary"
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Criar conta
          </button>
        </div>
      </div>
    </section>
  );
};

export default DarkFeatures;
