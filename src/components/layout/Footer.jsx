import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-neutral-cream dark:bg-slate-900 text-neutral-charcoal dark:text-gray-400 font-sans relative mt-auto transition-colors duration-300">
            <div className="h-px w-full bg-neutral-warmBeige dark:bg-primary/50 mb-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    <div>
                        <h3 className="text-neutral-darkCharcoal dark:text-white text-xl font-bold mb-4 font-display">Afiliado Dash</h3>
                        <p className="text-sm leading-relaxed max-w-xs">
                            A plataforma completa para gestão e análise de links e vendas para afiliados.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-neutral-darkCharcoal dark:text-white text-base font-semibold mb-5">Suporte</h4>
                        <ul className="space-y-2.5">
                            <li><a href="/ajuda" className="text-sm hover:text-primary transition-colors">Central de Ajuda</a></li>
                            <li><a href="/contato" className="text-sm hover:text-primary transition-colors">Contato</a></li>
                            <li><a href="/tutoriais" className="text-sm hover:text-primary transition-colors">Tutoriais</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-neutral-darkCharcoal dark:text-white text-base font-semibold mb-5">Legal</h4>
                        <ul className="space-y-2.5">
                            <li><Link to="/termos-de-uso" className="text-sm hover:text-primary transition-colors">Termos de Uso</Link></li>
                            <li><Link to="/politica-de-privacidade" className="text-sm hover:text-primary transition-colors">Política de Privacidade</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-neutral-darkCharcoal dark:text-white text-base font-semibold mb-5">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/afiliadodash" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-darkCharcoal dark:text-white hover:opacity-80 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-warmBeige dark:border-white/10 py-8 text-center">
                    <p className="text-sm">Afiliado Dash · © 2026 · Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
