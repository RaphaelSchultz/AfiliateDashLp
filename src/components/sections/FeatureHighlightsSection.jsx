import React from 'react';
import {
  LayoutDashboard,
  CalendarClock,
  MousePointerClick,
  Megaphone,
  Users,
  Link2,
  BarChart3,
  Goal,
  Store,
  MessageCircle,
  Instagram,
  Facebook,
} from 'lucide-react';

const featureItems = [
  {
    title: 'Dashboard Inteligente',
    description: 'Visão rápida do que vendeu, lucrou e precisa de atenção no dia.',
    icon: LayoutDashboard,
    accent: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/25',
  },
  {
    title: 'Análise do Dia',
    description: 'Resumo diário claro para entender desempenho e tomar decisões rápidas.',
    icon: CalendarClock,
    accent: 'text-blue-300',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/25',
  },
  {
    title: 'Análise de Cliques',
    description: 'Mostra de onde vêm os cliques que realmente viram resultado.',
    icon: MousePointerClick,
    accent: 'text-sky-300',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/25',
  },
  {
    title: 'Meta Ads',
    description: 'Conecta seus anúncios ao resultado real para investir com mais confiança.',
    icon: Megaphone,
    accent: 'text-orange-300',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/25',
  },
  {
    title: 'Integração Facebook Ads',
    description: 'Acompanha campanhas do Facebook Ads com visão clara de investimento e retorno.',
    icon: Facebook,
    accent: 'text-blue-300',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/25',
  },
  {
    title: 'Meus Grupos',
    description: 'Organiza sua operação de grupos para acelerar divulgação com controle.',
    icon: Users,
    accent: 'text-emerald-300',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/25',
  },
  {
    title: 'Gerador de Links',
    description: 'Cria links prontos para divulgação com muito mais agilidade.',
    icon: Link2,
    accent: 'text-amber-300',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/25',
  },
  {
    title: 'Análise de Links',
    description: 'Compara links e identifica quais geram mais retorno.',
    icon: BarChart3,
    accent: 'text-cyan-300',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/25',
  },
  {
    title: 'Gerenciamento de Metas',
    description: 'Defina sua meta da Shopee e acompanhe sua evolução em tempo real.',
    icon: Goal,
    accent: 'text-violet-300',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/25',
  },
  {
    title: 'Integração Shopee',
    description: 'Centraliza seus resultados da Shopee para acompanhar tudo sem esforço.',
    icon: Store,
    accent: 'text-orange-300',
    bg: 'bg-orange-300/10',
    border: 'border-orange-300/25',
  },
  {
    title: 'Integração WhatsApp',
    description: 'Facilita distribuição das ofertas e ganho de produtividade no dia a dia.',
    icon: MessageCircle,
    accent: 'text-green-300',
    bg: 'bg-green-400/10',
    border: 'border-green-400/25',
  },
  {
    title: 'Insta Flow',
    description: 'Fluxo dedicado para Instagram, focado em crescimento e conversão.',
    icon: Instagram,
    accent: 'text-pink-300',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/25',
    soon: true,
  },
];

const FeatureHighlightsSection = () => {
  return (
    <section
      id="funcionalidades"
      className="relative overflow-hidden"
      style={{ background: '#102A56', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="absolute top-0 left-0 w-[420px] h-[340px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[340px] bg-blue-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1054px] mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_auto] gap-8 lg:gap-10 items-end mb-12">
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.08] tracking-tight max-w-[680px]">
            O que faz o <span className="text-orange-400">Afiliado Dash</span> ser único e indispensável!
          </h2>

          <p className="text-[16px] leading-relaxed text-white/70 lg:text-right max-w-[320px]">
            A plataforma mais completa para afiliados que querem escalar e centralizar sua operação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureItems.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-[#0A1B38] p-6 shadow-[0_14px_36px_rgba(2,6,23,0.28)]"
            >
              <div className={`w-10 h-10 rounded-xl border ${feature.border} ${feature.bg} flex items-center justify-center mb-4`}>
                <feature.icon size={18} className={feature.accent} />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-[18px] font-bold text-white leading-tight">{feature.title}</h3>
                {feature.soon ? (
                  <span className="px-2 py-0.5 rounded-full bg-pink-400/15 border border-pink-300/40 text-[10px] font-bold uppercase tracking-wide text-pink-200">
                    Em breve
                  </span>
                ) : null}
              </div>

              <p className="text-[14px] leading-relaxed text-white/65">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightsSection;
