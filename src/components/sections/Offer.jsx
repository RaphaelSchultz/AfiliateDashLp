import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const Offer = () => {
    return (
        <section id="oferta" className="py-24 px-6 relative bg-neutral-cream">
            {/* Glow Behind Offer - Warmer for Light Mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-gradient-to-r from-orange-200/40 via-red-200/40 to-orange-200/40 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-lg mx-auto relative z-10">
                <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                    {/* Border Effect - Subtle Orange Gradient */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-2xl opacity-30 blur-sm"></div>

                    <div className="relative bg-white rounded-2xl p-8 md:p-12 border border-neutral-warmBeige shadow-2xl">

                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30">
                                Condição Exclusiva de Fundador
                            </span>
                        </div>

                        <div className="text-center mb-8 mt-6">
                            <h3 className="text-2xl font-bold text-neutral-darkCharcoal mb-2 font-display">MEMBRO FUNDADOR</h3>
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <span className="text-neutral-mediumGray text-lg line-through decoration-red-400 decoration-2">De R$ 147,90/mês</span>
                            </div>
                            <div className="text-5xl md:text-6xl font-black text-neutral-darkCharcoal mb-2 tracking-tight">
                                R$ 97,00<span className="text-lg font-medium text-neutral-charcoal">/mês</span>
                            </div>
                            <p className="text-orange-600 text-sm font-bold bg-orange-50 inline-block px-3 py-1 rounded-full">Preço travado para sempre. Cancele quando quiser.</p>
                        </div>

                        <div className="space-y-4 mb-10 border-t border-b border-neutral-lightGray py-6">
                            {[
                                "Acesso Completo ao Dashboard",
                                "Gerador de Links Ilimitado",
                                "Rastreamento de SubIDs",
                                "Retenção de Dados Vitalícia",
                                "Análise de Performance de Cliques",
                                "Gestão de Links Centralizada"
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                                    <span className="text-neutral-charcoal text-sm font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <PrimaryButton className="w-full text-lg py-5 mb-4 shadow-orange-glow" onClick={() => alert("Redirecionando para o Checkout...")}>
                            GARANTIR MINHA VAGA AGORA
                        </PrimaryButton>

                        <p className="text-center text-xs text-neutral-mediumGray leading-relaxed">
                            <span className="text-red-500 font-bold">Nota:</span> Esta condição especial é válida por tempo limitado. O valor pode ser alterado a qualquer momento sem aviso prévio.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
