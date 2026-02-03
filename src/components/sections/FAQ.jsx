import React, { useState } from 'react';
import AccordionItem from '../ui/AccordionItem';

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <section className="py-24 px-6 bg-[#080c17] border-t border-white/5">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    Dúvidas Frequentes
                </h2>

                <div className="space-y-2">
                    {[
                        {
                            q: "Como o Afiliate Dash difere do painel da Shopee?",
                            a: "O painel da Shopee é básico e focado apenas em mostrar vendas. O Afiliate Dash é focado em gestão e performance. Nós mostramos métricas que eles não mostram (como latência de clique, ROI real, lucro líquido por SubID) e, o mais importante: guardamos seus dados para sempre, enquanto eles apagam após alguns meses."
                        },
                        {
                            q: "Preciso instalar algo no meu computador?",
                            a: "Não. O Afiliate Dash é 100% online (na nuvem). Você pode acessar de qualquer computador, tablet ou celular, de qualquer lugar do mundo."
                        },
                        {
                            q: "Meus dados estão seguros?",
                            a: "Absolutamente. Utilizamos criptografia de ponta e servidores seguros. Seus dados de vendas e estratégias são estritamente confidenciais e usados apenas para gerar seus relatórios."
                        },
                        {
                            q: "Posso usar para quantos links quiser?",
                            a: "Sim! Como Membro Fundador, você tem criação e rastreamento de links ILIMITADOS. Pode criar campanhas para centenas de produtos sem restrições."
                        }
                    ].map((item, idx) => (
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
        </section>
    );
};

export default FAQ;
