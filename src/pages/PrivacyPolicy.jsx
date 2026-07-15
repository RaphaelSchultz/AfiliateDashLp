import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const STORAGE_KEY = 'privacy_policy_locale';

const policy = {
  'pt-BR': {
    title: 'Política de Privacidade', updated: '5 de julho de 2026', language: 'Idioma da política',
    sections: [
      ['1. Quem somos', ['Esta Política descreve como o Afiliado Dash trata dados pessoais no site afiliadodash.com, no aplicativo app.afiliadodash.com e em serviços relacionados.', 'Para fins da LGPD, o Afiliado Dash atua como Controlador dos dados pessoais de conta e cobrança e, quando aplicável ao uso da plataforma para campanhas e integrações do cliente, pode atuar como Operador, conforme instruções do cliente e limites contratuais.', 'O canal oficial para dúvidas de privacidade, proteção de dados e identificação do responsável pelo tratamento é dpo@afiliadodash.com.']],
      ['2. Escopo desta Política', ['Esta Política se aplica ao cadastro, autenticação e gerenciamento de conta; funcionalidades, integrações e automações; Meta Ads; Extensão do Chrome para Shopee Brasil e Mercado Livre; suporte, segurança, prevenção de fraudes e conformidade legal.'], ['Também pode abranger outras integrações autorizadas pelo usuário, como Instagram, Google e YouTube, conforme as permissões concedidas.']],
      ['3. Dados que coletamos', ['Podemos tratar dados de cadastro, cobrança e assinatura, uso técnico e auditoria, dados enviados pelo usuário e tokens e metadados necessários para integrações autorizadas.'], ['Nome, e-mail, telefone/WhatsApp quando informado e credenciais de acesso;', 'Plano, status de pagamento e identificadores de transação;', 'Logs técnicos, IP, navegador, sistema operacional, eventos de uso e auditoria;', 'Dados de integrações autorizadas, incluindo perfil conectado, ativos, métricas e tokens necessários.', 'Não coletamos dados de fontes não autorizadas e não vendemos dados pessoais.']],
      ['4. Integração com Meta Ads', ['Quando você conecta Meta Ads, usamos permissões autorizadas exclusivamente para análise e gerenciamento de anúncios dentro da plataforma.'], ['Identificação básica do perfil conectado e Páginas relacionadas aos ativos administrados;', 'Contas de anúncio, campanhas, conjuntos, anúncios, orçamento, status e métricas de desempenho;', 'Alterações manuais solicitadas por você, como ativar ou pausar campanhas e editar orçamento.']],
      ['5. Limites de uso dos dados da Meta', ['O Afiliado Dash não publica conteúdo em Páginas, não envia mensagens, não cria campanhas automaticamente, não altera criativos e não executa ações de gerenciamento sem interação do usuário. Dados da Meta são usados apenas para sincronização, exibição de métricas, análise operacional e ações solicitadas manualmente.']],
      ['6. Extensão do Chrome', ['A Extensão do Chrome trata dados somente para detectar produtos da Shopee Brasil e do Mercado Livre na aba ativa, gerar links de afiliado/shortlinks, salvar links na conta e enviar produtos para filas ou grupos de WhatsApp escolhidos por você.'], ['Identificador de usuário, nome, e-mail, avatar e token de sessão da extensão;', 'URL da aba ativa em páginas suportadas e dados exibidos do produto, como título, imagem, preço, vendedor, categoria, identificador e link original;', 'No fluxo Mercado Livre iniciado por você, cookies de sessão, inclusive ssid quando presente, token CSRF, etiqueta de rastreamento e horário de captura, para conectar sua própria conta de afiliado e gerar links;', 'Slug, SubIDs, links gerados, filas e grupos de WhatsApp escolhidos para envio.']],
      ['7. Armazenamento e compartilhamento da extensão', ['A captura de cookies de sessão do Mercado Livre ocorre somente em página do Mercado Livre e após seu clique para gerar o token de autorização, com aviso prévio sobre os dados e sua finalidade.', 'Parte dos dados fica no armazenamento local do navegador. Dados necessários para gerar, salvar, validar e enviar links são transmitidos por HTTPS e podem ser armazenados pelo tempo necessário ao serviço, segurança, auditoria, suporte e obrigações legais.', 'Os dados podem ser compartilhados somente com a infraestrutura do Afiliado Dash, provedores de banco de dados e hospedagem, provedores de WhatsApp usados no envio solicitado e APIs das plataformas conectadas.']],
      ['8. Finalidades e bases legais', ['Tratamos dados para executar contrato e serviços solicitados, administrar conta, cobrança, autenticação e suporte, garantir segurança, prevenir abuso, cumprir obrigações legais, melhorar a confiabilidade da plataforma e executar integrações autorizadas. As bases legais aplicáveis podem incluir execução de contrato, cumprimento de obrigação legal, exercício regular de direitos, legítimo interesse e consentimento quando aplicável.']],
      ['9. Compartilhamento e subprocessadores', ['Podemos compartilhar dados com operadores e subprocessadores estritamente necessários, sob obrigações de segurança, confidencialidade e limitação de finalidade. As categorias incluem infraestrutura, banco de dados, mensageria, integrações, pagamentos, comunicação, autenticação, monitoramento e segurança operacional.']],
      ['10. Transferência internacional', ['Alguns fornecedores podem processar dados fora do Brasil. Nesses casos, adotamos salvaguardas contratuais e técnicas adequadas, em linha com a LGPD.']],
      ['11. Segurança da informação', ['Adotamos medidas técnicas e administrativas adequadas.'], ['Criptografia em trânsito por HTTPS/TLS e controles de acesso por permissão;', 'Registros de auditoria, monitoramento de segurança, autenticação e proteção de sessões;', 'Rotinas de backup, continuidade e resposta a incidentes.']],
      ['12. Incidentes de segurança', ['Em caso de incidente de segurança com risco ou dano relevante aos titulares, adotaremos medidas de contenção, investigação e comunicação conforme os requisitos legais aplicáveis.']],
      ['13. Retenção e exclusão', ['Mantemos dados pelo tempo necessário para finalidades legítimas, obrigações legais, defesa de direitos e execução contratual. Após o término da relação ou solicitação válida de exclusão, aplicamos eliminação, anonimização ou bloqueio, inclusive ciclos de expurgo de backups conforme janelas técnicas e exigências legais.']],
      ['14. Direitos do titular', ['Nos termos da LGPD, você pode solicitar confirmação, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento e revogação de consentimento quando essa for a base legal aplicável. Você também pode peticionar perante a ANPD.']],
      ['15. Como exercer seus direitos', ['Para solicitações LGPD, dúvidas de privacidade ou reporte de incidente relacionado a dados pessoais, entre em contato pelo canal oficial:'], [], 'dpo@afiliadodash.com'],
      ['16. Alterações nesta Política', ['Esta Política pode ser atualizada periodicamente para refletir mudanças legais, operacionais e técnicas. Alterações relevantes serão comunicadas por meios razoáveis na plataforma e/ou canais de contato.']],
    ],
  },
  'en-US': {
    title: 'Privacy Policy', updated: 'July 5, 2026', language: 'Policy language',
    sections: [
      ['1. Who we are', ['This Policy explains how Afiliado Dash processes personal data on afiliadodash.com, the app at app.afiliadodash.com, and related services.', 'For LGPD purposes, Afiliado Dash acts as Controller for account and billing data and, where applicable, as Processor for customer campaigns and integrations under customer instructions and contractual limits.', 'Our official privacy and data-protection channel is dpo@afiliadodash.com.']],
      ['2. Scope', ['This Policy covers account registration and authentication; product features, integrations and automations; Meta Ads; the Chrome Extension for Shopee Brazil and Mercado Livre; support, security, fraud prevention and legal compliance.'], ['It can also cover other user-authorized integrations, such as Instagram, Google, and YouTube, according to granted permissions.']],
      ['3. Data we collect', ['We may process registration, billing, subscription, technical-log, audit, user-submitted, and authorized-integration data.'], ['Name, email, phone/WhatsApp when provided, and access credentials;', 'Plan, payment status, and transaction identifiers;', 'Technical logs, IP address, browser, operating system, usage and audit events;', 'Authorized integration data, including connected profiles, assets, metrics, tokens, and metadata needed for the integration.', 'We do not collect data from unauthorized sources and do not sell personal data.']],
      ['4. Meta Ads integration', ['When you connect Meta Ads, granted permissions are used exclusively for advertising analytics and management features.'], ['Basic connected-profile identification and Pages related to managed advertising assets;', 'Ad accounts, campaigns, ad sets, ads, budget, status, and performance metrics;', 'Manual changes requested by you, such as enabling, pausing, or editing budgets.']],
      ['5. Limits on Meta data use', ['Afiliado Dash does not publish to Pages, send messages, create campaigns automatically, modify creatives, or perform management actions without user interaction. Meta data is used only for synchronization, metrics, operational analysis, and actions manually requested by the user.']],
      ['6. Chrome Extension', ['The Chrome Extension processes data only to detect Shopee Brazil and Mercado Livre products in the active tab, generate affiliate links/shortlinks, save links to the account, and send products to WhatsApp queues or groups selected by you.'], ['Connected-account data and extension session token;', 'Supported active-tab URLs and displayed product information;', 'In the user-initiated Mercado Livre flow, session cookies including ssid when present, CSRF token, tracking tag, and capture time, to connect the user’s own affiliate account and generate links;', 'Slug, SubIDs, generated links, queues, and WhatsApp groups selected for sending.']],
      ['7. Extension storage and sharing', ['Mercado Livre session-cookie capture happens only on a Mercado Livre page and after you click to generate the authorization token, following prior disclosure. Some data remains in local extension storage. Data needed to generate, save, validate, and send links is transmitted over HTTPS and retained as needed for service provision, security, auditing, support, and legal obligations.', 'Data may be shared only with Afiliado Dash infrastructure, database and hosting providers, WhatsApp providers used for requested sends, and connected-platform APIs.']],
      ['8. Purposes and legal bases', ['We process data to perform contracts and requested services; manage accounts, billing, authentication, and support; ensure security and legal compliance; improve reliability; and operate authorized integrations. Applicable legal bases may include contract performance, legal obligation, exercise of rights, legitimate interest, and consent where applicable.']],
      ['9. Sharing and subprocessors', ['Data may be shared with strictly necessary operators and subprocessors under security, confidentiality, and purpose-limitation obligations. Categories include infrastructure, databases, messaging, integrations, payments, communication, authentication, monitoring, and operational security.']],
      ['10. International transfers', ['Some providers may process data outside Brazil. In those cases, appropriate contractual and technical safeguards are adopted in line with the LGPD.']],
      ['11. Information security', ['We adopt appropriate technical and administrative measures.'], ['HTTPS/TLS encryption in transit and permission-based access controls;', 'Audit logs, security monitoring, authentication, and session protection;', 'Backup, continuity, and incident-response routines.']],
      ['12. Security incidents', ['For security incidents that create relevant risk or harm to data subjects, we take containment, investigation, and communication measures according to applicable legal requirements.']],
      ['13. Retention and deletion', ['Data is retained for legitimate purposes, legal obligations, defense of rights, and contract performance. After termination or a valid deletion request, we apply deletion, anonymization, or blocking procedures, including backup purge cycles according to technical windows and legal requirements.']],
      ['14. Data subject rights', ['Under the LGPD, you may request confirmation, access, correction, anonymization, blocking, deletion, portability, information about sharing, and withdrawal of consent when consent is the applicable legal basis. You may also petition the ANPD.']],
      ['15. How to exercise your rights', ['For LGPD requests, privacy questions, or reports of incidents involving personal data, contact our official channel:'], [], 'dpo@afiliadodash.com'],
      ['16. Changes to this Policy', ['This Policy may be updated to reflect legal, operational, and technical changes. Relevant changes will be communicated through reasonable means in the platform and/or contact channels.']],
    ],
  },
};

