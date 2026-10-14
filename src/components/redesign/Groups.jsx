import ProductShot from './ProductShot';

export default function Groups() {
  return <section className="sec sec-line" id="grupos">
    <div className="wrap product-story">
      <div className="story-head">
        <div><span className="eyebrow rv"><i className="dot" />Grupos de WhatsApp</span><h2 className="h2 rv" data-d="1">Saiba qual grupo vende — <span className="serif">e pare de disparar no escuro</span></h2></div>
        <div className="rv" data-d="2"><p className="lead">Gerencie seus grupos, configure filas de envio e acompanhe os resultados. Veja a evolução dos envios junto das comissões atribuídas aos grupos.</p><div className="insight good"><span className="kpi-label">Envios e retorno no mesmo painel</span>Mais de <strong>74 mil envios</strong>, <strong>389 pedidos atribuídos</strong> e <strong>R$ 1.791,94 em comissões</strong> no período da captura.</div><a href="#planos" className="btn btn-dark">Criar minha fila de envio</a></div>
      </div>
      <figure className="card story-screen rv">
        <div className="screen-scroll" tabIndex={0} role="group" aria-label="Indicadores de grupos; role horizontalmente em telas pequenas"><ProductShot name="grupos" alt="Indicadores reais de grupos, com envios, comissões, pedidos e evolução de 1 a 14 de outubro de 2026" width="1145" height="690" /></div>
        <figcaption className="capture-note"><span className="dot" />WhatsApp · 01 a 14/10/2026<span className="mobile-scroll-hint"> · Deslize para explorar</span> · Abra para ampliar</figcaption>
      </figure>
    </div>
  </section>;
}
