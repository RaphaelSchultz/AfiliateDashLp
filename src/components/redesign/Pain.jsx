import { FounderStatement } from './MotionElements';

export default function Pain() {
  return (
<section className="sec" id="problema">
  <div className="wrap">
    <div className="center">
      <span className="eyebrow rv"><i className="dot"></i>O problema</span>
      <h2 className="h2 rv" data-d="1">Você vende todo dia.<br />Mas sabe <span className="serif">de onde vem</span> o dinheiro?</h2>
      <p className="lead rv" data-d="2" style={{"maxWidth": "600px", "margin": "22px auto 0"}}>A maioria dos afiliados escala no escuro. Se você se reconhece em pelo menos um desses pontos, está deixando dinheiro na mesa.</p>
    </div>
    <div className="pain-grid">
      <article className="card pain rv"><div className="n">01</div><h3>Planilha no fim do mês</h3><p>Você exporta relatório, cruza no Excel e mesmo assim a conta não fecha.</p></article>
      <article className="card pain rv" data-d="1"><div className="n">02</div><h3>Histórico que some</h3><p>O painel da Shopee apaga seus dados depois de poucos meses. Sem histórico, não dá pra comparar nada.</p></article>
      <article className="card pain rv" data-d="2"><div className="n">03</div><h3>Anúncio rodando no escuro</h3><p>O Meta cobra no cartão, a Shopee paga a comissão — e ninguém te diz se aquela campanha deu lucro.</p></article>
      <article className="card pain rv"><div className="n">04</div><h3>Grupo que não vende</h3><p>Você dispara a mesma oferta em todos os grupos sem saber qual realmente converte — e gasta energia onde não volta.</p></article>
      <article className="card pain rv" data-d="1"><div className="n">05</div><h3>Comissão sem origem</h3><p>Link sem SubID vira venda órfã: entra dinheiro, mas você não sabe o que repetir para vender mais.</p></article>
    </div>

    <div className="founder">
      <span className="eyebrow rv">Por que existimos</span>
      <FounderStatement />
      <p className="lead rv">Um painel pensado para afiliados que vivem operação de verdade: comissões, pedidos, SubIDs, anúncios e grupos em uma única visão clara para decidir mais rápido.</p>
    </div>
  </div>
</section>
  );
}
