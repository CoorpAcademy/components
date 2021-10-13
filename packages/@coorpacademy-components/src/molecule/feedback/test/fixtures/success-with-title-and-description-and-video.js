import {JWPLAYER_SCRIPT_URL} from '../../../../util/constants';

export default {
  props: {
    type: 'success',
    title: 'Bien joué !',
    description:
      'Bien vu&nbsp;! Vous avez réussi à démasquer la coupable. Mais il vous manque quelques éléments pour pouvoir résoudre l\'intégralité de cette affaire. Quelques conseils&nbsp;: explorez bien tous les objets dans toutes les pièces, écoutez attentivement ce que vous disent les suspects et prenez des notes en vous aidant de la grille prévue à cet effet. Et si jamais vous souhaitez affûter votre esprit critique avant de retenter votre chance, voici une série de cours sur les biais cognitifs et l\'art de l\'argumentation. Bonne chance&nbsp;!<ul><li> « <a href="https://test-work-please.coorpacademy.com/discipline/dis_N1YkPKISF">L’art de l’argumentation</a> » (Luc de Brabandere et Anne Mikolajczak)</li><li>« <a href="https://test-work-please.coorpacademy.com/discipline/dis_V1fuL0lhv">Maîtriser ses biais cognitifs pour mieux décider</a> » (Olivier Sibony)</li><li>« <a href="https://test-work-please.coorpacademy.com/discipline/dis_4k3JIh7dY">S’informer à l’ère de la désinformation</a> » (Coorpacademy)</li><li>« <a href="https://test-work-please.coorpacademy.com/discipline/dis_4J0Tgd53V">Les biais cognitifis : pièges de la pensée</a> » (Luc de Brabandere et Anne Mikolajczak)</li></ul>',
    mediaDescription: 'Pour réussir ce module, nous pensons que cette video pourrait vous aider.',
    media: {
      type: 'video',
      description: '',
      subtitles: [],
      posters: [],
      src: [
        {
          _id: '5a44c028517f47370971ee87',
          mimeType: 'application/jwplayer',
          jwpOptions: {
            playerId: '12345',
            file: 'https://content.jwplatform.com/videos/nTXhramY-720.mp4',
            playerScript: JWPLAYER_SCRIPT_URL,
            licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
            customProps: {
              tracks: [
                {
                  file: 'https://s3.eu-west-2.amazonaws.com/kickassstarter/-.txt',
                  label: 'English',
                  kind: 'captions',
                  default: true
                }
              ],
              autostart: 'viewable',
              width: '100%',
              height: '100%'
            }
          },
          onPlay: () => console.log('onPlay jwp'),
          onResume: () => console.log('onResume jwp'),
          onPause: () => console.log('onPause jwp'),
          onEnded: () => console.log('onEnded jwp')
        }
      ]
    }
  }
};
