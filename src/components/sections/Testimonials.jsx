import React from 'react';
import { Star, Users } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos M.',
    role: 'Afiliado Shopee · +R$50k/mês',
    avatar: 'CM',
    stars: 5,
    text: 'Antes eu ficava no escuro sobre qual campanha estava funcionando. Com o AfiliadoDash eu cortei 30% dos gastos em Meta Ads e aumentei meu lucro líquido em quase o dobro.',
    highlight: 'dobrei o lucro líquido',
  },
  {
    name: 'Amanda R.',
    role: 'Super Afiliada · WhatsApp Groups',
    avatar: 'AR',
    stars: 5,
    text: 'A automação dos grupos de WhatsApp é incrível. Antes eu mandava tudo na mão. Agora tenho 30+ grupos no automático e minhas vendas subiram 3x em dois meses.',
    highlight: 'vendas subiram 3x',
  },
  {
    name: 'Diego F.',
    role: 'Gestor de Tráfego Afiliado',
    avatar: 'DF',
    stars: 5,
    text: 'O rastreamento de SubIDs mudou completamente minha estratégia. Consigo saber exatamente qual SubID converte mais e otimizar o orçamento com precisão cirúrgica.',
    highlight: 'precisão cirúrgica',
  },
  {
    name: 'Juliana K.',
    role: 'Afiliada Full-time',
    avatar: 'JK',
    stars: 5,
    text: 'Finalmente um painel que mostra meus dados ANTES da Shopee. Isso me deu agilidade para pausar campanhas ruins no mesmo dia, economizando centenas de reais.',
    highlight: 'dados antes da Shopee',
  },
  {
    name: 'Rodrigo S.',
    role: 'Empreendedor Digital',
    avatar: 'RS',
    stars: 5,
    text: 'O relatório de Meta Ads integrado é o que eu precisava. Ver ROAS e lucro real por campanha em um só lugar é um game changer. Fechei o mês positivo pela primeira vez.',
    highlight: 'fechei o mês positivo',
  },
  {
    name: 'Priscila O.',
    role: 'Influenciadora Afiliada',
    avatar: 'PO',
    stars: 5,
    text: 'Me surpreendeu a facilidade de uso. Em menos de 10 minutos já estava com tudo configurado e vendo meus dados organizados. Suporte é excelente também!',
    highlight: 'menos de 10 minutos',
  },
];

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={14} className="text-orange-400 fill-orange-400" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-pill mx-auto mb-6">
            <Users size={12} className="text-slate-500" />
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Afiliados que{' '}
            <span className="gradient-text">já dominam</span>
            {' '}seus números
          </h2>
        </div>

        {/* Stats global bar */}
        <div className="bg-stats-gradient border border-orange-100 rounded-[1.5rem] px-8 py-6 grid grid-cols-3 gap-6 text-center max-w-3xl mx-auto mb-14">
          {[
            { value: '4.9/5', label: 'Avaliação média' },
            { value: '10.000+', label: 'Afiliados ativos' },
            { value: '98%', label: 'Taxa de satisfação' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-black text-orange-500 leading-none">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <StarRating count={t.stars} />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                "{t.text.replace(t.highlight, '')}
                <strong className="text-slate-900 font-bold">{t.highlight}</strong>
                {t.text.split(t.highlight)[1]}"
              </p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-xs font-black text-orange-600">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
