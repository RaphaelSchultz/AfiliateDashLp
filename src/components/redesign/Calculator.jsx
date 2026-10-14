import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const brl = value => `R$ ${Math.round(value).toLocaleString('pt-BR')}`;
export default function Calculator() {
  const [values, setValues] = useState({ spend: 10000, share: 20, roas: .86 });
  const loss = values.spend * values.share / 100 * (1 - values.roas);
  const fields = [
    { id: 'spend', label: 'Quanto você investe por mês em Meta Ads', min: 500, max: 50000, step: 500, formatted: brl(values.spend) },
    { id: 'share', label: 'Parte da verba em campanhas no prejuízo', min: 0, max: 60, step: 5, formatted: `${values.share}%`, hint: 'Campanhas que devolvem menos do que custam.' },
    { id: 'roas', label: 'ROAS médio dessas campanhas', min: .3, max: .99, step: .01, formatted: values.roas.toFixed(2).replace('.', ','), hint: 'Na captura acima, a campanha Calça Skinny2 CP2 tem ROAS de 0,81.' },
  ];
  return <section className="sec sec-line" id="calculadora"><div className="wrap">
    <div className="center"><span className="eyebrow rv"><i className="dot" />Calculadora</span><h2 className="h2 rv" data-d="1">Quanto você está <span className="serif">perdendo sem ver?</span></h2><p className="lead rv section-intro" data-d="2">Ajuste com os seus números. Campanhas com ROAS abaixo de 1 devolvem menos do que custam — e sem o cruzamento de dados, elas continuam rodando.</p></div>
    <div className="card calc rv"><div className="calc-in">
      {fields.map(field => <div className="field" key={field.id}>
        <label htmlFor={field.id}>{field.label}<output htmlFor={field.id}>{field.formatted}</output></label>
        {field.hint && <small id={`${field.id}-hint`}>{field.hint}</small>}
        <input type="range" id={field.id} min={field.min} max={field.max} step={field.step} value={values[field.id]} aria-valuetext={field.formatted} aria-describedby={field.hint ? `${field.id}-hint` : undefined} style={{ '--p': `${(values[field.id] - field.min) / (field.max - field.min) * 100}%` }} onChange={event => setValues(previous => ({ ...previous, [field.id]: Number(event.target.value) }))} />
      </div>)}
    </div><div className="calc-out">
      <div aria-live="polite" aria-atomic="true"><div className="kpi-label">Prejuízo escondido por mês</div><div className="loss">{brl(loss)}</div><div className="loss-year">≈ {brl(loss * 12)} por ano</div></div>
      <div className="vs">{loss >= 97 ? <>O plano Start custa <strong>R$ 97/mês</strong>. Só de achar e desligar essas campanhas, ele se paga <strong>{(loss / 97).toFixed(1).replace('.', ',')}x</strong>.</> : <>Mesmo com pouco prejuízo em Ads, o painel te mostra <strong>qual SubID, grupo e link</strong> mais vende — é aí que está o próximo salto.</>}</div>
      <a href="#planos" className="btn btn-primary">Encontrar minhas campanhas no prejuízo<ArrowRight size={16} /></a><div className="calc-note">Simulação ilustrativa. O resultado real depende da sua operação.</div>
    </div></div>
  </div></section>;
}
