import React from 'react';
import { RefreshCw, Zap, TrendingUp, Link as LinkIcon, Edit3, AlertCircle } from 'lucide-react';

const LinkManagerMockup = () => (
  <div className="bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.10)] border border-slate-100 overflow-hidden">
    {/* Header bar */}
    <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex items-center justify-between">
      <span className="text-sm font-bold text-slate-700">Gerenciador de Links</span>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
        <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
      </div>
    </div>

    {/* Active badge */}
    <div className="relative px-5 pt-4">
      <div className="absolute top-3 right-5 bg-orange-500 text-white font-bold text-[10px] px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
        <RefreshCw size={10} className="animate-spin" style={{ animationDuration: '3s' }} />
        Link Ativo
      </div>
    </div>

    <div className="p-5 pt-3 space-y-3">
      {[
        { name: 'Promoção Relâmpago', clicks: '1.240', cr: '4.2%', roi: '+R$ 450', active: true },
        { name: 'Anúncio Reels #03', clicks: '856', cr: '3.8%', roi: '+R$ 210', active: true },
        { name: 'Link Bio Instagram', clicks: '3.400', cr: '1.5%', roi: '+R$ 120', active: true },
      ].map((link, i) => (
        <div
          key={i}
          className="bg-slate-50 p-3 rounded-xl border border-transparent hover:border-orange-200 hover:bg-orange-50/30 flex items-center justify-between group transition-all cursor-default"
        >
          <div>
            <div className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <LinkIcon size={12} className="text-orange-500" />
              {link.name}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 flex gap-3 font-medium">
              <span>{link.clicks} cliques</span>
              <span>CR: <span className="text-green-600">{link.cr}</span></span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-lg mb-1">{link.roi}</div>
            <button className="text-[10px] text-slate-400 hover:text-orange-500 flex items-center gap-1 ml-auto font-medium transition-colors">
              <Edit3 size={9} /> Editar
            </button>
          </div>
        </div>
      ))}

      <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-700 flex gap-2">
        <AlertCircle size={14} className="shrink-0 mt-0.5 text-blue-500" />
        <span>Produto esgotou? Mude o destino do link sem pausar suas campanhas.</span>
      </div>
    </div>
  </div>
);

const benefits = [
  {
    icon: RefreshCw,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    title: 'Links Sempre Ativos',
    desc: 'Redirecione com inteligência. O produto esgotou? Mude o destino instantaneamente sem pausar campanhas que já estão lucrando.',
  },
  {
    icon: Zap,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    title: 'Fim do "Delay" da Shopee',
    desc: 'Pare de voar às cegas esperando o painel oficial atualizar. Tenha dados imediatos de cliques e comissões para decisões rápidas.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-500',
    title: 'Escalabilidade Segura',
    desc: 'Acompanhe diariamente seus investimentos e retorno. Escale apenas o que dá lucro com clareza absoluta sobre o desempenho.',
  },
];

const DeepDive = () => {
  return (
    <section id="detalhes" className="section-padding bg-slate-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Mockup — left */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-orange-500/10 blur-3xl -z-10 rounded-full opacity-60" />
            <LinkManagerMockup />
          </div>

          {/* Text — right */}
          <div className="order-1 lg:order-2">
            <div className="section-pill section-pill--orange mb-6">
              Gestão Inteligente
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Transforme seus links em uma{' '}
              <span className="gradient-text">máquina de resultados</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Chega de depender de métricas atrasadas. Tenha clareza total da origem dos seus cliques e saiba exatamente qual link está trazendo mais ROI.
            </p>

            <ul className="mt-10 space-y-6">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className={`icon-wrapper ${b.iconBg} shrink-0`} style={{ marginBottom: 0 }}>
                    <b.icon size={20} className={b.iconColor} />
                  </div>
                  <div>
                    <strong className="block text-white text-base font-bold mb-1">{b.title}</strong>
                    <span className="text-slate-400 text-sm leading-relaxed">{b.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDive;
