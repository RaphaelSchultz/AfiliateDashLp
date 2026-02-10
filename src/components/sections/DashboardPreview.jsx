import React from 'react';
import {
    BarChart3,
    Calendar,
    MousePointerClick,
    Link as LinkIcon,
    Upload,
    LayoutGrid,
    DollarSign,
    TrendingUp,
    ShoppingCart,
    Target
} from 'lucide-react';

const DashboardPreview = () => (
    <div className="relative w-full shadow-2xl rounded-xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

        {/* --- MOBILE OPTIMIZED VIEW (SIMPLIFIED) --- */}
        <div className="block md:hidden bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-xl shadow-2xl p-6 relative overflow-hidden transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 bg-primary/10 dark:bg-orange-900/20 rounded-lg flex items-center justify-center shadow-sm">
                    <BarChart3 size={20} className="text-primary" />
                </div>
                <div className="text-neutral-darkCharcoal dark:text-white font-bold text-xl tracking-tight">Afiliate Dash</div>
            </div>

            <div className="space-y-4">
                <div className="bg-neutral-50 dark:bg-slate-700/50 border border-neutral-200 dark:border-slate-600 p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-primary">
                            <DollarSign size={20} />
                        </div>
                        <span className="text-[10px] bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded font-bold">+4.5%</span>
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-gray-400 font-medium mb-1">Vendas Totais</div>
                    <div className="text-2xl font-bold text-neutral-darkCharcoal dark:text-white">R$ 369,59</div>
                </div>

                <div className="bg-neutral-50 dark:bg-slate-700/50 border border-neutral-200 dark:border-slate-600 p-4 rounded-xl flex items-center justify-center h-40">
                    <div className="text-center">
                        <BarChart3 size={40} className="text-neutral-300 dark:text-slate-500 mx-auto mb-2" />
                        <p className="text-neutral-400 dark:text-gray-500 text-sm">Visualização completa disponível em Desktop</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- DESKTOP VIEW (FULL COMPLEXITY) --- */}
        <div className="hidden md:block relative bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden transform rotate-x-2 group-hover:rotate-x-0 transition-all duration-700 ease-out">
            {/* Top Bar */}
            <div className="h-16 bg-white dark:bg-slate-900 border-b border-neutral-200 dark:border-slate-700 flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary/10 dark:bg-orange-900/20 rounded-lg flex items-center justify-center shadow-sm">
                        <BarChart3 size={20} className="text-primary" />
                    </div>
                    <div className="text-neutral-darkCharcoal dark:text-white font-bold text-xl tracking-tight">Afiliado Dash</div>
                </div>
                <div className="flex items-center gap-4">

                    <div className="h-10 w-10 bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-full flex items-center justify-center text-primary font-bold relative">
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                        RS
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex h-[550px] md:h-[650px]">
                {/* Sidebar */}
                <div className="w-64 bg-neutral-50 dark:bg-slate-800/50 border-r border-neutral-200 dark:border-slate-700 hidden md:flex flex-col p-4 gap-2">
                    {/* Dashboard - Active */}
                    <div className="h-10 w-full bg-white dark:bg-slate-700 text-primary dark:text-orange-400 rounded-lg border border-orange-200 dark:border-orange-900/50 shadow-sm flex items-center px-4 text-sm font-bold">
                        <LayoutGrid size={18} className="mr-3" /> Dashboard
                    </div>

                    {/* Menu Items */}
                    {[
                        { icon: Calendar, text: "Análise do Dia" },
                        { icon: MousePointerClick, text: "Análise de Cliques" },
                        { icon: LinkIcon, text: "Meus Links" },
                        { icon: BarChart3, text: "Analytics Links" },
                        { icon: Upload, text: "Upload" }
                    ].map((item, index) => (
                        <div key={index} className="h-10 w-full hover:bg-neutral-200/50 dark:hover:bg-slate-700/50 text-neutral-600 dark:text-slate-400 rounded-lg flex items-center px-4 text-sm transition-colors font-medium cursor-default">
                            <item.icon size={18} className="mr-3" /> {item.text}
                        </div>
                    ))}
                </div>

                {/* Main Area */}
                <div className="flex-1 bg-neutral-50/50 dark:bg-slate-900/50 p-8 overflow-hidden relative">

                    {/* Header Area */}
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-darkCharcoal dark:text-white mb-1">Visão Geral</h2>
                            <p className="text-neutral-500 dark:text-gray-400 text-sm">Acompanhe suas comissões e performance de links.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-lg p-1 flex text-xs shadow-sm">
                            <button className="px-4 py-2 bg-orange-50 dark:bg-orange-900/30 text-primary border border-orange-100 dark:border-orange-800 rounded font-bold shadow-sm">Hoje</button>
                            <button className="px-4 py-2 text-neutral-500 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-200 transition">Ontem</button>
                            <button className="px-4 py-2 text-neutral-500 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-200 transition">7 Dias</button>
                        </div>
                    </div>

                    {/* KPI Cards Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: "Vendas Totais", val: "R$ 369,59", icon: DollarSign, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-100 dark:bg-orange-900/30" },
                            { label: "Comissão Líquida", val: "R$ 14,30", icon: TrendingUp, color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
                            { label: "Pedidos", val: "10", icon: ShoppingCart, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
                            { label: "Ticket Médio", val: "R$ 36,96", icon: Target, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" }
                        ].map((kpi, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 p-5 rounded-xl hover:border-orange-200 dark:hover:border-orange-900 transition-all shadow-sm group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-10 h-10 ${kpi.bg} rounded-lg flex items-center justify-center ${kpi.color}`}>
                                        <kpi.icon size={20} />
                                    </div>
                                    <span className="text-[10px] bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded font-bold">+4.5%</span>
                                </div>
                                <div className="text-xs text-neutral-500 dark:text-gray-400 font-medium mb-1">{kpi.label}</div>
                                <div className="text-2xl font-bold text-neutral-darkCharcoal dark:text-white">{kpi.val}</div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Main Chart */}
                        <div className="col-span-2 bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-xl p-6 overflow-hidden relative shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-sm font-bold text-neutral-darkCharcoal dark:text-white uppercase tracking-wider">Evolução de Comissões</div>
                            </div>

                            {/* Simulated Wave Chart */}
                            <div className="h-48 relative flex items-end justify-between px-2 gap-2">
                                <div className="absolute inset-0 top-10 bg-gradient-to-t from-orange-50/50 dark:from-orange-900/20 to-transparent"></div>
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                                    <path d="M0,150 C50,150 100,50 200,80 C300,110 400,20 500,60 C600,100 700,40 800,90 L800,200 L0,200 Z" fill="url(#gradient-light)" opacity="0.2" />
                                    <path d="M0,150 C50,150 100,50 200,80 C300,110 400,20 500,60 C600,100 700,40 800,90" fill="none" stroke="#F97316" strokeWidth="3" />
                                    <defs>
                                        <linearGradient id="gradient-light" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Top SubIDs */}
                        <div className="bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
                            <div className="text-sm font-bold text-neutral-darkCharcoal dark:text-white uppercase tracking-wider mb-6">Top Origens (SubID)</div>
                            <div className="space-y-4">
                                {[
                                    { name: "Instagram Bio", val: "R$ 124,50", w: "80%", c: "bg-green-500" },
                                    { name: "Telegram Vip", val: "R$ 89,20", w: "60%", c: "bg-blue-500" },
                                    { name: "Ads Facebook", val: "R$ 45,00", w: "30%", c: "bg-orange-500" },
                                    { name: "Sem SubID", val: "R$ 12,50", w: "10%", c: "bg-neutral-400" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs text-neutral-500 dark:text-gray-400 mb-2">
                                            <span>{item.name}</span>
                                            <span className="font-bold text-neutral-800 dark:text-gray-200">{item.val}</span>
                                        </div>
                                        <div className="h-2 w-full bg-neutral-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <div className={`h-full ${item.c} rounded-full`} style={{ width: item.w }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
);

export default DashboardPreview;
