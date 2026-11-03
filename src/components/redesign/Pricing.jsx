import { plans } from '../pricing/plansData';

export default function Pricing() {
  return (
<section className="sec sec-line" id="planos">
  <div className="wrap">
    <div className="center">
      <span className="eyebrow rv"><i className="dot"></i>Planos</span>
      <h2 className="h2 rv" data-d="1">Um plano que se paga com <span className="serif">uma</span> decisão certa</h2>
      <p className="lead rv" data-d="2" style={{"maxWidth": "600px", "margin": "22px auto 0"}}>Se o Afiliado Dash te ajudar a desligar uma única campanha no prejuízo ou a achar o grupo que mais vende, ele já se pagou.</p>
    </div>
    <div className="plans">
      <article className="card plan rv">
        <div className="name">START</div>
        <div className="for">Para quem está começando a escalar</div>
        <div className="price"><span className="cur">R$</span><span className="n">97</span><span className="per">,00/mês</span></div>
        <div className="day">≈ R$ 3,23 por dia</div>
        <a href={plans[0].ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Assinar Start</a>
        <div className="base">Inclui:</div>
        <ul>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Dashboard Completo</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>10 Links de redirecionamento</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Integração com API Shopee</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Integração com Meta Ads</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Campanhas ilimitadas</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>1 conta de anúncios</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>1.000 pedidos trackeados do Meta</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Integração com WhatsApp</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>5 grupos de WhatsApp</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>1 número de WhatsApp*</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Tracker de vendas por grupo**</li>
        </ul>
        <div className="notes">* R$ 129,00 por número adicional<br />** R$ 50,00 adicional por tracker de vendas</div>
      </article>
      <article className="card plan rv" data-d="1">
        <div className="name">LIGHT</div>
        <div className="for">Para quem já roda anúncios e grupos</div>
        <div className="price"><span className="cur">R$</span><span className="n">147</span><span className="per">,00/mês</span></div>
        <div className="day">≈ R$ 4,90 por dia</div>
        <a href={plans[1].ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Assinar Light</a>
        <div className="base">Tudo do Start, mais:</div>
        <ul>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>30 Links de redirecionamento</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>2 contas de anúncios</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>3.000 pedidos trackeados do Meta</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>10 grupos de WhatsApp</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>1 número de WhatsApp*</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Tracker de vendas por grupo**</li>
        </ul>
        <div className="notes">* R$ 129,00 por número adicional<br />** R$ 50,00 adicional por tracker de vendas</div>
      </article>
      <article className="card plan rv" data-d="2">
        <div className="name">PLUS</div>
        <div className="for">Para operações com várias contas de anúncio</div>
        <div className="price"><span className="cur">R$</span><span className="n">247</span><span className="per">,00/mês</span></div>
        <div className="day">≈ R$ 8,23 por dia · tracker incluso</div>
        <a href={plans[2].ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Assinar Plus</a>
        <div className="base">Tudo do Light, mais:</div>
        <ul>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>50 Links de redirecionamento</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>5 contas de anúncios</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>10.000 pedidos trackeados do Meta</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>30 grupos de WhatsApp</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>1 número de WhatsApp*</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Tracker de vendas por grupo incluso</li>
        </ul>
        <div className="notes">* R$ 129,00 por número adicional</div>
      </article>
      <article className="card plan rv" data-d="3">
        <div className="name">MAX</div>
        <div className="for">Para operações sem limite</div>
        <div className="price"><span className="cur">R$</span><span className="n">447</span><span className="per">,00/mês</span></div>
        <div className="day">≈ R$ 14,90 por dia · links e grupos ilimitados</div>
        <a href={plans[3].ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Assinar Max</a>
        <div className="base">Tudo do Plus, mais:</div>
        <ul>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Links de redirecionamento ilimitados</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>5 contas de anúncios</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>25.000 pedidos trackeados do Meta</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Grupos de WhatsApp ilimitados</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>2 números de WhatsApp*</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Tracker de vendas por grupo incluso</li>
        </ul>
        <div className="notes">* R$ 109,00 por número adicional</div>
      </article>
    </div>
    <div className="assure rv">
      <span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>Sem fidelidade — cancele quando quiser</span>
      <span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>Dados criptografados e confidenciais</span>
      <span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z"></path></svg>Suporte pelo WhatsApp</span>
    </div>
  </div>
</section>
  );
}
