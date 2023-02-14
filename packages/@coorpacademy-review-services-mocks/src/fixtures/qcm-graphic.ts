import type {SlideFromAPI} from '@coorpacademy/review-services';

export const createQcmGraphicSlide = (
  universalRef: string,
  medias?: SlideFromAPI['question']['medias']
): SlideFromAPI => ({
  question: {
    medias: medias || [],
    content: {
      media: {
        src: [],
        posters: [],
        subtitles: []
      },
      choices: [
        {
          media: {
            src: [
              {
                _id: '616dbbb61a50f8051c1971ba',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_180530003-1618999931321.jpg',
                id: '616dbbb61a50f8051c1971ba'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '616dbbb61a50f8051c1971b9',
          label: 'La consolidation des acquis',
          value: 'sli_4k5O3zaN5.choice_E1ebZYyF8q',
          id: '616dbbb61a50f8051c1971b9'
        },
        {
          media: {
            src: [
              {
                _id: '616dbbb61a50f8051c1971bc',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_1170951868-1618999931510.jpg',
                id: '616dbbb61a50f8051c1971bc'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '616dbbb61a50f8051c1971bb',
          label: 'Le retour d’information',
          value: 'sli_4k5O3zaN5.choice_NygF~FJFIc',
          id: '616dbbb61a50f8051c1971bb'
        },
        {
          media: {
            src: [
              {
                _id: '616dbbb61a50f8051c1971be',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_439207960-1618999931642.jpg',
                id: '616dbbb61a50f8051c1971be'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '616dbbb61a50f8051c1971bd',
          label: 'L’engagement actif',
          value: 'sli_4k5O3zaN5.choice_4yx5bKJKIc',
          id: '616dbbb61a50f8051c1971bd'
        },
        {
          media: {
            src: [
              {
                _id: '616dbbb61a50f8051c1971c0',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_538654849-1618999935091.jpg',
                id: '616dbbb61a50f8051c1971c0'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '616dbbb61a50f8051c1971bf',
          label: 'La motivation',
          value: 'sli_4k5O3zaN5.choice_VkzcZY1F8q',
          id: '616dbbb61a50f8051c1971bf'
        },
        {
          media: {
            src: [
              {
                _id: '616dbbb61a50f8051c1971c2',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_485162803-1618999941454.jpg',
                id: '616dbbb61a50f8051c1971c2'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '616dbbb61a50f8051c1971c1',
          label: 'L’attention',
          value: 'sli_4k5O3zaN5.choice_Vken~YJFI5',
          id: '616dbbb61a50f8051c1971c1'
        },
        {
          media: {
            src: [
              {
                _id: '616dbbb61a50f8051c1971c4',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_374136655-1619000050478.jpg',
                id: '616dbbb61a50f8051c1971c4'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '616dbbb61a50f8051c1971c3',
          label: 'La confiance en soi',
          value: 'sli_4k5O3zaN5.choice_4JgpWKkFLq',
          id: '616dbbb61a50f8051c1971c3'
        },
        {
          media: {
            src: [
              {
                _id: '616dbbb61a50f8051c1971c6',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_142530529-1618999997389.jpg',
                id: '616dbbb61a50f8051c1971c6'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '616dbbb61a50f8051c1971c5',
          label: 'La capacité d’abstraction',
          value: 'sli_4k5O3zaN5.choice_NJfabKkK8q',
          id: '616dbbb61a50f8051c1971c5'
        },
        {
          media: {
            src: [
              {
                _id: '616dbbb61a50f8051c1971c8',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_5948041-1618999993222.jpg',
                id: '616dbbb61a50f8051c1971c8'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '616dbbb61a50f8051c1971c7',
          label: 'L’abnégation',
          value: 'sli_4k5O3zaN5.choice_41xAWYJYI9',
          id: '616dbbb61a50f8051c1971c7'
        }
      ],
      answers: [
        [
          'La consolidation des acquis',
          'Le retour d’information',
          'L’engagement actif',
          'L’attention'
        ]
      ]
    },
    type: 'qcmGraphic',
    header: 'Quels sont les 4 piliers de l’apprentissage ?',
    explanation: 'Sélectionnez les 4 bonnes réponses.'
  },
  klf: 'Avec l’engagement actif, le retour d’information et la consolidation des acquis, l’attention est le premier des quatre piliers de l’apprentissage, identifiés par les chercheurs en neuroscience, spécialistes de l’éducation.',
  tips: 'Une configuration idéale pour l’apprentissage, mettant en œuvre ces 4 piliers : présenter à un apprenant un contenu de durée raisonnable, qui respecte le temps d’attention qu’il peut lui accorder ; proposer ensuite un exercice sur le contenu qui vient d’être expliqué ; puis donner à l’apprenant un retour en direct sur sa production.',
  universalRef,
  _id: universalRef,
  parentContentTitle: {
    title: 'Developing the review app',
    type: 'course'
  }
});
