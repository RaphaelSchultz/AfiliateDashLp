
export default function Steps() {
  return (
<section className="sec sec-line" id="como-funciona">
  <div className="wrap">
    <div className="center">
      <span className="eyebrow rv"><i className="dot"></i>Como funciona</span>
      <h2 className="h2 rv" data-d="1">Do cadastro ao lucro real <span className="serif">em 3 passos</span></h2>
    </div>
    <div className="steps" id="steps">
      <div className="steps-line"><i></i></div>
      <div className="step">
        <div className="num">01</div>
        <h3>Conecte a Shopee</h3>
        <p>Pela API oficial, uma única vez. Comissões, pedidos e cliques passam a sincronizar sozinhos.</p>
        <div className="logos"><img src="/images/redesign/shopee.png" alt="Shopee" decoding="async" loading="lazy" /><img src="/images/redesign/mercado-livre.png" alt="Mercado Livre" decoding="async" loading="lazy" /></div>
      </div>
      <div className="step">
        <div className="num">02</div>
        <h3>Plugue Meta Ads e WhatsApp</h3>
        <p>Seus anúncios e grupos são cruzados automaticamente com as comissões de cada SubID.</p>
        <div className="logos"><img src="/images/redesign/meta.png" alt="Meta Ads" decoding="async" loading="lazy" /><img src="/images/redesign/whatsapp.png" alt="WhatsApp" decoding="async" loading="lazy" /></div>
      </div>
      <div className="step">
        <div className="num">03</div>
        <h3>Decida com número</h3>
        <p>Veja lucro real por campanha, grupo e link. Desligue o que perde, escale o que ganha.</p>
        <div className="logos"><img src="/images/redesign/logo.png" alt="Afiliado Dash" decoding="async" loading="lazy" /></div>
      </div>
    </div>
    <div className="center rv" style={{"marginTop": "48px"}}><a href="#planos" className="btn btn-primary">Começar agora
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div>
  </div>
</section>
  );
}
