import defaultsDeep from 'lodash/fp/defaultsDeep';
import loading from './loading';

const resourceValues = [
  {
    type: 'video',
    mimeType: 'application/vimeo',
    videoId: '166479793',
    description: 'De l’éco-conception à l’innovation responsable',
    poster:
      '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
    _id: '590b9be24f7b862e0046e577',
    subtitles: [],
    posters: [],
    src: [],
    selected: true
  },
  {
    type: 'pdf',
    description: "Chapitre 1. Diagramme du l'hiérarchie du contenu.",
    mediaUrl:
      '//static.coorpacademy.com/content/CoorpAcademy/content/cockpit-mooc-technique/raw/hierachie-contenu-1494494029567.pdf',
    _id: '590b9be24f7b862e0046e575',
    subtitles: [],
    posters: [],
    src: [],
    selected: false,
    onClick: () => {}
  },
  {
    type: 'video',
    poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
    description: 'Le concept de Knowledge Graph',
    mimeType: 'application/vimeo',
    videoId: '89404998\n',
    _id: '590b862e2e967f64333ad45f',
    subtitles: [],
    posters: [],
    src: [],
    selected: false
  }
];

export default defaultsDeep(loading, {
  props: {
    header: {
      fail: false,
      corrections: [
        {
          answer: "Grâce à des outils d'analyse et de surveillance",
          isCorrect: true
        }
      ],
      lives: 1,
      title: 'Good Job',
      subtitle: 'Bonne réponse',
      cta: {
        title: 'Continue',
        onClick: () => {}
      }
    },
    question: {
      header:
        'Par quel moyen les entreprises peuvent-elles connaître leur popularité sur les réseaux sociaux ?',
      answerPrefix: 'Bonne réponse:',
      answer: "Grâce à des outils d'analyse et de surveillance"
    },
    resources: {
      value: resourceValues.map(resource => ({
        ...resource,
        onClick: () => console.log(`Selecting "${resource.description}"`)
      }))
    },
    klf: {
      value:
        "Les éco-innovations sont divisées en 3 catégories : intégrées, radicales et économie de la fonctionnalité. La dernière consiste à remplacer un produit par un service. C'est par exemple le cas du système Vélib'."
    },
    tips: {
      value:
        'Les smart cities, ou villes intelligentes, portent des solutions dans lesquelles se conjuguent les 3 types d’éco-innovations. En France, il en existait vingt début 2016, la plus grande étant Paris.'
    },
    onClick: id => console.log(id)
  }
});
