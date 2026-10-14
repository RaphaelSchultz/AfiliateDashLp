import { Check, ArrowRight, Mail } from 'lucide-react';
import { siteLinks } from '../components/redesign/siteLinks';

export default function ThankYou() {
  return <section className="thank-you-page"><div className="wrap">
    <div className="card welcome-card">
      <div className="success-icon"><Check size={30} strokeWidth={2} /></div>
      <span className="eyebrow">Seu próximo capítulo começa aqui</span>
      <h1>Pagamento <span className="serif">confirmado!</span></h1>
      <p className="lead">Agora, cada comissão tem uma história. Vamos descobrir de onde vem o seu próximo resultado?</p>
      <div className="access-note"><Mail size={22} /><div><h2>Verifique seu e-mail</h2><p>As instruções de acesso e suas credenciais foram enviadas para <strong>seu e-mail de cadastro</strong>. Você não precisa criar senha agora.</p></div></div>
      <a href={siteLinks.login} className="btn btn-primary">Ir para o Login <ArrowRight size={17} /></a>
      <a href={siteLinks.gmail} target="_blank" rel="noopener noreferrer" className="gmail-link">Abrir Gmail <ArrowRight size={15} /></a>
      <div className="welcome-foot">Comissões, anúncios e grupos. Tudo em um só lugar.</div>
    </div>
  </div></section>;
}
