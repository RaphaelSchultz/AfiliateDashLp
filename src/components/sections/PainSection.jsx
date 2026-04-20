import React from 'react';
import { Clock, Target, TrendingDown, XCircle } from 'lucide-react';

const pains = [
  {
    icon: Clock,
    title: 'Dados expiram rápido',
    desc: 'Tente ver quanto você vendeu no mesmo mês do ano passado. Impossível no painel nativo. Nós guardamos seu histórico para sempre.',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: Target,
    title: 'Origem completamente desconhecida',
    desc: '"Vendi 10 produtos hoje." Ótimo — mas veio do Instagram, do grupo de WhatsApp ou do anúncio pago? Sem SubID, você não escala.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: TrendingDown,
    title: 'Zero cálculo de ROI real',
    desc: 'Faturar R$ 1.000 gastando R$ 1.200 não é negócio. Nosso sistema foca no que importa: lucro líquido no seu bolso.',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
];

const PainSection = () => {
  return (
    <section className="section-padding bg-white border-t border-slate-100">
      <div className="container-custom">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-pill mx-auto mb-6">
            <XCircle size={12} className="text-red-500" />
            O Problema
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            O "painel grátis" da Shopee{' '}
            <span className="gradient-text">custa caro</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            A maioria dos afiliados opera no escuro. Sem dados históricos e sem detalhamento de origem, você está essencialmente apostando — não investindo.
          </p>
        </div>

        {/* Pain Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pains.map((pain, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-[2rem] p-8 border ${pain.border} shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`icon-wrapper ${pain.bg} group-hover:${pain.bg} mb-6`}>
                <pain.icon size={22} className={pain.color} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{pain.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual "data blindness" mockup */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="relative bg-white border border-red-100 rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(239,68,68,0.06)] grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100">
            <div className="flex items-center justify-between border-b border-red-50 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <XCircle size={16} className="text-red-500" />
                <span className="text-sm font-bold text-red-600 font-mono">Status: CEGUEIRA DE DADOS</span>
              </div>
              <span className="feature-badge" style={{ background: '#FEF2F2', borderColor: '#FECACA', color: '#DC2626' }}>Sem rastreamento</span>
            </div>
            <div className="space-y-3 mb-6">
              <div className="h-3 bg-slate-100 rounded-full w-full animate-pulse" />
              <div className="h-3 bg-slate-100 rounded-full w-3/4 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="h-3 bg-slate-100 rounded-full w-5/6 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-red-600 text-sm font-mono font-medium">
                Erro: Impossível determinar ROI da Campanha #04. Origem do tráfego: desconhecida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
