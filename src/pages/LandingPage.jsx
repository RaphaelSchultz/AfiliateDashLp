import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import Hero from '../components/redesign/Hero';
import Integrations from '../components/redesign/Integrations';
import Pain from '../components/redesign/Pain';
import Proof from '../components/redesign/Proof';
import Steps from '../components/redesign/Steps';
import Features from '../components/redesign/Features';
import MetaAds from '../components/redesign/MetaAds';
import Groups from '../components/redesign/Groups';
import Comparison from '../components/redesign/Comparison';
import Calculator from '../components/redesign/Calculator';
import Pricing from '../components/redesign/Pricing';
import FinalCTA from '../components/redesign/FinalCTA';
import FAQ from '../components/redesign/FAQ';
import useLandingMotion from '../components/redesign/useLandingMotion';
import { sectionLinks, siteLinks } from '../components/redesign/siteLinks';

export default function LandingPage({ video = false }) {
  const ref = useRef(null);
  useLandingMotion(ref);
  return <div ref={ref} className="landing-page">
    <nav className="dots" aria-label="Seções">{sectionLinks.map(([id, label]) => <a href={`#${id}`} data-spy={id} key={id} aria-label={label}><span>{label}</span></a>)}</nav>
    <Hero video={video} /><Integrations /><Pain /><Proof /><Steps /><Features /><MetaAds /><Groups />
    <div id="detalhes" className="anchor-alias" /><Comparison /><Calculator />
    <div id="oferta" className="anchor-alias" /><Pricing /><FinalCTA /><FAQ />
    <a href={siteLinks.support} className="support-fab" aria-label="Falar com o suporte"><MessageCircle size={25} /></a>
    <div className="sticky"><span><b>Saiba de onde vem</b><br />cada comissão</span><a href="#planos" className="btn btn-primary">Criar conta</a></div>
  </div>;
}
