import React from 'react';
import {
    Clock,
    Filter,
    DollarSign,
    Zap,
    Smartphone,
    CheckCircle2
} from 'lucide-react';
import GradientText from '../ui/GradientText';
import GlassCard from '../ui/GlassCard';

const Features = () => {
    return (
        <section id="funcionalidades" className="py-24 px-6 relative bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                        Funcionalidades
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-darkCharcoal mb-6 font-display">
                        Ferramentas Profissionais para <br />
                        <span className="text-primary">Super Afiliados</span>
                    </h2>
                    <p className="text-neutral-mediumGray max-w-2xl mx-auto text-lg leading-relaxed">
                        Desenvolvemos cada funcionalidade baseada nas necessidades reais de quem investe pesado em tráfego e precisa de clareza.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 - Conversões Antecipadas */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-neutral-lightGray border-none rounded-2xl p-8 hover:shadow-soft-xl transition-all duration-300 group">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-darkCharcoal mb-3">Conversões Antes do Painel</h3>
                        <p className="text-neutral-charcoal text-sm leading-relaxed mb-6">
                            O painel oficial da Shopee demora para atualizar. Com nossa ferramenta, você visualiza suas conversões e comissões muito antes, permitindo ajustes rápidos.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-xs bg-white text-blue-600 px-3 py-1.5 rounded-lg border border-blue-100 font-medium shadow-sm">Sem Delay</span>
                            <span className="text-xs bg-white text-blue-600 px-3 py-1.5 rounded-lg border border-blue-100 font-medium shadow-sm">Dados Detalhados</span>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-neutral-lightGray border-none rounded-2xl p-8 hover:shadow-soft-xl transition-all duration-300 group">
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Filter size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-darkCharcoal mb-3">Rastreamento de SubIDs</h3>
                        <p className="text-neutral-charcoal text-sm leading-relaxed">
                            Crie links dinâmicos e saiba exatamente de onde veio a venda: <span className="text-orange-600 font-mono text-xs bg-orange-50 px-1 py-0.5 rounded">?subid=instagram</span>. Otimize o que converte, corte o que gasta.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-neutral-lightGray border-none rounded-2xl p-8 hover:shadow-soft-xl transition-all duration-300 group">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <DollarSign size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-darkCharcoal mb-3">Análise Financeira Real</h3>
                        <p className="text-neutral-charcoal text-sm leading-relaxed">
                            Painel financeiro completo com Ticket Médio, Comissão Líquida e volume de vendas. Visualize a saúde do seu negócio em uma única tela limpa.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-neutral-lightGray border-none rounded-2xl p-8 hover:shadow-soft-xl transition-all duration-300 group">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-darkCharcoal mb-3">Latência & Performance</h3>
                        <p className="text-neutral-charcoal text-sm leading-relaxed">
                            Monitore a velocidade de redirecionamento dos seus links. Latência alta mata conversão. Identifique gargalos técnicos antes de perder dinheiro.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="col-span-1 md:col-span-2 bg-neutral-lightGray border-none rounded-2xl p-8 hover:shadow-soft-xl transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Smartphone size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-darkCharcoal mb-3">Device & Geo Analytics</h3>
                                <p className="text-neutral-charcoal text-sm leading-relaxed mb-6">
                                    Entenda seu público profundamente. Saiba a porcentagem de tráfego Mobile vs Desktop e as regiões que mais compram. Ideal para segmentar campanhas de Ads.
                                </p>
                                <ul className="grid grid-cols-2 gap-3">
                                    <li className="flex items-center gap-2 text-sm text-neutral-mediumGray"><CheckCircle2 size={16} className="text-pink-500" /> Top Regiões</li>
                                    <li className="flex items-center gap-2 text-sm text-neutral-mediumGray"><CheckCircle2 size={16} className="text-pink-500" /> Dispositivos</li>
                                    <li className="flex items-center gap-2 text-sm text-neutral-mediumGray"><CheckCircle2 size={16} className="text-pink-500" /> Canais de Origem</li>
                                </ul>
                            </div>
                            {/* Mini abstract chart visual - Light Mode */}
                            <div className="w-full md:w-1/3 bg-white rounded-xl p-5 shadow-soft-md border border-neutral-warmBeige">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] uppercase font-bold text-neutral-mediumGray">Mobile vs Desktop</span>
                                </div>
                                <div className="h-3 w-full bg-neutral-lightGray rounded-full mb-4 overflow-hidden">
                                    <div className="h-full bg-pink-500 w-[85%] rounded-full shadow-sm"></div>
                                </div>
                                <div className="flex justify-between text-xs font-medium text-neutral-charcoal">
                                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-pink-500"></div> Mobile (85%)</span>
                                    <span className="flex items-center gap-1 text-neutral-mediumGray">Desktop (15%)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
