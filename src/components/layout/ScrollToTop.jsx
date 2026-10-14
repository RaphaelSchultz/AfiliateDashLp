import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const titles = { '/terms': 'Termos de Uso', '/privacy': 'Política de Privacidade', '/obrigado': 'Pagamento confirmado', '/lp-newversion': 'Conheça a versão 2.0', '/lp-newversion-2': 'Conheça a versão 2.0' };
    document.title = titles[pathname] ? `${titles[pathname]} — Afiliado Dash` : 'Afiliado Dash — Saiba exatamente quanto você lucra como afiliada';
    if (!hash) { window.scrollTo({ top: 0, behavior: 'instant' }); return; }
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const scroll = () => {
      const target = document.getElementById(id);
      if (!target) return false;
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      return true;
    };
    if (scroll()) return;
    // Lazy routes can mount after this effect. Disconnect as soon as the anchor exists.
    const observer = new MutationObserver(() => { if (scroll()) observer.disconnect(); });
    observer.observe(document.getElementById('root'), { childList: true, subtree: true });
    const timeout = window.setTimeout(() => observer.disconnect(), 10000);
    return () => { observer.disconnect(); window.clearTimeout(timeout); };
  }, [pathname, hash]);
  return null;
}
