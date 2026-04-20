import React from 'react';
import { TrendingUp, DollarSign, BarChart3, Zap, Target, Clock } from 'lucide-react';

/* Full-width dashboard screenshot mockup */
const FullDashboard = () => (
  <div className="w-full bg-[#f0f2f5] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-slate-200/60 overflow-hidden">
    {/* Window bar */}
    <div className="bg-white px-4 py-2 flex items-center gap-2 border-b border-slate-100">
      <div className="w-3 h-3 rounded-full bg-red-400" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-400" />
      <div className="flex-1 mx-4">
        <div className="mx-auto w-fit px-4 py-0.5 bg-slate-50 border border-slate-200 rounded-full text-[10px] text-slate-400 font-medium">
          app.afiliadodash.com/dashboard
        </div>
      </div>
    </div>

    {/* App layout */}
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[160px] bg-white border-r border-slate-100 py-4 shrink-0">
        <div className="px-4 mb-4">
          <span className="text-[12px] font-black text-slate-800">Afiliado<span className="text-orange-500">Dash</span></span>
        </div>
        {[
          { label: 'Dashboard', active: true },
          { label: 'Análise do Dia', active: false },
          { label: 'Análise Cliques', active: false },
          { label: 'Meta Ads', active: false },
          { label: 'Meus Grupos', active: false },
          { label: 'Ger. de Links', active: false },
          { label: 'Upload', active: false },
        ].map((item) => (
          <div
            key={item.label}
            className={`mx-2 px-3 py-2 rounded-lg text-[10px] font-semibold mb-0.5 ${
              item.active ? 'bg-orange-500 text-white' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-5">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[14px] font-black text-slate-800">Dashboard</span>
            <div className="flex gap-2 mt-1">
              <span className="px-2 py-0.5 bg-orange-500 text-white text-[9px] font-bold rounded-full">Primeiros Passos</span>
              <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[9px] font-semibold rounded-full">Meta V1</span>
              <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-semibold rounded-full">Meta V2</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-[10px] text-slate-500 font-medium">
            Ontem
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-5 gap-3 mb-4">
          {[
            { label: 'Vendas Totais', value: 'R$ 52.671', delta: '▼ 6.3%', down: true, sub: 'Anterior: R$ 56.217' },
            { label: 'Pedidos', value: '875', delta: '▼ 18.0%', down: true, sub: 'Itens: 994' },
            { label: 'Comissão Liq.', value: 'R$ 2.384', delta: '▲ 1.7%', down: false, sub: 'Anterior: R$ 2.345' },
            { label: 'Ticket Médio', value: 'R$ 60,20', delta: '▲ 14.3%', down: false, sub: 'Anterior: R$ 52,69' },
            { label: 'A Validar', value: 'R$ 46.994', delta: '', down: false, sub: 'Val.: R$ 68.150' },
          ].map((m, i) => (
            <div key={i} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
              <div className="text-[8px] font-semibold text-slate-400 mb-1">{m.label}</div>
              <div className="text-[12px] font-black text-slate-900 mb-0.5">{m.value}</div>
              {m.delta && (
                <div className={`text-[8px] font-bold ${m.down ? 'text-red-500' : 'text-green-500'}`}>{m.delta}</div>
              )}
              <div className="text-[7px] text-slate-400 mt-0.5">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* 3-col grid: 3 subid charts */}
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              title: 'TOP SUBID 1',
              color: 'bg-green-500',
              rows: [
                { label: 'gerenciador', pct: 80 },
                { label: 'turbinar', pct: 56 },
                { label: 'afiliipro', pct: 22 },
                { label: 'feed', pct: 18 },
              ],
            },
            {
              title: 'TOP SUBID 2',
              color: 'bg-orange-400',
              rows: [
                { label: 'Sem SubID', pct: 90 },
                { label: 'mantasofa', pct: 84 },
                { label: 'miniimpressora', pct: 60 },
                { label: 'calcaskinny2', pct: 58 },
              ],
            },
            {
              title: 'TOP SUBID 3',
              color: 'bg-purple-400',
              rows: [
                { label: 'Sem SubID', pct: 90 },
                { label: 'cp2', pct: 35 },
                { label: 'cp1nova', pct: 28 },
                { label: 'cp3', pct: 18 },
              ],
            },
          ].map((chart, ci) => (
            <div key={ci} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
              <div className="text-[8px] font-bold text-slate-500 uppercase mb-2">{chart.title} (Comissão)</div>
              <div className="space-y-1.5">
                {chart.rows.map((row) => (
                  <div key={row.label} className="flex items-center gap-1.5">
                    <span className="text-[7px] text-slate-500 w-16 shrink-0 truncate">{row.label}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${chart.color} rounded-full`} style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const KnowSection = () => {
  return (
    <section className="bg-white" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
      <div className="max-w-[1054px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[45px] font-semibold text-[#1D2939] leading-[1.1] mb-4">
            Conheça o <span className="text-orange-500">AfiliadoDash</span>
          </h2>
          <p className="text-[16px] text-[#7A7A7A] max-w-[560px] mx-auto leading-relaxed">
            Um painel completo para afiliados Shopee profissionais. Veja seus dados reais antes do painel oficial, rastreie cada SubID e escale com segurança.
          </p>
        </div>

        {/* Full dashboard mockup */}
        <FullDashboard />

        {/* 3 stat highlights below */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          {[
            { icon: Clock, iconColor: 'text-orange-500', iconBg: 'bg-orange-50', title: 'Dados em tempo real', desc: 'Visualize comissões e conversões antes do painel oficial da Shopee atualizar.' },
            { icon: Target, iconColor: 'text-blue-500', iconBg: 'bg-blue-50', title: 'SubIDs granulares', desc: 'Saiba exatamente de qual canal ou campanha veio cada venda com rastreamento completo.' },
            { icon: TrendingUp, iconColor: 'text-green-500', iconBg: 'bg-green-50', title: 'Lucro líquido real', desc: 'Cruze investimento em Ads com comissões e descubra seu ROI verdadeiro por campanha.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                <item.icon size={18} className={item.iconColor} />
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-[#1D2939] mb-1">{item.title}</h4>
                <p className="text-[13px] text-[#7A7A7A] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowSection;
