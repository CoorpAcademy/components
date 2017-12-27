import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../../molecule/card/test/fixtures/default';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      action: {
        type: 'nextCourse',
        prefix: 'Next Level:',
        title: 'Le prochain Niveau qui a un titre vraiment trop long',
        card: Card.props
      },
      header: {
        cta: {
          title: 'Next Level',
          type: 'home',
          href: '#'
        }
      }
    }
  }
});


// "_id": "5a424d45b4459b8ac8b62703",
// "ref": "biba-exit-node-C",
// "type": "success",
// "title": "VOTRE ATOUT SÉDUCTION: LA VIVACITÉ D’ESPRIT (MAJORITÉ DE C).",
// "description": "Au premier abord, on vous prend pour une Madame Bluff. Qui tente, à coups de blablabla pêché dans la collection « Pour les Nuls », d’impressionner la galerie. Tout faux. Car, lorsqu’on vous sert des arguments un peu pointus sur un sujet, vous dégainez sans problème de vraies connaissances. Inflexible. Cultivée. Apte à discourir, en une bouteille de bourgueil, de la Cour des comptes, de la crise malienne ou de l’expo Dalienne. Vous parlez bien, comme un dico. Et vous avez l’esprit qui fuse, capable d’anticiper une réaction, de réconforter avec les bons mots, d’analyser une émotion. Vient le temps des conseils : soyez vigilante, par votre agilité, à ne pas écraser l’autre, plus lent. Veillez aussi à savoir vous taire pour mieux écouter. Un garçon aime bien briller, éblouir. Respectez son temps de parole, apprenez de lui, que le dating devienne un échange et pas une conférence.",
// "__v": 0,
// "meta": {
//   "updatedAt": "2017-12-26T13:44:15.911Z",
//   "createdAt": "2017-12-26T13:44:15.911Z"
// },
// "media": {
//   "type": "img",
//   "subtitles": [],
//   "posters": [],
//   "src": [
//     {
//       "_id": "5a424d3a1bc4122ae787d6b0",
//       "url": "http://www.sommeildavantage.com/img/fauteuil-massage/bienfaits/fauteuil-massage-bienfaits-esprit-vivacite-esprit.jpg",
//       "mimeType": "image/jpeg"
//     }
//   ]
// }
