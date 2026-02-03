import React, { useState } from 'react';
import { BarChart3, Menu, X } from 'lucide-react';

const Header = ({ scrollToOffer }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
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
    );
};

export default Header;
