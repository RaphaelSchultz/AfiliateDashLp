import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton';
import DashboardPreview from './DashboardPreview';

const Hero = ({ scrollToOffer }) => {
    return (
        <section className="relative pt-32 pb-12 px-6 bg-neutral-cream dark:bg-slate-900 overflow-hidden transition-colors duration-300">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[20%] w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-50 mix-blend-multiply filter" />
                <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply filter" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">

                {/* Eyebrow Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/30 border border-orange-100 dark:border-orange-800 text-primary dark:text-orange-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Plataforma de Alta Performance
                </div>

                {/* Headline - Centered */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-neutral-darkCharcoal dark:text-white tracking-tight mb-8 max-w-5xl font-medium">
                    Domine seus <span className="font-semibold text-gray-900 dark:text-gray-100">Números</span> e <br className="hidden md:block" />
                    <span className="font-semibold text-orange-600">Escalabilidade Real.</span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-charcoal/80 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl font-normal mx-auto">
                    Deixe de lado o "feeling" e as planilhas manuais. O <strong className="text-neutral-darkCharcoal dark:text-white font-semibold">Afiliate Dash</strong> entrega rastreamento granular de SubIDs, análise de latência e ROI verdadeiro para afiliados profissionais.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-16">
                    <PrimaryButton onClick={scrollToOffer} className="w-auto shadow-orange-glow" pulsing={true}>
                        Garantir meu acesso
                    </PrimaryButton>
                    <SecondaryButton onClick={scrollToOffer} className="w-auto text-base px-10">
                        Ver Planos
                    </SecondaryButton>
                </div>

                {/* Dashboard Preview - Centered and Large */}
                <div id="dashboard-preview" className="w-full max-w-5xl relative perspective-1000 mx-auto">
                    {/* Decorative Elements behind image */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-radial from-orange-500/10 to-transparent blur-3xl pointer-events-none" />

                    <div className="relative transform hover:scale-[1.01] transition-transform duration-700 ease-out">
                        <DashboardPreview />
                    </div>
                </div>

                {/* Trust Signals - Centered Below Image */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-mediumGray dark:text-gray-400">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=e5e7eb`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <p>Junte-se a <strong className="text-neutral-darkCharcoal dark:text-white">afiliados que dominam seus números</strong>.</p>
                    </div>

                    <button
                        onClick={scrollToOffer}
                        style={{ borderRadius: '12px' }}
                        className="group relative overflow-hidden px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:scale-105 flex items-center gap-2 animate-glowPulse"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

                        <Zap className="w-3 h-3 fill-white z-20" />
                        <span className="z-20">Garantir meu acesso</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
