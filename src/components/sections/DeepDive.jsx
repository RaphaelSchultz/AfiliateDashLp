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
        <section id="detalhes" className="py-24 bg-neutral-cream border-y border-neutral-warmBeige">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Mockup Gerenciador de Links */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -inset-4 bg-orange-600/10 blur-3xl -z-10 rounded-full opacity-60"></div>
                        <div className="bg-white border border-neutral-warmBeige rounded-xl overflow-hidden shadow-soft-xl relative">
                            {/* Badge Flutuante */}
                            <div className="absolute top-4 right-4 bg-orange-600 text-white font-bold text-xs px-3 py-1 rounded-full z-10 flex items-center gap-1 shadow-sm">
                                <RefreshCw size={10} className="animate-spin-slow" /> Link Ativo
                            </div>

                            <div className="bg-neutral-lightGray px-4 py-3 border-b border-neutral-warmBeige flex items-center justify-between">
                                <span className="text-sm font-medium text-neutral-darkCharcoal">Gerenciador de Links</span>
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 bg-red-400/80 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-yellow-400/80 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-green-400/80 rounded-full"></div>
                                </div>
                            </div>
                            <div className="p-6 space-y-3 bg-white">
                                {/* Simulated Link List - Light Mode */}
                                {[
                                    { name: "Promoção Relâmpago", clicks: "1.240", cr: "4.2%", roi: "+R$ 450", active: true },
                                    { name: "Anúncio Reels #03", clicks: "856", cr: "3.8%", roi: "+R$ 210", active: true },
                                    { name: "Link Bio Instagram", clicks: "3.400", cr: "1.5%", roi: "+R$ 120", active: true },
                                ].map((link, i) => (
                                    <div key={i} className="bg-neutral-lightGray/50 p-3 rounded-lg border border-transparent hover:border-orange-200 hover:bg-orange-50/30 flex items-center justify-between group transition-all">
                                        <div>
                                            <div className="text-sm text-neutral-darkCharcoal font-semibold flex items-center gap-2">
                                                <LinkIcon size={14} className="text-orange-500" />
                                                {link.name}
                                            </div>
                                            <div className="text-[11px] text-neutral-mediumGray mt-1 flex gap-3 font-medium">
                                                <span>{link.clicks} Cliques</span>
                                                <span>CR: <span className="text-green-600">{link.cr}</span></span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-md mb-1">{link.roi}</div>
                                            <button className="text-[10px] text-neutral-mediumGray hover:text-primary mt-0.5 flex items-center gap-1 ml-auto font-medium transition-colors">
                                                <Edit3 size={10} /> Editar
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-xs text-blue-700 flex gap-2">
                                    <AlertCircle size={14} className="shrink-0 mt-0.5 text-blue-500" />
                                    <span>Did you know? You can change destinations without changing privacy link.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side (Light Mode) */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block text-primary font-bold tracking-wider uppercase text-xs mb-4 bg-orange-50 px-2 py-1 rounded border border-orange-100">
                            Gestão Inteligente
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkCharcoal mb-6 font-display">
                            Transforme seus Links em uma <br />
                            <span className="text-primary">Máquina de Resultados.</span>
                        </h2>
                        <p className="text-neutral-charcoal text-lg leading-relaxed mb-8">
                            Chega de depender de métricas atrasadas. Tenha clareza total da origem dos seus cliques e saiba exatamente qual link está trazendo mais ROI para o seu bolso.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 shadow-sm">
                                    <RefreshCw className="text-orange-600" size={24} />
                                </div>
                                <div>
                                    <strong className="text-neutral-darkCharcoal block text-lg mb-1 font-bold">Links Sempre Ativos</strong>
                                    <span className="text-neutral-charcoal text-sm leading-relaxed">
                                        Redirecione seus links com inteligência. O produto esgotou? Mude o link de destino instantaneamente sem pausar campanhas que já estão lucrando.
                                    </span>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                                    <Zap className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <strong className="text-neutral-darkCharcoal block text-lg mb-1 font-bold">Fim do "Delay" da Shopee</strong>
                                    <span className="text-neutral-charcoal text-sm leading-relaxed">
                                        Pare de voar às cegas esperando o painel oficial atualizar. Tenha dados imediatos de cliques e comissões para tomar decisões rápidas.
                                    </span>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0 shadow-sm">
                                    <TrendingUp className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <strong className="text-neutral-darkCharcoal block text-lg mb-1 font-bold">Escalabilidade Segura</strong>
                                    <span className="text-neutral-charcoal text-sm leading-relaxed">
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
