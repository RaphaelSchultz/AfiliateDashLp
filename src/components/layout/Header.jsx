import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ scrollToOffer }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', action: handleGoHome },
    { label: 'Funcionalidades', action: () => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'Planos', action: scrollToOffer },
    { label: 'FAQ', action: () => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-white/60 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-[1054px] mx-auto px-5 flex items-center justify-between h-[75px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://app.afiliadodash.com/assets/logo-BN3UZtY6.png"
            alt="AfiliadoDash"
            className="h-8 w-auto"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="text-[18px] font-black tracking-tight text-slate-900">
            Afiliado<span className="text-orange-500">Dash</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="text-[15px] font-semibold text-slate-600 hover:text-orange-500 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.afiliadodash.com/login"
            className="text-[14px] font-semibold text-slate-600 hover:text-orange-500 transition-colors"
          >
            Entrar
          </a>
          <button
            onClick={scrollToOffer}
            className="px-5 py-2.5 text-[14px] font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-[10px] shadow-[0_4px_14px_rgba(249,115,22,0.30)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Começar agora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-700 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => { link.action(); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-3 text-[15px] font-semibold text-slate-700 hover:text-orange-500 transition-colors border-b border-slate-50 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="https://app.afiliadodash.com/login"
              className="text-center py-3 text-[14px] font-semibold text-slate-700"
            >
              Entrar
            </a>
            <button
              onClick={() => { scrollToOffer(); setIsMobileMenuOpen(false); }}
              className="py-3 text-[14px] font-bold text-white bg-orange-500 rounded-[10px]"
            >
              Começar agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
