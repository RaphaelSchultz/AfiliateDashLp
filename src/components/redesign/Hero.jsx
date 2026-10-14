import { Typewriter } from './MotionElements';
import VideoPlayer from './VideoPlayer';
import ProductShot from './ProductShot';

export default function Hero({ video = false }) {
  return (
<section className="hero" id="inicio">
  <div className="wrap">
    <div className="chip rv"><b>API OFICIAL</b><span className="chip-logos"><img src="/images/redesign/shopee.png" alt="" decoding="async" loading="lazy" /><img src="/images/redesign/mercado-livre.png" alt="" decoding="async" loading="lazy" /><img src="/images/redesign/meta.png" alt="" decoding="async" loading="lazy" /><img src="/images/redesign/whatsapp.png" alt="" decoding="async" loading="lazy" /></span><span className="chip-full">Shopee · Mercado Livre · Meta Ads · WhatsApp</span></div>
    <h1 className="rv" data-d="1">Saiba exatamente quanto você lucra como afiliada <span className="typed-wrap serif"><Typewriter /><span className="caret" aria-hidden="true"></span></span></h1>
    <p className="lead rv" data-d="2">Comissões, SubIDs, anúncios do Meta e grupos de WhatsApp em um só painel. Você vê o que dá lucro, corta o que dá prejuízo e escala com número na mão — não no achismo.</p>
    <div className="hero-ctas rv" data-d="3">
      <a href="#planos" className="btn btn-primary">Criar minha conta
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
      <a href="#como-funciona" className="btn btn-ghost">Ver como funciona</a>
    </div>
    <div className="micro rv" data-d="3">
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Cancele quando quiser</span>
      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>100% online</span>
    </div>
    <div className="proof rv" data-d="4">
      <div><strong>R$ <span data-count="2" data-suffix="M+">0</span></strong><span>em comissões rastreadas</span></div>
      <div><strong><span data-count="10000" data-thousand="" data-suffix="+">0</span></strong><span>afiliados usando</span></div>
      <div><strong><span data-count="4.9" data-dec="1" data-comma="">0</span>/5</strong><span>avaliação média</span></div>
    </div>

    {video ? <VideoPlayer /> : (<div className="stage">
      <div className="window" id="window">
        <div className="window-bar"><i></i><i></i><i></i><span className="url"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><rect x="4" y="11" width="16" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>app.afiliadodash.com</span></div>
        <div className="window-shot"><ProductShot name="dashboard" alt="Dashboard real do Afiliado Dash, com indicadores e meta de 1 a 14 de outubro de 2026" width="1409" height="896" eager /></div>
      </div>
      <p className="capture-note hero-capture-note"><span className="dot" />Dashboard real do produto<span> · Abra a imagem para ampliar</span></p>
    </div>)}
  </div>
</section>
  );
}
