import ProductShot from './ProductShot';

export default function MetaAds() {
  return <section className="sec sec-line" id="meta">
    <div className="wrap product-story">
      <div className="story-head">
        <div><span className="eyebrow rv"><i className="dot" />Meta Ads integrado</span><h2 className="h2 rv" data-d="1">Descubra qual campanha <span className="serif">te dá lucro</span> — e qual queima seu dinheiro</h2></div>
        <div className="rv" data-d="2"><p className="lead">O AfiliadoDash cruza seu investimento no Meta Ads com as comissões da Shopee. Gastos, comissões, lucro e ROAS aparecem lado a lado, por campanha.</p><div className="insight"><span className="kpi-label">Um exemplo na captura abaixo</span><strong>Calça Skinny2 CP2</strong>: ROAS de <strong>0,81</strong> e resultado de <strong>−R$ 294,16</strong>. O painel considera os custos para mostrar o que sobrou de verdade.</div></div>
      </div>
      <figure className="card story-screen rv">
        <div className="screen-scroll" tabIndex={0} role="group" aria-label="Campanhas; role horizontalmente em telas pequenas"><ProductShot name="meta-ads" alt="Campanhas reais de outubro: gastos, comissão, lucro e ROAS visíveis, sem cortes nas colunas" width="1145" height="842" /></div>
        <figcaption className="capture-note"><span className="dot" />Meta Ads · Outubro de 2026<span className="mobile-scroll-hint"> · Deslize para explorar</span> · Abra para ampliar</figcaption>
      </figure>
    </div>
  </section>;
}
