import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-top-border"></div>

            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-brand">Afiliado Dash</h3>
                        <p className="footer-desc">
                            A plataforma completa para gestão e análise de links e vendas para afiliados.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Suporte</h4>
                        <ul className="footer-links">
                            <li><a href="/ajuda">Central de Ajuda</a></li>
                            <li><a href="/contato">Contato</a></li>
                            <li><a href="/tutoriais">Tutoriais</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul className="footer-links">
                            <li><Link to="/termos-de-uso">Termos de Uso</Link></li>
                            <li><Link to="/politica-de-privacidade">Política de Privacidade</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Redes Sociais</h4>
                        <div className="social-icons">
                            <a href="https://instagram.com/afiliadodash" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Afiliado Dash · © 2026 · Todos os direitos reservados.</p>
                </div>
            </div>

            <style>{`
                /* Variáveis de Cores */
                :root {
                    --footer-bg: #0f172a;       /* Azul Escuro Profundo */
                    --footer-text: #94a3b8;     /* Cinza Claro */
                    --footer-title: #ffffff;    /* Branco */
                    --footer-accent: #f97316;   /* Laranja Vibrante */
                }

                .site-footer {
                    background-color: var(--footer-bg);
                    color: var(--footer-text);
                    font-family: 'Inter', sans-serif;
                    position: relative;
                    margin-top: auto; /* Ensures footer stays at bottom if content is short */
                }

                .footer-top-border {
                    background-color: var(--footer-accent);
                    height: 60px;
                    width: 100%;
                    margin-bottom: 40px;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 40px;
                    margin-bottom: 40px;
                }

                .footer-brand {
                    color: var(--footer-title);
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 15px;
                }

                .footer-desc {
                    font-size: 0.9rem;
                    line-height: 1.5;
                    max-width: 250px;
                }

                .footer-col h4 {
                    color: var(--footer-title);
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: 20px;
                }

                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-links li {
                    margin-bottom: 10px;
                }

                .footer-links a {
                    color: var(--footer-text);
                    text-decoration: none;
                    transition: color 0.2s;
                    font-size: 0.9rem;
                }

                .footer-links a:hover {
                    color: var(--footer-title);
                }

                .social-icons a {
                    color: var(--footer-title);
                    display: inline-block;
                    transition: opacity 0.2s;
                }

                .social-icons a:hover {
                    opacity: 0.8;
                }

                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 30px 0;
                    text-align: center;
                    font-size: 0.85rem;
                }
                
                /* Responsividade */
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    .footer-desc {
                        margin: 0 auto;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
