import React, { useState } from 'react';
import {
  BarChart3,
  Link as LinkIcon,
  Database,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Smartphone,
  Globe,
  Clock,
  Target,
  DollarSign,
  ShoppingCart,
  Filter,
  Lock,
  LayoutGrid,
  Calendar,
  MousePointerClick,
  Upload,
  RefreshCw,
  Edit3
} from 'lucide-react';

// --- CORES DA MARCA & CONFIGURAÇÕES ---
// Fundo: #0B1121 (Dark Blue profundo)
// Acento Primário: #F97316 (Laranja Vibrante)
// Cards: #111827

// --- Componentes Reutilizáveis de UI ---

const GradientText = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 ${className}`}>
    {children}
  </span>
);

const GlassCard = ({ children, className = "", hoverEffect = true }) => (
  <div className={`
    relative overflow-hidden
    bg-[#111827]/90 backdrop-blur-sm 
    border border-white/5 
    rounded-2xl p-6 
    shadow-lg
    transition-all duration-300
    ${hoverEffect ? 'hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] group' : ''}
    ${className}
  `}>
    {children}
  </div>
);

const PrimaryButton = ({ children, className = "", onClick, pulsing = false }) => (
  <button
    onClick={onClick}
    className={`
      relative group overflow-hidden rounded-xl px-8 py-4 font-bold text-white
      bg-gradient-to-r from-orange-600 to-red-600
      hover:from-orange-500 hover:to-red-500
      shadow-[0_4px_20px_rgba(249,115,22,0.3)]
      transition-all duration-300 transform hover:-translate-y-1
      flex items-center justify-center gap-2
      ${pulsing ? 'animate-pulse-slow' : ''}
      ${className}
    `}
  >
    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12 -ml-4 w-[150%]" />
    <span className="relative flex items-center gap-2">{children}</span>
  </button>
);

const SecondaryButton = ({ children, className = "" }) => (
  <button className={`
    rounded-xl px-8 py-4 font-bold text-white
    border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/30
    transition-all duration-300
    flex items-center justify-center gap-2
    ${className}
  `}>
    {children}
  </button>
);

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-200 group-hover:text-orange-400 transition-colors">
          {question}
        </span>
        {isOpen ? <ChevronUp className="text-orange-400" /> : <ChevronDown className="text-gray-600" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

// --- Mockup do Dashboard (Visual Aprimorado) ---
const DashboardMockup = () => (
  <div className="relative w-full max-w-6xl mx-auto mt-12 perspective-1000 group">
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
    <div className="relative bg-[#0f141f] border border-white/10 rounded-xl shadow-2xl overflow-hidden transform rotate-x-2 group-hover:rotate-x-0 transition-transform duration-700 ease-out">
      {/* Top Bar */}
      <div className="h-16 bg-[#111827] border-b border-white/5 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
            <BarChart3 size={20} className="text-white" />
          </div>
          <div className="text-white font-bold text-xl tracking-tight">Afiliate Dash</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex h-9 bg-[#1f2937] border border-white/5 rounded px-4 text-xs text-gray-400 items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Dados em Tempo Real
          </div>
          <div className="h-10 w-10 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center text-orange-500 font-bold relative">
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-[#111827] rounded-full"></span>
            RS
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[550px] md:h-[650px]">
        {/* Sidebar */}
        <div className="w-64 bg-[#0f141f] border-r border-white/5 hidden md:flex flex-col p-4 gap-2">
          {/* Dashboard - Active */}
          <div className="h-10 w-full bg-[#3a1d12] text-orange-500 rounded-lg border border-orange-500/20 flex items-center px-4 text-sm font-medium">
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
            <div key={index} className="h-10 w-full hover:bg-white/5 text-gray-400 rounded-lg flex items-center px-4 text-sm transition-colors font-medium cursor-default">
              <item.icon size={18} className="mr-3" /> {item.text}
            </div>
          ))}
        </div>

        {/* Main Area */}
        <div className="flex-1 bg-[#0b0f19] p-8 overflow-hidden relative">

          {/* Header Area */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Visão Geral</h2>
              <p className="text-gray-500 text-sm">Acompanhe suas comissões e performance de links.</p>
            </div>
            <div className="bg-[#1f2937] border border-white/5 rounded-lg p-1 flex text-xs">
              <button className="px-4 py-2 bg-orange-600 text-white rounded font-medium shadow">Hoje</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white transition">Ontem</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white transition">7 Dias</button>
            </div>
          </div>

          {/* KPI Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Vendas Totais", val: "R$ 369,59", icon: DollarSign, color: "text-orange-500", bg: "bg-orange-500/10" },
              { label: "Comissão Líquida", val: "R$ 14,30", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10" },
              { label: "Pedidos", val: "10", icon: ShoppingCart, color: "text-blue-500", bg: "bg-blue-500/10" },
              { label: "Ticket Médio", val: "R$ 36,96", icon: Target, color: "text-purple-500", bg: "bg-purple-500/10" }
            ].map((kpi, i) => (
              <div key={i} className="bg-[#151e32] border border-white/5 p-5 rounded-xl hover:border-orange-500/30 transition-all shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 ${kpi.bg} rounded-lg flex items-center justify-center ${kpi.color}`}>
                    <kpi.icon size={20} />
                  </div>
                  <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400">+4.5%</span>
                </div>
                <div className="text-xs text-gray-400 font-medium mb-1">{kpi.label}</div>
                <div className="text-2xl font-bold text-white">{kpi.val}</div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Main Chart */}
            <div className="col-span-2 bg-[#151e32] border border-white/5 rounded-xl p-6 overflow-hidden relative">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm font-bold text-white uppercase tracking-wider">Evolução de Comissões</div>
              </div>

              {/* Simulated Wave Chart */}
              <div className="h-48 relative flex items-end justify-between px-2 gap-2">
                <div className="absolute inset-0 top-10 bg-gradient-to-t from-orange-500/10 to-transparent"></div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                  <path d="M0,150 C50,150 100,50 200,80 C300,110 400,20 500,60 C600,100 700,40 800,90 L800,200 L0,200 Z" fill="url(#gradient)" opacity="0.2" />
                  <path d="M0,150 C50,150 100,50 200,80 C300,110 400,20 500,60 C600,100 700,40 800,90" fill="none" stroke="#F97316" strokeWidth="3" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Top SubIDs */}
            <div className="bg-[#151e32] border border-white/5 rounded-xl p-6">
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-6">Top Origens (SubID)</div>
              <div className="space-y-4">
                {[
                  { name: "Instagram Bio", val: "R$ 124,50", w: "80%", c: "bg-green-500" },
                  { name: "Telegram Vip", val: "R$ 89,20", w: "60%", c: "bg-blue-500" },
                  { name: "Ads Facebook", val: "R$ 45,00", w: "30%", c: "bg-orange-500" },
                  { name: "Sem SubID", val: "R$ 12,50", w: "10%", c: "bg-gray-600" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-gray-300 mb-2">
                      <span>{item.name}</span>
                      <span className="font-bold">{item.val}</span>
                    </div>
                    <div className="h-2 w-full bg-[#0b0f19] rounded-full overflow-hidden">
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

// --- Componente Principal ---

export default function AfiliateDashLanding() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToOffer = () => {
    document.getElementById('oferta').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B1121] text-gray-300 font-sans selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0B1121]/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
              <BarChart3 size={20} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Afiliate<span className="text-orange-500">Dash</span></span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-lg text-gray-300 hover:text-white font-bold text-sm transition-colors border border-transparent hover:border-white/10 hover:bg-white/5">
              Login
            </button>
            <button onClick={scrollToOffer} className="px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold transition-all shadow-lg shadow-orange-900/20">
              Garantir vaga de Fundador
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#111827] border-b border-white/10 p-4 flex flex-col gap-4 relative z-50">
            <button className="w-full text-left py-2 text-gray-300 hover:text-white font-medium">Login</button>
            <button onClick={() => { scrollToOffer(); setIsMobileMenuOpen(false) }} className="w-full py-3 rounded-lg bg-orange-600 text-white font-bold text-center">
              Garantir vaga de Fundador
            </button>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-20">

        {/* SECTION 1: HERO (Texto da versão 2) */}
        <section className="relative pt-20 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Oferta de Lançamento Ativa
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
              Domine seus Números e <br className="hidden md:block" />
              <GradientText>Escalabilidade Real.</GradientText>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Deixe de lado o "feeling" e as planilhas manuais. O <strong className="text-gray-200 font-semibold">Afiliate Dash</strong> entrega rastreamento granular de SubIDs, análise de latência e ROI verdadeiro para afiliados profissionais.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
              <PrimaryButton onClick={scrollToOffer} className="w-full md:w-auto text-lg px-12 py-5 shadow-orange-500/20" pulsing={true}>
                QUERO ACESSO VITALÍCIO
                <ArrowRight size={20} />
              </PrimaryButton>
              <SecondaryButton className="w-full md:w-auto py-5">
                Ver Demonstração
              </SecondaryButton>
            </div>

            <DashboardMockup />
          </div>
        </section>

        {/* SECTION 2: PAIN AGITATION (Texto da versão 2) */}
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

        {/* SECTION 3: FEATURES GRID (Texto da versão 2 com visual aprimorado) */}
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

        {/* SECTION 4: DEEP DIVE (UPDATED: Link Builder Focus) */}
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

        {/* SECTION 5: THE OFFER (OFERTA ORIGINAL DA V2 - ASSINATURA) */}
        <section id="oferta" className="py-24 px-6 relative">
          {/* Glow Behind Offer */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-lg mx-auto relative z-10">
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
              {/* Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-2xl opacity-75 blur-sm"></div>

              <div className="relative bg-[#111827] rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">

                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider shadow-lg shadow-orange-900/40">
                    Condição Exclusiva de Fundador
                  </span>
                </div>

                <div className="text-center mb-8 mt-6">
                  <h3 className="text-2xl font-bold text-gray-200 mb-2">MEMBRO FUNDADOR</h3>
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-gray-500 text-lg line-through decoration-red-500 decoration-2">De R$ 147,90/mês</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                    R$ 97,00<span className="text-lg font-medium text-gray-400">/mês</span>
                  </div>
                  <p className="text-orange-400 text-sm font-medium">Preço travado para sempre. Cancele quando quiser.</p>
                </div>

                <div className="space-y-4 mb-10 border-t border-b border-white/5 py-6">
                  {[
                    "Acesso Completo ao Dashboard",
                    "Gerador de Links Ilimitado",
                    "Rastreamento de SubIDs",
                    "Retenção de Dados Vitalícia",
                    "Análise de Performance de Cliques",
                    "Gestão de Links Centralizada"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-orange-500 shrink-0 mt-0.5" size={0} />
                      <span className="text-gray-300 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <PrimaryButton className="w-full text-lg py-5 mb-4 shadow-xl shadow-orange-500/20" onClick={() => alert("Redirecionando para o Checkout...")}>
                  GARANTIR MINHA VAGA AGORA
                  <ShieldCheck size={20} />
                </PrimaryButton>

                <p className="text-center text-xs text-gray-500 leading-relaxed">
                  <span className="text-red-400 font-bold">Nota:</span> Esta condição especial é válida por tempo limitado. O valor pode ser alterado a qualquer momento sem aviso prévio.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ (Texto da versão 2) */}
        <section className="py-24 px-6 bg-[#080c17] border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Dúvidas Frequentes
            </h2>

            <div className="space-y-2">
              {[
                {
                  q: "Como o Afiliate Dash difere do painel da Shopee?",
                  a: "O painel da Shopee é básico e focado apenas em mostrar vendas. O Afiliate Dash é focado em gestão e performance. Nós mostramos métricas que eles não mostram (como latência de clique, ROI real, lucro líquido por SubID) e, o mais importante: guardamos seus dados para sempre, enquanto eles apagam após alguns meses."
                },
                {
                  q: "Preciso instalar algo no meu computador?",
                  a: "Não. O Afiliate Dash é 100% online (na nuvem). Você pode acessar de qualquer computador, tablet ou celular, de qualquer lugar do mundo."
                },
                {
                  q: "Meus dados estão seguros?",
                  a: "Absolutamente. Utilizamos criptografia de ponta e servidores seguros. Seus dados de vendas e estratégias são estritamente confidenciais e usados apenas para gerar seus relatórios."
                },
                {
                  q: "Posso usar para quantos links quiser?",
                  a: "Sim! Como Membro Fundador, você tem criação e rastreamento de links ILIMITADOS. Pode criar campanhas para centenas de produtos sem restrições."
                }
              ].map((item, idx) => (
                <AccordionItem
                  key={idx}
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaq === idx}
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-6 border-t border-white/5 bg-[#0B1121] text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
            <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center">
              <BarChart3 className="text-white" size={14} />
            </div>
            <span className="text-lg font-bold text-white">Afiliate<span className="text-orange-500">Dash</span></span>
          </div>
          <p className="text-gray-500 text-sm mb-8">
            A ferramenta essencial para afiliados que jogam o jogo do longo prazo.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-600 mb-8">
            <a href="#" className="hover:text-orange-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Suporte</a>
          </div>
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Afiliate Dash SaaS. Todos os direitos reservados.
          </p>
        </footer>

      </main>
    </div>
  );
}