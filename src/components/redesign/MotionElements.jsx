import { useEffect, useRef, useState } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    if (media.addEventListener) media.addEventListener('change', update);
    else media.addListener(update);
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', update);
      else media.removeListener(update);
    };
  }, []);
  return reduced;
}

export function Typewriter() {
  const reduced = useReducedMotion();
  const [text, setText] = useState('da Shopee');
  useEffect(() => {
    if (reduced) return;
    const words = ['da Shopee', 'do Mercado Livre'];
    let word = 0, position = words[0].length, deleting = true, timer;
    const tick = () => {
      position += deleting ? -1 : 1;
      setText(words[word].slice(0, position));
      let delay = deleting ? 50 : 80;
      if (position === 0) { deleting = false; word = (word + 1) % words.length; }
      else if (position === words[word].length) { deleting = true; delay = 2400; }
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, 2400);
    return () => window.clearTimeout(timer);
  }, [reduced]);
  return <><span className="sr-only">da Shopee e do Mercado Livre</span><span aria-hidden="true">{reduced ? 'da Shopee' : text}</span></>;
}

const statement = 'Foi exatamente por viver esses mesmos problemas que decidimos criar o AfiliadoDash — o painel que a gente queria ter tido desde o primeiro dia.';
export function FounderStatement() {
  return <h3 id="scrub" aria-label={statement}>{statement.split(' ').map((word, i) => <span key={i} aria-hidden="true"><span className={`w${word === 'AfiliadoDash' ? ' serif' : ''}`}>{word}</span>{' '}</span>)}</h3>;
}

export function QueueDemo() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [cycle, setCycle] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (reduced) return;
    let visible = false, timeout;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: .3 });
    observer.observe(ref.current);
    const interval = window.setInterval(() => {
      if (!visible || document.hidden) return;
      setCycle(value => value + 1);
      setShow(true);
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => setShow(false), 2600);
    }, 3800);
    return () => { observer.disconnect(); window.clearInterval(interval); window.clearTimeout(timeout); };
  }, [reduced]);
  const names = ['Abóbora #119', 'Diogo #109'];
  const sales = ['Grupo Afiliados #48 · R$ 100,71', 'Grupo Afiliados #49 · R$ 165,33', 'Grupo Afiliados #47 · R$ 46,48'];
  return <>
    <div className="queue" ref={ref} aria-label="Demonstração de filas de envio">
      <div className="kpi-label">Filas ativas</div>
      {[0, 1].map(index => <div className="q-item" key={`${cycle}-${index}`}>{names[(cycle + index) % 2]}<small><i className="dot" style={{ background: 'var(--accent)' }} />próx. 18:15</small></div>)}
    </div>
    <div className={`toast${show && !reduced ? ' show' : ''}`} aria-hidden="true"><img src="/images/redesign/whatsapp.png" alt="" /><div><b>Venda atribuída</b><div className="demo-sale">{sales[cycle % sales.length]}</div></div></div>
  </>;
}
