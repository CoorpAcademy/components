import noop from 'lodash/fp/noop';
import type {SlideFromAPI} from '@coorpacademy/review-services';
import {ReviewSlide} from '../..';

export const templateSlide: SlideFromAPI = {
  question: {
    medias: [],
    content: {
      template:
        'La vue {{sel80495}} présente la liste des   {{inp58402}}   ayant le plus grand nombre d’{{sel80496}} cumulées.',
      choices: [
        {
          items: [
            {
              _id: '5b57464e3b594d002e8829f7',
              value: 'sli_N13-hG3kX.choice_NJgC3aznJm',
              text: 'Catalogue'
            },
            {
              _id: '5b57464e3b594d002e8829f6',
              value: 'sli_N13-hG3kX.choice_EJZ02aMny7',
              text: 'Leaderboard'
            },
            {
              _id: '5b57464e3b594d002e8829f5',
              value: 'sli_N13-hG3kX.choice_4keCaf21Q',
              text: 'Activité'
            },
            {
              _id: '5b57464e3b594d002e8829f4',
              value: 'sli_N13-hG3kX.choice_NkbJAMn17',
              text: 'Slides'
            }
          ],
          _id: '5b57464e3b594d002e8829f3',
          name: 'sel80495',
          type: 'select'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '62433c2c58920f02c4950de0',
          type: 'text',
          name: 'inp58402',
          id: '62433c2c58920f02c4950de0'
        },
        {
          items: [
            {
              _id: '5b57464e3b594d002e8829f7',
              value: 'sli_N13-hG3kX.choice_NJgC3aznJm',
              text: 'étoiles'
            },
            {
              _id: '5b57464e3b594d002e8829f6',
              value: 'sli_N13-hG3kX.choice_EJZ02aMny7',
              text: 'idées'
            },
            {
              _id: '5b57464e3b594d002e8829f5',
              value: 'sli_N13-hG3kX.choice_4keCaf21Q',
              text: 'envies'
            },
            {
              _id: '5b57464e3b594d002e8829f4',
              value: 'sli_N13-hG3kX.choice_NkbJAMn17',
              text: 'images'
            }
          ],
          _id: '5b57464e3b594d002e8829f3',
          name: 'sel80496',
          type: 'select'
        }
      ],
      answers: [['Leaderboard', 'utilisateurs', 'étoiles']]
    },
    type: 'template',
    header: 'Complétez la phrase ci-dessous.',
    explanation:
      'Saisissez votre réponse ou sélectionnez la bonne réponse dans le(s) menu(s) déroulant(s).'
  },
  klf: 'L’apprenant peut aussi évaluer sa performance grâce à un classement disponible sur la vue leaderboard. Elle compare sa position par rapport à celle des autres apprenants de la plateforme.',
  tips: "La position d'un apprenant peut être aussi consultée depuis le header ou en-tête de la page. Elle se met à jour à chaque fois qu'un apprenant obtient des étoiles.",
  universalRef: 'sli_N13-hG3kX',
  _id: 'sli_N13-hG3kX',
  parentContentTitle: {
    title: 'Developing the review app',
    type: 'course'
  }
};

export const templateUISlide: Partial<ReviewSlide> = {
  questionText: 'Complétez la phrase ci-dessous.',
  answerUI: {
    help: 'Saisissez votre réponse ou sélectionnez la bonne réponse dans le(s) menu(s) déroulant(s).',
    model: {
      type: 'template',
      template:
        'La vue {{sel80495}} présente la liste des   {{inp58402}}   ayant le plus grand nombre d’{{sel80496}} cumulées.',
      answers: [
        {
          type: 'select',
          name: 'sel80495',
          onChange: noop,
          options: [
            {name: 'Select an answer', value: '', validOption: false, selected: true},
            {
              name: 'Catalogue',
              value: 'Catalogue',
              validOption: true,
              selected: false
            },
            {
              name: 'Leaderboard',
              value: 'Leaderboard',
              validOption: true,
              selected: false
            },
            {
              name: 'Activité',
              value: 'Activité',
              validOption: true,
              selected: false
            },
            {
              name: 'Slides',
              value: 'Slides',
              validOption: true,
              selected: false
            }
          ]
        },
        {
          type: 'text',
          name: 'inp58402',
          placeholder: 'Type here',
          value: undefined,
          onChange: noop
        },
        {
          type: 'select',
          name: 'sel80496',
          onChange: noop,
          options: [
            {name: 'Select an answer', value: '', validOption: false, selected: true},
            {
              name: 'étoiles',
              value: 'étoiles',
              validOption: true,
              selected: false
            },
            {
              name: 'idées',
              value: 'idées',
              validOption: true,
              selected: false
            },
            {
              name: 'envies',
              value: 'envies',
              validOption: true,
              selected: false
            },
            {
              name: 'images',
              value: 'images',
              validOption: true,
              selected: false
            }
          ]
        }
      ]
    }
  }
};
