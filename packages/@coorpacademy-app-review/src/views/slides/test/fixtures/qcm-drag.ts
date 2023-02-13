import type {SlideFromAPI} from '@coorpacademy/review-services';
import noop from 'lodash/fp/noop';
import {ReviewSlide} from '../..';

export const qcmDragSlide: SlideFromAPI = {
  question: {
    medias: [],
    content: {
      media: {
        src: [],
        posters: [],
        subtitles: []
      },
      choices: [
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '624f01970a234b0333bc7ce8',
          label: 'La démoralisation',
          value: 'sli_4yGBq-mCg.choice_4kRL5uQCg',
          id: '624f01970a234b0333bc7ce8'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '624f01970a234b0333bc7ce9',
          label: 'La stagnation',
          value: 'sli_4yGBq-mCg.choice_E11v9OXAx',
          id: '624f01970a234b0333bc7ce9'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '624f01970a234b0333bc7cea',
          label: 'La frustration',
          value: 'sli_4yGBq-mCg.choice_N1lP9dmRg',
          id: '624f01970a234b0333bc7cea'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '624f01970a234b0333bc7ceb',
          label: "L'implication",
          value: 'sli_4yGBq-mCg.choice_Eybw5dQCx',
          id: '624f01970a234b0333bc7ceb'
        }
      ],
      answers: [['L’implication', 'La frustration', 'La frustration', 'La démoralisation']]
    },
    type: 'qcmDrag',
    header: "Remettez dans l'ordre les quatre étapes du burn out.",
    explanation: 'Sélectionnez les réponses ci-dessous dans le bon ordre.'
  },
  klf: "Le burn out s'installe en quatre étapes : tout d'abord, l'implication (investissement émotionnel et/ou affectif, sacrifice de sa vie privée) ; en second, la stagnation (premières déceptions, signes de fatigue) ; ensuite, la frustration (efforts non reconnus) ; et enfin, la démoralisation (problèmes de concentration, sentiment d'inutilité, désespoir).",
  tips: "Encadré par la loi, l'entretien professionnel a pour but d'aider le collaborateur à verbaliser ses difficultés et à construire son projet professionnel.",
  universalRef: 'sli_4yGBq-mCg',
  _id: 'sli_4yGBq-mCg',
  parentContentTitle: {
    title: 'Using redux',
    type: 'chapter'
  }
};

export const qcmDragUISlide: Partial<ReviewSlide> = {
  questionText: "Remettez dans l'ordre les quatre étapes du burn out.",
  answerUI: {
    help: 'Sélectionnez les réponses ci-dessous dans le bon ordre.',
    model: {
      type: 'qcmDrag',
      answers: [
        {
          title: 'La démoralisation',
          selected: false,
          order: -1,
          onClick: noop
        },
        {
          title: 'La stagnation',
          selected: false,
          order: -1,
          onClick: noop
        },
        {
          title: 'La frustration',
          selected: false,
          order: -1,
          onClick: noop
        },
        {
          title: "L'implication",
          selected: false,
          order: -1,
          onClick: noop
        }
      ]
    }
  }
};
