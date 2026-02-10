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
        <div className="block md:hidden bg-white border border-neutral-200 rounded-xl shadow-2xl p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shadow-sm">
                    <BarChart3 size={20} className="text-primary" />
                </div>
                <div className="text-neutral-darkCharcoal font-bold text-xl tracking-tight">Afiliate Dash</div>
            </div>

            <div className="space-y-4">
                <div className="bg-neutral-50 border border-neutral-200 p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-primary">
                            <DollarSign size={20} />
                        </div>
                        <span className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded font-bold">+4.5%</span>
                    </div>
                    <div className="text-xs text-neutral-500 font-medium mb-1">Vendas Totais</div>
                    <div className="text-2xl font-bold text-neutral-darkCharcoal">R$ 369,59</div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl flex items-center justify-center h-40">
                    <div className="text-center">
                        <BarChart3 size={40} className="text-neutral-300 mx-auto mb-2" />
                        <p className="text-neutral-400 text-sm">Visualização completa disponível em Desktop</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- DESKTOP VIEW (FULL COMPLEXITY) --- */}
        <div className="hidden md:block relative bg-white border border-neutral-200 rounded-xl shadow-2xl overflow-hidden transform rotate-x-2 group-hover:rotate-x-0 transition-transform duration-700 ease-out">
            {/* Top Bar */}
            <div className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shadow-sm">
                        <BarChart3 size={20} className="text-primary" />
                    </div>
                    <div className="text-neutral-darkCharcoal font-bold text-xl tracking-tight">Afiliado Dash</div>
                </div>
                <div className="flex items-center gap-4">

                    <div className="h-10 w-10 bg-orange-100 border border-orange-200 rounded-full flex items-center justify-center text-primary font-bold relative">
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
                        RS
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex h-[550px] md:h-[650px]">
                {/* Sidebar */}
                <div className="w-64 bg-neutral-50 border-r border-neutral-200 hidden md:flex flex-col p-4 gap-2">
                    {/* Dashboard - Active */}
                    <div className="h-10 w-full bg-white text-primary rounded-lg border border-orange-200 shadow-sm flex items-center px-4 text-sm font-bold">
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
                        <div key={index} className="h-10 w-full hover:bg-neutral-200/50 text-neutral-600 rounded-lg flex items-center px-4 text-sm transition-colors font-medium cursor-default">
                            <item.icon size={18} className="mr-3" /> {item.text}
                        </div>
                    ))}
                </div>

                {/* Main Area */}
                <div className="flex-1 bg-neutral-50/50 p-8 overflow-hidden relative">

                    {/* Header Area */}
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-darkCharcoal mb-1">Visão Geral</h2>
                            <p className="text-neutral-500 text-sm">Acompanhe suas comissões e performance de links.</p>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-lg p-1 flex text-xs shadow-sm">
                            <button className="px-4 py-2 bg-orange-50 text-primary border border-orange-100 rounded font-bold shadow-sm">Hoje</button>
                            <button className="px-4 py-2 text-neutral-500 hover:text-neutral-800 transition">Ontem</button>
                            <button className="px-4 py-2 text-neutral-500 hover:text-neutral-800 transition">7 Dias</button>
                        </div>
                    </div>

                    {/* KPI Cards Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: "Vendas Totais", val: "R$ 369,59", icon: DollarSign, color: "text-orange-600", bg: "bg-orange-100" },
                            { label: "Comissão Líquida", val: "R$ 14,30", icon: TrendingUp, color: "text-green-600", bg: "bg-green-100" },
                            { label: "Pedidos", val: "10", icon: ShoppingCart, color: "text-blue-600", bg: "bg-blue-100" },
                            { label: "Ticket Médio", val: "R$ 36,96", icon: Target, color: "text-purple-600", bg: "bg-purple-100" }
                        ].map((kpi, i) => (
                            <div key={i} className="bg-white border border-neutral-200 p-5 rounded-xl hover:border-orange-200 hover:shadow-md transition-all shadow-sm group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-10 h-10 ${kpi.bg} rounded-lg flex items-center justify-center ${kpi.color}`}>
                                        <kpi.icon size={20} />
                                    </div>
                                    <span className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded font-bold">+4.5%</span>
                                </div>
                                <div className="text-xs text-neutral-500 font-medium mb-1">{kpi.label}</div>
                                <div className="text-2xl font-bold text-neutral-darkCharcoal">{kpi.val}</div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Main Chart */}
                        <div className="col-span-2 bg-white border border-neutral-200 rounded-xl p-6 overflow-hidden relative shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-sm font-bold text-neutral-darkCharcoal uppercase tracking-wider">Evolução de Comissões</div>
                            </div>

                            {/* Simulated Wave Chart */}
                            <div className="h-48 relative flex items-end justify-between px-2 gap-2">
                                <div className="absolute inset-0 top-10 bg-gradient-to-t from-orange-50/50 to-transparent"></div>
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
                        <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                            <div className="text-sm font-bold text-neutral-darkCharcoal uppercase tracking-wider mb-6">Top Origens (SubID)</div>
                            <div className="space-y-4">
                                {[
                                    { name: "Instagram Bio", val: "R$ 124,50", w: "80%", c: "bg-green-500" },
                                    { name: "Telegram Vip", val: "R$ 89,20", w: "60%", c: "bg-blue-500" },
                                    { name: "Ads Facebook", val: "R$ 45,00", w: "30%", c: "bg-orange-500" },
                                    { name: "Sem SubID", val: "R$ 12,50", w: "10%", c: "bg-neutral-400" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs text-neutral-500 mb-2">
                                            <span>{item.name}</span>
                                            <span className="font-bold text-neutral-800">{item.val}</span>
                                        </div>
                                        <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
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
