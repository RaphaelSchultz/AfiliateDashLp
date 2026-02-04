import React from 'react';
import { Check, CheckCircle2, Crown, AlertCircle } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="oferta" className="py-24 px-6 relative">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-gradient-to-r from-blue-900/10 via-orange-900/10 to-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Escolha o seu nível de jogo</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">Compare e veja porque a oferta de fundador é a escolha óbvia para quem quer escalar.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-12">

                    {/* CARD 1: SCALE (O Padrão) */}
                    <div className="bg-[#0f141f]/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex flex-col relative hover:bg-[#0f141f]/80 transition-all duration-300 group">
                        <div className="mb-6 border-b border-white/5 pb-6">
                            <h3 className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-2 group-hover:text-gray-300 transition-colors">Plano Scale</h3>
                            <div className="text-5xl font-black text-white mb-2">R$ 97<small className="text-lg font-medium text-gray-500">/mês</small></div>
                            <p className="text-sm text-gray-500">Para quem está começando a escalar.</p>
                        </div>

                        <ul className="space-y-4 text-gray-400 text-sm mb-8 flex-1">
                            <li className="flex gap-3 items-center">
                                <div className="p-1 rounded bg-white/5"><Check size={14} className="text-gray-500" /></div>
                                <span>Gerador de Links (50 Links)</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <div className="p-1 rounded bg-white/5"><Check size={14} className="text-gray-500" /></div>
                                <span>Retenção de Dados (30 dias)</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <div className="p-1 rounded bg-white/5"><Check size={14} className="text-gray-500" /></div>
                                <span>Dashboard Completo</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <div className="p-1 rounded bg-white/5"><Check size={14} className="text-gray-500" /></div>
                                <span>Análise de Investimento</span>
                            </li>
                        </ul>

                        <button className="w-full py-4 border border-white/10 rounded-xl text-gray-400 font-bold hover:bg-white/5 hover:text-white transition-colors">
                            Escolher Plano Scale
                        </button>
                    </div>

                    {/* CARD 2: FUNDADOR (A Oferta) */}
                    <div className="relative bg-[#111827]/80 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(249,115,22,0.1)] hover:shadow-[0_0_60px_rgba(249,115,22,0.15)] hover:border-orange-500/50 transform md:scale-105 z-20 transition-all duration-300">
                        {/* Badge */}
                        <div className="absolute top-0 right-0">
                            <div className="bg-orange-500/10 backdrop-blur-md border-b border-l border-orange-500/20 text-orange-400 text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl flex items-center gap-2">
                                <Crown size={14} className="fill-orange-400" /> RECOMENDADO
                            </div>
                        </div>

                        <div className="mb-6 border-b border-orange-500/10 pb-6">
                            <h3 className="text-orange-400 font-bold uppercase tracking-wider text-sm mb-2 flex items-center gap-2">
                                Membro Fundador
                            </h3>
                            <div className="text-5xl font-black text-white mb-2 tracking-tight">R$ 97<small className="text-lg font-medium text-gray-500">/mês</small></div>
                            <p className="text-sm text-green-400 font-medium flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Upgrade Elite Grátis por 6 Meses! <span className="text-orange-500">*</span>
                            </p>
                        </div>

                        <ul className="space-y-4 text-white text-sm mb-8 flex-1">
                            <li className="flex gap-3 items-center font-medium">
                                <div className="p-1 rounded bg-orange-500/10 border border-orange-500/20"><CheckCircle2 size={16} className="text-orange-500" /></div>
                                <span className="flex-1 text-gray-200">Gerador de Links (ILIMITADO)</span>
                                <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20">6 Meses</span>
                            </li>
                            <li className="flex gap-3 items-center font-medium">
                                <div className="p-1 rounded bg-orange-500/10 border border-orange-500/20"><CheckCircle2 size={16} className="text-orange-500" /></div>
                                <span className="flex-1 text-gray-200">Retenção de Dados (VITALÍCIO)</span>
                                <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20">6 Meses</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <div className="p-1 rounded bg-orange-500/10 border border-orange-500/20"><CheckCircle2 size={16} className="text-orange-500" /></div>
                                <span className="text-gray-300">Dashboard Completo</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <div className="p-1 rounded bg-orange-500/10 border border-orange-500/20"><CheckCircle2 size={16} className="text-orange-500" /></div>
                                <span className="text-gray-300">Análise de Investimento Detalhada</span>
                            </li>
                        </ul>

                        <button
                            className="w-full py-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all mb-2 uppercase tracking-wide text-sm"
                            onClick={() => window.open('https://pay.kiwify.com.br/SEU_LINK_AQUI', '_blank')}
                        >
                            QUERO SER FUNDADOR AGORA
                        </button>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center px-4">
                    <p className="text-[10px] text-gray-500 leading-relaxed font-mono">
                        <span className="text-orange-500">*</span> <span className="text-orange-400/80 font-bold">Nota:</span> A condição de fundador garante acesso aos recursos do plano Elite (Ilimitado) pelo preço do Scale por 6 meses. Após esse período, o valor mensal permanece R$ 97,00, e os limites retornam ao padrão do plano Scale (50 links), salvo upgrade.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
