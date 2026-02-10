import React, { useState } from 'react';
import { BarChart3, Menu, X } from 'lucide-react';
import MGMLogoLike from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';

import { Link } from 'react-router-dom';

const Header = ({ scrollToOffer }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-neutral-warmBeige dark:border-slate-800 py-3' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="flex items-center justify-center transform group-hover:scale-105 transition-transform">
                        <MGMLogoLike className="w-9 h-9" />
                    </div>
                    <span className={`text-xl font-bold tracking-tight font-display transition-colors ${isScrolled ? 'text-neutral-darkCharcoal dark:text-white' : 'text-neutral-darkCharcoal dark:text-white'}`}>
                        Afiliado<span className="text-primary">Dash</span>
                    </span>
                </Link>

                {/* Centered Navigation - Desktop */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-sm font-medium text-neutral-charcoal hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    >
                        Início
                    </button>
                    <button
                        onClick={() => document.getElementById('dashboard-preview')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-sm font-medium text-neutral-charcoal hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    >
                        Analytics
                    </button>
                    <button
                        onClick={scrollToOffer}
                        className="text-sm font-medium text-neutral-charcoal hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    >
                        Preços
                    </button>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <a
                        href="https://app.afiliadodash.com/login"
                        className="text-neutral-darkCharcoal hover:text-primary dark:text-white dark:hover:text-primary font-semibold text-sm transition-colors"
                    >
                        Entrar
                    </a>
                    <button
                        onClick={scrollToOffer}
                        style={{ borderRadius: '12px' }}
                        className="px-6 py-2 bg-orange-600 hover:opacity-90 text-white text-sm font-bold transition-opacity shadow-soft-md"
                    >
                        Ver Planos
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-neutral-charcoal" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-neutral-warmBeige dark:border-slate-800 p-4 flex flex-col gap-4 relative z-50 shadow-soft-xl animate-in slide-in-from-top-2">
                    <button
                        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }}
                        className="w-full text-left py-2 text-neutral-charcoal dark:text-gray-200 hover:text-primary font-medium block"
                    >
                        Início
                    </button>
                    <button
                        onClick={() => { document.getElementById('dashboard-preview')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }}
                        className="w-full text-left py-2 text-neutral-charcoal dark:text-gray-200 hover:text-primary font-medium block"
                    >
                        Analytics
                    </button>
                    <button
                        onClick={() => { scrollToOffer(); setIsMobileMenuOpen(false); }}
                        className="w-full text-left py-2 text-neutral-charcoal dark:text-gray-200 hover:text-primary font-medium block"
                    >
                        Preços
                    </button>
                    <div className="h-px bg-neutral-100 dark:bg-slate-800 my-2" />
                    <a href="https://app.afiliadodash.com/login" className="w-full text-left py-2 text-neutral-charcoal dark:text-gray-200 hover:text-primary font-medium block">Entrar</a>
                </div>
            )}
        </nav>
    );
};

export default Header;
