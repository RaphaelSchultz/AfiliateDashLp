import React from 'react';

const TermsOfUse = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-white mb-8">Termos de Uso</h1>
            <div className="prose prose-invert prose-orange max-w-none text-gray-300">
                <p>
                    Bem-vindo aos Termos de Uso do Afiliado Dash. Estes termos regem o uso da nossa plataforma e serviços.
                    Ao acessar ou usar nosso site, você concorda com estes termos.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Aceitação dos Termos</h2>
                <p>
                    Ao utilizar o Afiliado Dash, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis.
                    Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Licença de Uso</h2>
                <p>
                    É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Afiliado Dash,
                    apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Isenção de Responsabilidade</h2>
                <p>
                    Os materiais no site da Afiliado Dash são fornecidos 'como estão'. Afiliado Dash não oferece garantias, expressas ou implícitas,
                    e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de
                    comerciabilidade, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Limitações</h2>
                <p>
                    Em nenhum caso o Afiliado Dash ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação,
                    danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar
                    os materiais em Afiliado Dash.
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

export default TermsOfUse;
