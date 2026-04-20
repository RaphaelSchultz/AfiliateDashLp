import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const statusPills = [
    '99.9% de uptime',
  ];

  return (
    <footer className="bg-[#06122B] text-white/70 border-t border-white/10">
      <div className="max-w-[1120px] mx-auto px-5 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="https://app.afiliadodash.com/assets/logo-BN3UZtY6.png"
                alt="AfiliadoDash"
                className="h-8 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-[19px] font-black text-white hidden">
                Afiliado<span className="text-orange-500">Dash</span>
              </span>
            </div>
            <p className="text-[14px] leading-relaxed max-w-[270px] text-white/55">
              A plataforma completa para gestão e análise de comissões, links e grupos de WhatsApp para afiliados Shopee.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {statusPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-[11px] font-semibold text-green-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2" />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-5">Produto</h4>
            <ul className="space-y-3">
              <li>
                <a href="#funcionalidades" className="text-[14px] text-white/70 hover:text-orange-400 transition-colors">Funcionalidades</a>
              </li>
              <li>
                <a href="#detalhes" className="text-[14px] text-white/70 hover:text-orange-400 transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#oferta" className="text-[14px] text-white/70 hover:text-orange-400 transition-colors">Preços</a>
              </li>
              <li>
                <a href="#faq" className="text-[14px] text-white/70 hover:text-orange-400 transition-colors">Roadmap</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-5">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-[14px] text-white/70 hover:text-orange-400 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a
                  href="https://instagram.com/afiliadodash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/70 hover:text-orange-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-[15px] font-semibold mb-5">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/afiliadodash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/70 hover:text-orange-400 transition-colors"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/afiliadodash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/70 hover:text-orange-400 transition-colors"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="https://status.afiliadodash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/70 hover:text-orange-400 transition-colors"
                >
                  Status do Sistema
                </a>
              </li>
              <li>
                <Link to="/terms" className="text-[14px] text-white/70 hover:text-orange-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-white/45">
            © 2026 AfiliadoDash. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 text-[12px] text-white/45">
            <Link to="/privacy" className="hover:text-orange-400 transition-colors">
              Privacidade
            </Link>
            <Link to="/terms" className="hover:text-orange-400 transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
