import { useRef, useState } from 'react';
import { BarChart3, Target, Megaphone, Users } from 'lucide-react';
import ProductShot from './ProductShot';

const screens = [
  { id: 'overview', label: 'Dashboard', icon: BarChart3, title: 'Sua operação, à primeira vista.', description: 'Vendas, comissões, metas e origens no mesmo painel. Compare os resultados e encontre o próximo passo.', width: 1145, height: 753 },
  { id: 'metas', label: 'Metas e bônus', icon: Target, title: 'Saiba quanto falta para chegar lá.', description: 'Acompanhe a meta do mês, as faixas de bônus e o volume necessário por dia. Tudo calculado na tela.', width: 1145, height: 421 },
  { id: 'meta-ads', label: 'Meta Ads', icon: Megaphone, title: 'Cada campanha com o seu resultado.', description: 'Gastos, comissão, lucro e ROAS lado a lado. Personalize as colunas para enxergar o que importa.', width: 1145, height: 842 },
  { id: 'grupos', label: 'WhatsApp', icon: Users, title: 'Conecte seus envios às suas vendas.', description: 'Veja pedidos atribuídos, comissões e a evolução dos grupos no período selecionado.', width: 1145, height: 690 },
];

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const screen = screens[active];
  const onKeyDown = event => {
    let next = active;
    if (event.key === 'ArrowRight') next = (active + 1) % screens.length;
    else if (event.key === 'ArrowLeft') next = (active + screens.length - 1) % screens.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = screens.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };
  return <div className="product-gallery rv">
    <div className="gallery-tabs" role="tablist" aria-label="Explore o produto" onKeyDown={onKeyDown}>
      {screens.map(({ id, label, icon: Icon }, index) => <button key={id} ref={element => { tabs.current[index] = element; }} type="button" role="tab" id={`tab-${id}`} aria-selected={active === index} aria-controls={`screen-${id}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)}><Icon size={19} aria-hidden="true" />{label}</button>)}
    </div>
    <div role="tabpanel" id={`screen-${screen.id}`} aria-labelledby={`tab-${screen.id}`} tabIndex={0} className="gallery-panel" key={screen.id}>
      <div className="gallery-intro"><h3>{screen.title}</h3><p>{screen.description}</p></div>
      <div className="screen-scroll" tabIndex={0} role="group" aria-label="Captura do produto; role horizontalmente para explorar em telas pequenas">
        <ProductShot name={screen.id} alt={`Tela real de ${screen.label} na nova versão do Afiliado Dash`} width={screen.width} height={screen.height} />
      </div>
      <p className="capture-note"><span className="dot" />Captura real do produto<span className="mobile-scroll-hint"> · Deslize para explorar</span><span> · Abra a imagem para ampliar</span></p>
    </div>
  </div>;
}
