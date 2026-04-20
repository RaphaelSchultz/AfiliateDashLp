import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

const rotatingWords = ['SubIDs', 'Comissões', 'Campanhas', 'ROAS', 'Grupos'];

const integrations = [
  { src: '/images/shopee-logo.webp',    alt: 'Shopee'    },
  { src: '/images/meta-ads-logo.png',   alt: 'Meta Ads'  },
  { src: '/images/Instagram_logo.svg',  alt: 'Instagram' },
  { src: '/images/whatsapp_logo.webp',  alt: 'WhatsApp'  },
];

const RotatingWord = () => {
  const [index, setIndex] = useState(0);
  const [animClass, setAnimClass] = useState('word-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimClass('word-out');
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setAnimClass('word-in');
      }, 220);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: '185px' }}>
      <span key={rotatingWords[index]} className={`text-orange-500 ${animClass}`} style={{ display: 'inline-block' }}>
        {rotatingWords[index]}
      </span>
    </span>
  );
};

const Hero = ({ scrollToOffer }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#EDF2F7]"
      style={{ paddingTop: '140px', paddingBottom: '95px' }}
    >
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 90% at 100% 38%, #fff4e6 0%, #fff7ed 32%, #edf2f7 72%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[42%_58%] gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[10px] bg-orange-50 border border-orange-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-[10px] bg-orange-500 animate-pulse" />
              <span className="text-[12px] font-bold text-orange-600 uppercase tracking-wider">
                Com API Oficial Shopee
              </span>
            </div>

            <h1 className="text-[44px] sm:text-[51px] font-semibold text-[#1D2939] leading-[1.03] mb-6">
              Monitore seus{' '}
              <RotatingWord />
              <br />
              com clareza de receita
            </h1>

            <p className="text-[16px] text-[#667085] leading-[1.55] mb-8 max-w-[510px]">
              O AfiliadoDash centraliza Shopee, Meta Ads, WhatsApp e Instagram em uma visão única
              para você decidir rápido, cortar desperdício e escalar o que realmente dá lucro.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={scrollToOffer}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-[10px] shadow-[0_8px_24px_rgba(249,115,22,0.30)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Criar conta
                <ArrowRight size={16} />
              </button>
              <a
                href="https://app.afiliadodash.com/login"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-slate-700 border border-slate-300 rounded-[10px] hover:border-orange-300 hover:text-orange-500 transition-all duration-200"
              >
                Já tenho conta
              </a>
            </div>

            {/* Integration logos — staggered left-to-right entrance */}
            <div className="flex items-center gap-2.5 mb-8">
              <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap mr-1">
                Integra com
              </span>
              {integrations.map((logo, i) => (
                <div
                  key={logo.alt}
                  title={logo.alt}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center"
                  style={{
                    animation: 'logoFadeIn 0.45s ease both',
                    animationDelay: `${i * 180}ms`,
                    opacity: 0,
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <span className="text-[16px] font-black text-orange-500">R$2M+</span>
              <span className="text-[12px] text-slate-400 -ml-4">comissões rastreadas</span>
              <span className="text-[16px] font-black text-orange-500">4.9/5</span>
              <span className="text-[12px] text-slate-400 -ml-4">avaliação média</span>
            </div>
          </div>

          {/* ── Right: dashboard screenshot ── */}
          <div className="relative" style={{ paddingBottom: '8px', paddingRight: '16px' }}>

            {/* Main dashboard screenshot — floats gently */}
            <div className="animate-float relative z-10 rounded-[20px] overflow-hidden border border-white/70 bg-white shadow-[0_28px_90px_rgba(12,34,74,0.16)]">
              <img
                src="/images/afiliado-dash-sessao-1.png"
                alt="Dashboard do AfiliadoDash"
                className="w-full h-auto block"
                loading="eager"
              />

              {/* Frosted glass corner — small, covers just enough */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-[110px] h-[44px] bg-[#E7ECF3]/60 backdrop-blur-md rounded-tr-xl"
              />

              {/* Tiny metric card on top of the frosted corner */}
              <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-[10px] bg-green-400" />
                <span className="text-[9px] font-bold text-[#1D2939]">R$ 52.671</span>
                <span className="text-[8px] text-green-600 font-semibold">+14,3%</span>
              </div>
            </div>

            {/* Comissões card — floats top-right */}
            <div
              className="absolute z-20 bg-white rounded-2xl border border-slate-100 shadow-[0_14px_38px_rgba(0,0,0,0.12)] px-4 py-3 min-w-[190px]"
              style={{
                top: '10%',
                right: '-12px',
                animation: 'float 5s ease-in-out infinite 0.3s',
              }}
            >
              {/* Validadas */}
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={13} className="text-green-500" />
                </div>
                <div>
                  <div className="text-[9px] font-semibold text-slate-400 uppercase leading-none mb-0.5">
                    Comissões Validadas
                  </div>
                  <div className="text-[15px] font-black text-[#1D2939] leading-none">
                    R$ 18.785<span className="text-[11px] font-bold">,58</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 mb-2.5" />

              {/* A validar */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                  <Clock size={13} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-[9px] font-semibold text-slate-400 uppercase leading-none mb-0.5">
                    A Validar
                  </div>
                  <div className="text-[15px] font-black text-[#1D2939] leading-none">
                    R$ 3.842<span className="text-[11px] font-bold">,20</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bar chart card — floats bottom-right */}
            <div
              className="absolute z-20 bg-white rounded-2xl border border-slate-100 shadow-[0_14px_38px_rgba(0,0,0,0.12)] px-4 py-3 w-[178px]"
              style={{
                bottom: '14%',
                right: '-12px',
                animation: 'float 5.4s ease-in-out infinite 0.8s',
              }}
            >
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-2">
                Comissão por Dia
              </div>
              <div className="flex items-end gap-1 h-10">
                {[24, 38, 30, 44, 40, 52, 48, 58].map((height, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[#22c55e] to-[#4ade80]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-1.5 text-[11px] font-bold text-[#16A34A]">+ R$ 2.384 hoje</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
