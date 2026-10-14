import { useState } from 'react';
import { questions } from './faqData';
import { siteLinks } from './siteLinks';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="sec sec-line" id="faq"><div className="wrap faq">
    <div><span className="eyebrow rv"><i className="dot" />Tira-dúvidas</span><h2 className="h2 rv" data-d="1">Perguntas <span className="serif">frequentes</span></h2><p className="lead rv" data-d="2">Não encontrou o que procura? Fale com nosso suporte.</p><a href={siteLinks.support} className="btn btn-ghost rv" data-d="3">Falar com o suporte</a></div>
    <div className="faq-list rv">{questions.map(([question, answer], index) => <div className={`qa${open === index ? ' open' : ''}`} key={question}>
      <button type="button" id={`faq-question-${index}`} aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(open === index ? null : index)}>{question}<i className="pm" aria-hidden="true" /></button>
      <div className="ans" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} aria-hidden={open !== index}><div><p>{answer}</p></div></div>
    </div>)}</div>
  </div></section>;
}
