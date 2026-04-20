import React from 'react';
import { MessageSquare, Users, Send, TrendingUp, Clock, Zap } from 'lucide-react';

/* WhatsApp groups mockup — based on screenshot 3 */
const GroupsMockup = () => (
  <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-slate-100 overflow-hidden">
    {/* Header */}
    <div className="px-5 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
      <div>
        <h3 className="text-[13px] font-black text-slate-800">Meus Grupos</h3>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[10px] text-slate-400 font-medium">WhatsApp Autenticado</span>
        </div>
      </div>
      <button className="px-3 py-1.5 bg-orange-500 text-white text-[10px] font-bold rounded-full">
        + Criar fila de envio
      </button>
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
      {[
        { label: 'Membros total', value: '13.700' },
        { label: 'Vendas atribuídas', value: '159' },
        { label: 'Envios registrados', value: '79.142' },
      ].map((s, i) => (
        <div key={i} className="px-4 py-3 text-center">
          <div className="text-[15px] font-black text-slate-900">{s.value}</div>
          <div className="text-[9px] text-slate-400 font-medium mt-0.5">{s.label}</div>
        </div>
      ))}
    </div>

    {/* Table */}
    <div className="px-4 py-3">
      <div className="grid grid-cols-5 gap-2 px-2 py-1.5 bg-slate-50 rounded-lg mb-2">
        {['Grupo', 'Membros', 'Envios', 'Vendas', 'Comissão'].map((h) => (
          <span key={h} className="text-[8px] font-bold text-slate-400 uppercase">{h}</span>
        ))}
      </div>

      {[
        { name: 'Grupo Afiliados #49', members: '0', sends: '4.098', sales: '14', commission: 'R$ 165,33' },
        { name: 'Grupo Afiliados #48', members: '0', sends: '4.098', sales: '19', commission: 'R$ 100,71' },
        { name: 'Grupo Afiliados #45', members: '0', sends: '4.098', sales: '13', commission: 'R$ 27,51' },
        { name: 'Grupo Afiliados #47', members: '0', sends: '4.098', sales: '18', commission: 'R$ 46,48' },
        { name: 'Grupo Afiliados #63', members: '0', sends: '4.096', sales: '3', commission: 'R$ 7,19' },
      ].map((row, i) => (
        <div key={i} className="grid grid-cols-5 gap-2 px-2 py-2 rounded-lg hover:bg-orange-50/40 transition-colors border-b border-slate-50 last:border-0">
          <span className="text-[10px] font-semibold text-slate-700 truncate">{row.name}</span>
          <span className="text-[10px] text-slate-500">{row.members}</span>
          <span className="text-[10px] text-slate-500">{row.sends}</span>
          <span className="text-[10px] font-semibold text-slate-700">{row.sales}</span>
          <span className="text-[10px] font-bold text-orange-500">{row.commission}</span>
        </div>
      ))}
    </div>

    {/* Send queue sidebar preview */}
    <div className="mx-4 mb-4 p-3 bg-orange-50 border border-orange-100 rounded-xl">
      <div className="text-[9px] font-bold text-orange-700 uppercase mb-2">Filas Ativas</div>
      <div className="space-y-1.5">
        {[
          { name: 'Abóbora #119', next: '18:15' },
          { name: 'Diogo #109', next: '18:15' },
        ].map((q, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-slate-700">{q.name}</span>
            <div className="flex items-center gap-1">
              <Clock size={9} className="text-orange-500" />
              <span className="text-[9px] text-orange-600 font-bold">próx. {q.next}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GroupsSection = () => {
  return (
    <section className="bg-white" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-[1054px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — mockup */}
          <div>
            <GroupsMockup />
          </div>

          {/* Right — text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
              <MessageSquare size={12} className="text-orange-500" />
              <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">Grupos de WhatsApp</span>
            </div>

            <h2 className="text-[42px] font-semibold text-[#1D2939] leading-[1.1] mb-5">
              Seus grupos no
              <br />
              <span className="text-orange-500">piloto automático</span>
            </h2>

            <p className="text-[15px] text-[#7A7A7A] leading-relaxed mb-8">
              Gerencie todos os seus grupos de WhatsApp em um só painel. Configure filas de envio automáticas por produto, horário e frequência — e rastreie cada venda gerada pelos grupos.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-8">
              {[
                { icon: Send, title: 'Envio automático', desc: 'Filas por produto e horário, sem precisar mexer no celular.' },
                { icon: Users, title: '13.700+ membros', desc: 'Gerencie entradas, saídas e performance de cada grupo.' },
                { icon: TrendingUp, title: 'Vendas por grupo', desc: 'SubID exclusivo por grupo para atribuição de comissões.' },
                { icon: Zap, title: 'Conexão WA nativa', desc: 'WhatsApp Web autenticado diretamente na plataforma.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    <item.icon size={14} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#1D2939] mb-0.5">{item.title}</div>
                    <div className="text-[12px] text-[#7A7A7A] leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupsSection;
