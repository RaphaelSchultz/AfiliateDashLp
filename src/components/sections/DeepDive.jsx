import React from 'react';
import {
    RefreshCw,
    Link as LinkIcon,
    Edit3,
    AlertCircle,
    Zap,
    TrendingUp
} from 'lucide-react';

const DeepDive = () => {
    return (
        <section id="detalhes" className="py-24 bg-[#080c17] border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Mockup Gerenciador de Links */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -inset-4 bg-orange-600/20 blur-3xl -z-10 rounded-full opacity-40"></div>
                        <div className="bg-[#111827] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative">
                            {/* Badge Flutuante */}
                            <div className="absolute top-4 right-4 bg-orange-600 text-white font-bold text-xs px-3 py-1 rounded-full z-10 flex items-center gap-1">
                                <RefreshCw size={10} className="animate-spin-slow" /> Link Ativo
                            </div>

                            <div className="bg-[#1f2937] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-200">Gerenciador de Links</span>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                {/* Simulated Link List */}
                                {[
                                    { name: "Promoção Relâmpago", clicks: "1.240", cr: "4.2%", roi: "+R$ 450", active: true },
                                    { name: "Anúncio Reels #03", clicks: "856", cr: "3.8%", roi: "+R$ 210", active: true },
                                    { name: "Link Bio Instagram", clicks: "3.400", cr: "1.5%", roi: "+R$ 120", active: true },
                                ].map((link, i) => (
                                    <div key={i} className="bg-[#0b1121] p-3 rounded border border-white/5 flex items-center justify-between group hover:border-orange-500/30 transition-colors">
                                        <div>
                                            <div className="text-sm text-gray-200 font-medium flex items-center gap-2">
                                                <LinkIcon size={12} className="text-orange-500" />
                                                {link.name}
                                            </div>
                                            <div className="text-[10px] text-gray-500 mt-1 flex gap-3">
                                                <span>{link.clicks} Cliques</span>
                                                <span>CR: <span className="text-green-400">{link.cr}</span></span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">{link.roi}</div>
                                            <button className="text-[10px] text-gray-500 hover:text-white mt-1 flex items-center gap-1 ml-auto">
                                                <Edit3 size={8} /> Editar Destino
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-300 flex gap-2">
                                    <AlertCircle size={14} className="shrink-0 mt-0.5" />
                                    <span>Dica: Você pode alterar o destino do "Link Bio Instagram" a qualquer momento sem precisar trocar o link na bio.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side (UPDATED COPY) */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4">Gestão Inteligente de Links</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Transforme seus Links em uma <br />
                            <span className="text-orange-500">Máquina de Resultados.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Chega de depender de métricas atrasadas. Tenha clareza total da origem dos seus cliques e saiba exatamente qual link está trazendo mais ROI para o seu bolso.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                                    <RefreshCw className="text-orange-500" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">Links Sempre Ativos</strong>
                                    <span className="text-gray-500 text-sm leading-relaxed">
                                        Redirecione seus links com inteligência. O produto esgotou? Mude o link de destino instantaneamente sem pausar campanhas que já estão lucrando.
                                    </span>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Zap className="text-blue-500" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">Fim do "Delay" da Shopee</strong>
                                    <span className="text-gray-500 text-sm leading-relaxed">
                                        Pare de voar às cegas esperando o painel oficial atualizar. Tenha dados imediatos de cliques e comissões para tomar decisões rápidas.
                                    </span>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                    <TrendingUp className="text-green-500" size={20} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg mb-1">Escalabilidade Segura</strong>
                                    <span className="text-gray-500 text-sm leading-relaxed">
                                        Acompanhe diariamente seus investimentos e retorno. Escale apenas o que dá lucro com clareza absoluta sobre o desempenho financeiro.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeepDive;
