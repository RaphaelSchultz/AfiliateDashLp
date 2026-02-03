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
        <section id="funcionalidades" className="py-24 px-6 relative bg-[#0B1121]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ferramentas Profissionais para <br />
                        <GradientText>Super Afiliados</GradientText>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Desenvolvemos cada funcionalidade baseada nas necessidades reais de quem investe pesado em tráfego.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Feature 1 - Conversões Antecipadas */}
                    <GlassCard className="col-span-1 md:col-span-2 lg:col-span-1 group hover:bg-[#1a2333]">
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Conversões Antes do Painel</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            O painel oficial da Shopee demora para atualizar o total vendido. Com nossa ferramenta, você visualiza suas conversões e comissões muito antes, permitindo ajustes rápidos na sua operação.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">Sem Delay</span>
                            <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">Dados Detalhados</span>
                        </div>
                    </GlassCard>

                    {/* Feature 2 */}
                    <GlassCard>
                        <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center mb-6">
                            <Filter size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Rastreamento de SubIDs</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crie links dinâmicos e saiba exatamente de onde veio a venda: <span className="text-orange-400 font-mono text-xs">?subid=instagram_stories</span> ou <span className="text-orange-400 font-mono text-xs">?subid=fb_ads_01</span>. Otimize o que converte, corte o que gasta.
                        </p>
                    </GlassCard>

                    {/* Feature 3 */}
                    <GlassCard>
                        <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center mb-6">
                            <DollarSign size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Análise Financeira Real</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Painel financeiro completo com Ticket Médio, Comissão Líquida e volume de vendas. Visualize a saúde do seu negócio em uma única tela.
                        </p>
                    </GlassCard>

                    {/* Feature 4 */}
                    <GlassCard>
                        <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-lg flex items-center justify-center mb-6">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Latência & Performance</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Monitore a velocidade de redirecionamento dos seus links. Latência alta mata conversão. Identifique gargalos técnicos antes de perder dinheiro.
                        </p>
                    </GlassCard>

                    {/* Feature 5 */}
                    <GlassCard className="col-span-1 md:col-span-2">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1">
                                <div className="w-12 h-12 bg-pink-500/10 text-pink-500 rounded-lg flex items-center justify-center mb-6">
                                    <Smartphone size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Device & Geo Analytics</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Entenda seu público profundamente. Saiba a porcentagem de tráfego Mobile vs Desktop e as regiões (Estados/Cidades) que mais compram. Ideal para segmentar campanhas de Ads por geolocalização.
                                </p>
                                <ul className="grid grid-cols-2 gap-2">
                                    <li className="flex items-center gap-2 text-xs text-gray-500"><CheckCircle2 size={12} className="text-pink-500" /> Top Regiões</li>
                                    <li className="flex items-center gap-2 text-xs text-gray-500"><CheckCircle2 size={12} className="text-pink-500" /> Dispositivos</li>
                                    <li className="flex items-center gap-2 text-xs text-gray-500"><CheckCircle2 size={12} className="text-pink-500" /> Canais de Origem</li>
                                </ul>
                            </div>
                            {/* Mini abstract chart visual */}
                            <div className="w-full md:w-1/3 bg-[#0f141f] rounded-lg p-4 border border-white/5">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] text-gray-400">Mobile vs Desktop</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full mb-3 overflow-hidden">
                                    <div className="h-full bg-pink-500 w-[85%]"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-500">
                                    <span>Mobile (85%)</span>
                                    <span>Desktop (15%)</span>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default Features;
