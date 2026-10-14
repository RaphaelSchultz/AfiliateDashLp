import { Link, useLocation } from 'react-router-dom';
import { landingRoutes, siteLinks } from '../redesign/siteLinks';

export default function Footer() {
  const { pathname } = useLocation();
  const base = landingRoutes.includes(pathname) ? '' : '/';
  return <footer><div className="wrap"><div className="foot">
    <div><Link to="/" className="logo"><img src="/images/redesign/logo.png" width="30" height="30" alt="" /><span>Afiliado <b>Dash</b></span></Link><p>A plataforma completa para gestão e análise de comissões, links e grupos de WhatsApp para afiliados Shopee e Mercado Livre.</p><a href={siteLinks.status} className="live status-link"><i className="dot" />Status do sistema</a></div>
    <div className="cols">
      <div><span>Produto</span><Link to={`${base}#funcionalidades`}>Funcionalidades</Link><Link to={`${base}#detalhes`}>Diferenciais</Link><Link to={`${base}#oferta`}>Preços</Link><Link to={`${base}#faq`}>Roadmap</Link></div>
      <div><span>Empresa</span><Link to={`${base}#inicio`}>Sobre Nós</Link><a href={siteLinks.support}>Contato</a><a href={siteLinks.support}>Instagram</a></div>
      <div><span>Suporte</span><a href={siteLinks.support}>Documentação</a><a href={siteLinks.support}>Central de Ajuda</a><a href={siteLinks.status}>Status do Sistema</a><Link to={siteLinks.terms}>Termos de Uso</Link></div>
    </div>
  </div><div className="legal"><span>© {new Date().getFullYear()} AfiliadoDash. Todos os direitos reservados.</span><span className="legal-links"><Link to={siteLinks.privacy}>Privacidade</Link><Link to={siteLinks.terms}>Termos</Link></span></div></div></footer>;
}
