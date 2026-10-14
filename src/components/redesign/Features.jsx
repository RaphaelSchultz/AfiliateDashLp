import ProductGallery from './ProductGallery';


export default function Features() {
  return (
<section className="sec sec-line" id="funcionalidades">
  <div className="wrap">
    <div className="feat-head">
      <div>
        <span className="eyebrow rv"><i className="dot"></i>Funcionalidades</span>
        <h2 className="h2 rv" data-d="1">Tudo que a sua operação precisa, <span className="serif">num lugar só</span></h2>
      </div>
      <p className="rv" data-d="2">A plataforma mais completa para afiliados que querem escalar e centralizar sua operação — sem pular entre 5 abas e 3 planilhas.</p>
    </div>

    <ProductGallery />

    <div className="grid9">
      <div className="g rv"><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg></span><div><h4>Análise do Dia</h4><p>Resumo diário claro para entender desempenho e tomar decisões rápidas.</p></div></div>
      <div className="g rv" data-d="1"><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 9 5 12 1.8-5.2L21 14Z"></path><path d="M7.2 2.2 8 5.1M5.1 8l-2.9-.8M14 4.1 12 6.2M6.2 12l-2.1 2"></path></svg></span><div><h4>Análise de Cliques</h4><p>Mostra de onde vêm os cliques que realmente viram resultado.</p></div></div>
      <div className="g rv" data-d="2"><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></span><div><h4>Integração Facebook Ads</h4><p>Investimento e retorno de cada campanha, lado a lado.</p></div></div>
      <div className="g rv"><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"></path></svg></span><div><h4>Gerador de Links</h4><p>Links prontos para divulgar, já com SubID, em muito menos tempo.</p></div></div>
      <div className="g rv" data-d="1"><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M7 16v-4M12 16V8M17 16V9"></path></svg></span><div><h4>Análise de Links</h4><p>Compara links e identifica quais geram mais retorno.</p></div></div>
      <div className="g rv" data-d="2"><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><path d="M3 6h18M16 10a4 4 0 0 1-8 0"></path></svg></span><div><h4>Shopee + Mercado Livre</h4><p>Os dois marketplaces no mesmo painel, sincronizados sem esforço.</p></div></div>
      <div className="g rv"><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z"></path></svg></span><div><h4>Integração WhatsApp</h4><p>Distribua ofertas com filas automáticas e ganhe horas no dia.</p></div></div>
      <div className="g rv" data-d="1"><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg></span><div><h4>Histórico vitalício</h4><p>Seus dados ficam guardados. Compare meses e anos, não só semanas.</p></div></div>
      <div className="g rv" data-d="2"><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"></rect><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4zM17.5 6.5h.01"></path></svg></span><div><h4>Insta Flow <span className="soon">EM BREVE</span></h4><p>Fluxo dedicado para Instagram, focado em crescimento e conversão.</p></div></div>
    </div>
  </div>
</section>
  );
}
