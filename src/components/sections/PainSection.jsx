import React from 'react';
import { Clock, Target, TrendingUp, AlertCircle } from 'lucide-react';

const PainSection = () => {
    return (
        <section className="py-24 bg-neutral-lightGray relative border-t border-neutral-warmBeige">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkCharcoal mb-6 leading-tight font-display">
                            O "Painel Grátis" da Shopee custa <span className="text-red-600">caro</span> para o seu bolso.
                        </h2>
                        <p className="text-neutral-charcoal mb-8 text-lg">
                            A maioria dos afiliados opera no escuro. Sem dados históricos e sem detalhamento de origem, você está essencialmente apostando, não investindo.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <Clock className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-neutral-darkCharcoal font-bold text-lg">Dados Expiram Rápido</h4>
                                    <p className="text-neutral-mediumGray text-sm mt-1">
                                        Tente ver quanto você vendeu no mesmo mês do ano passado. Impossível no painel nativo. Nós guardamos seu histórico para sempre.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <Target className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-neutral-darkCharcoal font-bold text-lg">Origem Desconhecida</h4>
                                    <p className="text-neutral-mediumGray text-sm mt-1">
                                        "Vendi 10 produtos hoje". Ótimo, mas veio do Instagram, do grupo de WhatsApp ou do anúncio pago? Sem saber a origem (SubID), você não escala.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <TrendingUp className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-neutral-darkCharcoal font-bold text-lg">Sem Cálculo de ROI</h4>
                                    <p className="text-neutral-mediumGray text-sm mt-1">
                                        Faturar R$ 1.000 gastando R$ 1.200 não é negócio. Nosso sistema foca no que importa: Lucro Líquido no bolso.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual de "Cegueira de Dados" - Adapted for Light Mode */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/5 blur-[80px] rounded-full" />
                        <div className="relative bg-white border border-red-100 rounded-2xl p-8 space-y-4 shadow-soft-xl opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center justify-between border-b border-red-50 pb-4">
                                <span className="text-red-500 font-mono font-bold tracking-tight bg-red-50 px-2 py-1 rounded">⚠️ Status: CEGUEIRA DE DADOS</span>
                                <AlertCircle className="text-red-500" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-3 bg-neutral-lightGray rounded w-full animate-pulse"></div>
                                <div className="h-3 bg-neutral-lightGray rounded w-3/4 animate-pulse"></div>
                                <div className="h-3 bg-neutral-lightGray rounded w-5/6 animate-pulse"></div>
                            </div>
                            <div className="p-4 bg-red-50 rounded-lg border border-red-100 mt-4">
                                <p className="text-red-600 text-sm font-mono font-medium">Erro: Impossível determinar ROI da Campanha #04. Origem do tráfego desconhecida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainSection;
