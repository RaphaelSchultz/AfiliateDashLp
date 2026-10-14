import ProductShot from './ProductShot';

export default function Proof() {
  return <section className="sec sec-line proof-sec" id="prova">
    <div className="wrap">
      <div className="feat-head">
        <div><span className="eyebrow rv"><i className="dot" />Na prática</span><h2 className="h2 rv" data-d="1">Seus SubIDs mostram <span className="serif">o que repetir</span> — e o que está escapando</h2></div>
        <p className="rv" data-d="2">Dois detalhes da tela real, ampliados para você enxergar o que importa. Dados de 1 a 14 de outubro de 2026.</p>
      </div>
      <div className="subid-evidence">
        <figure className="card evidence-card rv">
          <div className="evidence-heading"><span>01 / Encontre o que funciona</span><h3>Compare seus canais e criativos.</h3></div>
          <ProductShot name="subid1" alt="Ranking real de SubID 1: gerenciador lidera com R$ 12.951,26" width="371" height="322" />
          <figcaption><strong>R$ 12.951,26 em comissão.</strong> O SubID “gerenciador” gerou quase quatro vezes o segundo colocado. Um ponto de partida para investigar o que vale repetir.</figcaption>
        </figure>
        <figure className="card evidence-card rv" data-d="1">
          <div className="evidence-heading"><span>02 / Identifique o que falta</span><h3>Dê nome a cada variação.</h3></div>
          <ProductShot name="subid3" alt="Ranking real de SubID 3: R$ 26.948,23 sem identificação nesse nível" width="371" height="322" />
          <figcaption><strong>R$ 26.948,23 sem SubID de nível 3.</strong> Ao preencher esse nível nos seus links, você consegue comparar também cada variação e teste.</figcaption>
        </figure>
      </div>
    </div>
  </section>;
}
