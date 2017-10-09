import set from 'lodash/fp/set';
import {UI_TOGGLE_ACCORDION} from '../../../../ui/corrections';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS} from '../../../../api/answers';

export const accordionIsOpenAt = i => [
  [
    {
      type: UI_TOGGLE_ACCORDION,
      payload: {
        id: i
      }
    }
  ]
];

export const fetchCorrection = [
  [
    {
      type: ANSWER_FETCH_REQUEST,
      meta: {
        progressionId: 'foo',
        slideId: 'baz'
      }
    },
    set('ui.answers.0.correction', null, {})
  ],
  [
    {
      type: ANSWER_FETCH_SUCCESS,
      meta: {
        progressionId: 'foo',
        slideId: 'baz'
      },
      payload: ['Bonne réponse']
    },
    set('ui.answers.0.correction', 'Bonne réponse', {})
  ]
];
