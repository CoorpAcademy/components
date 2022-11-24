import noop from 'lodash/fp/noop';
import {ReviewSlide} from '../..';

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
