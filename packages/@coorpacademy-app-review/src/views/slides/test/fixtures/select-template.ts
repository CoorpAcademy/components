import noop from 'lodash/fp/noop';
import {SlideFromAPI, UISlide} from '../../../../types/common';

export const selectTemplateSlide: SlideFromAPI = {
  question: {
    content: {
      template:
        'La vue {{sel80495}} présente la liste des utilisateurs ayant le plus grand nombre d’étoiles cumulées.',
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
        }
      ]
    },
    type: 'template',
    header: 'Complétez la phrase ci-dessous.',
    explanation:
      'Saisissez votre réponse ou sélectionnez la bonne réponse dans le(s) menu(s) déroulant(s).'
  },
  klf: 'L’apprenant peut aussi évaluer sa performance grâce à un classement disponible sur la vue leaderboard. Elle compare sa position par rapport à celle des autres apprenants de la plateforme.',
  tips: "La position d'un apprenant peut être aussi consultée depuis le header ou en-tête de la page. Elle se met à jour à chaque fois qu'un apprenant obtient des étoiles.",
  universalRef: 'sli_N13-hG3kX',
  id: 'sli_N13-hG3kX',
  parentContentTitle: {
    title: 'Developing the review app',
    type: 'course'
  }
};

export const selectTemplateUISlide: Partial<UISlide> = {
  questionText: 'Complétez la phrase ci-dessous.',
  answerUI: {
    help: 'Saisissez votre réponse ou sélectionnez la bonne réponse dans le(s) menu(s) déroulant(s).',
    model: {
      type: 'template',
      template:
        'La vue {{sel80495}} présente la liste des utilisateurs ayant le plus grand nombre d’étoiles cumulées.',
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
        }
      ]
    }
  }
};
