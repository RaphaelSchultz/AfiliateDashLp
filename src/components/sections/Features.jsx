import React from 'react';
import {
  BarChart3,
  MessageSquare,
  Link as LinkIcon,
  TrendingUp,
  Zap,
  Target,
  Clock,
  Smartphone,
  Sparkles,
} from 'lucide-react';

/* ─── Mini mockups inside cards ─── */

const SubIDChart = () => (
  <div className="mt-4 space-y-2">
    {[
      { label: 'gerenciador', pct: 78, val: 'R$ 1.019' },
      { label: 'turbinar', pct: 55, val: 'R$ 569' },
      { label: 'afiliipro', pct: 30, val: 'R$ 198' },
      { label: 'feed', pct: 22, val: 'R$ 140' },
    ].map((row) => (
      <div key={row.label} className="flex items-center gap-2">
        <span className="text-[10px] text-slate-500 w-20 shrink-0 truncate">{row.label}</span>
        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full" style={{ width: `${row.pct}%` }} />
        </div>
        <span className="text-[10px] font-bold text-slate-700 w-14 text-right shrink-0">{row.val}</span>
      </div>
    ))}
  </div>
);

const MetaAdsRow = () => (
  <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
    <div className="grid grid-cols-4 gap-0 text-[10px]">
      <div className="col-span-4 grid grid-cols-4 bg-slate-50 px-3 py-2 border-b border-slate-100">
        {['Campanha', 'Gastos', 'Vendas', 'ROAS'].map((h) => (
          <span key={h} className="font-bold text-slate-400 uppercase tracking-wider">{h}</span>
        ))}
      </div>
      {[
        ['Turbinar Pano', 'R$1.964', '1.310', '1,05'],
        ['Gerenciador Org.', 'R$1.798', '1.184', '1,12'],
        ['Gerenciador Capa', 'R$1.655', '1.099', '1,15'],
      ].map((row, i) => (
        <div key={i} className="col-span-4 grid grid-cols-4 px-3 py-2 hover:bg-orange-50/40 transition-colors border-b border-slate-50 last:border-0">
          <span className="text-slate-700 font-semibold truncate pr-2">{row[0]}</span>
          <span className="text-slate-600">{row[1]}</span>
          <span className="text-slate-600">{row[2]}</span>
          <span className="font-bold text-green-600">{row[3]}</span>
        </div>
      ))}
    </div>
  </div>
);

const GroupsPreview = () => (
  <div className="mt-4 space-y-2">
    {[
      { name: 'Grupo Afiliados #49', members: '4.098', sales: '14', commission: 'R$ 165' },
      { name: 'Grupo Afiliados #48', members: '4.098', sales: '19', commission: 'R$ 100' },
      { name: 'Grupo Afiliados #47', members: '4.098', sales: '18', commission: 'R$ 46' },
    ].map((g, i) => (
      <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-xl border border-slate-100">
        <div>
          <div className="text-[11px] font-bold text-slate-800">{g.name}</div>
          <div className="text-[10px] text-slate-400">{g.members} membros · {g.sales} vendas</div>
        </div>
        <span className="text-[11px] font-black text-orange-500">{g.commission}</span>
      </div>
    ))}
  </div>
);

/* ─── Cards config ─── */

const cardData = [
  {
    id: 'subids',
    colSpan: 'lg:col-span-4',
    rowSpan: 'lg:row-span-2',
    icon: BarChart3,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    badge: 'SubID Tracking',
    title: 'Rastreamento granular de SubIDs',
    desc: 'Saiba exatamente de qual link, canal ou campanha veio cada venda. Crie links com ?subid= e monitore performance em tempo real.',
    extra: <SubIDChart />,
  },
  {
    id: 'links',
    colSpan: 'lg:col-span-2',
    rowSpan: '',
    icon: LinkIcon,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    badge: 'Links Dinâmicos',
    title: 'Gerador de links ilimitado',
    desc: 'Crie e gerencie links rastreáveis sem limites. Redirecione destinos sem pausar campanhas ativas.',
    extra: null,
  },
  {
    id: 'realtime',
    colSpan: 'lg:col-span-2',
    rowSpan: '',
    icon: Zap,
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-500',
    badge: 'Tempo Real',
    title: 'Dados antes do painel Shopee',
    desc: 'Visualize suas conversões e comissões antes do painel oficial atualizar. Decisões rápidas, sem espera.',
    extra: null,
  },
  {
    id: 'metaads',
    colSpan: 'lg:col-span-3',
    rowSpan: 'lg:row-span-2',
    icon: Target,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    badge: 'Meta Ads',
    title: 'Integração com Meta Ads',
    desc: 'Veja investimento, gastos, ROAS e lucro real por campanha. Corte o que dá prejuízo, escale o que converte.',
    extra: <MetaAdsRow />,
  },
  {
    id: 'groups',
    colSpan: 'lg:col-span-3',
    rowSpan: 'lg:row-span-2',
    icon: MessageSquare,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-500',
    badge: 'Grupos WhatsApp',
    title: 'Automação de grupos de WhatsApp',
    desc: 'Gerencie e dispare mensagens para seus grupos de compradores com agendamento automático por produto e horário.',
    extra: <GroupsPreview />,
  },
  {
    id: 'analytics',
    colSpan: 'lg:col-span-3',
    rowSpan: '',
    icon: Smartphone,
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
    badge: 'Device Analytics',
    title: 'Mobile vs Desktop & Geo',
    desc: 'Entenda seu público: porcentagem de tráfego por dispositivo e as regiões que mais compram.',
    extra: null,
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="section-padding bg-hero-gradient">
      <div className="container-custom">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-pill section-pill--orange mx-auto mb-6">
            <Sparkles size={12} />
            Funcionalidades
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Ferramentas que{' '}
            <span className="gradient-text">super afiliados</span>
            {' '}usam
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Desenvolvemos cada funcionalidade baseada nas necessidades reais de quem investe pesado em tráfego e precisa de clareza absoluta.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`group feature-card p-7 ${card.colSpan} ${card.rowSpan}`}
            >
              <div className={`icon-wrapper ${card.iconBg}`}>
                <card.icon size={20} className={card.iconColor} />
              </div>
              <div className="feature-badge mb-3">{card.badge}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              {card.extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
