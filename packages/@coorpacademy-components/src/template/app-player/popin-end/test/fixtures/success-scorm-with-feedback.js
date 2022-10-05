import {defaultsDeep} from 'lodash/fp';
import correct from './scorm-correct';

export default defaultsDeep(correct, {
  props: {
    mode: 'scorm',
    summary: {
      feedback: {
        type: 'success',
        title: 'VOTRE ATOUT SÉDUCTION: LA VIVACITÉ D’ESPRIT (MAJORITÉ DE C).',
        description:
          'Au premier abord, on vous prend pour une Madame Bluff. Qui tente, à coups de blablabla pêché dans la collection « Pour les Nuls », d’impressionner la galerie. Tout faux. Car, lorsqu’on vous sert des arguments un peu pointus sur un sujet, vous dégainez sans problème de vraies connaissances. Inflexible. Cultivée. Apte à discourir, en une bouteille de bourgueil, de la Cour des comptes, de la crise malienne ou de l’expo Dalienne. Vous parlez bien, comme un dico. Et vous avez l’esprit qui fuse, capable d’anticiper une réaction, de réconforter avec les bons mots, d’analyser une émotion. Vient le temps des conseils : soyez vigilante, par votre agilité, à ne pas écraser l’autre, plus lent. Veillez aussi à savoir vous taire pour mieux écouter. Un garçon aime bien briller, éblouir. Respectez son temps de parole, apprenez de lui, que le dating devienne un échange et pas une conférence.',
        media: {
          type: 'img',
          src: [
            {
              url: 'http://www.sommeildavantage.com/img/fauteuil-massage/bienfaits/fauteuil-massage-bienfaits-esprit-vivacite-esprit.jpg'
            }
          ]
        }
      }
    }
  }
});
