import { useEffect, useRef, useState } from 'react';

const PLAYER_ID = 'vid-69990efb80d622f3ef42b63b';
const PLAYER_SRC = 'https://scripts.converteai.net/e97af4fb-6abc-4093-b851-f7ad5a193ea2/players/69990efb80d622f3ef42b63b/v4/player.js';
const CLARITY_SRC = 'https://www.clarity.ms/tag/ttupejo85l';

export default function VideoPlayer() {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const player = ref.current;
    let timeout;
    const onReady = () => {
      setReady(true); setFailed(false); clearTimeout(timeout);
      player.displayHiddenElements?.(888, ['.esconder'], { persist: true });
    };
    const onError = () => setFailed(true);
    player.addEventListener('player:ready', onReady);
    if (!window.clarity) window.clarity = function (...args) { (window.clarity.q ||= []).push(args); };
    for (const src of [CLARITY_SRC, PLAYER_SRC]) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const script = document.createElement('script');
      script.src = src; script.async = true;
      document.head.appendChild(script);
    }
    const script = document.querySelector(`script[src="${PLAYER_SRC}"]`);
    script.addEventListener('error', onError);
    if (typeof player.displayHiddenElements === 'function') onReady();
    else timeout = window.setTimeout(onError, 20000);
    return () => { clearTimeout(timeout); player.removeEventListener('player:ready', onReady); script.removeEventListener('error', onError); };
  }, [attempt]);
  const retry = () => {
    document.querySelector(`script[src="${PLAYER_SRC}"]`)?.remove();
    setFailed(false); setReady(false); setAttempt(value => value + 1);
  };
  return <div className="video-stage rv">
    <div className="video-heading"><span className="eyebrow">Conheça a versão 2.0</span><h2>Veja o Afiliado Dash <span className="serif">em ação.</span></h2></div>
    <div className="video-frame"><vturb-smartplayer ref={ref} key={attempt} id={PLAYER_ID} style={{ display: 'block', margin: '0 auto', width: '100%' }} />
      {!ready && <div className="video-status" role="status">{failed ? <><p>Não foi possível carregar o vídeo agora.</p><button type="button" className="btn btn-ghost" onClick={retry}>Tentar novamente</button></> : <p>Carregando a apresentação…</p>}</div>}
    </div>
  </div>;
}
