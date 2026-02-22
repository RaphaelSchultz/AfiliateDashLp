import { useEffect } from 'react';
import './LpNewVersion.css';

const CLARITY_TAG_ID = 'ttupejo85l';
const VTURB_PLAYER_ID = 'vid-69990efb80d622f3ef42b63b';
const VTURB_PLAYER_SRC = 'https://scripts.converteai.net/e97af4fb-6abc-4093-b851-f7ad5a193ea2/players/69990efb80d622f3ef42b63b/v4/player.js';
const DELAY_SECONDS = 888;

const ensureClarityScript = () => {
  if (!window.clarity) {
    window.clarity = function clarityCollector(...args) {
      window.clarity.q = window.clarity.q || [];
      window.clarity.q.push(args);
    };
  }

  const claritySrc = `https://www.clarity.ms/tag/${CLARITY_TAG_ID}`;
  const existingScript = document.querySelector(`script[src="${claritySrc}"]`);
  if (existingScript) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = claritySrc;
  document.head.appendChild(script);
};

const ensureVTurbScript = () => {
  const existingScript = document.querySelector(`script[src="${VTURB_PLAYER_SRC}"]`);
  if (existingScript) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = VTURB_PLAYER_SRC;
  document.head.appendChild(script);
};

export default function LpNewVersion() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'AfiliadoDash';

    ensureClarityScript();
    ensureVTurbScript();

    let intervalId;
    let readyHandler;
    let playerElement;

    const onVTurbReady = (callback) => {
      const foundPlayer = document.querySelector(`vturb-smartplayer#${VTURB_PLAYER_ID}`);
      if (foundPlayer) {
        callback(foundPlayer);
        return;
      }

      intervalId = window.setInterval(() => {
        const polledPlayer = document.querySelector(`vturb-smartplayer#${VTURB_PLAYER_ID}`);
        if (polledPlayer) {
          window.clearInterval(intervalId);
          callback(polledPlayer);
        }
      }, 200);
    };

    onVTurbReady((player) => {
      playerElement = player;
      readyHandler = () => {
        if (typeof player.displayHiddenElements === 'function') {
          player.displayHiddenElements(DELAY_SECONDS, ['.esconder'], { persist: true });
        }
      };

      player.addEventListener('player:ready', readyHandler);
    });

    return () => {
      document.title = previousTitle;
      if (intervalId) {
        window.clearInterval(intervalId);
      }
      if (playerElement && readyHandler) {
        playerElement.removeEventListener('player:ready', readyHandler);
      }
    };
  }, []);

  return (
    <div className="lp-newversion-page">
      <div className="alert-bar">
        {'N\u00C3O SAIA DESTA P\u00C1GINA - CONFIRA NOSSA NOVA ATUALIZA\u00C7\u00C3O.'}
      </div>

      <main className="wrap">
        <h1>
          Nosso dashboard foi atualizado.
          <br />
          <span className="t-yellow">{'Assista o v\u00EDdeo para conhecer a vers\u00E3o 2.0'}</span>
          <span className="emoji" role="img" aria-label="seta para baixo">
            &#x1F447;
          </span>
        </h1>

        <div className="video">
          <div className="player-shell">
            <vturb-smartplayer id={VTURB_PLAYER_ID} style={{ display: 'block', margin: '0 auto', width: '100%' }} />
          </div>
        </div>
      </main>
    </div>
  );
}
