import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-3xl font-bold text-neutral-darkCharcoal dark:text-white mb-2">Termos de Uso</h1>
      <p className="text-sm text-neutral-charcoal/70 dark:text-gray-400 mb-8">Afiliado Dash · Última atualização: 20 de abril de 2026</p>

      <div className="prose dark:prose-invert prose-orange max-w-none text-neutral-charcoal dark:text-gray-300">
        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">1. Aceitação</h2>
        <p>
          Bem-vindo ao Afiliado Dash. Estes Termos de Uso regulam o acesso e o uso da plataforma disponível em afiliadodash.com,
          app.afiliadodash.com e serviços relacionados.
        </p>
        <p>
          Ao acessar ou utilizar o Afiliado Dash, você declara que leu, compreendeu e concorda com estes Termos de Uso e com a Política
          de Privacidade. Se não concordar, não utilize os serviços.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">2. Objeto dos serviços</h2>
        <p>
          O Afiliado Dash é uma plataforma SaaS para gestão de dados, integrações, automações, análises, relatórios e operação de
          conteúdo digital para afiliados e equipes.
        </p>
        <p>Podemos alterar, evoluir, suspender ou descontinuar funcionalidades, com aviso prévio razoável quando possível.</p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">3. Conta do usuário</h2>
        <p>Para utilizar os serviços, você deve:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Fornecer informações verdadeiras e atualizadas.</li>
          <li>Proteger suas credenciais de acesso e não compartilhá-las indevidamente.</li>
          <li>Notificar imediatamente suspeitas de uso não autorizado.</li>
        </ul>
        <p>Você é responsável pelas atividades realizadas em sua conta, salvo prova de uso indevido por terceiros sem sua culpa.</p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">4. Condutas proibidas</h2>
        <p>É proibido:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Criar contas falsas, automatizadas ou com identidade de terceiros sem autorização.</li>
          <li>Realizar engenharia reversa, descompilar, copiar ou modificar o software sem autorização.</li>
          <li>Tentar acesso indevido, burlar mecanismos de segurança, quotas ou degradar a infraestrutura.</li>
          <li>Usar o serviço para spam, fraude, phishing, conteúdo ilícito ou violação de direitos de terceiros.</li>
          <li>Utilizar a plataforma em desacordo com leis aplicáveis e com políticas de plataformas integradas.</li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">5. Conexão com plataformas terceiras</h2>
        <p>Ao conectar contas externas, você:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Autoriza o acesso aos dados permitidos pelas APIs oficiais, conforme escopos concedidos.</li>
          <li>Reconhece que integrações dependem de serviços e políticas de terceiros.</li>
          <li>Concorda que tokens e permissões serão armazenados com controles de segurança para manter a integração ativa.</li>
        </ul>
        <p>
          Mudanças, limitações, indisponibilidades ou bloqueios em serviços externos podem afetar funcionalidades do Afiliado Dash.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">6. Conteúdo e responsabilidade do usuário</h2>
        <p>Você é exclusivamente responsável pelo conteúdo gerado, enviado, publicado ou gerenciado via plataforma, incluindo:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Conformidade legal e regulatória.</li>
          <li>Direitos autorais e de propriedade intelectual.</li>
          <li>Base legal para tratamento de dados pessoais e comunicações.</li>
          <li>Revisão de conteúdo assistido por IA antes do uso/publicação.</li>
        </ul>
        <p>É proibido usar a plataforma para conteúdo ilícito, discriminatório, ofensivo, fraudulento ou que viole direitos de terceiros.</p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">7. Uso de inteligência artificial</h2>
        <p>
          O Afiliado Dash pode usar recursos de IA para apoiar criação, adaptação e sugestão de conteúdo. O conteúdo gerado é
          disponibilizado como apoio e deve ser validado pelo usuário antes da publicação.
        </p>
        <p>
          O usuário é o responsável final por todo conteúdo publicado. Dados obtidos via APIs de plataformas terceiras não são usados
          para treinamento de modelos genéricos de IA.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">8. Planos, cobrança e reajustes</h2>
        <p>Planos podem ter limites e funcionalidades diferentes.</p>
        <p>
          Valores, periodicidade e condições comerciais constam no fluxo de contratação e podem ser atualizados com aviso prévio
          razoável.
        </p>
        <p>
          Em caso de inadimplência, podemos restringir funcionalidades, suspender ou encerrar o acesso, conforme regras contratuais e
          legais.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">9. Limites de uso e quotas</h2>
        <p>Os planos podem limitar, por exemplo:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Quantidade de contas conectadas.</li>
          <li>Número de publicações, agendamentos, automações e requisições.</li>
          <li>Volume de dados, projetos, membros e workspaces.</li>
        </ul>
        <p>Podemos suspender uso que exceda limites contratados ou comprometa estabilidade e segurança da plataforma.</p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">10. Disponibilidade e manutenção</h2>
        <p>Empregamos esforços razoáveis para manter disponibilidade e segurança, mas podem ocorrer interrupções por:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Manutenção programada ou emergencial.</li>
          <li>Incidentes técnicos.</li>
          <li>Força maior.</li>
          <li>Dependências de terceiros.</li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">11. Propriedade intelectual</h2>
        <p>
          O software, marca, interface, fluxos, algoritmos, templates e materiais da plataforma pertencem ao Afiliado Dash, sendo
          concedida ao usuário licença limitada, não exclusiva, intransferível e revogável para uso durante a vigência da contratação.
        </p>
        <p>
          O usuário mantém a titularidade de seu próprio conteúdo, concedendo licença necessária para processamento, armazenamento e
          exibição estritamente para prestação dos serviços.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">12. Privacidade e proteção de dados</h2>
        <p>
          O tratamento de dados pessoais segue a Política de Privacidade do Afiliado Dash e a legislação aplicável, incluindo a LGPD.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">13. Suspensão e rescisão</h2>
        <p>Podemos suspender ou encerrar contas em caso de:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Violação destes Termos.</li>
          <li>Risco técnico, operacional, de segurança, fraude ou descumprimento legal.</li>
          <li>Inadimplência não regularizada.</li>
          <li>Uso abusivo, ilícito ou que comprometa terceiros.</li>
        </ul>
        <p>O usuário também pode solicitar cancelamento a qualquer momento.</p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">14. Garantias e limitações de responsabilidade</h2>
        <p>
          Na extensão permitida por lei, o serviço é fornecido no estado em que se encontra e conforme disponibilidade, sem garantia de
          ausência de erros, indisponibilidades ou resultados específicos de negócio.
        </p>
        <p>O Afiliado Dash não responde por:</p>
        <ul className="space-y-2 list-disc pl-5 text-neutral-charcoal dark:text-gray-300">
          <li>Danos indiretos, lucros cessantes, perda de oportunidade, reputação ou dados.</li>
          <li>Decisões de negócio tomadas com base nos dados da plataforma.</li>
          <li>Falhas causadas por terceiros integrados ou por uso indevido do usuário.</li>
        </ul>
        <p>
          Para danos diretos comprovados e atribuíveis ao Afiliado Dash, a responsabilidade total fica limitada ao montante pago pelo
          usuário nos 12 meses anteriores ao evento, exceto quando a lei vedar tal limitação.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">15. Alterações dos Termos</h2>
        <p>
          Podemos atualizar estes Termos periodicamente. Alterações relevantes serão comunicadas por meios razoáveis. O uso continuado
          após a vigência da nova versão representa aceitação.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">16. Lei aplicável e resolução de disputas</h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. As partes buscarão, sempre que possível, solução
          amigável para eventuais disputas antes da adoção de medidas judiciais.
        </p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">17. Disposições gerais</h2>
        <p>
          Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais permanecerão em pleno vigor. A omissão
          no exercício de qualquer direito não constitui renúncia.
        </p>
        <p>Estes Termos, junto com a Política de Privacidade, constituem o acordo integral sobre uso dos serviços.</p>

        <h2 className="text-xl font-semibold text-neutral-darkCharcoal dark:text-white mt-8 mb-4">18. Contato</h2>
        <p>
          Dúvidas jurídicas e privacidade: dpo@afiliadodash.com<br />
          Suporte geral: suporte@afiliadodash.com
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
