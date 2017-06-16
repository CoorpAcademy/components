import defaultsDeep from 'lodash/fp/defaultsDeep';
import loading from './loading';

export default defaultsDeep(loading, {
  props: {
    header: {
      fail: false,
      title: 'Good Job',
      subtitle: 'Bonne réponse',
      cta: {
        title: 'Continue'
      }
    },
    question: {
      header: 'Par quel moyen les entreprises peuvent-elles connaître leur popularité sur les réseaux sociaux ?',
      answerPrefix: 'Bonne réponse:',
      answer: "Grâce à des outils d'analyse et de surveillance"
    },
    resources: {
      value: [
        {
          type: 'video',
          mimeType: 'application/vimeo',
          videoId: '166479793',
          description: 'De l’éco-conception à l’innovation responsable',
          poster: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
          _id: '590b9be24f7b862e0046e577',
          subtitles: [],
          posters: [],
          src: [],
          selected: true,
          onClick: () => {}
        },
        {
          type: 'video',
          mimeType: 'application/vimeo',
          videoId: '166479793',
          description: 'De l’éco-conception à l’innovation responsable',
          poster: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
          _id: '590b9be24f7b862e0046e577',
          subtitles: [],
          posters: [],
          src: [],
          selected: false,
          onClick: () => {}
        },
        {
          type: 'video',
          mimeType: 'application/vimeo',
          videoId: '166479793',
          description: 'De l’éco-conception à l’innovation responsable',
          poster: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
          _id: '590b9be24f7b862e0046e577',
          subtitles: [],
          posters: [],
          src: [],
          selected: false,
          onClick: () => {}
        }
      ]
    },
    klf: {
      value: "Les éco-innovations sont divisées en 3 catégories : intégrées, radicales et économie de la fonctionnalité. La dernière consiste à remplacer un produit par un service. C'est par exemple le cas du système Vélib'."
    },
    tips: {
      value: 'Les smart cities, ou villes intelligentes, portent des solutions dans lesquelles se conjuguent les 3 types d’éco-innovations. En France, il en existait vingt début 2016, la plus grande étant Paris.'
    }
  }
});
