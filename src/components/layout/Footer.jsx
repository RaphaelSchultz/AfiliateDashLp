import React from 'react';
import { BarChart3 } from 'lucide-react';

const Footer = () => {
    return (
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
    );
};

export default Footer;
