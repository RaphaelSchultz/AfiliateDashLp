import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Como o AfiliadoDash difere do painel da Shopee?',
    a: 'O painel da Shopee é básico e focado apenas em mostrar vendas. O AfiliadoDash é focado em gestão e performance — rastreamento por SubID, integração com Meta Ads, automação de grupos de WhatsApp e dados históricos vitalícios. O painel da Shopee apaga seus dados após poucos meses.',
  },
  {
    q: 'Preciso instalar algo no meu computador?',
    a: 'Não. O AfiliadoDash é 100% online (na nuvem). Você pode acessar de qualquer computador, tablet ou celular, de qualquer lugar do mundo.',
  },
  {
    q: 'Como funciona a integração com a Shopee?',
    a: 'Usamos a API Oficial da Shopee para buscar seus dados de comissões, pedidos e cliques. Basta conectar sua conta uma única vez e todos os dados são sincronizados automaticamente.',
  },
  {
    q: 'Meus dados estão seguros?',
    a: 'Absolutamente. Utilizamos criptografia de ponta e servidores seguros. Seus dados de vendas e estratégias são estritamente confidenciais e usados apenas para gerar seus relatórios.',
  },
  {
    q: 'Posso usar para quantos links quiser?',
    a: 'Sim! Como Membro Fundador Pro, você tem criação e rastreamento de links ilimitados. Pode criar campanhas para centenas de produtos sem nenhuma restrição.',
  },
  {
    q: 'E se eu quiser cancelar?',
    a: 'Você pode cancelar quando quiser, sem burocracia. Nós não prendemos ninguém. Mas após ver seus resultados, acreditamos que você não vai querer cancelar.',
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`border-b border-slate-100 ${isOpen ? '' : ''}`}>
    <button
      className="w-full flex items-center justify-between py-5 text-left group"
      onClick={onClick}
    >
      <span className={`text-[15px] font-semibold transition-colors ${isOpen ? 'text-orange-500' : 'text-[#1D2939] group-hover:text-orange-500'}`}>
        {question}
      </span>
      <ChevronDown
        size={18}
        className={`text-slate-400 shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-500' : ''}`}
      />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-5' : 'max-h-0'}`}>
      <p className="text-[14px] text-[#7A7A7A] leading-relaxed">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="bg-white" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="max-w-[1054px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left heading */}
          <div className="lg:sticky lg:top-24">
            <span className="text-[11px] font-bold text-orange-500 uppercase tracking-wider block mb-3">Tira-dúvidas</span>
            <h2 className="text-[42px] font-semibold text-[#1D2939] leading-[1.1] mb-5">
              Perguntas
              <br />
              frequentes
            </h2>
            <p className="text-[15px] text-[#7A7A7A] leading-relaxed">
              Não encontrou o que procura? Fale com nosso suporte pelo WhatsApp — respondemos em minutos.
            </p>
          </div>

          {/* Right accordion */}
          <div>
            {faqs.map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.q}
                answer={item.a}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
