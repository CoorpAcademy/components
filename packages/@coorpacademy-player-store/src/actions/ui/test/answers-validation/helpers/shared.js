import {UI_TOGGLE_ACCORDION} from '../../../corrections';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS} from '../../../../api/answers';
import {PROGRESSION_UPDATED_ON_MOVE} from '../../../../api/analytics';

export const progressionUpdated = [
  {
    type: PROGRESSION_UPDATED_ON_MOVE,
    meta: {
      id: 'foo'
    }
  }
];

export const accordionIsOpenAt = i => [
  {
    type: UI_TOGGLE_ACCORDION,
    payload: {
      id: i
    }
  }
];

export const fetchCorrection = [
  {
    type: ANSWER_FETCH_REQUEST,
    meta: {
      progressionId: 'foo',
      slideId: 'baz'
    }
  },
  {
    type: ANSWER_FETCH_SUCCESS,
    meta: {
      progressionId: 'foo',
      slideId: 'baz'
    },
    payload: ['Bonne réponse']
  }
];