const normalizeLocale = (value) => ['en', 'en-us'].includes(value?.toLowerCase()) ? 'en-US' : ['pt', 'pt-br'].includes(value?.toLowerCase()) ? 'pt-BR' : null;

const PrivacyPolicy = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [locale, setLocale] = useState(() => normalizeLocale(searchParams.get('lang')) || normalizeLocale(localStorage.getItem(STORAGE_KEY)) || 'pt-BR');
  const document = policy[locale];

  useEffect(() => {
    const requested = normalizeLocale(searchParams.get('lang'));
    if (requested && requested !== locale) setLocale(requested);
  }, [locale, searchParams]);

  const changeLocale = (nextLocale) => {
    setLocale(nextLocale);
    localStorage.setItem(STORAGE_KEY, nextLocale);
    const params = new URLSearchParams(searchParams);
    params.set('lang', nextLocale === 'en-US' ? 'en' : 'pt-BR');
    setSearchParams(params, { replace: true });
  };

  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-darkCharcoal dark:text-white mb-2">{document.title}</h1>
          <p className="text-sm text-neutral-charcoal/70 dark:text-gray-400">Afiliado Dash · {locale === 'pt-BR' ? 'Última atualização' : 'Last updated'}: {document.updated}</p>
        </div>
        <div aria-label={document.language} role="group" className="inline-flex w-fit rounded-lg border border-neutral-charcoal/15 bg-white/70 p-1 dark:border-white/15 dark:bg-white/5">
          <button aria-pressed={locale === 'pt-BR'} onClick={() => changeLocale('pt-BR')} className={`rounded-md px-3 py-1.5 text-sm font-medium ${locale === 'pt-BR' ? 'bg-orange-500 text-white' : 'text-neutral-charcoal dark:text-gray-200'}`}>Português</button>
          <button aria-pressed={locale === 'en-US'} onClick={() => changeLocale('en-US')} className={`rounded-md px-3 py-1.5 text-sm font-medium ${locale === 'en-US' ? 'bg-orange-500 text-white' : 'text-neutral-charcoal dark:text-gray-200'}`}>English</button>
        </div>
      </div>
      <div className="prose prose-orange max-w-none text-neutral-charcoal dark:prose-invert dark:text-gray-300">
        {document.sections.map(([title, paragraphs = [], items = [], contact]) => (
          <section key={title} className="mt-8">
            <h2 className="mb-4 text-xl font-semibold text-neutral-darkCharcoal dark:text-white">{title}</h2>
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {items.length > 0 && <ul className="space-y-2 list-disc pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>}
            {contact && <a className="font-medium text-orange-600 hover:underline dark:text-orange-400" href={`mailto:${contact}`}>{contact}</a>}
          </section>
        ))}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
