import React from 'react';
import { Check, ExternalLink, X } from 'lucide-react';

const PricingCard = ({
  name,
  price,
  billingLabel,
  features = [],
  notes = [],
  ctaLabel,
  ctaHref,
}) => {
  return (
    <article
      className="h-full flex flex-col rounded-[18px] border border-white/10 bg-[#243447] p-4 md:p-5"
      style={{ boxShadow: '0 8px 24px rgba(2, 6, 23, 0.18)' }}
    >
      <header className="mb-5">
        <p className="text-[15px] leading-none font-medium tracking-wide text-white/65 uppercase">{name}</p>
        <h3 className="text-[46px] leading-none font-semibold text-white mt-1">{price}</h3>
        <p className="text-[13px] text-white/70 mt-1">{billingLabel}</p>
      </header>

      <ul className="space-y-2 flex-1">
        {features.map((feature) => {
          const included = feature.included !== false;

          return (
            <li key={feature.text} className="flex items-start gap-2.5 text-[14px] leading-[1.35]">
              <span
                className={`shrink-0 mt-[1px] inline-flex items-center justify-center w-5 h-5 rounded-full ${
                  included ? 'bg-orange-500/90' : 'bg-red-500/60'
                }`}
              >
                {included ? (
                  <Check size={12} className="text-white" />
                ) : (
                  <X size={12} className="text-white/90" />
                )}
              </span>
              <span className={included ? 'text-white/85' : 'text-white/40 line-through'}>{feature.text}</span>
            </li>
          );
        })}
      </ul>

      <div className="mt-5">
        {notes.length > 0 && (
          <div className="mb-3 space-y-1 min-h-[38px]">
            {notes.map((note) => (
              <p key={note} className="text-[12px] leading-tight text-white/60">{note}</p>
            ))}
          </div>
        )}

        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:brightness-110"
          style={{
            background: 'linear-gradient(90deg, #f97316 0%, #ea580c 100%)',
          }}
        >
          {ctaLabel}
          <ExternalLink size={15} className="opacity-80" />
        </a>
      </div>
    </article>
  );
};

export default PricingCard;
