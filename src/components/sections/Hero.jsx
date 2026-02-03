import React from 'react';
import { ArrowRight } from 'lucide-react';
import GradientText from '../ui/GradientText';
import PrimaryButton from '../ui/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton';
import DashboardPreview from './DashboardPreview';

const Hero = ({ scrollToOffer }) => {
    return (
        <section className="relative pt-20 pb-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    Oferta de Lançamento Ativa
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
                    Domine seus Números e <br className="hidden md:block" />
                    <GradientText>Escalabilidade Real.</GradientText>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                    Deixe de lado o "feeling" e as planilhas manuais. O <strong className="text-gray-200 font-semibold">Afiliate Dash</strong> entrega rastreamento granular de SubIDs, análise de latência e ROI verdadeiro para afiliados profissionais.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
                    <PrimaryButton onClick={scrollToOffer} className="w-full md:w-auto text-lg px-12 py-5 shadow-orange-500/20" pulsing={true}>
                        QUERO ACESSO VITALÍCIO
                        <ArrowRight size={20} />
                    </PrimaryButton>
                    <SecondaryButton className="w-full md:w-auto py-5">
                        Ver Demonstração
                    </SecondaryButton>
                </div>

                <DashboardPreview />
            </div>
        </section>
    );
};

export default Hero;
