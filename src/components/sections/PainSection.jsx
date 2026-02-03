import React from 'react';
import { Clock, Target, TrendingUp, AlertCircle } from 'lucide-react';

const PainSection = () => {
    return (
        <section className="py-24 bg-[#080c17] relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            O "Painel Grátis" da Shopee custa caro para o seu bolso.
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            A maioria dos afiliados opera no escuro. Sem dados históricos e sem detalhamento de origem, você está essencialmente apostando, não investindo.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center shrink-0">
                                    <Clock className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Dados Expiram Rápido</h4>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Tente ver quanto você vendeu no mesmo mês do ano passado. Impossível no painel nativo. Nós guardamos seu histórico para sempre.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center shrink-0">
                                    <Target className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Origem Desconhecida</h4>
                                    <p className="text-gray-500 text-sm mt-1">
                                        "Vendi 10 produtos hoje". Ótimo, mas veio do Instagram, do grupo de WhatsApp ou do anúncio pago? Sem saber a origem (SubID), você não escala.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center shrink-0">
                                    <TrendingUp className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Sem Cálculo de ROI</h4>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Faturar R$ 1.000 gastando R$ 1.200 não é negócio. Nosso sistema foca no que importa: Lucro Líquido no bolso.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual de "Cegueira de Dados" */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-orange-500/10 blur-[80px] rounded-full" />
                        <div className="relative bg-[#111827] border border-red-500/20 rounded-2xl p-8 space-y-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <span className="text-red-400 font-mono">Status: CEGUEIRA DE DADOS</span>
                                <AlertCircle className="text-red-500" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-2 bg-white/10 rounded w-full"></div>
                                <div className="h-2 bg-white/10 rounded w-3/4"></div>
                                <div className="h-2 bg-white/10 rounded w-5/6"></div>
                            </div>
                            <div className="p-4 bg-red-900/10 rounded border border-red-900/20 mt-4">
                                <p className="text-red-300 text-sm font-mono">Erro: Impossível determinar ROI da Campanha #04. Origem do tráfego desconhecida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainSection;
