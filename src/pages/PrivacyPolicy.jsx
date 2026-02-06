import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-white mb-8">Política de Privacidade</h1>
            <div className="prose prose-invert prose-orange max-w-none text-gray-300">
                <p>
                    A sua privacidade é importante para nós. É política do Afiliado Dash respeitar a sua privacidade em relação a qualquer
                    informação sua que possamos coletar no site Afiliado Dash, e outros sites que possuímos e operamos.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Coleta de Informações</h2>
                <p>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
                    Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos
                    coletando e como será usado.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Retenção de Dados</h2>
                <p>
                    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
                    Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos,
                    bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Compartilhamento de Dados</h2>
                <p>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cookies</h2>
                <p>
                    O nosso site pode usar cookies para melhorar a experiência do usuário. Você é livre para recusar a nossa solicitação de informações pessoais,
                    entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                </p>

                <div className="mt-12 p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-sm text-gray-400">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
