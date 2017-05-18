// @flow
import {type Slide} from '../../types';

const slides: Array<Slide> = [
  {
    _id: '1.A1.1',
    klf: "Le Knowledge Graph apporte en effet des compléments d'informations à une requête. Pour le moment, il se cantonne à des œuvres, des monuments, des personnages célèbres… Pour cela, vous obtenez des informations classiques mais aussi un carrousel comprenant des photos, des œuvres connexes et des lieux dans la même zone géographique...\n",
    tips: "Certains spécialistes affirment que le Knowledge Graph diminuerait le trafic de Wikipédia… Et ce, alors que Google est l'un des principaux donateurs de Wikipédia.\n",
    chapter_id: '1.A1',
    authors: [],
    context: {
      media: {
        subtitles: [],
        posters: [],
        src: []
      }
    },
    meta: {
      updatedAt: '2017-05-11T15:21:54.071Z',
      createdAt: '2017-05-11T15:21:54.071Z'
    },
    lessons: [
      {
        type: 'video',
        poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
        description: 'Le concept de Knowledge Graph',
        mimeType: 'application/vimeo',
        videoId: '89404998\n',
        _id: '590b862e2e967f64333ad45f',
        subtitles: [],
        posters: [],
        src: []
      }
    ],
    question: {
      type: 'qcm',
      header: "Qu'est-ce que le Knowledge Graph de Google ?",
      explanation: 'Sélectionnez la bonne réponse.',
      content: {
        maxTypos: null,
        answers: [['foo', 'bar']],
        choices: [
          {
            label: 'Une invention prometteuse, mais abandonnée en 2002\n',
            value: 'discipline_1.module_avance.chapter_1.slide_1.choice1',
            _id: '590b862e2e967f64333ad463',
            items: [],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          },
          {
            label: 'Un test de QI développé par le moteur de recherche',
            value: 'discipline_1.module_avance.chapter_1.slide_1.choice2',
            _id: '590b862e2e967f64333ad462',
            items: [],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          },
          {
            label: "Un nouvel outil pour enrichir le résultat d'une requête",
            value: 'discipline_1.module_avance.chapter_1.slide_1.choice3',
            _id: '590b862e2e967f64333ad461',
            items: [],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          },
          {
            label: 'Un graphique à télécharger et à colorier',
            value: 'discipline_1.module_avance.chapter_1.slide_1.choice4',
            _id: '590b862e2e967f64333ad460',
            items: [],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          }
        ],
        media: {
          subtitles: [],
          posters: [],
          src: []
        }
      },
      medias: []
    }
  },
  {
    _id: '1.A1.2',
    klf: "Le Knowledge Graph est donc un moyen de rassembler des informations clés autour d'un personnage célèbre par exemple. Mais aussi autour d'autres individus liés à celui-ci. En cela, il enrichit la recherche avec des éléments qui font sens.\n",
    tips: "La serendipité, vous connaissez ? C'est de découvrir de nouvelles choses de façon inattendue. Un peu comme le Knowledge Graph, donc.\n",
    chapter_id: '1.A1',
    authors: [],
    context: {
      media: {
        subtitles: [],
        posters: [],
        src: []
      }
    },
    meta: {
      updatedAt: '2017-05-11T15:21:54.233Z',
      createdAt: '2017-05-11T15:21:54.233Z'
    },
    lessons: [
      {
        type: 'video',
        poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
        description: 'Le concept de Knowledge Graph',
        mimeType: 'application/vimeo',
        videoId: '89404998\n',
        _id: '590b862e2e967f64333ad464',
        subtitles: [],
        posters: [],
        src: []
      }
    ],
    question: {
      type: 'qcmDrag',
      header: "Quels types d'éléments peut-on trouver dans la fenêtre relative au Knowledge Graph ?",
      explanation: 'Déplacez les bonnes réponses dans la colonne de droite.',
      content: {
        matchOrder: false,
        maxTypos: null,
        answers: [['bar', 'foo']],
        choices: [
          {
            label: 'Des photos',
            value: 'discipline_1.module_avance.chapter_1.slide_2.choice1',
            _id: '590b862e2e967f64333ad469',
            items: [],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          },
          {
            label: 'Des bannières publicitaires',
            value: 'discipline_1.module_avance.chapter_1.slide_2.choice2',
            _id: '590b862e2e967f64333ad468',
            items: [],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          },
          {
            label: 'Des recherches associées',
            value: 'discipline_1.module_avance.chapter_1.slide_2.choice3',
            _id: '590b862e2e967f64333ad467',
            items: [],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          },
          {
            label: 'Une date de naissance',
            value: 'discipline_1.module_avance.chapter_1.slide_2.choice4',
            _id: '590b862e2e967f64333ad466',
            items: [],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          },
          {
            label: 'La liste des courses à faire',
            value: 'discipline_1.module_avance.chapter_1.slide_2.choice5',
            _id: '590b862e2e967f64333ad465',
            items: [],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          }
        ],
        media: {
          subtitles: [],
          posters: [],
          src: []
        }
      },
      medias: []
    }
  },
  {
    _id: '1.A1.3',
    klf: "En retenant l'internaute plus longtemps sur ses pages via le Knowledge Graph, Google monétise mieux ses publicités, tout en affichant plus de résultats provenant de son écosystème : maps, images…\n",
    tips: "Le site le plus visité au monde en 2013, c'est… Google. (source Nielsen)\n",
    chapter_id: '1.A1',
    authors: [],
    context: {
      media: {
        subtitles: [],
        posters: [],
        src: []
      }
    },
    meta: {
      updatedAt: '2017-05-11T15:21:54.256Z',
      createdAt: '2017-05-11T15:21:54.256Z'
    },
    lessons: [
      {
        type: 'video',
        poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
        description: 'Le concept de Knowledge Graph',
        mimeType: 'application/vimeo',
        videoId: '89404998\n',
        _id: '590b862e2e967f64333ad46a',
        subtitles: [],
        posters: [],
        src: []
      }
    ],
    question: {
      type: 'qcm',
      header: 'En enrichissant ses résultats, Google cherche aussi à…\n',
      explanation: 'Sélectionnez la bonne réponse dans la liste déroulante.',
      content: {
        matchOrder: false,
        template: '{{sel11921}}',
        maxTypos: null,
        choices: [
          {
            name: 'sel11921',
            label: ' ',
            type: 'select',
            _id: '590b862e2e967f64333ad46b',
            items: [
              {
                text: 'Être le leader des moteurs de recherche',
                value: 'discipline_1.module_avance.chapter_1.slide_3.choice1',
                _id: '590b862e2e967f64333ad46e'
              },
              {
                text: 'Vendre plus de publicité',
                value: 'discipline_1.module_avance.chapter_1.slide_3.choice2',
                _id: '590b862e2e967f64333ad46d'
              },
              {
                text: 'En savoir plus sur ses clients',
                value: 'discipline_1.module_avance.chapter_1.slide_3.choice3',
                _id: '590b862e2e967f64333ad46c'
              }
            ],
            media: {
              subtitles: [],
              posters: [],
              src: []
            }
          }
        ],
        media: {
          subtitles: [],
          posters: [],
          src: []
        },
        answers: []
      },
      medias: []
    }
  },
  {
    _id: '1.A1.4',
    klf: "Le Knowledge Graph vampirise 40% d'une page de résultats. Certes, toutes les requêtes ne sont pas concernées, mais si votre activité peut en profiter, vous avez là une merveilleuse vitrine !\n",
    tips: 'Un conseil : cherchez un lien entre votre activité et le Knowledge Graph.\n',
    chapter_id: '1.A1',
    authors: [],
    context: {
      media: {
        subtitles: [],
        posters: [],
        src: []
      }
    },
    meta: {
      updatedAt: '2017-05-30T13:01:53.025Z',
      createdAt: '2017-05-30T13:01:53.025Z'
    },
    lessons: [
      {
        type: 'video',
        poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
        description: 'Le concept de Knowledge Graph',
        mimeType: 'application/vimeo',
        videoId: '89404998\n',
        _id: '590b862e2e967f64333ad46f',
        subtitles: [],
        posters: [],
        src: []
      }
    ],
    question: {
      type: 'qcm',
      header: "Quelle proportion du volume d'une page de résultats occupe le Knowledge Graph ?",
      explanation: 'Faites glisser le curseur.',
      content: {
        id: 'discipline_1.module_avance.chapter_1.slide_4.title',
        min: 0,
        max: 100,
        defaultValue: 0,
        unitLabel: '%\n',
        maxTypos: null,
        choices: [],
        media: {
          subtitles: [],
          posters: [],
          src: []
        },
        answers: []
      },
      medias: []
    }
  },
  {
    _id: '2.A1.1',
    chapter_id: '2.A1',
    question: {
      type: 'basic',
      content: {
        answers: [['bar'], ['baz']]
      }
    }
  },
  {
    _id: '2.A1.2',
    chapter_id: '2.A1',
    question: {
      type: 'basic',
      content: {
        maxTypos: 5,
        answers: [['foooooooooooooo']]
      }
    }
  }
];

export default slides;
