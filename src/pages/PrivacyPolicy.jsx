import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-3xl font-bold text-neutral-darkCharcoal dark:text-white mb-2">Política de Privacidade</h1>
      <p className="text-sm text-neutral-charcoal/70 dark:text-gray-400 mb-8">Afiliado Dash · Última atualização: 20 de abril de 2026</p>

      <div className="prose dark:prose-invert prose-orange max-w-none text-neutral-charcoal dark:text-gray-300">
        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">1. Quem somos e escopo desta Política</h2>
        <p>
          Esta Política de Privacidade descreve como o Afiliado Dash trata dados pessoais no site afiliadodash.com, no aplicativo
          app.afiliadodash.com e em serviços relacionados.
        </p>
        <p>
          Para fins da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD), o Afiliado Dash atua como Controlador dos
          dados de conta, cadastro, cobrança e relacionamento com usuários da plataforma. Em cenários específicos de tratamento em nome
          de clientes, pode atuar como Operador, conforme instruções legítimas e limites contratuais.
        </p>
        <p>
          Esta Política se aplica ao tratamento realizado no contexto de cadastro, autenticação, uso de funcionalidades, integrações,
          automações, suporte técnico, segurança, prevenção a fraudes e conformidade legal.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">2. Disponibilização e atualizações da Política</h2>
        <p>
          Esta Política é disponibilizada em página própria e pode ser atualizada sempre que houver mudanças relevantes nas práticas de
          tratamento de dados, incluindo alterações relacionadas ao uso de integrações com plataformas terceiras.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">3. Veracidade das informações</h2>
        <p>
          As informações fornecidas pelo usuário devem ser verdadeiras, completas e atualizadas. Caso sejam identificadas informações
          inverídicas, o Afiliado Dash poderá adotar medidas cabíveis, inclusive restrição ou encerramento de conta, conforme os Termos
          de Uso e a legislação aplicável.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">4. O que são dados pessoais e dados sensíveis</h2>
        <p>
          Dados pessoais são informações relacionadas a pessoa natural identificada ou identificável. Dados pessoais sensíveis incluem,
          entre outros, dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida
          sexual, dado genético ou biométrico, conforme a LGPD.
        </p>
        <p>
          Em regra, o Afiliado Dash não exige dados pessoais sensíveis para uso dos serviços. Se houver tratamento desse tipo de dado em
          situações específicas, isso ocorrerá nos termos da legislação aplicável.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">5. Quais dados coletamos</h2>
        <p>Podemos tratar os seguintes tipos de dados:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Dados cadastrais: nome, e-mail, telefone/WhatsApp (quando informado), preferências e informações de perfil.</li>
          <li>Dados de autenticação e segurança: credenciais, sessões, registros de login e eventos de segurança.</li>
          <li>Dados de cobrança e assinatura: plano, status, identificadores de transação e dados necessários ao faturamento.</li>
          <li>Dados de uso e telemetria: IP, navegador, sistema operacional, identificadores técnicos, logs e trilhas de auditoria.</li>
          <li>Dados de conteúdo e operação: informações inseridas pelo usuário para uso das funcionalidades contratadas.</li>
          <li>Dados de integrações: tokens, chaves e metadados necessários para conectar e operar integrações autorizadas.</li>
        </ul>

        <h3 className="text-lg font-semibold text-neutral-darkCharcoal dark:text-white mt-6 mb-3">5.1 Dados de integrações com Instagram</h3>
        <p>
          Quando o usuário conecta contas via Instagram Graph API, podemos tratar dados do perfil, publicações, métricas, insights e
          tokens necessários para manter a conexão, sempre conforme permissões concedidas pelo próprio usuário.
        </p>

        <h3 className="text-lg font-semibold text-neutral-darkCharcoal dark:text-white mt-6 mb-3">5.2 Dados de integrações com Google e YouTube</h3>
        <p>
          Quando o usuário conecta contas via APIs Google (incluindo YouTube), podemos tratar dados básicos de perfil, dados de canal,
          vídeos, métricas agregadas e tokens de acesso/renovação, conforme escopos autorizados.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">6. Finalidades e bases legais do tratamento</h2>
        <p>Tratamos dados pessoais para:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Viabilizar acesso, autenticação e uso da plataforma.</li>
          <li>Executar funcionalidades contratadas, integrações, publicações, análises e automações.</li>
          <li>Gerenciar conta, assinatura, cobrança, suporte e relacionamento com o usuário.</li>
          <li>Garantir segurança, estabilidade, prevenção de fraudes e continuidade do serviço.</li>
          <li>Melhorar desempenho, qualidade e confiabilidade da plataforma.</li>
          <li>Cumprir obrigações legais, regulatórias e exercer direitos em processos.</li>
        </ul>
        <p>As bases legais aplicáveis podem incluir:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Execução de contrato e procedimentos preliminares.</li>
          <li>Consentimento, quando exigido (inclusive em autorizações OAuth de plataformas terceiras).</li>
          <li>Cumprimento de obrigação legal ou regulatória.</li>
          <li>Exercício regular de direitos.</li>
          <li>Legítimo interesse, quando cabível e proporcional.</li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">7. Uso permitido de dados de integrações</h2>
        <p>
          Dados obtidos de integrações com plataformas terceiras são usados exclusivamente para fornecer, manter e melhorar
          funcionalidades relacionadas à própria integração, em benefício do usuário.
        </p>
        <p>O Afiliado Dash não vende dados pessoais.</p>
        <p>Também não utiliza esses dados para:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Publicidade direcionada, retargeting ou criação de perfis para marketing de terceiros.</li>
          <li>Comercialização para corretores de dados ou revendedores de informação.</li>
          <li>Análise de crédito ou finalidade desconectada da prestação do serviço.</li>
          <li>Treinamento de modelos genéricos de IA com dados obtidos via APIs de plataformas terceiras.</li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">8. Compartilhamento de dados</h2>
        <p>Podemos compartilhar dados quando necessário com:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Provedores de infraestrutura, banco de dados, hospedagem, monitoramento e mensageria.</li>
          <li>Processadores de pagamento, serviços antifraude e faturamento.</li>
          <li>Ferramentas de analytics, preferencialmente com dados agregados, anonimizados ou pseudonimizados.</li>
          <li>Fornecedores de IA para execução de funcionalidades solicitadas pelo usuário, com minimização de dados.</li>
          <li>Parceiros de suporte, manutenção e desenvolvimento que atuem sob confidencialidade.</li>
          <li>Autoridades públicas, quando houver obrigação legal.</li>
        </ul>
        <p>
          Os terceiros relevantes são contratualmente obrigados a adotar medidas de segurança, confidencialidade e limitação de
          finalidade.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">9. Armazenamento e transferência internacional</h2>
        <p>
          O Afiliado Dash pode utilizar provedores que processam dados fora do Brasil. Nesses casos, adota salvaguardas contratuais,
          técnicas e organizacionais adequadas, nos termos da LGPD.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">10. Segurança da informação</h2>
        <p>Adotamos medidas técnicas e administrativas apropriadas, incluindo:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Criptografia em trânsito (HTTPS/TLS).</li>
          <li>Controles de acesso por perfil, necessidade e privilégio mínimo.</li>
          <li>Proteção e rotação de tokens de integração, quando aplicável.</li>
          <li>Logs de segurança, trilhas de auditoria e monitoramento operacional.</li>
          <li>Backups e procedimentos de continuidade.</li>
          <li>Planos de resposta a incidentes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">11. Processamento automático e IA</h2>
        <p>
          Podemos usar dados e instruções fornecidas pelo usuário para recomendar conteúdos, recursos, estratégias de publicação e gerar
          sugestões por IA, sempre para suporte às funcionalidades do serviço e sob responsabilidade de revisão do usuário antes da
          publicação.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">12. Retenção e exclusão de dados</h2>
        <p>
          Os dados são mantidos pelo tempo necessário para cumprir as finalidades desta Política e obrigações legais. Após esse período,
          realizamos eliminação, anonimização ou bloqueio, inclusive com ciclos técnicos de expurgo em backups quando aplicável.
        </p>
        <p>
          Ao desconectar integrações (como Google/YouTube ou Instagram) ou revogar permissões nas plataformas de origem, o Afiliado Dash
          deixa de acessar novos dados e envida esforços razoáveis para excluir ou anonimizar dados vinculados, observadas exigências
          legais e de auditoria.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">13. Direitos do titular</h2>
        <p>Nos termos da LGPD, o titular pode solicitar:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Confirmação da existência de tratamento.</li>
          <li>Acesso aos dados pessoais.</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
          <li>Anonimização, bloqueio ou eliminação, quando cabível.</li>
          <li>Portabilidade, quando aplicável.</li>
          <li>Informação sobre compartilhamentos.</li>
          <li>Informação sobre a possibilidade de não consentir e suas consequências, quando aplicável.</li>
          <li>Revogação do consentimento, quando essa for a base legal.</li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">14. Como exercer seus direitos</h2>
        <p>
          Solicitações relacionadas a privacidade e proteção de dados podem ser enviadas para dpo@afiliadodash.com. Para proteger os
          dados do titular e prevenir fraudes, podemos solicitar confirmação de identidade antes de atender à solicitação.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">15. Incidentes de segurança</h2>
        <p>
          Em caso de incidente com risco ou dano relevante, adotaremos medidas de contenção, investigação e comunicação conforme exigido
          pela legislação aplicável.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">16. Alterações desta Política</h2>
        <p>
          Esta Política pode ser atualizada periodicamente. Alterações relevantes serão comunicadas por meios razoáveis na plataforma,
          incluindo avisos no aplicativo e/ou contato por e-mail.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
