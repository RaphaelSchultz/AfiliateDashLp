import React from 'react';
import { Check } from 'lucide-react';

/**
 * PricingCard — módulo reutilizável de card de plano.
 *
 * Props:
 *   badge        { text, color }   — badge no topo ('orange' | 'purple')
 *   guarantee    string            — pequena tag de garantia (ex: '7 Dias de Garantia')
 *   icon         ReactComponent    — ícone lucide-react
 *   iconBg       string            — classe Tailwind de bg do ícone (ex: 'bg-orange-500')
 *   iconColor    string            — classe de cor do ícone (ex: 'text-white')
 *   name         string            — nome do plano
 *   description  string            — subtítulo do plano
 *   price        string            — texto do preço (ex: 'Grátis' ou 'R$ 47,90')
 *   priceSuffix  string            — sufixo (ex: '/mês', deixar '' para Grátis)
 *   priceColor   string            — classe de cor do preço (ex: 'text-green-500')
 *   features     string[]          — lista de funcionalidades
 *   ctaLabel     string            — texto do botão
 *   ctaHref      string            — URL do botão
 *   ctaVariant   'orange'|'outline'|'dark' — estilo do botão
 *   featured     bool              — destaque visual (borda laranja, tamanho levemente maior)
 */
const PricingCard = ({
  badge,
  guarantee,
  icon: Icon,
  iconBg = 'bg-slate-100',
  iconColor = 'text-slate-500',
  name,
  description,
  price,
  priceSuffix = '',
  priceColor = 'text-[#1D2939]',
  features = [],
  ctaLabel,
  ctaHref,
  ctaVariant = 'outline',
  featured = false,
}) => {
  const badgeColors = {
    orange: 'bg-orange-500 text-white',
    purple: 'bg-[#EDE9FE] text-[#6D28D9]',
  };

  const buttonStyles = {
    orange:
      'bg-orange-500 hover:bg-orange-600 text-white shadow-[0_6px_18px_rgba(249,115,22,0.30)]',
    outline:
      'bg-white border-2 border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-500',
    dark:
      'bg-white border-2 border-slate-800 text-slate-800 hover:border-slate-600 hover:text-slate-600',
  };

  return (
    <div
      className={`relative bg-white rounded-2xl flex flex-col ${
        featured
          ? 'border-2 border-orange-500 shadow-[0_0_0_1px_rgba(249,115,22,0.15),0_24px_60px_rgba(249,115,22,0.12)]'
          : 'border border-slate-200 shadow-[0_4px_32px_rgba(0,0,0,0.07)]'
      }`}
    >
      {/* Badge topo */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className={`px-4 py-1 text-[11px] font-bold rounded-[8px] whitespace-nowrap ${badgeColors[badge.color] ?? badgeColors.orange}`}>
            {badge.text}
          </span>
          {guarantee && (
            <span className="px-3 py-1 text-[10px] font-semibold rounded-[8px] bg-orange-50 border border-orange-200 text-orange-600 whitespace-nowrap">
              {guarantee}
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Ícone */}
        <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4 ${badge ? 'mt-3' : ''}`}>
          {Icon && <Icon size={22} className={iconColor} />}
        </div>

        {/* Nome + descrição */}
        <div className="mb-1 text-[18px] font-bold text-[#1D2939]">{name}</div>
        <p className="text-[13px] text-[#667085] mb-5 leading-snug">{description}</p>

        {/* Preço */}
        <div className="flex items-baseline gap-1 mb-5">
          <span className={`text-[36px] font-black leading-none ${priceColor}`}>{price}</span>
          {priceSuffix && (
            <span className="text-[13px] text-[#667085] font-medium">{priceSuffix}</span>
          )}
        </div>

        <div className="h-px bg-slate-100 mb-5" />

        {/* Features */}
        <ul className="space-y-3 mb-7 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${featured ? 'bg-orange-100' : 'bg-slate-100'}`}>
                <Check size={9} className={featured ? 'text-orange-500' : 'text-slate-500'} />
              </div>
              <span className="text-[13px] text-[#475467] leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        {/* Botão */}
        <a
          href={ctaHref}
          className={`block w-full text-center py-3 text-[13px] font-bold tracking-wide rounded-[10px] transition-all duration-200 ${buttonStyles[ctaVariant]}`}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
