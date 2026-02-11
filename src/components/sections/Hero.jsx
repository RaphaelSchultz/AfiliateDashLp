import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton';
import DashboardPreview from './DashboardPreview';

const Hero = ({ scrollToOffer }) => {
    return (
        <section className="relative pt-28 sm:pt-32 pb-12 px-4 sm:px-6 bg-neutral-cream dark:bg-slate-900 overflow-hidden transition-colors duration-300">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[20%] w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/20 rounded-full blur-2xl opacity-50" />
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display text-neutral-darkCharcoal dark:text-white tracking-tight mb-6 sm:mb-8 max-w-5xl font-medium">
                    Domine seus <span className="font-semibold text-gray-900 dark:text-gray-100">Números</span> e <br className="hidden md:block" />
                    <span className="font-semibold text-orange-600">Escalabilidade Real.</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-neutral-charcoal/80 dark:text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-2xl font-normal mx-auto">
                    Deixe de lado o "feeling" e as planilhas manuais. O <strong className="text-neutral-darkCharcoal dark:text-white font-semibold">Afiliado Dash</strong> entrega rastreamento granular de SubIDs, análise de latência e ROI verdadeiro para afiliados profissionais.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-16">
                    <PrimaryButton onClick={scrollToOffer} className="w-auto shadow-orange-glow" pulsing={true}>
                        Garantir meu acesso
                    </PrimaryButton>
                    <SecondaryButton onClick={scrollToOffer} className="hidden sm:inline-flex w-auto text-base px-10">
                        Ver Planos
                    </SecondaryButton>
                </div>

                {/* Dashboard Preview - Centered and Large */}
                <div id="dashboard-preview" className="w-full max-w-5xl relative perspective-1000 mx-auto">
                    {/* Decorative Elements behind image */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-b from-orange-500/10 to-transparent blur-2xl pointer-events-none" />

                    <div className="relative transform hover:scale-[1.01] transition-transform duration-700 ease-out">
                        <DashboardPreview />
                    </div>
                </div>

                {/* Trust Signals - Centered Below Image */}
                <div className="mt-8 sm:mt-12 flex items-center justify-center gap-3 text-xs sm:text-sm text-neutral-mediumGray dark:text-gray-400">
                    <div className="flex -space-x-3">
                        {['R', 'A', 'M'].map((letter, i) => (
                            <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white dark:border-slate-800 bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-xs font-bold text-orange-600 dark:text-orange-400">
                                {letter}
                            </div>
                        ))}
                    </div>
                    <p>Junte-se a <strong className="text-neutral-darkCharcoal dark:text-white">afiliados que dominam seus números</strong>.</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
