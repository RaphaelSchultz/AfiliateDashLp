import React from 'react';
import { Target, TrendingUp, DollarSign, BarChart3 } from 'lucide-react';

/* Meta Ads table mockup — based on screenshot 2 */
const MetaAdsMockup = () => (
  <div className="rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.35)] border border-slate-200/20">
    {/* Browser chrome */}
    <div className="bg-[#E8EAED] px-4 py-2.5 flex items-center gap-3 border-b border-slate-300/30">
      <div className="flex gap-1.5 shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="px-4 py-1 bg-white rounded-md text-[10px] text-slate-500 font-medium w-48 text-center truncate shadow-sm">
          app.afiliadodash.com/meta-ads
        </div>
      </div>
    </div>

    {/* App content — white background */}
    <div className="bg-white">
      {/* Top nav strip */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50">
        <span className="text-[12px] font-black text-slate-800">Meta Ads</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">
            <span className="text-[9px] text-slate-500 font-medium">Últimos 7 dias</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">
            <span className="text-[9px] text-slate-500 font-medium">Todas as contas</span>
          </div>
          <div className="px-2.5 py-1 bg-orange-500 rounded-lg text-[9px] font-bold text-white">Atualizar</div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-3 p-4">
        {[
          { label: 'Investimento', value: 'R$ 17.703', icon: DollarSign, iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
          { label: 'Comissões', value: 'R$ 18.629', icon: TrendingUp, iconBg: 'bg-green-50', iconColor: 'text-green-500' },
          { label: 'ROAS', value: '1,05', icon: BarChart3, iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
          { label: 'Total Pedidos', value: '9.462', icon: Target, iconBg: 'bg-purple-50', iconColor: 'text-purple-500' },
        ].map((m, i) => (
          <div key={i} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wide">{m.label}</span>
              <div className={`w-5 h-5 rounded-md ${m.iconBg} flex items-center justify-center`}>
                <m.icon size={10} className={m.iconColor} />
              </div>
            </div>
            <div className="text-[14px] font-black text-slate-900">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="px-4 pb-4">
        <div className="rounded-xl border border-slate-100 overflow-hidden shadow-sm">
          {/* Table header */}
          <div className="grid bg-slate-50 border-b border-slate-100 px-3 py-2.5" style={{ gridTemplateColumns: '28px 1fr 100px 70px 60px 55px' }}>
            {['', 'Campanha', 'Sub ID', 'Gastos', 'Vendas', 'ROAS'].map((h, i) => (
              <span key={i} className="text-[8px] font-bold text-slate-400 uppercase tracking-wide">{h}</span>
            ))}
          </div>

          {/* Rows */}
          {[
            { campaign: 'Turbinar Pano', subid: 'turbinar-pano', gastos: 'R$1.964', vendas: '1.310', roas: '1,05', good: true },
            { campaign: 'Gerenciador Org.', subid: 'gerenc.-org.', gastos: 'R$1.798', vendas: '1.184', roas: '1,12', good: true },
            { campaign: 'Ger. Capa Sofá', subid: 'gerenc.-capa', gastos: 'R$1.655', vendas: '1.099', roas: '1,15', good: true },
            { campaign: 'Ger. Calça Skinny', subid: 'gerenc.-calça', gastos: 'R$1.542', vendas: '682', roas: '0,86', good: false },
            { campaign: 'Turbinar Mini Imp.', subid: 'turbinar-mini', gastos: 'R$1.474', vendas: '950', roas: '1,10', good: true },
          ].map((row, i) => (
            <div
              key={i}
              className="grid px-3 py-2.5 border-b border-slate-50 last:border-0 hover:bg-orange-50/30 transition-colors items-center"
              style={{ gridTemplateColumns: '28px 1fr 100px 70px 60px 55px' }}
            >
              <div className="flex items-center">
                <div className="w-7 h-4 bg-green-400 rounded-full flex items-center justify-end pr-0.5">
                  <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <span className="text-[10px] font-semibold text-slate-700 truncate pr-2">{row.campaign}</span>
              <span className="text-[9px] text-slate-400 truncate">{row.subid}</span>
              <span className="text-[10px] text-slate-600 font-medium">{row.gastos}</span>
              <span className="text-[10px] text-slate-600 font-medium">{row.vendas}</span>
              <span className={`text-[10px] font-black ${row.good ? 'text-green-600' : 'text-red-500'}`}>
                {row.roas}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MetaAdsSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#102A56', paddingTop: '100px', paddingBottom: '100px' }}
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1054px] mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/20 mb-6">
              <Target size={12} className="text-orange-400" />
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">Meta Ads Integrado</span>
            </div>

            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-[1.08] mb-5">
              Veja seu ROI real,
              <br />
              <span className="text-orange-400">campanha por campanha</span>
            </h2>

            <p className="text-[15px] text-white/60 leading-relaxed mb-8">
              Pare de calcular ROI no papel. O AfiliadoDash cruza automaticamente seu investimento no Meta Ads com as comissões da Shopee e entrega o lucro real por campanha, em tempo real.
            </p>

            <ul className="space-y-4">
              {[
                { icon: TrendingUp, text: 'Investimento, gastos, ROAS e lucro por campanha num só lugar' },
                { icon: BarChart3, text: 'Compare múltiplas campanhas e identifique as vencedoras' },
                { icon: DollarSign, text: 'Lucro líquido automático: comissão menos custo de Ads' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/15 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={13} className="text-orange-400" />
                  </div>
                  <span className="text-[14px] text-white/70 leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — mockup */}
          <div>
            <MetaAdsMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaAdsSection;
