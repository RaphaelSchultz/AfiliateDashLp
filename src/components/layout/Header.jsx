import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { landingRoutes, siteLinks } from '../redesign/siteLinks';

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(window.scrollY > 12);
  const toggle = useRef(null);
  const ref = useRef(null);
  const base = landingRoutes.includes(pathname) ? '' : '/';
  const links = [['problema', 'Por que'], ['como-funciona', 'Como funciona'], ['funcionalidades', 'Funcionalidades'], ['planos', 'Planos'], ['faq', 'FAQ']];
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const dismiss = event => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
      if (event.type === 'pointerdown' && !ref.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', dismiss);
    return () => { document.removeEventListener('keydown', dismiss); document.removeEventListener('pointerdown', dismiss); };
  }, [open]);
  return <header className={`nav${scrolled || open ? ' scrolled' : ''}`} ref={ref}>
    <div className="wrap">
      <Link to={pathname === '/pv2' ? '/pv2' : '/'} className="logo" aria-label="Afiliado Dash — início"><img src="/images/redesign/logo.png" alt="" width="30" height="30" /><span>Afiliado <b>Dash</b></span></Link>
      <nav className="nav-links" aria-label="Principal">{links.map(([id, label]) => <Link key={id} to={`${base}#${id}`}>{label}</Link>)}</nav>
      <div className="nav-cta"><ThemeToggle /><a href={siteLinks.login}>Entrar</a><Link to={`${base}#planos`} className="btn btn-dark">Criar conta</Link><button className="menu-toggle" ref={toggle} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(value => !value)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
    </div>
    {open && <nav className="mobile-menu" id="mobile-menu" aria-label="Menu móvel">{links.map(([id, label]) => <Link key={id} to={`${base}#${id}`} onClick={() => setOpen(false)}>{label}</Link>)}<a href={siteLinks.login}>Entrar na minha conta</a></nav>}
  </header>;
}
