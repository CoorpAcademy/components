import {defaultsDeep} from 'lodash/fp';
import Card from '../../../../../molecule/card/test/fixtures/default';
import {JWPLAYER_SCRIPT_URL} from '../../../../../util/constants';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      feedback: {
        type: 'success',
        title: 'VOTRE ATOUT SÉDUCTION: LA VIVACITÉ D’ESPRIT (MAJORITÉ DE C).',
        mediaDescription: 'media title',
        description:
          'Au premier abord, on vous prend pour une Madame Bluff. Qui tente, à coups de blablabla pêché dans la collection « Pour les Nuls », d’impressionner la galerie. Tout faux. Car, lorsqu’on vous sert des arguments un peu pointus sur un sujet, vous dégainez sans problème de vraies connaissances. Inflexible. Cultivée. Apte à discourir, en une bouteille de bourgueil, de la Cour des comptes, de la crise malienne ou de l’expo Dalienne. Vous parlez bien, comme un dico. Et vous avez l’esprit qui fuse, capable d’anticiper une réaction, de réconforter avec les bons mots, d’analyser une émotion. Vient le temps des conseils : soyez vigilante, par votre agilité, à ne pas écraser l’autre, plus lent. Veillez aussi à savoir vous taire pour mieux écouter. Un garçon aime bien briller, éblouir. Respectez son temps de parole, apprenez de lui, que le dating devienne un échange et pas une conférence.',
        media: {
          type: 'video',
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
      },
      action: {
        type: 'nextCourse',
        prefix: 'Next chapter:',
        title: 'Le prochain chapitre qui a un titre vraiment trop long',
        card: Card.props
      },
      header: {
        type: 'popinEnd',
        cta: {
          title: 'Home',
          type: 'home',
          href: '#'
        }
      }
    }
  }
});
